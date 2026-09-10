<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import { X, Calendar, User, Mail, Phone, CheckCircle2 } from 'lucide-vue-next'

const { t } = useI18n()
const store = useResortStore()

const isSubmitted = ref(false)
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  notes: '',
})

const handleClose = () => {
  store.closeBookingModal()
  setTimeout(() => {
    isSubmitted.value = false
  }, 300)
}

const handleSubmit = () => {
  isSubmitted.value = true
  // Prepare WhatsApp redirection
  const packageName = store.selectedPackage?.title || store.selectedRoom?.fullName || store.selectedRoom?.name || store.selectedVilla?.name || 'Overwater Villa'
  const message = `Hello Mega Resort Karimunjawa! I would like to reserve: ${packageName}%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACheck-In: ${formData.checkIn}%0ACheck-Out: ${formData.checkOut}%0AGuests: ${formData.guests}`
  
  setTimeout(() => {
    if (store.resortData?.contact?.whatsapp) {
      window.open(`https://wa.me/6281234567890?text=${message}`, '_blank')
    }
  }, 1200)
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
        v-if="store.isBookingModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click.self="handleClose"
      >
        <div
          class="relative w-full max-w-lg bg-[#faf7f2] rounded-lg shadow-2xl border border-[#cfaa83]/40 overflow-hidden"
          @click.stop
        >
          <!-- Header -->
          <div class="bg-[#1b1713] text-white p-6 relative">
            <button
              class="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer"
              @click="handleClose"
            >
              <X class="w-6 h-6" />
            </button>
            <span class="text-xs uppercase tracking-[0.2em] text-[#b98e46] font-semibold">
              Mega Resort Karimunjawa
            </span>
            <h3 class="font-luxury text-2xl mt-1 font-semibold">
              {{ t('bookingModal.title') }}
            </h3>
            <p class="text-xs text-white/70 mt-1">
              {{ t('bookingModal.subtitle') }}
            </p>
          </div>

          <!-- Body -->
          <div class="p-6 max-h-[80vh] overflow-y-auto">
            <!-- Selected Item Banner if any -->
            <div
              v-if="store.selectedPackage || store.selectedVilla || store.selectedRoom"
              class="mb-4 p-3 bg-[#f1e4cb]/40 border border-[#b98e46]/30 rounded text-xs text-[#573b24]"
            >
              <span class="font-semibold">Selected:</span>
              {{ store.selectedPackage?.title || store.selectedRoom?.fullName || store.selectedRoom?.name || store.selectedVilla?.name }}
            </div>

            <!-- Success State -->
            <div v-if="isSubmitted" class="py-8 text-center space-y-3">
              <CheckCircle2 class="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
              <h4 class="font-luxury text-xl font-bold text-[#1b1713]">
                Reservation Request Sent!
              </h4>
              <p class="text-sm text-[#715e4a]">
                {{ t('bookingModal.success') }}
              </p>
              <div class="pt-4">
                <button
                  type="button"
                  class="px-6 py-2 bg-[#b98e46] text-white rounded text-sm hover:bg-[#a37936] transition-colors"
                  @click="handleClose"
                >
                  Close
                </button>
              </div>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">
                  {{ t('bookingModal.name') }} *
                </label>
                <div class="relative">
                  <User class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    v-model="formData.name"
                    required
                    type="text"
                    placeholder="e.g. Shasa Putri"
                    class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">
                    {{ t('bookingModal.email') }} *
                  </label>
                  <div class="relative">
                    <Mail class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      v-model="formData.email"
                      required
                      type="email"
                      placeholder="name@email.com"
                      class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">
                    {{ t('bookingModal.phone') }} *
                  </label>
                  <div class="relative">
                    <Phone class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      v-model="formData.phone"
                      required
                      type="tel"
                      placeholder="+62 812..."
                      class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"
                    />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">
                    {{ t('bookingModal.checkIn') }}
                  </label>
                  <div class="relative">
                    <Calendar class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      v-model="formData.checkIn"
                      type="date"
                      class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">
                    {{ t('bookingModal.checkOut') }}
                  </label>
                  <div class="relative">
                    <Calendar class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      v-model="formData.checkOut"
                      type="date"
                      class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                class="w-full mt-2 py-3 bg-[#b98e46] hover:bg-[#9e7336] text-white font-medium text-sm rounded uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                {{ t('bookingModal.submit') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
