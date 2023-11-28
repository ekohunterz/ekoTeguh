<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div class="flex flex-col gap-3 text-abu-1">
    <NuxtLink :to="switchLocalePath('en')"><Icon name="openmoji:flag-united-states" /> English</NuxtLink>
    <NuxtLink :to="switchLocalePath('id-ID')"><Icon name="openmoji:flag-indonesia" /> Bahasa Indonesia</NuxtLink>
  </div>
</template>
