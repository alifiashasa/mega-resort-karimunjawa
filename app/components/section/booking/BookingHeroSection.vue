<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Calendar, Users, ChevronDown } from 'lucide-vue-next'
import IconLotus from '~/components/common/icons/IconLotus.vue'

interface SearchParams {
  checkIn: string
  checkOut: string
  adults: number
  children: number
  rooms: number
}

const props = defineProps<{
  modelValue?: SearchParams
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: SearchParams): void
  (e: 'search', val: SearchParams): void
}>()

const checkInDate = ref<string>(props.modelValue?.checkIn || '')
const checkOutDate = ref<string>(props.modelValue?.checkOut || '')
const adultsCount = ref<number>(props.modelValue?.adults || 2)
const childrenCount = ref<number>(props.modelValue?.children || 0)
const roomsCount = ref<number>(props.modelValue?.rooms || 1)

watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    checkInDate.value = newVal.checkIn || ''
    checkOutDate.value = newVal.checkOut || ''
    adultsCount.value = newVal.adults || 2
    childrenCount.value = newVal.children || 0
    roomsCount.value = newVal.rooms || 1
  }
}, { deep: true })

const formatDateDisplay = (dateStr: string) => {
  if (!dateStr) return ''
  const [year, month, day] = dateStr.split('-')
  if (year && month && day) {
    return `${day}/${month}/${year}`
  }
  return dateStr
}

const isGuestDropdownOpen = ref(false)
const isGuestCustomized = ref(false)

const guestSummary = computed(() => {
  const parts = []
  parts.push(`${adultsCount.value} Adults`)
  if (childrenCount.value > 0) {
    parts.push(`${childrenCount.value} Children`)
  }
  parts.push(`${roomsCount.value} Room`)
  return parts.join(', ')
})

const applyGuests = () => {
  isGuestCustomized.value = true
  isGuestDropdownOpen.value = false
}

const handleSearch = () => {
  isGuestDropdownOpen.value = false
  const params: SearchParams = {
    checkIn: checkInDate.value,
    checkOut: checkOutDate.value,
    adults: adultsCount.value,
    children: childrenCount.value,
    rooms: roomsCount.value,
  }
  emit('update:modelValue', params)
  emit('search', params)
}
</script>

