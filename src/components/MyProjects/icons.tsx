import React from 'react';

// Small 14x14 monochrome-ish icons shown next to each project tag,
// matching the "icon + label" tag style seen in the Figma design.

const base = {
  width: 14,
  height: 14,
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
};

export const TagIconLinux: React.FC = () => (
  <svg {...base}>
    <circle cx="12" cy="9" r="6" fill="#f5f5f5" />
    <path d="M8 21c0-3 1.5-6 4-6s4 3 4 6" fill="#f5f5f5" />
    <circle cx="9.5" cy="8" r="1" fill="#1a1f2e" />
    <circle cx="14.5" cy="8" r="1" fill="#1a1f2e" />
  </svg>
);

export const TagIconServer: React.FC = () => (
  <svg {...base}>
    <rect x="3" y="4" width="18" height="6" rx="1.5" fill="#f5f5f5" />
    <rect x="3" y="14" width="18" height="6" rx="1.5" fill="#f5f5f5" />
    <circle cx="7" cy="7" r="1" fill="#1a1f2e" />
    <circle cx="7" cy="17" r="1" fill="#1a1f2e" />
  </svg>
);

export const TagIconKey: React.FC = () => (
  <svg {...base}>
    <circle cx="8" cy="15" r="4" fill="none" stroke="#f5f5f5" strokeWidth="2" />
    <path d="M11 12l9-9M17 6l2 2M14 9l2 2" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TagIconGear: React.FC = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="3.5" fill="none" stroke="#f5f5f5" strokeWidth="2" />
    <path
      d="M12 4v3M12 17v3M20 12h-3M7 12H4M17.3 6.7l-2 2M8.7 15.3l-2 2M17.3 17.3l-2-2M8.7 8.7l-2-2"
      stroke="#f5f5f5"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const TagIconPython: React.FC = () => (
  <svg {...base} viewBox="0 0 40 40">
    <path
      d="M20 6c-2 0-3.7.2-5.1.5-4.1.7-4.9 2.3-4.9 5.1v3.8h10v1.2H6.4C3.5 16.6 1 18.3 1 22.8v5c0 4 2.3 5.2 6.4 5.2h2.6v-4c0-4 3-7.4 6.6-7.4h8c2.8 0 5-2.3 5-5.1v-5.5c0-2.7-2.3-4.8-5-5.2C22.9 6.2 21.4 6 20 6z"
      fill="#3776AB"
    />
    <path
      d="M20 34c2 0 3.7-.2 5.1-.5 4.1-.7 4.9-2.3 4.9-5.1v-3.8H20v-1.2h13.6c2.9 0 5.4-1.7 5.4-6.2v-5c0-4-2.3-5.2-6.4-5.2h-2.6v4c0 4-3 7.4-6.6 7.4h-8c-2.8 0-5 2.3-5 5.1v5.5c0 2.7 2.3 4.8 5 5.2 1.1.2 2.6.4 4 .4z"
      fill="#FFD43B"
    />
    <circle cx="13.5" cy="10.5" r="1.2" fill="#fff" />
    <circle cx="26.5" cy="29.5" r="1.2" fill="#fff" />
  </svg>
);

export const TagIconAPI: React.FC = () => (
  <svg {...base}>
    <path d="M4 9l4-4 4 4M8 5v10" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M20 15l-4 4-4-4M16 19V9" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const TagIconBackend: React.FC = () => (
  <svg {...base}>
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="#f5f5f5" strokeWidth="2" />
    <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" fill="none" stroke="#f5f5f5" strokeWidth="2" />
    <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" fill="none" stroke="#f5f5f5" strokeWidth="2" />
  </svg>
);

export const TagIconDocker: React.FC = () => (
  <svg {...base} viewBox="0 0 40 40">
    <g fill="#2496ED">
      <rect x="10" y="18" width="6" height="6" rx="1" />
      <rect x="17.5" y="18" width="6" height="6" rx="1" />
      <rect x="25" y="18" width="6" height="6" rx="1" />
      <rect x="17.5" y="10.5" width="6" height="6" rx="1" />
      <path d="M6 25c0-1.5 1.5-2.5 1.5-2.5h27s4 0 5.5-3c0 0 2 4.5-1.5 7.5-3 2.5-7 2.5-7 2.5H14s-8-.5-8-4.5z" />
    </g>
  </svg>
);

export const TagIconTypeScript: React.FC = () => (
  <svg {...base}>
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
    <text x="12" y="16.5" fontSize="10" fontWeight="700" fill="#ffffff" textAnchor="middle" fontFamily="Arial, sans-serif">
      TS
    </text>
  </svg>
);

export const TagIconLayers: React.FC = () => (
  <svg {...base}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" fill="#f5f5f5" />
    <path d="M3 13l9 5 9-5" fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 18l9 5 9-5" fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- Added to cover the projects list from the Figma "My project highlights" frame ---

export const TagIconYaml: React.FC = () => (
  <svg {...base}>
    <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="#f5f5f5" />
    <path d="M15 3v4a1 1 0 0 0 1 1h4" fill="none" stroke="#1a1f2e" strokeWidth="1.2" />
    <rect x="7.5" y="12" width="9" height="1.6" rx="0.8" fill="#1a1f2e" />
    <rect x="7.5" y="15.4" width="9" height="1.6" rx="0.8" fill="#1a1f2e" />
    <rect x="7.5" y="18.8" width="6" height="1.6" rx="0.8" fill="#1a1f2e" />
  </svg>
);

export const TagIconShell: React.FC = () => (
  <svg {...base}>
    <rect x="2" y="4" width="20" height="16" rx="2.5" fill="none" stroke="#f5f5f5" strokeWidth="2" />
    <path d="M6 9l4 3-4 3" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M13 15h5" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TagIconShield: React.FC = () => (
  <svg {...base}>
    <path
      d="M12 2.5l7.5 3v6c0 5.2-3.2 9-7.5 10.5-4.3-1.5-7.5-5.3-7.5-10.5v-6l7.5-3z"
      fill="#f5f5f5"
    />
    <path
      d="M8.5 12.2l2.3 2.3 4.7-5"
      fill="none"
      stroke="#1a1f2e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TagIconContainer: React.FC = () => (
  <svg {...base} viewBox="0 0 40 40">
    <g fill="#2496ED">
      <rect x="10" y="18" width="6" height="6" rx="1" />
      <rect x="17.5" y="18" width="6" height="6" rx="1" />
      <rect x="25" y="18" width="6" height="6" rx="1" />
      <rect x="17.5" y="10.5" width="6" height="6" rx="1" />
      <path d="M6 25c0-1.5 1.5-2.5 1.5-2.5h27s4 0 5.5-3c0 0 2 4.5-1.5 7.5-3 2.5-7 2.5-7 2.5H14s-8-.5-8-4.5z" />
    </g>
  </svg>
);

export const TAG_ICONS: Record<string, React.FC> = {
  Linux: TagIconLinux,
  Nginx: TagIconServer,
  SSH: TagIconKey,
  'GitHub Actions': TagIconGear,
  Python: TagIconPython,
  'REST API': TagIconAPI,
  Backend: TagIconBackend,
  Docker: TagIconDocker,
  TypeScript: TagIconTypeScript,
  'docker-compose': TagIconLayers,
  Django: TagIconBackend,
  YAML: TagIconYaml,
  'Shell Scripting': TagIconShell,
  'IT Security': TagIconShield,
  Container: TagIconContainer,
};
