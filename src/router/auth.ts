// Layout
import Auth from '@/layouts/Auth.vue'

// Pages
import SignIn from '@/views/auth/SignIn.vue'
import SignUp from '@/views/auth/SignUp.vue'
import AppSetup from '@/views/auth/AppSetup.vue'

export default {
    path: '/auth',
    component: Auth,
    children: [
        {
            path: 'signin',
            component: SignIn,
            meta: {
                title: 'Sign in'
            }
        },
        {
            path: 'signup',
            component: SignUp,
            meta: {
                title: 'Sign up'
            }
        },
        {
            path: 'app-setup',
            component: AppSetup,
            meta: {
                title: 'Application setup',
                auth: true
            }
        }
    ]
}