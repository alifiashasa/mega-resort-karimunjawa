<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import HeroSection from '~/components/section/home/HeroSection.vue'
import AboutSection from '~/components/section/home/AboutSection.vue'
import FeatureVideoSection from '~/components/section/home/FeatureVideoSection.vue'
import GallerySection from '~/components/section/home/GallerySection.vue'
import VillaTourSection from '~/components/section/home/VillaTourSection.vue'
import DiningSection from '~/components/section/home/DiningSection.vue'
import PackageSection from '~/components/section/home/PackageSection.vue'
import NewsSection from '~/components/section/home/NewsSection.vue'

const store = useResortStore()
const { t } = useI18n()

// Fetch resort data on server & client
await useAsyncData('resort-data-v2', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

useSeoMeta({
  title: 'Mega Resort Karimunjawa - A Hidden Paradise in Java Sea',
  description: 'Experience pure luxury in Karimunjawa with overwater villas, crystal clear waters, private boat excursions, and authentic coastal gastronomy.',
  ogTitle: 'Mega Resort Karimunjawa - Luxury Island Getaway',
  ogDescription: 'Experience pure luxury in Karimunjawa with overwater villas, crystal clear waters, private boat excursions, and authentic coastal gastronomy.',
  ogImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <HeroSection bg-position="object-[center_20%]" />

    <!-- About / Discover Section -->
    <AboutSection />

    <!-- Video & Feature Highlight Banner -->
    <FeatureVideoSection />

    <!-- Gallery of Unforgettable Stays -->
    <GallerySection />

    <!-- Villa Virtual Showcase -->
    <VillaTourSection />

    <!-- A Taste of Coastal Elegance (Dining) -->
    <DiningSection />

    <!-- Popular Destination Packages -->
    <PackageSection />

    <!-- Latest News & Blog -->
    <NewsSection />
  </div>
</template>
