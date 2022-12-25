<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useApplicationStore } from "@/stores/application";
import Loader from '@/components/Loader.vue'
import Navbar from '@/components/Navbar.vue'

const applicationStore = useApplicationStore();
const { loading } = storeToRefs(applicationStore);

onBeforeMount(() => {
    applicationStore.init();
});
</script>
<template>
    <loader v-if="loading" />
    <div v-else>
        <navbar/>
        <router-view />
    </div>
</template>