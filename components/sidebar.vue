<script setup lang="ts">
const { isMobile } = useDevice();
</script>

<template>
  <aside v-if="!isMobile" class="max-w-[400px] p-[50px] text-white border-[1px] border-solid fixed top-[50%] translate-y-[-50%] left-5 border-abu-2 rounded-[30px]">
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
      <IconSosmed link="https://github.com/ekohunterz/" :name="'mdi:github'" />
      <IconSosmed link="https://www.instagram.com/ekoteguh.m/" :name="'mdi:instagram'" />
      <IconSosmed link="https://www.facebook.com/Ryuuza01/" :name="'mdi:facebook'" />
      <IconSosmed link="https://www.linkedin.com/in/eko-teguh-muhammadi-3614b1144/" :name="'mdi:linkedin'" />
    </div>
    <NuxtLink
      to="mailto:ekohunterz@gmail.com"
      class="block bg-primary mt-7 hover:bg-opacity-0 border-2 hover:text-primary duration-500 hover:cursor-pointer border-primary p-4 rounded-full text-center text-dark-950 uppercase"
    >
      <Icon name="mdi:email-outline" /> {{ $t("form.hire_me") }}
    </NuxtLink>
  </aside>
</template>
