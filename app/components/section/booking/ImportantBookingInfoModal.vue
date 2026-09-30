<script setup lang="ts">
import { X } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    title?: string
    description?: string
    confirmText?: string
    cancelText?: string
    imageSrc?: string
  }>(),
  {
    modelValue: false,
    title: 'Important Booking Information',
    description:
      "Please review your booking details carefully. Reservations cannot be canceled once they have been submitted. If you need to change your booking date, please contact our Resort Reservation Team for reschedule assistance. All reschedule requests are subject to availability and the resort's booking policy.",
    confirmText: 'I Understand & Continue',
    cancelText: 'Back to Review',
    imageSrc: '/images/booking/important-booking-info.webp',
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()

const handleClose = () => {
  emit('update:modelValue', false)
  emit('cancel')
}

const handleConfirm = () => {
  emit('confirm')
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
        @click.self="handleClose"
      >
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            class="relative w-[400px] h-[595px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] bg-white rounded-[24px] p-6 sm:p-7 text-center shadow-2xl overflow-hidden flex flex-col items-center justify-between"
          >
            <!-- Close Button (Top Right Optional) -->
            <button
              type="button"
              class="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#98A2B3] hover:text-[#090C10] hover:bg-[#F2F4F7] transition-colors cursor-pointer z-10"
              @click="handleClose"
            >
              <X class="w-4 h-4" />
            </button>

            <!-- Top 3D Illustration -->
            <div class="w-full h-[215px] flex items-center justify-center pt-2 overflow-visible">
              <img
                :src="imageSrc"
                alt="Important Booking Information"
                class="max-h-full w-auto object-contain select-none pointer-events-none scale-110"
              />
            </div>

            <!-- Content (Title & Description) -->
            <div class="flex flex-col items-center px-1">
              <!-- Title -->
              <h3 class="text-lg sm:text-[20px] font-semibold text-[#090C10] font-opensans tracking-tight">
                {{ title }}
              </h3>

              <!-- Description -->
              <p class="text-xs sm:text-[14px] text-[#717680] font-opensans leading-relaxed mt-2.5">
                {{ description }}
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="w-full space-y-2.5 pt-2">
              <!-- Primary: I Understand & Continue -->
              <button
                type="button"
                class="w-full h-[46px] rounded-[12px] bg-[#937A54] hover:bg-[#886F4A] text-white font-opensans text-sm sm:text-[15px] font-normal transition-all duration-200 cursor-pointer flex items-center justify-center active:scale-[0.99] border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)]"
                @click="handleConfirm"
              >
                {{ confirmText }}
              </button>

              <!-- Secondary: Back to Review -->
              <button
                type="button"
                class="w-full h-[46px] rounded-[12px] bg-white hover:bg-[#FAF8F5] text-[#977E5B] font-opensans text-sm sm:text-[15px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-center active:scale-[0.99] border border-[#E9EAEB]"
                @click="handleClose"
              >
                {{ cancelText }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
