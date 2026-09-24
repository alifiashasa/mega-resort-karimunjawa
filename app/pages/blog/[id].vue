<script setup lang="ts">
import { ChevronRight, Calendar } from 'lucide-vue-next'
import { useResortStore } from '~/stores/resortStore'
import NewsCard from '~/components/card/NewsCard.vue'
import type { NewsItem } from '~/types'

const route = useRoute()
const store = useResortStore()
const { t } = useI18n()

// Fetch resort data on server & client
await useAsyncData('resort-data-blog-detail', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

interface ArticleDetail {
  id: number
  title: string
  subtitle: string
  date: string
  image: string
  paragraphs: string[]
}

const defaultArticle: ArticleDetail = {
  id: 1,
  title: 'A Perfect Getaway: Exploring the Beauty of Karimunjawa',
  subtitle: 'Discover the charm of Karimunjawa through stunning beaches, crystal-clear waters, and unforgettable island experiences.',
  date: '27 September 2025',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
  paragraphs: [
    'Karimunjawa is a true tropical paradise, offering a peaceful escape far from the noise and fast pace of city life. Located off the northern coast of Central Java, this stunning archipelago is known for its crystal-clear waters, white sandy beaches, and rich marine biodiversity. It is a destination where time seems to slow down, allowing every visitor to fully embrace the beauty of nature and the calmness it brings.',
    'From the moment you arrive, the atmosphere feels different. The gentle ocean breeze, the sound of waves touching the shore, and the endless view of blue horizons create a sense of tranquility that is hard to find elsewhere. Whether you are walking along the beach at sunrise or simply enjoying a quiet afternoon under the shade of palm trees, every moment in Karimunjawa feels meaningful and refreshing.',
    'One of the most popular activities here is snorkeling, where you can explore vibrant coral reefs and encounter a variety of colorful marine life. The underwater world of Karimunjawa is incredibly rich and well-preserved, making it a perfect spot for both beginners and experienced explorers. In addition, island hopping offers a chance to discover hidden gems—small islands with untouched beauty, each with its own unique charm.',
    'For those who prefer a more relaxed experience, Karimunjawa provides plenty of opportunities to unwind. Watching the sunset is a must-do activity, as the sky transforms into breathtaking shades of orange, pink, and gold. It is a simple yet magical moment that leaves a lasting impression. You can also indulge in a romantic dining experience by the beach or enjoy a calming spa treatment that blends comfort with the surrounding natural environment.',
    'At Mega Resort Karimunjawa, every experience is designed to bring you closer to the essence of the island. The resort combines modern comfort with tropical aesthetics, creating a space that feels both luxurious and welcoming. From thoughtfully designed rooms to curated activities, every detail is crafted to enhance your stay and create unforgettable memories.',
    'Karimunjawa is not just a destination—it is an experience that touches all your senses. It invites you to relax, explore, and reconnect with what truly matters. Whether you are traveling with loved ones, friends, or on your own, this island offers something special for everyone. And once you experience its beauty, it will always call you back.',
  ],
}

// Fallback related news articles
const defaultRelatedArticles: NewsItem[] = [
  {
    id: 1,
    title: 'The Easiest Way to Reach Mega Resort Karimunjawa',
    date: '27 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A welcoming and comfortable space designed to make your arrival smooth and relaxing, with warm hospitality a...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'The Easiest Way to Reach Mega Resort Karimunjawa',
    date: '27 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A welcoming and comfortable space designed to make your arrival smooth and relaxing, with warm hospitality a...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'The Easiest Way to Reach Mega Resort Karimunjawa',
    date: '27 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A welcoming and comfortable space designed to make your arrival smooth and relaxing, with warm hospitality a...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '3 min read',
  },
]

const currentArticle = computed<ArticleDetail>(() => {
  const newsList = store.resortData?.news || []
  const idParam = route.params.id as string

  if (idParam) {
    const found = newsList.find(item => String(item.id) === idParam)
    if (found) {
      return {
        id: found.id,
        title: found.title || defaultArticle.title,
        subtitle: found.excerpt || defaultArticle.subtitle,
        date: found.date || defaultArticle.date,
        image: found.image || defaultArticle.image,
        paragraphs: defaultArticle.paragraphs,
      }
    }
  }

  return defaultArticle
})

const relatedArticles = computed<NewsItem[]>(() => {
  const newsList = store.resortData?.news || []
  if (newsList.length >= 3) {
    return newsList.slice(0, 3)
  }
  return defaultRelatedArticles
})

useSeoMeta({
  title: () => `${currentArticle.value.title} - Mega Resort Karimunjawa`,
  description: () => currentArticle.value.subtitle,
  ogTitle: () => `${currentArticle.value.title} - Mega Resort Karimunjawa`,
  ogDescription: () => currentArticle.value.subtitle,
  ogImage: () => currentArticle.value.image,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="bg-[#FDFDFD] min-h-screen text-[#101828] pt-28 sm:pt-32 pb-16 sm:pb-24">
    <!-- Main Article Header Container -->
    <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- 1. Breadcrumbs Navigation -->
      <nav class="flex items-center gap-2 font-opensans text-xs sm:text-[14px] text-[#D5D7DA] mb-6 sm:mb-8" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-[#977E5B] transition-colors">
          Beranda
        </NuxtLink>
        <ChevronRight class="w-3.5 h-3.5 text-[#D5D7DA] stroke-[2]" />
        <NuxtLink to="/blog" class="hover:text-[#977E5B] transition-colors">
          Blog
        </NuxtLink>
        <ChevronRight class="w-3.5 h-3.5 text-[#D5D7DA] stroke-[2]" />
        <span class="text-[#717680] font-normal">
          Detail Blog
        </span>
      </nav>

      <!-- 2. Article Title & Intro Header -->
      <div class="max-w-5xl mb-8 sm:mb-10">
        <h1 class="font-spartan text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-semibold text-[#090C10] leading-[1.2] mb-4 sm:mb-5">
          {{ currentArticle.title }}
        </h1>
        <p class="font-opensans text-sm sm:text-base md:text-[18px] text-[#717680] leading-relaxed mb-4 sm:mb-5">
          {{ currentArticle.subtitle }}
        </p>

        <!-- Date -->
        <div class="flex items-center gap-2 font-opensans text-xs sm:text-[14px] text-[#717680]">
          <Calendar class="w-4 h-4 text-[#717680] shrink-0 stroke-[1.75]" />
          <span>{{ currentArticle.date }}</span>
        </div>
      </div>
    </div>

    <!-- 3. Full-Width Featured Banner Image (Edge-to-edge full screen width) -->
    <div class="w-full mb-12 sm:mb-16">
      <div class="relative w-full h-[400px] sm:h-[520px] md:h-[600px] lg:h-[680px] overflow-hidden">
        <img
          :src="currentArticle.image"
          :alt="currentArticle.title"
          class="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </div>

    <!-- 4. Article Body Text -->
    <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-16 sm:mb-24">
      <article class="max-w-none space-y-6 sm:space-y-7 font-opensans text-[15px] sm:text-[16px] md:text-[17px] text-[#717680] leading-[1.8] text-justify sm:text-left">
        <p v-for="(para, idx) in currentArticle.paragraphs" :key="idx">
          {{ para }}
        </p>
      </article>
    </div>

    <!-- 5. Explore More Articles Section -->
    <section class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-0">
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <h2 class="font-spartan text-2xl sm:text-4xl md:text-[36px] font-semibold text-[#977E5B] leading-tight">
            Explore More Articles
          </h2>
          <p class="font-opensans text-xs sm:text-[16px] text-[#717680] mt-2">
            Discover more stories, travel insights, and experiences to inspire your journey in Karimunjawa.
          </p>
        </div>

        <!-- See More Button -->
        <NuxtLink
          to="/blog"
          class="inline-flex items-center justify-center self-start sm:self-auto px-5 py-2.5 rounded-[12px] border border-[#D0D5DD] bg-white text-[#977E5B] hover:bg-[#977E5B] hover:text-white hover:border-[#977E5B] font-opensans text-xs sm:text-[14px] font-medium transition-all duration-200 shadow-2xs shrink-0 cursor-pointer"
        >
          <span>See More Article</span>
        </NuxtLink>
      </div>

      <!-- 3 Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        <NewsCard
          v-for="article in relatedArticles"
          :key="article.id"
          :news="article"
        />
      </div>
    </section>
  </div>
</template>
