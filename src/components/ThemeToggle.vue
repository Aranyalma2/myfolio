<template>
	<button class="theme-toggle" :aria-label="themeLabel" title="Toggle theme" @click="toggleTheme">
		<svg v-if="theme === 'light'" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
			<circle cx="12" cy="12" r="5" />
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</svg>
		<svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	</button>
</template>

<script setup lang="ts">
/*global document, localStorage, window*/
import { ref, computed, onMounted } from 'vue';

// Theme can be 'light' or 'dark'
const theme = ref<'light' | 'dark'>('light');

const themeLabel = computed(() => {
	return theme.value === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
});

function getSystemTheme(): 'light' | 'dark' {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(newTheme: 'light' | 'dark') {
	const root = document.documentElement;

	// Remove existing theme classes
	root.classList.remove('light', 'dark');

	// Apply theme class
	root.classList.add(newTheme);
	localStorage.setItem('theme', newTheme);

	theme.value = newTheme;
}

function toggleTheme() {
	// Toggle between light and dark
	applyTheme(theme.value === 'light' ? 'dark' : 'light');
}

onMounted(() => {
	// Load saved theme or default to system preference
	const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

	if (savedTheme) {
		applyTheme(savedTheme);
	} else {
		// No saved preference, use system theme
		applyTheme(getSystemTheme());
	}

	// Listen for system theme changes (only if user hasn't manually set a preference)
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', _e => {
		const savedTheme = localStorage.getItem('theme');
		if (!savedTheme) {
			// User hasn't set a preference, follow system
			applyTheme(getSystemTheme());
		}
	});
});

// Expose applyTheme for parent component if needed
defineExpose({ applyTheme });
</script>

<style src="../assets/css/ThemeToggle.css" scoped></style>
