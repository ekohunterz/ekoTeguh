<template>
  <div class="min-h-screen py-20">
    <div data-aos="fade-left" data-aos-duration="1000" class="flex">
      <div class="border flex items-center px-6 py-2 border-abu-2 rounded-full font-extralight"><Icon name="mdi:user-outline" size="20" />&nbsp; {{ $t("pageTitles.about") }}</div>
    </div>

    <div data-aos="fade-left" data-aos-duration="1000" class="mt-20 text-5xl font-light leading-snug" id="about">
      {{ $t("pageTitles.about") }} <span class="text-primary">{{ $t("me") }}</span>
    </div>
    <p data-aos="fade-left" data-aos-duration="1000" class="mt-10 text-abu-1 lg:w-2/3 leading-relaxed" v-html="$t('about_me')"></p>
    <div data-aos="fade-up" data-aos-duration="3000" class="mt-20 text-5xl font-light leading-snug">{{ $t("education.title") }}</div>
    <div data-aos="fade-up" data-aos-duration="3000" class="mt-10">
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-16">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-lg font-light leading-none text-gray-400">2018 - 2023</time>
          <h3 class="text-2xl mt-6 font-normal text-white">{{ $t("education.bachelor.title") }}</h3>
          <p class="leading-relaxed text-abu-1 font-light">{{ $t("education.bachelor.major") }}</p>
          <p class="leading-relaxed text-abu-1 font-light">{{ $t("education.bachelor.name") }}</p>
        </li>
        <li class="mb-10 ms-16">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-lg font-light leading-none text-gray-400">2014 - 2017</time>
          <h3 class="text-2xl mt-6 font-normal text-white">{{ $t("education.school.title") }}</h3>
          <p class="leading-relaxed text-abu-1 font-light">{{ $t("education.school.major") }}</p>
          <p class="leading-relaxed text-abu-1 font-light">{{ $t("education.school.name") }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>
