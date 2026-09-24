<script setup lang="ts">
const { t } = useI18n()

const milestones = computed(() => [
  {
    year: t('discoverPage.journey.milestone1Year'),
    title: t('discoverPage.journey.milestone1Title'),
    description: t('discoverPage.journey.milestone1Desc'),
  },
  {
    year: t('discoverPage.journey.milestone2Year'),
    title: t('discoverPage.journey.milestone2Title'),
    description: t('discoverPage.journey.milestone2Desc'),
  },
  {
    year: t('discoverPage.journey.milestone3Year'),
    title: t('discoverPage.journey.milestone3Title'),
    description: t('discoverPage.journey.milestone3Desc'),
  },
])
</script>

<template>
  <section id="journey" class="py-16 sm:py-20 lg:py-24 bg-[#FFF9EB]">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header (Wide layout) -->
      <div class="w-full mb-14 sm:mb-18">
        <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#977E5B] leading-tight mb-4">
          {{ t('discoverPage.journey.title') }}
        </h2>
        <p class="font-opensans text-sm sm:text-base lg:text-[16px] text-[#82868D] leading-relaxed max-w-6xl">
          {{ t('discoverPage.journey.description') }}
        </p>
      </div>

      <!-- Timeline List (Wider layout with continuous line) -->
      <div class="relative w-full">
        <div class="space-y-12 sm:space-y-16">
          <div
            v-for="(item, idx) in milestones"
            :key="idx"
            class="relative flex flex-col md:flex-row items-start gap-4 md:gap-0 group"
          >
            <!-- Left: Year & Title (Fixed width for perfect alignment) -->
            <div class="w-full md:w-[200px] lg:w-[240px] shrink-0 flex flex-col">
              <span class="font-spartan text-2xl sm:text-3xl font-bold text-[#977E5B] leading-none mb-2">
                {{ item.year }}
              </span>
              <span class="font-opensans text-sm sm:text-[15px] text-[#82868D] font-normal">
                {{ item.title }}
              </span>
            </div>

            <!-- Center: Bullet Node with Vertical Line -->
            <div class="hidden md:flex w-[60px] lg:w-[80px] shrink-0 justify-center relative pt-1">
              <!-- Connecting Line between dots -->
              <div
                v-if="idx < milestones.length - 1"
                class="absolute top-3.5 bottom-[-68px] sm:bottom-[-84px] w-[1.5px] bg-[#E7E2D6]"
              />
              <!-- Bullet Node -->
              <div class="w-3.5 h-3.5 rounded-full bg-[#977E5B] ring-4 ring-[#FFF9EB] z-10 shrink-0" />
            </div>

            <!-- Right: Description (Expanded full width) -->
            <div class="flex-1 w-full md:pl-2">
              <p class="font-opensans text-sm sm:text-base lg:text-[16px] text-[#82868D] leading-[1.7] max-w-4xl">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
