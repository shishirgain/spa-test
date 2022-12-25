<template>
    <div class="">
        <h2 class="m-2">Application Setup</h2>
        <hr>
        <form class="form m-2" style="width: 600px" @submit.prevent="submit">
            <div style="display: flex; flex-direction: column; gap: 5px;;">
                <div class="flex items-center justify-between">
                    <label for="domain">Domain name</label> 
                    <small class="text-color-red" v-if="errors">{{ errors }}</small>
                </div>
                <input class="form__item" type="text" name="domain" placeholder="Domain" required>
            </div>
            <hr style="width: 100%">
            <input class="form__item--btn" style="width: 200px;" type="submit" :value="submitting ? 'Submitting' : 'Save'" :disabled="submitting">
        </form>
    </div>
</template>
<script setup lang="ts">
import axios from '@/services/axios'
import { ref } from 'vue'
import { useRouter } from "vue-router"
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
