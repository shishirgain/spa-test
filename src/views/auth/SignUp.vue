<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen gap-2">
        <form class="form" @submit.prevent="authStore.register">
            <h2>Sign Up</h2>
            <input class="form__item" type="text" name="name" placeholder="Name" required>
            <input class="form__item" type="email" name="email" placeholder="Email" required>
            <input class="form__item" type="password" name="password" placeholder="Min: 8" required>
            <input class="form__item" type="password" name="password_confirmation" placeholder="Confirm password" required>
            <hr>
            <small class="text-color-red" v-if="error">{{ error }}</small>
            <input class="form__item--btn" type="submit" :value="loading ? 'Submitting' : 'Sing up'" :disabled="loading">
            <small>If Already registered. Please <router-link to="/auth/signin">Sign in</router-link></small>
        </form>
    </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia'
import { RouterLink } from "vue-router"

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const { loading, error } = storeToRefs(authStore)


onBeforeUnmount(()=> {
    authStore.errorClear()
})

</script>
