<script setup lang="ts">
import CustomHeader from './components/CustomHeader/index.vue';
import CustomSidebar from './components/CustomSidebar/index.vue';

</script>

<template>
  <CustomHeader></CustomHeader>
  <div class="wrapper">
    <CustomSidebar></CustomSidebar>
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>
