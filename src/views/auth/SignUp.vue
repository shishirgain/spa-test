<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen gap-2">
        <form class="form" @submit.prevent="submit">
            <h2>Sign Up</h2>
            <input class="form__item" type="text" name="name" placeholder="Name" required>
            <input class="form__item" type="email" name="email" placeholder="Email" required>
            <input class="form__item" type="password" name="password" placeholder="Min: 8" required>
            <input class="form__item" type="password" name="confirmPassword" placeholder="Confirm password" required>
            <hr style="width: 100%">
            <small class="text-color-red" v-if="errors">{{ errors }}</small>
            <input class="form__item--btn" type="submit" :value="submitting ? 'Submitting' : 'Sing up'" :disabled="submitting">
            <small>If Already registered. Please <router-link to="/auth/signin">Sign in</router-link></small>
        </form>
    </div>
</template>
<script setup lang="ts">
import axios from '@/services/axios'
import { ref, reactive } from 'vue'
import { RouterLink, useRouter } from "vue-router"
const router = useRouter()

const submitting = ref(false)

const errors = ref('')

const submit = (formData: any) => {
    submitting.value = true
    axios.post('/login', new FormData(formData.target)).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
        errors.value = err.message
    }).finally(() => {
        router.push('/auth/app-setup')
        submitting.value = false
    })
}

</script>
