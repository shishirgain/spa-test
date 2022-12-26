<template>
    <div class="p-2" v-if="subscribers.length">
        <h3>User list</h3>
        <table class="w-full table">
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
    <div v-if="!landload && user?.id">
        <h3>User Info</h3>
        <div>
            <h2>Domains</h2>
            <ul>
                <li v-for="(domain, index) in user?.tenant?.domains">
                    <!-- must need review -->
                    <a :href="`${domain.domain}`" target="_blank">{{ domain.domain }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue';

import { useDashboardStore } from '@/stores/dashboard'
import { useApplicationStore } from '@/stores/application'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const applicationStore = useApplicationStore()
const dashboardStore = useDashboardStore()

const { landload } = storeToRefs(authStore)
const { user } = storeToRefs(applicationStore)
const { subscribers } = storeToRefs(dashboardStore)

onBeforeMount(() => {
    if(landload.value) {
        dashboardStore.getSubscribersData()
    }else{

    }
})

</script>