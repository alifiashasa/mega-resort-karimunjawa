<script setup lang="ts">
import type { FacilityItem } from '~/types'
import FacilityCard from '~/components/card/FacilityCard.vue'

interface Props {
  facilities?: FacilityItem[]
}

const props = withDefaults(defineProps<Props>(), {
  facilities: () => [],
})

const { t } = useI18n()

// Fallback facility list if not supplied via props/API
const defaultFacilities: FacilityItem[] = [
  {
    id: 1,
    name: 'Boat Tours',
    image: '/images/facilities/facility-1.webp',
    description: 'Nikmati perjalanan laut yang tenang dengan pemandangan indah dan pengalaman tak terlupakan.',
    descriptionEn: 'Enjoy a peaceful ocean journey with scenic views and unforgettable experiences.',
  },
  {
    id: 2,
    name: 'Dive Center',
    image: '/images/facilities/facility-2.webp',
    description: 'Fasilitas menyelam lengkap dengan instruktur profesional untuk eksplorasi bawah laut yang aman.',
    descriptionEn: 'Comprehensive diving facilities with professional instructors for safe underwater exploration.',
  },
  {
    id: 3,
    name: 'Adult Swimming Pool',
    image: '/images/facilities/facility-3.webp',
    description: 'Adult swimming pool yang nyaman dan tenang, dirancang untuk relaksasi...',
    descriptionEn: 'Comfortable and tranquil adult swimming pool, designed for relaxation...',
  },
  {
    id: 4,
    name: 'Fitness Center',
    image: '/images/facilities/facility-4.webp',
    description: 'Ruang kebugaran modern dengan peralatan lengkap untuk menjaga...',
    descriptionEn: 'Modern fitness space fully equipped with comprehensive equipment to maintain fitness.',
  },
  {
    id: 5,
    name: 'Treetop Rooms',
    image: '/images/facilities/facility-5.webp',
    description: 'Kamar eksklusif di atas pepohonan yang menawarkan ketenangan dan pemandangan alam yang memukau.',
    descriptionEn: 'Exclusive rooms perched among the treetops offering serenity and stunning natural views.',
  },
  {
    id: 6,
    name: 'Restaurant',
    image: '/images/facilities/facility-6.webp',
    description: 'Sajian kuliner lezat dengan suasana hangat, sempurna untuk menikmati setiap momen bersantap.',
    descriptionEn: 'Delicious culinary offerings in a warm ambiance, perfect for savoring every dining moment.',
  },
  {
    id: 7,
    name: 'Canoes',
    image: '/images/facilities/facility-7.webp',
    description: 'Nikmati aktivitas mendayung santai sambil menikmati suasana perairan yang damai.',
    descriptionEn: 'Enjoy a relaxing paddling activity while soaking in the peaceful waters.',
  },
  {
    id: 8,
    name: 'Massage Healing',
    image: '/images/facilities/facility-8.webp',
    description: 'Relaksasi menyeluruh dengan perawatan pijat yang menenangkan dan menyegarkan tubuh.',
    descriptionEn: 'Total relaxation with soothing massage treatments to rejuvenate the body.',
  },
  {
    id: 9,
    name: 'Sunset Deck',
    image: '/images/facilities/facility-9.webp',
    description: 'Tempat terbaik untuk menikmati panorama matahari terbenam dengan...',
    descriptionEn: 'The finest vantage point to take in breathtaking sunset panoramas with...',
  },
  {
    id: 10,
    name: 'Snorkeling',
    image: '/images/facilities/facility-10.webp',
    description: 'Jelajahi keindahan bawah laut dengan pengalaman snorkeling yang seru dan...',
    descriptionEn: 'Explore the underwater beauty with thrilling and memorable snorkeling experiences...',
  },
  {
    id: 11,
    name: 'Yoga & Meditation',
    image: '/images/facilities/facility-11.webp',
    description: 'Rasakan ketenangan tubuh dan pikiran melalui sesi yoga dan meditasi di alam terbuka.',
    descriptionEn: 'Experience harmony of body and mind through outdoor yoga and meditation sessions.',
  },
  {
    id: 12,
    name: 'Shark Pool',
    image: '/images/facilities/facility-12.webp',
    description: 'Pengalaman unik melihat hiu dari dekat dalam lingkungan yang aman dan terkontrol.',
    descriptionEn: 'A unique experience observing sharks up close in a safe and controlled environment.',
  },
  {
    id: 13,
    name: 'On-Site Bars',
    image: '/images/facilities/facility-13.webp',
    description: 'Berbagai pilihan bar dengan minuman segar, cocok untuk bersantai kapan saja.',
    descriptionEn: 'A variety of on-site bar selections with refreshing drinks, perfect for unwinding anytime.',
  },
  {
    id: 14,
    name: 'Fine Dining',
    image: '/images/facilities/facility-14.webp',
    description: 'Pengalaman bersantap eksklusif dengan hidangan premium dan pelayanan berkelas.',
    descriptionEn: 'An exclusive dining experience featuring gourmet culinary creations and first-class service.',
  },
  {
    id: 15,
    name: 'Event',
    image: '/images/facilities/facility-15.webp',
    description: 'Fasilitas lengkap untuk menggelar berbagai acara spesial dengan suasana...',
    descriptionEn: 'Comprehensive facilities to host memorable special events in an idyllic seaside ambiance...',
  },
  {
    id: 16,
    name: 'Banquet Hall',
    image: '/images/facilities/facility-16.webp',
    description: 'Ruang elegan dan luas yang ideal untuk acara formal, perayaan, maupun...',
    descriptionEn: 'An elegant and spacious hall ideal for formal events, celebrations, and gatherings...',
  },
]

const displayFacilities = computed(() => {
  return props.facilities && props.facilities.length > 0 ? props.facilities : defaultFacilities
})
</script>

<template>
  <section id="facilities-grid" class="py-12 sm:py-16 lg:py-20 bg-[#FDFDFD] select-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header Matching Reference -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-12 lg:mb-14">
        <!-- Left: Badge & Title -->
        <div class="lg:col-span-6 space-y-2">
          <span class="block font-opensans text-[13px] sm:text-[15px] font-normal tracking-[0.05em] uppercase text-[#717680]">
            {{ t('facilityPage.grid.badge') }}
          </span>
          <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#977E5B] leading-tight tracking-[-0.01em]">
            {{ t('facilityPage.grid.title') }}
          </h2>
        </div>

        <!-- Right: Description -->
        <div class="lg:col-span-6 pt-0.5 lg:pt-1">
          <p class="font-opensans text-sm sm:text-[16px] lg:text-[18px] text-[#717680] leading-[1.65] max-w-xl font-normal">
            {{ t('facilityPage.grid.description') }}
          </p>
        </div>
      </div>

      <!-- 3-Column Facilities Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        <FacilityCard
          v-for="facility in displayFacilities"
          :key="facility.id"
          :facility="facility"
        />
      </div>
    </div>
  </section>
</template>
