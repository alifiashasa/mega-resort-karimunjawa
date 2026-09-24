<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import HeroSection from '~/components/section/home/HeroSection.vue'
import DiscoverIslandExperienceSection from '~/components/section/discover/DiscoverIslandExperienceSection.vue'
import DiscoverJourneySection from '~/components/section/discover/DiscoverJourneySection.vue'
import DiscoverMapSection from '~/components/section/discover/DiscoverMapSection.vue'
import DiscoverTransportationSection from '~/components/section/discover/DiscoverTransportationSection.vue'
import DiscoverWhyChooseSection from '~/components/section/discover/DiscoverWhyChooseSection.vue'
import DiscoverRoomsSection from '~/components/section/discover/DiscoverRoomsSection.vue'

definePageMeta({
  alias: ['/discover', '/about'],
})

const store = useResortStore()
const { t } = useI18n()

// Fetch resort data for rooms & highlights
await useAsyncData('resort-data-discover-page', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

useSeoMeta({
  title: 'Discover the Soul of Mega Resort Karimunjawa',
  description: 'Beyond the destination lies a story of nature, culture, and unforgettable experiences. Discover what makes Karimunjawa a place you’ll always want to return to.',
  ogTitle: 'Discover the Soul of Mega Resort Karimunjawa',
  ogDescription: 'Beyond the destination lies a story of nature, culture, and unforgettable experiences. Discover what makes Karimunjawa a place you’ll always want to return to.',
  ogImage: '/images/hero-home.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="overflow-x-hidden bg-[#FFF9EB]">
    <!-- Hero Section -->
    <HeroSection
      id="discover-hero"
      bg-image="/images/hero-home.jpg"
      bg-position="object-center"
      :badge-prefix="t('discoverPage.hero.titlePrefix')"
      :script-word="t('discoverPage.hero.scriptWord')"
      :title="t('discoverPage.hero.titleSuffix')"
      :description="t('discoverPage.hero.description')"
      :cta-text="t('discoverPage.hero.exploreCta')"
      cta-target-id="#island-experience"
      :show-scroll-down="true"
      scroll-down-target="#island-experience"
      min-height="min-h-[640px] sm:min-h-[740px] lg:h-[840px]"
      overlay-class="bg-black/25"
    />

    <!-- Island Experience Section -->
    <DiscoverIslandExperienceSection />

    <!-- Journey of Mega Resort Karimunjawa (Timeline) -->
    <DiscoverJourneySection />

    <!-- Archipelago Map & Location Banner -->
    <DiscoverMapSection />

    <!-- Find Your Way to Karimunjawa (Transportation) -->
    <DiscoverTransportationSection />

    <!-- Why Choose Mega Resort Karimunjawa -->
    <DiscoverWhyChooseSection />

    <!-- Popular Rooms for Destination On Karimunjawa -->
    <DiscoverRoomsSection />
  </div>
</template>
