import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** All published projects: ones with an `order` number first, then the rest newest first. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort(
    (a, b) =>
      (a.data.order ?? Infinity) - (b.data.order ?? Infinity) ||
      b.data.date.getTime() - a.data.date.getTime(),
  );
}

export const projectUrl = (project: Project) => `/projects/${project.id}`;
