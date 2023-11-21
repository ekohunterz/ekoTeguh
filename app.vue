<script setup lang="ts">
import type { Container } from "tsparticles-engine";

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause();
  setTimeout(() => container.play(), 2000);
};
</script>

<template>
  <div>
    <ClientOnly fallback-tag="span" fallback="Loading">
      <NuxtParticles id="tsparticles2" url="/particlesjs-config.json" @load="onLoad"></NuxtParticles>
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
      <template #fallback>
        <div class="ring">
          Loading
          <span class="spin"></span>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
