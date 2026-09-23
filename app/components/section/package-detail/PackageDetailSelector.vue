<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface BoatOption {
  id: number
  title: string
  price: string
  description: string
  image: string
}

interface ExtendedBoatOption extends BoatOption {
  _key: string
  realIndex: number
}

interface Props {
  eyebrow?: string
  title?: string
  options?: BoatOption[]
  isClickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Choose Your Boat Experience',
  title: 'Select the perfect boat based on your group size, comfort, and preferred way to explore the sea.',
  isClickable: false,
  options: () => [
    {
      id: 1,
      title: 'Per Dive Experience',
      price: '$ 50 - 60 (Rp 800.000 - 1.040.000)',
      description: 'Enjoy full flexibility with single dive options, perfect if you prefer a short and customizable diving experience based on your schedule.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'Full Day Island Boat',
      price: '$ 80 - 120 (Rp 1.200.000 - 1.800.000)',
      description: 'Explore scenic islands and coral gardens with comfortable seating and dedicated private crew.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: 'Private Charter Boat',
      price: '$ 120 - 180 (Rp 1.800.000 - 2.800.000)',
      description: 'Exclusive private vessel charter tailored for families and private groups exploring Karimunjawa.',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    },
  ],
})

const emit = defineEmits<{
  (e: 'card-click', item: BoatOption): void
}>()

// Index 1 corresponds to the first real option (index 0 is the prepended clone)
const currentIndex = ref(1)
// Flag untuk menonaktifkan semua CSS transisi saat loop reset (instant & seamless)
const isResetting = ref(false)
const isSliding = ref(false)

// Fixed active card dimensions (px) — gap between cards = 24px
const ACTIVE_CARD_WIDTH = 945
const CARD_GAP = 24

// Extended options with clones on both sides:
// [Clone(N-1), Item 0, Item 1, ..., Item N-1, Clone(0), Clone(1)]
const extendedOptions = computed<ExtendedBoatOption[]>(() => {
  const opts = props.options
  if (!opts || opts.length === 0) return []
  const n = opts.length

  const firstOpt = opts[0]
  const lastOpt = opts[n - 1]
  const secondOpt = opts[1 % n]

  if (!firstOpt || !lastOpt || !secondOpt) return []

  return [
    { ...lastOpt, _key: `clone-prev-${lastOpt.id}`, realIndex: n - 1 },
    ...opts.map((opt, i) => ({ ...opt, _key: `real-${opt.id}`, realIndex: i })),
    { ...firstOpt, _key: `clone-next-0-${firstOpt.id}`, realIndex: 0 },
    { ...secondOpt, _key: `clone-next-1-${secondOpt.id}`, realIndex: 1 % n },
  ]
})

const translateX = computed(() => {
  return currentIndex.value * (ACTIVE_CARD_WIDTH + CARD_GAP)
})

// Inline style untuk flex track
const trackStyle = computed(() => ({
  transform: `translateX(-${translateX.value}px)`,
  transition: isResetting.value
    ? 'none'
    : 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
}))

const prevSlide = () => {
  if (isSliding.value || !props.options?.length) return
  isSliding.value = true
  currentIndex.value--

  setTimeout(() => {
    if (currentIndex.value <= 0) {
      // Reached prepended clone -> snap to real last item
      isResetting.value = true
      currentIndex.value = props.options?.length ?? 1
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isResetting.value = false
          isSliding.value = false
        })
      })
    } else {
      isSliding.value = false
    }
  }, 500)
}

const nextSlide = () => {
  if (isSliding.value || !props.options?.length) return
  const total = props.options.length
  isSliding.value = true
  currentIndex.value++

  setTimeout(() => {
    if (currentIndex.value >= total + 1) {
      // Reached appended clone -> snap to real first item
      isResetting.value = true
      currentIndex.value = 1
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isResetting.value = false
          isSliding.value = false
        })
      })
    } else {
      isSliding.value = false
    }
  }, 500)
}

const handleCardClick = (item: ExtendedBoatOption, index: number) => {
  if (!props.isClickable) return
  if (index === currentIndex.value) {
    const originalOption = props.options?.find(o => o.id === item.id) || item
    emit('card-click', originalOption)
  } else if (index > currentIndex.value) {
    nextSlide()
  } else {
    prevSlide()
  }
}
</script>

