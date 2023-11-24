<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="relative min-h-screen lg:pe-24 py-20">
    <div data-aos="fade-left" data-aos-duration="1000" class="flex" id="skill">
      <div class="border flex items-center px-6 py-2 border-abu-2 rounded-full font-extralight"><Icon name="icomoon-free:stack" size="20" />&nbsp; {{ $t("pageTitles.skill") }}</div>
    </div>

    <div data-aos="fade-right" data-aos-duration="1000" class="mt-20 text-5xl font-light leading-snug" v-if="locale === 'en'">My <span class="text-primary">Stack</span></div>
    <div data-aos="fade-right" data-aos-duration="1000" class="mt-20 text-5xl font-light leading-snug" v-else>Keterampilan <span class="text-primary">Saya</span></div>
    <div class="mt-12 grid lg:grid-cols-4 grid-cols-2 gap-6">
      <SkillCard data-aos="flip-right" data-aos-duration="3000" icon="mdi:language-html5" percentage="90%">HTML</SkillCard>
      <SkillCard data-aos="flip-left" data-aos-duration="3000" icon="fa-brands:bootstrap" percentage="90%">Bootstrap</SkillCard>
      <SkillCard data-aos="flip-right" data-aos-duration="3000" icon="mdi:tailwind" percentage="60%">TailwindCSS</SkillCard>
      <SkillCard data-aos="flip-left" data-aos-duration="3000" icon="mdi:laravel" percentage="70%">Laravel</SkillCard>
      <SkillCard data-aos="flip-right" data-aos-duration="3000" icon="mdi:language-javascript" percentage="60%">Javascript</SkillCard>
      <SkillCard data-aos="flip-left" data-aos-duration="3000" icon="grommet-icons:mysql" percentage="60%">MySQL</SkillCard>
      <SkillCard data-aos="flip-right" data-aos-duration="3000" icon="tabler:brand-nuxt" percentage="50%">Nuxt 3</SkillCard>
      <SkillCard data-aos="flip-left" data-aos-duration="3000" icon="mdi:vuejs" percentage="50%">VueJS</SkillCard>
    </div>
  </div>
</template>
