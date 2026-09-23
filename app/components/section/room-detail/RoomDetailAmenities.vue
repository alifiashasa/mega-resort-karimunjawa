<script setup lang="ts">
import IconPowerAccess from '~/components/common/icons/IconPowerAccess.vue'
import IconBedLinen from '~/components/common/icons/IconBedLinen.vue'
import IconComplimentarySnacks from '~/components/common/icons/IconComplimentarySnacks.vue'
import IconAirConditioner from '~/components/common/icons/IconAirConditioner.vue'
import IconTvEntertainment from '~/components/common/icons/IconTvEntertainment.vue'
import IconWifiRound from '~/components/common/icons/IconWifiRound.vue'

const amenities = [
  {
    id: 1,
    title: 'Power Access',
    category: 'Fasility',
    icon: IconPowerAccess,
    description: 'Stay powered throughout your stay with reliable electricity for all your devices and daily needs.',
  },
  {
    id: 2,
    title: 'Bed & Fresh Linen',
    category: 'Fasility',
    icon: IconBedLinen,
    description: 'Enjoy a restful sleep with soft bedding and freshly prepared linens for your comfort.',
  },
  {
    id: 3,
    title: 'Complimentary Snacks',
    category: 'Fasility',
    icon: IconComplimentarySnacks,
    description: 'Savor light snacks and refreshments provided to enhance your staying experience.',
  },
  {
    id: 4,
    title: 'Air Conditioning',
    category: 'Fasility',
    icon: IconAirConditioner,
    description: 'Relax in a cool and refreshing room atmosphere, perfect for unwinding after your activities.',
  },
  {
    id: 5,
    title: 'Entertainment Access',
    category: 'Fasility',
    icon: IconTvEntertainment,
    description: 'Enjoy in-room entertainment options designed to keep you relaxed during your stay.',
  },
  {
    id: 6,
    title: 'Free Wi-Fi',
    category: 'Fasility',
    icon: IconWifiRound,
    description: 'Stay connected anytime with fast and reliable internet access during your stay.',
  },
]
</script>

<template>
  <section id="amenities" class="pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 bg-[#FFF9EB]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header (2-Column Grid) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-10">
        <!-- Left: Subtitle & Title (Span 7) -->
        <div class="lg:col-span-7 space-y-2">
          <span class="font-opensans text-xs sm:text-[14px] font-normal uppercase tracking-[0.16em] text-[#717680] block">
            DISCOVER YOUR COMFORT
          </span>
          <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#977E5B] uppercase tracking-tight leading-[1.18] max-w-xl">
            EVERYTHING YOU NEED FOR A PERFECT STAY
          </h2>
        </div>

        <!-- Right: Description Paragraph (Span 5) -->
        <div class="lg:col-span-5 flex lg:justify-end">
          <p class="font-opensans text-[13px] sm:text-[14px] lg:text-[15px] text-[#717680] leading-[1.75] text-left lg:text-right max-w-lg">
            Enjoy a thoughtfully curated selection of in-room facilities designed to enhance your comfort and convenience. From essential amenities to modern touches, every detail is prepared to make your stay more relaxing, seamless, and enjoyable.
          </p>
        </div>
      </div>

      <!-- 6-Cards Grid (3 Columns x 2 Rows, width 424px, height 220px, radius 16px, bg #FAFAFA) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in amenities"
          :key="item.id"
          class="w-full max-w-[424px] mx-auto lg:mx-0 lg:h-[220px] bg-[#FAFAFA] rounded-[12px] p-6 flex flex-col justify-between gap-4 transition-all duration-300 hover:shadow-xs group"
        >
          <!-- Top: Icon & Title Header -->
          <div class="flex items-center gap-4">
            <!-- Direct Icon (without card box) -->
            <div class="w-12 h-12 flex items-center justify-center shrink-0">
              <component :is="item.icon" class-name="w-10 h-8" />
            </div>

            <!-- Title & Category Tag -->
            <div>
              <h3 class="font-opensans text-[17px] sm:text-[20px] font-semibold text-[#1f1a16] leading-snug">
                {{ item.title }}
              </h3>
              <span class="font-opensans text-[13px] sm:text-[18px] text-[#717680] font-normal block mt-0.5">
                {{ item.category }}
              </span>
            </div>
          </div>

          <!-- Description -->
          <p class="font-opensans text-[13px] sm:text-[20px] text-[#717680] leading-[1.65] font-normal">
            {{ item.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
