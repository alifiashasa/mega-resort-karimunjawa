<script setup lang="ts">
import {
  Calendar,
  CalendarDays,
  Compass,
  AlertCircle,
  Check,
  Users,
  ChevronDown,
} from 'lucide-vue-next'

export interface ContactForm {
  fullName: string
  email: string
  phone: string
  notes: string
}

export interface StayDetailsForm {
  checkIn: string
  checkOut: string
  nights: number
}

export interface ChildrenDetailsForm {
  enabled: boolean
  count: number
}

export interface DormitoryGuest {
  fullName: string
  email: string
  phone: string
}

export interface ArrivalTransferForm {
  enabled: boolean
  pickupLocation: string
  arrivalTime: string
  specialRequests: string
}

const contactForm = defineModel<ContactForm>('contactForm', { required: true })
const stayDetailsForm = defineModel<StayDetailsForm>('stayDetailsForm', { required: true })
const childrenDetails = defineModel<ChildrenDetailsForm>('childrenDetails', {
  default: () => ({ enabled: false, count: 1 }),
})
const dormitoryGuests = defineModel<DormitoryGuest[]>('dormitoryGuests', { required: true })
const arrivalTransfer = defineModel<ArrivalTransferForm>('arrivalTransfer', { required: true })
const agreedToTerms = defineModel<boolean>('agreedToTerms', { required: true })
</script>

