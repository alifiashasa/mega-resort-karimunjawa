<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import HeroSection from '~/components/section/home/HeroSection.vue'
import GalleryHighlightSection from '~/components/section/gallery/GalleryHighlightSection.vue'
import GalleryGridSection from '~/components/section/gallery/GalleryGridSection.vue'

definePageMeta({
  alias: ['/galleries', '/gallery'],
})

const store = useResortStore()
const { t } = useI18n()

// Reference to grid section for cross-component triggers
const gridSectionRef = ref<InstanceType<typeof GalleryGridSection> | null>(null)

const handleSelectHighlightImage = (imageSrc: string) => {
  gridSectionRef.value?.openWithImage(imageSrc)
}

// Fetch resort data on server & client
await useAsyncData('resort-data-gallery-page', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

useSeoMeta({
  title: 'Gallery - Mega Resort Karimunjawa',
  description: 'Capture the beauty of Karimunjawa moments. Explore our stunning gallery of luxury overwater bungalows, marine adventures, serene sunsets, and unforgettable island experiences.',
  ogTitle: 'Gallery - Mega Resort Karimunjawa',
  ogDescription: 'A glimpse into unforgettable memories where every moment feels timeless. Discover serene sunsets and crystal-clear waters captured across Mega Resort Karimunjawa.',
  ogImage: '/images/gallery/hero-gallery.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="overflow-x-hidden bg-[#FFF9EB]">
    <!-- Hero Section -->
    <HeroSection
      id="gallery-hero"
      bg-image="/images/gallery/hero-gallery.jpg"
      bg-position="object-center"
      :badge-prefix="t('galleryPage.hero.titlePrefix')"
      :script-word="t('galleryPage.hero.scriptWord')"
      :title="t('galleryPage.hero.titleSuffix')"
      :description="t('galleryPage.hero.description')"
      :cta-text="t('galleryPage.hero.exploreCta')"
      cta-target-id="#gallery-highlight"
      :show-scroll-down="false"
      min-height="min-h-[620px] sm:min-h-[720px] lg:h-[820px]"
      overlay-class="bg-black/25"
    />

    <!-- Highlight Moments Section (5-Card Carousel) -->
    <GalleryHighlightSection @select-image="handleSelectHighlightImage" />

    <!-- A Glimpse of Excellence Section (Filterable Grid & Lightbox) -->
    <GalleryGridSection ref="gridSectionRef" />
  </div>
</template>
