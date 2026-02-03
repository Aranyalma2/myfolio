import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
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
