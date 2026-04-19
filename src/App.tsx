import { useState } from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import { LevelNavigator } from './components/LevelNavigator';
import { LessonList } from './components/LessonList';
import { LessonView } from './components/LessonView';
import { QuizComponent } from './components/QuizComponent';
import ProgressBar from './components/ProgressBarImpl';
import { languages, lessons, quizzes } from './data/languages';
import { storageService } from './services/storage';
import { Language, Lesson, Quiz, Level, UserProgress } from './types';
import './App.css';

const GUEST_USER_ID = 'guest';

type View = 'language-select' | 'main' | 'lesson' | 'quiz';

function App() {
  const [view, setView] = useState<View>('language-select');
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [currentLevel, setCurrentLevel] = useState<Level>('Novice');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setView('main');

    let progress = storageService.getProgress(GUEST_USER_ID);
    if (!progress || progress.language !== language.id) {
      progress = storageService.updateProgress(GUEST_USER_ID, {
        language: language.id,
        currentLevel: 'Novice',
        completedLessons: [],
        completedQuizzes: [],
        scores: {},
      });
    }
    setUserProgress(progress);
    setCurrentLevel(progress.currentLevel);
  };

  const handleLevelChange = (level: Level) => {
    setCurrentLevel(level);
    if (userProgress) {
      storageService.updateProgress(GUEST_USER_ID, { currentLevel: level });
    }
  };

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setView('lesson');
  };

  const handleQuizComplete = (score: number) => {
    // record quiz completion and update local progress state
    if (selectedQuiz && selectedLanguage) {
      storageService.markQuizComplete(GUEST_USER_ID, selectedLanguage.id, selectedQuiz.id, score);
      const updated = storageService.getProgress(GUEST_USER_ID);
      setUserProgress(updated);
    }

    // Also mark the lesson complete when the quiz is finished
    if (selectedLesson && selectedLanguage) {
      storageService.markLessonComplete(GUEST_USER_ID, selectedLanguage.id, selectedLesson.id);
      const updated2 = storageService.getProgress(GUEST_USER_ID);
      setUserProgress(updated2);
    }

    setView('lesson');
    setSelectedQuiz(null);
  };

  const handleBackToMain = () => {
    // Do NOT mark the lesson complete just for opening/viewing it.
    // Lessons are marked complete when the associated quiz is finished.
    setSelectedLesson(null);
    setSelectedQuiz(null);
    setView('main');
  };

  const handleBackToLessons = () => {
    setSelectedQuiz(null);
    setView('lesson');
  };

  if (view === 'language-select') {
    return (
      <div className="app-container">
        <div className="app-content app-content-centered">
          <LanguageSelector languages={languages} onSelect={handleLanguageSelect} />
        </div>
      </div>
    );
  }

  if (!selectedLanguage) {
    return null;
  }

  const languageLessons = lessons[selectedLanguage.id] || [];
  const languageQuizzes = quizzes[selectedLanguage.id] || [];

  if (view === 'lesson' && selectedLesson) {
    const languageQuizzes = quizzes[selectedLanguage.id] || [];
    const quiz = languageQuizzes.find(q => q.lessonId === selectedLesson.id);
    return (
      <LessonView
        lesson={selectedLesson}
        quiz={quiz}
        onStartQuiz={() => {
          if (quiz) {
            setSelectedQuiz(quiz);
            setView('quiz');
          }
        }}
        onBack={handleBackToMain}
      />
    );
  }

  if (view === 'quiz' && selectedQuiz) {
    return (
      <QuizComponent
        quiz={selectedQuiz}
        languageCode={selectedLanguage.id}
        languageName={selectedLanguage.name}
        onComplete={handleQuizComplete}
        onBack={handleBackToLessons}
      />
    );
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <div className="app-header-left">
          <button className="home-button" onClick={() => setView('language-select')}>
            🏠 Home
          </button>
          <h1 className="app-header-title">{selectedLanguage.name} Learning</h1>
          <div className="app-header-spacer"></div>
        </div>
        <div className="app-header-right">
          <ProgressBar quizzes={languageQuizzes} progress={userProgress} />
        </div>
      </div>
      <div className="app-content">
        <LevelNavigator
          currentLevel={currentLevel}
          onLevelChange={handleLevelChange}
        />
        <LessonList
          lessons={languageLessons}
          level={currentLevel}
          quizzes={languageQuizzes}
          progress={userProgress}
          onSelectLesson={handleLessonSelect}
        />
      </div>
    </div>
  );
}

export default App;