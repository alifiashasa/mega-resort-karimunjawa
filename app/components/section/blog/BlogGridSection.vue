<script setup lang="ts">
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-vue-next'
import NewsCard from '~/components/card/NewsCard.vue'
import type { NewsItem } from '~/types'

const { t } = useI18n()

interface Props {
  articles?: NewsItem[]
}

const props = withDefaults(defineProps<Props>(), {
  articles: () => [],
})

const defaultBlogArticles: NewsItem[] = [
  {
    id: 1,
    title: 'The easiest Way to reach Mega Resort Karimunjawa',
    date: '10 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Karimunjawa is a hidden gem in Java, boasting pristine beaches and vibrant marine life. However, getting there...',
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
    title: 'The easiest Way to reach Mega Resort Karimunjawa',
    date: '10 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Karimunjawa is a hidden gem in Java, boasting pristine beaches and vibrant marine life. However, getting there...',
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
    title: 'The easiest Way to reach Mega Resort Karimunjawa',
    date: '10 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Karimunjawa is a hidden gem in Java, boasting pristine beaches and vibrant marine life. However, getting there...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '3 min read',
  },
  {
    id: 4,
    title: 'The easiest Way to reach Mega Resort Karimunjawa',
    date: '10 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Karimunjawa is a hidden gem in Java, boasting pristine beaches and vibrant marine life. However, getting there...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'The easiest Way to reach Mega Resort Karimunjawa',
    date: '10 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Karimunjawa is a hidden gem in Java, boasting pristine beaches and vibrant marine life. However, getting there...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 6,
    title: 'The easiest Way to reach Mega Resort Karimunjawa',
    date: '10 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Karimunjawa is a hidden gem in Java, boasting pristine beaches and vibrant marine life. However, getting there...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 7,
    title: 'The easiest Way to reach Mega Resort Karimunjawa',
    date: '10 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Karimunjawa is a hidden gem in Java, boasting pristine beaches and vibrant marine life. However, getting there...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 8,
    title: 'The easiest Way to reach Mega Resort Karimunjawa',
    date: '10 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Karimunjawa is a hidden gem in Java, boasting pristine beaches and vibrant marine life. However, getting there...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 9,
    title: 'The easiest Way to reach Mega Resort Karimunjawa',
    date: '10 September 2026',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Karimunjawa is a hidden gem in Java, boasting pristine beaches and vibrant marine life. However, getting there...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 10,
    title: 'Secret Sunset Spots Around Karimunjawa Archipelago',
    date: '08 September 2026',
    category: 'Island Exploration',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Uncover the most picturesque hidden spots where golden hours turn into magical tropical memories...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 11,
    title: 'Overwater Bungalow Experience: A Slice of Pure Luxury',
    date: '05 September 2026',
    category: 'Resort Living',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Wake up above crystal turquoise waters and fall asleep to the gentle soothing sound of island waves...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '5 min read',
  },
  {
    id: 12,
    title: 'Diving with Gentle Giants: Marine Wonders of Java Sea',
    date: '01 September 2026',
    category: 'Water Adventure',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Experience the thriving coral reef sanctuaries and colorful tropical sealife in Karimunjawa National Park...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '6 min read',
  },
  {
    id: 13,
    title: 'Coastal Gastronomy: Catch of the Day & Tropical Flavors',
    date: '28 August 2026',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Indulge in authentic Indonesian seafood barbecues paired with handcrafted tropical cocktails at sunset...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 14,
    title: 'Morning Yoga and Mindfulness by the Karimunjawa Shore',
    date: '24 August 2026',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Rebalance your energy and reconnect with nature as the tropical sunrise illuminates the peaceful horizon...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '3 min read',
  },
  {
    id: 15,
    title: 'A Guide to Island Hopping: Menjangan Kecil & Beyond',
    date: '20 August 2026',
    category: 'Excursion',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Hop aboard our private luxury boat and discover uninhabited islets with powder-white sand beaches...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '5 min read',
  },
  {
    id: 16,
    title: 'Sustainable Tourism & Marine Conservation in Karimunjawa',
    date: '15 August 2026',
    category: 'Eco Living',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    excerpt: 'How Mega Resort works hand in hand with local communities to preserve our fragile coral reef ecosystems...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 17,
    title: 'Romantic Stargazing and Candlelit Seaside Evenings',
    date: '10 August 2026',
    category: 'Romantic Stay',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Celebrate memorable milestones under a canopy of stars with the gentle rhythm of the tides as your soundtrack...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '4 min read',
  },
  {
    id: 18,
    title: 'Everything You Need to Pack for an Island Getaway',
    date: '05 August 2026',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Our comprehensive packing guide ensures you have everything needed for a seamless tropical retreat...',
    author: {
      name: 'Jenny Wilson',
      role: 'Web Designer',
      avatar: '',
      initials: 'JW',
    },
    readTime: '3 min read',
  },
]

