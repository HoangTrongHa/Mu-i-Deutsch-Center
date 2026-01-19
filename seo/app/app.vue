<template>
  <div>
    <NuxtPage />
    <ClientOnly>
      <ToastContainer />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import ToastContainer from '../components/organisms/ToastContainer.vue'
</script>

<style>
@import "../assets/css/main.css";
</style>
