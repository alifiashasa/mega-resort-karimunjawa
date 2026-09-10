import { defineStore } from 'pinia'
import { resortService } from '~/services/features/resortService'
import type { ResortData, PackageItem, VillaHighlight, RoomItem } from '~/types'

export const useResortStore = defineStore('resort', () => {
  const resortData = ref<ResortData | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Modals & Active selections
  const isBookingModalOpen = ref(false)
  const isVideoModalOpen = ref(false)
  const selectedPackage = ref<PackageItem | null>(null)
  const selectedVilla = ref<VillaHighlight | null>(null)
  const selectedRoom = ref<RoomItem | null>(null)
  const activeGalleryIndex = ref(2) // Default center image in screenshot

  const fetchResortData = async (force = false) => {
    if (resortData.value && !force) return // already loaded

    isLoading.value = true
    error.value = null
    try {
      resortData.value = await resortService.getResortData()
    } catch (err: any) {
      error.value = err?.message || 'Failed to load resort data'
    } finally {
      isLoading.value = false
    }
  }

  const openBookingModal = (
    pkg?: PackageItem | null,
    villa?: VillaHighlight | null,
    room?: RoomItem | null
  ) => {
    selectedPackage.value = pkg || null
    selectedVilla.value = villa || null
    selectedRoom.value = room || null
    isBookingModalOpen.value = true
  }

  const closeBookingModal = () => {
    isBookingModalOpen.value = false
  }

  const openVideoModal = () => {
    isVideoModalOpen.value = true
  }

  const closeVideoModal = () => {
    isVideoModalOpen.value = false
  }

  return {
    resortData,
    isLoading,
    error,
    isBookingModalOpen,
    isVideoModalOpen,
    selectedPackage,
    selectedVilla,
    selectedRoom,
    activeGalleryIndex,
    fetchResortData,
    openBookingModal,
    closeBookingModal,
    openVideoModal,
    closeVideoModal,
  }
})

