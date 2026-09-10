<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import IconChatDots from '~/components/common/icons/IconChatDots.vue'
import IconLocation from '~/components/common/icons/IconLocation.vue'
import IconInstagram from '~/components/common/icons/IconInstagram.vue'
import IconWhatsapp from '~/components/common/icons/IconWhatsapp.vue'

const { t } = useI18n()
const store = useResortStore()

// 5 Gallery Items matching the design
const defaultGallery = [
  {
    id: 1,
    title: 'Tropical Waters & Overwater Deck',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Sunset Over Lagoon Walkway',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Overwater Bungalow Experience',
    image: '/images/about-resort.jpg',
  },
  {
    id: 4,
    title: 'Overwater Villa Pavilion',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Lagoon Wooden Boardwalk',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
]

const galleryList = computed(() => {
  if (store.resortData?.gallery && store.resortData.gallery.length >= 5) {
    return store.resortData.gallery
  }
  return defaultGallery
})

// Current active center index (defaults to 2: center woman photo)
const activeIndex = ref(2)

const prevSlide = () => {
  const len = galleryList.value.length
  activeIndex.value = (activeIndex.value - 1 + len) % len
}

const nextSlide = () => {
  const len = galleryList.value.length
  activeIndex.value = (activeIndex.value + 1) % len
}

// 5 Visible slides ordered symmetrically from -2 (far left) to +2 (far right)
const visibleSlides = computed(() => {
  const list = galleryList.value
  const len = list.length
  if (len === 0) return []
  const offsets = [-2, -1, 0, 1, 2]
  return offsets.map((offset) => {
    const itemIndex = ((activeIndex.value + offset) % len + len) % len
    const item = list[itemIndex] ?? defaultGallery[itemIndex % defaultGallery.length] ?? defaultGallery[0]!
    return {
      offset,
      itemIndex,
      item,
    }
  })
})
</script>

<template>
  <section id="gallery" class="py-16 sm:py-20 lg:py-10 bg-[#FFF9EB] overflow-hidden select-none">
    <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Badge / Subtitle -->
      <span class="font-opensans text-xs sm:text-[18px] text-[#717680] block mb-4 font-normal tracking-normal">
        {{ t('gallery.badge') }}
      </span>

      <!-- Main Section Title -->
      <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#977E5B] mb-4 sm:mb-5 leading-tight">
        {{ t('gallery.title') }}
      </h2>

      <!-- Description Paragraph -->
      <p class="font-opensans text-xs sm:text-[15px] lg:text-[20px] text-[#717680] max-w-4xl mx-auto leading-relaxed mb-10 sm:mb-14 font-normal px-2">
        {{ t('gallery.description') }}
      </p>

      <!-- 5-Card Layered Perspective Carousel Container (Strict Geometric Center) -->
      <div class="relative w-full max-w-[1480px] mx-auto h-[260px] sm:h-[350px] md:h-[410px] lg:h-[460px] flex items-center justify-center">
        <div
          v-for="slide in visibleSlides"
          :key="`${slide.offset}-${slide.itemIndex}`"
          class="absolute top-1/2 left-1/2 cursor-pointer transition-all duration-500 ease-out overflow-hidden group select-none"
          :class="[
            slide.offset === 0
              ? 'z-30 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[232px] sm:h-[320px] md:h-[378px] lg:h-[435.58px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-2xl -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100'
              : slide.offset === -1
                ? 'z-20 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[210px] sm:h-[290px] md:h-[342px] lg:h-[393.29px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-xl -translate-x-[79.5%] -translate-y-1/2 scale-95 opacity-100'
                : slide.offset === 1
                  ? 'z-20 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[210px] sm:h-[290px] md:h-[342px] lg:h-[393.29px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-xl -translate-x-[20.5%] -translate-y-1/2 scale-95 opacity-100'
                  : slide.offset === -2
                    ? 'z-10 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[188px] sm:h-[260px] md:h-[305px] lg:h-[351px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-lg -translate-x-[109%] -translate-y-1/2 scale-90 opacity-100 hidden sm:block'
                    : 'z-10 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[188px] sm:h-[260px] md:h-[305px] lg:h-[351px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-lg translate-x-[9%] -translate-y-1/2 scale-90 opacity-100 hidden sm:block'
          ]"
          @click="activeIndex = slide.itemIndex"
        >
          <!-- Photo -->
          <img
            v-if="slide.item"
            :src="slide.item.image"
            :alt="slide.item.title"
            class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          <!-- Figma Overlay: #FFFFFF 50% for Layer 2 & #FFFFFF 65% for Layer 3 -->
          <div
            v-if="slide.offset !== 0"
            class="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            :class="[
              Math.abs(slide.offset) === 1 ? 'bg-white/50' : 'bg-white/65'
            ]"
          />
        </div>
      </div>

      <!-- Navigation Arrows (Centered Below Cards) -->
      <div class="flex items-center justify-center gap-4 mt-8 sm:mt-10 mb-6">
        <button
          type="button"
          class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5C2A5] bg-transparent hover:bg-white text-[#977E5B] hover:text-[#7d6443] flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
          @click="prevSlide"
          aria-label="Previous image"
        >
          <ChevronLeft class="w-5 h-5" />
        </button>

        <button
          type="button"
          class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5C2A5] bg-transparent hover:bg-white text-[#977E5B] hover:text-[#7d6443] flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
          @click="nextSlide"
          aria-label="Next image"
        >
          <ChevronRight class="w-5 h-5" />
        </button>
      </div>

      <!-- Floating White Actions Bar (Figma Specs: bg #FDFDFD, rounded 12px, dual drop shadow, p-5, gap-5) -->
      <div class="inline-flex items-center justify-center my-6 max-w-full px-2">
        <div class="bg-[#FDFDFD] rounded-[12px] shadow-[1.5px_1.5px_8px_0px_rgba(0,0,0,0.06),6px_6px_20px_0px_rgba(0,0,0,0.04)] p-5 min-h-[68px] flex items-center justify-center flex-wrap gap-5 sm:gap-[20px]">
          <!-- Action 1: Contact Us -->
          <button
            type="button"
            class="group inline-flex items-center gap-2 font-spartan text-[14px] sm:text-[18px] font-medium uppercase tracking-[0] leading-normal text-[#977E5B] hover:text-[#7b6444] transition-colors cursor-pointer select-none"
            @click="store.openBookingModal()"
          >
            <!-- Overlapping Speech Bubbles with 3 dots (matching provided screenshot) -->
            <IconChatDots class-name="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#977E5B] shrink-0" />
            <span>{{ t('gallery.contactUs') }}</span>
          </button>

          <!-- Action 2: Coming Here -->
          <a
            href="#contact"
            class="group inline-flex items-center gap-2 font-spartan text-[14px] sm:text-[18px] font-medium uppercase tracking-[0] leading-normal text-[#977E5B] hover:text-[#7b6444] transition-colors cursor-pointer select-none"
          >
            <!-- Map Pin with inner circle -->
            <IconLocation class-name="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#977E5B] shrink-0" />
            <span>{{ t('gallery.comingHere') }}</span>
          </a>

          <!-- Action 3: Instagram -->
          <a
            href="https://instagram.com/megaresort.karimunjawa"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 font-spartan text-[14px] sm:text-[18px] font-medium uppercase tracking-[0] leading-normal text-[#977E5B] hover:text-[#7b6444] transition-colors cursor-pointer select-none"
          >
            <!-- Instagram Icon -->
            <IconInstagram class-name="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#977E5B] shrink-0" />
            <span>{{ t('gallery.instagram') }}</span>
          </a>

          <!-- Action 4: WhatsApp -->
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 font-spartan text-[14px] sm:text-[18px] font-medium uppercase tracking-[0] leading-normal text-[#977E5B] hover:text-[#7b6444] transition-colors cursor-pointer select-none"
          >
            <!-- Phone Handset Icon -->
            <IconWhatsapp class-name="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#977E5B] shrink-0" />
            <span>{{ t('gallery.whatsapp') }}</span>
          </a>
        </div>
      </div>

      <!-- Bottom Caption Text -->
      <p class="font-opensans text-xs sm:text-[14px] lg:text-[20px] text-[#717680] max-w-3xl mx-auto leading-relaxed mt-0.5 font-normal px-2">
        {{ t('gallery.bottomCaption') }}
      </p>
    </div>
  </section>
</template>
