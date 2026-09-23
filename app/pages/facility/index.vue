<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import HeroSection from '~/components/section/home/HeroSection.vue'
import FacilityCuratedSection from '~/components/section/facility/FacilityCuratedSection.vue'
import FacilityGridSection from '~/components/section/facility/FacilityGridSection.vue'

definePageMeta({
  alias: ['/facilities'],
})

const store = useResortStore()
const { t } = useI18n()

// Fetch resort data on server & client
await useAsyncData('resort-data-facility-page', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

useSeoMeta({
  title: 'Resort Facilities - Mega Resort Karimunjawa',
  description: 'Elevated comfort and resort facilities at Mega Resort Karimunjawa. Explore our comprehensive amenities from speed boat tours to oceanfront dining and spa wellness.',
  ogTitle: 'Resort Facilities - Mega Resort Karimunjawa',
  ogDescription: 'Elevated comfort and comprehensive resort facilities at Mega Resort Karimunjawa.',
  ogImage: '/images/hero-facility.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="overflow-x-hidden bg-[#FDFDFD]">
    <!-- Hero Section -->
    <HeroSection
      id="facility-hero"
      bg-image="/images/hero-facility.jpg"
      bg-position="object-center"
      :badge-prefix="t('facilityPage.hero.titlePrefix')"
      :script-word="t('facilityPage.hero.scriptWord')"
      :title="t('facilityPage.hero.titleSuffix')"
      :description="t('facilityPage.hero.description')"
      :cta-text="t('facilityPage.hero.exploreCta')"
      cta-target-id="#facility-highlight"
      :show-scroll-down="false"
      min-height="min-h-[620px] sm:min-h-[720px] lg:h-[820px]"
      overlay-class="bg-black/25"
    />

    <!-- Elevated Comfort, Thoughtfully Curated (3D Card Stack Highlight) -->
    <FacilityCuratedSection />

    <!-- Comfort, Made Better (16 Facilities Grid) -->
    <FacilityGridSection :facilities="store.resortData?.facilities" />
  </div>
</template>
