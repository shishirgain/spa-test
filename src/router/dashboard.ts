import Dashboard from '@/views/application/Dashboard.vue'
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