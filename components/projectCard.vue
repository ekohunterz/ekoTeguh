<script setup lang="ts">
defineProps({
  img: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="`/project/${id}`" class="group hover:cursor-pointer overflow-hidden">
    <div class="relative rounded-xl overflow-hidden">
      <NuxtImg loading="lazy" class="group-hover:scale-110 duration-300 ease-in-out" :src="img" />
      <div class="absolute invisible group-hover:visible ease-in-out bg-dark-950/25 w-full h-full top-0">
        <Icon class="absolute top-1/2 left-1/2 bg-dark-950 p-4 rounded-xl text-white -translate-x-1/2 -translate-y-1/2" name="mdi:eye" size="48" />
      </div>
    </div>
    <h1 class="mt-3 group-hover:underline font-light text-lg"><slot /></h1>
  </NuxtLink>
</template>
