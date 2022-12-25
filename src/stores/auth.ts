import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/services/axios'
import { useRouter } from "vue-router"

export const useAuthStore = defineStore('auth', () => {
    const error = ref<String>('')
    const loading = ref<Boolean>(false)
    const landload = ref<Boolean>(!(window.location.hostname.split('.').length > 1))

    const router = useRouter()

    // methods
    const login = (formData: any) => {
        loading.value = true
        axios.post('/login', new FormData(formData.target))
            .then(res => {
                if (res.status === 200) {
                    localStorage.token = res.data.token
                    router.push('/dashboard')
                    // this.getUser()
                }
            }).catch(err => {
                error.value = err.response.data.message
            }).finally(() => {
                loading.value = false
            })
    }

    const logout = () => {
        localStorage.removeItem('token')
        router.push('/dashboard')
    }

    const register = (formData: any) => {
        loading.value = true
        axios.post('/register', new FormData(formData.target))
            .then(res => {
                localStorage.token = res.data.token
                router.push('/auth/app-setup')
            }).catch(err => {
                error.value = err.response.data.message
            }).finally(() => {
                loading.value = false
            })
    }

    const errorClear = () => {
        error.value = ''
    }

    return { error, loading, login, logout, register, errorClear, landload }
})
