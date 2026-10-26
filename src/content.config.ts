// Defines what goes at the top of each project file (the "frontmatter").
// See README.md → "Adding a project" for a copy-paste template.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // One folder per project: src/content/projects/<project-name>/index.mdx
  // The folder name becomes the URL: /projects/<project-name>
  loader: glob({
    pattern: '*/index.{md,mdx}',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // One short sentence, used for search engines and link previews.
      summary: z.string(),
      // The text in the project page's side column. Keep it short; leave a blank line between paragraphs.
      description: z.string().optional(),
      // The stats in the side column, in order, e.g.
      //   facts:
      //     - { label: Date, value: September–October 2026 }
      facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      // Links to other websites (live site, code, a shop…).
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),

      // Position on the projects page: 1 comes first.
      order: z.number().optional(),
      // Only used to sort projects that don't have an `order`, newest first.
      date: z.coerce.date().optional(),
      // Hide from the site while you're still working on it.
      draft: z.boolean().default(false),

      // The image shown when someone shares a link to the project.
      cover: image(),
      coverAlt: z.string().default(''),
      // Also show the cover at the top of the project page.
      showCover: z.boolean().default(true),
      // Photos shown in a pinboard on the project page. Click to enlarge.
      gallery: z
        .array(z.object({ src: image(), alt: z.string().default(''), caption: z.string().optional() }))
        .default([]),
      // Optional page background color, e.g. { paper: '#f4f1ea' }.
      theme: z.object({ paper: z.string().optional() }).default({}),

      // Your hand-drawn icon for the home page. Leave it out to keep the project off the home page.
      sketch: image().optional(),
      // Where the icon sits on the home page, as percentages of the area (0–100).
      sketchSpot: z
        .object({
          x: z.number().min(0).max(100),
          y: z.number().min(0).max(100),
          rotate: z.number().default(0),
          // Width in pixels on a desktop screen.
          size: z.number().default(110),
          // Where the hover label appears. Leave it out to put it on the side away from your name.
          label: z.enum(['above', 'below', 'left', 'right']).optional(),
        })
        .optional(),
      // The word shown when someone hovers the icon. Defaults to the title.
      sketchLabel: z.string().optional(),
    }),
});

export const collections = { projects };
