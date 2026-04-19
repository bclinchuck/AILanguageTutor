import React from 'react';
import { Lesson, Level, Quiz, UserProgress } from '../types';
import './LessonList.css';

interface LessonListProps {
  lessons: Lesson[];
  level: Level;
  onSelectLesson: (lesson: Lesson) => void;
  quizzes?: Quiz[];
  progress?: UserProgress | null;
}

export const LessonList: React.FC<LessonListProps> = ({
  lessons,
  level,
  onSelectLesson,
  quizzes = [],
  progress = null,
}) => {
  const filteredLessons = lessons.filter(lesson => lesson.level === level);

  if (filteredLessons.length === 0) {
    return (
      <div className="lesson-list">
        <p className="no-lessons">No lessons available for this level yet.</p>
      </div>
    );
  }

  return (
    <div className="lesson-list">
      <h2 className="section-title">Lessons - {level}</h2>
      <div className="lessons-grid">
        {filteredLessons.map((lesson) => {
          const lessonCompleted = progress?.completedLessons.includes(lesson.id) || false;
          const lessonQuiz = quizzes.find(q => q.lessonId === lesson.id);
          const quizCompleted = lessonQuiz ? (progress?.completedQuizzes.includes(lessonQuiz.id) || false) : false;

          return (
            <div
              key={lesson.id}
              className={`lesson-card ${(lessonCompleted || quizCompleted) ? 'completed' : ''}`}
              onClick={() => onSelectLesson(lesson)}
            >
              <div className="lesson-header">
                <h3 className="lesson-title">{lesson.title}</h3>
                <div className="completion-indicator" title={lessonCompleted || quizCompleted ? 'Completed' : 'Not completed'}>
                  {(lessonCompleted || quizCompleted) ? (
                    <span className="checkmark">✓</span>
                  ) : (
                    <span className="empty-box" />
                  )}
                </div>
              </div>
              <p className="lesson-content">{lesson.content}</p>
              {lesson.vocabulary && lesson.vocabulary.length > 0 && (
                <div className="vocabulary-preview">
                  <span className="vocab-label">Vocabulary:</span>
                  <span className="vocab-count">{lesson.vocabulary.length} words</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};