<script setup>
const isOpen = ref(false);
const srcImg = ref("");

const openModal = (img) => {
  isOpen.value = true;
  srcImg.value = img;
};
</script>

<template>
  <div class="relative min-h-screen lg:pe-24 py-20">
    <div data-aos="fade-up" data-aos-duration="2000" class="flex" id="certificates">
      <div class="border flex items-center px-6 py-2 border-abu-2 rounded-full font-extralight"><Icon name="mdi:certificate-outline" size="20" />&nbsp; Certificates</div>
    </div>

    <div data-aos="fade-down" data-aos-duration="3000" class="mt-20 text-5xl font-light leading-snug">My <span class="text-primary">Certificates</span></div>
    <div class="flex flex-wrap gap-6 mt-6">
      <certificate data-aos="zoom-in" data-aos-duration="3000" @click="openModal('/php.jpg')" img="/php.jpg" />
      <certificate data-aos="zoom-in" data-aos-duration="3000" @click="openModal('/revou.jpg')" img="/revou.jpg" />
    </div>
    <UModal v-model="isOpen" :ui="{ overlay: { background: 'bg-dark-950/80' } }">
      <div class="p-4">
        <NuxtImg :src="srcImg"></NuxtImg>
      </div>
    </UModal>
  </div>
</template>
