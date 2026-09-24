<script setup lang="ts">
import { Ship, Plane, Compass } from 'lucide-vue-next'

const { t } = useI18n()

const routes = computed(() => [
  {
    icon: Ship,
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
    title: t('discoverPage.transportation.route2Title'),
    subtitle: t('discoverPage.transportation.route2Subtitle'),
    steps: [
      t('discoverPage.transportation.route2Step1'),
      t('discoverPage.transportation.route2Step2'),
      t('discoverPage.transportation.route2Step3'),
    ],
  },
  {
    icon: Compass,
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
  <section id="transportation" class="py-16 sm:py-20 lg:py-24 bg-[#8C704E] text-white">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        <!-- Left Column: Title & Description -->
        <div class="lg:col-span-5 flex flex-col justify-between">
          <div>
            <!-- Badge -->
            <span class="font-urbanist text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white/70 block mb-3">
              {{ t('discoverPage.transportation.badge') }}
            </span>

            <!-- Heading -->
            <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.18] mb-6">
              {{ t('discoverPage.transportation.title') }}
            </h2>

            <!-- Paragraph -->
            <p class="font-opensans text-sm sm:text-base text-white/85 leading-relaxed mb-8">
              {{ t('discoverPage.transportation.description') }}
            </p>
          </div>
        </div>

        <!-- Right Column: Transportation Routes List -->
        <div class="lg:col-span-7 space-y-8">
          <div
            v-for="(route, idx) in routes"
            :key="idx"
            class="pb-8 border-b border-white/20 last:border-b-0 last:pb-0"
          >
            <!-- Route Header with Round Icon Badge -->
            <div class="flex items-center gap-4 mb-4">
              <div class="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center shrink-0 text-white bg-white/10">
                <component :is="route.icon" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-spartan text-lg sm:text-xl font-bold tracking-wide">
                  {{ route.title }}
                </h3>
                <span class="font-opensans text-xs sm:text-[13px] text-white/70 font-normal">
                  {{ route.subtitle }}
                </span>
              </div>
            </div>

            <!-- Steps Details -->
            <div class="pl-14 space-y-2">
              <p
                v-for="(step, sIdx) in route.steps"
                :key="sIdx"
                class="font-opensans text-xs sm:text-sm text-white/85 leading-relaxed"
              >
                {{ step }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
