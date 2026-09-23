<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { X, Clock, UserCheck, Palmtree } from 'lucide-vue-next'
import { useResortStore } from '~/stores/resortStore'

export interface FunDivingModalData {
  title?: string
  description?: string
  image?: string
  duration?: string
  diveOption?: string
  experience?: string
  equipment?: string
  pricing?: Array<{
    name: string
    price: string
    unit?: string
  }>
  experienceNoteTitle?: string
  experienceNoteDesc?: string
}

interface Props {
  modelValue: boolean
  data?: FunDivingModalData | null
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  data: null,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const store = useResortStore()

const defaultData: FunDivingModalData = {
  title: 'Per Dive Experience',
  description: 'Enjoy full flexibility with single dive options, perfect if you prefer a short and customizable diving experience based on your schedule.',
  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
  duration: '+ 1 dive session',
  diveOption: '3 Type',
  experience: 'Certified Dive only',
  equipment: 'included',
  pricing: [
    { name: 'Shore Dive', price: 'Rp 800.000', unit: '/ dive' },
    { name: 'Boat Dive', price: 'Rp 1.000.000', unit: '/ dive' },
    { name: 'Night Dive', price: 'Rp 1.000.000', unit: '/ dive' },
  ],
  experienceNoteTitle: "What You'll Experience",
  experienceNoteDesc: 'Explore multiple dive sites with greater flexibility and better value. Ideal for those who want a more immersive diving experience and the opportunity to discover a wider range of underwater landscapes.',
}

const activeData = computed(() => {
  return {
    title: props.data?.title || defaultData.title,
    description: props.data?.description || defaultData.description,
    image: props.data?.image || defaultData.image,
    duration: props.data?.duration || defaultData.duration,
    diveOption: props.data?.diveOption || defaultData.diveOption,
    experience: props.data?.experience || defaultData.experience,
    equipment: props.data?.equipment || defaultData.equipment,
    pricing: props.data?.pricing && props.data.pricing.length > 0 ? props.data.pricing : defaultData.pricing,
    experienceNoteTitle: props.data?.experienceNoteTitle || defaultData.experienceNoteTitle,
    experienceNoteDesc: props.data?.experienceNoteDesc || defaultData.experienceNoteDesc,
  }
})

const closeModal = () => {
  emit('update:modelValue', false)
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    closeModal()
  }
}

watch(
  () => props.modelValue,
  (val) => {
    if (typeof document !== 'undefined') {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  }
)

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = ''
  }
})

