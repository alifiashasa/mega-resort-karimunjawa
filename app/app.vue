<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Mega Resort Karimunjawa`
      : 'Mega Resort Karimunjawa - Luxury Island Getaway'
  },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Great+Vibes&family=Open+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
