<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import HeroSection from '~/components/section/home/HeroSection.vue'
import PackageEscapeSection from '~/components/section/package/PackageEscapeSection.vue'
import PackageExperienceSection from '~/components/section/package/PackageExperienceSection.vue'

definePageMeta({
  alias: ['/packages', '/package'],
})

const store = useResortStore()
const { t } = useI18n()

// Fetch resort data on server & client
await useAsyncData('resort-data-package-page', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

useSeoMeta({
  title: 'Packages - Mega Resort Karimunjawa',
  description: 'Curated experiences for your island journey. Explore exclusive packages tailored for relaxing escapes, diving, marine adventures, and unforgettable stays at Mega Resort Karimunjawa.',
  ogTitle: 'Curated Experiences for Your Island Journey - Mega Resort Karimunjawa',
  ogDescription: 'Explore our selection of thoughtfully crafted packages designed to match your travel style across the pristine Karimunjawa archipelago.',
  ogImage: '/images/packages/hero-package.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="overflow-x-hidden bg-[#FFF9EB]">
    <!-- Hero Section -->
    <HeroSection
      id="package-hero"
      bg-image="/images/packages/hero-package.jpg"
      bg-position="object-center"
      :badge-prefix="t('packagePage.hero.titlePrefix')"
      :script-word="t('packagePage.hero.scriptWord')"
      :title="t('packagePage.hero.titleSuffix')"
      :description="t('packagePage.hero.description')"
      :cta-text="t('packagePage.hero.exploreCta')"
      cta-target-id="#package-escape"
      :show-scroll-down="false"
      min-height="min-h-[620px] sm:min-h-[720px] lg:h-[820px]"
      overlay-class="bg-black/30"
    />

    <!-- Find Your Perfect Escape Section -->
    <PackageEscapeSection />

    <!-- 01 Package Experience Carousel Section -->
    <PackageExperienceSection />
  </div>
</template>
