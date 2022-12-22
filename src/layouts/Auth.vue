<template>
    <div class="root">
        <router-view/>
    </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<style scoped>
.root{
    display: flex;
    flex-direction: column;
    /* min-height: 100vh; */
    /* width: 100%; */
    /* justify-content: center;
    align-items: center; */
}
</style>