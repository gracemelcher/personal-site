// ─────────────────────────────────────────────────────────────
// Site-wide settings. Edit this file to change your name,
// navigation, links, and the hand-drawn name on the home page.
// ─────────────────────────────────────────────────────────────

// Your hand-drawn name (exported from Procreate).
// Replace the line with `const nameDrawing = null;` to show plain text instead.
import nameDrawing from './assets/drawings/name.png';

export const site = {
  name: 'Grace Melcher',
  // Used for search engines and link previews.
  description: 'Portfolio of Grace Melcher — design, websites, and things made by hand.',

  nameDrawing: nameDrawing as ImageMetadata | null,
  // Where your name sits on the home page, like a project's `sketchSpot`:
  // x/y are percentages, size is its width in pixels on a wide screen.
  nameSpot: { x: 51.8, y: 43.8, size: 728 },

  nav: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
  ],

  // Put your résumé at public/resume.pdf and set this to '/resume.pdf'.
  // Leave it empty to hide the link.
  resume: '',

  // Shown in "Contact me" on the about page.
  email: 'grace@melcher.org',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gracemelcher/' },
    { label: 'Strava', href: 'https://www.strava.com/athletes/19717898' },
  ] as { label: string; href: string }[],
};
