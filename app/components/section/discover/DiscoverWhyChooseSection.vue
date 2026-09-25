<script setup lang="ts">
const { t } = useI18n()

const activeIndex = ref(0)

const features = computed(() => [
  {
    title: t('discoverPage.whyChoose.items.item1Title'),
    description: t('discoverPage.whyChoose.items.item1Desc'),
  },
  {
    title: t('discoverPage.whyChoose.items.item2Title'),
    description: t('discoverPage.whyChoose.items.item2Desc'),
  },
  {
    title: t('discoverPage.whyChoose.items.item3Title'),
    description: t('discoverPage.whyChoose.items.item3Desc'),
  },
  {
    title: t('discoverPage.whyChoose.items.item4Title'),
    description: t('discoverPage.whyChoose.items.item4Desc'),
  },
])

const toggleIndex = (idx: number) => {
  activeIndex.value = idx
}
</script>

<template>
  <section id="why-choose" class="py-10 sm:py-12 lg:py-14 bg-[#FFF9EB]">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header (Centered) -->
      <div class="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
        <p class="font-urbanist text-xs sm:text-sm md:text-[18px] font-medium text-[#717680] block mb-2 sm:mb-3">
          {{ t('discoverPage.whyChoose.badge') }}
        </p>
        <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[48px] font-semibold text-[#977E5B] leading-tight">
          {{ t('discoverPage.whyChoose.title') }}
        </h2>
      </div>

      <!-- Content Grid: Left Tabs / Right Photo Collage -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- Left: Interactive Feature Accordion/List -->
        <div class="lg:col-span-5 flex flex-col">
          <div
            v-for="(item, idx) in features"
            :key="idx"
            class="transition-all duration-300 cursor-pointer pl-6 sm:pl-8 border-l-[3.5px]"
            :class="[
              activeIndex === idx
                ? 'border-[#977E5B]'
                : 'border-[#E2E8F0]',
              idx !== features.length - 1 ? 'pb-6 sm:pb-8' : 'pb-0'
            ]"
            @click="toggleIndex(idx)"
          >
            <h3
              class="font-spartan text-xl sm:text-[36px] font-semibold transition-colors select-none text-[#977E5B]"
              :class="activeIndex === idx ? 'opacity-100' : 'opacity-90 hover:opacity-100'"
            >
              {{ item.title }}
            </h3>
            
            <!-- Description visible when active with smooth CSS Grid height animation -->
            <div
              class="grid transition-[grid-template-rows,opacity] duration-500 ease-in-out"
              :class="[
                activeIndex === idx
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0 pointer-events-none'
              ]"
            >
              <div class="overflow-hidden">
                <p class="font-urbanist text-sm sm:text-[20px] text-[#717680] leading-relaxed pt-2.5 sm:pt-3 max-w-xl">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: 3-Image Collage -->
        <div class="lg:col-span-7 flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch justify-end">
          <!-- Left Column (2 Stacked Photos) -->
          <div class="flex flex-col gap-4 sm:gap-6 justify-between w-full sm:w-1/2 lg:w-auto lg:flex-1 lg:h-[512px]">
            <!-- Top: Snorkeling Coral Reef -->
            <div class="relative w-[296px] h-[200px] sm:h-[210px] lg:h-[244px] rounded-[16px] overflow-hidden shadow-xs group bg-[#e8dfd3]">
              <img
                src="/images/gallery/card-snorkeling.webp"
                alt="Snorkeling at Karimunjawa coral reef"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            <!-- Bottom: Romantic Candlelight Dinner -->
            <div class="relative w-full h-[200px] sm:h-[210px] lg:h-[244px] rounded-[16px] overflow-hidden shadow-xs group bg-[#e8dfd3]">
              <img
                src="/images/discover/discover-dinner.jpg"
                alt="Romantic candlelight dinner on the dock"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Right Column (1 Tall Panoramic Pier Photo - 485px x 512px) -->
          <div class="relative w-full sm:w-1/2 lg:w-[485px] h-[320px] sm:h-[440px] lg:h-[512px] shrink-0 rounded-[16px] overflow-hidden shadow-xs group bg-[#e8dfd3]">
            <img
              src="/images/discover/discover-pier.jpg"
              alt="Long wooden pier leading to overwater bungalows"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
