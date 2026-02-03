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
				<div class="project-image-large">
					<img :src="project.image" :alt="project.title" />
				</div>

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
import { computed } from 'vue';
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
</script>

<style scoped>
.project-detail {
	width: 100%;
}

.project-hero {
	background: #2c3e50;
	color: white;
	padding: 3rem 2rem;
	position: relative;
	overflow: hidden;
}

.project-hero::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.05)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>')
		no-repeat bottom;
	background-size: cover;
	opacity: 0.5;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	position: relative;
	z-index: 1;
}

.back-link {
	color: white;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	margin-bottom: 2rem;
	font-size: 1.1rem;
	transition:
		opacity 0.3s ease,
		transform 0.3s ease;
	font-weight: 500;
}

.back-link:hover {
	opacity: 0.8;
	transform: translateX(-5px);
}

.hero-content h1 {
	font-size: 3.5rem;
	margin-bottom: 1.5rem;
	line-height: 1.2;
}

.labels {
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
}

.label {
	background: rgba(255, 255, 255, 0.2);
	padding: 0.6rem 1.2rem;
	border-radius: 8px;
	font-size: 0.95rem;
	font-weight: 500;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.3);
}

.project-content {
	padding: 3rem 2rem;
	background: #f7fafc;
}

.project-image-large {
	width: 100%;
	max-height: 500px;
	overflow: hidden;
	border-radius: 12px;
	margin-bottom: 3rem;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.project-image-large img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.content-wrapper {
	display: grid;
	grid-template-columns: 1fr 320px;
	gap: 3rem;
	margin-bottom: 4rem;
}

.project-description {
	background: white;
	padding: 2.5rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	font-size: 1.1rem;
	line-height: 1.8;
	color: #2d3748;
}

.project-description :deep(p) {
	margin-bottom: 1.5rem;
}

.project-description :deep(strong) {
	color: #2c3e50;
	font-weight: 600;
}

.project-description :deep(h3) {
	font-size: 1.8rem;
	color: #2d3748;
	margin: 2rem 0 1rem;
}

.project-description :deep(ul) {
	margin: 1rem 0 1.5rem 1.5rem;
}

.project-description :deep(li) {
	margin-bottom: 0.75rem;
	color: #4a5568;
}

.project-sidebar {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.sidebar-section {
	background: white;
	padding: 1.5rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.sidebar-section h3 {
	font-size: 1.3rem;
	margin-bottom: 1rem;
	color: #2d3748;
}

.tech-list {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

.tech-tag {
	background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%);
	color: #2c3e50;
	padding: 0.5rem 1rem;
	border-radius: 6px;
	font-size: 0.9rem;
	font-weight: 600;
}

.project-links {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.btn-link {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 1rem 1.5rem;
	border: 2px solid #2c3e50;
	color: #2c3e50;
	text-decoration: none;
	border-radius: 8px;
	font-weight: 600;
	transition: all 0.3s ease;
	text-align: center;
}

.btn-link:hover {
	background: #2c3e50;
	color: white;
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);
}

.btn-primary {
	background: #2c3e50;
	color: white;
	border: none;
}

.btn-primary:hover {
	background: #1a252f;
	transform: translateY(-2px);
	box-shadow: 0 6px 16px rgba(44, 62, 80, 0.4);
}

.link-icon {
	font-size: 1.2rem;
}

.navigation-footer {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
	margin-top: 3rem;
}

.nav-project {
	background: white;
	padding: 2rem;
	border-radius: 12px;
	text-decoration: none;
	transition: all 0.3s ease;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
}

.nav-project:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.nav-prev {
	text-align: left;
}

.nav-next {
	text-align: right;
	grid-column: 2;
}

.nav-label {
	font-size: 0.9rem;
	color: #718096;
	margin-bottom: 0.5rem;
	font-weight: 600;
	display: block;
}

.nav-title {
	font-size: 1.3rem;
	color: #2d3748;
	font-weight: 700;
}

.not-found {
	min-height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
}

.not-found-content {
	text-align: center;
	max-width: 600px;
}

.not-found-content h2 {
	font-size: 3rem;
	margin-bottom: 1rem;
	color: #2d3748;
}

.not-found-content p {
	font-size: 1.2rem;
	color: #718096;
	margin-bottom: 2rem;
}

.btn-primary {
	display: inline-block;
	background: #2c3e50;
	color: white;
	padding: 1rem 2rem;
	border-radius: 8px;
	text-decoration: none;
	font-weight: 600;
	transition: all 0.3s ease;
}

.btn-primary:hover {
	background: #1a252f;
	transform: translateY(-2px);
	box-shadow: 0 6px 16px rgba(44, 62, 80, 0.4);
}

@media (max-width: 968px) {
	.content-wrapper {
		grid-template-columns: 1fr;
	}

	.project-sidebar {
		order: -1;
	}

	.navigation-footer {
		grid-template-columns: 1fr;
	}

	.nav-next {
		grid-column: 1;
	}
}

@media (max-width: 768px) {
	.hero-content h1 {
		font-size: 2.5rem;
	}

	.project-description {
		padding: 1.5rem;
		font-size: 1rem;
	}

	.project-content {
		padding: 2rem 1rem;
	}
}
</style>
