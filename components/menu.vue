<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

// const route = useRoute();

// const isActiveSection = (sectionLink) => {
//   return route.fullPath === sectionLink;
// };

const isActive = ref(false);
const sec = props.link.substring(1);

const handleScroll = () => {
  const section = document.querySelector(sec);

  if (section) {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      isActive.value = true;
    } else {
      isActive.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <UTooltip
    :popper="{ arrow: true, placement: 'left' }"
    :ui="{
      background: 'bg-gray-700',
      color: 'text-white',
      ring: 'ring-0',
      arrow: { background: ' before:bg-gray-700 dark:before:bg-gray-800', ring: 'before:ring-0' },
    }"
  >
    <NuxtLink :to="link" :class="{ 'text-primary': isActive }" class="hover:scale-110 text-abu-1 hover:text-primary"><Icon :name="icon" size="24" /></NuxtLink>
    <template #text>
      <span><slot /></span>
    </template>
  </UTooltip>
</template>
