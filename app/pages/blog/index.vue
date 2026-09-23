<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import HeroSection from '~/components/section/home/HeroSection.vue'
import BlogHighlightSection from '~/components/section/blog/BlogHighlightSection.vue'
import BlogGridSection from '~/components/section/blog/BlogGridSection.vue'

definePageMeta({
  alias: ['/blogs', '/blog'],
})

const store = useResortStore()
const { t } = useI18n()

// Fetch resort data on server & client
await useAsyncData('resort-data-blog-page', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

useSeoMeta({
  title: 'Stories & Insights - Mega Resort Karimunjawa',
  description: 'Explore the latest stories, travel guides, and island inspirations from the heart of Karimunjawa. Stay updated with our newest articles and moments worth sharing.',
  ogTitle: 'Stories & Insights - Mega Resort Karimunjawa',
  ogDescription: 'Explore the latest stories, travel guides, and island inspirations from the heart of Karimunjawa.',
  ogImage: '/images/hero-home.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="overflow-x-hidden bg-[#FFF9EB]">
    <!-- Hero Section -->
    <HeroSection
      id="blog-hero"
      bg-image="/images/hero-home.jpg"
      bg-position="object-center"
      :badge-prefix="t('blogPage.hero.titlePrefix')"
      :script-word="t('blogPage.hero.scriptWord')"
      :title="t('blogPage.hero.titleSuffix')"
      :description="t('blogPage.hero.description')"
      :cta-text="t('blogPage.hero.exploreCta')"
      cta-target-id="#blog-highlights"
      :show-scroll-down="false"
      min-height="min-h-[620px] sm:min-h-[720px] lg:h-[820px]"
      overlay-class="bg-black/30"
    />

    <!-- Highlight Moments & Carousel Section -->
    <BlogHighlightSection />

    <!-- Moments, Stories & Experiences Worth Sharing Grid Section -->
    <BlogGridSection :articles="store.resortData?.news" />
  </div>
</template>
