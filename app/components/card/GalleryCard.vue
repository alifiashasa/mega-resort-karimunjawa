<script setup lang="ts">
import type { GalleryItem } from '~/types'

interface Props {
  item: GalleryItem
  isActive?: boolean
}

defineProps<Props>()
</script>

<template>
  <div
    class="relative rounded-xl overflow-hidden transition-all duration-500 ease-out select-none"
    :class="[
      isActive
        ? 'scale-105 sm:scale-110 z-20 shadow-2xl ring-2 ring-[#b98e46]'
        : 'opacity-70 hover:opacity-95 scale-95 z-10 brightness-90 shadow-md'
    ]"
  >
    <div class="aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden">
      <img
        :src="item.image"
        :alt="item.title"
        class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        loading="lazy"
      />
    </div>

    <div
      v-if="isActive && item.description"
      class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white text-left"
    >
      <span class="text-[10px] sm:text-xs uppercase tracking-widest text-[#b98e46] font-semibold block mb-1">
        {{ item.category }}
      </span>
      <h4 class="font-luxury text-base sm:text-xl font-bold">
        {{ item.title }}
      </h4>
      <p class="text-xs text-white/80 line-clamp-2 mt-1 hidden sm:block">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>
