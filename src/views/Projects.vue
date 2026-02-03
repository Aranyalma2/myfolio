<template>
	<div class="projects-page">
		<section class="projects-header">
			<div class="container">
				<h1>My Projects</h1>
			</div>
		</section>

		<section class="projects-content">
			<div class="container">
				<ProjectFilter v-model:search="searchQuery" v-model:selected-labels="selectedLabels" :all-labels="allLabels" />

				<div class="results-info">
					<p>Showing {{ filteredProjects.length }} of {{ totalProjects }} projects</p>
				</div>

				<div v-if="filteredProjects.length > 0" class="projects-grid">
					<ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
				</div>

				<div v-else class="no-results">
					<h3>No projects found</h3>
					<p>Try adjusting your search or filter criteria</p>
					<button class="btn-clear" @click="clearAllFilters">Clear All Filters</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { projects, getAllLabels } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectFilter from '@/components/ProjectFilter.vue';
import type { Project } from '@/types';

const searchQuery = ref<string>('');
const selectedLabels = ref<string[]>([]);

const totalProjects = projects.length;

const allLabels = computed<string[]>(() => getAllLabels());

const filteredProjects = computed<Project[]>(() => {
	return projects.filter(project => {
		const matchesSearch =
			searchQuery.value === '' ||
			project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
			project.shortDescription.toLowerCase().includes(searchQuery.value.toLowerCase());

		const matchesLabels = selectedLabels.value.length === 0 || selectedLabels.value.every(label => project.labels.includes(label));

		return matchesSearch && matchesLabels;
	});
});

const clearAllFilters = (): void => {
	searchQuery.value = '';
	selectedLabels.value = [];
};
</script>

<style scoped>
.projects-page {
	width: 100%;
}

.projects-header {
	background: #2c3e50;
	color: white;
	padding: 2rem 1rem;
	text-align: center;
}

.projects-header h1 {
	font-size: 2.5rem;
	margin-bottom: 0.75rem;
}

.projects-header p {
	font-size: 1.15rem;
	opacity: 0.9;
}

.projects-content {
	padding: 2rem 1rem;
	background: #f8f9fa;
	min-height: 60vh;
}

.results-info {
	margin: 1.5rem 0 1rem;
	text-align: center;
	color: #718096;
	font-size: 0.95rem;
}

.projects-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1.5rem;
	margin-top: 1.5rem;
}

.no-results {
	text-align: center;
	padding: 3rem 1rem;
	background: white;
	border-radius: 8px;
	margin-top: 1.5rem;
}

.no-results h3 {
	font-size: 1.5rem;
	margin-bottom: 0.75rem;
	color: #2d3748;
}

.no-results p {
	font-size: 1.05rem;
	color: #718096;
	margin-bottom: 1.5rem;
}

.btn-clear {
	background: #2c3e50;
	color: white;
	border: none;
	padding: 0.8rem 1.5rem;
	border-radius: 4px;
	font-size: 0.95rem;
	font-weight: 600;
	cursor: pointer;
	transition: background 0.3s ease;
}

.btn-clear:hover {
	background: #1a252f;
}

@media (max-width: 768px) {
	.projects-header h1 {
		font-size: 2rem;
	}

	.projects-header p {
		font-size: 1rem;
	}

	.projects-grid {
		grid-template-columns: 1fr;
	}

	.projects-content {
		padding: 1.5rem 1rem;
	}
}
</style>