const handleBooking = (item: { name: string; price: string }) => {
  closeModal()
  store.openBookingModal({
    id: 6,
    title: `Fun Diving - ${item.name} (${item.price})`,
  } as any)
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <!-- Modal Card Container -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-3"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-3"
        >
          <div
            v-if="modelValue"
            class="relative w-full max-w-[540px] bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl my-auto max-h-[92vh] flex flex-col font-sans animate-in"
            @click.stop
          >
            <!-- Close Button -->
            <button
              type="button"
              class="absolute top-4 right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95 shadow-md"
              aria-label="Close dialog"
              @click="closeModal"
            >
              <X class="w-5 h-5 text-white" />
            </button>

            <!-- Scrollable Content -->
            <div class="overflow-y-auto overscroll-contain flex-1">
              <!-- Top Banner with Underwater Diver Image & Dark Gradient -->
              <div class="relative w-full h-[250px] sm:h-[280px] bg-[#021024] flex flex-col justify-end overflow-hidden">
                <img
                  :src="activeData.image"
                  :alt="activeData.title"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                />
                <!-- Dark Gradient for Text Contrast -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#021024] via-[#021024]/45 to-transparent pointer-events-none" />

                <!-- Banner Text Content -->
                <div class="relative z-10 p-5 sm:p-7 pt-12 text-white">
                  <h3 class="text-xl sm:text-[24px] lg:text-[26px] font-bold text-white leading-snug mb-2 font-spartan">
                    {{ activeData.title }}
                  </h3>
                  <p class="text-xs sm:text-[13.5px] text-white/90 leading-relaxed font-normal max-w-[460px]">
                    {{ activeData.description }}
                  </p>
                </div>
              </div>

              <!-- 4 Feature Badges Bar -->
              <div class="grid grid-cols-4 gap-1 sm:gap-2 px-3 sm:px-6 py-5 bg-white border-b border-[#F0F0F0] text-center items-start">
                <!-- 1. Duration -->
                <div class="flex flex-col items-center">
                  <div class="w-7 h-7 flex items-center justify-center text-[#8C7351]">
                    <Clock class="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span class="text-xs sm:text-[13px] font-bold text-[#8C7351] mt-1 tracking-tight">Duration</span>
                  <span class="text-[11px] sm:text-xs text-[#717680] mt-0.5 leading-tight">{{ activeData.duration }}</span>
                </div>

                <!-- 2. Dive Option -->
                <div class="flex flex-col items-center">
                  <div class="w-7 h-7 flex items-center justify-center text-[#8C7351]">
                    <!-- Diver / Swimmer Wave Icon -->
                    <svg
                      class="w-5 h-5 stroke-[1.8]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 19c2-1 4-1 6 0 2 1 4 1 6 0 2-1 4-1 6 0" />
                      <path d="M7 14c2-1 4-1 6 0 2 1 4 1 6 0" />
                      <circle cx="17.5" cy="5.5" r="2.5" />
                      <path d="M7 8.5l4.5 2.5 3.5-3" />
                    </svg>
                  </div>
                  <span class="text-xs sm:text-[13px] font-bold text-[#8C7351] mt-1 tracking-tight">Dive Option</span>
                  <span class="text-[11px] sm:text-xs text-[#717680] mt-0.5 leading-tight">{{ activeData.diveOption }}</span>
                </div>

                <!-- 3. Experience -->
                <div class="flex flex-col items-center">
                  <div class="w-7 h-7 flex items-center justify-center text-[#8C7351]">
                    <UserCheck class="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span class="text-xs sm:text-[13px] font-bold text-[#8C7351] mt-1 tracking-tight">Experience</span>
                  <span class="text-[11px] sm:text-xs text-[#717680] mt-0.5 leading-tight">{{ activeData.experience }}</span>
                </div>

                <!-- 4. Equipment -->
                <div class="flex flex-col items-center">
                  <div class="w-7 h-7 flex items-center justify-center text-[#8C7351]">
                    <!-- Scuba Oxygen Tank with O2 Icon -->
                    <svg
                      class="w-5 h-5 stroke-[1.8]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="7" y="6" width="7" height="14" rx="3.5" />
                      <path d="M10.5 2v4" />
                      <path d="M9 2h3" />
                      <text x="16.5" y="10" font-size="5.5" font-family="sans-serif" font-weight="bold" fill="currentColor" stroke="none">O₂</text>
                    </svg>
                  </div>
                  <span class="text-xs sm:text-[13px] font-bold text-[#8C7351] mt-1 tracking-tight">Equipment</span>
                  <span class="text-[11px] sm:text-xs text-[#717680] mt-0.5 leading-tight">{{ activeData.equipment }}</span>
                </div>
              </div>

              <!-- Dive Pricing Card Container -->
              <div class="p-4 sm:p-6 pb-2">
                <div class="border border-[#E5E7EB] rounded-[18px] sm:rounded-[20px] p-4 sm:p-5 bg-white shadow-xs">
                  <h4 class="text-base sm:text-lg lg:text-[19px] font-bold text-[#8C7351] mb-3.5 font-spartan">
                    Dive Pricing
                  </h4>

                  <div class="divide-y divide-[#F0F0F0]">
                    <div
                      v-for="(item, idx) in activeData.pricing"
                      :key="idx"
                      class="py-3 sm:py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-3"
                    >
                      <!-- Left: Diver Avatar & Title -->
                      <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EBF3FE] flex items-center justify-center shrink-0 border border-[#D5E5FC]">
                          <!-- Scuba Diver Avatar Icon -->
                          <svg
                            class="w-5 h-5 text-[#2563EB]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="8" r="4" fill="#BFDBFE" />
                            <!-- Goggles mask -->
                            <rect x="8.5" y="6.5" width="7" height="3" rx="1.5" fill="#2563EB" stroke="#1D4ED8" stroke-width="0.5" />
                            <circle cx="10" cy="8" r="0.75" fill="#FFFFFF" />
                            <circle cx="14" cy="8" r="0.75" fill="#FFFFFF" />
                            <!-- Body shoulders -->
                            <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
                          </svg>
                        </div>
                        <span class="text-xs sm:text-[14px] font-semibold text-[#1F2937] truncate">
                          {{ item.name }}
                        </span>
                      </div>

                      <!-- Middle: Price -->
                      <div class="text-right whitespace-nowrap">
                        <span class="text-xs sm:text-[14px] font-bold text-[#111827]">
                          {{ item.price }}
                        </span>
                        <span class="text-[11px] sm:text-xs text-[#717680] font-normal ml-0.5">
                          {{ item.unit || '/ dive' }}
                        </span>
                      </div>

                      <!-- Right: Booking Now Button -->
                      <button
                        type="button"
                        class="shrink-0 bg-[#8C7351] hover:bg-[#786141] active:scale-95 text-white text-xs sm:text-[13px] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-[10px] shadow-sm transition-all duration-200 cursor-pointer"
                        @click="handleBooking(item)"
                      >
                        Booking Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bottom "What You'll Experience" Box -->
              <div class="px-4 sm:px-6 pb-5 sm:pb-6">
                <div class="bg-[#FFF9EB] border border-[#F3E8CE] rounded-[18px] sm:rounded-[20px] p-4 sm:p-5 flex items-start gap-3 sm:gap-4 shadow-xs">
                  <!-- Island / Palmtree Icon -->
                  <div class="w-7 h-7 shrink-0 text-[#8C7351] flex items-center justify-center mt-0.5">
                    <!-- Island Palm SVG -->
                    <svg
                      class="w-6 h-6 stroke-[1.8]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 21a9 9 0 0 0 9-3H3a9 9 0 0 0 9 3z" />
                      <path d="M12 18V8" />
                      <path d="M12 8c-2.5-3-6-2.5-8-1 1.5 2.5 4 3 8 1z" />
                      <path d="M12 8c2.5-3 6-2.5 8-1-1.5 2.5-4 3-8 1z" />
                      <path d="M12 11c-2-2-4.5-1.5-6-.5 1 2 3 2.5 6 .5z" />
                    </svg>
                  </div>

                  <!-- Text Details -->
                  <div class="space-y-1">
                    <h5 class="text-xs sm:text-[14.5px] font-bold text-[#8C7351] font-spartan">
                      {{ activeData.experienceNoteTitle }}
                    </h5>
                    <p class="text-xs sm:text-[12.5px] text-[#6B7280] leading-relaxed font-normal">
                      {{ activeData.experienceNoteDesc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
