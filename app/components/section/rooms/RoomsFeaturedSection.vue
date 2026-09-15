<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import SectionBadge from '~/components/common/SectionBadge.vue'
import RoomFeaturedCard from '~/components/card/RoomFeaturedCard.vue'
import type { RoomItem } from '~/types'

const store = useResortStore()
const { t } = useI18n()

const featuredRooms = computed(() => {
  const rooms = store.resortData?.rooms || []
  const filtered = rooms.filter(r => r.isFeatured)
  return filtered.length > 0 ? filtered : rooms.slice(0, 3)
})

const router = useRouter()
const localePath = useLocalePath()

const handleSelectRoom = (room: RoomItem) => {
  const slug = room.name ? room.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : String(room.id)
  router.push(localePath(`/rooms/${slug}`))
}
</script>

<template>
  <section id="featured-rooms" class="py-16 sm:py-20 lg:py-24 bg-[#FAFAFA]">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header -->
      <div class="text-center max-w-7xl mx-auto mb-14 sm:mb-20">
        <!-- Badge -->
        <span class="font-urbanist text-xs sm:text-[16px] font-normal uppercase tracking-[0.18em] text-[#717680] block mb-4 sm:mb-3">
          {{ t('roomsPage.featured.badge') }}
        </span>

        <!-- Title in warm bronze/gold -->
        <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[48px] font-semibold text-[#977E5B] uppercase tracking-tight leading-[1.18] max-w-none mx-auto">
          {{ t('roomsPage.featured.title') }}
        </h2>

        <!-- Description -->
        <p class="font-opensans text-sm sm:text-base lg:text-[20px] text-[#717680] leading-relaxed mt-4 max-w-8xl mx-auto">
          {{ t('roomsPage.featured.description') }}
        </p>
      </div>

      <!-- 3-Column Cards Grid with Elevated Center Card (Bottom aligned) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 items-end justify-center">
        <RoomFeaturedCard
          v-for="(room, idx) in featuredRooms"
          :key="room.id"
          :room="room"
          :is-center="idx === 1"
          @select="handleSelectRoom"
        />
      </div>

    </div>
  </section>
</template>

