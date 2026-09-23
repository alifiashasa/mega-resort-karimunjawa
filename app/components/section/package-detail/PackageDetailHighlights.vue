<script setup lang="ts">
interface HighlightItem {
  description: string
  label: string
}

interface Props {
  eyebrow?: string
  title?: string
  highlights?: HighlightItem[]
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Peaceful Moments by the Water',
  title: 'Experience a simple yet meaningful activity designed to enjoy the natural beauty of Karimunjawa at your own pace.',
  highlights: () => [
    {
      description: 'A safe and comfortable depth, ideal for first-time divers.',
      label: 'Up to 10M',
    },
    {
      description: 'Fully guided throughout the experience to ensure safety and confidence.',
      label: 'Prof Instructor',
    },
    {
      description: 'No certification or prior experience required for this experience.',
      label: 'Beginner Friendly',
    },
    {
      description: 'Enjoy the experience without enrolling in a full diving program.',
      label: 'No Course',
    },
  ],
})
</script>

<template>
  <section class="py-14 sm:py-16 lg:py-20 bg-[#FAFAFA] select-none">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-end">
        <!-- Left Heading Column (Bottom Aligned) -->
        <div class="w-full flex flex-col justify-end pb-1 sm:pb-2 pr-0 lg:pr-4">
          <!-- Eyebrow Subtitle -->
          <p class="font-sans text-[14px] sm:text-[15px] text-[#80848E] font-normal tracking-normal mb-3 sm:mb-4">
            {{ eyebrow }}
          </p>

          <!-- Main Heading -->
          <h2 class="font-sans text-2xl sm:text-[32px] lg:text-[36px] xl:text-[38px] font-semibold text-[#090C10] leading-[1.3] tracking-[-0.01em] w-full max-w-[580px]">
            {{ title }}
          </h2>
        </div>

        <!-- Right 2x2 Highlights Grid (50% Width) -->
        <div class="w-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div
              v-for="(item, index) in highlights"
              :key="index"
              class="flex flex-col justify-between p-7 sm:p-8 rounded-[24px] bg-[#FDFDFD] shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-black/[0.02] min-h-[170px] sm:min-h-[185px] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <!-- Top Description -->
              <p class="text-[#717680] text-[13.5px] sm:text-[14px] leading-[1.5] font-sans pr-2 max-w-[240px]">
                {{ item.description }}
              </p>

              <!-- Bottom Big Label -->
              <h3 class="font-sans text-[24px] sm:text-[26px] lg:text-[28px] font-bold text-[#977E5B] tracking-tight leading-none mt-6">
                {{ item.label }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
