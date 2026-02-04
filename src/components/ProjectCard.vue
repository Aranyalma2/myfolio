<template>
	<router-link :to="`/projects/${project.id}`" class="project-card">
		<div class="project-image">
			<img :src="project.bannerImage" :alt="project.title" loading="lazy" />
			<div v-if="project.tags && project.tags.length > 0" class="tags-container">
				<span v-for="tag in project.tags" :key="tag" :class="['tag', `tag-${getTagClass(tag)}`]">
					{{ tag }}
				</span>
			</div>
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

const getTagClass = (tag: string): string => {
	const normalizedTag = tag.toLowerCase();
	switch (normalizedTag) {
		case 'active':
			return 'active';
		case 'maintained':
			return 'maintained';
		case 'legacy':
			return 'legacy';
		case 'hobby':
			return 'hobby';
		case 'open-source':
			return 'opensource';
		default:
			return 'default';
	}
};
</script>

<style src="../assets/css/ProjectCard.css" scoped></style>
