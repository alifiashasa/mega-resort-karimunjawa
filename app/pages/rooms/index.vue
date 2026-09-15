<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import HeroSection from '~/components/section/home/HeroSection.vue'
import RoomsFeaturedSection from '~/components/section/rooms/RoomsFeaturedSection.vue'
import RoomsCollectionSection from '~/components/section/rooms/RoomsCollectionSection.vue'

const store = useResortStore()
const { t } = useI18n()

// Fetch resort data on server & client
await useAsyncData('resort-data-rooms-page', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

useSeoMeta({
  title: 'Rooms & Suites - Mega Resort Karimunjawa',
  description: 'Carefully selected stays for a more memorable experience. Explore our full collection of stays, designed for comfort and relaxation in Karimunjawa.',
  ogTitle: 'Rooms & Suites - Mega Resort Karimunjawa',
  ogDescription: 'Carefully selected stays for a more memorable experience at Mega Resort Karimunjawa.',
  ogImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="overflow-x-hidden bg-[#FAFAFA]">
    <!-- Reusable Hero Section -->
    <HeroSection
      id="rooms-hero"
      bg-image="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85"
      :badge-prefix="t('roomsPage.hero.titlePrefix')"
      :script-word="t('roomsPage.hero.titleAt')"
      :title="t('roomsPage.hero.titleSuffix')"
      :description="t('roomsPage.hero.description')"
      :cta-text="t('roomsPage.hero.exploreCta')"
      cta-target-id="#featured-rooms"
      :show-scroll-down="false"
      min-height="min-h-[620px] sm:min-h-[720px] lg:h-[820px]"
      overlay-class="bg-gradient-to-b from-black/60 via-black/40 to-black/75"
    />

    <!-- Carefully Selected Stays (3 Featured Cards) -->
    <RoomsFeaturedSection />

    <!-- Full Collection of Stays (Detailed Cards) -->
    <RoomsCollectionSection />
  </div>
</template>
