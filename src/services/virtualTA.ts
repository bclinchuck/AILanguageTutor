import { TAFeedback, QuizQuestion } from '../types';
import { getLLMFeedback } from './llmService';
 
export class VirtualTA {
  // ---------------------------------------------------------------------------
  // Primary method — tries LLM first, falls back to rule-based
  // ---------------------------------------------------------------------------
 
  static async analyzeAnswerWithLLM(
    question: QuizQuestion,
    userAnswer: string,
    correctAnswer: string,
    language: string
  ): Promise<TAFeedback> {
    try {
      return await getLLMFeedback(question, userAnswer, correctAnswer, language);
    } catch (err) {
      console.warn('LLM feedback unavailable, using rule-based fallback:', err);
      return this.analyzeAnswer(question, userAnswer, correctAnswer);
    }
  }
 
  // ---------------------------------------------------------------------------
  // Rule-based fallback (kept intact — no changes from your original)
  // ---------------------------------------------------------------------------
 
  static analyzeAnswer(
    question: QuizQuestion,
    userAnswer: string,
    correctAnswer: string
  ): TAFeedback {
    const normalizedUser = userAnswer.trim().toLowerCase();
    const normalizedCorrect = correctAnswer.trim().toLowerCase();
 
    // Exact match
    if (normalizedUser === normalizedCorrect) {
      return {
        understood: `You said "${userAnswer}". This is correct!`,
        adjustments: [],
        suggested: correctAnswer,
        explanation: 'Perfect! Your answer matches the expected response.',
        context: question.context || 'Great job on this question!',
      };
    }
 
    // Close match (handles punctuation, accents, minor typos)
    const isClose = this.isCloseMatch(normalizedUser, normalizedCorrect);
    if (isClose) {
      return {
        understood: `You said "${userAnswer}". This is very close to the correct answer.`,
        adjustments: [
          'Minor differences in spelling, punctuation, or accents',
          'The meaning is correct, but the form could be adjusted',
        ],
        suggested: correctAnswer,
        explanation: `While "${userAnswer}" is close, the standard form is "${correctAnswer}". In real-world language learning, your answer would likely be understood, but for learning purposes, we're aiming for "${correctAnswer}".`,
        context: question.context || 'Your answer shows good understanding of the concept.',
      };
    }
 
    // Alternative accepted answer
    const alternatives = question.alternatives || [];
    const isAlternative = alternatives.some(
      alt => alt.trim().toLowerCase() === normalizedUser
    );
    if (isAlternative) {
      return {
        understood: `You said "${userAnswer}". This is an alternative correct answer!`,
        adjustments: [],
        suggested: correctAnswer,
        explanation: `"${userAnswer}" is also a valid answer. The most common form is "${correctAnswer}", but your answer is correct too.`,
        context: question.context || 'Language often has multiple correct ways to express the same idea.',
      };
    }
 
    // Sentence-building at intermediate+ level
    if (
      question.type === 'sentence' &&
      ['Intermediate', 'Advanced', 'Expert'].includes(question.level)
    ) {
      return this.analyzeSentence(userAnswer, correctAnswer, question);
    }
 
    // Generic incorrect
    return {
      understood: `You said "${userAnswer}". Let me help you understand what might need adjustment.`,
      adjustments: [
        'Check the spelling or word choice',
        'Consider the grammar rules for this level',
        'Review the vocabulary from the lesson',
      ],
      suggested: correctAnswer,
      explanation: `The correct answer is "${correctAnswer}". Here's why: ${this.getExplanationForQuestion(question)}`,
      context: question.context || 'Keep practicing! Language learning is about understanding patterns.',
    };
  }
 
  // ---------------------------------------------------------------------------
  // Helpers (unchanged from your original)
  // ---------------------------------------------------------------------------
 
  static isCloseMatch(user: string, correct: string): boolean {
    const normalize = (str: string) =>
      str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s]/g, '')
        .toLowerCase()
        .trim();
 
    const userNorm = normalize(user);
    const correctNorm = normalize(correct);
 
    if (userNorm === correctNorm) return true;
 
    if (userNorm.includes(correctNorm) || correctNorm.includes(userNorm)) {
      return Math.abs(userNorm.length - correctNorm.length) <= 3;
    }
 
    const longer = userNorm.length > correctNorm.length ? userNorm : correctNorm;
    const shorter = userNorm.length > correctNorm.length ? correctNorm : userNorm;
 
    let matches = 0;
    for (let i = 0; i < shorter.length; i++) {
      if (longer.includes(shorter[i])) matches++;
    }
 
    return matches / shorter.length >= 0.8;
  }
 
  private static analyzeSentence(
    userAnswer: string,
    correctAnswer: string,
    question: QuizQuestion
  ): TAFeedback {
    const userWords = userAnswer.toLowerCase().split(/\s+/);
    const correctWords = correctAnswer.toLowerCase().split(/\s+/);
 
    const commonWords = userWords.filter(word => correctWords.includes(word));
    const accuracy = commonWords.length / Math.max(userWords.length, correctWords.length);
 
    if (accuracy >= 0.7) {
      return {
        understood: `You said "${userAnswer}". You've captured the main idea!`,
        adjustments: [
          'Word order might need adjustment',
          'Some words could be more precise',
          'Grammar structure could be refined',
        ],
        suggested: correctAnswer,
        explanation: `Your sentence "${userAnswer}" conveys the right meaning. The suggested form "${correctAnswer}" follows the standard structure. Both are understandable, but the suggested version is more idiomatic.`,
        context:
          question.context ||
          "In real conversations, your sentence would likely be understood. We're refining it to match native speaker patterns.",
      };
    }
 
    return {
      understood: `You said "${userAnswer}". Let's work on building this sentence.`,
      adjustments: [
        'Review the vocabulary needed for this sentence',
        'Check the grammar structure',
        'Consider the word order',
      ],
      suggested: correctAnswer,
      explanation: `The correct sentence is "${correctAnswer}". Here's the breakdown: ${this.getSentenceBreakdown(correctAnswer)}`,
      context: question.context || 'Building sentences takes practice. Keep working on it!',
    };
  }
 
  private static getExplanationForQuestion(question: QuizQuestion): string {
    switch (question.type) {
      case 'vocabulary':
        return "This is a vocabulary question. Make sure you're using the correct word from the lesson.";
      case 'grammar':
        return 'This is a grammar question. Review the grammar rules covered in this lesson.';
      case 'translation':
        return 'This is a translation question. Consider the context and common usage.';
      case 'sentence':
        return 'This is a sentence-building question. Think about word order and grammar structure.';
      default:
        return 'Review the lesson material and try again.';
    }
  }
 
  private static getSentenceBreakdown(sentence: string): string {
    return `The sentence "${sentence}" follows the standard word order and uses appropriate grammar.`;
  }
}