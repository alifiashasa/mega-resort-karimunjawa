<script setup lang="ts">
import { ref, computed } from 'vue'
import { useResortStore } from '~/stores/resortStore'
import BookingHeroSection from '~/components/section/booking/BookingHeroSection.vue'
import BookingResultCard, { type BookingRoomItem } from '~/components/card/BookingResultCard.vue'
import { ChevronLeft, ChevronRight, ChevronDown, Home, Building2, Check, ChevronsLeft, ChevronsRight } from 'lucide-vue-next'

definePageMeta({
  alias: ['/reservation', '/booking-rooms', '/book'],
})

const store = useResortStore()
const router = useRouter()
const localePath = useLocalePath()

// Fetch resort data on server & client
await useAsyncData('resort-data-booking-page', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

// Search Parameters State
const searchParams = ref({
  checkIn: '',
  checkOut: '',
  adults: 2,
  children: 0,
  rooms: 1,
})

// Sidebar Filter State
const filterPackageAvailable = ref(false)
const filterRoomAvailable = ref(true)

const selectedPriceRanges = ref<string[]>([])

const priceOptions = [
  { id: 'under-2m', label: 'Under IDR 2.000.000', min: 0, max: 2000000 },
  { id: '2m-3m', label: 'IDR 2.000.000 – 3.000.000', min: 2000000, max: 3000000 },
  { id: '3m-5m', label: 'IDR 3.000.000 – 5.000.000', min: 3000000, max: 5000000 },
]

const resetFilters = () => {
  filterPackageAvailable.value = false
  filterRoomAvailable.value = true
  selectedPriceRanges.value = []
}

// Sample mock rooms / items mirroring screenshot data + store data
const rawRooms: BookingRoomItem[] = [
  {
    id: 1,
    name: 'Mermaid Rooms',
    fullName: 'Mermaid Rooms Mega Resort KarimunJawa',
    badge: 'BEST OPTION TO STAY',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    type: 'room',
    price: 2000000,
    priceUnit: 'night',
    originalPrice: 2500000,
    discountText: 'Save 5%',
    taxInfo: 'Include All Taxed',
    capacityText: '2 Adults Included + Up to 2 Children + Extra Adult Available',
    policyText: 'Guest occupancy applicable terms & conditions.',
    detailRooms: '1 King + 2',
    bathrooms: '3 Attached',
    internet: '100Mbps',
  },
  {
    id: 2,
    name: 'Nemo Rooms',
    fullName: 'Nemo Rooms Mega Resort KarimunJawa',
    badge: 'BEST OPTION TO STAY',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    type: 'room',
    price: 2000000,
    priceUnit: 'night',
    originalPrice: 2500000,
    discountText: 'Save 5%',
    taxInfo: 'Include All Taxed',
    capacityText: '2 Adults Included + Up to 2 Children + Extra Adult Available',
    policyText: 'Guest occupancy applicable terms & conditions.',
    detailRooms: '1 King + 2',
    bathrooms: '3 Attached',
    internet: '100Mbps',
  },
  {
    id: 3,
    name: 'Mermaid Rooms Suite',
    fullName: 'Mermaid Rooms Mega Resort KarimunJawa',
    badge: 'BEST OPTION TO STAY',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    type: 'room',
    price: 2000000,
    priceUnit: 'night',
    originalPrice: 2500000,
    discountText: 'Save 5%',
    taxInfo: 'Include All Taxed',
    capacityText: '2 Adults Included + Up to 2 Children + Extra Adult Available',
    policyText: 'Guest occupancy applicable terms & conditions.',
    detailRooms: '1 King + 2',
    bathrooms: '3 Attached',
    internet: '100Mbps',
  },
  {
    id: 4,
    name: 'Ubar - Ubur / Dormitory Room',
    fullName: 'Ubar - Ubur / Dormitory Room',
    badge: 'BEST OPTION TO STAY',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    type: 'room',
    price: 550000,
    priceUnit: 'person',
    originalPrice: 700000,
    discountText: 'Save 20%',
    taxInfo: 'Include All Taxed',
    capacityText: 'Available 8 Rooms, Capacity 34 Person',
    policyText: 'Guest occupancy applicable terms & conditions.',
    detailRooms: '1 Single bed',
    bathrooms: 'Public Bathroom',
    internet: '100Mbps',
  },
  {
    id: 5,
    name: 'Cemara Villa Room',
    fullName: 'Cemara Villa Mega Resort Karimunjawa',
    badge: 'BEST OPTION TO STAY',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    type: 'package',
    price: 3500000,
    priceUnit: 'night',
    originalPrice: 4000000,
    discountText: 'Save 12%',
    taxInfo: 'Include All Taxed',
    capacityText: '4 Adults Included + Ocean Front Balcony',
    policyText: 'Guest occupancy applicable terms & conditions.',
    detailRooms: '2 King Beds',
    bathrooms: '2 Attached Deluxe',
    internet: '100Mbps',
  },
]

// Filtered Results
const filteredRooms = computed(() => {
  return rawRooms.filter((item) => {
    // Filter Type
    if (!filterPackageAvailable.value && !filterRoomAvailable.value) {
      // none selected -> show none
      return false
    }
    if (filterPackageAvailable.value && !filterRoomAvailable.value && item.type !== 'package') {
      return false
    }
    if (filterRoomAvailable.value && !filterPackageAvailable.value && item.type !== 'room') {
      return false
    }

    // Filter Price
    if (selectedPriceRanges.value.length > 0) {
      const matchPrice = selectedPriceRanges.value.some((rangeId) => {
        const option = priceOptions.find((p) => p.id === rangeId)
        if (!option) return false
        return item.price >= option.min && item.price <= option.max
      })
      if (!matchPrice) return false
    }

    return true
  })
})

// Pagination
const currentPage = ref(1)
const itemsPerPage = ref(8)
const totalResults = computed(() => (filteredRooms.value.length === 0 ? 0 : 25))

// Date Formatting for Summary Header
const formattedDateRange = computed(() => {
  try {
    const inDate = new Date(searchParams.value.checkIn)
    const outDate = new Date(searchParams.value.checkOut)
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    
    if (isNaN(inDate.getTime()) || isNaN(outDate.getTime())) {
      return '9 - 10 Februari 2025'
    }

    const startDay = inDate.getDate()
    const endDay = outDate.getDate()
    const monthName = months[outDate.getMonth()]
    const year = outDate.getFullYear()
    return `${startDay} - ${endDay} ${monthName} ${year}`
  } catch {
    return '9 - 10 Februari 2025'
  }
})

const handleSearch = (newParams: any) => {
  searchParams.value = newParams
  // Scroll smoothly to results
  const el = document.getElementById('booking-results')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleViewDetail = (item: BookingRoomItem) => {
  const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  router.push(localePath(`/booking/detail?room=${slug}`))
}

const handleBookNow = (item: BookingRoomItem) => {
  const slug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  router.push(localePath(`/booking/detail?room=${slug}`))
}

useSeoMeta({
  title: 'Booking Rooms & Packages - Mega Resort Karimunjawa',
  description: 'Plan your stay with ease and confidence. Secure your booking and explore our luxury rooms and packages in Karimunjawa.',
  ogTitle: 'Booking Rooms & Packages - Mega Resort Karimunjawa',
  ogDescription: 'Start your journey to Karimunjawa today with Mega Resort Karimunjawa.',
})
</script>

<template>
  <div class="overflow-x-hidden bg-[#FAFAFA] min-h-screen">
    
    <!-- Hero Section with Floating Search Form -->
    <BookingHeroSection
      v-model="searchParams"
      @search="handleSearch"
    />

    <!-- Main Results Section (Spacing accounts for floating search bar) -->
    <section id="booking-results" class="pt-24 sm:pt-28 md:pt-32 pb-20 select-none">
      <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- 2-Column Grid Layout: Filter Sidebar + Results List -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          <!-- LEFT SIDEBAR: Find Your Stay (Span 4 on LG, Span 3 on XL) -->
          <aside class="lg:col-span-4 xl:col-span-3 bg-white rounded-[20px] p-5 sm:p-6 border-0 shadow-none space-y-6">
            
            <!-- Sidebar Header -->
            <div class="flex items-center justify-between pb-4 border-b border-[#F0F0F0]">
              <h2 class="font-opensans text-lg sm:text-[20px] font-semibold text-[#977E5B]">
                Find Your Stay
              </h2>
              <button
                type="button"
                class="text-[16px] font-opensans text-[#A4A7AE] hover:text-[#977E5B] transition-colors cursor-pointer"
                @click="resetFilters"
              >
                Reset
              </button>
            </div>

            <!-- Filter Group 1: Package & Room -->
            <div class="space-y-3">
              <h3 class="font-opensans text-xs sm:text-[16px] font-medium text-[#101828]">
                Package & Room
              </h3>
              
              <div class="space-y-2.5 font-opensans text-[14px] text-[#090C10]">
                <!-- Package Available Checkbox -->
                <label class="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    v-model="filterPackageAvailable"
                    class="sr-only peer"
                  />
                  <div class="w-5 h-5 rounded-[8px] border border-[#D0D5DD] bg-white flex items-center justify-center shrink-0 transition-all duration-150 peer-checked:bg-[#977E5B] peer-checked:border-[#977E5B] peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100 group-hover:border-[#977E5B]">
                    <Check class="w-2.5 h-2.5 text-white stroke-[3.5] opacity-0 scale-75 transition-all duration-150" />
                  </div>
                  <span class="group-hover:text-[#1f1a16] transition-colors">Package Available</span>
                </label>

                <!-- Room Available Checkbox -->
                <label class="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    v-model="filterRoomAvailable"
                    class="sr-only peer"
                  />
                  <div class="w-5 h-5 rounded-[8px] border border-[#D0D5DD] bg-white flex items-center justify-center shrink-0 transition-all duration-150 peer-checked:bg-[#977E5B] peer-checked:border-[#977E5B] peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100 group-hover:border-[#977E5B]">
                    <Check class="w-2.5 h-2.5 text-white stroke-[3.5] opacity-0 scale-75 transition-all duration-150" />
                  </div>
                  <span class="group-hover:text-[#1f1a16] transition-colors">Room Available</span>
                </label>
              </div>
            </div>

            <!-- Filter Group 2: Filter Price -->
            <div class="space-y-3 pt-2">
              <h3 class="font-opensans text-xs sm:text-[16px] font-medium text-[#090C10]">
                Filter Price
              </h3>
              
              <div class="space-y-2.5 font-opensans text-[14px] text-[#090C10]">
                <label
                  v-for="opt in priceOptions"
                  :key="opt.id"
                  class="flex items-center gap-3 cursor-pointer group select-none"
                >
                  <input
                    type="checkbox"
                    :value="opt.id"
                    v-model="selectedPriceRanges"
                    class="sr-only peer"
                  />
                  <div class="w-5 h-5 rounded-[8px] border border-[#D0D5DD] bg-white flex items-center justify-center shrink-0 transition-all duration-150 peer-checked:bg-[#977E5B] peer-checked:border-[#977E5B] peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100 group-hover:border-[#977E5B]">
                    <Check class="w-2.5 h-2.5 text-white stroke-[3.5] opacity-0 scale-75 transition-all duration-150" />
                  </div>
                  <span class="group-hover:text-[#1f1a16] transition-colors">{{ opt.label }}</span>
                </label>
              </div>
            </div>

          </aside>

          <!-- RIGHT MAIN CONTENT: Hasil Pencarian (Span 8 on LG, Span 9 on XL) -->
          <main class="lg:col-span-8 xl:col-span-9 space-y-4 sm:space-y-5">
            
            <!-- Breadcrumbs -->
            <nav class="flex items-center gap-1.5 sm:gap-2 font-opensans text-xs sm:text-[14px] pt-1 sm:pt-1.5">
              <NuxtLink :to="localePath('/')" class="hover:text-[#977E5B] flex items-center gap-1.5 transition-colors text-[#D5D7DA] font-normal">
                <Home class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D5D7DA] shrink-0 stroke-[1.8]" />
                <span>Home</span>
              </NuxtLink>
              <ChevronRight class="w-3.5 h-3.5 text-[#D5D7DA] shrink-0 stroke-[2]" />
              <div class="text-[#090C10] font-semibold flex items-center gap-1.5">
                <Building2 class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#090C10] shrink-0 stroke-[2]" />
                <span>Booking Rooms</span>
              </div>
            </nav>

            <!-- Results Header (Title & Meta Summary) -->
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4">
              <h1 class="font-opensans text-xl sm:text-[20px] font-semibold text-[#090C10]">
                Hasil Pencarian Anda
              </h1>
              
              <div class="font-opensans text-xs sm:text-[14px] text-[#000000] font-semibold">
                <span>{{ totalResults }} Result</span>
                <span class="mx-1.5 text-[#D9D9D9]">•</span>
                <span>{{ formattedDateRange }}</span>
                <span class="mx-1.5 text-[#D9D9D9]">•</span>
                <span>{{ searchParams.adults + searchParams.children }} guest {{ searchParams.rooms }} room</span>
              </div>
            </div>

            <!-- Results Card List -->
            <div v-if="filteredRooms.length > 0" class="space-y-5">
              <BookingResultCard
                v-for="room in filteredRooms"
                :key="room.id"
                :item="room"
                @view="handleViewDetail"
                @book="handleBookNow"
              />
            </div>

            <!-- Empty State if no match -->
            <div v-else class="bg-white rounded-[20px] p-10 text-center border border-[#EBEBEB] space-y-3">
              <p class="font-spartan text-lg font-semibold text-[#1f1a16]">Tidak ada kamar yang sesuai filter</p>
              <p class="font-opensans text-xs sm:text-sm text-[#717680]">Coba ubah opsi filter harga atau ketersediaan untuk melihat kamar lainnya.</p>
              <button
                type="button"
                class="mt-2 px-5 py-2 rounded-[10px] bg-[#977E5B] text-white text-xs font-medium"
                @click="resetFilters"
              >
                Reset Filter
              </button>
            </div>
          </main>

        </div>

        <!-- Full Width Pagination Bar (Spans Full Container Width) -->
        <div class="w-full pt-8 sm:pt-10 flex items-center justify-between gap-4 font-opensans text-[14px] flex-wrap md:flex-nowrap">
          
          <!-- Left: Showing items -->
          <div class="text-[#717680] text-left shrink-0">
            Showing <span class="text-[#717680]">{{ filteredRooms.length }} items</span>
          </div>

          <!-- Center: Pagination Numbers -->
          <div class="flex items-center gap-1 sm:gap-2 select-none flex-wrap justify-center">
            <!-- First Page (ChevronsLeft in gray box) -->
            <button
              type="button"
              class="w-8 h-8 rounded-[8px] bg-[#F2F4F7] text-[#98A2B3] hover:text-[#101828] hover:bg-[#E4E7EC] flex items-center justify-center transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              :disabled="currentPage === 1"
              @click="currentPage = 1"
            >
              <ChevronsLeft class="w-4 h-4" />
            </button>

            <!-- Prev (ChevronLeft in gold/tan) -->
            <button
              type="button"
              class="w-7 h-7 text-[#D5C2A5] hover:text-[#977E5B] flex items-center justify-center transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              :disabled="currentPage === 1"
              @click="currentPage--"
            >
              <ChevronLeft class="w-4 h-4" />
            </button>

            <!-- Page 1, 2, 3 -->
            <button
              v-for="page in [1, 2, 3]"
              :key="page"
              type="button"
              class="w-8 h-8 rounded-[8px] text-[14px] font-medium flex items-center justify-center transition-colors cursor-pointer"
              :class="currentPage === page ? 'bg-[#F5F1EA] text-[#8E7249] font-semibold' : 'text-[#101828] hover:text-[#977E5B] hover:bg-[#F5F1EA]/50'"
              @click="currentPage = page"
            >
              {{ page }}
            </button>

            <!-- Page 4 -->
            <button
              type="button"
              class="w-8 h-8 rounded-[8px] text-[14px] font-medium flex items-center justify-center transition-colors cursor-pointer"
              :class="currentPage === 4 ? 'bg-[#F5F1EA] text-[#8E7249] font-semibold' : 'text-[#101828] hover:text-[#977E5B] hover:bg-[#F5F1EA]/50'"
              @click="currentPage = 4"
            >
              4
            </button>

            <!-- Page 5, 6, 7, 8 -->
            <button
              v-for="page in [5, 6, 7, 8]"
              :key="page"
              type="button"
              class="w-8 h-8 rounded-[8px] text-[14px] font-medium flex items-center justify-center transition-colors cursor-pointer"
              :class="currentPage === page ? 'bg-[#F5F1EA] text-[#8E7249] font-semibold' : 'text-[#101828] hover:text-[#977E5B] hover:bg-[#F5F1EA]/50'"
              @click="currentPage = page"
            >
              {{ page }}
            </button>

            <!-- Ellipsis -->
            <span class="px-1 text-[#717680] text-[14px]">...</span>

            <!-- Page 29 -->
            <button
              type="button"
              class="w-8 h-8 rounded-[8px] text-[14px] font-medium flex items-center justify-center transition-colors cursor-pointer"
              :class="currentPage === 29 ? 'bg-[#F5F1EA] text-[#8E7249] font-semibold' : 'text-[#101828] hover:text-[#977E5B] hover:bg-[#F5F1EA]/50'"
              @click="currentPage = 29"
            >
              29
            </button>

            <!-- Next (ChevronRight in gold/tan) -->
            <button
              type="button"
              class="w-7 h-7 text-[#D5C2A5] hover:text-[#977E5B] flex items-center justify-center transition-colors cursor-pointer"
              @click="currentPage++"
            >
              <ChevronRight class="w-4 h-4" />
            </button>

            <!-- Last (ChevronsRight in gold/tan) -->
            <button
              type="button"
              class="w-7 h-7 text-[#D5C2A5] hover:text-[#977E5B] flex items-center justify-center transition-colors cursor-pointer"
              @click="currentPage = 29"
            >
              <ChevronsRight class="w-4 h-4" />
            </button>
          </div>

          <!-- Right: Items per page dropdown box -->
          <div class="flex items-center gap-2.5">
            <div class="relative flex items-center bg-[#F5F1EA] rounded-[8px] px-3 py-1.5 cursor-pointer">
              <select
                v-model="itemsPerPage"
                class="appearance-none bg-transparent text-[14px] font-medium text-[#101828] outline-none cursor-pointer pr-4"
              >
                <option :value="5">5</option>
                <option :value="10">10</option>
                <option :value="20">20</option>
              </select>
              <ChevronDown class="w-3.5 h-3.5 text-[#D5C2A5] absolute right-2 pointer-events-none stroke-[2.5]" />
            </div>
            <span class="text-[14px] text-[#717680]">Item per halaman</span>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>
