<script lang="ts" setup>
const { isMobile } = useDevice();
</script>

<template>
  <div>
    <div class="container scroll" :class="!isMobile ?? 'px-28'">
      <div class="min-h-screen py-20 about">
        <div v-if="isMobile" class="text-white mt-6">
          <div class="flex justify-between items-center">
            <NuxtLink to="/" class="font-semibold text-4xl">Eko&trade;</NuxtLink>
            <div>Web Developer</div>
          </div>
          <NuxtImg src="/foto.jpg" class="rounded-lg mt-8 mb-6 h-64 w-full object-cover" />

          <div class="text-2xl font-light text-center">
            <p>ekohunterz@gmail.com</p>
            <p>Base in Cilegon, Banten</p>
            <p class="text-sm mt-8 text-abu-1">© 2023 Eko Teguh M. All Rights Reserved</p>
          </div>
          <div class="flex gap-2 mt-7 justify-center">
            <IconSosmed :name="'mdi:github'" />
            <IconSosmed :name="'mdi:instagram'" />
            <IconSosmed :name="'mdi:facebook'" />
            <IconSosmed :name="'mdi:linkedin'" />
          </div>
          <NuxtLink
            to="mailto:ekohunterz@gmail.com"
            class="block bg-primary mt-7 hover:bg-opacity-0 border-2 hover:text-primary duration-500 hover:cursor-pointer border-primary p-4 rounded-full text-center text-dark-950 uppercase"
          >
            <Icon name="mdi:email-outline" /> Hire Me!
          </NuxtLink>
        </div>
        <div data-aos="fade-left" class="flex mt-16" id="home">
          <div class="border flex items-center px-6 py-2 border-abu-2 rounded-full font-extralight"><Icon name="mdi:home-outline" size="20" />&nbsp; Introduce</div>
        </div>

        <div data-aos="fade-left" class="mt-20 lg:text-[78px] text-5xl font-light leading-tight">
          Hi, I'm <span class="text-primary block">Eko Teguh Muhammadi,</span> <span class="block">Web Developer</span>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" class="mt-10 font-light text-abu-1">
          I design and code beautifully simple things and i love what i do. <span class="block">Just simple like that!</span>
        </div>
      </div>
      <PageAbout />
      <PageSkill />
      <PageProject />
      <PageCertificates />
      <PageContact />
    </div>
  </div>
</template>

<style scoped></style>
