<script setup lang="ts">
import IconBathrobe from '~/components/common/icons/IconBathrobe.vue'
import IconMealTray from '~/components/common/icons/IconMealTray.vue'
import IconDrinkGlass from '~/components/common/icons/IconDrinkGlass.vue'
import IconAcUnit from '~/components/common/icons/IconAcUnit.vue'
import IconShowerBath from '~/components/common/icons/IconShowerBath.vue'
import IconWifiRound from '~/components/common/icons/IconWifiRound.vue'

const amenities = [
  {
    id: 1,
    title: 'Room Amenities',
    category: 'Facility',
    icon: IconBathrobe,
    description: 'Fully equipped with essentials like plush robes, slippers, premium toiletries, and daily towels.',
  },
  {
    id: 2,
    title: 'Best Room Meals',
    category: 'Facility',
    icon: IconMealTray,
    description: 'Enjoy a restful sleep with 400 thread count linens and freshly prepared meals for your comfort.',
  },
  {
    id: 3,
    title: 'Complimentary Drinks',
    category: 'Facility',
    icon: IconDrinkGlass,
    description: 'Savor refreshing drinks and refreshments provided to enhance your stay by beachfront ocean views.',
  },
  {
    id: 4,
    title: 'Air Conditioning',
    category: 'Facility',
    icon: IconAcUnit,
    description: 'Relax in a cool and refreshing indoor atmosphere, perfect for unwinding in either sun or rain.',
  },
  {
    id: 5,
    title: 'Relax Showers & Access',
    category: 'Facility',
    icon: IconShowerBath,
    description: 'Delight in proper ocean showers/options designed to keep you relaxed during your stay.',
  },
  {
    id: 6,
    title: 'Free Wi-Fi',
    category: 'Facility',
    icon: IconWifiRound,
    description: 'Stay connected anytime with free and reliable high-speed internet during your stay.',
  },
]
</script>

<template>
  <section id="amenities" class="py-14 sm:py-20 bg-[#FAF7F2]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header (2-Column Grid) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16">
        <!-- Left: Subtitle & Title (Span 7) -->
        <div class="lg:col-span-7 space-y-2">
          <span class="font-urbanist text-xs sm:text-[14px] font-semibold uppercase tracking-[0.18em] text-[#717680] block">
            FACILITIES & COMFORT
          </span>
          <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#977E5B] uppercase tracking-tight leading-[1.2]">
            EVERYTHING YOU NEED FOR A PERFECT STAY
          </h2>
        </div>

        <!-- Right: Description Paragraph (Span 5) -->
        <div class="lg:col-span-5 flex lg:justify-end">
          <p class="font-opensans text-xs sm:text-[14px] text-[#717680] leading-relaxed lg:text-right max-w-lg">
            Every thoughtful detail is designed to make your room feel like a true sanctuary. From personal comfort and entertainment to modern conveniences, we ensure you have everything you need for an unforgettable stay in Karimunjawa.
          </p>
        </div>
      </div>

      <!-- 6-Cards Grid (3 Columns x 2 Rows) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        <div
          v-for="item in amenities"
          :key="item.id"
          class="bg-[#F8F4EC] rounded-[18px] p-6 sm:p-7 border border-[#ECE5D8] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group flex flex-col justify-between"
        >
          <!-- Card Top: Icon & Title Header -->
          <div>
            <div class="flex items-center gap-4 mb-4">
              <!-- Icon in warm container -->
              <div class="w-12 h-12 rounded-[12px] bg-white border border-[#E4D9C8] flex items-center justify-center text-[#977E5B] shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                <component :is="item.icon" class-name="w-6 h-6 text-[#977E5B]" />
              </div>

              <!-- Title & Category Tag -->
              <div>
                <h3 class="font-opensans text-[16px] sm:text-[17px] font-bold text-[#1f1a16] leading-tight">
                  {{ item.title }}
                </h3>
                <span class="font-opensans text-xs text-[#717680] font-normal block mt-0.5">
                  {{ item.category }}
                </span>
              </div>
            </div>

            <!-- Description -->
            <p class="font-opensans text-xs sm:text-[13px] text-[#717680] leading-[1.7]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
