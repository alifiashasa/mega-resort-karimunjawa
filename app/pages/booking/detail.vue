<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useResortStore } from '~/stores/resortStore'
import IconRibbonBadge from '~/components/common/icons/IconRibbonBadge.vue'
import IconStar from '~/components/common/icons/IconStar.vue'
import IconLocation from '~/components/common/icons/IconLocation.vue'
import IconCheckinPin from '~/components/common/icons/IconCheckinPin.vue'
import IconInstagram from '~/components/common/icons/IconInstagram.vue'
import IconTiktok from '~/components/common/icons/IconTiktok.vue'
import IconMailRounded from '~/components/common/icons/IconMailRounded.vue'
import BookingSummaryCard from '~/components/card/BookingSummaryCard.vue'
import {
  Home,
  Building2,
  FileCheck,
  Star,
  MapPin,
  Bed,
  Bath,
  Users,
  AirVent,
  Wifi,
  Clock,
  Car,
  Radio,
  Phone,
  Mail,
  Instagram,
  ChevronRight,
} from 'lucide-vue-next'

definePageMeta({
  alias: ['/booking-rooms/detail', '/detail-booking', '/booking/detail-booking', '/booking/:id(\\d+)'],
})

const store = useResortStore()
const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()

// Fetch resort data
await useAsyncData('resort-data-booking-detail', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

// Room database lookup
const roomDatabase: Record<string, any> = {
  'mermaid-rooms': {
    id: 'mermaid-rooms',
    name: 'Mermaid Rooms Mega Resort KarimunJawa',
    shortName: 'Mermaid Rooms',
    badge: 'BEST OPTION TO STAY',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    rating: 9.7,
    reviewCount: 3213,
    location: '5GR5+F7C, Kemujan, Karimunjawa, Kabupaten Jepara, Jawa Tengah',
    bedroom: '1 King',
    bathroom: 'Attached',
    capacity: '2 Adults',
    pricePerPerson: 'Rp 2.000.000',
    priceUnit: 'night',
    numericPrice: 2000000,
    taxInfo: 'Include All Taxed',
    dateRange: 'Tue, 19 May 26 – Fri, 22 May 26',
    duration: '3 Night',
    roomRate: 'Rp 2.000.000',
    totalPrice: 'Rp 2.000.000',
    overview:
      'Mermaid Rooms are designed for travelers seeking premium accommodation with private views and deluxe comfort. Perfect for couples, solo travelers, and luxury seekers.',
    amenitiesSubtitle:
      'Each Mermaid Room is equipped with premium facilities to ensure maximum luxury and relaxation during your stay.',
    amenities: [
      { name: 'King Size Bed', icon: Bed },
      { name: 'Attached Deluxe Bathroom', icon: Bath },
      { name: 'Air Conditioning', icon: AirVent },
      { name: 'High-Speed Wi-Fi Access', icon: Wifi },
    ],
  },
  'nemo-rooms': {
    id: 'nemo-rooms',
    name: 'Nemo Rooms Mega Resort Karimunjawa',
    shortName: 'Nemo Rooms',
    badge: 'BEST OPTION TO STAY',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    ],
    rating: 9.8,
    reviewCount: 2450,
    location: '5GR5+F7C, Kemujan, Karimunjawa, Kabupaten Jepara, Jawa Tengah',
    bedroom: '1 King',
    bathroom: 'Attached',
    capacity: '2 Guests',
    pricePerPerson: 'Rp 1.200.000',
    priceUnit: 'night',
    numericPrice: 1200000,
    taxInfo: 'Include All Taxed',
    dateRange: 'Tue, 19 May 26 – Fri, 22 May 26',
    duration: '3 Night',
    roomRate: 'Rp 1.200.000',
    totalPrice: 'Rp 1.200.000',
    overview:
      'Nemo Rooms offer charming tropical ambiance with direct garden access and serene surroundings for the ultimate island getaway.',
    amenitiesSubtitle:
      'Equipped with modern amenities and signature resort touches for a peaceful island retreat.',
    amenities: [
      { name: 'Comfortable Bed', icon: Bed },
      { name: 'Ensuite Bathroom', icon: Bath },
      { name: 'Air Conditioning', icon: AirVent },
      { name: 'Wi-Fi Access', icon: Wifi },
    ],
  },
  'ubur-ubur-dormitory': {
    id: 'ubur-ubur-dormitory',
    name: 'Ubur - Ubur / Dormitory Rooms',
    shortName: 'Ubur - Ubur Dormitory',
    badge: 'BEST OPTION TO STAY',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    rating: 9.7,
    reviewCount: 3213,
    location: '5GR5+F7C, Kemujan, Karimunjawa, Kabupaten Jepara, Jawa Tengah',
    bedroom: 'One',
    bathroom: 'Public',
    capacity: '34',
    pricePerPerson: 'Rp 550.000',
    priceUnit: 'person',
    numericPrice: 550000,
    taxInfo: 'Include All Taxed',
    dateRange: 'Tue, 19 May 26 – Fri, 22 May 26',
    duration: '3 Night',
    roomRate: 'Rp 550.000',
    totalPrice: 'Rp 550.000',
    overview:
      'The Dormitory Room is designed for travelers seeking comfortable accommodation at a more affordable price. With a total capacity of up to 34 beds spread across six rooms, this room type is ideal for families, community groups, company gatherings, and even tour groups looking to stay together in one area.',
    amenitiesSubtitle:
      'Each Dormitory Room is equipped with various facilities to ensure comfort during your stay, so you can enjoy your rest time to the fullest.',
    amenities: [
      { name: 'Comfortable Bed', icon: Bed },
      { name: 'Public Bathroom', icon: Bath },
      { name: 'Air Conditioning', icon: AirVent },
      { name: 'Wi-Fi Access (selected areas)', icon: Wifi },
    ],
  },
}

