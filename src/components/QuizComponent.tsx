import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Quiz } from '../types';
import { VirtualTA } from '../services/virtualTA';
import { TAFeedback } from '../types';
import { AccentHelper } from './AccentHelper';
import './QuizComponent.css';

interface QuizComponentProps {
  quiz: Quiz;
  languageCode: string;
  languageName: string; // e.g. "Spanish" — pass this in from the parent
  // onComplete receives the final quiz score as a percentage (0-100)
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({
  quiz,
  languageCode,
  languageName,
  onComplete,
  onBack,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState<TAFeedback | null>(null);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false); // NEW
  const [questionScores, setQuestionScores] = useState<number[]>([]);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  // CHANGED: now async, calls LLM with fallback
  const handleSubmit = async () => {
    if (!userAnswer.trim()) return;

    setIsLoadingFeedback(true);

    const taFeedback = await VirtualTA.analyzeAnswerWithLLM(
      currentQuestion,
      userAnswer,
      currentQuestion.correctAnswer,
      languageName // e.g. "Spanish"
    );

    setFeedback(taFeedback);
    setShowFeedback(true);
    setIsLoadingFeedback(false);

    // Simple scoring: exact match (case-insensitive, trimmed) or accepted alternative => 100, else 0
    const normalize = (s: string) => s.trim().toLowerCase();
    const userNorm = normalize(userAnswer);
    const correctNorm = normalize(currentQuestion.correctAnswer);
    const alternatives = currentQuestion.alternatives || [];
    const isCorrect = userNorm === correctNorm || alternatives.map(normalize).includes(userNorm);
    const score = isCorrect ? 100 : 0;

    setQuestionScores(prev => {
      const copy = [...prev];
      copy[currentQuestionIndex] = score;
      return copy;
    });
  };

  const triggerConfetti = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#0b5fff', '#ffd700', '#00c853', '#ff6b6b'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#0b5fff', '#ffd700', '#00c853', '#ff6b6b'],
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // compute average score across questions (treat unanswered as 0)
      const totalQuestions = quiz.questions.length;
      const scores = questionScores.slice(0, totalQuestions);
      while (scores.length < totalQuestions) scores.push(0);
      const sum = scores.reduce((s, v) => s + v, 0);
      const avg = Math.round(sum / totalQuestions);

      triggerConfetti();
      onComplete(avg);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setUserAnswer('');
      setShowFeedback(false);
      setFeedback(null);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h2 className="quiz-title">{quiz.title}</h2>
        <div className="quiz-progress">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </div>
      </div>

      <div className="question-card">
        <div className="question-type">{currentQuestion.type}</div>
        <h3 className="question-text">{currentQuestion.question}</h3>

        {currentQuestion.context && (
          <p className="question-context">{currentQuestion.context}</p>
        )}

        <div className="answer-input">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !showFeedback && !isLoadingFeedback && handleSubmit()}
            placeholder="Type your answer here..."
            disabled={showFeedback || isLoadingFeedback}
            className="answer-field"
            id="quiz-answer-input"
          />
          {!showFeedback && (
            <button
              onClick={handleSubmit}
              className="submit-button"
              disabled={isLoadingFeedback}
            >
              {isLoadingFeedback ? 'Checking...' : 'Submit'}
            </button>
          )}
        </div>

        {!showFeedback && (
          <AccentHelper
            languageCode={languageCode}
            onInsert={(char) => {
              const input = document.getElementById('quiz-answer-input') as HTMLInputElement;
              if (input && !input.disabled) {
                const cursorPos = input.selectionStart || userAnswer.length;
                const newValue = userAnswer.slice(0, cursorPos) + char + userAnswer.slice(cursorPos);
                setUserAnswer(newValue);
                setTimeout(() => {
                  input.focus();
                  input.setSelectionRange(cursorPos + 1, cursorPos + 1);
                }, 0);
              }
            }}
          />
        )}

        {/* Loading state while waiting for LLM */}
        {isLoadingFeedback && (
          <div className="feedback-container">
            <div className="feedback-header">Virtual TA Feedback</div>
            <div className="feedback-content" style={{ textAlign: 'center', padding: '1rem' }}>
              Analyzing your answer...
            </div>
          </div>
        )}

        {showFeedback && feedback && (
          <div className="feedback-container">
            <div className="feedback-header">Virtual TA Feedback</div>

            <div className="feedback-section">
              <div className="feedback-label">What I understood:</div>
              <div className="feedback-content">{feedback.understood}</div>
            </div>

            {feedback.adjustments.length > 0 && (
              <div className="feedback-section">
                <div className="feedback-label">What I would adjust:</div>
                <ul className="adjustments-list">
                  {feedback.adjustments.map((adj, idx) => (
                    <li key={idx}>{adj}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="feedback-section">
              <div className="feedback-label">What I would say:</div>
              <div className="feedback-content suggested">{feedback.suggested}</div>
            </div>

            <div className="feedback-section">
              <div className="feedback-label">Explanation:</div>
              <div className="feedback-content">{feedback.explanation}</div>
            </div>

            {feedback.context && (
              <div className="feedback-section">
                <div className="feedback-content context">{feedback.context}</div>
              </div>
            )}

            <button onClick={handleNext} className="next-button">
              {isLastQuestion ? 'Finish Quiz' : 'Next Question →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};