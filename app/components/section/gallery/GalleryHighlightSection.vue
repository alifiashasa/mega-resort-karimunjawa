<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import GalleryMomentCard, { type MomentItem } from '~/components/card/GalleryMomentCard.vue'

const emit = defineEmits<{
  (e: 'selectImage', image: string, title: string, category?: string): void
}>()

const { t } = useI18n()

// 5 Highlight Items matching the reference screenshot:
// 1. Message & Healing
// 2. Snorkeling
// 3. Shark Pool (Center - Featured)
// 4. Swimming Pool
// 5. Canoes
const highlightItems: MomentItem[] = [
  {
    id: 1,
    title: 'Message & Healing',
    titleEn: 'Message & Healing',
    image: '/images/gallery/card-message-healing.webp',
    category: 'Wellness & Spa',
  },
  {
    id: 2,
    title: 'Snorkeling',
    titleEn: 'Snorkeling',
    image: '/images/gallery/card-snorkeling.webp',
    category: 'Marine Adventure',
  },
  {
    id: 3,
    title: 'Shark Pool',
    titleEn: 'Shark Pool',
    image: '/images/gallery/card-shark-pool.webp',
    category: 'Signature Experience',
  },
  {
    id: 4,
    title: 'Swimming Pool',
    titleEn: 'Swimming Pool',
    image: '/images/gallery/card-swimming-pool.webp',
    category: 'Resort Amenities',
  },
  {
    id: 5,
    title: 'Canoes',
    titleEn: 'Canoes',
    image: '/images/gallery/card-canoes.webp',
    category: 'Water Sports',
  },
]

// Default active card is index 2 ("Shark Pool" in center)
const activeIndex = ref(2)

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + highlightItems.length) % highlightItems.length
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % highlightItems.length
}

// Compute 5 visible slides relative to activeIndex (-2, -1, 0, 1, 2)
const visibleCards = computed(() => {
  const len = highlightItems.length
  return [-2, -1, 0, 1, 2].map((offset) => {
    const itemIndex = ((activeIndex.value + offset) % len + len) % len
    const item = highlightItems[itemIndex]!
    return {
      offset,
      itemIndex,
      item,
    }
  })
})

const handleCardClick = (item: MomentItem, offset: number) => {
  if (offset === 0) {
    emit('selectImage', item.image, item.title, item.category)
  } else {
    const targetIdx = highlightItems.findIndex((h) => h.id === item.id)
    if (targetIdx !== -1) {
      activeIndex.value = targetIdx
    }
  }
}

const handleCardView = (item: MomentItem) => {
  emit('selectImage', item.image, item.title, item.category)
}
</script>

<template>
  <section id="gallery-highlight" class="py-16 sm:py-20 lg:py-24 bg-[#FFF9EB] overflow-hidden select-none">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Section Heading -->
      <h2
        class="font-spartan text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#977E5B] mb-4 sm:mb-5 leading-tight tracking-[-0.02em]"
      >
        {{ t('galleryPage.highlight.title') }}
      </h2>

      <!-- Description Paragraph -->
      <p
        class="font-opensans text-sm sm:text-[15px] lg:text-[16px] text-[#717680] max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16 font-normal px-2"
      >
        {{ t('galleryPage.highlight.description') }}
      </p>

      <!-- 5 Highlight Cards in a Centered Stepped Row with distinct Gaps -->
      <div class="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-4 min-h-[300px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[470px]">
        <GalleryMomentCard
          v-for="card in visibleCards"
          :key="`${card.offset}-${card.item.id}`"
          :item="card.item"
          :offset="card.offset"
          :is-active="card.offset === 0"
          @click="handleCardClick"
          @view="handleCardView"
        />
      </div>

      <!-- Navigation Arrows (Slide Card Controls) -->
      <div class="flex items-center justify-center gap-3.5 mt-8 sm:mt-12">
        <button
          type="button"
          class="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5C2A5] bg-[#FAFAFA] hover:bg-white text-[#977E5B] hover:text-[#7d6443] flex items-center justify-center transition-all duration-300 ease-out transform hover:scale-115 active:scale-95 shadow-sm hover:shadow-md cursor-pointer select-none"
          @click="prevSlide"
          aria-label="Previous card"
        >
          <ChevronLeft class="w-5 h-5 transition-transform duration-300" />
        </button>

        <button
          type="button"
          class="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5C2A5] bg-[#FAFAFA] hover:bg-white text-[#977E5B] hover:text-[#7d6443] flex items-center justify-center transition-all duration-300 ease-out transform hover:scale-115 active:scale-95 shadow-sm hover:shadow-md cursor-pointer select-none"
          @click="nextSlide"
          aria-label="Next card"
        >
          <ChevronRight class="w-5 h-5 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </section>
</template>
