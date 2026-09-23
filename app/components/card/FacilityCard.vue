<script setup lang="ts">
import type { FacilityItem } from '~/types'

interface Props {
  facility: FacilityItem
}

defineProps<Props>()

const { locale } = useI18n()

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  if (target) {
    target.src = '/images/hero-facility.jpg'
  }
}
</script>

<template>
  <div
    class="group relative w-full h-[400px] sm:h-[460px] lg:h-[500px] rounded-[20px] overflow-hidden select-none shadow-md hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer bg-neutral-800"
  >
    <!-- Background Image with Zoom on Hover -->
    <img
      :src="facility.image || '/images/hero-facility.jpg'"
      :alt="facility.name"
      class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      loading="lazy"
      @error="handleImageError"
    />

    <!-- Subtle Soft Bottom Vignette -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

    <!-- Glassmorphic Bottom Info Panel matching Figma -->
    <div
      class="absolute bottom-3.5 inset-x-3.5 sm:bottom-4 sm:inset-x-4 backdrop-blur-md bg-white/15 rounded-[16px] p-4 sm:p-4.5 text-white transition-all duration-300 group-hover:bg-white/25 shadow-lg"
    >
      <h3 class="font-sans text-base sm:text-[18px] font-bold text-white leading-snug tracking-normal mb-1">
        {{ facility.name }}
      </h3>
      <p class="font-sans text-[12px] text-white/95 leading-relaxed line-clamp-3 font-normal">
        {{ locale === 'en' && facility.descriptionEn ? facility.descriptionEn : facility.description }}
      </p>
    </div>
  </div>
</template>
