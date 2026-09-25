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
  <section id="journey" class="py-10 sm:py-12 lg:py-14 bg-[#FFF9EB]">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header (Wide layout) -->
      <div class="w-full mb-8 sm:mb-10">
        <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#977E5B] leading-tight mb-3">
          {{ t('discoverPage.journey.title') }}
        </h2>
        <p class="font-opensans text-sm sm:text-base lg:text-[20px] text-[#717680] leading-relaxed max-w-6xl">
          {{ t('discoverPage.journey.description') }}
        </p>
      </div>

      <!-- Timeline List (Wider layout with continuous line) -->
      <div class="relative w-full">
        <div>
          <div
            v-for="(item, idx) in milestones"
            :key="idx"
            class="relative flex flex-col md:flex-row items-start gap-4 md:gap-0 group"
          >
            <!-- Left: Year & Title (Fixed width for perfect alignment) -->
            <div
              class="w-full md:w-[200px] lg:w-[240px] shrink-0 flex flex-col"
              :class="{ 'md:pb-8 lg:pb-10': idx < milestones.length - 1 }"
            >
              <div class="h-8 sm:h-[36px] flex items-center mb-2">
                <span class="font-spartan text-2xl sm:text-[36px] font-semibold text-[#977E5B] leading-none">
                  {{ item.year }}
                </span>
              </div>
              <span class="font-opensans text-sm sm:text-[20px] text-[#717680] font-normal">
                {{ item.title }}
              </span>
            </div>

            <!-- Center: Bullet Node with Vertical Line -->
            <div class="hidden md:flex flex-col items-center w-[60px] lg:w-[80px] shrink-0 relative self-stretch">
              <!-- Connecting Line between dots (seamlessly reaches and connects behind the next dot) -->
              <div
                v-if="idx < milestones.length - 1"
                class="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#DDD5C7]"
                :style="idx === 0 ? 'top: 12px; bottom: -30px;' : 'top: 30px; bottom: -88px;'"
              />
              <!-- Bullet Node: top dot aligned with 2016, middle slightly down, bottom moved down -->
              <div
                class="flex items-center justify-center shrink-0"
                :class="[
                  idx === 0 ? 'mt-0 sm:mt-0.5' : '',
                  idx === 1 ? 'mt-3.5 sm:mt-5' : '',
                  idx === milestones.length - 1 ? 'mt-[70px] sm:mt-[78px]' : '',
                ]"
              >
                <div class="relative z-10 w-5 h-5 rounded-full bg-[#977E5B] border-2 border-solid border-white shrink-0 shadow-xs" />
              </div>
            </div>

            <!-- Right: Description (Expanded full width) -->
            <div
              class="flex-1 w-full md:pl-2"
              :class="{ 'pb-10 sm:pb-12 md:pb-12 lg:pb-16': idx < milestones.length - 1 }"
            >
              <p
                class="font-opensans text-sm sm:text-base lg:text-[20px] text-[#717680] leading-[1.7] max-w-4xl"
                :class="idx === 1 ? '-mt-1 sm:-mt-2' : 'sm:pt-1'"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
