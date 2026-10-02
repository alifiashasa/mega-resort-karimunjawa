<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useResortStore } from '~/stores/resortStore'
import {
  Home,
  Building2,
  FileCheck,
  Check,
  AlertCircle,
  ChevronRight,
} from 'lucide-vue-next'
import BookingSummaryCard, {
  type SummaryItem,
  type SummaryGroup,
  type BreakdownItem,
} from '~/components/card/BookingSummaryCard.vue'
import BookingStepReview, { type BookedRoom, type AddonItem } from '~/components/section/booking/BookingStepReview.vue'
import BookingStepGuestInfo, {
  type ContactForm,
  type StayDetailsForm,
  type ChildrenDetailsForm,
  type DormitoryGuest,
  type ArrivalTransferForm,
} from '~/components/section/booking/BookingStepGuestInfo.vue'
import BookingStepPayment, { type PaymentForm } from '~/components/section/booking/BookingStepPayment.vue'

import ImportantBookingInfoModal from '~/components/section/booking/ImportantBookingInfoModal.vue'

definePageMeta({
  alias: ['/booking/checkout', '/checkout', '/booking-review', '/booking/review-booking'],
})

const store = useResortStore()
const router = useRouter()
const localePath = useLocalePath()

// Fetch resort data if needed
await useAsyncData('resort-data-booking-review', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

// Current Step in Booking Process (1 = Review, 2 = Guest Info, 3 = Payment)
const currentStep = ref(1)

// Modal State
const showImportantModal = ref(false)

// Stay Dates and Duration
const bookingDate = ref({
  rangeText: '04 May 2026 - 07 May 2026',
  summaryDateRange: 'Tue, 19 May 26 – Fri, 22 May 26',
  durationText: '3 Night',
  nights: 3,
})

const bookedRooms = computed(() => store.bookedRooms)

// Add-ons list (Elevate Your Experience)
const addons = ref<AddonItem[]>([
  {
    id: 'island-transfer',
    name: 'Private Island Transfer',
    description:
      'Enjoy a one-way transfer with a private, comfortable vehicle to or from Mega Resort Karimunjawa. The car accommodates up to 4 adults or 2 adults with 2 children, ensuring a smooth and relaxing journey across the island.',
    price: 200000,
    priceLabel: 'Once',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    selected: false,
  },
  {
    id: 'tasteful-morning',
    name: 'A Tasteful Morning',
    description:
      'Start your day with a delightful breakfast served at the resort. Enjoy a selection of local and international dishes, freshly prepared each morning to energize your island adventures.',
    price: 700000,
    priceLabel: 'For 2 Persons',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80',
    selected: false,
  },
])

// Step 2 Form States
const contactForm = ref<ContactForm>({
  fullName: '',
  email: '',
  phone: '',
  notes: '',
})

const stayDetailsForm = ref<StayDetailsForm>({
  checkIn: '2026-05-19',
  checkOut: '2026-05-22',
  nights: 3,
})

const childrenDetails = ref<ChildrenDetailsForm>({
  enabled: false,
  count: 1,
})

const dormitoryGuests = ref<DormitoryGuest[]>([
  { fullName: '', email: '', phone: '' },
  { fullName: '', email: '', phone: '' },
])

const arrivalTransfer = ref<ArrivalTransferForm>({
  enabled: false,
  pickupLocation: '',
  arrivalTime: '',
  specialRequests: '',
})

const agreedToTerms = ref(false)

// Room Quantity Controls
const increaseQty = (room: BookedRoom) => {
  room.quantity++
}

const decreaseQty = (room: BookedRoom) => {
  if (room.quantity > 1) {
    room.quantity--
  }
}

const removeRoom = (index: number) => {
  store.removeBookedRoom(index)
}

const handleAddMore = () => {
  router.push(localePath('/booking'))
}

// Addon Toggle
const toggleAddon = (addon: AddonItem) => {
  addon.selected = !addon.selected
}

// Pricing Calculations
const roomsSubtotal = computed(() => {
  return bookedRooms.value.reduce((sum, item) => sum + item.pricePerUnit * item.quantity, 0)
})

const addonsSubtotal = computed(() => {
  return addons.value
    .filter((a) => a.selected)
    .reduce((sum, item) => sum + item.price, 0)
})

const childrenSubtotal = computed(() => {
  if (!childrenDetails.value.enabled) return 0
  // Default child fee per child for demonstration
  return childrenDetails.value.count * 110000
})

const totalPrice = computed(() => {
  return roomsSubtotal.value + addonsSubtotal.value + childrenSubtotal.value
})

const summaryGroups = computed<SummaryGroup[]>(() => {
  const groups: SummaryGroup[] = []

  // Group 1: Room Charges
  if (bookedRooms.value.length > 0) {
    groups.push({
      categoryTitle: 'Room Charges',
      items: bookedRooms.value.map((r) => ({
        id: `room-${r.id}`,
        name: r.name,
        subtext: `${r.quantity} Room, ${bookingDate.value.durationText}`,
        price: r.pricePerUnit * r.quantity,
      })),
    })
  }

  // Group 2: Additional Charges (e.g. Children or Addons)
  const additionalItems: SummaryItem[] = []

  if (childrenDetails.value.enabled && childrenDetails.value.count > 0) {
    for (let i = 0; i < childrenDetails.value.count; i++) {
      const age = i === 0 ? 10 : 17
      const price = i === 0 ? 110000 : 150000
      additionalItems.push({
        id: `child-${i}`,
        name: `Child (Age ${age})`,
        subtext: `1 Person / Bed, ${bookingDate.value.durationText}`,
        price: price,
      })
    }
  }

  for (const a of addons.value.filter((a) => a.selected)) {
    additionalItems.push({
      id: `addon-${a.id}`,
      name: a.name,
      subtext: `1 x ${a.price.toLocaleString('id-ID')}`,
      price: a.price,
    })
  }

  if (additionalItems.length > 0) {
    groups.push({
      categoryTitle: 'Additional Charges',
      items: additionalItems,
    })
  }

  return groups
})

const summaryBreakdowns = computed<BreakdownItem[]>(() => {
  if (summaryGroups.value.length > 1) {
    const roomTotal = roomsSubtotal.value
    const addOnsTotal = addonsSubtotal.value + childrenSubtotal.value
    return [
      { label: 'Room Charges', value: roomTotal },
      { label: 'Add-ons Charges', value: addOnsTotal },
    ]
  }
  return []
})

const summaryItems = computed<SummaryItem[]>(() => {
  const list: SummaryItem[] = []
  for (const r of bookedRooms.value) {
    list.push({
      id: `room-${r.id}`,
      name: r.name,
      subtext: `${r.quantity} x ${r.pricePerUnit.toLocaleString('id-ID')}`,
      price: r.pricePerUnit * r.quantity,
    })
  }
  for (const a of addons.value.filter((a) => a.selected)) {
    list.push({
      id: `addon-${a.id}`,
      name: a.name,
      subtext: `1 x ${a.price.toLocaleString('id-ID')}`,
      price: a.price,
    })
  }
  return list
})

// Validation & Stepper Handlers
const isStepValid = computed(() => {
  if (currentStep.value === 1) {
    return bookedRooms.value.length > 0
  }
  if (currentStep.value === 2) {
    return (
      contactForm.value.fullName.trim() !== '' &&
      contactForm.value.email.trim() !== '' &&
      contactForm.value.phone.trim() !== '' &&
      agreedToTerms.value &&
      bookedRooms.value.length > 0
    )
  }
  return true
})

const summaryButtonText = computed(() => {
  if (currentStep.value === 1) return 'Continue'
  if (currentStep.value === 2) return 'Continue Payment'
  return 'Confirm Booking'
})

const handleStepClick = (stepIndex: number) => {
  if (stepIndex <= currentStep.value || (stepIndex === 2 && bookedRooms.value.length > 0)) {
    currentStep.value = stepIndex
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Action on Continue Button
const handleContinue = () => {
  if (currentStep.value === 1) {
    if (bookedRooms.value.length === 0) return
    currentStep.value = 2
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (currentStep.value === 2) {
    if (!agreedToTerms.value) {
      alert('Please agree to the Terms & Conditions before proceeding.')
      return
    }
    // Show Important Booking Information Modal first
    showImportantModal.value = true
  }
}

// Action when user confirms Important Information Modal
const handleConfirmBooking = () => {
  showImportantModal.value = false
  currentStep.value = 3
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handlePaymentSubmitted = (paymentData: PaymentForm) => {
  console.log('Payment proof submitted:', paymentData)
}

useSeoMeta({
  title: 'Booking Checkout - Mega Resort Karimunjawa',
  description: 'Complete your reservation details and secure payment for Mega Resort Karimunjawa.',
})
</script>

<template>
  <div class="booking-review-page bg-[#FAFAFA] min-h-screen pb-24 select-none font-sans">
    <div class="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- BREADCRUMB -->
      <nav class="py-5 sm:py-6 flex items-center gap-2 text-xs sm:text-[13px] text-[#98A2B3] font-opensans flex-wrap">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-1.5 hover:text-[#977E5B] transition-colors">
          <Home class="w-3.5 h-3.5" />
          <span>Home</span>
        </NuxtLink>

        <ChevronRight class="w-3.5 h-3.5 text-[#D0D5DD]" />

        <NuxtLink :to="localePath('/booking')" class="flex items-center gap-1.5 hover:text-[#977E5B] transition-colors">
          <Building2 class="w-3.5 h-3.5" />
          <span>Booking Process</span>
        </NuxtLink>

        <ChevronRight class="w-3.5 h-3.5 text-[#D0D5DD]" />

        <div class="flex items-center gap-1.5 text-[#090C10] font-semibold">
          <FileCheck class="w-3.5 h-3.5" />
          <span>Detail Booking</span>
        </div>
      </nav>

      <!-- MULTI-STEP PROGRESS STEPPER -->
      <div class="py-4 sm:py-6 mb-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
          
          <!-- Step 1: Review Your Booking -->
          <div
            class="flex items-center gap-3 shrink-0 cursor-pointer"
            @click="handleStepClick(1)"
          >
            <div
              class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors"
              :class="currentStep >= 1 ? 'bg-[#12B76A] text-white shadow-xs' : 'bg-[#F2F4F7] text-[#667085]'"
            >
              <Check v-if="currentStep >= 1" class="w-4 h-4 stroke-[2.5]" />
              <span v-else class="w-2.5 h-[2px] bg-[#98A2B3] rounded-full inline-block"></span>
            </div>
            <div class="flex flex-col">
              <span class="text-[16px] font-medium leading-snug" :class="currentStep === 1 ? 'text-[#090C10]' : 'text-[#344054]'">
                Review Your Booking
              </span>
              <span class="text-[14px] text-[#717980] leading-normal font-opensans">
                Periksa kembali pesanan Anda.
              </span>
            </div>
          </div>

          <!-- Divider 1 -->
          <div class="hidden md:block flex-1 h-[2px] rounded-full mx-4 lg:mx-6 transition-colors" :class="currentStep >= 2 ? 'bg-[#12B76A]' : 'bg-[#090C101A]'"></div>

          <!-- Step 2: Guest Information -->
          <div
            class="flex items-center gap-3 shrink-0 cursor-pointer"
            @click="handleStepClick(2)"
          >
            <div
              class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors"
              :class="currentStep >= 2 ? 'bg-[#12B76A] text-white shadow-xs' : 'bg-[#F2F4F7] border border-[#EAECF0] text-[#667085]'"
            >
              <Check v-if="currentStep >= 2" class="w-4 h-4 stroke-[2.5]" />
              <span v-else class="w-2.5 h-[2px] bg-[#98A2B3] rounded-full inline-block"></span>
            </div>
            <div class="flex flex-col">
              <span class="text-[16px] font-medium leading-snug" :class="currentStep === 2 ? 'text-[#090C10]' : 'text-[#344054]'">
                Guest Information
              </span>
              <span class="text-[14px] text-[#717980] leading-normal font-opensans">
                Mengisi data diri untuk reservasi.
              </span>
            </div>
          </div>

          <!-- Divider 2 -->
          <div class="hidden md:block flex-1 h-[2px] rounded-full mx-4 lg:mx-6 transition-colors" :class="currentStep >= 3 ? 'bg-[#12B76A]' : 'bg-[#090C101A]'"></div>

          <!-- Step 3: Secure Payment -->
          <div
            class="flex items-center gap-3 shrink-0"
            :class="currentStep >= 3 ? 'cursor-pointer' : ''"
            @click="handleStepClick(3)"
          >
            <div
              class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors"
              :class="currentStep >= 3 ? 'bg-[#12B76A] text-white shadow-xs' : 'bg-[#F2F4F7] border border-[#EAECF0] text-[#667085]'"
            >
              <Check v-if="currentStep >= 3" class="w-4 h-4 stroke-[2.5]" />
              <span v-else class="w-2.5 h-[2px] bg-[#98A2B3] rounded-full inline-block"></span>
            </div>
            <div class="flex flex-col">
              <span class="text-[16px] leading-snug" :class="currentStep === 3 ? 'text-[#090C10] font-semibold' : 'text-[#344054] font-medium'">
                Secure Payment
              </span>
              <span class="text-[14px] text-[#717980] leading-normal font-opensans">
                Selesaikan pembayaran Anda.
              </span>
            </div>
          </div>

        </div>
      </div>

      <!-- ADDITIONAL GUEST CHARGES BANNER (Only on Step 1) -->
      <div v-if="currentStep === 1" class="bg-[#EBFFFE] border border-[#C9FCF3] rounded-[12px] p-3.5 sm:p-4 mb-8 flex items-start gap-3">
        <AlertCircle class="w-4 h-4 text-[#00A9C6] shrink-0 mt-0.5" />
        <div class="flex flex-col gap-0.5">
          <h4 class="text-xs sm:text-[14px] font-normal text-[#00A9C6]">
            Additional Guest Charges May Apply
          </h4>
          <p class="text-[11px] sm:text-[12px] text-[#00A9C6] font-opensans leading-relaxed">
            The displayed total excludes extra guest fees. Additional charges will be calculated during the Guest Information step based on the age and number of guests exceeding the room's standard occupancy.
          </p>
        </div>
      </div>

      <!-- MAIN 2-COLUMN GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- LEFT COLUMN: Step 1, Step 2, OR Step 3 Component -->
        <div class="lg:col-span-7">
          
          <!-- STEP 1: REVIEW YOUR BOOKING -->
          <BookingStepReview
            v-if="currentStep === 1"
            :booked-rooms="bookedRooms"
            :addons="addons"
            @increase-qty="increaseQty"
            @decrease-qty="decreaseQty"
            @remove-room="removeRoom"
            @add-more="handleAddMore"
            @toggle-addon="toggleAddon"
          />

          <!-- STEP 2: COMPLETE YOUR BOOKING (GUEST FORM) -->
          <BookingStepGuestInfo
            v-else-if="currentStep === 2"
            v-model:contact-form="contactForm"
            v-model:stay-details-form="stayDetailsForm"
            v-model:children-details="childrenDetails"
            v-model:dormitory-guests="dormitoryGuests"
            v-model:arrival-transfer="arrivalTransfer"
            v-model:agreed-to-terms="agreedToTerms"
          />

          <!-- STEP 3: COMPLETE YOUR PAYMENT (PAYMENT INSTRUCTIONS & PROOF) -->
          <BookingStepPayment
            v-else-if="currentStep === 3"
            @submit-payment="handlePaymentSubmitted"
          />

        </div>

        <!-- RIGHT COLUMN: Booking Summary Sidebar (Sticky) -->
        <div class="lg:col-span-5">
          <BookingSummaryCard
            :date-range="bookingDate.summaryDateRange"
            :duration="bookingDate.durationText"
            :items="summaryItems"
            :groups="summaryGroups"
            :breakdowns="summaryBreakdowns"
            :total-price="totalPrice"
            :tax-info="'Include All Taxed'"
            :button-text="summaryButtonText"
            :show-button="currentStep !== 3"
            :disabled="!isStepValid"
            :sticky="true"
            @submit="handleContinue"
          />
        </div>

      </div>

      <!-- IMPORTANT BOOKING INFORMATION MODAL (Step 2 Dialog) -->
      <ImportantBookingInfoModal
        v-model="showImportantModal"
        @confirm="handleConfirmBooking"
      />

    </div>
  </div>
</template>

<style scoped>
.booking-review-page {
  padding-top: 88px;
}
@media (max-width: 768px) {
  .booking-review-page {
    padding-top: 76px;
  }
}
</style>
