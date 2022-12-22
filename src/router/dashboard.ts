import Dashboard from '@/views/dashboard/dashboard.vue'
import Default from '@/layouts/Default.vue'

export default {
    path: '/',
    component: Default,
    children: [
        {
            path: '',
            redirect: 'dashboard',
        },
        {
            path: 'dashboard',
            component: Dashboard,
            meta: {
                title: 'Dashboard',
                auth: true
            }
        }
    ]
}