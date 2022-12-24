<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen gap-2">
        <form class="form" @submit.prevent="authStore.login">
            <h2>Sign In</h2>
            <input class="form__item" type="email" name="email" placeholder="Email" required>
            <input class="form__item" type="password" name="password" placeholder="Min: 8" required>
            <hr>
            <small class="text-color-red" v-if="error">{{ error }}</small>
            <input class="form__item--btn" type="submit" :value="loading ? 'Submitting' : 'Sing in'" :disabled="loading">
            <small v-if="landload">If you don't have an account. Please <router-link to="/auth/signup">Sign Up</router-link></small>
        </form>
    </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { RouterLink } from "vue-router";
import { storeToRefs } from 'pinia'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const { loading, error, landload } = storeToRefs(authStore)

onBeforeUnmount(()=> {
    authStore.errorClear()
})

</script>
