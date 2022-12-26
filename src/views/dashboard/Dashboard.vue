<template>
    <div class="p-2">
        <h3>User list</h3>
        <table v-if="subscribers.length" class="w-full table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Domain</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(subscriber, index) in subscribers" :key="`subscriber-item-${subscriber.id}`">
                    <td>{{ subscriber.name }}</td>
                    <td>{{ subscriber.email }}</td>
                    <td>{{ subscriber.tenant.domains.map((item: any) => item.domain).join(', ') }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue';

import { useDashboardStore } from '@/stores/dashboard'
import { useAuthStore } from '@/stores/auth'

const dashboardStore = useDashboardStore()
const authStore = useAuthStore()

const { subscribers } = storeToRefs(dashboardStore)
const { landload } = storeToRefs(authStore)

onBeforeMount(() => {
    if(landload.value) {
        dashboardStore.getSubscribersData()
    }else{

    }
})

</script>