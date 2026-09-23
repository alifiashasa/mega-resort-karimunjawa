<script setup lang="ts">
import IconLotus from '~/components/common/icons/IconLotus.vue'
import { useResortStore } from '~/stores/resortStore'

interface Props {
  title?: string
  eyebrow?: string
  description1?: string
  description2?: string
  price?: string
  image?: string
  ctaText?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Canoe Tour',
  eyebrow: 'COMFORTABLE STAY, THOUGHTFULLY DESIGNED',
  description1: "Enjoy a calm and refreshing escape with our canoe rental experience, designed for those who seek a slower and more peaceful way to explore Karimunjawa's coastal beauty. Glide gently across the clear, tranquil waters while taking in the surrounding scenery, from soft sandy shores to lush island views.",
  description2: "This activity is perfect for a light adventure—whether you want to unwind, spend quality time with a partner, or simply enjoy the ocean at your own pace. With a duration of 60 minutes, you'll have plenty of time to paddle, relax, and fully immerse yourself in the serene atmosphere.",
  price: 'Rp 300.000,00',
  image: '/images/packages/water-activity-3.jpg',
  ctaText: 'Booking Now',
})

const store = useResortStore()

const handleBooking = () => {
  store.openBookingModal()
}
</script>

<template>
  <section id="package-overview" class="py-14 sm:py-16 lg:py-20 bg-[#FFF9EB] select-none">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-stretch">
        <!-- Left Image Card (Adjusted height to 540px) -->
        <div class="lg:col-span-6 w-full flex justify-center lg:justify-start">
          <div
            class="relative w-full max-w-[636px] h-[360px] sm:h-[460px] lg:h-[540px] rounded-[20px] overflow-hidden group"
            style="box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12);"
          >
            <img
              :src="image"
              :alt="title"
              class="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Right Content Column - Aligned Top to Bottom with 540px Image -->
        <div class="lg:col-span-6 flex flex-col justify-between py-0.5 lg:h-[540px]">
          <!-- Top Content Group -->
          <div class="space-y-3.5 sm:space-y-4 lg:space-y-4.5">
            <!-- Lotus Icon -->
            <div class="w-9 h-6 sm:w-10 sm:h-7">
              <IconLotus fill-color="#977E5B" class-name="w-full h-full" />
            </div>

            <!-- Eyebrow Subtitle -->
            <p class="font-urbanist text-xs sm:text-[15px] tracking-[0.14em] uppercase font-semibold text-[#717680]">
              {{ eyebrow }}
            </p>

            <!-- Main Title -->
            <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#977E5B] leading-[1.2] tracking-tight">
              {{ title }}
            </h2>

            <!-- Paragraphs -->
            <div class="space-y-3 sm:space-y-3.5 text-[#717680] text-sm sm:text-base lg:text-[16px] leading-relaxed font-opensans">
              <p>
                {{ description1 }}
              </p>
              <p>
                {{ description2 }}
              </p>
            </div>

            <!-- Price -->
            <div class="pt-1">
              <p class="text-xl sm:text-2xl lg:text-[25px] font-normal text-[#090C10] font-spartan">
                {{ price }}
              </p>
            </div>
          </div>

          <!-- Explore / Booking Button (Bottom Aligned with Image Bottom) -->
          <div class="pt-4 lg:pt-0">
            <button
              type="button"
              class="h-[44px] sm:h-[48px] px-8 sm:px-9 inline-flex items-center justify-center text-white font-opensans text-xs sm:text-[14px] font-medium rounded-[12px] sm:rounded-[14px] tracking-wide transition-all duration-200 cursor-pointer active:translate-y-[2px] hover:opacity-95 shadow-md"
              style="background-color: #8C7351; box-shadow: inset 0px 1.5px 0px 0px rgba(255, 255, 255, 0.4), 0px 4px 0px 0px #5E4C33, 0px 0px 0px 1px #7D6646;"
              @click="handleBooking"
            >
              {{ ctaText || 'Booking Now' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
