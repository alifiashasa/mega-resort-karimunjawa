<script setup lang="ts">
import { Ship, Plane } from 'lucide-vue-next'

const { t } = useI18n()

const routes = computed(() => [
  {
    icon: Ship,
    iconRotate: '',
    title: t('discoverPage.transportation.route1Title'),
    subtitle: t('discoverPage.transportation.route1Subtitle'),
    steps: [
      t('discoverPage.transportation.route1Step1'),
      t('discoverPage.transportation.route1Step2'),
      t('discoverPage.transportation.route1Step3'),
    ],
  },
  {
    icon: Plane,
    iconRotate: '-rotate-45',
    title: t('discoverPage.transportation.route2Title'),
    subtitle: t('discoverPage.transportation.route2Subtitle'),
    steps: [
      t('discoverPage.transportation.route2Step1'),
      t('discoverPage.transportation.route2Step2'),
      t('discoverPage.transportation.route2Step3'),
    ],
  },
  {
    icon: Plane,
    iconRotate: '-rotate-45',
    title: t('discoverPage.transportation.route3Title'),
    subtitle: t('discoverPage.transportation.route3Subtitle'),
    steps: [
      t('discoverPage.transportation.route3Step1'),
      t('discoverPage.transportation.route3Step2'),
      t('discoverPage.transportation.route3Step3'),
    ],
  },
])
</script>

<template>
  <section id="transportation" class="py-10 sm:py-12 lg:py-14 bg-[#977E5B] text-white">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-18 items-start">
        
        <!-- Left Column: Caption, Title & Description -->
        <div class="lg:col-span-5 flex flex-col pt-2">
          <!-- Caption -->
          <p class="font-opensans text-sm sm:text-base lg:text-[17px] text-white/80 mb-3 sm:mb-4 leading-normal">
            {{ t('discoverPage.transportation.caption') }}
          </p>

          <!-- Heading -->
          <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[48px] xl:text-[50px] font-semibold text-white leading-[1.12] mb-6">
            {{ t('discoverPage.transportation.title') }}
          </h2>

          <!-- Description Paragraph -->
          <p class="font-opensans text-sm sm:text-base lg:text-[17px] text-white/85 leading-relaxed max-w-lg">
            {{ t('discoverPage.transportation.description') }}
          </p>
        </div>

        <!-- Right Column: Transportation Route Cards -->
        <div class="lg:col-span-7 space-y-6 sm:space-y-8">
          <div
            v-for="(route, idx) in routes"
            :key="idx"
            class="rounded-[20px] border border-white/40 bg-[#977E5B] overflow-hidden shadow-xs transition-colors hover:border-white/60"
          >
            <!-- Card Header -->
            <div class="p-5 sm:px-7 sm:py-5 flex items-center gap-4">
              <!-- Circular Icon Badge -->
              <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/60 flex items-center justify-center shrink-0 text-white bg-[#977E5B]">
                <component
                  :is="route.icon"
                  class="w-5 h-5 sm:w-[22px] sm:h-[22px]"
                  :class="route.iconRotate"
                />
              </div>

              <!-- Title & Subtitle -->
              <div>
                <h3 class="font-spartan text-base sm:text-lg lg:text-[20px] font-semibold text-white tracking-wide leading-snug">
                  {{ route.title }}
                </h3>
                <p class="font-opensans text-xs sm:text-sm text-white/75 font-normal mt-0.5">
                  {{ route.subtitle }}
                </p>
              </div>
            </div>

            <!-- Steps Details with Horizontal Dividers -->
            <div class="border-t border-white/40 divide-y divide-white/40">
              <div
                v-for="(step, sIdx) in route.steps"
                :key="sIdx"
                class="px-5 py-4 sm:px-7 sm:py-5"
              >
                <p class="font-opensans text-xs sm:text-sm lg:text-[15.5px] text-white/90 leading-relaxed">
                  {{ step }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

