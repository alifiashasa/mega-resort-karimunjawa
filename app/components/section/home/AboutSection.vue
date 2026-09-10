<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import IconLotus from '~/components/common/icons/IconLotus.vue'

const { t } = useI18n()
const store = useResortStore()
</script>

<template>
  <section id="about" class="pt-10 sm:pt-10 pb-20 sm:pb-28 bg-[#FFF9EB] relative overflow-hidden">
    <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Crest Divider with Lotus Emblem -->
      <div class="flex items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
        <span class="flex-1 h-[1px] bg-[#977E5B]" />
        <!-- Lotus Icon -->
        <IconLotus fill-color="#977E5B" class-name="w-8 h-6 sm:w-10 sm:h-7 shrink-0" />
        <span class="flex-1 h-[1px] bg-[#977E5B]" />
      </div>

      <!-- Section Subtitle & Title -->
      <div class="text-left mb-10 sm:mb-14">
        <span class="font-opensans text-xs sm:text-[18px] font-normal text-[#717680] block mb-2 sm:mb-3 tracking-normal">
          {{ t('about.badge') }}
        </span>
        <h2 class="font-spartan text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-bold text-[#977E5B] leading-tight">
          {{ t('about.title') }}
        </h2>
      </div>

      <!-- 2-Column Content Grid (Stretched full height, controlled gap) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
        <!-- Left: Image with Boardwalk to Overwater Villas -->
        <div class="w-full">
          <div class="relative rounded-[12px] overflow-hidden shadow-lg group h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]">
            <img
              src="/images/about-resort.jpg"
              alt="Mega Resort Karimunjawa Boardwalk & Overwater Villas"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        <!-- Right: Text Description & 3 Stats (Stretched Full Height with justify-between) -->
        <div class="w-full flex flex-col justify-between gap-8 sm:gap-12 lg:gap-14 h-full">
          <p class="text-sm sm:text-[15px] lg:text-[20px] text-[#717680] leading-[1.85] font-normal">
            {{ store.resortData?.aboutDescription || t('about.description') }}
          </p>

          <!-- 3 Stats Row anchored to bottom -->
          <div class="grid grid-cols-3 gap-4 sm:gap-5">
            <!-- Stat 1: Solid Highlighted Card -->
            <div class="bg-[#977E5B] text-white p-4 sm:p-5 rounded-[20px] shadow-sm flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.03]">
              <span class="font-sans text-2xl sm:text-3xl font-bold block mb-1.5">
                {{ t('about.stat1Value') }}
              </span>
              <span class="text-xs sm:text-[20px] text-white/90 leading-snug block font-normal">
                {{ t('about.stat1Label') }}
              </span>
            </div>

            <!-- Stat 2: Clean Transparent Card -->
            <div class="bg-transparent p-4 sm:p-5 flex flex-col items-center justify-center text-center">
              <span class="font-sans text-2xl sm:text-3xl font-bold text-[#977E5B] block mb-1.5">
                {{ t('about.stat2Value') }}
              </span>
              <span class="text-xs sm:text-[20px] text-[#977E5B] leading-snug block font-normal">
                {{ t('about.stat2Label') }}
              </span>
            </div>

            <!-- Stat 3: Clean Transparent Card -->
            <div class="bg-transparent p-4 sm:p-5 flex flex-col items-center justify-center text-center">
              <span class="font-sans text-2xl sm:text-3xl font-bold text-[#977E5B] block mb-1.5">
                {{ t('about.stat3Value') }}
              </span>
              <span class="text-xs sm:text-[20px] text-[#977E5B] leading-snug block font-normal">
                {{ t('about.stat3Label') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
