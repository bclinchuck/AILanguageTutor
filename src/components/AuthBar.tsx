import React from 'react';
import './AuthBar.css';

interface AuthBarProps {
  currentUserId: string | null;
  currentUserName: string | null;
  currentUserAvatar?: string;
  onProfileClick: () => void;
}

export const AuthBar: React.FC<AuthBarProps> = ({
  currentUserName,
  currentUserAvatar,
  onProfileClick,
}) => {
  return (
    <div className="auth-bar">
      <button className="profile-icon-button" onClick={onProfileClick} title={currentUserName || 'Login'}>
        {currentUserAvatar ? (
          <img src={currentUserAvatar} alt={currentUserName || 'User'} className="profile-icon-image" />
        ) : (
          <div className="profile-icon-placeholder">
            👤
          </div>
        )}
      </button>
    </div>
  );
};