// Gallery Images (High Quality Photos)
const currentSlug = computed(() => {
  const queryRoom = String(route.query.room || route.query.name || '').toLowerCase()
  if (queryRoom.includes('mermaid')) return 'mermaid-rooms'
  if (queryRoom.includes('nemo')) return 'nemo-rooms'
  if (queryRoom.includes('ubur') || queryRoom.includes('dormitory')) return 'ubur-ubur-dormitory'
  return 'ubur-ubur-dormitory'
})

const selectedRoomData = computed(() => {
  return roomDatabase[currentSlug.value] || roomDatabase['ubur-ubur-dormitory']
})

const galleryImages = computed<string[]>(() => {
  return selectedRoomData.value.gallery || [
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  ]
})

const activeImage = ref<string>('')
watchEffect(() => {
  if (galleryImages.value && galleryImages.value.length > 0) {
    activeImage.value = galleryImages.value[0]
  }
})

const selectImage = (img: string) => {
  activeImage.value = img
}

// Room Information
const roomInfo = computed(() => {
  const base = selectedRoomData.value
  return {
    ...base,
    hotelInfoSubtitle:
      `To ensure a comfortable and smooth stay, here is some important information regarding ${base.shortName || base.name} at Mega Resort Karimunjawa.`,
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
})

// Final Book Now action (Add to store cart and Navigate to Review / Checkout page)
const handleFinalBooking = () => {
  store.addBookedRoom({
    id: selectedRoomData.value.id || Date.now(),
    name: selectedRoomData.value.name,
    badge: selectedRoomData.value.badge || 'BEST OPTION TO STAY',
    image: selectedRoomData.value.image,
    price: selectedRoomData.value.numericPrice || 2000000,
    pricePerUnit: selectedRoomData.value.numericPrice || 2000000,
    quantity: 1,
    dates: '04 May 2026 - 07 May 2026',
    duration: '3 Night',
  })
  router.push(localePath('/booking/review'))
}

useSeoMeta({
  title: `${roomInfo.value.name} - Detail Booking - Mega Resort Karimunjawa`,
  description: roomInfo.value.overview,
  ogTitle: `${roomInfo.value.name} - Detail Booking`,
  ogDescription: roomInfo.value.overview,
  ogImage: activeImage.value,
})
</script>

<template>
  <div class="booking-detail-page bg-[#FAFAFA] min-h-screen pb-24 select-none">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- BREADCRUMB -->
      <nav class="py-5 sm:py-6 flex items-center gap-2 text-xs sm:text-[13px] text-[#D5D7DA] font-opensans flex-wrap">
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

      <!-- 2-COLUMN MAIN CONTENT -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- LEFT COLUMN: Room Information, Gallery, Overview, Amenities, Hotel Info -->
        <div class="lg:col-span-7 space-y-8">
          
          <!-- 1. ROOM HEADER & SPECS CARD -->
          <div class="bg-white rounded-[20px] p-6 sm:p-7 border border-[#EBEBEB] shadow-xs">
            <!-- Room Title & Rating -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h1 class="font-spartan text-2xl sm:text-[28px] md:text-[48px] font-semibold text-[#977E5B] tracking-tight leading-snug">
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
                <span class="font-urbanist text-xs sm:text-[18px] text-[#717680] font-normal underline decoration-[#717680]/60 underline-offset-2">
                  (Based on {{ roomInfo.reviewCount }} Review)
                </span>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-center gap-2 mt-3 text-xs sm:text-[20px] text-[#717680] font-opensans">
              <IconLocation class-name="w-5 h-5 text-[#717680] shrink-0" />
              <span class="underline decoration-1 decoration-[#717680]/60 underline-offset-2">{{ roomInfo.location }}</span>
            </div>

            <!-- Specs Grid & Price -->
            <div class="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <!-- Specs Pill Box (3 columns with unified border and dividers) -->
              <div class="inline-grid grid-cols-3 border border-[#E5E7EB] rounded-[18px] divide-x divide-[#E5E7EB] bg-white w-full md:w-auto">
                <!-- Bedroom -->
                <div class="px-4 sm:px-6 lg:px-7 py-3 sm:py-3.5 flex flex-col gap-1.5">
                  <span class="text-xs sm:text-[15px] text-[#717680] font-opensans">Bedroom</span>
                  <div class="flex items-center gap-2">
                    <Bed class="w-5 h-5 text-[#090C10] stroke-[1.8] shrink-0" />
                    <span class="text-sm sm:text-[17px] font-semibold text-[#090C10] font-opensans leading-none">{{ roomInfo.bedroom }}</span>
                  </div>
                </div>

                <!-- Bathroom -->
                <div class="px-4 sm:px-6 lg:px-7 py-3 sm:py-3.5 flex flex-col gap-1.5">
                  <span class="text-xs sm:text-[15px] text-[#717680] font-opensans">Bathroom</span>
                  <div class="flex items-center gap-2">
                    <Bath class="w-5 h-5 text-[#090C10] stroke-[1.8] shrink-0" />
                    <span class="text-sm sm:text-[17px] font-semibold text-[#090C10] font-opensans leading-none">{{ roomInfo.bathroom }}</span>
                  </div>
                </div>

                <!-- Capacity -->
                <div class="px-4 sm:px-6 lg:px-7 py-3 sm:py-3.5 flex flex-col gap-1.5">
                  <span class="text-xs sm:text-[15px] text-[#717680] font-opensans">Capacity</span>
                  <div class="flex items-center gap-2">
                    <Users class="w-5 h-5 text-[#090C10] stroke-[1.8] shrink-0" />
                    <span class="text-sm sm:text-[17px] font-semibold text-[#090C10] font-opensans leading-none">{{ roomInfo.capacity }}</span>
                  </div>
                </div>
              </div>

              <!-- Price Box (Right Aligned) -->
              <div class="text-left md:text-right shrink-0">
                <div class="font-spartan text-xl sm:text-[24px] font-semibold text-[#090C10] leading-tight">
                  {{ roomInfo.pricePerPerson }}<span class="text-sm sm:text-[24px] font-semibold text-[#090C10]">/{{ roomInfo.priceUnit }}</span>
                </div>
                <div class="text-[11px] sm:text-[16px] text-[#717680] font-opensans mt-0.5">
                  {{ roomInfo.taxInfo }}
                </div>
              </div>
            </div>
          </div>

          <!-- 2. ROOM GALLERY -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-stretch h-auto md:h-[380px] lg:h-[440px]">
            <!-- 3 Thumbnails on Left (Stacked vertically on desktop) -->
            <div class="md:col-span-3 flex md:flex-col gap-2.5 sm:gap-3.5 h-[110px] md:h-full">
              <button
                v-for="(img, idx) in galleryImages"
                :key="idx"
                type="button"
                class="relative rounded-[8px] overflow-hidden flex-1 w-full border-2 transition-all duration-200 cursor-pointer group"
                :class="activeImage === img ? 'border-[#1C6EA4]' : 'border-transparent hover:opacity-90'"
                @click="selectImage(img)"
              >
                <img
                  :src="img"
                  :alt="`Room thumbnail ${idx + 1}`"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            </div>

            <!-- Big Main Featured Image on Right -->
            <div class="md:col-span-9 rounded-[8px] overflow-hidden relative h-[280px] sm:h-[340px] md:h-full bg-[#1b1713]">
              <img
                :src="activeImage"
                alt="Featured Room View"
                class="w-full h-full object-cover transition-all duration-300"
              />
            </div>
          </div>

          <!-- 3. OVERVIEW SECTION -->
          <div class="space-y-3 pt-6">
            <div class="flex items-center gap-2.5">
              <span class="w-[2px] h-4.5 bg-[#977E5B] rounded-full inline-block"></span>
              <h2 class="text-lg sm:text-[20px] font-semibold text-[#101828] font-opensans">
                Overview
              </h2>
            </div>
            <p class="text-sm sm:text-[16px] text-[#717680] font-opensans leading-relaxed">
              {{ roomInfo.overview }}
            </p>
          </div>

          <!-- 4. ROOM AMENITIES SECTION -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center gap-2.5">
              <span class="w-[2px] h-4.5 bg-[#977E5B] rounded-full inline-block"></span>
              <h2 class="text-lg sm:text-[20px] font-semibold text-[#101828] font-opensans">
                Room Amenities
              </h2>
            </div>
            <p class="text-xs sm:text-[16px] text-[#717680] font-opensans">
              {{ roomInfo.amenitiesSubtitle }}
            </p>

            <!-- Amenities Box (2x2 Grid with icons) -->
            <div class="bg-white rounded-[18px] p-5 sm:p-6 border border-[#EBEBEB] mt-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div
                  v-for="(amenity, idx) in roomInfo.amenities"
                  :key="idx"
                  class="flex items-center gap-3 text-xs sm:text-[16px] font-medium text-[#090C10] font-opensans"
                >
                  <component :is="amenity.icon" class="w-4 sm:w-5 h-4 sm:h-5 text-[#090C10] shrink-0" />
                  <span>{{ amenity.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. HOTEL INFORMATION SECTION -->
          <div class="space-y-4 pt-2">
            <div class="flex items-center gap-2.5">
              <span class="w-[2px] h-4.5 bg-[#977E5B] rounded-full inline-block"></span>
              <h2 class="text-lg sm:text-[20px] font-semibold text-[#101828] font-opensans">
                Hotel Information
              </h2>
            </div>
            <p class="text-xs sm:text-[16px] text-[#717680] font-opensans">
              {{ roomInfo.hotelInfoSubtitle }}
            </p>

            <!-- Info List -->
            <div class="space-y-6 mt-4">
              <div
                v-for="(item, idx) in roomInfo.hotelInfo"
                :key="idx"
                class="flex items-start gap-2.5 sm:gap-3"
              >
                <component :is="item.icon" class="w-5 h-5 text-[#090C10] stroke-[1.8] shrink-0 mt-0.5" />
                <div class="flex-1 flex flex-col gap-1">
                  <h3 class="text-base sm:text-[18px] font-semibold text-[#090C10] font-opensans leading-snug">
                    {{ item.title }}
                  </h3>
                  <p class="text-sm sm:text-[16px] text-[#717680] font-opensans leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. GALLERY SECTION -->
          <div class="space-y-4 pt-2">
            <div class="flex items-center gap-2.5">
              <span class="w-[2.5px] h-4.5 bg-[#977E5B] rounded-full inline-block"></span>
              <h2 class="text-lg sm:text-[20px] font-semibold text-[#101828] font-opensans">
                Gallery
              </h2>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <template v-if="galleryImages && galleryImages.length > 0">
                <div
                  v-for="(img, idx) in galleryImages.slice(0, 3)"
                  :key="idx"
                  class="w-full h-[140px] sm:h-[160px] md:h-[180px] rounded-[16px] overflow-hidden bg-[#ECECEE] group cursor-pointer"
                  @click="selectImage(img)"
                >
                  <img
                    :src="img"
                    :alt="`Room gallery ${idx + 1}`"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    @error="($event.target as HTMLElement).setAttribute('src', '/images/empty-state-gallery.svg')"
                  />
                </div>
              </template>
              <template v-else>
                <div
                  v-for="i in 3"
                  :key="i"
                  class="w-full h-[140px] sm:h-[160px] md:h-[180px] rounded-[16px] bg-[#ECECEE] flex items-center justify-center overflow-hidden"
                >
                  <img
                    src="/images/empty-state-gallery.svg"
                    alt="Empty Gallery Item"
                    class="w-20 sm:w-24 md:w-28 h-auto object-contain pointer-events-none select-none opacity-80"
                  />
                </div>
              </template>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN: Booking Summary & Support Sidebar -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- 1. BOOKING SUMMARY CARD -->
          <BookingSummaryCard
            :date-range="roomInfo.dateRange"
            :duration="roomInfo.duration"
            :title="roomInfo.name"
            :rate-label="'Room rate'"
            :rate-value="roomInfo.roomRate"
            :total-price="roomInfo.totalPrice"
            :tax-info="roomInfo.taxInfo"
            button-text="Book Now"
            :sticky="false"
            @submit="handleFinalBooking"
          />

          <!-- 2. WE'RE HERE TO HELP CARD -->
          <div class="bg-white rounded-[20px] border border-[#EBEBEB] shadow-xs divide-y divide-[#EBEBEB] overflow-hidden">
            <!-- Header Section -->
            <div class="p-6">
              <h3 class="font-opensans text-base sm:text-[20px] font-semibold text-[#101828]">
                We're Here to Help
              </h3>
              <p class="text-[16px] text-[#717680] font-opensans mt-1.5 leading-relaxed">
                Have questions or need support? Connect with us instantly via WhatsApp and get the help you need.
              </p>
            </div>

            <!-- Contact Us Sub-section -->
            <div class="p-6 space-y-3">
              <h4 class="text-[18px] font-normal text-[#090C10] tracking-wider font-opensans">
                Contact Us
              </h4>
              <ul class="space-y-2.5 text-[14px] text-[#977E5B] font-opensans">
                <li class="flex items-center gap-2.5">
                  <Phone class="w-4 h-4 text-[#977E5B] stroke-[1.8] shrink-0" />
                  <span>08xx - xxxx - xxxx</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <IconMailRounded class-name="w-4 h-4 text-[#977E5B] shrink-0" />
                  <span>megaresort@gmail.com</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <IconInstagram class-name="w-4 h-4 text-[#977E5B] shrink-0" />
                  <span>@megaresortkarimunjawa</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <IconTiktok class-name="w-4 h-4 text-[#977E5B] fill-current shrink-0" />
                  <span>@megaresortkarimunjawa</span>
                </li>
              </ul>
            </div>

            <!-- Location Sub-section -->
            <div class="p-6 space-y-3">
              <h4 class="text-[18px] font-normal text-[#090C10] tracking-wider font-opensans">
                Location
              </h4>
              <div class="flex items-start gap-2 text-[14px] text-[#977E5B] font-opensans leading-relaxed">
                <MapPin class="w-3.5 h-3.5 text-[#977E5B] shrink-0 mt-0.5" />
                <span>5GR5+F7C, Kemujan, Karimunjawa, Kabupaten Jepara, Jawa Tengah</span>
              </div>

              <!-- Google Maps Link -->
              <div class="pt-1">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-[14px] text-[#977E5B] hover:text-[#7A6343] font-normal font-opensans transition-colors"
                >
                  <span class="underline underline-offset-2 decoration-1 decoration-[#977E5B]/70">See on Google Maps</span>
                  <ChevronRight class="w-4 h-4" />
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
.booking-detail-page {
  padding-top: 88px;
}
@media (max-width: 768px) {
  .booking-detail-page {
    padding-top: 76px;
  }
}
</style>