<template>
  <div class="space-y-8">
    <!-- Page Header -->
    <div>
      <h1 class="text-xl sm:text-[28px] font-semibold text-[#090C10] font-spartan tracking-tight">
        Complete Your Booking
      </h1>
      <p class="text-xs sm:text-[16px] text-[#757575] font-opensans mt-1 leading-relaxed">
        You're just one step away from confirming your stay. Please review your details and fill in the required information.
      </p>
    </div>

    <!-- 1. Booking Contact Information -->
    <div class="space-y-4">
      <div class="flex items-center gap-2.5">
        <span class="w-[3px] h-5 bg-[#977E5B] rounded-full inline-block"></span>
        <h3 class="text-base sm:text-[18px] font-semibold text-[#090C10] font-opensans">
          Booking Contact Information
        </h3>
      </div>

      <div class="space-y-4">
        <!-- Full Name -->
        <div>
          <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
            Full Name <span class="text-[#D92D20]">*</span>
          </label>
          <input
            v-model="contactForm.fullName"
            type="text"
            placeholder="Enter your name"
            class="w-full h-[40px] px-3.5 bg-white border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#090C10] placeholder-[#717680] focus:outline-none focus:border-[#977E5B] focus:ring-1 focus:ring-[#977E5B] font-opensans transition-all"
          />
        </div>

        <!-- Email & Phone Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
              Email <span class="text-[#D92D20]">*</span>
            </label>
            <input
              v-model="contactForm.email"
              type="email"
              placeholder="Enter your email address"
              class="w-full h-[40px] px-3.5 bg-white border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#090C10] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] focus:ring-1 focus:ring-[#977E5B] font-opensans transition-all"
            />
          </div>
          <div>
            <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
              Phone Number <span class="text-[#D92D20]">*</span>
            </label>
            <input
              v-model="contactForm.phone"
              type="tel"
              placeholder="Enter your phone number"
              class="w-full h-[40px] px-3.5 bg-white border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#090C10] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] focus:ring-1 focus:ring-[#977E5B] font-opensans transition-all"
            />
          </div>
        </div>

        <!-- Additional Notes -->
        <div>
          <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
            Additional Notes <span class="text-[#D5D7DA] font-normal">(Optional)</span>
          </label>
          <textarea
            v-model="contactForm.notes"
            rows="3"
            placeholder="Add additional notes for mega resort karimunjawa"
            class="w-full p-3 bg-white border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#090C10] placeholder-[#D5D7DA] focus:outline-none focus:border-[#977E5B] focus:ring-1 focus:ring-[#977E5B] font-opensans transition-all resize-none"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- 2. Stay Details -->
    <div class="space-y-4 pt-2">
      <div class="flex items-center gap-2.5">
        <span class="w-[3px] h-5 bg-[#977E5B] rounded-full inline-block"></span>
        <h3 class="text-base sm:text-[18px] font-semibold text-[#090C10] font-opensans">
          Stay Details
        </h3>
      </div>

      <!-- Check-in & Check-out Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
            Select Check-in Date <span class="text-[#D92D20]">*</span>
          </label>
          <div class="relative">
            <input
              v-model="stayDetailsForm.checkIn"
              type="date"
              class="w-full h-[46px] pl-11 pr-4 bg-white rounded-[14px] text-sm sm:text-[15px] text-[#090C10] font-opensans focus:outline-none focus:ring-1 focus:ring-[#977E5B] shadow-button-outlined-default transition-all cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
            <CalendarDays class="w-5 h-5 text-[#090C10] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
        <div>
          <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
            Select Check-out Date <span class="text-[#D92D20]">*</span>
          </label>
          <div class="relative">
            <input
              v-model="stayDetailsForm.checkOut"
              type="date"
              class="w-full h-[46px] pl-11 pr-4 bg-white rounded-[14px] text-sm sm:text-[15px] text-[#090C10] font-opensans focus:outline-none focus:ring-1 focus:ring-[#977E5B] shadow-button-outlined-default transition-all cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
            <CalendarDays class="w-5 h-5 text-[#090C10] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <!-- Number of Night -->
      <div>
        <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
          Number of Night
        </label>
        <input
          :value="stayDetailsForm.nights"
          type="text"
          disabled
          class="w-full h-[40px] px-3.5 bg-[#F9FAFB] border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#090C10] font-opensans cursor-not-allowed"
        />
      </div>

      <!-- Room Capacity Status in Room Total -->
      <div class="bg-white border border-[#E9EAEB] rounded-[16px] p-4 sm:p-5 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-[10px] bg-[#FAF8F5] border border-[#F4EEE3] flex items-center justify-center text-[#977E5B] shrink-0">
              <Users class="w-5 h-5 text-[#977E5B]" />
            </div>
            <div>
              <h4 class="text-sm sm:text-[16px] font-semibold text-[#090C10] font-opensans">
                Room Capacity Status in Room Total
              </h4>
            </div>
          </div>
          <div class="px-3 py-1 bg-[#ECFDF3] text-[#027A48] text-xs sm:text-[14px] font-medium rounded-full font-opensans flex items-center gap-1.5 shrink-0">
            <span>2 / 2 Included</span>
          </div>
        </div>
        <p class="text-xs sm:text-[14px] text-[#717680] font-opensans leading-relaxed">
          The room rate includes standard room capacity. If you stay with more than 2 persons, additional guest or extra bed fees may apply during check-in.
        </p>
      </div>
    </div>

    <!-- 3. Children Staying in the Room -->
    <div class="space-y-4 pt-2">
      <div class="flex items-center gap-2.5">
        <span class="w-[3px] h-5 bg-[#977E5B] rounded-full inline-block"></span>
        <h3 class="text-base sm:text-[18px] font-semibold text-[#090C10] font-opensans">
          Children Staying in the Room
        </h3>
      </div>

      <!-- Toggle Checkbox -->
      <label class="flex items-start gap-3 cursor-pointer group select-none">
        <input
          v-model="childrenDetails.enabled"
          type="checkbox"
          class="sr-only peer"
        />
        <div class="w-5 h-5 mt-0.5 rounded-[8px] border border-[#D0D5DD] bg-white flex items-center justify-center shrink-0 transition-all duration-150 peer-checked:bg-[#977E5B] peer-checked:border-[#977E5B] peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100 group-hover:border-[#977E5B]">
          <Check class="w-3 h-3 text-white stroke-[3.5] opacity-0 scale-75 transition-all duration-150" />
        </div>
        <div class="flex flex-col">
          <span class="text-sm sm:text-[15px] font-normal text-[#090C10] font-opensans group-hover:text-[#977E5B] transition-colors">
            Add Children Details
          </span>
          <span class="text-xs sm:text-[13px] text-[#717680] font-opensans mt-0.5 leading-relaxed">
            Declare children staying in the room for extra guest registration.
          </span>
        </div>
      </label>

      <!-- Children Details Form (Dropdown & Info) -->
      <div v-if="childrenDetails.enabled" class="space-y-4 pt-1">
        <div>
          <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
            Number of Children
          </label>
          <div class="relative">
            <select
              v-model="childrenDetails.count"
              class="w-full h-[40px] px-3.5 bg-white border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#090C10] font-opensans focus:outline-none focus:border-[#977E5B] appearance-none cursor-pointer"
            >
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3</option>
              <option :value="4">4</option>
            </select>
            <ChevronDown class="w-4 h-4 text-[#667085] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <!-- Info Banner Cyan -->
        <div class="bg-[#EBFFFE] border border-[#C9FCF3] rounded-[12px] p-3.5 sm:p-4 flex items-center gap-3">
          <AlertCircle class="w-5 h-5 text-[#00A9C6] shrink-0" />
          <p class="text-xs sm:text-[14px] text-[#00A9C6] font-opensans font-normal">
            Up to 2 children can stay in this room. Additional charges may apply depending on the child's age.
          </p>
        </div>
      </div>
    </div>

    <!-- 4. Dormitory Guest Information -->
    <div class="space-y-4 pt-2">
      <div class="flex items-center gap-2.5">
        <span class="w-[3px] h-5 bg-[#977E5B] rounded-full inline-block"></span>
        <h3 class="text-base sm:text-[18px] font-semibold text-[#090C10] font-opensans">
          Dormitory Guest Information
        </h3>
      </div>

      <p class="text-xs sm:text-[14px] text-[#717680] font-opensans leading-relaxed">
        Please provide details for each guest staying in the dormitory. The guest count form below is automatically generated based on the number of guests previously selected. Prices are calculated per guest.
      </p>

      <!-- Dormitory Guests List -->
      <div
        v-for="(guest, index) in dormitoryGuests"
        :key="index"
        :class="['space-y-3', index === 0 ? 'pt-2' : 'pt-3']"
      >
        <h4 class="text-sm sm:text-[15px] font-semibold text-[#090C10] font-opensans">
          Guest Room {{ index + 1 }}
        </h4>
        <div>
          <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
            Full Name <span class="text-[#D92D20]">*</span>
          </label>
          <input
            v-model="guest.fullName"
            type="text"
            placeholder="Enter your name"
            class="w-full h-[40px] px-3.5 bg-white border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#090C10] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] font-opensans"
          />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
              Email
            </label>
            <input
              v-model="guest.email"
              type="email"
              placeholder="Enter your email address"
              class="w-full h-[40px] px-3.5 bg-white border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#090C10] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] font-opensans"
            />
          </div>
          <div>
            <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
              Phone Number <span class="text-[#D92D20]">*</span>
            </label>
            <input
              v-model="guest.phone"
              type="tel"
              placeholder="Enter your phone number"
              class="w-full h-[40px] px-3.5 bg-white border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#090C10] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] font-opensans"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 4. Arrival Transfer Service -->
    <div class="space-y-4 pt-2">
      <div class="flex items-center gap-2.5">
        <span class="w-[3px] h-5 bg-[#977E5B] rounded-full inline-block"></span>
        <h3 class="text-base sm:text-[18px] font-semibold text-[#090C10] font-opensans">
          Arrival Transfer Service
        </h3>
      </div>

      <!-- Radio Option / Checkbox -->
      <label class="flex items-start gap-3 cursor-pointer group select-none">
        <input
          v-model="arrivalTransfer.enabled"
          type="checkbox"
          class="sr-only peer"
        />
        <div class="w-5 h-5 mt-2 rounded-[8px] border border-[#D0D5DD] bg-white flex items-center justify-center shrink-0 transition-all duration-150 peer-checked:bg-[#977E5B] peer-checked:border-[#977E5B] peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100 group-hover:border-[#977E5B]">
          <Check class="w-3 h-3 text-white stroke-[3.5] opacity-0 scale-75 transition-all duration-150" />
        </div>
        <div class="flex flex-col">
          <span class="text-sm sm:text-[15px] font-normal text-[#090C10] font-opensans group-hover:text-[#977E5B] transition-colors">
            Add Arrival Transfer
          </span>
          <span class="text-xs sm:text-[13px] text-[#717680] font-opensans mt-0.5 leading-relaxed">
            We provide complimentary transfers between the resort and the harbour or your arrival point directly to the resort.
          </span>
        </div>
      </label>

      <!-- Transfer Form Inputs -->
      <div class="space-y-4 pt-1">
        <div>
          <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
            Pickup Location <span class="text-[#D92D20]">*</span>
          </label>
          <input
            v-model="arrivalTransfer.pickupLocation"
            type="text"
            placeholder="Enter your pick-up point"
            class="w-full h-[40px] px-3.5 bg-[#EDEDED] border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#9E9E9E] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] font-opensans transition-all"
          />
        </div>

        <div>
          <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
            Estimated Arrival Time <span class="text-[#D92D20]">*</span>
          </label>
          <input
            v-model="arrivalTransfer.arrivalTime"
            type="text"
            placeholder="Enter your arrival time"
            class="w-full h-[40px] px-3.5 bg-[#EDEDED] border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#9E9E9E] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] font-opensans transition-all"
          />
        </div>

        <div>
          <label class="block text-xs sm:text-[14px] font-medium text-[#344054] mb-1.5 font-opensans">
            Special Requests <span class="text-[#D5D7DA] font-normal">(Optional / Add-ons)</span>
          </label>
          <textarea
            v-model="arrivalTransfer.specialRequests"
            rows="3"
            placeholder="Enter any additional information for the pickup team"
            class="w-full p-3 bg-[#F5F5F5] border border-[#E9EAEB] rounded-[8px] text-sm sm:text-[14px] text-[#A4A7AE] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] font-opensans transition-all resize-none"
          ></textarea>
        </div>

        <!-- Info Cyan Banner -->
        <div class="bg-[#EBFFFE] border border-[#C9FCF3] rounded-[12px] p-3.5 sm:p-4 flex items-center gap-3">
          <AlertCircle class="w-5 h-5 text-[#00A9C6] shrink-0" />
          <p class="text-xs sm:text-[16px] text-[#00A9C6] font-opensans font-normal">
            Our team will contact you prior to arrival to confirm arrangements and schedules.
          </p>
        </div>
      </div>
    </div>

    <!-- 5. Terms & Conditions Mega Resort Karimunjawa -->
    <div class="bg-[#FFFEEB] rounded-[16px] p-5 sm:p-6 space-y-7">
      <div class="flex items-center gap-2 text-[#FF9F3F]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6 text-[#FF9F3F] shrink-0"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
        <h3 class="text-sm sm:text-[20px] font-semibold font-opensans">
          Terms & Conditions Mega Resort Karimunjawa
        </h3>
      </div>

      <div class="text-xs sm:text-[16px] text-[#717680] font-opensans space-y-7 leading-relaxed">
        <p>
          Please ensure all booking details, including guest information, stay dates, and selected services, are accurate before completing your reservation.
        </p>
        <p>
          Room rates include accommodation based on the room capacity stated in the booking details. Additional guests or optional services may incur extra charges.
        </p>
        <p>
          Check-in and check-out times are subject to the resort's operational policies. Special requests are subject to availability.
        </p>
        <p>
          Shuttle and pickup services must be confirmed no later than 1 day before (H-1) the reservation date.
        </p>
        <p>
          The resort provides a friend shuttle boat service exclusively between Batu Putih and Mega Resort. Guests are responsible for arranging their own transportation to Batu Putih. Please share your arrival details with our reservation team via WhatsApp in advance to schedule your shuttle transfer.
        </p>
        <p>
          Once a reservation has been confirmed, it cannot be canceled. If you need to modify your travel dates, please contact our reservation team via WhatsApp. We will assist you with a reschedule, subject to availability and the applicable booking policy.
        </p>
        <p>
          By proceeding with this reservation, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
        </p>
      </div>
    </div>

    <!-- 6. Agreement Checkbox -->
    <div class="pt-1">
      <label class="flex items-start gap-3 cursor-pointer group select-none">
        <input
          v-model="agreedToTerms"
          type="checkbox"
          class="sr-only peer"
        />
        <div class="w-5 h-5 mt-0.5 rounded-[8px] border border-[#D0D5DD] bg-white flex items-center justify-center shrink-0 transition-all duration-150 peer-checked:bg-[#977E5B] peer-checked:border-[#977E5B] peer-checked:[&_svg]:opacity-100 peer-checked:[&_svg]:scale-100 group-hover:border-[#977E5B]">
          <Check class="w-3 h-3 text-white stroke-[3.5] opacity-0 scale-75 transition-all duration-150" />
        </div>
        <span class="text-xs sm:text-[16px] text-[#090C10] font-opensans leading-snug group-hover:text-[#090C10] transition-colors">
          By ordering, I agree to the terms & conditions set by Mega Resort KarimunJawa
        </span>
      </label>
    </div>
  </div>
</template>
