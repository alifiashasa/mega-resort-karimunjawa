<script setup lang="ts">
import { computed } from 'vue'
import { Users, ShieldAlert } from 'lucide-vue-next'
import type { RoomItem } from '~/types'

export interface BookingRoomItem extends Omit<Partial<RoomItem>, 'id'> {
  id: string | number
  name: string
  fullName?: string
  badge?: string
  image: string
  type: 'room' | 'package'
  price: number
  priceUnit?: string
  originalPrice?: number
  discountText?: string
  taxInfo?: string
  capacityText?: string
  policyText?: string
  detailRooms?: string
  bathrooms?: string
  internet?: string
}

interface Props {
  item: BookingRoomItem
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'book', item: BookingRoomItem): void
  (e: 'view', item: BookingRoomItem): void
}>()

const formattedPrice = computed(() => {
  return 'Rp ' + Number(props.item.price).toLocaleString('id-ID')
})

const formattedOriginalPrice = computed(() => {
  return props.item.originalPrice ? 'Rp ' + Number(props.item.originalPrice).toLocaleString('id-ID') : null
})
</script>

<template>
  <div class="bg-white rounded-[20px] p-4 sm:p-5 border-0 shadow-none transition-all duration-300 md:h-[320px]">
    <div class="flex flex-col md:flex-row gap-4 sm:gap-5 lg:gap-6 items-stretch h-full">
      
      <!-- Room Image (Left) -->
      <div class="w-full md:w-[220px] lg:w-[245px] xl:w-[260px] shrink-0 h-[210px] md:h-full rounded-[16px] overflow-hidden bg-[#e5e7eb] group relative">
        <img
          :src="item.image"
          :alt="item.name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
      </div>

      <!-- Content Container (2 Columns: Left Details + Right Specs/Price/Actions) -->
      <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 items-stretch h-full">
        
        <!-- Left Detail Column -->
        <div class="flex flex-col justify-between h-full">
          <div>
            <!-- Badge / Subtitle -->
            <span class="font-opensans text-[11px] sm:text-[16px] uppercase tracking-wider text-[#717680] font-normal block mb-1.5">
              {{ item.badge || 'BEST OPTION TO STAY' }}
            </span>

            <!-- Title -->
            <h3 class="font-opensans text-[18px] sm:text-[20px] font-semibold text-[#090C10] leading-[1.3]">
              {{ item.fullName || (item.name + ' Mega Resort KarimunJawa') }}
            </h3>

            <!-- Capacity Info with Icon (Aligned with Price on the right) -->
            <div class="flex items-start gap-2.5 pt-8 sm:pt-9 text-[16px] text-[#717680] font-opensans leading-snug">
              <Users class="w-4 h-4 text-[#8E7249] shrink-0 mt-2.5 stroke-[1.8]" />
              <span>{{ item.capacityText || '2 Adults Included + Up to 2 Children + Extra Adult Available' }}</span>
            </div>
          </div>

          <!-- Bottom Policy Info with Shield Icon -->
          <div class="flex items-center gap-2 text-[11px] sm:text-[12px] text-[#717680] font-opensans pt-1 mt-auto">
            <ShieldAlert class="w-4 h-4 text-[#85868B] shrink-0 stroke-[1.8]" />
            <span>{{ item.policyText || 'Guest occupancy applicable terms & conditions.' }}</span>
          </div>
        </div>

        <!-- Right Column: Specs, Price, Action Buttons -->
        <div class="flex flex-col justify-between h-full space-y-3">
          
          <!-- Top: Specs Table -->
          <div class="space-y-1.5 text-[16px] font-opensans">
            <div class="flex items-center justify-between gap-4">
              <span class="text-[#090C10] font-normal">Detail Rooms</span>
              <span class="text-[#717680] font-normal text-right">{{ item.detailRooms || '1 King + 2' }}</span>
            </div>
            <div class="flex items-center justify-between gap-4">
              <span class="text-[#090C10] font-normal">Bathrooms</span>
              <span class="text-[#717680] font-normal text-right">{{ item.bathrooms || '3 Attached' }}</span>
            </div>
            <div class="flex items-center justify-between gap-4">
              <span class="text-[#090C10] font-normal">Internet</span>
              <span class="text-[#717680] font-normal text-right">{{ item.internet || '100Mbps' }}</span>
            </div>
          </div>

          <!-- Middle: Price Block (Right-aligned matching mockup) -->
          <div class="text-right space-y-0.5 pt-1 my-auto">
            <!-- Main Price -->
            <div class="font-spartan text-[20px] sm:text-[24px] font-semibold text-[#090C10] leading-none">
              {{ formattedPrice }}<span class="text-[17px] sm:text-[20px] font-semibold text-[#101828]">/{{ item.priceUnit || 'night' }}</span>
            </div>

            <!-- Strikethrough Price (Harga Coret) & Jumlah Discount -->
            <div v-if="formattedOriginalPrice" class="font-opensans text-[16px] text-[#717680] flex items-center justify-end gap-1.5 pt-1">
              <span class="line-through text-[#98A2B3]">{{ formattedOriginalPrice }}</span>
              <span class="text-[#98A2B3]">•</span>
              <span>{{ item.discountText || 'Save 5%' }}</span>
            </div>

            <!-- Tax Info -->
            <div class="font-opensans text-[16px] text-[#717680] pt-0.5">
              {{ item.taxInfo || 'Include All Taxed' }}
            </div>
          </div>

          <!-- Bottom: Action Buttons -->
          <div class="flex items-center justify-end gap-2.5 pt-1">
            <!-- View Detail Button -->
            <button
              type="button"
              class="h-[36px] sm:h-[38px] px-4 sm:px-5 rounded-[8px] bg-white text-[#8E7249] hover:bg-[#FAF7F2] font-opensans text-[13px] font-medium transition-all duration-150 cursor-pointer flex items-center justify-center whitespace-nowrap active:translate-y-[1px] shadow-button-outlined-default"
              @click="emit('view', item)"
            >
              View Detail
            </button>

            <!-- Booking Now Button -->
            <button
              type="button"
              class="h-[36px] sm:h-[38px] px-4.5 sm:px-5 rounded-[8px] bg-[#937A54] hover:bg-[#886F4A] text-white font-opensans text-[13px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-center whitespace-nowrap active:scale-[0.99] border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)]"
              @click="emit('book', item)"
            >
              Booking Now
            </button>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>
