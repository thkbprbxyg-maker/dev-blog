import React from 'react';

// Icons extracted directly from the Figma "DevSecOps components" library
// (right-click on component → Copy as SVG), cropped to the icon tile only.

export const IconShellScripting: React.FC = () => (
  <svg width="40" height="40" viewBox="148.5 38 80 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="shellClip">
        <rect x="148.5" y="38" width="80" height="80" rx="16" />
      </clipPath>
    </defs>
    <g clipPath="url(#shellClip)">
      <rect x="156.471" y="44" width="60" height="61" rx="3" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M212.5 38H164.5C155.663 38 148.5 45.1634 148.5 54V102C148.5 110.836 155.663 118 164.5 118H212.5C221.336 118 228.5 110.836 228.5 102V54C228.5 45.1634 221.336 38 212.5 38ZM164.572 54V58.5089L174.695 63.8661L164.5 69.4018V74L178.5 66.0982V62.0357L164.572 54ZM182.102 74H198.102V78.8H182.102V74Z"
        fill="white"
      />
    </g>
  </svg>
);

// The following icons couldn't be exported from Figma directly (recurring empty-file
// issue), so they're custom-built to match the same rounded-tile visual language
// as the Shell Scripting icon above: 80x80 tile, rx=16, centered glyph.

export const IconDocker: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="16" fill="#2496ED" />
    <g fill="#ffffff">
      <rect x="20" y="36" width="9" height="9" rx="1.5" />
      <rect x="31" y="36" width="9" height="9" rx="1.5" />
      <rect x="42" y="36" width="9" height="9" rx="1.5" />
      <rect x="31" y="25" width="9" height="9" rx="1.5" />
      <rect x="42" y="25" width="9" height="9" rx="1.5" />
      <path d="M16 46c0-2 2-3 2-3h42s6 0 8-4c0 0 3 6-2 10-4 3-10 3-10 3H24s-8-1-8-6z" />
    </g>
  </svg>
);

export const IconPython: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="16" fill="#1a1f2e" />
    <g>
      <path
        d="M40 14c-4 0-7.5.4-10.3 1-8.2 1.5-9.7 4.6-9.7 10.3v7.6h20v2.5H12.8C7 35.4 2 38.8 2 45.6v10c0 6.8 4.7 10.4 12.8 10.4h5.2V56c0-6.8 5.9-12.8 13.2-12.8h16c5.6 0 10-4.6 10-10.2V25.3c0-5.5-4.6-9.6-10-10.4C46 14.3 42.8 14 40 14z"
        fill="#3776AB"
      />
      <path
        d="M40 66c4 0 7.5-.4 10.3-1 8.2-1.5 9.7-4.6 9.7-10.3v-7.6H40v-2.5h27.2C73 44.6 78 41.2 78 34.4v-10c0-6.8-4.7-10.4-12.8-10.4h-5.2V24c0 6.8-5.9 12.8-13.2 12.8H31c-5.6 0-10 4.6-10 10.2v10.7c0 5.5 4.6 9.6 10 10.4C34 65.7 37.2 66 40 66z"
        fill="#FFD43B"
      />
      <circle cx="27" cy="21.5" r="2.5" fill="#ffffff" />
      <circle cx="53" cy="58.5" r="2.5" fill="#ffffff" />
    </g>
  </svg>
);

export const IconYaml: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="16" fill="#1a1f2e" />
    <path
      d="M24 14h20l12 12v40a3 3 0 0 1-3 3H24a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3z"
      fill="#ffffff"
    />
    <path d="M44 14v9a3 3 0 0 0 3 3h9" fill="#c9d1d9" />
    <rect x="28" y="38" width="24" height="3" rx="1.5" fill="#1a1f2e" />
    <rect x="28" y="46" width="24" height="3" rx="1.5" fill="#1a1f2e" />
    <rect x="28" y="54" width="16" height="3" rx="1.5" fill="#1a1f2e" />
  </svg>
);

export const IconGithubActions: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="16" fill="#1a1f2e" />
    <g fill="none" stroke="#ffffff" strokeWidth="4">
      <circle cx="40" cy="40" r="12" />
      <path d="M40 16v8M40 56v8M64 40h-8M24 40h-8M56.6 23.4l-5.6 5.6M29 51l-5.6 5.6M56.6 56.6l-5.6-5.6M29 29l-5.6-5.6" />
    </g>
    <circle cx="40" cy="40" r="4" fill="#ffffff" />
  </svg>
);

export const IconITSecurity: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="16" fill="#1a1f2e" />
    <path
      d="M40 12l22 8v18c0 16-9.4 27.8-22 32-12.6-4.2-22-16-22-32V20l22-8z"
      fill="#ffffff"
    />
    <path
      d="M32 40l6 6 12-13"
      fill="none"
      stroke="#1a1f2e"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
