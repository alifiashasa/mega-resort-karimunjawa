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

const formatPrice = (val: number) => {
  return 'Rp ' + val.toLocaleString('id-ID')
}
</script>

<template>
  <div class="bg-white rounded-[20px] p-5 sm:p-6 border border-[#EBEBEB] shadow-xs hover:shadow-md transition-all duration-300">
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-7 xl:gap-8 items-stretch">
      
      <!-- Left: Room Image (Full height) -->
      <div class="w-full lg:w-[240px] xl:w-[250px] shrink-0 h-[220px] sm:h-[250px] lg:h-auto rounded-[14px] overflow-hidden bg-[#e5e7eb] group">
        <img
          :src="room.image"
          :alt="room.name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
      </div>

      <!-- Right: 3-Column Content Grid -->
      <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 xl:gap-8 items-stretch">
        
        <!-- Col 1: Room Title & View Detail Button -->
        <div class="flex flex-col justify-between items-start">
          <div>
            <!-- Subtitle / Tag -->
            <span class="font-opensans text-xs uppercase tracking-wider text-[#717680] font-normal block mb-1.5">
              {{ room.badge || 'BEST OPTION TO STAY' }}
            </span>

            <!-- Title -->
            <h3 class="font-opensans text-lg sm:text-[20px] font-semibold text-[#1f1a16] leading-snug">
              {{ room.fullName || room.name + ' Mega Resort Karimunjawa' }}
            </h3>
          </div>

          <!-- View Detail Button Aligned to Bottom -->
          <button
            type="button"
            class="mt-6 lg:mt-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] border border-[#D9D9D9] text-xs font-opensans text-[#717680] hover:text-[#1f1a16] hover:border-[#8F7553] hover:bg-[#FAF7F2] transition-colors cursor-pointer select-none font-normal"
            @click="emit('view', room)"
          >
            <span>View Detail</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- Col 2: Pricing & Basic Information -->
        <div class="flex flex-col justify-between space-y-4">
          <!-- Pricing Block -->
          <div>
            <!-- Price with League Spartan font -->
            <div class="font-spartan text-lg sm:text-[20px] font-bold text-[#1f1a16]">
              {{ formatPrice(room.price) }}/{{ room.priceUnit || 'night' }}
            </div>

            <!-- Strikethrough & Discount -->
            <div class="font-opensans text-xs text-[#717680] mt-0.5 flex items-center gap-1.5">
              <span v-if="room.originalPrice" class="line-through decoration-[1px] decoration-[#9AA4B2]">
                {{ formatPrice(room.originalPrice) }}
              </span>
              <span v-if="room.originalPrice">·</span>
              <span>{{ room.discountText || 'Save 5%' }}</span>
            </div>

            <!-- Tax Info -->
            <p class="font-opensans text-xs text-[#717680] mt-0.5">
              {{ room.taxInfo || 'Include All Taxed' }}
            </p>
          </div>

          <!-- Basic Information Table -->
          <div class="pt-2">
            <span class="font-opensans text-xs sm:text-[13px] font-medium text-[#1f1a16] block mb-2">
              Basic Information
            </span>
            
            <div class="space-y-1.5 text-xs font-opensans">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[#1f1a16]">Total Rooms</span>
                <span class="text-[#717680] font-normal">{{ room.specs?.totalRooms || '1 King + 2' }}</span>
              </div>
              <div class="flex items-center justify-between gap-2">
                <span class="text-[#1f1a16]">Bathrooms</span>
                <span class="text-[#717680] font-normal">{{ room.specs?.bathroom || '3 Attached' }}</span>
              </div>
              <div class="flex items-center justify-between gap-2">
                <span class="text-[#1f1a16]">Internet</span>
                <span class="text-[#717680] font-normal">{{ room.specs?.internet || '100Mbps' }}</span>
              </div>
              <div class="flex items-center justify-between gap-2">
                <span class="text-[#1f1a16]">Covered Parking</span>
                <span class="text-[#717680] font-normal">{{ room.specs?.coveredParking || 'Yes Two' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Col 3: Cleanliness, Amenities & Booking Button -->
        <div class="flex flex-col justify-between space-y-4">
          <div>
            <!-- Category Header -->
            <span class="font-opensans text-xs uppercase tracking-wider text-[#717680] font-normal block mb-3">
              {{ room.category || 'BASIC BACK COTTAGE' }}
            </span>

            <div class="space-y-3.5">
              <!-- Cleanlines -->
              <div class="flex items-start gap-2.5">
                <IconCleanliness class-name="w-4 h-4 text-[#8F7553] shrink-0 mt-0.5" />
                <div>
                  <h5 class="font-opensans text-[14px] sm:text-[15px] font-semibold text-[#977E5B]">
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
                  <h5 class="font-opensans text-[14px] sm:text-[15px] font-semibold text-[#977E5B]">
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
              class="w-full h-[40px] sm:h-[42px] flex items-center justify-center bg-gradient-to-b from-[#977E5B] to-[#887050] hover:from-[#8E7554] hover:to-[#7D6647] text-white font-opensans text-xs sm:text-[14px] font-normal rounded-[12px] border border-[#715B3E] shadow-[0_2px_4px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-2px_3px_rgba(0,0,0,0.35)] transition-all duration-200 cursor-pointer active:scale-[0.99]"
              @click="emit('book', room)"
            >
              Booking Now
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

