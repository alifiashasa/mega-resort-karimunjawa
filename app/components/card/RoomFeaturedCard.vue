<script setup lang="ts">
import type { RoomItem } from '~/types'
import { Star } from 'lucide-vue-next'
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
    <!-- Side cards: image 390px (total hug 566px) | Center card: image 446px (total hug 622px) -->
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

      <!-- Rating Badge Top Right -->
      <div class="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-black/40 backdrop-blur-md text-white text-xs font-semibold select-none border border-white/20">
        <Star class="w-3.5 h-3.5 text-[#FFA03F] fill-[#FFA03F]" />
        <span>{{ room.rating }}{{ room.ratingScale || '/10' }}</span>
      </div>
    </div>

    <!-- Details -->
    <div class="pt-4 flex flex-col gap-2">
      <!-- Title -->
      <h3 class="font-spartan text-xl sm:text-[22px] font-bold text-[#1f1a16] leading-snug group-hover:text-[#977E5B] transition-colors">
        {{ room.name }}
      </h3>

      <!-- Location / Subtitle -->
      <p class="font-opensans text-[13px] text-[#717680] line-clamp-1">
        16 Admiralty war, Lekki Phase 1, Lagos
      </p>

      <!-- Tag Pills with icons matching reference -->
      <div class="flex flex-wrap items-center gap-2 pt-1">
        <!-- Tag 1: Sunset & Sunrise View -->
        <span class="inline-flex items-center gap-1.5 font-urbanist text-[11px] sm:text-[12px] px-3 py-1 rounded-[8px] bg-[#F5EFE6] text-[#8C704E] font-medium border border-[#ebdcc9]/50">
          <IconSun class-name="w-3.5 h-3.5 text-[#8C704E] fill-current" />
          <span>Sunset ans Sunrise View</span>
        </span>

        <!-- Tag 2: AC Central -->
        <span class="inline-flex items-center gap-1.5 font-urbanist text-[11px] sm:text-[12px] px-3 py-1 rounded-[8px] bg-[#F5EFE6] text-[#8C704E] font-medium border border-[#ebdcc9]/50">
          <IconBuildingAc class-name="w-3.5 h-3.5 text-[#8C704E]" />
          <span>AC Central</span>
        </span>
      </div>

      <!-- Price -->
      <div class="pt-2 flex items-baseline gap-1">
        <span class="font-spartan text-[18px] sm:text-[20px] font-bold text-[#1f1a16]">
          {{ formatPrice(room.price) }}
        </span>
        <span class="font-urbanist text-xs sm:text-[13px] text-[#717680] font-normal">
          /{{ room.priceUnit || 'night' }}
        </span>
      </div>
    </div>
  </div>
</template>
