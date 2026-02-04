<template>
	<div class="project-filter">
		<div class="search-box">
			<div class="search-input-wrapper">
				<input v-model="searchInput" type="text" placeholder="Search projects by name or description..." class="search-input" @input="onSearchInput" />
				<button v-if="searchInput" class="clear-search-btn" aria-label="Clear search" @click="clearSearch">✕</button>
			</div>
		</div>

		<div class="filter-section">
			<div class="filter-header">
				<h3>Filter by Technology</h3>
				<button v-if="selectedLabelsLocal.length > 0" class="clear-all-btn" @click="clearFilters">Clear All ({{ selectedLabelsLocal.length }})</button>
			</div>

			<div class="label-filters">
				<button v-for="label in allLabels" :key="label" :class="['label-btn', { active: selectedLabelsLocal.includes(label) }]" @click="toggleLabel(label)">
					{{ label }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
	search: string;
	selectedLabels: string[];
	allLabels: string[];
}

interface Emits {
	(e: 'update:search', value: string): void;
	(e: 'update:selectedLabels', value: string[]): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const searchInput = ref<string>(props.search);
const selectedLabelsLocal = ref<string[]>([...props.selectedLabels]);

const onSearchInput = (): void => {
	emit('update:search', searchInput.value);
};

const clearSearch = (): void => {
	searchInput.value = '';
	emit('update:search', '');
};

watch(
	() => props.search,
	newVal => {
		searchInput.value = newVal;
	}
);

watch(
	() => props.selectedLabels,
	newVal => {
		selectedLabelsLocal.value = [...newVal];
	},
	{ deep: true }
);

const toggleLabel = (label: string): void => {
	const index = selectedLabelsLocal.value.indexOf(label);
	if (index > -1) {
		selectedLabelsLocal.value.splice(index, 1);
	} else {
		selectedLabelsLocal.value.push(label);
	}
	emit('update:selectedLabels', selectedLabelsLocal.value);
};

const clearFilters = (): void => {
	selectedLabelsLocal.value = [];
	emit('update:selectedLabels', []);
};
</script>

<style src="../assets/css/ProjectFilter.css" scoped></style>
