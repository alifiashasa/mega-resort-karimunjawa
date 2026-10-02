<script setup lang="ts">
import IconRibbonBadge from '~/components/common/icons/IconRibbonBadge.vue'
import IconStar from '~/components/common/icons/IconStar.vue'
import IconLocation from '~/components/common/icons/IconLocation.vue'
import IconCheckinPin from '~/components/common/icons/IconCheckinPin.vue'
import IconInstagram from '~/components/common/icons/IconInstagram.vue'
import IconTiktok from '~/components/common/icons/IconTiktok.vue'
import {
  Home,
  Building2,
  FileCheck,
  Bed,
  Bath,
  Users,
  AirVent,
  Wifi,
  Sparkles,
  Coffee,
  Car,
  Radio,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from 'lucide-vue-next'

definePageMeta({
  layout: 'default',
})

const localePath = useLocalePath()

const roomInfo = {
  name: 'Mermaid Rooms',
  rating: 9.7,
  reviewCount: 3213,
  location: '5GR5+F7C, Kemujan, Karimunjawa, Kabupaten Jepara, Jawa Tengah',
  bedroom: 'Two',
  bathroom: 'Two',
  person: '2 + People',
  price: 'Rp 2.000.000',
  priceUnit: 'night',
  taxInfo: 'Include All Taxed',
  dateRange: 'Tue, 19 May 26 – Fri, 22 May 26',
  duration: '3 Night',
  roomRate: 'Rp 2.000.000',
  taxes: 'Rp 300.000',
  totalPrice: 'Rp 2.300.000',
  overview1:
    'Enjoy a comfortable stay in Mermaid Rooms, designed with modern tropical touches and a calming atmosphere. Surrounded by the natural beauty of Karimunjawa, these rooms offer the perfect place to unwind after a day of exploring the sea and islands.',
  overview2:
    'With natural light, warm interiors, and serene views, Mermaid Rooms offer a simple yet memorable stay—ideal for couples and solo travelers seeking serenity.',
  amenitiesSubtitle:
    'Each Mermaid Room is equipped with various facilities to ensure comfort during your stay, so you can enjoy your rest time to the fullest.',
  amenities: [
    { name: 'Comfortable Bed', icon: Bed },
    { name: 'Private Bathroom with Shower', icon: Bath },
    { name: 'Air Conditioning', icon: AirVent },
    { name: 'Toiletries', icon: Sparkles },
    { name: 'Coffee & Tea Set', icon: Coffee },
    { name: 'Wi-Fi Access (selected areas)', icon: Wifi },
  ],
  hotelInfoSubtitle:
    'To ensure a comfortable and smooth stay, here is some important information regarding Mermaid Rooms at Mega Resort Karimunjawa.',
  hotelInfo: [
    {
      title: 'Check-in & Check-out',
      icon: IconCheckinPin,
      description:
        'Check-in begins at 2:00 PM WIB and check-out is no later than 12:00 PM WIB. Early check-in and late check-out are available based on availability.',
    },
    {
      title: 'Transportation',
      icon: Car,
      description:
        'A pick-up service from the port is included in your stay. Please inform us of your arrival schedule in advance.',
    },
    {
      title: 'Connectivity',
      icon: Radio,
      description:
        'Wi-Fi is available in certain areas. Please note that signal strength may be limited in some areas of the island.',
    },
  ],
}

useHead({
  title: 'Mermaid Rooms - Detail Booking Empty State | Mega Resort Karimunjawa',
})
</script>

<template>
  <div class="booking-detail-empty-page bg-[#FAFAFA] min-h-screen pb-24 select-none">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- 1. BREADCRUMB (Top) -->
      <nav class="py-5 sm:py-6 flex items-center gap-2 text-xs sm:text-[13px] text-[#A3A3A3] font-opensans flex-wrap">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-1.5 hover:text-[#977E5B] transition-colors">
          <Home class="w-3.5 h-3.5" />
          <span>Home</span>
        </NuxtLink>

        <ChevronRight class="w-3.5 h-3.5 text-[#D0D5DD]" />

        <NuxtLink :to="localePath('/booking')" class="flex items-center gap-1.5 hover:text-[#977E5B] transition-colors">
          <Building2 class="w-3.5 h-3.5" />
          <span>Booking Rooms</span>
        </NuxtLink>

        <ChevronRight class="w-3.5 h-3.5 text-[#D0D5DD]" />

        <div class="flex items-center gap-1.5 text-[#090C10] font-semibold">
          <FileCheck class="w-3.5 h-3.5" />
          <span>Detail Booking</span>
        </div>
      </nav>

      <!-- 2. 2-COLUMN MAIN CONTENT -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- LEFT COLUMN: Specs Card, Hero Media Gallery Empty, Overview, Amenities, Hotel Info, Gallery Empty -->
        <div class="lg:col-span-7 space-y-8">
          
          <!-- 1. ROOM HEADER & SPECS CARD -->
          <div class="bg-white rounded-[20px] p-6 sm:p-7 border border-[#EBEBEB] shadow-xs">
            <!-- Room Title & Rating -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h1 class="font-spartan text-2xl sm:text-[28px] md:text-[38px] font-bold text-[#8E7453] tracking-tight leading-snug">
                {{ roomInfo.name }}
              </h1>

              <div class="flex items-center gap-3 font-urbanist shrink-0">
                <div class="relative inline-flex items-center h-[34px] select-none shrink-0 drop-shadow-[2px_1.6px_1px_rgba(28,110,164,0.2)]">
                  <IconRibbonBadge />
                  <div class="absolute inset-0 flex items-center pl-2.5 pr-3 gap-1 text-white">
                    <IconStar />
                    <div class="flex items-baseline font-hanken">
                      <span class="text-[18px] font-bold leading-none tracking-tight">{{ roomInfo.rating }}</span><span class="text-[14px] font-normal text-white/95 leading-none">/10</span>
                    </div>
                  </div>
                </div>
                <span class="font-urbanist text-xs sm:text-[16px] text-[#717680] font-normal underline decoration-[#717680]/60 underline-offset-2">
                  (Based on {{ roomInfo.reviewCount }} Review)
                </span>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-center gap-2 mt-3 text-xs sm:text-[15px] text-[#717680] font-opensans">
              <IconLocation class-name="w-4 h-4 text-[#717680] shrink-0" />
              <span class="underline decoration-1 decoration-[#717680]/60 underline-offset-2">{{ roomInfo.location }}</span>
            </div>

            <!-- Specs Grid & Price -->
            <div class="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <!-- Specs Pill Box -->
              <div class="inline-grid grid-cols-3 border border-[#E5E7EB] rounded-[16px] divide-x divide-[#E5E7EB] bg-white w-full md:w-auto">
                <div class="px-4 sm:px-5 py-2.5 sm:py-3 flex flex-col gap-1">
                  <span class="text-[11px] sm:text-[13px] text-[#717680] font-opensans">Bedroom</span>
                  <div class="flex items-center gap-1.5">
                    <Bed class="w-4 h-4 text-[#090C10] stroke-[1.8] shrink-0" />
                    <span class="text-xs sm:text-[15px] font-semibold text-[#090C10] font-opensans leading-none">{{ roomInfo.bedroom }}</span>
                  </div>
                </div>

                <div class="px-4 sm:px-5 py-2.5 sm:py-3 flex flex-col gap-1">
                  <span class="text-[11px] sm:text-[13px] text-[#717680] font-opensans">Bathroom</span>
                  <div class="flex items-center gap-1.5">
                    <Bath class="w-4 h-4 text-[#090C10] stroke-[1.8] shrink-0" />
                    <span class="text-xs sm:text-[15px] font-semibold text-[#090C10] font-opensans leading-none">{{ roomInfo.bathroom }}</span>
                  </div>
                </div>

                <div class="px-4 sm:px-5 py-2.5 sm:py-3 flex flex-col gap-1">
                  <span class="text-[11px] sm:text-[13px] text-[#717680] font-opensans">Person</span>
                  <div class="flex items-center gap-1.5">
                    <Users class="w-4 h-4 text-[#090C10] stroke-[1.8] shrink-0" />
                    <span class="text-xs sm:text-[15px] font-semibold text-[#090C10] font-opensans leading-none">{{ roomInfo.person }}</span>
                  </div>
                </div>
              </div>

              <!-- Price Box -->
              <div class="text-left md:text-right shrink-0">
                <div class="font-spartan text-lg sm:text-[22px] font-bold text-[#090C10] leading-tight">
                  {{ roomInfo.price }}<span class="text-xs sm:text-[18px] font-semibold text-[#090C10]">/{{ roomInfo.priceUnit }}</span>
                </div>
                <div class="text-[11px] sm:text-[13px] text-[#717680] font-opensans mt-0.5">
                  {{ roomInfo.taxInfo }}
                </div>
              </div>
            </div>
          </div>

          <!-- 2. ROOM GALLERY EMPTY STATE (Inside Left Column) -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-stretch h-auto md:h-[380px] lg:h-[420px]">
            <!-- 3 Thumbnails on Left (Stacked vertically on desktop) -->
            <div class="md:col-span-4 flex md:flex-col gap-2.5 sm:gap-3.5 h-[110px] md:h-full">
              <div
                v-for="i in 3"
                :key="i"
                class="relative rounded-[12px] overflow-hidden flex-1 w-full bg-[#ECECEE] border border-[#E5E7EB] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src="/images/empty-state-gallery.svg"
                  alt="Empty Gallery Thumbnail"
                  class="w-16 sm:w-20 md:w-24 h-auto object-contain pointer-events-none select-none opacity-85"
                />
              </div>
            </div>

            <!-- Big Main Featured Image Box on Right -->
            <div class="md:col-span-8 rounded-[14px] overflow-hidden relative h-[240px] sm:h-[300px] md:h-full bg-[#ECECEE] border border-[#E5E7EB] flex items-center justify-center">
              <img
                src="/images/empty-state-gallery.svg"
                alt="Empty Featured Room View"
                class="w-36 sm:w-44 md:w-52 h-auto object-contain pointer-events-none select-none opacity-90"
              />
            </div>
          </div>

          <!-- 3. OVERVIEW SECTION -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center gap-2.5">
              <span class="w-[2.5px] h-4.5 bg-[#977E5B] rounded-full inline-block"></span>
              <h2 class="text-lg sm:text-[18px] font-semibold text-[#101828] font-opensans">
                Overview
              </h2>
            </div>
            <p class="text-xs sm:text-[14px] text-[#717680] font-opensans leading-relaxed">
              {{ roomInfo.overview1 }}
            </p>
            <p class="text-xs sm:text-[14px] text-[#717680] font-opensans leading-relaxed">
              {{ roomInfo.overview2 }}
            </p>
          </div>

          <!-- 4. ROOM AMENITIES SECTION -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center gap-2.5">
              <span class="w-[2.5px] h-4.5 bg-[#977E5B] rounded-full inline-block"></span>
              <h2 class="text-lg sm:text-[18px] font-semibold text-[#101828] font-opensans">
                Room Amenities
              </h2>
            </div>
            <p class="text-xs sm:text-[14px] text-[#717680] font-opensans">
              {{ roomInfo.amenitiesSubtitle }}
            </p>

            <!-- Amenities Box (2x3 Grid) -->
            <div class="bg-white rounded-[18px] p-5 sm:p-6 border border-[#EBEBEB] mt-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div
                  v-for="(amenity, idx) in roomInfo.amenities"
                  :key="idx"
                  class="flex items-center gap-3 text-xs sm:text-[14px] font-medium text-[#090C10] font-opensans"
                >
                  <component :is="amenity.icon" class="w-4 h-4 text-[#090C10] shrink-0" />
                  <span>{{ amenity.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. HOTEL INFORMATION SECTION -->
          <div class="space-y-4 pt-2">
            <div class="flex items-center gap-2.5">
              <span class="w-[2.5px] h-4.5 bg-[#977E5B] rounded-full inline-block"></span>
              <h2 class="text-lg sm:text-[18px] font-semibold text-[#101828] font-opensans">
                Hotel Information
              </h2>
            </div>
            <p class="text-xs sm:text-[14px] text-[#717680] font-opensans">
              {{ roomInfo.hotelInfoSubtitle }}
            </p>

            <!-- Info List -->
            <div class="space-y-5 mt-4">
              <div
                v-for="(item, idx) in roomInfo.hotelInfo"
                :key="idx"
                class="flex items-start gap-3"
              >
                <component :is="item.icon" class="w-4 h-4 text-[#090C10] stroke-[1.8] shrink-0 mt-0.5" />
                <div class="flex-1 flex flex-col gap-0.5">
                  <h3 class="text-sm sm:text-[15px] font-semibold text-[#090C10] font-opensans leading-snug">
                    {{ item.title }}
                  </h3>
                  <p class="text-xs sm:text-[13.5px] text-[#717680] font-opensans leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. GALLERY SECTION EMPTY STATE (Bottom) -->
          <div class="space-y-4 pt-2">
            <div class="flex items-center gap-2.5">
              <span class="w-[2.5px] h-4.5 bg-[#977E5B] rounded-full inline-block"></span>
              <h2 class="text-lg sm:text-[18px] font-semibold text-[#101828] font-opensans">
                Gallery
              </h2>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div
                v-for="i in 3"
                :key="i"
                class="w-full h-[140px] sm:h-[160px] md:h-[180px] rounded-[16px] bg-[#ECECEE] border border-[#E5E7EB] flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
              >
                <img
                  src="/images/empty-state-gallery.svg"
                  alt="Empty Gallery Item"
                  class="w-20 sm:w-24 md:w-28 h-auto object-contain pointer-events-none select-none opacity-80"
                />
              </div>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN: Booking Summary & Support Sidebar -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- BOOKING SUMMARY CARD -->
          <div class="bg-white rounded-[20px] p-6 border border-[#EBEBEB] shadow-xs space-y-5">
            <div class="flex items-center justify-between text-xs sm:text-[13px] text-[#717680] font-opensans pb-2 border-b border-[#F0F0F0]">
              <span>{{ roomInfo.dateRange }}</span>
              <span class="font-medium text-[#090C10]">{{ roomInfo.duration }}</span>
            </div>

            <h3 class="font-spartan text-xl sm:text-[22px] font-bold text-[#090C10]">
              {{ roomInfo.name }}
            </h3>

            <div class="space-y-2.5 text-xs sm:text-[14px] font-opensans border-t border-b border-[#F0F0F0] py-3.5">
              <div class="flex justify-between text-[#717680]">
                <span>Room rate</span>
                <span class="font-semibold text-[#090C10]">{{ roomInfo.roomRate }}</span>
              </div>
              <div class="flex justify-between text-[#717680]">
                <span>Taxes</span>
                <span class="font-semibold text-[#090C10]">{{ roomInfo.taxes }}</span>
              </div>
            </div>

            <div class="flex justify-between items-baseline pt-1">
              <div>
                <span class="font-bold text-base sm:text-[18px] text-[#090C10] font-opensans">Total</span>
                <p class="text-[11px] text-[#717680] font-opensans">{{ roomInfo.taxInfo }}</p>
              </div>
              <span class="font-bold text-xl sm:text-[24px] text-[#090C10] font-spartan">{{ roomInfo.totalPrice }}</span>
            </div>

            <button
              type="button"
              class="w-full py-3.5 px-6 rounded-[12px] bg-[#977E5B] hover:bg-[#886F4A] active:scale-[0.99] text-white font-medium text-sm sm:text-base font-opensans transition-all duration-200 cursor-pointer shadow-xs"
            >
              Book Now
            </button>
          </div>

          <!-- WE'RE HERE TO HELP CARD -->
          <div class="bg-white rounded-[20px] border border-[#EBEBEB] shadow-xs divide-y divide-[#EBEBEB] overflow-hidden">
            <div class="p-6">
              <h3 class="font-opensans text-base sm:text-[18px] font-semibold text-[#101828]">
                We're Here to Help
              </h3>
              <p class="text-xs sm:text-[13px] text-[#717680] font-opensans mt-1.5 leading-relaxed">
                Have questions or need support? Connect with us instantly via WhatsApp and get the help you need.
              </p>
            </div>

            <!-- Contact Us -->
            <div class="p-6 space-y-3">
              <h4 class="text-sm sm:text-[15px] font-semibold text-[#090C10] font-opensans">
                Contact Us
              </h4>
              <ul class="space-y-2.5 text-xs sm:text-[13px] text-[#717680] font-opensans">
                <li class="flex items-center gap-2.5">
                  <Phone class="w-3.5 h-3.5 text-[#717680] shrink-0" />
                  <span>08xx - xxxx - xxxx</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <Mail class="w-3.5 h-3.5 text-[#717680] shrink-0" />
                  <span>megaresort@gmail.com</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <IconInstagram class-name="w-3.5 h-3.5 text-[#717680] shrink-0" />
                  <span>@megaresortkarimunjawa</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <IconTiktok class-name="w-3.5 h-3.5 text-[#717680] fill-current shrink-0" />
                  <span>@megaresortkarimunjawa</span>
                </li>
              </ul>
            </div>

            <!-- Location -->
            <div class="p-6 space-y-3">
              <h4 class="text-sm sm:text-[15px] font-semibold text-[#090C10] font-opensans">
                Location
              </h4>
              <div class="flex items-start gap-2 text-xs sm:text-[13px] text-[#717680] font-opensans leading-relaxed">
                <MapPin class="w-3.5 h-3.5 text-[#717680] shrink-0 mt-0.5" />
                <span>5GR5+F7C, Kemujan, Karimunjawa, Kabupaten Jepara, Jawa Tengah</span>
              </div>

              <div class="pt-1">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-xs sm:text-[13px] text-[#717680] hover:text-[#977E5B] font-normal font-opensans transition-colors"
                >
                  <span class="underline underline-offset-2 decoration-1">See on Google Maps</span>
                  <ChevronRight class="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.booking-detail-empty-page {
  padding-top: 88px;
}
@media (max-width: 768px) {
  .booking-detail-empty-page {
    padding-top: 76px;
  }
}
</style>
