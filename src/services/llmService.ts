import { TAFeedback, QuizQuestion, Lesson, Level } from '../types';

const OLLAMA_API = 'http://localhost:11434/api/chat';
const MODEL = 'llama3.2'; // Change to any model you have pulled, e.g. 'mistral', 'gemma3'

// ---------------------------------------------------------------------------
// Core fetch helper — calls local Ollama instance
// ---------------------------------------------------------------------------

async function callOllama(systemPrompt: string, userMessage: string): Promise<string> {
  const response = await fetch(OLLAMA_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      stream: false,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Ollama error ${response.status}: ${err}`);
  }

  const data = await response.json();
  return data.message?.content ?? '';
}

// ---------------------------------------------------------------------------
// Helper – strip markdown code fences and parse JSON safely
// ---------------------------------------------------------------------------

function parseJSON<T>(raw: string): T {
  const clean = raw.replace(/```json\s*/gi, '').replace(/```/g, '').trim();
  return JSON.parse(clean) as T;
}

// ---------------------------------------------------------------------------
// TA Feedback
// ---------------------------------------------------------------------------

export async function getLLMFeedback(
  question: QuizQuestion,
  userAnswer: string,
  correctAnswer: string,
  language: string
): Promise<TAFeedback> {
  const system = `You are an encouraging, precise, and proactive language tutor teaching ${language}.
Your job is to evaluate a student's quiz answer and *always* provide corrective, interpretive feedback even for short factual answers.

Rules:
- If the student's answer contains a spelling error, typo, or minor wording issue, treat it charitably: state exactly what they wrote and then state the corrected form and what you think they intended.
- If the answer is correct, acknowledge it and optionally note why briefly.
- If the answer is too short or ambiguous (e.g., a single word), infer the most likely intent and explain your inference.
- Never respond with a bare "yes"/"no" or a one-line factual reply. Always include a brief corrective suggestion or clarification.

Respond ONLY with a valid JSON object — no preamble, no markdown fences — matching this shape exactly:
{
  "understood": "One sentence acknowledging exactly what the student wrote, whether it is correct, and — if different — what you think they meant (e.g. \"Student wrote 'teh' — likely meant 'the'\").",
  "adjustments": ["Specific actionable suggestion (corrections, phrasing, alternatives)", "Another if needed — empty array if the answer is perfect"],
  "suggested": "The ideal corrected answer string (if applicable)",
  "explanation": "2-3 sentences explaining why the suggested form is correct, referencing grammar, spelling, or vocabulary rules where relevant.",
  "context": "A sentence of cultural or real-world usage context to make the lesson memorable."
}`;

  const userMsg = `Language: ${language}
Question type: ${question.type}
Level: ${question.level}
Question: ${question.question}
${question.context ? `Context hint: ${question.context}` : ''}
Student answered: "${userAnswer}"
Correct answer: "${correctAnswer}"
${question.alternatives?.length ? `Also accepted: ${question.alternatives.join(', ')}` : ''}

Evaluate the student's answer and return your JSON feedback.`;

  const raw = await callOllama(system, userMsg);
  return parseJSON<TAFeedback>(raw);
}

// ---------------------------------------------------------------------------
// Lesson generation
// ---------------------------------------------------------------------------

export async function generateLesson(
  language: string,
  topicId: string,
  topicTitle: string,
  level: Level
): Promise<Lesson> {
  const system = `You are an expert language curriculum designer.
Respond ONLY with a valid JSON object — no preamble, no markdown fences — matching this shape exactly:
{
  "id": "a unique kebab-case id string",
  "topicId": "${topicId}",
  "level": "${level}",
  "title": "A clear lesson title",
  "content": "Full lesson content written in clear markdown. Include explanations, examples, and usage tips. Aim for 300-500 words.",
  "vocabulary": ["word1", "word2", "word3"]
}`;

  const userMsg = `Create a ${level}-level ${language} lesson on the topic: "${topicTitle}".
Make the content engaging, accurate, and appropriate for the level.`;

  const raw = await callOllama(system, userMsg);
  return parseJSON<Lesson>(raw);
}