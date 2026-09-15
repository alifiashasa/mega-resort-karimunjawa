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
    price: 5600000,
    priceUnit: 'night',
    category: 'OVERWATER VILLA • KARIMUNJAWA PARADISE',
  }
})

const formatPrice = (val?: number) => {
  if (!val) return 'IDR 5,600,000'
  return 'IDR ' + val.toLocaleString('id-ID')
}

const handleBooking = () => {
  store.openBookingModal(null, null, currentRoom.value as any)
}
</script>

<template>
  <section class="py-12 sm:py-16 bg-[#FAF7F2]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- Main Beige Card Container -->
      <div class="bg-[#F8F4EC] rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#ECE5D8] shadow-xs">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Large Bungalow Photo (Span 6) -->
          <div class="lg:col-span-6">
            <div class="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-[18px] overflow-hidden shadow-md group bg-[#e5e7eb]">
              <img
                :src="currentRoom.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'"
                :alt="currentRoom.name"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          <!-- Right Column: Room Details & Booking (Span 6) -->
          <div class="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5">
            <!-- Lotus Icon & Category Subtitle -->
            <div class="flex items-center gap-2.5">
              <IconLotus fill-color="#977E5B" class-name="w-6 h-5 shrink-0" />
              <span class="font-urbanist text-xs sm:text-[14px] uppercase tracking-[0.16em] text-[#977E5B] font-semibold">
                {{ currentRoom.category || 'OVERWATER VILLA • KARIMUNJAWA PARADISE' }}
              </span>
            </div>

            <!-- Room Name Header -->
            <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#977E5B] tracking-tight uppercase leading-tight">
              {{ currentRoom.name || 'MERMAID ROOM' }}
            </h2>

            <!-- Detailed Room Description -->
            <p class="font-opensans text-xs sm:text-[14px] text-[#717680] leading-[1.75] font-normal">
              Escape into comfort and modern elegance in our spacious room. Thoughtfully designed to blend contemporary aesthetics with warm tropical accents, this room is a peaceful sanctuary where you can unwind in style after a day exploring the island. Relax on the plush bed, enjoy scenic views from the private balcony, and embrace the tranquil island breeze. Whether for romance or quiet retreat, everything is tailored for your pure relaxation.
            </p>

            <!-- Price Row -->
            <div class="pt-2 flex items-baseline gap-1.5 font-spartan">
              <span class="text-2xl sm:text-[28px] font-bold text-[#1f1a16]">
                {{ formatPrice(currentRoom.price || 5600000) }}
              </span>
              <span class="font-opensans text-xs sm:text-[14px] text-[#717680] font-normal">
                / {{ currentRoom.priceUnit || 'night' }}
              </span>
            </div>

            <!-- Booking CTA Button -->
            <div class="pt-2">
              <button
                type="button"
                class="h-[46px] sm:h-[48px] px-8 flex items-center justify-center bg-gradient-to-b from-[#977E5B] to-[#887050] hover:from-[#8E7554] hover:to-[#7D6647] text-white font-opensans text-xs sm:text-[14px] font-medium rounded-[12px] border border-[#715B3E] shadow-[0_2px_4px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.35)] transition-all duration-200 cursor-pointer active:scale-[0.98]"
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
