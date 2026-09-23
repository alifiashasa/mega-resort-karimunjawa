<script setup lang="ts">
export interface MomentItem {
  id: number
  title: string
  titleEn?: string
  image: string
  category?: string
}

interface Props {
  item: MomentItem
  offset: number
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false,
})

const emit = defineEmits<{
  (e: 'click', item: MomentItem, offset: number): void
  (e: 'view', item: MomentItem): void
}>()
</script>

<template>
  <div
    class="shrink-0 cursor-pointer transition-all duration-500 ease-out select-none group relative"
    :class="[
      offset === 0
        ? 'w-[180px] sm:w-[210px] md:w-[245px] lg:w-[280px] h-[280px] sm:h-[330px] md:h-[390px] lg:h-[440px] rounded-[16px] sm:rounded-[20px] shadow-[0_12px_32px_rgba(0,0,0,0.18)] z-20'
        : Math.abs(offset) === 1
          ? 'w-[155px] sm:w-[180px] md:w-[215px] lg:w-[245px] h-[235px] sm:h-[280px] md:h-[330px] lg:h-[370px] rounded-[14px] sm:rounded-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] z-10'
          : 'w-[135px] sm:w-[155px] md:w-[185px] lg:w-[215px] h-[200px] sm:h-[235px] md:h-[280px] lg:h-[315px] rounded-[12px] sm:rounded-[16px] shadow-[0_6px_18px_rgba(0,0,0,0.1)] hidden sm:block z-0'
    ]"
    @click="emit('click', item, offset)"
  >
    <div class="relative w-full h-full rounded-[inherit] overflow-hidden bg-[#E2D5C3]">
      <img
        :src="item.image"
        :alt="item.title"
        class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      <!-- Bottom Gradient Shade for Label matching exact reference -->
      <div
        class="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-3 sm:p-4 md:p-5 pointer-events-none"
      >
        <span class="font-opensans text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-bold text-white tracking-normal drop-shadow-md truncate">
          {{ item.title }}
        </span>
      </div>
    </div>
  </div>
</template>
