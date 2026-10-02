<script setup lang="ts">
import { RefreshCw } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Props {
  imageSrc?: string
  imageMaxWidth?: string
  title?: string
  description?: string
  buttonText?: string
  showButton?: boolean
  code?: string | number
  to?: string
  icon?: Component | boolean
}

const props = withDefaults(defineProps<Props>(), {
  imageSrc: '/images/empty-state-404.svg',
  imageMaxWidth: 'max-w-[170px] sm:max-w-[200px] md:max-w-[230px]',
  title: '',
  description: '',
  buttonText: '',
  showButton: true,
  code: '404',
  to: '',
  icon: undefined,
})

const emit = defineEmits<{
  (e: 'action'): void
}>()

const { t, te } = useI18n()
const localePath = useLocalePath()

const displayTitle = computed(() => {
  if (props.title) return props.title
  return te('emptyState.title') ? t('emptyState.title') : "We're Experiencing a Temporary Issue"
})

const displayDescription = computed(() => {
  if (props.description) return props.description
  return te('emptyState.description')
    ? t('emptyState.description')
    : "The page you're looking for is currently unavailable due to a technical problem. Please try again in a few moments while we work to restore access."
})

const displayButtonText = computed(() => {
  if (props.buttonText) return props.buttonText
  return te('emptyState.tryAgain') ? t('emptyState.tryAgain') : 'Try Again'
})

const shouldShowDefaultIcon = computed(() => {
  if (props.icon === false) return false
  if (props.icon) return true
  // Auto show Refresh icon if button is Try Again / Coba Lagi
  return (
    displayButtonText.value.toLowerCase().includes('try again') ||
    displayButtonText.value.toLowerCase().includes('coba lagi')
  )
})

const handleAction = () => {
  emit('action')
}
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center py-12 md:py-20 px-4 text-center select-none">
    <!-- Illustration Graphic -->
    <div
      class="relative w-full mx-auto mb-6 sm:mb-8 transition-transform duration-500 hover:scale-[1.02]"
      :class="imageMaxWidth"
    >
      <img
        :src="imageSrc"
        :alt="displayTitle"
        class="w-full h-auto object-contain mx-auto select-none pointer-events-none"
        loading="eager"
      />
    </div>

    <!-- Main Title -->
    <h1 class="text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] font-semibold text-[#101828] tracking-tight mb-3 sm:mb-4 font-spartan leading-tight max-w-4xl lg:max-w-5xl mx-auto">
      {{ displayTitle }}
    </h1>

    <!-- Description Paragraph -->
    <p class="text-sm sm:text-base text-[#101828] max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-[880px] mx-auto leading-relaxed mb-6 sm:mb-8 font-sans font-normal px-2">
      {{ displayDescription }}
    </p>

    <!-- Action Button -->
    <div v-if="showButton" class="flex items-center justify-center">
      <NuxtLink
        v-if="to"
        :to="localePath(to)"
        class="inline-flex items-center justify-center gap-3 px-7 py-3 sm:px-8 sm:py-3.5 bg-[#937A54] hover:bg-[#886F4A] active:scale-[0.99] text-white font-sans text-base sm:text-[17px] font-medium rounded-[14px] sm:rounded-[16px] border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)] transition-all duration-200 cursor-pointer"
      >
        <component
          :is="typeof icon === 'object' ? icon : RefreshCw"
          v-if="shouldShowDefaultIcon"
          class="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
          :stroke-width="2.2"
        />
        <span>{{ displayButtonText }}</span>
      </NuxtLink>

      <button
        v-else
        type="button"
        class="inline-flex items-center justify-center gap-3 px-7 py-3 sm:px-8 sm:py-3.5 bg-[#937A54] hover:bg-[#886F4A] active:scale-[0.99] text-white font-sans text-base sm:text-[17px] font-medium rounded-[14px] sm:rounded-[16px] border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)] transition-all duration-200 cursor-pointer select-none"
        @click="handleAction"
      >
        <component
          :is="typeof icon === 'object' ? icon : RefreshCw"
          v-if="shouldShowDefaultIcon"
          class="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
          :stroke-width="2.2"
        />
        <span>{{ displayButtonText }}</span>
      </button>
    </div>
  </div>
</template>
