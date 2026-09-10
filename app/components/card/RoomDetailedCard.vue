<script setup lang="ts">
import type { RoomItem } from '~/types'
import IconCleanliness from '~/components/common/icons/IconCleanliness.vue'
import IconAmenities from '~/components/common/icons/IconAmenities.vue'

interface Props {
  room: RoomItem
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'book', room: RoomItem): void
  (e: 'view', room: RoomItem): void
}>()

const { t } = useI18n()

const formatPrice = (val: number) => {
  return 'Rp ' + val.toLocaleString('id-ID')
}
</script>

<template>
  <div class="bg-white rounded-[20px] p-6 sm:p-7 border border-[#F0ECE6] shadow-xs hover:shadow-md transition-all duration-300">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
      
      <!-- Col 1: Room Image & View Detail Button (Span 3) -->
      <div class="lg:col-span-3 flex flex-col justify-between items-start w-full">
        <div class="relative w-full h-[240px] sm:h-[280px] lg:h-[260px] rounded-[16px] overflow-hidden bg-[#e5e7eb] group">
          <img
            :src="room.image"
            :alt="room.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>

        <!-- View Detail Button Below Image -->
        <button
          type="button"
          class="mt-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] border border-[#d5c7b5] text-xs sm:text-[13px] font-urbanist text-[#717680] hover:text-[#8F7553] hover:border-[#8F7553] hover:bg-[#FAF7F2] transition-colors cursor-pointer select-none font-normal"
          @click="emit('view', room)"
        >
          <span>View Detail</span>
          <span class="text-xs">→</span>
        </button>
      </div>

      <!-- Col 2: Title & Category (Span 3) -->
      <div class="lg:col-span-3 flex flex-col justify-between">
        <div>
          <!-- Subtitle / Tag -->
          <span class="font-urbanist text-xs uppercase tracking-wider text-[#717680] font-normal block mb-1.5">
            {{ room.badge || 'BEST OPTION TO STAY' }}
          </span>

          <!-- Title -->
          <h3 class="font-spartan text-lg sm:text-[20px] font-bold text-[#1f1a16] leading-snug">
            {{ room.fullName || room.name + ' Mega Resort Karimunjawa' }}
          </h3>
        </div>
      </div>

      <!-- Col 3: Pricing & Basic Information (Span 3) -->
      <div class="lg:col-span-3 flex flex-col justify-between space-y-4">
        <!-- Pricing -->
        <div>
          <div class="font-spartan text-lg sm:text-[20px] font-bold text-[#1f1a16]">
            {{ formatPrice(room.price) }}/{{ room.priceUnit || 'night' }}
          </div>

          <!-- Strikethrough & Discount -->
          <div class="font-urbanist text-xs text-[#717680] mt-0.5">
            <span v-if="room.originalPrice" class="line-through">
              {{ formatPrice(room.originalPrice) }}
            </span>
            <span v-if="room.originalPrice"> · </span>
            <span>{{ room.discountText || 'Save 5%' }}</span>
          </div>

          <!-- Tax Info -->
          <p class="font-urbanist text-xs text-[#717680] mt-0.5">
            {{ room.taxInfo || 'Include All Taxed' }}
          </p>
        </div>

        <!-- Basic Information Table -->
        <div class="pt-2">
          <span class="font-urbanist text-xs font-semibold text-[#1f1a16] block mb-2">
            Basic Information
          </span>
          
          <div class="space-y-1.5 text-xs font-urbanist">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[#717680]">Total Rooms</span>
              <span class="text-[#717680] font-normal">{{ room.specs?.totalRooms || '1 King + 2' }}</span>
            </div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-[#717680]">Bathrooms</span>
              <span class="text-[#717680] font-normal">{{ room.specs?.bathroom || '3 Attached' }}</span>
            </div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-[#717680]">Internet</span>
              <span class="text-[#717680] font-normal">{{ room.specs?.internet || '100Mbps' }}</span>
            </div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-[#717680]">Covered Parking</span>
              <span class="text-[#717680] font-normal">{{ room.specs?.coveredParking || 'Yes Two' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Col 4: Cleanliness & Amenities + Booking Button (Span 3) -->
      <div class="lg:col-span-3 flex flex-col justify-between space-y-4">
        <div>
          <!-- Category Header -->
          <span class="font-urbanist text-xs uppercase tracking-wider text-[#717680] font-normal block mb-3">
            {{ room.category || 'BASIC BACK COTTAGE' }}
          </span>

          <div class="space-y-3.5">
            <!-- Cleanlines -->
            <div class="flex items-start gap-2.5">
              <IconCleanliness class-name="w-4 h-4 text-[#8F7553] shrink-0 mt-0.5" />
              <div>
                <h5 class="font-spartan text-[14px] font-bold text-[#8F7553]">
                  Cleanlines
                </h5>
                <p class="font-opensans text-[11px] sm:text-[12px] text-[#717680] leading-snug mt-0.5">
                  {{ room.highlights?.cleanliness || 'A well-maintained cottage with high standards of cleanliness,' }}
                </p>
              </div>
            </div>

            <!-- Aminities -->
            <div class="flex items-start gap-2.5">
              <IconAmenities class-name="w-4 h-4 text-[#8F7553] shrink-0 mt-0.5" />
              <div>
                <h5 class="font-spartan text-[14px] font-bold text-[#8F7553]">
                  Aminities
                </h5>
                <p class="font-opensans text-[11px] sm:text-[12px] text-[#717680] leading-snug mt-0.5">
                  {{ room.highlights?.amenities || 'Equipped with essential amenities to provide convenience' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking CTA Button -->
        <div class="pt-2">
          <button
            type="button"
            class="w-full h-[40px] sm:h-[42px] flex items-center justify-center bg-[#8F7553] hover:bg-[#7b6343] text-white font-urbanist text-xs sm:text-[14px] font-medium rounded-[8px] transition-colors cursor-pointer shadow-xs"
            @click="emit('book', room)"
          >
            Booking Now
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
