import Vue from 'vue';
import VueRouter from "vue-router";
import routes from '@/routes/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history',
});

router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router