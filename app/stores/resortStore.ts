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

  // Cart / Booked Rooms State
  const bookedRooms = ref<any[]>([])

  const addBookedRoom = (room: any) => {
    const roomId = String(room.id || room.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const existing = bookedRooms.value.find(
      (r) => String(r.id).toLowerCase() === roomId || r.name.trim().toLowerCase() === (room.name || '').trim().toLowerCase()
    )
    if (existing) {
      existing.quantity += room.quantity || 1
    } else {
      bookedRooms.value.push({
        id: roomId || `room-${Date.now()}`,
        name: room.name || 'Room Mega Resort',
        badge: room.badge || 'BEST OPTION TO STAY',
        image: room.image || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        pricePerUnit: room.price || room.pricePerUnit || 1500000,
        quantity: room.quantity || 1,
        dates: room.dates || '04 May 2026 - 07 May 2026',
        duration: room.duration || '3 Night',
      })
    }
  }

  const removeBookedRoom = (index: number) => {
    bookedRooms.value.splice(index, 1)
  }

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
    bookedRooms,
    addBookedRoom,
    removeBookedRoom,
    fetchResortData,
    openBookingModal,
    closeBookingModal,
    openVideoModal,
    closeVideoModal,
  }
})

