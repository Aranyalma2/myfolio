import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import ProjectDetail from '@/views/ProjectDetail.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Németh Bálint - Computer Engineer'
		}
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects,
		meta: {
			title: 'Projects - Németh Bálint'
		}
	},
	{
		path: '/projects/:id',
		name: 'ProjectDetail',
		component: ProjectDetail,
		meta: {
			title: 'Project Details - Németh Bálint'
		}
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/'
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0, behavior: 'smooth' };
		}
	}
});

// Update page title on route change
router.beforeEach((to, from, next) => {
	const title = to.meta.title as string;
	if (title) {
		document.title = title;
	}
	next();
});

export default router;
