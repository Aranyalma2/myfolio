<template>
	<router-link :to="`/projects/${project.id}`" class="project-card">
		<div class="project-image">
			<img :src="project.image" :alt="project.title" loading="lazy" />
			<div v-if="project.featured" class="featured-badge">Featured</div>
		</div>
		<div class="project-content">
			<h3>{{ project.title }}</h3>
			<p class="short-description">
				{{ project.shortDescription }}
			</p>
			<div class="labels">
				<span v-for="label in project.labels.slice(0, 5)" :key="label" class="label">
					{{ label }}
				</span>
				<span v-if="project.labels.length > 5" class="label-more"> +{{ project.labels.length - 5 }} </span>
			</div>
			<div class="card-footer">
				<span class="view-more">View Details →</span>
			</div>
		</div>
	</router-link>
</template>

<script setup lang="ts">
import type { Project } from '@/types';

interface Props {
	project: Project;
}

defineProps<Props>();
</script>

<style scoped>
.project-card {
	background: white;
	border-radius: 8px;
	overflow: hidden;
	border: 1px solid #e2e8f0;
	transition:
		box-shadow 0.3s ease,
		transform 0.3s ease;
	text-decoration: none;
	color: inherit;
	display: flex;
	flex-direction: column;
	height: 100%;
}

.project-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.project-image {
	position: relative;
	width: 100%;
	height: 200px;
	overflow: hidden;
	background: #2c3e50;
}

.project-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
	transform: scale(1.05);
}

.featured-badge {
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	background: #2c3e50;
	color: white;
	padding: 0.4rem 0.8rem;
	border-radius: 4px;
	font-size: 0.8rem;
	font-weight: 600;
}

.project-content {
	padding: 1.25rem;
	flex: 1;
	display: flex;
	flex-direction: column;
}

.project-content h3 {
	font-size: 1.3rem;
	margin-bottom: 0.6rem;
	color: #2d3748;
	line-height: 1.3;
}

.short-description {
	color: #4a5568;
	line-height: 1.5;
	margin-bottom: 0.75rem;
	flex: 1;
	font-size: 0.95rem;
}

.labels {
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
	margin-bottom: 0.75rem;
}

.label {
	background: #e2e8f0;
	color: #4a5568;
	padding: 0.3rem 0.7rem;
	border-radius: 4px;
	font-size: 0.8rem;
	font-weight: 600;
}

.label-more {
	background: #cbd5e0;
	color: #4a5568;
	padding: 0.3rem 0.7rem;
	border-radius: 4px;
	font-size: 0.8rem;
	font-weight: 600;
}

.card-footer {
	display: flex;
	justify-content: flex-end;
	margin-top: auto;
}

.view-more {
	color: #2c3e50;
	font-weight: 600;
	font-size: 0.9rem;
	transition: transform 0.3s ease;
}

.project-card:hover .view-more {
	transform: translateX(5px);
}
</style>
