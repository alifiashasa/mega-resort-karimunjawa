<script setup lang="ts">
import {
  Calendar,
  Moon,
  Trash2,
  Plus,
  Minus,
  Check,
  Building2,
} from 'lucide-vue-next'

export interface BookedRoom {
  id: string | number
  name: string
  badge: string
  image: string
  pricePerUnit: number
  quantity: number
  dates: string
  duration: string
}

export interface AddonItem {
  id: string
  name: string
  description: string
  price: number
  priceLabel: string
  image: string
  selected: boolean
}

const props = defineProps<{
  bookedRooms: BookedRoom[]
  addons: AddonItem[]
}>()

const emit = defineEmits<{
  (e: 'increase-qty', room: BookedRoom): void
  (e: 'decrease-qty', room: BookedRoom): void
  (e: 'remove-room', index: number): void
  (e: 'add-more'): void
  (e: 'toggle-addon', addon: AddonItem): void
}>()

const localePath = useLocalePath()

const formatCurrency = (val: number) => {
  return 'Rp ' + val.toLocaleString('id-ID')
}
</script>

<template>
  <div class="space-y-10">
    <!-- SECTION 1: Review Your Booking -->
    <div>
      <div class="mb-4">
        <h1 class="text-xl sm:text-[28px] font-semibold text-[#090C10] font-spartan tracking-tight">
          Review Your Booking
        </h1>
        <p class="text-xs sm:text-[17px] text-[#757575] font-opensans mt-1">
          Please check all reservation details carefully to ensure everything is correct before moving to guest information.
        </p>
      </div>

      <!-- ROOMS LIST -->
      <div v-if="bookedRooms.length > 0" class="space-y-4">
        <div
          v-for="(room, index) in bookedRooms"
          :key="room.id"
          class="bg-white rounded-[20px] p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:gap-6 relative sm:h-[340px] border-0 shadow-none"
        >
          <!-- Room Thumbnail -->
          <div class="w-full sm:w-[280px] md:w-[320px] h-[200px] sm:h-full rounded-[16px] overflow-hidden shrink-0 bg-[#F2F4F7]">
            <img
              :src="room.image"
              :alt="room.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Room Details -->
          <div class="flex-1 flex flex-col justify-between py-1">
            <div>
              <!-- Badge -->
              <span class="text-[11px] sm:text-[15px] font-normal text-[#717680] tracking-wider uppercase font-opensans">
                {{ room.badge }}
              </span>

              <!-- Room Name & Delete Button Row -->
              <div class="flex items-start justify-between gap-3 mt-4">
                <h3 class="text-lg sm:text-[20px] font-semibold text-[#090C10] font-opensans leading-snug">
                  {{ room.name }}
                </h3>
                <button
                  type="button"
                  class="text-[#FDA29B] hover:text-[#D92D20] p-1 transition-colors cursor-pointer shrink-0"
                  title="Remove room"
                  @click="emit('remove-room', index)"
                >
                  <Trash2 class="w-5 h-5 stroke-[1.8]" />
                </button>
              </div>

              <!-- Dates & Nights -->
              <div class="mt-4 space-y-4">
                <div class="flex items-center gap-2.5 text-xs sm:text-[16px] text-[#090C10] font-opensans">
                  <Calendar class="w-5 h-5 text-[#090C10] shrink-0" />
                  <span>{{ room.dates }}</span>
                </div>
                <div class="flex items-center gap-2.5 text-xs sm:text-[16px] text-[#090C10] font-opensans">
                  <Moon class="w-5 h-5 text-[#090C10] shrink-0" />
                  <span>{{ room.duration }}</span>
                </div>
              </div>
            </div>

            <!-- Bottom: Stepper and Unit Price -->
            <div class="flex items-center justify-end gap-3 sm:gap-4 mt-4 pt-3 sm:pt-0">
              <!-- Stepper Control -->
              <div
                class="inline-flex items-center justify-between rounded-[12px] bg-white h-[40px] px-1.5 min-w-[96px]"
                style="border-width: 0px 1px 1px 0px; border-style: solid; border-color: #E8E4D9; box-shadow: 0px 1px 1px 0px #E8E4D9;"
              >
                <button
                  type="button"
                  class="w-7 h-7 flex items-center justify-center text-[#090C10] hover:bg-gray-50 rounded-[6px] transition-colors cursor-pointer"
                  @click="emit('decrease-qty', room)"
                >
                  <Minus class="w-3.5 h-3.5 stroke-[2]" />
                </button>
                <span class="px-1.5 text-[16px] font-medium text-[#090C10] font-opensans min-w-[20px] text-center select-none">
                  {{ room.quantity }}
                </span>
                <button
                  type="button"
                  class="w-7 h-7 flex items-center justify-center text-[#090C10] hover:bg-gray-50 rounded-[6px] transition-colors cursor-pointer"
                  @click="emit('increase-qty', room)"
                >
                  <Plus class="w-3.5 h-3.5 stroke-[2]" />
                </button>
              </div>

              <!-- Price Column -->
              <div class="text-right">
                <div class="text-base sm:text-[20px] font-semibold text-[#090C10] font-opensans">
                  {{ room.quantity }} x {{ formatCurrency(room.pricePerUnit) }}
                </div>
                <div class="text-xs sm:text-[16px] text-[#717680] font-opensans mt-0.5">
                  Include All Taxed
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- + Add More Button -->
        <div class="mt-6 flex justify-center">
          <button
            type="button"
            class="h-[44px] px-7 bg-white hover:bg-[#FAF8F5] rounded-[14px] text-[16px] font-normal text-[#977E5B] font-opensans flex items-center gap-2 cursor-pointer transition-all duration-150 active:translate-y-[1px] shadow-button-outlined-default"
            @click="emit('add-more')"
          >
            <Plus class="w-4 h-4 text-[#977E5B] stroke-[2]" />
            <span>Add More</span>
          </button>
        </div>
      </div>

      <!-- EMPTY STATE -->
      <div
        v-else
        class="bg-white rounded-[20px] p-8 sm:p-10 text-center flex flex-col items-center justify-center border-0"
      >
        <div class="w-14 h-14 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#977E5B] mb-3">
          <Building2 class="w-7 h-7" />
        </div>
        <h3 class="text-lg sm:text-xl font-semibold text-[#090C10] font-spartan">
          No Rooms Selected
        </h3>
        <p class="text-xs sm:text-sm text-[#717680] font-opensans max-w-sm mt-1 mb-5">
          You haven't added any rooms to your booking yet. Please choose a room to continue.
        </p>
        <NuxtLink
          :to="localePath('/booking')"
          class="px-6 py-2.5 bg-[#977E5B] hover:bg-[#856D4D] text-white rounded-[12px] text-sm font-medium font-opensans transition-all"
        >
          Browse Rooms
        </NuxtLink>
      </div>
    </div>

    <!-- SECTION 2: Elevate Your Experience (Add-ons) -->
    <div>
      <div class="mb-4">
        <h2 class="text-xl sm:text-[28px] font-semibold text-[#090C10] font-spartan tracking-tight">
          Elevate Your Experience
        </h2>
        <p class="text-xs sm:text-[17px] text-[#757575] font-opensans mt-1">
          Discover curated add-ons and exclusive services to enrich your stay at Mega Resort Karimunjawa.
        </p>
      </div>

      <!-- Add-on Cards Grid/List -->
      <div class="space-y-4">
        <div
          v-for="addon in addons"
          :key="addon.id"
          class="bg-white rounded-[20px] p-5 sm:p-5 border-0 shadow-none flex flex-col sm:flex-row gap-5 sm:gap-6 transition-all sm:h-[326px]"
          :class="addon.selected ? 'ring-1.5 ring-[#977E5B]' : ''"
        >
          <!-- Add-on Image -->
          <div class="w-full sm:w-[250px] h-[200px] sm:h-[286px] rounded-[12px] overflow-hidden shrink-0 bg-[#F2F4F7]">
            <img
              :src="addon.image"
              :alt="addon.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Add-on Content -->
          <div class="flex-1 flex flex-col justify-between py-1">
            <div>
              <h3 class="text-lg sm:text-[20px] font-semibold text-[#090C10] font-opensans leading-snug">
                {{ addon.name }}
              </h3>
              <p class="text-xs sm:text-[14px] text-[#717680] font-opensans leading-relaxed mt-2.5">
                {{ addon.description }}
              </p>
              
              <div class="mt-3.5">
                <div class="text-base sm:text-[18px] font-semibold text-[#090C10] font-opensans">
                  {{ formatCurrency(addon.price) }}
                </div>
                <div class="text-xs sm:text-[14px] text-[#717680] font-opensans mt-0.5">
                  {{ addon.priceLabel }}
                </div>
              </div>
            </div>

            <!-- Add Button -->
            <div class="mt-4 pt-2 sm:pt-0">
              <button
                type="button"
                class="w-full py-2.5 sm:py-3 px-4 rounded-[10px] text-xs sm:text-sm font-medium font-opensans flex items-center justify-center gap-1.5 transition-all duration-150 cursor-pointer active:translate-y-[1px]"
                :class="
                  addon.selected
                    ? 'bg-[#937A54] hover:bg-[#886F4A] text-white border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)]'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#977E5B] shadow-button-outlined-default'
                "
                @click="emit('toggle-addon', addon)"
              >
                <Check v-if="addon.selected" class="w-4 h-4 stroke-[2.5]" />
                <Plus v-else class="w-4 h-4 text-[#977E5B] stroke-[2]" />
                <span>{{ addon.selected ? 'Added' : 'Add' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
