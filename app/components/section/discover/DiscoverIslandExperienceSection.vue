<script setup lang="ts">
import IconLotus from '~/components/common/icons/IconLotus.vue'

const { t } = useI18n()

const galleryImages = [
  {
    src: '/images/discover/experience-1.jpg',
    alt: 'Guest sitting on overwater villa boardwalk',
    colClass: 'lg:col-span-5',
  },
  {
    src: '/images/discover/experience-2.jpg',
    alt: 'Guest posing at Mega Resort sign',
    colClass: 'lg:col-span-4',
  },
  {
    src: '/images/discover/experience-3.jpg',
    alt: 'Guest standing by tropical beach at dusk',
    colClass: 'lg:col-span-3',
  },
]
</script>

<template>
  <section id="island-experience" class="py-10 sm:py-12 lg:py-14 bg-[#FFF9EB]">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Top Lotus Leaf Emblem with Horizontal Divider Line -->
      <div class="flex items-center gap-6 mb-6 sm:mb-8">
        <div class="w-10 h-7 sm:w-11 sm:h-8 shrink-0">
          <IconLotus fill-color="#977E5B" class-name="w-full h-full" />
        </div>
        <div class="h-[1px] bg-[#977E5B]/80 flex-1" />
      </div>

      <!-- Two-Column Narrative Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-10">
        <!-- Left Subheading -->
        <div class="lg:col-span-5">
          <h3 class="font-spartan text-lg sm:text-xl lg:text-[30px] font-normal text-[#090C10] leading-snug">
            {{ t('discoverPage.islandExperience.subtitle') }}
          </h3>
        </div>

        <!-- Right Main Heading -->
        <div class="lg:col-span-7">
          <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[38px] xl:text-[48px] font-normal text-[#977E5B] leading-[1.28]">
            {{ t('discoverPage.islandExperience.title') }}
          </h2>
        </div>
      </div>

      <!-- 3-Image Gallery Grid (Asymmetric 5:4:3 matching design) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        <div
          v-for="(img, idx) in galleryImages"
          :key="idx"
          class="relative h-[280px] sm:h-[350px] lg:h-[400px] overflow-hidden bg-[#e8dfd3] shadow-sm hover:shadow-md transition-all duration-300"
          :class="img.colClass"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  </section>
</template>
