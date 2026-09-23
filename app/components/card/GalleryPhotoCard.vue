<script setup lang="ts">
import { Maximize2 } from 'lucide-vue-next'

export interface GalleryPhotoItem {
  id: number
  title: string
  titleEn?: string
  category: string
  image: string
}

interface Props {
  item: GalleryPhotoItem
  heightClass?: string
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  heightClass: 'h-[190px] sm:h-[220px] md:h-[250px] lg:h-[270px]',
  compact: false,
})

const emit = defineEmits<{
  (e: 'click', item: GalleryPhotoItem): void
}>()
</script>

<template>
  <div
    class="group relative rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#E2D5C3] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer select-none"
    :class="heightClass"
    @click="emit('click', item)"
  >
    <!-- Background Image -->
    <img
      :src="item.image"
      :alt="item.title"
      class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
      loading="lazy"
    />

    <!-- Subtle Dark/Gold Hover Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
      :class="compact ? 'p-3.5 sm:p-4' : 'p-4 sm:p-5'"
    >
      <div class="w-full flex items-center justify-between text-white">
        <div class="text-left min-w-0 pr-2">
          <span
            class="uppercase font-medium text-[#E5CD9E] tracking-wider block mb-0.5 truncate"
            :class="compact ? 'text-[11px]' : 'text-xs'"
          >
            {{ item.category }}
          </span>
          <span
            class="font-spartan font-semibold block truncate"
            :class="compact ? 'text-xs sm:text-[14px]' : 'text-sm sm:text-[16px]'"
          >
            {{ item.title }}
          </span>
        </div>
        <div
          class="rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0"
          :class="compact ? 'w-7 h-7' : 'w-8 h-8'"
        >
          <Maximize2
            class="text-white"
            :class="compact ? 'w-3.5 h-3.5' : 'w-4 h-4'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
