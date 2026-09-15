<script setup lang="ts">
const exclusiveItems = [
  {
    id: 1,
    title: 'LUXURY BATH EXPERIENCE',
    description: 'Relax in a bespoke blue-tiled bathroom with panoramic ocean views and premium luxury amenities.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    hasDescription: true,
  },
  {
    id: 2,
    title: 'PRIVATE OCEAN BALCONY',
    description: '',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    hasDescription: false,
  },
  {
    id: 3,
    title: 'PRIVATE COMFORTABLE',
    description: '',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    hasDescription: false,
  },
]
</script>

<template>
  <section class="py-14 sm:py-20 bg-[#FAF7F2]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
        <span class="font-urbanist text-xs sm:text-[14px] uppercase tracking-[0.2em] text-[#717680] font-medium block">
          EXPERIENCE THE EXCLUSIVE
        </span>
        <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#977E5B] tracking-tight">
          Exclusive More Than Just A Room
        </h2>
      </div>

      <!-- 3 Vertical Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="item in exclusiveItems"
          :key="item.id"
          class="relative h-[380px] sm:h-[440px] lg:h-[480px] rounded-[22px] overflow-hidden shadow-md group bg-[#1f1a16] transition-all duration-500 hover:-translate-y-1.5"
        >
          <!-- Background Image -->
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          <!-- Bottom Text Overlay -->
          <div class="absolute bottom-0 inset-x-0 p-6 sm:p-7 flex flex-col justify-end">
            <!-- Label Badge / Header -->
            <div
              class="inline-block"
              :class="item.hasDescription ? '' : 'bg-black/60 backdrop-blur-xs px-4 py-2.5 rounded-[10px] self-start border border-white/15'"
            >
              <h3 class="font-opensans text-[14px] sm:text-[15px] font-bold tracking-wider text-white uppercase">
                {{ item.title }}
              </h3>
            </div>

            <!-- Description if present -->
            <p
              v-if="item.hasDescription && item.description"
              class="font-opensans text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal mt-2"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
