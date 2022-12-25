<template>
    <header class="flex justify-between items-center px-1 py-1">
        <div>Saas Application</div>
        <div><span class="mx-2">{{ user?.name }}</span><button class="p-1 btn btn--red" @click="authStore.logout">Signout</button></div>
    </header>
    <hr>
</template>
<script setup lang="ts">
import { useApplicationStore } from '@/stores/application'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()

const { user } = storeToRefs(useApplicationStore())
</script>