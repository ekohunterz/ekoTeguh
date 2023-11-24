<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });

const { data: projects } = await useFetch("/api/projects");
</script>

<template>
  <div class="relative min-h-screen lg:pe-24 py-20">
    <div data-aos="zoom-in" data-aos-duration="3000" class="flex" id="project">
      <div class="border flex items-center px-6 py-2 border-abu-2 rounded-full font-extralight"><Icon name="material-symbols:work-outline" size="20" />&nbsp; {{ $t("pageTitles.portfolio") }}</div>
    </div>

    <div data-aos="zoom-in" data-aos-duration="3000" class="mt-20 text-5xl font-light leading-snug" v-if="locale === 'en'">Featured <span class="text-primary">Project</span></div>
    <div data-aos="zoom-in" data-aos-duration="3000" class="mt-20 text-5xl font-light leading-snug" v-else>Project <span class="text-primary">Unggulan</span></div>
    <div class="lg:grid lg:grid-cols-2 flex flex-wrap mt-6 gap-6">
      <ProjectCard data-aos="zoom-in-up" data-aos-duration="3000" v-for="project in projects" :key="project.id" :id="project.id" :img="project.image">{{ project.title }}</ProjectCard>
    </div>
  </div>
</template>
