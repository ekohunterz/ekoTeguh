<template>
  <NuxtLink
    :to="link"
    target="__blank"
    class="rounded-full border-abu hover:border-primary ease-in-out duration-300 hover:text-primary hover:cursor-pointer text-abu w-[50px] h-[50px] flex items-center justify-center border-2"
  >
    <Icon :name="name" size="24" />
  </NuxtLink>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