const allArticles = computed(() => {
  if (props.articles && props.articles.length > 3) {
    return props.articles
  }
  return defaultBlogArticles
})

const itemsPerPage = ref(9)
const currentPage = ref(1)

// Total items and pagination calculation
const totalItems = computed(() => allArticles.value.length)

const totalPages = computed(() => {
  const count = Math.ceil(totalItems.value / itemsPerPage.value)
  return Math.max(count, 8) // Show 8 pages matching Figma design
})

// Current page sliced articles
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  
  if (start >= allArticles.value.length) {
    return allArticles.value.slice(0, itemsPerPage.value)
  }
  return allArticles.value.slice(start, end)
})

const startRow = computed(() => {
  if (totalItems.value === 0) return 0
  return (currentPage.value - 1) * itemsPerPage.value + 1
})

const endRow = computed(() => {
  return Math.min(currentPage.value * itemsPerPage.value, totalItems.value)
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Smooth scroll to top of grid section
    const gridEl = document.getElementById('blog-stories')
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1)
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1)
  }
}

// Page numbers list to show
const visiblePageNumbers = computed(() => {
  const pages: number[] = []
  const maxDisplay = Math.min(8, totalPages.value)
  for (let i = 1; i <= maxDisplay; i++) {
    pages.push(i)
  }
  return pages
})
</script>

<template>
  <section id="blog-stories" class="pt-10 sm:pt-14 pb-20 sm:pb-24 bg-[#FFF9EB]">
    <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 class="font-spartan text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#977E5B] tracking-normal leading-tight">
          {{ t('blogPage.stories.title') }}
        </h2>
        <p class="font-urbanist text-xs sm:text-sm md:text-[18px] text-[#717680] leading-relaxed mt-3.5 max-w-2xl mx-auto">
          {{ t('blogPage.stories.description') }}
        </p>
      </div>

      <!-- Articles Grid (3 Columns) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-14 sm:mb-16">
        <NewsCard
          v-for="article in paginatedArticles"
          :key="article.id"
          :news="article"
        />
      </div>

      <!-- Pagination Toolbar -->
      <div class="pt-6 border-t border-[#EAE3D2] flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 font-urbanist text-xs sm:text-sm text-[#717680]">
        <!-- Left: Showing rows info -->
        <div class="font-medium text-[#717680]">
          <span>{{ t('blogPage.pagination.showing') }} {{ startRow }}-{{ endRow }} {{ t('blogPage.pagination.rows') }}</span>
        </div>

        <!-- Center: Numbered pagination controls -->
        <div class="flex items-center gap-1.5 sm:gap-2">
          <!-- Prev Button -->
          <button
            type="button"
            class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[#D5D7DA] bg-white flex items-center justify-center text-[#535862] hover:bg-[#F9FAFB] hover:text-[#090C10] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer shadow-2xs"
            :disabled="currentPage === 1"
            @click="prevPage"
            aria-label="Previous Page"
          >
            <ChevronLeft class="w-4 h-4" />
          </button>

          <!-- Page Numbers -->
          <button
            v-for="pageNum in visiblePageNumbers"
            :key="pageNum"
            type="button"
            class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg font-medium text-xs sm:text-sm flex items-center justify-center transition-all cursor-pointer"
            :class="[
              currentPage === pageNum
                ? 'border border-[#977E5B] bg-[#FFF3D6] text-[#977E5B] font-semibold shadow-2xs'
                : 'border border-[#D5D7DA] bg-white text-[#535862] hover:bg-[#F9FAFB] hover:text-[#090C10] shadow-2xs'
            ]"
            @click="goToPage(pageNum)"
          >
            {{ pageNum }}
          </button>

          <!-- Next Button -->
          <button
            type="button"
            class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[#D5D7DA] bg-white flex items-center justify-center text-[#535862] hover:bg-[#F9FAFB] hover:text-[#090C10] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer shadow-2xs"
            :disabled="currentPage === totalPages"
            @click="nextPage"
            aria-label="Next Page"
          >
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Right: Rows per page selector -->
        <div class="flex items-center gap-2">
          <div class="relative inline-flex items-center">
            <select
              v-model="itemsPerPage"
              class="appearance-none bg-white border border-[#D5D7DA] rounded-lg px-3 py-1.5 pr-8 font-medium text-xs sm:text-sm text-[#090C10] cursor-pointer shadow-2xs focus:outline-hidden focus:border-[#977E5B]"
            >
              <option :value="6">6</option>
              <option :value="9">9</option>
              <option :value="12">12</option>
              <option :value="18">18</option>
            </select>
            <ChevronDown class="w-3.5 h-3.5 text-[#717680] absolute right-2.5 pointer-events-none" />
          </div>
          <span class="text-[#717680] font-normal">{{ t('blogPage.pagination.rowsPerPage') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
