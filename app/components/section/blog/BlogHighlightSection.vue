<script setup lang="ts">
import { ChevronLeft, ChevronRight, Pin } from 'lucide-vue-next'
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
    date: '10 September 2026',
    title: 'Petualangan di Karimunjawa: Menyapa Sang Naga dari Timur',
    excerpt: 'Sebelum fajar benar-benar menyapa bumi, ketika kabut tipis masih bersemayam di punggung bukit, langkah kaki kami melangkah perlahan menuju dermaga. Udara pagi beraroma asin berpadu dengan ketenangan perbukitan hijau yang bergulir di sekeliling pulau. Mega Resort Karimunjawa belum sepenuhnya terjaga; hanya desau ombak yang menari pelan di bawah dermaga kayu dan pendar kemerahan di ufuk timur yang menjadi saksi sebuah petualangan magis yang segera dimulai. Pagi ini, tujuan kami adalah menjumpai sang \'Naga dari Timur\'...',
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
const currentStory = computed(() => highlightStories[currentIndex.value] || highlightStories[0])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % highlightStories.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + highlightStories.length) % highlightStories.length
}

const setSlide = (idx: number) => {
  currentIndex.value = idx
}

// Auto-advance carousel smoothly
let timer: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  timer = setInterval(() => {
    nextSlide()
  }, 6000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section id="blog-highlights" class="pt-14 sm:pt-16 pb-12 sm:pb-16 bg-[#FFF9EB]">
    <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- Top Crest Divider with Lotus Emblem (Exact match to Home AboutSection) -->
      <div class="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
        <span class="flex-1 h-[1px] bg-[#977E5B]" />
        <!-- Lotus Icon -->
        <IconLotus fill-color="#977E5B" class-name="w-8 h-6 sm:w-10 sm:h-7 shrink-0" />
        <span class="flex-1 h-[1px] bg-[#977E5B]" />
      </div>

      <!-- Section Subtitle & Title (Exact match to Home AboutSection / Gallery typography) -->
      <div class="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
        <span class="font-opensans text-xs sm:text-[18px] font-normal text-[#717680] block mb-2 sm:mb-3 tracking-normal">
          {{ t('blogPage.highlights.badge') }}
        </span>
        <h2 class="font-spartan text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-bold text-[#977E5B] leading-tight">
          {{ t('blogPage.highlights.title') }}
        </h2>
      </div>

      <!-- Featured Carousel Container -->
      <div class="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[480px] sm:min-h-[520px] lg:h-[580px] flex items-center shadow-xl border border-[#EBE3D5]">
        <!-- Background Image with Fade Transition -->
        <Transition name="fade" mode="out-in">
          <div :key="currentStory.id" class="absolute inset-0 z-0">
            <img
              :src="currentStory.image"
              :alt="currentStory.title"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          </div>
        </Transition>

        <!-- Floating White Content Card on Left -->
        <div class="relative z-10 w-full max-w-[480px] sm:max-w-[500px] lg:max-w-[520px] mx-4 sm:mx-8 lg:mx-12 my-6">
          <div class="bg-white/95 backdrop-blur-md rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-9 shadow-2xl border border-gray-100 transition-all duration-300">
            <!-- Pin Icon and Date -->
            <div class="flex items-center gap-1.5 font-urbanist text-xs sm:text-[13px] text-[#717680] font-medium mb-3">
              <Pin class="w-3.5 h-3.5 text-[#977E5B] shrink-0 fill-[#977E5B]/20" />
              <span>{{ currentStory.date }}</span>
            </div>

            <!-- Title -->
            <h3 class="font-spartan text-lg sm:text-xl lg:text-[23px] font-bold text-[#090C10] leading-snug mb-3">
              {{ currentStory.title }}
            </h3>

            <!-- Excerpt -->
            <p class="font-urbanist text-xs sm:text-[14px] text-[#475467] leading-relaxed line-clamp-6 mb-6">
              {{ currentStory.excerpt }}
            </p>

            <!-- CTA Button -->
            <div>
              <button
                type="button"
                class="inline-flex items-center justify-center px-5 py-2.5 rounded-[12px] border border-[#977E5B] bg-transparent text-[#977E5B] hover:bg-[#977E5B] hover:text-white font-urbanist text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
              >
                <span>{{ t('blogPage.highlights.readMore') }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Left Arrow Navigation -->
        <button
          type="button"
          class="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#977E5B] shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          @click="prevSlide"
          aria-label="Previous Highlight"
        >
          <ChevronLeft class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <!-- Right Arrow Navigation -->
        <button
          type="button"
          class="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#977E5B] shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          @click="nextSlide"
          aria-label="Next Highlight"
        >
          <ChevronRight class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <!-- Dots / Pill Progress Indicator at Bottom -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full">
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
