import type { Project } from '@/types';

export const projects: Project[] = [
];

export const getFeaturedProjects = (): Project[] => {
	return projects.filter(project => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
	return projects.find(project => project.id === id);
};

export const getAllLabels = (): string[] => {
	const labels = new Set<string>();
	projects.forEach(project => {
		project.labels.forEach(label => labels.add(label));
	});
	return Array.from(labels).sort();
};
