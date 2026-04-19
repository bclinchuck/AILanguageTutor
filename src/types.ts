export type Level = 'Novice' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Language {
  id: string;
  name: string;
  code: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
}

export interface Lesson {
  id: string;
  topicId: string;
  level: Level;
  title: string;
  content: string;
  vocabulary?: string[];
}

export interface QuizQuestion {
  id: string;
  type: 'vocabulary' | 'grammar' | 'sentence' | 'translation';
  question: string;
  correctAnswer: string;
  alternatives?: string[];
  context?: string;
  level: Level;
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  questions: QuizQuestion[];
}

export interface UserProgress {
  userId: string;
  language: string;
  currentLevel: Level;
  completedLessons: string[];
  completedQuizzes: string[];
  scores: Record<string, number>;
  lastAccessed: string;
}

export interface TAFeedback {
  understood: string;
  adjustments: string[];
  suggested: string;
  explanation: string;
  context: string;
}

export interface Badge {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface UserProfile {
  id: string;
  name: string;
  password?: string; // For authentication
  avatarUrl?: string;
  bio?: string;
  // languageCode -> list of achievement descriptions
  achievements: Record<string, string[]>;
  // languageCode -> list of badge ids
  badges: Record<string, string[]>;
}

