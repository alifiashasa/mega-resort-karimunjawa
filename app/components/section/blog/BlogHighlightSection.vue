<script setup lang="ts">
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-vue-next'
import IconLotus from '~/components/common/icons/IconLotus.vue'

const { t } = useI18n()

interface HighlightStory {
  id: number
  date: string
  title: string
  excerpt: string
  image: string
  readMoreLink?: string
}

const highlightStories: HighlightStory[] = [
  {
    id: 1,
    date: '27 September 2025',
    title: 'Petualangan di Pulau Komodo: Menyapa Sang Naga dari Timur',
    excerpt: 'Terletak di jantung Taman Nasional Komodo, Pulau Komodo menawarkan pengalaman yang tak tertandingi bagi para pecinta alam dan petualang sejati. Begitu kapal mendekati dermaga Loh Liang, panorama perbukitan hijau yang berpadu dengan laut biru langsung menyambut setiap pengunjung. Selain menjadi rumah bagi hewan purba Varanus komodoensis, pulau ini juga menyuguhkan keindahan alam yang luar biasa. Selain menjadi rumah bagi hewan purba Varanus komodoensis, pulau ini juga menyuguhkan keindahan alam yang luar biasa.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    date: '08 September 2026',
    title: 'Keheningan Senja di Balik Dermaga Mega Resort',
    excerpt: 'Menyaksikan matahari terbenam dari sudut terbaik pulau Karimunjawa menghadirkan nuansa damai yang sulit dilupakan. Kilau keemasan memantul di permukaan laut tenang saat siluet perahu nelayan melintas di kejauhan. Sebuah momen syahdu yang merangkum esensi kemewahan tropis dan ketenangan jiwa yang hakiki.',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    date: '03 September 2026',
    title: 'Pesona Bawah Laut: Menyapa Terumbu Karang Menjangan',
    excerpt: 'Perairan jernih Karimunjawa menyimpan kekayaan hayati bawah laut yang menakjubkan. Bersama pemandu profesional dari Mega Resort, kami menjelajahi terumbu karang warna-warni yang masih perawan, berenang bersama penyu laut, dan merasakan keajaiban ekosistem laut Jawa yang begitu lestari.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
  },
]

const currentIndex = ref(0)
const currentStory = computed<HighlightStory>(() => highlightStories[currentIndex.value] ?? (highlightStories[0] as HighlightStory))

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % highlightStories.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + highlightStories.length) % highlightStories.length
}

const setSlide = (idx: number) => {
  currentIndex.value = idx
}

// Touch swipe support
const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0]?.screenX ?? 0
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0]?.screenX ?? 0
  handleSwipe()
}

const handleSwipe = () => {
  const diff = touchEndX.value - touchStartX.value
  if (Math.abs(diff) > 50) {
    if (diff < 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}
</script>

<template>
  <section id="blog-highlights" class="pt-14 sm:pt-16 pb-12 sm:pb-16 bg-[#FDFDFD]">
    <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- Section Subtitle & Title (Exact match to Home AboutSection / Gallery typography) -->
      <div class="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
        <span class="font-opensans text-xs sm:text-[18px] font-normal text-[#717680] block mb-2 sm:mb-3 tracking-normal">
          {{ t('blogPage.highlights.badge') }}
        </span>
        <h2 class="font-spartan text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-semibold text-[#977E5B] leading-tight">
          {{ t('blogPage.highlights.title') }}
        </h2>
      </div>
    </div>

    <!-- Featured Carousel Container (Full-width edge-to-edge) -->
    <div
      class="relative w-full overflow-hidden min-h-[580px] sm:min-h-[640px] lg:h-[660px] flex items-center py-8"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <!-- Background Image with Fade Transition -->
      <Transition name="fade" mode="out-in">
        <div :key="currentStory.id" class="absolute inset-0 z-0">
          <img
            :src="currentStory.image"
            :alt="currentStory.title"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      </Transition>

      <!-- Floating White Content Card Wrapper with Attached Arrow Buttons -->
      <div class="relative z-10 w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 pointer-events-none">
        <div class="relative w-full max-w-[520px] pointer-events-auto">
          <!-- The 520x540 Card with 12px Radius -->
          <div class="w-full sm:w-[520px] min-h-[480px] sm:h-[540px] bg-white rounded-[12px] p-6 sm:p-9 shadow-2xl border border-gray-100 flex flex-col justify-between transition-all duration-300">
            <!-- Content Top & Body -->
            <div>
              <!-- Calendar Icon and Date -->
              <div class="flex items-center gap-2 font-urbanist text-xs sm:text-[14px] text-[#667085] font-normal mb-3 sm:mb-4">
                <Calendar class="w-4 h-4 text-[#667085] shrink-0 stroke-[1.75]" />
                <span>{{ currentStory.date }}</span>
              </div>

              <!-- Title -->
              <h3 class="font-opensans text-lg sm:text-xl lg:text-[22px] font-semibold text-[#101828] leading-snug mb-3 sm:mb-4">
                {{ currentStory.title }}
              </h3>

              <!-- Excerpt -->
              <p class="font-opensans text-xs sm:text-[17px] text-[#667085] leading-relaxed">
                {{ currentStory.excerpt }}
              </p>
            </div>

            <!-- CTA Button -->
            <div class="pt-4">
              <NuxtLink
                :to="`/blog/${currentStory.id}`"
                class="inline-flex items-center justify-center px-5 py-2.5 rounded-[12px] border border-[#D0D5DD] bg-white text-[#977E5B] hover:bg-[#977E5B] hover:text-white hover:border-[#977E5B] font-opensans text-xs sm:text-[16px] font-medium transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                <span>Lihat Selengkapnya</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Left Arrow Navigation (Mepet sisi kiri card) -->
          <button
            type="button"
            class="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#977E5B] shadow-md border border-gray-100 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            @click="prevSlide"
            aria-label="Previous Highlight"
          >
            <ChevronLeft class="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </button>

          <!-- Right Arrow Navigation (Mepet sisi kanan card) -->
          <button
            type="button"
            class="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#977E5B] shadow-md border border-gray-100 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            @click="nextSlide"
            aria-label="Next Highlight"
          >
            <ChevronRight class="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </button>
        </div>
      </div>

      <!-- Dots / Pill Progress Indicator at Bottom -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full">
        <button
          v-for="(_, idx) in highlightStories"
          :key="idx"
          type="button"
          class="transition-all duration-300 rounded-full cursor-pointer"
          :class="[
            currentIndex === idx
              ? 'w-7 h-2 bg-[#0092B3]'
              : 'w-2 h-2 bg-white/60 hover:bg-white'
          ]"
          @click="setSlide(idx)"
          :aria-label="`Slide ${idx + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
