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
  <section id="why-choose" class="py-16 sm:py-20 lg:py-24 bg-[#FFF9EB]">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header (Centered) -->
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span class="font-urbanist text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#717680] block mb-3">
          {{ t('discoverPage.whyChoose.badge') }}
        </span>
        <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#977E5B] leading-tight">
          {{ t('discoverPage.whyChoose.title') }}
        </h2>
      </div>

      <!-- Content Grid: Left Tabs / Right Photo Collage -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left: Interactive Feature Accordion/List -->
        <div class="lg:col-span-5 space-y-4">
          <div
            v-for="(item, idx) in features"
            :key="idx"
            class="transition-all duration-300 cursor-pointer rounded-[12px] p-4 sm:p-5"
            :class="[
              activeIndex === idx
                ? 'bg-[#f4eee3] border-l-4 border-[#8C704E] shadow-xs'
                : 'hover:bg-[#f4eee3]/60 border-l-4 border-transparent'
            ]"
            @click="toggleIndex(idx)"
          >
            <h3
              class="font-spartan text-lg sm:text-xl font-bold transition-colors"
              :class="activeIndex === idx ? 'text-[#8C704E]' : 'text-[#29241f]'"
            >
              {{ item.title }}
            </h3>
            
            <!-- Description visible when active -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <p
                v-if="activeIndex === idx"
                class="font-opensans text-xs sm:text-sm text-[#717680] leading-relaxed mt-2"
              >
                {{ item.description }}
              </p>
            </Transition>
          </div>
        </div>

        <!-- Right: 3-Image Collage -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          <!-- Left Column (2 Stacked Photos) -->
          <div class="flex flex-col gap-4 sm:gap-6 justify-between">
            <!-- Top: Snorkeling Coral Reef -->
            <div class="relative h-[200px] sm:h-[220px] rounded-[16px] overflow-hidden shadow-md group bg-[#e8dfd3]">
              <img
                src="/images/gallery/card-snorkeling.webp"
                alt="Snorkeling at Karimunjawa coral reef"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            <!-- Bottom: Romantic Candlelight Dinner -->
            <div class="relative h-[200px] sm:h-[220px] rounded-[16px] overflow-hidden shadow-md group bg-[#e8dfd3]">
              <img
                src="/images/discover/discover-dinner.jpg"
                alt="Romantic candlelight dinner on the dock"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Right Column (1 Tall Panoramic Pier Photo) -->
          <div class="relative h-[260px] sm:h-[464px] rounded-[16px] overflow-hidden shadow-md group bg-[#e8dfd3]">
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
