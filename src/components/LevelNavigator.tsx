import React from 'react';
import { Level } from '../types';
import './LevelNavigator.css';

interface LevelNavigatorProps {
  currentLevel: Level;
  onLevelChange: (level: Level) => void;
}

const levels: Level[] = ['Novice', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

export const LevelNavigator: React.FC<LevelNavigatorProps> = ({
  currentLevel,
  onLevelChange,
}) => {
  return (
    <div className="level-navigator">
      <h2 className="section-title">Select Level</h2>
      <div className="level-buttons">
        {levels.map((level) => (
          <button
            key={level}
            className={`level-button ${level === currentLevel ? 'active' : ''}`}
            onClick={() => onLevelChange(level)}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};