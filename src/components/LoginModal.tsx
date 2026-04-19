import React, { useState } from 'react';
import './LoginModal.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
  onSignUp: (username: string, password: string) => void;
  error?: string;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  onSignUp,
  error,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    if (isSignUp) {
      onSignUp(username.trim(), password);
    } else {
      onLogin(username.trim(), password);
    }
    
    // Reset form
    setUsername('');
    setPassword('');
  };

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setIsSignUp(false);
    onClose();
  };

  return (
    <div className="login-modal-overlay" onClick={handleClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="login-modal-close" onClick={handleClose}>×</button>
        <h2 className="login-modal-title">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>
        
        {error && <div className="login-modal-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-modal-form">
          <div className="login-form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              autoFocus
            />
          </div>
          
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="login-submit-button">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        
        <div className="login-modal-footer">
          <button
            type="button"
            className="login-toggle-button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? 'Already have an account? Login'
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

