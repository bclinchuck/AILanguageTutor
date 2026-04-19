# Language Learning App

An intelligent language learning web application built with React and TypeScript, featuring a Virtual Teaching Assistant that provides nuanced feedback instead of binary right/wrong answers.

## Features

- **Multiple Language Support**: Spanish, German, Russian (easily extensible)
- **Progressive Learning Levels**: Novice → Beginner → Intermediate → Advanced → Expert
- **Sentence Building**: Intermediate+ levels focus on constructing sentences
- **Intelligent Feedback**: Virtual TA provides detailed, context-aware feedback
- **Local Progress Tracking**: User progress saved in browser localStorage
- **Lesson Management**: Organized lessons by topic and level
- **Interactive Quizzes**: Practice with immediate feedback from Virtual TA

## Technology Stack

- **React 18** with **TypeScript**
- **Vite** for build tooling
- **Local Storage** for user progress (can be migrated to database later)
- Modern CSS with gradients and animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── LanguageSelector.tsx
│   ├── LevelNavigator.tsx
│   ├── LessonList.tsx
│   ├── LessonView.tsx
│   └── QuizComponent.tsx
├── data/               # Language content and lessons
│   └── languages.ts
├── services/           # Business logic
│   ├── storage.ts      # Local storage management
│   └── virtualTA.ts    # Virtual TA feedback logic
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
└── main.tsx            # Entry point
```

## Key Features Explained

### Virtual TA Feedback

The Virtual TA provides feedback in this format:
- **What I understood**: Explains what the system interpreted from the user's answer
- **What I would adjust**: Lists specific areas for improvement
- **What I would say**: Provides the suggested correct answer
- **Explanation**: Contextual explanation of why the answer is correct/incorrect
- **Context**: Additional learning context

### Progress Tracking

- Progress is stored locally in the browser
- Tracks completed lessons and quizzes
- Stores scores for each quiz
- Remembers current level and last accessed language
- Can be easily migrated to a database later

### Level Progression

- Users start at Novice level
- Higher levels are locked until the user progresses
- Intermediate+ levels focus on sentence building
- Each level has appropriate content and difficulty

## Future Enhancements

- Database integration for user accounts
- API backend for content management
- More languages and content
- Advanced AI-powered feedback
- Spaced repetition system
- Audio pronunciation
- Mobile app version

## License

MIT

