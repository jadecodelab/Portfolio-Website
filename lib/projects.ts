export type OrderedProject = {
  slug: string;
  title: string;
};

export const orderedProjects = [
  {
    slug: "personalized-birthday-card",
    title: "Personalized Birthday Card",
  },
  {
    slug: "jade-journal",
    title: "Jade Journal",
  },
  {
    slug: "pgai-voice-bot-tester",
    title: "PGAI Voice Bot Tester",
  },
  {
    slug: "clinic-appointment-app",
    title: "Clinic Appointment App",
  },
  {
    slug: "flashcards-generator",
    title: "Flashcards Generator",
  },
] as const satisfies readonly OrderedProject[];

export function getProjectNavigation(slug: string) {
  const currentIndex = orderedProjects.findIndex(
    (project) => project.slug === slug,
  );

  return {
    previousProject:
      currentIndex > 0 ? orderedProjects[currentIndex - 1] : null,
    nextProject:
      currentIndex >= 0 && currentIndex < orderedProjects.length - 1
        ? orderedProjects[currentIndex + 1]
        : null,
  };
}