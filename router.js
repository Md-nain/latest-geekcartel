import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Research from '@/pages/Research.vue';
import Team from '@/pages/Team.vue';
import Opportunities from '@/pages/Opportunities.vue';

const routes = [
  { path: '', component: Home },
  { path: '/research', component: Research, meta: { title: 'Resources'} },
  { path: '/team', component: Team, meta: { title: 'Team'} },
  { path: '/opportunities', component: Opportunities, meta: { title: 'Opportunities'} },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Geekcartel';
  next();
});

export default router;