<script setup lang="ts">
defineProps({
  icon: {
    required: true,
    type: String,
  },
  percentage: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <div class="px-6 lg:w-48 w-36 py-16 border-2 group border-abu-1 hover:border-primary duration-500 ease-in-out rounded-full flex flex-col gap-7 justify-center items-center">
    <div class="h-24 flex items-center group-hover:scale-110"><Icon :name="icon" size="96" /></div>
    <span class="text-2xl group-hover:hidden text-primary text-center"><slot /></span>
    <span class="text-2xl hidden group-hover:flex text-primary text-center">{{ percentage }}</span>
  </div>
</template>