<template>
  <section class="py-14 sm:py-16 lg:py-20 bg-white select-none overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">

      <!-- Section Header -->
      <div class="max-w-4xl lg:max-w-5xl mb-8 sm:mb-10">
        <p class="font-sans text-xs sm:text-[16px] text-[#717680] font-normal tracking-normal mb-2.5">
          {{ eyebrow }}
        </p>
        <h2 class="font-spartan text-2xl sm:text-[32px] lg:text-[42px] font-semibold text-[#977E5B] leading-[1.25] tracking-[-0.01em]">
          {{ title }}
        </h2>
      </div>

      <!--
        Outer wrapper:
        - relative  → anchor for absolutely-positioned arrow buttons
        - pb-[52px] → reserve space below the card area for the brown next button
      -->
      <div class="relative h-[504px]">

        <!-- ── Left Arrow: light grey, outside left edge, centered on active card height ── -->
        <button
          type="button"
          class="absolute left-[-52px]
                 top-[252px] -translate-y-1/2
                 w-9 h-9 sm:w-10 sm:h-10
                 rounded-full bg-[#EDEDED] hover:bg-[#E0E0E0]
                 flex items-center justify-center
                 shadow-md transition-all duration-200 cursor-pointer active:scale-95 z-20"
          aria-label="Previous Option"
          @click="prevSlide"
        >
          <ChevronLeft class="w-5 h-5 text-[#808080]" />
        </button>

        <!--
          White left mask: covers everything to the left of the active card area.
          The section's overflow-hidden handles right-side clipping at the viewport edge.
        -->
        <div class="absolute top-0 right-full w-[2000px] h-full bg-white pointer-events-none z-[15]" />

        <!-- ── Track container: no overflow-hidden → right preview bleeds to section/viewport edge ── -->
        <div class="w-full h-full">
          <div
            class="flex gap-6 items-start"
            :style="trackStyle"
          >
            <div
              v-for="(item, index) in extendedOptions"
              :key="item._key"
              class="relative shrink-0 w-[945px] rounded-[20px]
                     overflow-hidden group shadow-sm bg-[#1f1a16]"
              :class="[
                index === currentIndex ? 'h-[504px]' : 'h-[350px]',
                isResetting ? '' : 'transition-[height] duration-500 ease-out',
                isClickable ? 'cursor-pointer' : '',
                isClickable && index === currentIndex ? 'hover:shadow-xl' : ''
              ]"
              @click="handleCardClick(item, index)"
            >
              <!-- Background Image -->
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover object-center
                       group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 via-40% to-transparent pointer-events-none"
              />

              <!-- Bottom Content — fade in/out smoothly without re-triggering transitions on loop reset -->
              <div
                class="absolute bottom-0 inset-x-0 p-6 sm:p-8
                       flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none"
                :class="[
                  index === currentIndex ? 'opacity-100' : 'opacity-0',
                  isResetting ? '' : 'transition-opacity duration-300 ease-out'
                ]"
              >
                <!-- Left: Title & Price -->
                <div class="space-y-1 max-w-[300px]">
                  <h3 class="font-spartan text-lg sm:text-xl lg:text-[22px] font-bold text-white leading-tight">
                    {{ item.title }}
                  </h3>
                  <p class="font-sans text-xs sm:text-[14px] text-white/95 font-normal">
                    {{ item.price }}
                  </p>
                </div>
                <!-- Right: Description -->
                <div class="max-w-[320px]">
                  <p class="font-sans text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--
          ── Right Arrow (Brown) ──
          Positioned below the preview card (h=350px) at the boundary between card 1 and card 2.
          left-[969px] = active card width (945px) + gap (24px) = start of preview card.
          top-[370px]  = preview card bottom (350px) + 20px gap.
        -->
        <button
          type="button"
          class="absolute left-[969px] bottom-0
                 w-9 h-9 sm:w-10 sm:h-10
                 rounded-full bg-[#8C7351] hover:bg-[#7A6343]
                 text-white flex items-center justify-center
                 shadow-lg transition-all duration-200 cursor-pointer active:scale-95 z-20"
          aria-label="Next Option"
          @click="nextSlide"
        >
          <ChevronRight class="w-5 h-5 text-white" />
        </button>

      </div>

    </div>
  </section>
</template>

