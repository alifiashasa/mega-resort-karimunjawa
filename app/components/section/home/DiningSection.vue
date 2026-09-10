<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import IconArrowLongLeft from '~/components/common/icons/IconArrowLongLeft.vue'
import IconArrowLongRight from '~/components/common/icons/IconArrowLongRight.vue'

const { t } = useI18n()
const store = useResortStore()

// 5 Curated Dining Experiences matching the 3/5 counter in the design
const diningList = [
  {
    id: 1,
    title: 'Coastal Breakfast on the Veranda',
    scriptTitle: 'Floating Breakfast',
    description: 'Start your tropical morning with fresh ocean breezes and gourmet morning treats. Indulge in an exquisite assortment of artisan pastries, tropical fruit platters, and organic island coffee served overlooking crystal-clear waters.',
    subDescription: 'Tailored for early risers who wish to greet the rising sun while enjoying private, tranquil oceanfront hospitality.',
    imageVertical: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    imageInset: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    imageTop: 'https://images.unsplash.com/photo-1533777857889-4be7c70e33f7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Beachfront Sunset Seafood BBQ',
    scriptTitle: 'Beachfront BBQ',
    description: 'Savor freshly caught coral reef fish, succulent prawns, and rock lobsters grilled to perfection over fragrant coconut husks directly on the white sand beach.',
    subDescription: 'Immerse yourself in authentic island flavors accompanied by acoustic melodies and warm Caribbean-style beach fires as dusk falls.',
    imageVertical: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    imageInset: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    imageTop: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Romantic Candlelit Dinner',
    scriptTitle: 'Romantic Dining',
    description: 'Enjoy a romantic dinner experience specially designed to create unforgettable moments with your loved one. With warm candlelight, the soothing sound of the waves, and a breathtaking ocean view, every detail is carefully curated to create an intimate and warm atmosphere.',
    subDescription: 'Each dish is served with exceptional flavor, paired with elegant, personalized service to make your evening truly special.',
    imageVertical: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    imageInset: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    imageTop: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    title: 'Overwater Sunset Cocktails',
    scriptTitle: 'Sunset Cocktails',
    description: 'Relish hand-crafted tropical signature mocktails and cocktails on our wooden pier pavilion. Watch golden hues reflect across the pristine Java Sea horizon in pure tranquility.',
    subDescription: 'Served with curated tapas and canapés crafted by our executive culinary chef.',
    imageVertical: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    imageInset: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    imageTop: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 5,
    title: 'Private Sandbank Picnic',
    scriptTitle: 'Sandbank Picnic',
    description: 'Escape by private wooden boat to a secluded sandbank amidst azure waters for an unforgettable gourmet luxury picnic with champagne and artisanal delicacies.',
    subDescription: 'An exclusive sanctuary for couples and families wishing to experience Karimunjawa’s pristine natural majesty.',
    imageVertical: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    imageInset: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    imageTop: 'https://images.unsplash.com/photo-1533777857889-4be7c70e33f7?auto=format&fit=crop&w=1000&q=80',
  },
]

// Default active index is 2 (which is 3/5 in 1-based index)
const currentIndex = ref(2)
const activeDining = computed(() => diningList[currentIndex.value] || diningList[0]!)

const prevDining = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = diningList.length - 1
  }
}

