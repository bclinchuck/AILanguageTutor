import React from 'react';
import { Quiz, UserProgress } from '../types';
import './ProgressBar.css';

interface ProgressBarProps {
  quizzes: Quiz[];
  progress: UserProgress | null;
}

export const ProgressBarImpl: React.FC<ProgressBarProps> = ({ quizzes, progress }) => {
  const completedQuizIds = progress?.completedQuizzes || [];
  const totalQuizzes = quizzes.length;
  const completedQuizzes = quizzes.filter((quiz) => completedQuizIds.includes(quiz.id)).length;

  const percentage = totalQuizzes > 0 ? Math.round((completedQuizzes / totalQuizzes) * 100) : 0;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-header">
        <span className="progress-bar-label">Overall progress</span>
        <span className="progress-bar-value">
          {percentage}% ({completedQuizzes}/{totalQuizzes} quizzes completed)
        </span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBarImpl;
