<template>
	<div id="app">
		<nav class="navbar">
			<div class="nav-container">
				<router-link to="/" class="logo">
					<span class="logo-text">{{ basics.name }}</span>
				</router-link>
				<div class="nav-links">
					<router-link to="/" class="nav-link"> Home </router-link>
					<router-link to="/projects" class="nav-link"> Projects </router-link>
				</div>
			</div>
		</nav>

		<main>
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</main>

		<footer class="footer">
			<div class="footer-content">
				<p>&copy; {{ currentYear }} {{ basics.name }}. All rights reserved.</p>
				<div class="footer-links">
					<a :href="socialLinks.github" target="_blank" rel="noopener noreferrer">GitHub</a>
					<a :href="socialLinks.linkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					<a :href="`mailto:${basics.email}`">Contact</a>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { basics, socialLinks } from '@/data/basics';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style src="./assets/css/colors.css"></style>
<style src="./assets/css/App.css"></style>
