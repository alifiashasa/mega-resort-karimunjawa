<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import FaqSection from '~/components/section/faq/FaqSection.vue'

definePageMeta({
  alias: ['/faqs', '/faq'],
})

const store = useResortStore()

// Fetch resort data
await useAsyncData('resort-data-faq-page', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

useSeoMeta({
  title: 'FAQ - Mega Resort Karimunjawa',
  description: 'Frequently asked questions about staying at Mega Resort Karimunjawa, including reservations, room types, activities, snorkeling, diving, and transportation.',
  ogTitle: 'FAQ - Mega Resort Karimunjawa',
  ogDescription: 'Find quick answers about reservations, transportation, activities, and your stay at Mega Resort Karimunjawa.',
  ogImage: '/images/discover/discover-map-bg.webp',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="faq-page-wrapper bg-white min-h-screen">
    <FaqSection />
  </div>
</template>

<style scoped>
.faq-page-wrapper {
  padding-top: 88px;
}
@media (max-width: 768px) {
  .faq-page-wrapper {
    padding-top: 76px;
  }
}
</style>
