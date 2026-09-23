<script setup lang="ts">
import { ref, computed } from 'vue'
import GalleryPhotoCard, { type GalleryPhotoItem } from '~/components/card/GalleryPhotoCard.vue'
import GalleryLightbox, { type LightboxItem } from '~/components/common/GalleryLightbox.vue'

const { t } = useI18n()

// 13 Images matching the reference screenshot layout
const allImages: GalleryPhotoItem[] = [
  // Row 1 (3 items)
  {
    id: 1,
    title: 'Adult Swimming Pool',
    titleEn: 'Adult Swimming Pool',
    category: 'Facilities',
    image: '/images/facilities/facility-3.webp',
  },
  {
    id: 2,
    title: 'Sunset Ocean Boardwalk',
    titleEn: 'Sunset Ocean Boardwalk',
    category: 'Restaurant',
    image: '/images/facilities/facility-8.webp',
  },
  {
    id: 3,
    title: 'Overwater Bungalows',
    titleEn: 'Overwater Bungalows',
    category: 'Accomodation',
    image: '/images/facilities/facility-15.webp',
  },

  // Row 2 (4 items)
  {
    id: 4,
    title: 'Luxury Master Suite',
    titleEn: 'Luxury Master Suite',
    category: 'Accomodation',
    image: '/images/facilities/facility-12.webp',
  },
  {
    id: 5,
    title: 'Private Villa Lounge',
    titleEn: 'Private Villa Lounge',
    category: 'Villa',
    image: '/images/facilities/facility-13.webp',
  },
  {
    id: 6,
    title: 'Treetop Canopy Walkway',
    titleEn: 'Treetop Canopy Walkway',
    category: 'Facilities',
    image: '/images/facilities/facility-5.webp',
  },
  {
    id: 7,
    title: 'Vibrant Coral Sanctuary',
    titleEn: 'Vibrant Coral Sanctuary',
    category: 'Facilities',
    image: '/images/facilities/facility-2.webp',
  },

  // Row 3 (3 items)
  {
    id: 8,
    title: 'Twilight Over Ocean',
    titleEn: 'Twilight Over Ocean',
    category: 'Accomodation',
    image: '/images/facilities/facility-11.webp',
  },
  {
    id: 9,
    title: 'Tropical Garden Patio',
    titleEn: 'Tropical Garden Patio',
    category: 'Villa',
    image: '/images/facilities/facility-9.webp',
  },
  {
    id: 10,
    title: 'Ocean Balcony Bath',
    titleEn: 'Ocean Balcony Bath',
    category: 'Villa',
    image: '/images/facilities/facility-16.webp',
  },

  // Row 4 (3 items)
  {
    id: 11,
    title: 'Marine Ecosystem Tour',
    titleEn: 'Marine Ecosystem Tour',
    category: 'Facilities',
    image: '/images/facilities/facility-10.webp',
  },
  {
    id: 12,
    title: 'Private Water Access',
    titleEn: 'Private Water Access',
    category: 'Villa',
    image: '/images/facilities/facility-7.webp',
  },
  {
    id: 13,
    title: 'Pristine White Sands',
    titleEn: 'Pristine White Sands',
    category: 'Restaurant',
    image: '/images/facilities/facility-14.webp',
  },
]

const categories = ['All', 'Restaurant', 'Villa', 'Accomodation', 'Facilities', 'View All'] as const
const activeCategory = ref<string>('All')

const filteredImages = computed(() => {
  if (activeCategory.value === 'All' || activeCategory.value === 'View All') {
    return allImages
  }
  return allImages.filter((img) => img.category.toLowerCase() === activeCategory.value.toLowerCase())
})

// Lightbox state
const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)

const lightboxItems = computed<LightboxItem[]>(() => {
  return filteredImages.value.map((img) => ({
    id: img.id,
    title: img.title,
    category: img.category,
    image: img.image,
  }))
})

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  isLightboxOpen.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const handlePhotoClick = (item: GalleryPhotoItem) => {
  const idx = filteredImages.value.findIndex((img) => img.id === item.id)
  if (idx !== -1) {
    openLightbox(idx)
  }
}

// Expose openWithImage method for parent / highlight triggers
defineExpose({
  openWithImage: (imageSrc: string) => {
    const idx = filteredImages.value.findIndex((img) => img.image === imageSrc)
    if (idx !== -1) {
      openLightbox(idx)
    } else {
      const allIdx = allImages.findIndex((img) => img.image === imageSrc)
      if (allIdx !== -1) {
        activeCategory.value = 'All'
        openLightbox(allIdx)
      }
    }
  },
})
</script>

