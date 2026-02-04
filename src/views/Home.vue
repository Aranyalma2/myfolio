<template>
	<div class="home">
		<section class="hero">
			<div class="hero-content">
				<div class="hero-left">
					<div class="hero-left-top">
						<div class="profile-image-wrapper">
							<img src="/profile.webp" :alt="basics.name" class="profile-image" />
						</div>
						<div class="hero-text">
							<h1 class="hero-title">
								{{ basics.name }}
							</h1>
							<p class="headline">
								{{ basics.headline }}
							</p>
							<p class="location">
								{{ basics.location }}
							</p>
						</div>
					</div>

					<div class="contact-links">
						<a :href="`mailto:${basics.email}`" class="contact-link" aria-label="Email">Email</a>
						<a :href="socialLinks.linkedIn" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="LinkedIn"> LinkedIn </a>
						<a :href="socialLinks.github" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="GitHub"> GitHub </a>
					</div>
				</div>

				<div class="hero-right">
					<h2 class="about-title">About Me</h2>
					<div class="summary-content" v-html="summaryContent"></div>
				</div>
			</div>
		</section>

		<section class="education">
			<div class="container">
				<h2>Education</h2>
				<div class="timeline">
					<div v-for="edu in education" :key="edu.id" class="timeline-item">
						<div class="timeline-marker"></div>
						<div class="timeline-content">
							<div class="timeline-header">
								<h3>{{ edu.degree }}</h3>
								<span class="timeline-period">{{ edu.period }}</span>
							</div>
							<h4>{{ edu.school }}</h4>
							<p class="timeline-area">
								{{ edu.area }}
							</p>
							<div v-if="edu.description" class="timeline-description" v-html="edu.description"></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="experience">
			<div class="container">
				<h2>Work Experience</h2>
				<div class="timeline">
					<div v-for="exp in experience" :key="exp.id" class="timeline-item">
						<div class="timeline-marker"></div>
						<div class="timeline-content">
							<div class="timeline-header">
								<h3>{{ exp.position }}</h3>
								<span class="timeline-period">{{ exp.period }}</span>
							</div>
							<h4>{{ exp.company }}</h4>
							<p v-if="exp.location" class="timeline-location">
								{{ exp.location }}
							</p>
							<div class="timeline-description" v-html="exp.description"></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="skills">
			<div class="container">
				<h2>Technical Skills</h2>
				<div class="skills-grid">
					<div v-for="skill in skills" :key="skill.id" class="skill-card">
						<h3>{{ skill.name }}</h3>
						<div class="keywords">
							<span v-for="keyword in skill.keywords" :key="keyword" class="keyword">
								{{ keyword }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="certifications">
			<div class="container">
				<h2>Certifications & Trainings</h2>
				<div class="cert-grid">
					<div v-for="cert in certifications" :key="cert.id" class="cert-card">
						<h3>{{ cert.title }}</h3>
						<p class="cert-issuer">
							{{ cert.issuer }}
						</p>
						<p class="cert-date">
							{{ cert.date }}
						</p>
						<div v-if="cert.description" class="cert-description" v-html="cert.description"></div>
					</div>
				</div>
			</div>
		</section>

		<section class="interests">
			<div class="container">
				<h2>Interests</h2>
				<div class="interests-grid">
					<div v-for="interest in interests" :key="interest.id" class="interest-card">
						<h3>{{ interest.name }}</h3>
						<div class="interest-keywords">
							<span v-for="keyword in interest.keywords" :key="keyword" class="interest-keyword">
								{{ keyword }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="cta">
			<div class="container">
				<h2>View My Projects</h2>
				<p class="cta-subtitle">Explore my projects and works over the years</p>
				<router-link to="/projects" class="btn-primary"> Browse Projects </router-link>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { basics, socialLinks, summaryContent } from '@/data/basics';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import { certifications } from '@/data/certifications';
import { interests } from '@/data/interests';
</script>

<style src="../assets/css/Home.css" scoped></style>
