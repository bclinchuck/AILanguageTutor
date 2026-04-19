import React, { useState } from 'react';
import './StudyCards.css';

interface StudyCardsProps {
  vocabulary: string[];
  prompts: string[];
  onClose: () => void;
}

export const StudyCards: React.FC<StudyCardsProps> = ({ vocabulary, prompts, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const items = vocabulary.map((word, i) => ({
    word,
    prompt: prompts[i] || `Vocabulary ${i + 1}`,
  })).filter(item => item.word);

  if (items.length === 0) {
    return (
      <div className="study-cards-overlay">
        <div className="study-cards-container">
          <p className="no-vocab">No vocabulary to study.</p>
          <button onClick={onClose} className="study-close-btn">Close</button>
        </div>
      </div>
    );
  }

  const current = items[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === items.length - 1;

  const handleNext = () => {
    if (isLast) return;
    setCurrentIndex((i) => i + 1);
    setShowAnswer(false);
  };

  const handlePrev = () => {
    if (isFirst) return;
    setCurrentIndex((i) => i - 1);
    setShowAnswer(false);
  };

  return (
    <div className="study-cards-overlay">
      <div className="study-cards-container">
        <div className="study-cards-header">
          <h3>Study Vocabulary</h3>
          <button onClick={onClose} className="study-close-btn" aria-label="Close">×</button>
        </div>
        <div className="study-progress">
          Card {currentIndex + 1} of {items.length}
        </div>
        <div
          className={`study-card ${showAnswer ? 'flipped' : ''}`}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <div className="study-card-inner">
            <div className="study-card-front">
              <p className="study-prompt">How do you say:</p>
              <p className="study-word">{current.prompt}</p>
              <p className="study-hint">Click to reveal</p>
            </div>
            <div className="study-card-back">
              <p className="study-prompt">In your target language:</p>
              <p className="study-word answer">{current.word}</p>
            </div>
          </div>
        </div>
        <div className="study-nav">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className="study-nav-btn"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            disabled={isLast}
            className="study-nav-btn"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};
