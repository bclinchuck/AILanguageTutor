import { UserProfile, Badge } from '../types';

const PROFILES_KEY = 'language-learning-profiles';
const CURRENT_USER_KEY = 'language-learning-current-user';

const defaultBadges: Record<string, Badge> = {
  starter: {
    id: 'starter',
    label: 'Getting Started',
    description: 'Completed your first lesson in any language.',
    icon: '🌱',
  },
  firstQuiz80: {
    id: 'firstQuiz80',
    label: 'Quiz Achiever',
    description: 'Scored 80% or higher on a quiz.',
    icon: '🏅',
  },
  levelBeginner: {
    id: 'levelBeginner',
    label: 'Beginner Unlocked',
    description: 'Reached Beginner level in a language.',
    icon: '📘',
  },
  levelIntermediate: {
    id: 'levelIntermediate',
    label: 'Intermediate Unlocked',
    description: 'Reached Intermediate level in a language.',
    icon: '📗',
  },
};

function loadProfiles(): Record<string, UserProfile> {
  try {
    const data = localStorage.getItem(PROFILES_KEY);
    if (!data) return {};
    return JSON.parse(data) as Record<string, UserProfile>;
  } catch (error) {
    console.error('Error loading profiles from localStorage:', error);
    return {};
  }
}

function saveProfiles(profiles: Record<string, UserProfile>): void {
  try {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  } catch (error) {
    console.error('Error saving profiles to localStorage:', error);
  }
}

export const profileService = {
  getCurrentUserId(): string | null {
    try {
      return localStorage.getItem(CURRENT_USER_KEY);
    } catch {
      return null;
    }
  },

  setCurrentUserId(id: string | null): void {
    try {
      if (id) {
        localStorage.setItem(CURRENT_USER_KEY, id);
      } else {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    } catch (error) {
      console.error('Error setting current user id:', error);
    }
  },

  getProfiles(): Record<string, UserProfile> {
    return loadProfiles();
  },

  getProfile(id: string): UserProfile | null {
    const profiles = loadProfiles();
    return profiles[id] || null;
  },

  upsertProfile(profile: UserProfile): UserProfile {
    const profiles = loadProfiles();
    profiles[profile.id] = profile;
    saveProfiles(profiles);
    return profile;
  },

  createProfile(name: string, password: string): UserProfile {
    const id = name.trim().toLowerCase().replace(/\s+/g, '_');
    const existing = this.getProfile(id);
    if (existing) {
      throw new Error('Username already exists');
    }

    const profile: UserProfile = {
      id,
      name,
      password, // Store password (in production, this should be hashed)
      avatarUrl: '',
      bio: '',
      achievements: {},
      badges: {},
    };

    return this.upsertProfile(profile);
  },

  authenticate(username: string, password: string): UserProfile | null {
    const id = username.trim().toLowerCase().replace(/\s+/g, '_');
    const profile = this.getProfile(id);
    if (!profile || profile.password !== password) {
      return null;
    }
    return profile;
  },

  updateProfileFields(id: string, updates: Partial<UserProfile>): UserProfile | null {
    const profile = this.getProfile(id);
    if (!profile) return null;
    const updated: UserProfile = {
      ...profile,
      ...updates,
      achievements: updates.achievements || profile.achievements,
      badges: updates.badges || profile.badges,
    };
    return this.upsertProfile(updated);
  },

  addAchievement(userId: string, language: string, achievement: string): UserProfile | null {
    const profile = this.getProfile(userId);
    if (!profile) return null;
    const languageAchievements = profile.achievements[language] || [];
    if (languageAchievements.includes(achievement)) return profile;

    const updatedAchievements = {
      ...profile.achievements,
      [language]: [...languageAchievements, achievement],
    };
    return this.updateProfileFields(userId, { achievements: updatedAchievements });
  },

  awardBadge(userId: string, language: string, badgeId: string): UserProfile | null {
    const profile = this.getProfile(userId);
    const badge = defaultBadges[badgeId];
    if (!profile || !badge) return profile || null;

    const languageBadges = profile.badges[language] || [];
    if (languageBadges.includes(badgeId)) return profile;

    const updatedBadges = {
      ...profile.badges,
      [language]: [...languageBadges, badgeId],
    };
    return this.updateProfileFields(userId, { badges: updatedBadges });
  },

  getAllBadges(): Record<string, Badge> {
    return defaultBadges;
  },
};


