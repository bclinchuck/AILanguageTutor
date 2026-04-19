import React from 'react';
import { Language } from '../types';
import './LanguageSelector.css';

interface LanguageSelectorProps {
  languages: Language[];
  onSelect: (language: Language) => void;
}

const languageFlags: Record<string, string> = {
  es: '🇪🇸',
  de: '🇩🇪',
  ru: '🇷🇺',
  fr: '🇫🇷',
  it: '🇮🇹',
  pt: '🇵🇹',
  nl: '🇳🇱',
  sv: '🇸🇪',
  no: '🇳🇴',
  da: '🇩🇰',
  fi: '🇫🇮',
  pl: '🇵🇱',
  cs: '🇨🇿',
  uk: '🇺🇦',
  tr: '🇹🇷',
  el: '🇬🇷',
  ar: '🇸🇦',
  he: '🇮🇱',
  hi: '🇮🇳',
  zh: '🇨🇳',
  ja: '🇯🇵',
  ko: '🇰🇷',
  vi: '🇻🇳',
  th: '🇹🇭',
  id: '🇮🇩',
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages, onSelect }) => {
  return (
    <div className="language-selector">
      <div className="app-title-row">
        <img src="/language-icon.svg" alt="Language Learning" className="app-icon" />
        <h1 className="app-title">Language Learning App</h1>
      </div>
      <p className="app-subtitle">Choose a language to begin your learning journey</p>
      <div className="language-grid">
        {languages.map((language) => (
          <button
            key={language.id}
            className="language-card"
            onClick={() => onSelect(language)}
          >
            <div className="language-flag">
              {languageFlags[language.id] || language.code.toUpperCase()}
            </div>
            <div className="language-name">{language.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