const nextDining = () => {
  if (currentIndex.value < diningList.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}
</script>

<template>
  <section id="dining" class="py-16 sm:py-20 lg:py-24 bg-[#8F7553] text-white relative overflow-hidden select-none">
    <div class="w-full pl-4 sm:pl-8 lg:pl-12 xl:pl-16 pr-4 sm:pr-8 lg:pr-0 relative z-10">
      <!-- 2-Column Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
        <!-- Left Column: Section Title & Overlapping Photos Collage (Full ke kiri) -->
        <div class="lg:col-span-6 flex flex-col">
          <!-- Section Title -->
          <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[44px] font-bold text-white mb-8 sm:mb-12 leading-tight">
            {{ t('dining.title') }}
          </h2>

          <!-- Overlapping Photos Collage -->
          <div class="relative w-full max-w-[640px] pb-16 sm:pb-24 lg:pb-28">
            <!-- Primary Vertical Photo (Exact size 488px x 590px) -->
            <div class="w-full max-w-[488px] h-[380px] sm:h-[480px] lg:h-[590px] rounded-[6px] overflow-hidden shadow-[0px_7px_18px_rgba(0,0,0,0.09)]">
              <img
                :src="activeDining.imageVertical"
                :alt="activeDining.title"
                class="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                loading="lazy"
              />
            </div>

            <!-- Secondary Inset Photo (Exact size 465px x 321px, Overlapping at Bottom Right) -->
            <div class="absolute bottom-0 right-0 sm:right-2 lg:left-[165px] lg:right-auto w-[75%] sm:w-[70%] lg:w-[465px] max-w-[465px] h-[180px] sm:h-[240px] lg:h-[321px] rounded-[6px] overflow-hidden shadow-[0px_7px_18px_rgba(0,0,0,0.09)] z-10">
              <img
                :src="activeDining.imageInset"
                :alt="activeDining.title"
                class="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Right Column: Top Photo (Full ke layar kanan), Counter, Script Title, Story, Actions -->
        <div class="lg:col-span-6 flex flex-col justify-between pt-0 lg:pt-1">
          <!-- Top Horizontal Photo (Full ke layar kanan, exact size 517px x 319px) -->
          <div class="w-full max-w-[517px] ml-auto h-[200px] sm:h-[260px] lg:h-[319px] rounded-[6px] lg:rounded-r-none overflow-hidden shadow-[0px_7px_18px_rgba(0,0,0,0.09)] mb-8 sm:mb-10">
            <img
              :src="activeDining.imageTop"
              :alt="activeDining.title"
              class="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
          </div>

          <!-- Content Below Top Photo with proper right padding -->
          <div class="w-full pr-0 lg:pr-12 xl:pr-16">
            <!-- Counter and Horizontal Divider (Memanjang ke kiri) -->
            <div class="w-full lg:-ml-20 xl:-ml-32 lg:w-[calc(100%+5rem)] xl:w-[calc(100%+8rem)] mb-6">
              <span class="font-spartan text-base sm:text-lg font-medium text-white block mb-2 tracking-wide">
                {{ currentIndex + 1 }}/{{ diningList.length }}
              </span>
              <div class="w-full border-b border-white/50" />
            </div>

            <!-- Script Title -->
            <h3 class="font-allura text-5xl sm:text-6xl lg:text-[68px] text-white leading-[1.1] mb-6 font-normal tracking-wide">
              {{ activeDining.scriptTitle }}
            </h3>

            <!-- Narrative Paragraphs -->
            <p class="font-opensans text-sm sm:text-[15px] lg:text-[18px] text-white/95 leading-[1.75] mb-5 font-normal">
              {{ activeDining.description }}
            </p>

            <p class="font-opensans text-sm sm:text-[15px] lg:text-[18px] text-white/95 leading-[1.75] mb-8 font-normal">
              {{ activeDining.subDescription }}
            </p>

            <!-- Bottom Actions: View More Button & Prev/Next Arrows -->
            <div class="flex items-center justify-between pt-2">
              <!-- Outlined View More Button -->
              <button
                type="button"
                class="px-7 sm:px-8 py-2.5 sm:py-3 border border-white/80 hover:border-white text-white rounded-[14px] text-sm sm:text-[15px] font-opensans font-normal tracking-normal bg-transparent hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
                @click="store.openBookingModal()"
              >
                View More
              </button>

              <!-- Navigation Arrows on the right stacked vertically -->
              <div class="flex flex-col items-center gap-2 text-white">
                <button
                  type="button"
                  class="hover:opacity-75 transition-opacity cursor-pointer p-1 active:scale-90"
                  @click="nextDining"
                  aria-label="Next dining experience"
                >
                  <IconArrowLongRight class-name="w-5 h-3.5 text-white" />
                </button>
                <button
                  type="button"
                  class="hover:opacity-75 transition-opacity cursor-pointer p-1 active:scale-90"
                  @click="prevDining"
                  aria-label="Previous dining experience"
                >
                  <IconArrowLongLeft class-name="w-5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
