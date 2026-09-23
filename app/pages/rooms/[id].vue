<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import HeroSection from '~/components/section/home/HeroSection.vue'
import PackageSection from '~/components/section/home/PackageSection.vue'
import RoomDetailOverview from '~/components/section/room-detail/RoomDetailOverview.vue'
import RoomDetailAmenities from '~/components/section/room-detail/RoomDetailAmenities.vue'
import RoomDetailGallery from '~/components/section/room-detail/RoomDetailGallery.vue'
import RoomDetailExclusive from '~/components/section/room-detail/RoomDetailExclusive.vue'
import type { RoomItem } from '~/types'

const route = useRoute()
const store = useResortStore()
const { t } = useI18n()

// Fetch resort data
await useAsyncData('resort-data-room-detail', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

// Determine the current room based on route param or fallback to Mermaid Room
const currentRoom = computed<RoomItem>(() => {
  const rooms = store.resortData?.rooms || []
  const idParam = route.params.id as string

  if (idParam) {
    // Check if matching numeric ID
    const foundById = rooms.find(r => String(r.id) === idParam)
    if (foundById) return foundById

    // Check if matching slug name (e.g. 'mermaid-room')
    const foundBySlug = rooms.find(r =>
      r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(idParam.toLowerCase())
    )
    if (foundBySlug) return foundBySlug
  }

  // Default fallback to first room (Mermaid Room)
  return rooms[0] || {
    id: 1,
    name: 'Mermaid Room',
    fullName: 'Mermaid Room Mega Resort Karimunjawa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    rating: 9.8,
    price: 5600000,
    priceUnit: 'night',
    category: 'OVERWATER VILLA • KARIMUNJAWA PARADISE',
    specs: {
      totalRooms: '1 King + 2',
      bathroom: '3 Attached',
      internet: '100Mbps',
      coveredParking: 'Yes Two',
    },
  } as RoomItem
})

useSeoMeta({
  title: () => `${currentRoom.value?.name || 'Mermaid Room'} - Mega Resort Karimunjawa`,
  description: 'Designed for comfort and serenity, each room is a sanctuary where the sound of the ocean and lush greenery create a tranquil haven.',
  ogTitle: () => `${currentRoom.value?.name || 'Mermaid Room'} - Mega Resort Karimunjawa`,
  ogDescription: 'Experience authentic luxury in Karimunjawa with oceanfront views and bespoke amenities.',
  ogImage: () => currentRoom.value?.image || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="overflow-x-hidden bg-[#FFF9EB]">
    <!-- 1. Hero Section (Reused Core Hero Component) -->
    <HeroSection
      id="room-detail-hero"
      bg-image="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85"
      badge-prefix="YOUR PRIVATE ESCAPE"
      script-word="at"
      title="MEGA RESORT KARIMUNJAWA"
      description="Designed for comfort and serenity, each room is a sanctuary where the sound of the ocean and lush greenery create a tranquil haven. Immerse in the authentic island ambiance and make every moment of your stay unforgettable."
      cta-text="360 Virtual Room Tour"
      cta-icon="360"
      cta-type="video"
      cta-class="h-[46px] px-6 rounded-full border border-white/30 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white font-opensans text-xs sm:text-[14px] tracking-wide"
      :show-scroll-down="false"
      min-height="min-h-[640px] sm:min-h-[720px] lg:h-[840px]"
      overlay-class="bg-gradient-to-b from-black/65 via-black/45 to-black/75"
    />

    <!-- 2. Room Overview Card -->
    <RoomDetailOverview :room="currentRoom" />

    <!-- 3. Everything You Need for a Perfect Stay (Amenities Grid) -->
    <RoomDetailAmenities />

    <!-- 4. Photo Atmosphere & Full-Width Ocean Banner -->
    <RoomDetailGallery />

    <!-- 5. Exclusive More Than Just A Room -->
    <RoomDetailExclusive />

    <!-- 6. Popular Package for Destination On KarimunJawa (Reused Core Package Component) -->
    <PackageSection
      id="popular-packages"
      title="Popular Package for Destination On KarimunJawa"
      description="Discover our most popular packages crafted to provide the ultimate KarimunJawa experience. Combining luxury, adventure, and serenity for an unforgettable getaway."
      view-all-text="View All Packages"
      view-all-href="/package"
      bg-class="bg-[#FFF9EB]"
      container-class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"
    />
  </div>
</template>
