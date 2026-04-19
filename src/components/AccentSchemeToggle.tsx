import { useAccent, accentLabels, type AccentScheme } from '../theme/accentContext';
import './AccentSchemeToggle.css';

const icons: Record<AccentScheme, string> = {
  ocean: '🌊',
  violet: '💜',
  warm: '🔥',
};

export function AccentSchemeToggle() {
  const { accent, cycleAccent } = useAccent();

  return (
    <button
      type="button"
      className="accent-scheme-toggle"
      onClick={cycleAccent}
      aria-label={`Color scheme: ${accentLabels[accent]}. Click to change.`}
      title={`Scheme: ${accentLabels[accent]}`}
    >
      <span className="accent-scheme-toggle-icon" aria-hidden>
        {icons[accent]}
      </span>
    </button>
  );
}
