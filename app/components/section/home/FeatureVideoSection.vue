<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import { Play } from 'lucide-vue-next'

const { t } = useI18n()
const store = useResortStore()
</script>

<template>
  <section class="relative w-full overflow-hidden min-h-[550px] sm:min-h-[620px] lg:h-[700px] lg:min-h-[700px] flex flex-col justify-between">
    <!-- Sunset Panoramic Resort Background Full Bleed (Shifted image upward) -->
    <img
      src="/images/video-banner-bg.jpg"
      alt="Mega Resort Karimunjawa Sunset Panorama"
      class="absolute inset-x-0 -top-16 sm:-top-24 lg:-top-36 w-full h-[calc(100%+64px)] sm:h-[calc(100%+96px)] lg:h-[calc(100%+144px)] object-cover object-bottom"
      loading="lazy"
    />

    <!-- Top Right Colored Logo Container (Wider Container) -->
    <div class="relative z-20 w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto flex justify-end px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 lg:pt-12">
      <div class="flex flex-col items-center">
        <img
          src="/logo/logo-megaresort-color.svg"
          alt="Mega Resort Karimunjawa Logo"
          class="w-20 sm:w-24 lg:w-28 h-auto select-none"
          loading="eager"
        />
      </div>
    </div>

    <!-- Content Overlay at Bottom Container (Wide Layout, No Shadow) -->
    <div class="relative z-10 w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 pb-8 sm:pb-12 lg:pb-14 text-white">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-12">
        <!-- Left: Title and Description Wide (Shifted right) -->
        <div class="flex-1 w-full max-w-none pl-2 sm:pl-6 lg:pl-10">
          <!-- Allura Script Headline (100px, 400 weight, 3.5% tracking) -->
          <h2 class="font-allura font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[100px] text-white leading-tight lg:leading-[112px] tracking-[0.035em] mb-2 sm:mb-3">
            {{ t('videoBanner.title') }}
          </h2>

          <!-- Paragraph text in League Spartan 24px -->
          <p class="font-spartan text-[18px] sm:text-[20px] lg:text-[24px] text-white leading-[1.6] font-normal text-left max-w-none">
            {{ t('videoBanner.description') }}
          </p>
        </div>

        <!-- Right: Circular Play Video Trigger Button (Compact, No Blur, Shifted upward) -->
        <div class="flex flex-col items-center justify-center shrink-0 self-start md:self-center -translate-y-8 sm:-translate-y-14 lg:-translate-y-20 pr-1 sm:pr-4">
          <button
            type="button"
            class="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] rounded-full border border-white/85 hover:border-white hover:bg-black/50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md group"
            @click="store.openVideoModal()"
            aria-label="Play resort video"
          >
            <Play class="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5 text-white fill-white ml-0.5" />
          </button>
          <span class="text-[12px] sm:text-[13px] text-white/95 font-opensans font-normal mt-2 text-center whitespace-nowrap">
            {{ t('videoBanner.playVideo') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
