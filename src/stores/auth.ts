import { defineStore } from 'pinia'
import axios from '@/services/axios'
import { useRouter } from "vue-router"

const router = useRouter()

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        error: '',
        loading: false,
        landload: !(window.location.hostname.split('.').length > 1)
    }),
    actions: {
        login(formData: any) {
            this.loading = true
            axios.post('/login', new FormData(formData.target))
                .then(res => {
                    if (res.status === 200) {
                        localStorage.token = res.data.token
                        // this.getUser()
                    }
                }).catch(err => {
                    this.error = err.response.data.message
                }).finally(() => {
                    this.loading = false
                })
        },
        getUser(){
            console.log('call');
        },
        register(formData: any) {
            this.loading = true
            axios.post('/register', new FormData(formData.target))
                .then(res => {
                    console.log(res);
                    router.push('/auth/app-setup')
                }).catch(err => {
                    this.error = err.message
                }).finally(() => {
                    this.loading = true
                })
        },
        errorClear() {
            this.error = ''
        }
    },
    getters: {}
})