<template>
  <section class="relative min-h-[580px] sm:min-h-[640px] lg:h-[720px] flex items-center justify-center select-none">
    <!-- Hero Background Image (Luxury Bedroom) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85"
        alt="Mega Resort Karimunjawa Room"
        class="w-full h-full object-cover scale-100 object-center"
      />
      <!-- Gradient Overlay matching screenshot -->
      <div class="absolute inset-0 bg-black/45" />
    </div>

    <!-- Hero Content Container -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-28 sm:pb-32 flex flex-col items-center">
      <!-- Lotus Leaf Emblem in Center -->
      <div class="w-12 h-9 sm:w-16 sm:h-12 mb-4 sm:mb-5">
        <IconLotus fill-color="#FFFFFF" class-name="w-full h-full drop-shadow-sm" />
      </div>

      <!-- Main Title (2 Lines matching screenshot) -->
      <div class="mb-4 max-w-full">
        <h2 class="font-sans text-xl sm:text-2xl md:text-3xl lg:text-[40px] tracking-[0.14em] uppercase font-normal text-white leading-tight flex items-baseline justify-center flex-wrap sm:flex-nowrap gap-x-2 sm:gap-x-3">
          <span class="whitespace-normal sm:whitespace-nowrap">START YOUR JOURNEY</span>
          <span class="font-script lowercase font-normal italic tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-white/95 -ml-1 inline-block">
            to
          </span>
        </h2>
        <h1 class="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal tracking-[0.14em] uppercase text-white mt-1 leading-tight">
          KARIMUNJAWA TODAY
        </h1>
      </div>

      <!-- Description -->
      <p class="font-opensans text-xs sm:text-sm md:text-[15px] lg:text-[17px] text-white/90 leading-relaxed font-normal max-w-3xl mx-auto px-2">
        Plan your stay with ease and confidence. Secure your booking and get ready to experience the beauty, comfort, and adventure that awaits at Mega Resort Karimunjawa.
      </p>
    </div>

    <!-- Floating Search Bar (Positioned at bottom of hero) -->
    <div class="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      <div class="bg-white rounded-[20px] p-3 sm:p-4 border border-[#E5E7EB]">
        <form @submit.prevent="handleSearch" class="flex flex-col md:flex-row md:items-end gap-3 lg:gap-4">
          
          <!-- Check-In Date -->
          <div class="flex-1 min-w-0">
            <label class="block text-[11px] sm:text-[14px] font-normal text-[#090C10] mb-1.5 px-1">
              Check - In Date
            </label>
            <div class="relative flex items-center h-[42px] border border-[#E5E7EB] rounded-[12px] px-3 bg-[#FAFAFA] hover:bg-white hover:border-[#977E5B] transition-colors focus-within:border-[#977E5B] focus-within:ring-2 focus-within:ring-[#977E5B]/20 cursor-pointer">
              <Calendar class="w-4 h-4 text-[#717680] shrink-0 mr-2 pointer-events-none" />
              <span
                class="text-xs sm:text-sm font-opensans truncate pointer-events-none select-none"
                :class="checkInDate ? 'text-[#1f1a16] font-normal' : 'text-[#717680]'"
              >
                {{ checkInDate ? formatDateDisplay(checkInDate) : 'Select Check - in date' }}
              </span>
              <input
                type="date"
                v-model="checkInDate"
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
            </div>
          </div>

          <!-- Check-Out Date -->
          <div class="flex-1 min-w-0">
            <label class="block text-[11px] sm:text-[14px] font-normal text-[#090C10] mb-1.5 px-1">
              Check - Out Date
            </label>
            <div class="relative flex items-center h-[42px] border border-[#E5E7EB] rounded-[12px] px-3 bg-[#FAFAFA] hover:bg-white hover:border-[#977E5B] transition-colors focus-within:border-[#977E5B] focus-within:ring-2 focus-within:ring-[#977E5B]/20 cursor-pointer">
              <Calendar class="w-4 h-4 text-[#717680] shrink-0 mr-2 pointer-events-none" />
              <span
                class="text-xs sm:text-sm font-opensans truncate pointer-events-none select-none"
                :class="checkOutDate ? 'text-[#1f1a16] font-normal' : 'text-[#717680]'"
              >
                {{ checkOutDate ? formatDateDisplay(checkOutDate) : 'Select Check - out date' }}
              </span>
              <input
                type="date"
                v-model="checkOutDate"
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
            </div>
          </div>

          <!-- Number of Guests -->
          <div class="flex-1 min-w-0 relative">
            <label class="block text-[11px] sm:text-[14px] font-normal text-[#090C10] mb-1.5 px-1">
              Number of Guests
            </label>
            <button
              type="button"
              class="w-full h-[42px] flex items-center justify-between border border-[#E5E7EB] rounded-[12px] px-3 bg-[#FAFAFA] hover:bg-white hover:border-[#977E5B] transition-colors text-left font-opensans cursor-pointer"
              @click="isGuestDropdownOpen = !isGuestDropdownOpen"
            >
              <div class="flex items-center gap-2 truncate">
                <Users class="w-4 h-4 text-[#717680] shrink-0" />
                <span
                  class="text-xs sm:text-sm font-opensans truncate select-none"
                  :class="isGuestCustomized ? 'text-[#1f1a16] font-normal' : 'text-[#717680]'"
                >
                  {{ isGuestCustomized ? guestSummary : 'Guests' }}
                </span>
              </div>
              <ChevronDown class="w-4 h-4 text-[#717680] shrink-0 transition-transform duration-200 ml-1" :class="{ 'rotate-180': isGuestDropdownOpen }" />
            </button>

            <!-- Guest Selector Popover -->
            <div
              v-if="isGuestDropdownOpen"
              class="absolute top-full left-0 right-0 mt-2 bg-white rounded-[16px] p-4 shadow-lg border border-[#E5E7EB] z-50 space-y-3.5 text-xs text-[#1f1a16]"
            >
              <!-- Adults -->
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-medium">Adults</p>
                  <p class="text-[11px] text-[#717680]">Ages 13 or above</p>
                </div>
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    class="w-7 h-7 rounded-full border border-[#D5C2A5] text-[#977E5B] flex items-center justify-center hover:bg-[#FAF7F2] disabled:opacity-40 disabled:cursor-not-allowed"
                    :disabled="adultsCount <= 1"
                    @click="adultsCount--; isGuestCustomized = true"
                  >
                    -
                  </button>
                  <span class="w-4 text-center font-semibold">{{ adultsCount }}</span>
                  <button
                    type="button"
                    class="w-7 h-7 rounded-full border border-[#D5C2A5] text-[#977E5B] flex items-center justify-center hover:bg-[#FAF7F2]"
                    @click="adultsCount++; isGuestCustomized = true"
                  >
                    +
                  </button>
                </div>
              </div>

              <!-- Children -->
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-medium">Children</p>
                  <p class="text-[11px] text-[#717680]">Ages 0 - 12</p>
                </div>
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    class="w-7 h-7 rounded-full border border-[#D5C2A5] text-[#977E5B] flex items-center justify-center hover:bg-[#FAF7F2] disabled:opacity-40 disabled:cursor-not-allowed"
                    :disabled="childrenCount <= 0"
                    @click="childrenCount--; isGuestCustomized = true"
                  >
                    -
                  </button>
                  <span class="w-4 text-center font-semibold">{{ childrenCount }}</span>
                  <button
                    type="button"
                    class="w-7 h-7 rounded-full border border-[#D5C2A5] text-[#977E5B] flex items-center justify-center hover:bg-[#FAF7F2]"
                    @click="childrenCount++; isGuestCustomized = true"
                  >
                    +
                  </button>
                </div>
              </div>

              <!-- Rooms -->
              <div class="flex items-center justify-between pt-2 border-t border-[#F0F0F0]">
                <div>
                  <p class="font-medium">Rooms</p>
                  <p class="text-[11px] text-[#717680]">Number of rooms</p>
                </div>
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    class="w-7 h-7 rounded-full border border-[#D5C2A5] text-[#977E5B] flex items-center justify-center hover:bg-[#FAF7F2] disabled:opacity-40 disabled:cursor-not-allowed"
                    :disabled="roomsCount <= 1"
                    @click="roomsCount--; isGuestCustomized = true"
                  >
                    -
                  </button>
                  <span class="w-4 text-center font-semibold">{{ roomsCount }}</span>
                  <button
                    type="button"
                    class="w-7 h-7 rounded-full border border-[#D5C2A5] text-[#977E5B] flex items-center justify-center hover:bg-[#FAF7F2]"
                    @click="roomsCount++; isGuestCustomized = true"
                  >
                    +
                  </button>
                </div>
              </div>

              <!-- Apply Button -->
              <button
                type="button"
                class="w-full mt-2 py-1.5 bg-[#977E5B] hover:bg-[#856c4c] text-white rounded-[8px] font-medium text-xs transition-colors"
                @click="applyGuests"
              >
                Done
              </button>
            </div>
          </div>

          <!-- Search Room Button -->
          <div class="shrink-0 flex items-center justify-center h-[42px]">
            <button
              type="submit"
              class="w-full sm:w-[112px] h-[36px] bg-[#937A54] hover:bg-[#886F4A] text-white font-opensans text-xs sm:text-[13px] font-medium rounded-[10px] sm:rounded-[12px] flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-[0.99] border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)]"
            >
              <span>Search Room</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  </section>
</template>
