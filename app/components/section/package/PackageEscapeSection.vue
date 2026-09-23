<script setup lang="ts">
import IconLotus from '~/components/common/icons/IconLotus.vue'

const { t } = useI18n()

const handleExploreClick = () => {
  const target = document.querySelector('#package-experience')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="package-escape" class="py-16 sm:py-20 lg:py-24 bg-[#FFF9EB] select-none">
    <div class="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-stretch">
        <!-- Left Content (50% Width, Full Height Aligned) -->
        <div class="w-full flex flex-col justify-between py-1">
          <div>
            <!-- Lotus Emblem in Gold/Bronze -->
            <div class="w-11 h-8 sm:w-13 sm:h-9 md:w-14 md:h-10 mb-3 sm:mb-3.5">
              <IconLotus fill-color="#977E5B" class-name="w-full h-full" />
            </div>

            <!-- Eyebrow Subtitle -->
            <p class="font-sans text-xs sm:text-[13px] md:text-[14px] font-normal tracking-[0.12em] uppercase text-[#717680] mb-2 sm:mb-3">
              {{ t('packagePage.escape.badge') }}
            </p>

            <!-- Section Heading -->
            <h2 class="font-sans text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#977E5B] leading-[1.2] tracking-tight mb-5 sm:mb-6">
              {{ t('packagePage.escape.title') }}
            </h2>

            <!-- Paragraph Description (Single paragraph & wider width) -->
            <p class="text-[#717680] text-sm sm:text-[15px] lg:text-[20px] xl:text-[17px] leading-relaxed font-opensans max-w-2xl">
              {{ t('packagePage.escape.description1') }} {{ t('packagePage.escape.description2') }}
            </p>
          </div>

          <!-- Explore Package Button -->
          <div class="pt-6 sm:pt-8">
            <button
              type="button"
              class="h-[46px] sm:h-[48px] px-6 sm:px-8 inline-flex items-center justify-center text-white font-opensans text-[14px] sm:text-[15px] font-normal rounded-[14px] sm:rounded-[16px] tracking-normal transition-all duration-200 cursor-pointer active:translate-y-[2px] hover:opacity-95"
              style="background-color: #977E5B; box-shadow: inset 0px 1.5px 0px 0px rgba(255, 255, 255, 0.4), 0px 4px 0px 0px #634F33, 0px 0px 0px 1px #856C4A;"
              @click="handleExploreClick"
            >
              <span class="text-white">{{ t('packagePage.escape.exploreCta') }}</span>
            </button>
          </div>
        </div>

        <!-- Right Visual Showcase (50% Width, Radius 20px, Full Height Match) -->
        <div class="w-full flex justify-center lg:justify-end items-stretch">
          <div class="relative w-full h-full min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] rounded-[20px] overflow-hidden">
            <img
              src="/images/packages/package-escape.jpg"
              alt="Mega Resort Karimunjawa Escape"
              class="w-full h-full object-cover object-center rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
