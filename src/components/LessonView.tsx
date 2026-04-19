import React, { useState } from 'react';
import { Lesson, Quiz } from '../types';
import { LESSON_PROMPTS } from '../data/languages';
import { StudyCards } from './StudyCards';
import './LessonView.css';

interface LessonViewProps {
  lesson: Lesson;
  quiz?: Quiz;
  onStartQuiz: () => void;
  onBack: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  quiz,
  onStartQuiz,
  onBack,
}) => {
  const [showStudy, setShowStudy] = useState(false);
  const prompts = LESSON_PROMPTS[lesson.title] || lesson.vocabulary || [];

  return (
    <div className="lesson-view">
      <div className="lesson-view-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <h2 className="lesson-view-title">{lesson.title}</h2>
      </div>

      <div className="lesson-content-card">
        <div className="lesson-level-badge">{lesson.level}</div>
        <div className="lesson-text">
          <p>{lesson.content}</p>
        </div>

        {lesson.vocabulary && lesson.vocabulary.length > 0 && (
          <div className="vocabulary-section">
            <h3 className="vocabulary-title">Vocabulary</h3>
            <div className="vocabulary-grid">
              {lesson.vocabulary.map((word, index) => (
                <div key={index} className="vocabulary-item">
                  {word}
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowStudy(true)}
              className="study-vocab-button"
            >
              📚 Study Vocabulary
            </button>
          </div>
        )}

        {showStudy && lesson.vocabulary && (
          <StudyCards
            vocabulary={lesson.vocabulary}
            prompts={prompts}
            onClose={() => setShowStudy(false)}
          />
        )}

        {quiz && (
          <div className="quiz-section">
            <h3 className="quiz-section-title">Ready to test your knowledge?</h3>
            <p className="quiz-section-description">
              Take a quiz to practice what you've learned. The Virtual TA will provide
              detailed feedback on your answers.
            </p>
            <button onClick={onStartQuiz} className="start-quiz-button">
              Start Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

