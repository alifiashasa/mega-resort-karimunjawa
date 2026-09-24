<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import RoomFeaturedCard from '~/components/card/RoomFeaturedCard.vue'
import { ArrowRight } from 'lucide-vue-next'
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
  <section id="popular-rooms" class="py-16 sm:py-20 lg:py-24 bg-[#FFF9EB] border-t border-[#ebdcc9]/40">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16">
        <!-- Left: Heading -->
        <div class="lg:col-span-6">
          <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#977E5B] leading-tight">
            {{ t('discoverPage.rooms.title') }}
          </h2>
        </div>

        <!-- Right: Description & View All Link -->
        <div class="lg:col-span-6 flex flex-col items-start lg:items-end justify-between">
          <p class="font-opensans text-xs sm:text-sm lg:text-[15px] text-[#717680] leading-relaxed mb-3">
            {{ t('discoverPage.rooms.description') }}
          </p>
          <NuxtLink
            :to="localePath('/rooms')"
            class="inline-flex items-center gap-2 font-opensans text-sm font-semibold text-[#8C704E] hover:text-[#715e4a] transition-colors group"
          >
            <span>{{ t('discoverPage.rooms.viewAll') }}</span>
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
      </div>

      <!-- 3-Column Rooms Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-end justify-center">
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
