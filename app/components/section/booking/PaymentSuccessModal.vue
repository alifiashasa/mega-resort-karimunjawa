<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLocalePath } from '#imports'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const router = useRouter()
const localePath = useLocalePath()

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleBackToHome = () => {
  emit('update:modelValue', false)
  emit('close')
  router.push(localePath('/'))
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
            class="relative w-[400px] h-[515px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)] bg-white rounded-[24px] pt-2 px-6 pb-6 sm:pt-3 sm:px-8 sm:pb-8 text-center shadow-2xl flex flex-col items-center justify-between"
          >
            <!-- Content Top & Middle -->
            <div class="flex flex-col items-center justify-start flex-1 w-full">
              <!-- Badge Illustration Image -->
              <div class="w-full h-[245px] flex items-center justify-center overflow-visible">
                <img
                  src="/images/booking/payment-success.webp"
                  alt="Payment Success"
                  class="w-full h-full object-contain scale-110 transform"
                />
              </div>

              <!-- Title & Subtitle -->
              <div class="mt-1">
                <h3 class="text-base sm:text-[20px] font-semibold text-[#090C10] font-spartan">
                  Payment Submitted Successfully
                </h3>
                <p class="text-xs sm:text-[14px] text-[#717980] font-opensans mt-1.5 leading-relaxed max-w-[320px] mx-auto">
                  Your payment proof has been received. Our team will verify your payment within less than 24 hours.
                </p>
              </div>
            </div>

            <!-- Buttons Action with Divider -->
            <div class="w-[calc(100%+48px)] sm:w-[calc(100%+64px)] -mx-6 sm:-mx-8 px-6 sm:px-8 pt-4 sm:pt-5 border-t border-[#F2F4F7] space-y-2.5">
              <button
                type="button"
                class="w-full py-3 px-5 rounded-[12px] bg-[#937A54] hover:bg-[#886F4A] text-white font-opensans text-xs sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.99] border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)]"
                @click="handleBackToHome"
              >
                Back to Beranda
              </button>

              <button
                type="button"
                class="w-full py-3 px-5 rounded-[12px] bg-white border border-[#D0D5DD] hover:bg-[#F9FAFB] text-[#344054] font-opensans text-xs sm:text-[14px] font-medium transition-colors cursor-pointer"
                @click="handleClose"
              >
                Cancel
              </button>
            </div>

          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
