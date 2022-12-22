<template>
    <div class="flex flex-col justify-center items-center h-screen w-screen gap-2">
        <form class="form" @submit.prevent="submit">
            <h2>Sign In</h2>
            <input class="form__item" type="email" name="email" placeholder="Email" required>
            <input class="form__item" type="password" name="password" placeholder="Min: 8" required>
            <hr style="width: 100%">
            <small class="text-color-red" v-if="errors">{{ errors }}</small>
            <input class="form__item--btn" type="submit" :value="submitting ? 'Submitting' : 'Sing in'" :disabled="submitting">
            <small>If you don't have an account. Please <router-link to="/auth/signup">Sign Up</router-link></small>
        </form>
    </div>
</template>
<script setup lang="ts">
import axios from '@/services/axios'
import { ref } from 'vue';
import { RouterLink } from "vue-router";

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
        submitting.value = false
    })
}

</script>
