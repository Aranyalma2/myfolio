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

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family:
		'Inter',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		'Roboto',
		'Oxygen',
		'Ubuntu',
		'Cantarell',
		'Fira Sans',
		'Droid Sans',
		'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #ffffff;
	color: #2d3748;
}

#app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

main {
	flex: 1;
}

/* Navbar Styles */
.navbar {
	background: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	z-index: 100;
}

.nav-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo {
	font-size: 1.5rem;
	font-weight: 700;
	text-decoration: none;
	transition: opacity 0.3s ease;
	display: flex;
	align-items: center;
}

.logo:hover {
	opacity: 0.8;
}

.logo-text {
	color: #2c3e50;
}

.nav-links {
	display: flex;
	gap: 2rem;
}

.nav-link {
	text-decoration: none;
	color: #2d3748;
	font-weight: 500;
	font-size: 1rem;
	transition: color 0.3s ease;
	position: relative;
	padding: 0.5rem 0;
}

.nav-link::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 2px;
	background: #2c3e50;
	transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
	width: 100%;
}

.nav-link:hover {
	color: #2c3e50;
}

.nav-link.router-link-active {
	color: #2c3e50;
}

/* Footer Styles */
.footer {
	background: #2c3e50;
	color: white;
	padding: 1.5rem;
	margin-top: 3rem;
}

.footer-content {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
}

.footer-links {
	display: flex;
	gap: 1.5rem;
}

.footer-links a {
	color: white;
	text-decoration: none;
	transition: opacity 0.3s ease;
	font-weight: 500;
}

.footer-links a:hover {
	opacity: 0.7;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
	.nav-container {
		padding: 1rem;
	}

	.nav-links {
		gap: 1rem;
	}

	.nav-link {
		font-size: 0.95rem;
	}

	.footer-content {
		flex-direction: column;
		text-align: center;
	}

	.footer-links {
		gap: 1rem;
	}
}

/* Utility Classes */
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 700;
	line-height: 1.2;
}

p {
	line-height: 1.6;
}

a {
	color: #2c3e50;
	text-decoration: none;
}

button {
	cursor: pointer;
	font-family: inherit;
}
</style>
