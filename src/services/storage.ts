import { UserProgress } from '../types';

const STORAGE_KEY = 'language-learning-progress';

export const storageService = {
  getProgress: (userId: string = 'default'): UserProgress | null => {
    try {
      const data = localStorage.getItem(`${STORAGE_KEY}-${userId}`);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },

  saveProgress: (progress: UserProgress): void => {
    try {
      localStorage.setItem(`${STORAGE_KEY}-${progress.userId}`, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },

  updateProgress: (userId: string, updates: Partial<UserProgress>): UserProgress => {
    const current = storageService.getProgress(userId);
    const updated: UserProgress = {
      userId,
      language: updates.language || current?.language || '',
      currentLevel: updates.currentLevel || current?.currentLevel || 'Novice',
      completedLessons: updates.completedLessons || current?.completedLessons || [],
      completedQuizzes: updates.completedQuizzes || current?.completedQuizzes || [],
      scores: updates.scores || current?.scores || {},
      lastAccessed: new Date().toISOString(),
    };
    storageService.saveProgress(updated);
    return updated;
  },

  markLessonComplete: (userId: string, language: string, lessonId: string): void => {
    const progress = storageService.getProgress(userId);
    const completedLessons = progress?.completedLessons || [];
    if (!completedLessons.includes(lessonId)) {
      storageService.updateProgress(userId, {
        language,
        completedLessons: [...completedLessons, lessonId],
      });
    }
  },

  markQuizComplete: (userId: string, language: string, quizId: string, score: number): void => {
    const progress = storageService.getProgress(userId);
    const completedQuizzes = progress?.completedQuizzes || [];
    const scores = progress?.scores || {};
    
    if (!completedQuizzes.includes(quizId)) {
      storageService.updateProgress(userId, {
        language,
        completedQuizzes: [...completedQuizzes, quizId],
        scores: { ...scores, [quizId]: score },
      });
    } else {
      // Update score if already completed
      storageService.updateProgress(userId, {
        scores: { ...scores, [quizId]: score },
      });
    }
  },

  getLevelAverageScore: (userId: string, level: string, quizzesByLevel: Record<string, string[]>): number => {
    const progress = storageService.getProgress(userId);
    if (!progress) return 0;

    // Get quiz IDs for this level
    const levelQuizIds = quizzesByLevel[level] || [];
    if (levelQuizIds.length === 0) return 0;

    // Get scores for quizzes in this level
    const scores = levelQuizIds
      .map(quizId => progress.scores[quizId])
      .filter(score => score !== undefined && score !== null);

    if (scores.length === 0) return 0;

    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return average;
  },

  canProgressToLevel: (userId: string, targetLevel: string, quizzesByLevel: Record<string, string[]>): boolean => {
    const progress = storageService.getProgress(userId);
    if (!progress) return targetLevel === 'Novice';

    const levels = ['Novice', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
    const targetIndex = levels.indexOf(targetLevel);
    if (targetIndex <= 0) return true; // Novice is always available

    // Check if user has 80%+ on previous level
    const previousLevel = levels[targetIndex - 1];
    const averageScore = storageService.getLevelAverageScore(userId, previousLevel, quizzesByLevel);
    
    return averageScore >= 80;
  },
};

