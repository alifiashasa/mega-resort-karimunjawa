<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { useResortStore } from '~/stores/resortStore'

const { t } = useI18n()
const store = useResortStore()

interface ExperienceItem {
  id: number
  slug: string
  categoryKey: string
  title: string
  description: string
  image: string
}

const categories = [
  { key: 'waterActivity', label: 'Water Activity' },
  { key: 'fullDayBoatTour', label: 'Full day Boat Tour' },
  { key: 'beginnerDiving', label: 'Beginner Diving' },
  { key: 'sertificationDiving', label: 'Sertification Diving' },
  { key: 'funDiving', label: 'Fun Diving' },
]

const activeCategory = ref('waterActivity')
const currentIndex = ref(0)
const sliderRef = ref<HTMLElement | null>(null)
const cardWidth = ref(760)
const GAP = 24

const updateDimensions = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) {
      cardWidth.value = Math.min(window.innerWidth - 48, 380)
    } else if (window.innerWidth < 1024) {
      cardWidth.value = 540
    } else {
      cardWidth.value = 760
    }
  }
}

onMounted(() => {
  updateDimensions()
  window.addEventListener('resize', updateDimensions)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateDimensions)
  }
})

const experiences: ExperienceItem[] = [
  {
    id: 1,
    slug: 'canoe-tour',
    categoryKey: 'waterActivity',
    title: 'Water Activity (Canoe Tour)',
    description: 'Nestled within the breathtaking waters of the Karimunjawa archipelago, Mega Resort Karimunjawa',
    image: '/images/packages/water-activity-4.jpg',
  },
  {
    id: 2,
    slug: 'canoe-tour',
    categoryKey: 'waterActivity',
    title: 'Water Activity (Santai & Fun)',
    description: 'Nestled within the breathtaking waters of the Karimunjawa archipelago, Mega Resort Karimunjawa',
    image: '/images/packages/water-activity-3.jpg',
  },
  {
    id: 3,
    slug: 'boat-tour',
    categoryKey: 'fullDayBoatTour',
    title: 'Full Day Island Boat Tour',
    description: 'Nestled within the breathtaking waters of the Karimunjawa archipelago, Mega Resort Karimunjawa',
    image: '/images/packages/water-activity-1.jpg',
  },
  {
    id: 4,
    slug: 'beginner-diving',
    categoryKey: 'beginnerDiving',
    title: 'Beginner Diving & Snorkeling',
    description: 'Nestled within the breathtaking waters of the Karimunjawa archipelago, Mega Resort Karimunjawa',
    image: '/images/packages/water-activity-2.jpg',
  },
  {
    id: 5,
    slug: 'certification-diving',
    categoryKey: 'sertificationDiving',
    title: 'Certification Diving (PADI Course)',
    description: 'Nestled within the breathtaking waters of the Karimunjawa archipelago, Mega Resort Karimunjawa',
    image: '/images/packages/water-activity-2.jpg',
  },
  {
    id: 6,
    slug: 'fun-diving',
    categoryKey: 'funDiving',
    title: 'Fun Diving & Coral Discovery',
    description: 'Nestled within the breathtaking waters of the Karimunjawa archipelago, Mega Resort Karimunjawa',
    image: '/images/packages/water-activity-5.jpg',
  },
]

const totalCount = computed(() => experiences.length)
const currentExperience = computed(() => experiences[currentIndex.value] || experiences[0])

watch(currentIndex, (newIdx) => {
  const item = experiences[newIdx]
  if (item) {
    activeCategory.value = item.categoryKey
  }
})

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = totalCount.value - 1
  }
}

