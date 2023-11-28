<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });

const { data: menu } = await useFetch("/api/menu");

const isOpen = ref(false);
const { isMobile } = useDevice();

function scrollTop() {
  // For Chrome, Firefox, IE, dan Opera
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div>
    <!-- <div class="background"></div> -->
    <div class="bg-dark-950 py-2 min-h-screen px-6">
      <Sidebar />
      <main class="lg:w-3/4 lg:ml-auto text-white z-90"><slot /></main>
      <div
        @click="isOpen = true"
        :class="isMobile ? 'fixed' : 'absolute'"
        class="lg:right-20 right-10 lg:top-[85px] top-12 text-white flex border hover:border-primary hover:text-primary hover:cursor-pointer border-abu-2 items-center w-12 justify-center h-12 rounded-full"
      >
        <Icon name="mdi:menu" size="24" />
      </div>

      <div v-if="!isMobile" class="fixed right-20 top-[50%] translate-y-[-50%] border border-abu-1 rounded-full p-3 text-white">
        <div class="flex flex-col gap-5">
          <Menu v-for="item in menu" :icon="item.icon" :link="item.href">{{ locale === "en" ? item.title : item.title_indo }}</Menu>
        </div>
      </div>
      <div class="fixed bottom-10 right-10 lg:right-20">
        <UTooltip
          text="To The Top"
          :popper="{ arrow: true, placement: 'left' }"
          :ui="{
            background: 'bg-gray-700',
            color: 'text-white',
            ring: 'ring-0',
            arrow: { background: ' before:bg-gray-700 dark:before:bg-gray-800', ring: 'before:ring-0' },
          }"
        >
          <div @click="scrollTop" class="p-3 border animate-bounce hover:text-primary hover:border-primary hover:cursor-pointer duration-300 ease-in-out text-white rounded-full border-abu-1">
            <NuxtLink><Icon name="mdi:chevron-up" size="24" /></NuxtLink>
          </div>
        </UTooltip>
      </div>
    </div>

    <!-- Menu Slide -->
    <USlideover
      v-model="isOpen"
      side="right"
      :ui="{
        overlay: {
          background: 'bg-gray-300/30',
        },
        width: 'w-screen md:max-w-md max-w-xs',
      }"
    >
      <div class="ps-24 pe-12 pt-24 flex-1 text-white bg-dark-950">
        <div class="text-xl">Menu</div>
        <div class="mt-8 text-sm">
          <div class="flex gap-4 flex-col">
            <NuxtLink v-for="item in menu" class="flex items-center text-abu-1 hover:text-white group" :to="localePath(item.href)"
              ><Icon class="group-hover:text-primary" :name="item.icon" size="24"></Icon>&nbsp; {{ locale === "en" ? item.title : item.title_indo }}</NuxtLink
            >
          </div>
          <div class="mt-8 text-xl">{{ $t("language") }}</div>
          <LangSwitcher class="mt-8" />
        </div>
      </div>
    </USlideover>
  </div>
</template>

<style scoped></style>
