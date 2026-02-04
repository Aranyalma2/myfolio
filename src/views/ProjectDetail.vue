<template>
	<div v-if="project" class="project-detail">
		<section class="project-hero">
			<div class="container">
				<router-link to="/projects" class="back-link"> ← Back to Projects </router-link>
				<div class="hero-content">
					<h1>{{ project.title }}</h1>
					<div class="labels">
						<span v-for="label in project.labels" :key="label" class="label">
							{{ label }}
						</span>
					</div>
				</div>
			</div>
		</section>

		<section class="project-content">
			<div class="container">
				<div class="content-wrapper">
					<div class="project-description" v-html="project.description"></div>

					<div class="project-sidebar">
						<div class="sidebar-section">
							<h3>Technologies</h3>
							<div class="tech-list">
								<span v-for="label in project.labels" :key="label" class="tech-tag">
									{{ label }}
								</span>
							</div>
						</div>

						<div v-if="project.github || project.demo" class="sidebar-section">
							<h3>Links</h3>
							<div class="project-links">
								<a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="btn-link"> View on GitHub </a>
								<a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="btn-link btn-primary"> Live Demo </a>
							</div>
						</div>
					</div>
				</div>

				<div v-if="project.images && project.images.length > 0" class="gallery-section">
					<h2>Project Gallery</h2>
					<div class="gallery-grid">
						<div v-for="(image, index) in project.images" :key="index" class="gallery-item" @click="openGallery(index)">
							<img :src="image" :alt="`${project.title} - Image ${index + 1}`" />
							<div class="gallery-overlay"></div>
						</div>
					</div>
				</div>

				<div class="navigation-footer">
					<router-link v-if="previousProject" :to="`/projects/${previousProject.id}`" class="nav-project nav-prev">
						<span class="nav-label">← Previous Project</span>
						<span class="nav-title">{{ previousProject.title }}</span>
					</router-link>
					<router-link v-if="nextProject" :to="`/projects/${nextProject.id}`" class="nav-project nav-next">
						<span class="nav-label">Next Project →</span>
						<span class="nav-title">{{ nextProject.title }}</span>
					</router-link>
				</div>
			</div>
		</section>

		<!-- Gallery Modal -->
		<Teleport to="body">
			<div v-if="isGalleryOpen" class="gallery-modal" @click.self="closeGallery">
				<button class="modal-close" aria-label="Close gallery" @click="closeGallery">✕</button>

				<button v-if="currentImageIndex > 0" class="modal-nav modal-prev" aria-label="Previous image" @click="previousImage">‹</button>

				<div class="modal-content">
					<img v-if="project" :src="project.images[currentImageIndex]" :alt="`${project.title} - Image ${currentImageIndex + 1}`" class="modal-image" />
					<div class="modal-counter">{{ currentImageIndex + 1 }} / {{ project?.images.length }}</div>
				</div>

				<button v-if="project && currentImageIndex < project.images.length - 1" class="modal-nav modal-next" aria-label="Next image" @click="nextImage">›</button>
			</div>
		</Teleport>
	</div>

	<div v-else class="not-found">
		<div class="not-found-content">
			<h2>Project not found</h2>
			<p>The project you're looking for doesn't exist or has been removed.</p>
			<router-link to="/projects" class="btn-primary"> View All Projects </router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

const route = useRoute();

const project = computed<Project | undefined>(() => projects.find(p => p.id === route.params.id));

const currentIndex = computed<number>(() => projects.findIndex(p => p.id === route.params.id));

const previousProject = computed<Project | undefined>(() => {
	if (currentIndex.value > 0) {
		return projects[currentIndex.value - 1];
	}
	return undefined;
});

const nextProject = computed<Project | undefined>(() => {
	if (currentIndex.value < projects.length - 1 && currentIndex.value !== -1) {
		return projects[currentIndex.value + 1];
	}
	return undefined;
});

/*global document, KeyboardEvent, window*/

// Gallery modal state
const isGalleryOpen = ref(false);
const currentImageIndex = ref(0);

const openGallery = (index: number) => {
	currentImageIndex.value = index;
	isGalleryOpen.value = true;
	document.body.style.overflow = 'hidden';
};

const closeGallery = () => {
	isGalleryOpen.value = false;
	document.body.style.overflow = '';
};

const nextImage = () => {
	if (project.value && currentImageIndex.value < project.value.images.length - 1) {
		currentImageIndex.value++;
	}
};

const previousImage = () => {
	if (currentImageIndex.value > 0) {
		currentImageIndex.value--;
	}
};

const handleKeydown = (event: KeyboardEvent) => {
	if (!isGalleryOpen.value) return;

	if (event.key === 'Escape') {
		closeGallery();
	} else if (event.key === 'ArrowRight') {
		nextImage();
	} else if (event.key === 'ArrowLeft') {
		previousImage();
	}
};

// Add keyboard event listener
if (typeof window !== 'undefined') {
	window.addEventListener('keydown', handleKeydown);
}
</script>

<style src="../assets/css/ProjectDetail.css" scoped></style>
