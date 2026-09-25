<script setup lang="ts">
import type { RoomItem } from '~/types'
import IconRibbonBadge from '~/components/common/icons/IconRibbonBadge.vue'
import IconStar from '~/components/common/icons/IconStar.vue'
import IconSun from '~/components/common/icons/IconSun.vue'
import IconBuildingAc from '~/components/common/icons/IconBuildingAc.vue'

interface Props {
  room: RoomItem
  isCenter?: boolean
}

withDefaults(defineProps<Props>(), {
  isCenter: false,
})

const emit = defineEmits<{
  (e: 'book', room: RoomItem): void
  (e: 'select', room: RoomItem): void
}>()

const formatPrice = (val: number) => {
  return 'Rp ' + val.toLocaleString('id-ID') + ',00'
}
</script>

<template>
  <div
    class="group cursor-pointer flex flex-col w-full bg-transparent rounded-[12px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2"
    @click="emit('select', room)"
  >
    <!-- Card Image with Rating Overlay (Radius 12px) -->
    <div
      class="relative w-full rounded-[12px] overflow-hidden bg-[#e5e7eb] shadow-xs group-hover:shadow-xl transition-all duration-500 ease-out"
      :class="[
        isCenter
          ? 'h-[340px] sm:h-[400px] lg:h-[446px]'
          : 'h-[300px] sm:h-[350px] lg:h-[390px]'
      ]"
    >
      <img
        :src="room.image"
        :alt="room.name"
        class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      <!-- Rating Badge Top Right (IconRibbonBadge) -->
      <div class="absolute top-3.5 right-3.5 inline-flex items-center h-[28px] sm:h-[30px] select-none shrink-0 drop-shadow-[2px_1.6px_1px_rgba(28,110,164,0.2)]">
        <IconRibbonBadge fill-color="#977E5B" />
        <div class="absolute inset-0 flex items-center pl-2.5 pr-3.5 gap-1 text-white">
          <IconStar class-name="w-3 h-3 text-white fill-white shrink-0 -mt-0.5" />
          <div class="flex items-baseline font-urbanist">
            <span class="text-[14px] sm:text-[15px] font-bold leading-none tracking-tight">{{ room.rating }}</span>
            <span class="text-[11px] sm:text-[12px] font-normal text-white/95 leading-none">{{ room.ratingScale || '/10' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Details -->
    <div class="pt-4 flex flex-col gap-2">
      <!-- Title -->
      <h3 class="font-opensans text-xl sm:text-[22px] font-semibold text-[#090C10] leading-snug group-hover:text-[#977E5B] transition-colors">
        {{ room.name }}
      </h3>

      <!-- Location / Subtitle -->
      <p class="font-opensans text-[16px] text-[#717680] line-clamp-1">
        16 Admiralty war, Lekki Phase 1, Lagos
      </p>

      <!-- Tag Pills with icons matching reference -->
      <div class="flex flex-wrap items-center gap-2 pt-1">
        <!-- Tag 1: Sunset & Sunrise View -->
        <span class="inline-flex items-center gap-1.5 font-urbanist text-[11px] sm:text-[12px] px-3 py-1 rounded-full bg-[#F6F4F0] text-[#977E5B] font-medium">
          <IconSun class-name="w-3.5 h-3.5 text-[#977E5B] fill-current" />
          <span>Sunset ans Sunrise View</span>
        </span>

        <!-- Tag 2: AC Central -->
        <span class="inline-flex items-center gap-1.5 font-urbanist text-[11px] sm:text-[12px] px-3 py-1 rounded-full bg-[#F6F4F0] text-[#977E5B] font-medium">
          <IconBuildingAc class-name="w-3.5 h-3.5 text-[#977E5B]" />
          <span>AC Central</span>
        </span>
      </div>

      <!-- Price -->
      <div class="pt-2 flex items-baseline gap-1">
        <span class="font-opensans text-[18px] sm:text-[20px] font-normal text-[#090C10]">
          {{ formatPrice(room.price) }}
        </span>
        <span class="font-opensans text-xs sm:text-[18px] text-[#717680] font-normal">
          /{{ room.priceUnit || 'night' }}
        </span>
      </div>
    </div>
  </div>
</template>
