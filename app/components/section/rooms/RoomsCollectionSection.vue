<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import SectionBadge from '~/components/common/SectionBadge.vue'
import RoomDetailedCard from '~/components/card/RoomDetailedCard.vue'
import type { RoomItem } from '~/types'

const store = useResortStore()
const { t } = useI18n()

const allRooms = computed(() => {
  return store.resortData?.rooms || []
})

const handleBookRoom = (room: RoomItem) => {
  store.openBookingModal(null, null, room)
}

const handleViewRoom = (room: RoomItem) => {
  store.openBookingModal(null, null, room)
}
</script>

<template>
  <section id="collection" class="py-16 sm:py-20 lg:py-24 bg-[#FDFDFD] border-t border-[#F0F0F0]">
    <div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      
      <!-- 2-Column Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16">
        <!-- Left: Badge & Title (Span 7) -->
        <div class="lg:col-span-7 space-y-2.5">
          <span class="font-urbanist text-xs sm:text-[14px] font-normal uppercase tracking-[0.18em] text-[#717680] block">
            {{ t('roomsPage.collection.badge') }}
          </span>

          <h2 class="font-spartan text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#977E5B] uppercase tracking-tight leading-[1.2]">
            {{ t('roomsPage.collection.title') }}
          </h2>
        </div>

        <!-- Right: Description Paragraph Right-Aligned (Span 5) -->
        <div class="lg:col-span-5 flex justify-end">
          <p class="font-opensans text-xs sm:text-[14px] text-[#717680] leading-relaxed lg:text-right max-w-lg">
            {{ t('roomsPage.collection.description') }}
          </p>
        </div>
      </div>

      <!-- Vertical List of Detailed Room Cards -->
      <div class="space-y-6 sm:space-y-8">
        <RoomDetailedCard
          v-for="room in allRooms"
          :key="room.id"
          :room="room"
          @book="handleBookRoom"
          @view="handleViewRoom"
        />
      </div>

    </div>
  </section>
</template>
