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

<style src="./Projects.css" scoped></style>