<template>
  <section id="glimpse-excellence" class="py-16 sm:py-20 lg:py-24 bg-[#FFF9EB] select-none scroll-mt-20">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Section Heading -->
      <h2
        class="font-spartan text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#977E5B] mb-3 sm:mb-4 leading-tight tracking-[-0.02em]"
      >
        {{ t('galleryPage.grid.title') }}
      </h2>

      <!-- Description Paragraph -->
      <p
        class="font-opensans text-sm sm:text-[15px] lg:text-[16px] text-[#717680] max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-2"
      >
        {{ t('galleryPage.grid.description') }}
      </p>

      <!-- Category Filter Tabs -->
      <div class="flex items-center justify-center flex-wrap gap-4 sm:gap-8 mb-10 sm:mb-14">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="relative py-1.5 px-1 font-opensans text-sm sm:text-[15px] transition-all duration-200 cursor-pointer"
          :class="[
            activeCategory === cat
              ? 'text-[#977E5B] font-semibold'
              : 'text-[#8C8F93] hover:text-[#977E5B] font-normal'
          ]"
          @click="activeCategory = cat"
        >
          <span>{{ cat === 'View All' ? t('galleryPage.grid.tabViewAll') : t(`galleryPage.categories.${cat.toLowerCase()}`) || cat }}</span>
          <!-- Active Underline Indicator -->
          <span
            v-if="activeCategory === cat"
            class="absolute bottom-0 left-0 right-0 h-[2px] bg-[#977E5B] rounded-full transition-all"
          />
        </button>
      </div>

      <!-- Main Responsive Image Grid using Reusable GalleryPhotoCard -->
      <!-- Case 1: When All or View All is selected, display the exact 4-row layout matching the reference -->
      <div v-if="activeCategory === 'All' || activeCategory === 'View All'" class="space-y-4 sm:space-y-5 lg:space-y-6">
        <!-- Row 1: 3 Landscape Images -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          <GalleryPhotoCard
            v-for="item in allImages.slice(0, 3)"
            :key="item.id"
            :item="item"
            height-class="h-[190px] sm:h-[220px] md:h-[250px] lg:h-[270px]"
            @click="handlePhotoClick"
          />
        </div>

        <!-- Row 2: 4 Portrait/Square Images -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          <GalleryPhotoCard
            v-for="item in allImages.slice(3, 7)"
            :key="item.id"
            :item="item"
            compact
            height-class="h-[180px] sm:h-[210px] md:h-[240px] lg:h-[260px]"
            @click="handlePhotoClick"
          />
        </div>

        <!-- Row 3: 3 Images (Left & Mid equal, Right card is longer/wider matching reference) -->
        <div class="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1.61fr] gap-4 sm:gap-5 lg:gap-6">
          <GalleryPhotoCard
            :item="allImages[7]!"
            height-class="h-[190px] sm:h-[220px] md:h-[250px] lg:h-[270px]"
            @click="handlePhotoClick"
          />
          <GalleryPhotoCard
            :item="allImages[8]!"
            height-class="h-[190px] sm:h-[220px] md:h-[250px] lg:h-[270px]"
            @click="handlePhotoClick"
          />
          <GalleryPhotoCard
            :item="allImages[9]!"
            height-class="h-[190px] sm:h-[220px] md:h-[250px] lg:h-[270px]"
            @click="handlePhotoClick"
          />
        </div>

        <!-- Row 4: 3 Images (Left card is slightly longer/wider, Mid & Right are equal matching reference) -->
        <div class="grid grid-cols-1 sm:grid-cols-[1.15fr_1fr_1fr] gap-4 sm:gap-5 lg:gap-6">
          <GalleryPhotoCard
            v-for="item in allImages.slice(10, 13)"
            :key="item.id"
            :item="item"
            height-class="h-[190px] sm:h-[220px] md:h-[250px] lg:h-[270px]"
            @click="handlePhotoClick"
          />
        </div>
      </div>

      <!-- Case 2: When a specific category is selected, render clean responsive grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <GalleryPhotoCard
          v-for="item in filteredImages"
          :key="item.id"
          :item="item"
          height-class="h-[220px] sm:h-[250px] md:h-[280px]"
          @click="handlePhotoClick"
        />
      </div>
    </div>

    <!-- Reusable Lightbox Modal -->
    <GalleryLightbox
      :is-open="isLightboxOpen"
      :items="lightboxItems"
      :current-index="currentImageIndex"
      @close="closeLightbox"
      @update:current-index="currentImageIndex = $event"
    />
  </section>
</template>
