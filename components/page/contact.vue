<script setup lang="ts">
import emailjs from "@emailjs/browser";

const form = ref();
const successMessage = ref("");
const errorMessage = ref("");

async function onSubmit() {
  emailjs.sendForm("service_30ghp26", "template_fkz8nqx", form.value, "o2fVgPqnXgrsimN67").then(
    (result) => {
      successMessage.value = "Email berhasil terkirim!";
      console.log(result.text);
    },
    (error) => {
      errorMessage.value = "Gagal mengirim email. Silakan coba lagi.";
      console.log(error.text);
    }
  );
}
</script>

<template>
  <div class="relative min-h-screen lg:pe-24 py-20">
    <div data-aos="fade-up-left" data-aos-duration="3000" class="flex" id="contact">
      <div class="border flex items-center px-6 py-2 border-abu-2 rounded-full font-extralight"><Icon name="mdi:phone-outline" size="20" />&nbsp; {{ $t("pageTitles.contact") }}</div>
    </div>

    <div data-aos="fade-up-right" data-aos-duration="3000">
      <div class="mt-20 text-5xl font-light leading-snug">
        {{ $t("pageTitles.contact") }} <span class="text-primary">{{ $t("me") }}</span>
      </div>
      <NuxtLink href="mailto:ekohunterz@gmail.com" class="text-2xl font-light mt-8 hover:underline hover:text-primary duration-500 ea">ekohunterz@gmail.com</NuxtLink>
    </div>

    <div class="flex flex-wrap gap-6 mt-8">
      <form ref="form" class="w-full space-y-4" @submit.prevent="onSubmit">
        <UFormGroup
          data-aos="fade-up-left"
          data-aos-duration="3000"
          :label="$t('form.fullname')"
          required
          name="name"
          :ui="{
            label: {
              base: 'text-white text-xs uppercase font-light',
            },
          }"
        >
          <UInput
            size="xl"
            variant="none"
            required
            :placeholder="$t('form.your_name')"
            :ui="{
              padding: { xl: 'px-0' },
              size: { xl: 'text-xl' },
            }"
          />
        </UFormGroup>

        <UFormGroup
          data-aos="fade-up-left"
          data-aos-duration="3000"
          label="Email"
          required
          name="email"
          :ui="{
            label: {
              base: 'text-white text-xs uppercase font-light',
            },
          }"
        >
          <UInput
            type="email"
            size="xl"
            variant="none"
            required
            :placeholder="$t('form.your_email')"
            :ui="{
              padding: { xl: 'px-0' },
              size: { xl: 'text-xl' },
            }"
          />
        </UFormGroup>

        <UFormGroup
          data-aos="fade-up-left"
          data-aos-duration="3000"
          :label="$t('form.message')"
          name="message"
          required
          :ui="{
            label: {
              base: 'text-white text-xs uppercase font-light',
            },
          }"
        >
          <UTextarea
            variant="none"
            :placeholder="$t('form.your_message')"
            autoresize
            required
            size="xl"
            :ui="{
              padding: { xl: 'px-0' },
              size: { xl: 'text-xl' },
            }"
          />
        </UFormGroup>
        <p v-if="successMessage">{{ successMessage }}</p>
        <p v-if="errorMessage">{{ errorMessage }}</p>

        <button
          data-aos="fade-up-left"
          data-aos-duration="3000"
          type="submit"
          class="bg-primary px-12 py-4 rounded-full mt-3 hover:text-primary border-2 border-primary hover:bg-opacity-0 duration-500 ease-in-out text-dark-950 capitalize"
        >
          {{ $t("form.send_message") }}
        </button>
      </form>
    </div>
  </div>
</template>
