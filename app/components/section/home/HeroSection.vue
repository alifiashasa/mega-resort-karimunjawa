<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import { ChevronDown } from 'lucide-vue-next'
import IconLotus from '~/components/common/icons/IconLotus.vue'

interface Props {
  id?: string
  bgImage?: string
  bgPosition?: string
  badgePrefix?: string
  scriptWord?: string
  title?: string
  description?: string
  ctaText?: string
  ctaTargetId?: string
  showScrollDown?: boolean
  scrollDownTarget?: string
  minHeight?: string
  overlayClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: 'home',
  bgImage: '/images/hero-home.jpg',
  bgPosition: 'object-center',
  badgePrefix: '',
  scriptWord: '',
  title: '',
  description: '',
  ctaText: '',
  ctaTargetId: '',
  showScrollDown: true,
  scrollDownTarget: '#about',
  minHeight: 'min-h-[620px] sm:min-h-[720px] lg:h-[820px]',
  overlayClass: 'bg-black/25',
})

const { t } = useI18n()
const store = useResortStore()

const handleCtaClick = () => {
  if (props.ctaTargetId) {
    const target = document.querySelector(props.ctaTargetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }
  store.openBookingModal()
}
</script>

<template>
  <section
    :id="id"
    class="relative flex items-center justify-center overflow-hidden select-none"
    :class="minHeight"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="bgImage"
        alt="Mega Resort Karimunjawa"
        class="w-full h-full object-cover scale-100"
        :class="bgPosition"
      />
      <!-- Configurable Overlay -->
      <div class="absolute inset-0" :class="overlayClass" />
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-14 pb-20 flex flex-col items-center">
      <!-- Lotus Leaf Emblem in Center (from official logo-megaresort.svg) -->
      <div class="w-12 h-9 sm:w-16 sm:h-12 mb-5 sm:mb-6">
        <IconLotus fill-color="#FFFFFF" class-name="w-full h-full drop-shadow-sm" />
      </div>

      <!-- Subtitle & Main Title matching Figma Reference -->
      <div class="mb-4">
        <h2 class="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[0.14em] uppercase font-normal text-white leading-tight flex items-baseline justify-center flex-wrap gap-x-2 sm:gap-x-3">
          <span>{{ badgePrefix || t('hero.badge') }}</span>
          <span class="font-script lowercase font-normal italic tracking-normal text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white/95 -ml-1">
            {{ scriptWord || t('hero.of') }}
          </span>
        </h2>
        <h1 class="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-normal tracking-[0.14em] uppercase text-white mt-1 sm:mt-2 leading-tight">
          {{ title || t('hero.title') }}
        </h1>
      </div>

      <!-- Description Paragraph -->
      <p class="font-opensans text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-white/90 leading-relaxed font-normal max-w-4xl mx-auto mb-8 px-2">
        {{ description || t('hero.description') }}
      </p>

      <!-- Pill Button: Explore Mega Resort matching Figma design -->
      <div class="flex justify-center">
        <button
          type="button"
          class="group inline-flex items-center justify-center gap-2.5 h-[48px] px-6 min-w-[215px] rounded-[16px] border border-[#FAFAFA] bg-transparent hover:bg-white/10 text-[#FAFAFA] font-sans text-[15px] sm:text-[16px] tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-lg"
          @click="handleCtaClick"
        >
          <!-- Lotus Emblem Icon -->
          <IconLotus class-name="w-6 h-[18px] sm:w-6.5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span class="whitespace-nowrap">{{ ctaText || t('hero.explore') }}</span>
        </button>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <a
      v-if="showScrollDown"
      :href="scrollDownTarget"
      class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white flex flex-col items-center gap-1 transition-colors group cursor-pointer"
      aria-label="Scroll down to next section"
    >
      <ChevronDown class="w-6 h-6 animate-bounce text-white/80 group-hover:text-white" />
    </a>
  </section>
</template>

