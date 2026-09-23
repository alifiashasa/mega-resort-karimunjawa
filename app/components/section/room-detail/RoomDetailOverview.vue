<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import IconLotus from '~/components/common/icons/IconLotus.vue'
import type { RoomItem } from '~/types'

interface Props {
  room?: RoomItem | null
}

const props = defineProps<Props>()

const store = useResortStore()

const currentRoom = computed(() => {
  return props.room || store.resortData?.rooms?.[0] || {
    id: 1,
    name: 'Mermaid Room',
    fullName: 'Mermaid Room Mega Resort Karimunjawa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    price: 7499,
    priceUnit: 'night',
    category: 'COMFORTABLE STAY, THOUGHTFULLY DESIGNED',
  }
})

const handleBooking = () => {
  store.openBookingModal(null, null, currentRoom.value as any)
}
</script>

<template>
  <section class="pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12 bg-[#FFF9EB]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-12 xl:gap-16">
        
        <!-- Left Column: Large Bungalow Image (w: 636px, h: 551px, radius: 20px) -->
        <div class="w-full lg:w-[636px] shrink-0">
          <div class="relative w-full max-w-[636px] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[551px] rounded-[20px] overflow-hidden group shadow-sm bg-[#e5e7eb]">
            <img
              :src="currentRoom.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'"
              :alt="currentRoom.name"
              class="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        <!-- Right Column: Room Description & Actions (Aligned to 551px height of image) -->
        <div class="flex-1 w-full flex flex-col justify-between lg:h-[551px] -mt-0.5 lg:-mt-1">
          
          <!-- Top Group: Lotus Icon, Subtitle, Title & Description -->
          <div class="space-y-4">
            <!-- Lotus Icon & Subtitle -->
            <div class="space-y-2">
              <div class="w-12 h-9 sm:w-14 sm:h-10 mb-4">
                <IconLotus fill-color="#977E5B" class-name="w-full h-full" />
              </div>
              <span class="font-opensans text-xs sm:text-[15px] uppercase tracking-[0.16em] text-[#717680] font-normal block">
                COMFORTABLE STAY, THOUGHTFULLY DESIGNED
              </span>
            </div>

            <!-- Room Title -->
            <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#977E5B] tracking-tight uppercase leading-tight">
              {{ currentRoom.name || 'MERMAID ROOM' }}
            </h2>

            <!-- Detailed Paragraph Description -->
            <p class="font-opensans text-[13px] sm:text-[14px] lg:text-[18px] text-[#717680] leading-[1.8] font-normal">
              Designed to provide a seamless balance between comfort and natural beauty, this room offers a tranquil space where you can truly unwind. Every detail is thoughtfully curated, from the cozy interior to the calming atmosphere that surrounds you. Wake up to refreshing views, enjoy the gentle breeze, and relax in a setting that feels both intimate and serene. Whether you're here for a short escape or a longer stay, this room ensures a comfortable and memorable experience throughout your time in Karimunjawa.
            </p>
          </div>

          <!-- Bottom Group: Price & Booking Button (Aligned with bottom edge of image) -->
          <div class="pt-8 lg:pt-8 space-y-4">
            <!-- Price Display (League Spartan) -->
            <div class="flex items-baseline gap-1 font-spartan">
              <span class="text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#1f1a16]">
                $7,499
              </span>
              <span class="text-sm sm:text-[20px] text-[#A4A7AE] font-normal">
                /night
              </span>
            </div>

            <!-- Booking Now Button -->
            <div>
              <button
                type="button"
                class="h-[46px] px-8 flex items-center justify-center bg-[#8E7656] hover:bg-[#7D6647] text-white font-opensans text-xs sm:text-[14px] font-medium rounded-[10px] shadow-xs transition-all duration-200 cursor-pointer active:scale-[0.98]"
                @click="handleBooking"
              >
                Booking Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
