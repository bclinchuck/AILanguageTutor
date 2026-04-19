import React from 'react';
import { UserProfile, Badge, Quiz, UserProgress } from '../types';
import './ProfilePanel.css';
import ProgressBar from './ProgressBarImpl';

interface ProfilePanelProps {
  profile: UserProfile | null;
  badges: Record<string, Badge>;
  // progress props for progress bar (optional)
  quizzes?: Quiz[];
  progress?: UserProgress | null;
  onUpdate: (updates: Partial<UserProfile>) => void;
  onLogout?: () => void;
}

export const ProfilePanel: React.FC<ProfilePanelProps> = ({ profile, badges, quizzes, progress, onUpdate, onLogout }) => {
  if (!profile) {
    return null;
  }

  const allBadges: { badge: Badge; language: string }[] = [];
  Object.entries(profile.badges).forEach(([language, badgeIds]) => {
    badgeIds.forEach((id) => {
      const badge = badges[id];
      if (badge) {
        allBadges.push({ badge, language });
      }
    });
  });

  return (
    <div className="profile-panel">
      {/* Optional overall progress (shows when parent passes `quizzes`) */}
      {quizzes && (
        <div className="profile-section">
          <ProgressBar quizzes={quizzes} progress={progress || null} />
        </div>
      )}
      <div className="profile-header">
        <div className="profile-avatar-wrapper">
          {profile.avatarUrl ? (
            <img src={profile.avatarUrl} alt={profile.name} className="profile-avatar" />
          ) : (
            <div className="profile-avatar placeholder">
              {profile.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="profile-main">
          <h2 className="profile-name">{profile.name}</h2>
          <textarea
            className="profile-bio"
            placeholder="Write a short bio about your language learning journey..."
            value={profile.bio || ''}
            onChange={(e) => onUpdate({ bio: e.target.value })}
          />
          <input
            type="url"
            className="profile-avatar-input"
            placeholder="Avatar image URL (optional)"
            value={profile.avatarUrl || ''}
            onChange={(e) => onUpdate({ avatarUrl: e.target.value })}
          />
        </div>
      </div>

      <div className="profile-section">
        <h3>Achievements</h3>
        {Object.keys(profile.achievements).length === 0 ? (
          <p className="profile-empty-text">Complete lessons and quizzes to unlock achievements.</p>
        ) : (
          <ul className="profile-achievement-list">
            {Object.entries(profile.achievements).map(([language, items]) =>
              items.map((item, idx) => (
                <li key={`${language}-${idx}`}>
                  <span className="profile-achievement-language">{language.toUpperCase()}</span>
                  <span className="profile-achievement-text">{item}</span>
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      <div className="profile-section">
        <h3>Badges</h3>
        {allBadges.length === 0 ? (
          <p className="profile-empty-text">Earn badges by completing lessons and high-scoring quizzes.</p>
        ) : (
          <div className="profile-badge-grid">
            {allBadges.map(({ badge, language }, index) => (
              <div key={`${badge.id}-${language}-${index}`} className="profile-badge-card">
                <div className="profile-badge-icon">{badge.icon}</div>
                <div className="profile-badge-info">
                  <div className="profile-badge-label">
                    {badge.label} <span className="profile-badge-language">({language.toUpperCase()})</span>
                  </div>
                  <div className="profile-badge-description">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {onLogout && (
        <div className="profile-section">
          <button className="profile-logout-button" onClick={onLogout}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};


