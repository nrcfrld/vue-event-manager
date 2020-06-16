import Vue from 'vue';
import VueRouter from 'vue-router';
import EventList from '../views/EventList.vue';
import EventCreate from '../views/EventCreate.vue';
import NProgress from 'nprogress';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'event-list',
		component: EventList,
		props: true
	},
	{
		path: '/event/create',
		name: 'event-create',
		component: EventCreate
	},
	{
		path: '/event/:id',
		name: 'event-show',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/EventShow.vue'),
		props: true,
		beforeEnter(routeTo, routeFrom, next) {
			store
				.dispatch('event/fetchEvent', routeTo.params.id)
				.then(event => {
					routeTo.params.event = event;
					next();
				})
				.catch(error => {
					if (error.response && error.response.status == 404) {
						next({ name: 'not-found', params: { resource: 'event' } });
					} else {
						next({ name: 'network-issue' });
					}
				});
		}
	},
	{
		path: '/not-found',
		name: 'not-found',
		component: () => import('../views/NotFound.vue'),
		props: true
	},
	{
		path: '/network-issue',
		name: 'network-issue',
		component: () => import('../views/NetworkIssue.vue')
	},
	{
		path: '*',
		redirect: { name: 'not-found', params: { resource: 'page' } }
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((routeTo, routeFrom, next) => {
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
