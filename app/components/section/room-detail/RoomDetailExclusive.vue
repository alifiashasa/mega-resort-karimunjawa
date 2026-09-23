<script setup lang="ts">
import gallery1 from '~/assets/images/room-detail/gallery-1.webp'
import gallery2 from '~/assets/images/room-detail/gallery-2.webp'
import gallery3 from '~/assets/images/room-detail/gallery-3.webp'

interface ExclusiveItem {
  id: number
  title: string
  description?: string
  image: string
}

const exclusiveItems: ExclusiveItem[] = [
  {
    id: 1,
    title: 'LUXURY BATH EXPERIENCE',
    description: 'Relax in a beautifully designed bathroom with premium amenities and a calming tropical atmosphere.',
    image: gallery1,
  },
  {
    id: 2,
    title: 'PRIVATE OCEAN BALCONY',
    image: gallery3,
  },
  {
    id: 3,
    title: 'PRIVATE COMFORTABLE',
    image: gallery2,
  },
]
</script>

<template>
  <section class="pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 bg-[#FFF9EB]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
        <span class="font-urbanist text-xs sm:text-[13px] uppercase tracking-[0.25em] text-[#8C7A65] font-semibold block">
          ENJOY MORE THAN JUST A ROOM
        </span>
        <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#977E5B] tracking-tight leading-tight">
          Exclusive More Than Just A Room
        </h2>
      </div>

      <!-- 3 Cards Layout: 1 Wide Card + 2 Narrow Portrait Cards -->
      <div class="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-5 sm:gap-6 lg:gap-7 items-stretch">
        <div
          v-for="item in exclusiveItems"
          :key="item.id"
          class="relative h-[380px] sm:h-[440px] md:h-[480px] lg:h-[520px] rounded-[20px] overflow-hidden group bg-[#1f1a16] shadow-md transition-transform duration-500 hover:-translate-y-1"
        >
          <!-- Background Image -->
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 via-35% to-transparent pointer-events-none" />

          <!-- Bottom Text Overlay -->
          <div class="absolute bottom-0 inset-x-0 p-6 sm:p-7 lg:p-8 flex flex-col justify-end">
            <h3 class="font-spartan text-base sm:text-lg lg:text-[20px] font-bold tracking-wide text-white uppercase leading-snug">
              {{ item.title }}
            </h3>

            <!-- Description if present -->
            <p
              v-if="item.description"
              class="font-opensans text-xs sm:text-[13px] lg:text-[14px] text-white/90 leading-relaxed font-normal mt-2 sm:mt-2.5 max-w-md"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
