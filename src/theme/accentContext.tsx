import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type AccentScheme = 'ocean' | 'violet' | 'warm';

const STORAGE_KEY = 'language-app-accent';

const ORDER: AccentScheme[] = ['ocean', 'violet', 'warm'];

function readStoredAccent(): AccentScheme {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'ocean' || v === 'violet' || v === 'warm') return v;
  } catch {
    /* ignore */
  }
  return 'ocean';
}

export function applyAccentToDocument(scheme: AccentScheme): void {
  document.documentElement.setAttribute('data-accent', scheme);
  try {
    localStorage.setItem(STORAGE_KEY, scheme);
  } catch {
    /* ignore */
  }
}

type AccentContextValue = {
  accent: AccentScheme;
  setAccent: (scheme: AccentScheme) => void;
  cycleAccent: () => void;
};

const AccentContext = createContext<AccentContextValue | null>(null);

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState<AccentScheme>(() => readStoredAccent());

  useEffect(() => {
    applyAccentToDocument(accent);
  }, [accent]);

  const setAccent = useCallback((scheme: AccentScheme) => {
    setAccentState(scheme);
  }, []);

  const cycleAccent = useCallback(() => {
    setAccentState((current) => {
      const i = ORDER.indexOf(current);
      const next = ORDER[(i + 1) % ORDER.length];
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ accent, setAccent, cycleAccent }),
    [accent, setAccent, cycleAccent]
  );

  return <AccentContext.Provider value={value}>{children}</AccentContext.Provider>;
}

export function useAccent(): AccentContextValue {
  const ctx = useContext(AccentContext);
  if (!ctx) {
    throw new Error('useAccent must be used within AccentProvider');
  }
  return ctx;
}

export const accentLabels: Record<AccentScheme, string> = {
  ocean: 'Ocean',
  violet: 'Violet',
  warm: 'Warm',
};