const nextSlide = () => {
  if (currentIndex.value < totalCount.value - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const selectCategory = (key: string) => {
  activeCategory.value = key
  const foundIdx = experiences.findIndex(item => item.categoryKey === key)
  if (foundIdx !== -1) {
    currentIndex.value = foundIdx
  }
}

const localePath = useLocalePath()
</script>

<template>
  <section
    id="package-experience"
    class="py-16 sm:py-20 lg:py-24 bg-[#977E5B] text-white select-none overflow-hidden"
  >
    <!-- Top Grid: Left Title & Right Category Menu (Wide Container) -->
    <div class="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 mb-12 sm:mb-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <!-- Left Column: Number, Subtitle & Main Heading -->
        <div class="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-6">
          <span class="block text-sm sm:text-base font-light text-[#F5F5F5] tracking-wider font-spartan">
            {{ t('packagePage.experience.number') }}
          </span>

          <h4 class="text-xs sm:text-[20px] font-semibold tracking-normal text-white font-spartan">
            {{ t('packagePage.experience.badge') }}
          </h4>

          <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.28] text-white font-spartan max-w-[640px]">
            {{ t('packagePage.experience.title') }}
          </h2>
        </div>

        <!-- Right Column: Categories List (Positioned at right edge, text left-aligned) -->
        <div class="lg:col-span-5 xl:col-span-5 flex flex-col items-start lg:items-end pt-1">
          <div class="flex flex-col items-start space-y-3 sm:space-y-4">
            <button
              v-for="cat in categories"
              :key="cat.key"
              type="button"
              class="text-left font-spartan transition-all duration-300 cursor-pointer block tracking-tight"
              :class="[
                activeCategory === cat.key
                  ? 'text-white text-2xl sm:text-3xl lg:text-[36px] font-normal leading-tight'
                  : 'text-white/50 hover:text-white/80 text-xl sm:text-2xl lg:text-[30px] font-normal leading-snug'
              ]"
              @click="selectCategory(cat.key)"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Slider Area (Full-Bleed to Right Edge) -->
    <div class="w-full pl-6 sm:pl-10 lg:pl-16 xl:pl-[max(4rem,calc((100vw-1680px)/2+4rem))] pr-0">
      <div class="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-10">
        <!-- Left Label Column -->
        <div class="shrink-0 lg:w-[350px] xl:w-[380px] pb-0">
          <h5 class="text-2xl sm:text-[26px] lg:text-[28px] xl:text-[30px] font-semibold text-white font-spartan leading-[1.2] mb-2.5">
            <span class="block whitespace-nowrap">Explore Experience Mega</span>
            <span class="block whitespace-nowrap">Resort KarimunJawa</span>
          </h5>
          <p class="text-base sm:text-[17px] text-white/80 font-opensans whitespace-nowrap leading-none">
            {{ t('packagePage.experience.experienceOnAir') }}
          </p>
        </div>

        <!-- Slider Track Container (Bleeds to the right screen edge) -->
        <div
          ref="sliderRef"
          class="flex-1 overflow-hidden min-w-0"
        >
          <div
            class="flex transition-transform duration-500 ease-out"
            :style="{
              transform: `translateX(-${currentIndex * (cardWidth + GAP)}px)`,
              gap: `${GAP}px`
            }"
          >
            <NuxtLink
              v-for="item in experiences"
              :key="item.id"
              :to="localePath(`/package/${item.slug || item.id}`)"
              class="relative shrink-0 overflow-hidden cursor-pointer group transition-all duration-300 shadow-xl rounded-none block"
              :style="{ width: `${cardWidth}px`, height: 'auto', aspectRatio: '760/531' }"
            >
              <!-- Background Image (No Rounded) -->
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out rounded-none"
                loading="lazy"
              />

              <!-- Bottom Dark Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-5 sm:p-6 md:p-8 pointer-events-none">
                <h3 class="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 font-spartan">
                  {{ item.title }}
                </h3>
                <p class="text-xs sm:text-[13px] md:text-sm text-white/90 leading-relaxed font-opensans max-w-lg">
                  {{ item.description }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Controls & Navigation (Wide Container) -->
    <div class="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-end gap-3 pt-6 sm:pt-8">
      <!-- Counter e.g. 1/5, 2/5, 3/5 -->
      <span class="text-sm sm:text-base font-normal text-white mr-1 font-spartan">
        {{ currentIndex + 1 }}/{{ totalCount }}
      </span>

      <!-- Arrow Buttons (White rounded squares) -->
      <button
        type="button"
        class="w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] bg-white hover:bg-white/90 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
        aria-label="Previous package slide"
        @click="prevSlide"
      >
        <ChevronLeft class="w-5 h-5 text-[#8C7351]" />
      </button>
      <button
        type="button"
        class="w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] bg-white hover:bg-white/90 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
        aria-label="Next package slide"
        @click="nextSlide"
      >
        <ChevronRight class="w-5 h-5 text-[#8C7351]" />
      </button>
    </div>
  </section>
</template>
