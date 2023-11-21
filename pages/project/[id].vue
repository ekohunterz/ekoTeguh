<script setup>
const { data: projects } = await useFetch("/api/projects");

const route = useRoute();

const projectID = route.params.id;

const data = projects.value.find((project) => project.id == projectID);
</script>

<template>
  <Head>
    <Title>{{ data.title }} | Eko Teguh M</Title>
  </Head>
  <div class="container px-28">
    <div class="relative min-h-screen pe-24 py-20">
      <div class="flex">
        <div class="border flex items-center px-6 py-2 border-abu-2 rounded-full font-extralight"><Icon name="carbon:portfolio" size="20" />&nbsp; Portfolio</div>
      </div>

      <div class="mt-16 text-4xl font-light leading-snug">
        {{ data.title }}
        <NuxtImg :src="data.image" loading="lazy" class="mt-6 rounded-sm shadow-sm w-3/4" :alt="data.title" />
      </div>
      <div class="mt-6 flex gap-3">
        <div v-for="(tech, index) in data.stack" :key="index" class="text-primary border-2 border-primary bg-transparent rounded-full py-2 px-4">{{ tech }}</div>
      </div>
      <p v-html="data.content.en" class="mt-6 w-3/4 text-abu-1"></p>

      <div class="mt-6 flex flex-wrap gap-4">
        <NuxtLink
          :to="data.links.github"
          class="border-2 flex items-center border-white hover:border-primary hover:text-primary duration-300 ease-in-out bg-transparent hover:scale-105 text-white px-4 py-2 rounded-full"
          >Github <Icon name="mdi:github"
        /></NuxtLink>
        <NuxtLink
          :to="data.links.demo"
          class="border-2 flex items-center border-white hover:border-primary hover:text-primary duration-300 ease-in-out bg-transparent hover:scale-105 text-white px-4 py-2 rounded-full"
          >Demo <Icon name="mdi:open-in-new"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>
