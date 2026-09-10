<script setup lang="ts">
import IconChevronCircleLeft from '~/components/common/icons/IconChevronCircleLeft.vue'
import IconChevronCircleRight from '~/components/common/icons/IconChevronCircleRight.vue'
import IconTriangleDown from '~/components/common/icons/IconTriangleDown.vue'

const facilities = [
  {
    id: 1,
    name: 'Bot Tours',
    title: 'Boat Tours & Island Excursions',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    description: 'Explore the natural wonders of Karimunjawa by traditional wooden boat, visiting secluded beaches, turquoise lagoons, and untouched tropical islands perfect for exploration and nature photography.',
  },
  {
    id: 2,
    name: 'Dive Center',
    title: 'PADI Dive Center',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=85',
    description: 'Our certified PADI dive center provides professional equipment, expert guides, and daily excursions to the finest coral reefs and marine sanctuaries in Karimunjawa.',
  },
  {
    id: 3,
    name: 'Adult Swimming Poll',
    title: 'Adult Swimming Pool',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85',
    description: 'Immerse yourself in our infinity-edge oceanfront pool, crafted exclusively for adults to unwind with panoramic lagoon vistas, refreshing cocktails, and gentle island breezes.',
  },
  {
    id: 4,
    name: 'Mes Center',
    title: 'Mess Center',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85',
    description: 'The Mess Center is designed to provide a convenient and comfortable dining space for guests during their stay. Offering a variety of meals and refreshments, this facility ensures that you can enjoy delicious food without having to leave the resort area. With a welcoming atmosphere and attentive service, it becomes the perfect place to relax, dine, and recharge after a day of activities in Karimunjawa.',
  },
  {
    id: 5,
    name: 'Restaurant',
    title: 'Resort Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85',
    description: 'Indulge in an exquisite beachfront culinary journey offering fresh caught seafood, authentic Indonesian specialties, and international favorites paired with premium refreshments.',
  },
  {
    id: 6,
    name: 'Snorkeling',
    title: 'Snorkeling Excursions',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=2000&q=85',
    description: 'Discover the vibrant underwater paradise of Karimunjawa with guided snorkeling adventures among protected coral gardens and colorful tropical fish species.',
  },
  {
    id: 7,
    name: 'Yoga Medition',
    title: 'Yoga & Meditation Deck',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=85',
    description: 'Rejuvenate your body and mind on our serene open-air wooden pavilion, featuring sunrise yoga sessions, guided mindfulness meditation, and sound healing rituals.',
  },
]

// Default active index is 3 (Mes Center) to match the reference image
const currentIndex = ref(3)
const activeFacility = computed(() => facilities[currentIndex.value] || facilities[3]!)

const prevFacility = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = facilities.length - 1
  }
}

const nextFacility = () => {
  if (currentIndex.value < facilities.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}
</script>

<template>
  <section id="facility" class="relative min-h-[600px] sm:min-h-[750px] lg:h-[900px] lg:min-h-[900px] flex items-center overflow-hidden bg-[#1b1713] select-none">
    <!-- Background Showcase Images with Smooth Cross-fade (no flicker/fading reload) -->
    <div class="absolute inset-0 overflow-hidden">
      <img
        v-for="(item, idx) in facilities"
        :key="`bg-${item.id}`"
        :src="item.image"
        :alt="item.title"
        class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out will-change-[opacity]"
        :class="idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'"
        loading="lazy"
      />
      <!-- Bottom Shadow Overlay Only -->
      <div class="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/85 via-black/40 to-transparent z-1 pointer-events-none" />
    </div>

    <!-- Container Content -->
    <div class="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20 flex flex-col justify-between min-h-[600px] sm:min-h-[750px] lg:h-[900px] lg:min-h-[900px]">
      <!-- Center Left Floating Glass Card -->
      <div class="flex-1 flex items-center">
        <div
          class="w-full max-w-[392px] ml-0 sm:ml-4 lg:ml-8 xl:ml-10 p-6 sm:p-[32px] rounded-[20px] text-white transition-all duration-300"
          style="background: rgba(10, 10, 10, 0.48); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);"
        >
          <h3 class="font-spartan text-2xl sm:text-[28px] font-semibold text-white mb-3 sm:mb-4">
            {{ activeFacility.title }}
          </h3>

          <p class="font-opensans text-xs sm:text-[14px] text-white/90 leading-relaxed font-normal">
            {{ activeFacility.description }}
          </p>
        </div>
      </div>

      <!-- Bottom Timeline & Smooth Sliding Navigation Bar -->
      <div class="relative w-full pt-6 sm:pt-8">
        <div class="flex items-center justify-between gap-3 sm:gap-6">
          <!-- Left Arrow Button (Outer translucent ring + Slightly smaller solid white inner disk + Blue chevron) -->
          <button
            type="button"
            class="group w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full bg-black/35 backdrop-blur-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shrink-0 z-20 p-2.5 sm:p-[10px] border border-white/10"
            @click="prevFacility"
            aria-label="Previous facility"
          >
            <div class="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <IconChevronCircleLeft />
            </div>
          </button>

          <!-- Center Horizontal Timeline & Sliding Items Track -->
          <div class="relative flex-1 overflow-hidden py-2">
            <div class="relative flex flex-col items-center justify-center w-full">
              <!-- Continuous Glowing Horizontal Line with Centered Downward Triangle Marker -->
              <div class="relative w-full h-[16px]">
                <!-- Background Horizontal Line -->
                <div class="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-white/85 to-transparent z-0" />

                <!-- Fixed Solid White Downward Triangle at Center of the Line -->
                <IconTriangleDown class-name="w-[16px] h-[12px] text-white fill-current absolute left-1/2 -translate-x-1/2 top-0 z-10 block" />
              </div>

              <!-- Sliding Item Labels Track Below the Line (Smooth hardware-accelerated translation) -->
              <div class="w-full overflow-hidden pt-2">
                <div
                  class="flex items-center transition-transform duration-500 ease-out will-change-transform [backface-visibility:hidden]"
                  :style="{
                    transform: `translate3d(calc(50% - ${currentIndex * 280 + 140}px), 0, 0)`,
                  }"
                >
                  <button
                    v-for="(item, idx) in facilities"
                    :key="item.id"
                    type="button"
                    class="w-[280px] shrink-0 flex justify-center text-center cursor-pointer transition-opacity duration-300 px-3 select-none"
                    @click="currentIndex = idx"
                  >
                    <!-- League Spartan 30px SemiBold -->
                    <span
                      class="font-spartan font-semibold text-[18px] sm:text-[24px] lg:text-[30px] transition-all duration-300 whitespace-nowrap block"
                      :class="[
                        idx === currentIndex
                          ? 'text-white opacity-100'
                          : 'text-white/40 hover:text-white/80 opacity-40 hover:opacity-80'
                      ]"
                    >
                      {{ item.name }}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Arrow Button (Outer translucent ring + Slightly smaller solid white inner disk + Blue chevron) -->
          <button
            type="button"
            class="group w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full bg-black/35 backdrop-blur-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shrink-0 z-20 p-2.5 sm:p-[10px] border border-white/10"
            @click="nextFacility"
            aria-label="Next facility"
          >
            <div class="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <IconChevronCircleRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
