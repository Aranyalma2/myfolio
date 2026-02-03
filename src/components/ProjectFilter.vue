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

<style scoped>
.project-filter {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	border: 1px solid #e2e8f0;
}

.search-box {
	margin-bottom: 1.5rem;
}

.search-input-wrapper {
	position: relative;
	display: flex;
	align-items: center;
}

.search-input {
	width: 100%;
	padding: 0.8rem 2.5rem 0.8rem 0.8rem;
	border: 2px solid #e2e8f0;
	border-radius: 4px;
	font-size: 0.95rem;
	transition: border-color 0.3s ease;
}

.search-input:focus {
	outline: none;
	border-color: #2c3e50;
}

.clear-search-btn {
	position: absolute;
	right: 0.75rem;
	background: #e2e8f0;
	border: none;
	width: 22px;
	height: 22px;
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background 0.3s ease;
	font-size: 0.85rem;
	color: #4a5568;
}

.clear-search-btn:hover {
	background: #cbd5e0;
}

.filter-section {
	margin-top: 1rem;
}

.filter-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.75rem;
}

.filter-header h3 {
	font-size: 1.1rem;
	color: #2d3748;
	font-weight: 600;
}

.clear-all-btn {
	background: transparent;
	border: 2px solid #e74c3c;
	color: #e74c3c;
	padding: 0.4rem 0.8rem;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 600;
	font-size: 0.85rem;
	transition: all 0.3s ease;
}

.clear-all-btn:hover {
	background: #e74c3c;
	color: white;
}

.label-filters {
	display: flex;
	flex-wrap: wrap;
	gap: 0.6rem;
}

.label-btn {
	padding: 0.6rem 1rem;
	border: 2px solid #e2e8f0;
	background: white;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: 0.9rem;
	font-weight: 500;
	color: #4a5568;
}

.label-btn:hover {
	border-color: #2c3e50;
	color: #2c3e50;
}

.label-btn.active {
	background: #2c3e50;
	border-color: #2c3e50;
	color: white;
}

@media (max-width: 768px) {
	.project-filter {
		padding: 1rem;
	}

	.filter-header {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}

	.label-filters {
		gap: 0.4rem;
	}

	.label-btn {
		font-size: 0.85rem;
		padding: 0.5rem 0.9rem;
	}
}
</style>
