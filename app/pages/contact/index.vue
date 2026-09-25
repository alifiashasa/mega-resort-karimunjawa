<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import ContactUsSection from '~/components/section/contact/ContactUsSection.vue'

definePageMeta({
  alias: ['/contact-us', '/contact'],
})

const store = useResortStore()

// Fetch resort data
await useAsyncData('resort-data-contact-page', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

useSeoMeta({
  title: 'Contact Us - Mega Resort Karimunjawa',
  description: 'Get in touch with Mega Resort Karimunjawa. We are here to help you plan your perfect stay, answer questions, and assist with reservations.',
  ogTitle: 'Contact Us - Mega Resort Karimunjawa',
  ogDescription: 'We’re here to help you plan your perfect stay at Mega Resort Karimunjawa. Feel free to contact us anytime.',
  ogImage: '/images/contact/contact-banner.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="contact-page-wrapper bg-white min-h-screen">
    <ContactUsSection />
  </div>
</template>

<style scoped>
.contact-page-wrapper {
  padding-top: 88px;
}
@media (max-width: 768px) {
  .contact-page-wrapper {
    padding-top: 76px;
  }
}
</style>
