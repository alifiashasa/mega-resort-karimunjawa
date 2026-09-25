<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import RoomFeaturedCard from '~/components/card/RoomFeaturedCard.vue'
import type { RoomItem } from '~/types'

const store = useResortStore()
const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

const featuredRooms = computed(() => {
  const rooms = store.resortData?.rooms || []
  const filtered = rooms.filter(r => r.isFeatured)
  return filtered.length > 0 ? filtered.slice(0, 3) : rooms.slice(0, 3)
})

const handleSelectRoom = (room: RoomItem) => {
  const slug = room.name ? room.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : String(room.id)
  router.push(localePath(`/rooms/${slug}`))
}
</script>

<template>
  <section id="popular-rooms" class="py-10 sm:py-12 lg:py-14 bg-[#FFF9EB]">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start lg:items-end justify-between mb-8 sm:mb-10">
        <!-- Left: Heading -->
        <div class="lg:col-span-7">
          <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[48px] font-semibold text-[#977E5B] leading-[1.2] max-w-2xl lg:max-w-[650px]">
            {{ t('discoverPage.rooms.title') }}
          </h2>
        </div>

        <!-- Right: Description & View All Link -->
        <div class="lg:col-span-5 flex flex-col items-start justify-between">
          <p class="font-opensans text-xs sm:text-sm lg:text-[15px] text-[#717680] leading-relaxed mb-3 sm:mb-4">
            {{ t('discoverPage.rooms.description') }}
          </p>
          <NuxtLink
            :to="localePath('/rooms')"
            class="font-opensans text-xs sm:text-sm lg:text-[15px] font-semibold text-[#181D27] underline underline-offset-4 hover:text-[#977E5B] transition-colors"
          >
            {{ t('discoverPage.rooms.viewAll') }}
          </NuxtLink>
        </div>
      </div>

      <!-- 3-Column Rooms Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start justify-center">
        <RoomFeaturedCard
          v-for="room in featuredRooms"
          :key="room.id"
          :room="room"
          @select="handleSelectRoom"
        />
      </div>

    </div>
  </section>
</template>
