<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

export interface LightboxItem {
  id?: number | string
  title: string
  category?: string
  image: string
}

interface Props {
  isOpen: boolean
  items: LightboxItem[]
  currentIndex: number
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  currentIndex: 0,
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'update:currentIndex', newIndex: number): void
  (e: 'prev'): void
  (e: 'next'): void
}>()

const currentItem = computed(() => {
  return props.items[props.currentIndex] || props.items[0]
})

const handlePrev = () => {
  if (props.items.length <= 1) return
  const newIndex = (props.currentIndex - 1 + props.items.length) % props.items.length
  emit('update:currentIndex', newIndex)
  emit('prev')
}

const handleNext = () => {
  if (props.items.length <= 1) return
  const newIndex = (props.currentIndex + 1) % props.items.length
  emit('update:currentIndex', newIndex)
  emit('next')
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.isOpen) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') handlePrev()
  if (e.key === 'ArrowRight') handleNext()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && currentItem"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-8"
        @click.self="emit('close')"
      >
        <!-- Close Button -->
        <button
          type="button"
          class="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-50"
          @click="emit('close')"
          aria-label="Close lightbox"
        >
          <X class="w-6 h-6" />
        </button>

        <!-- Lightbox Content -->
        <div class="relative max-w-5xl w-full flex flex-col items-center select-none">
          <!-- Main Lightbox Image -->
          <div class="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-[16px] shadow-2xl bg-black/40">
            <img
              :src="currentItem.image"
              :alt="currentItem.title"
              class="max-h-[75vh] max-w-full object-contain rounded-[16px]"
            />
          </div>

          <!-- Lightbox Caption & Info -->
          <div class="w-full flex items-center justify-between text-white mt-4 px-2">
            <div class="text-left">
              <span v-if="currentItem.category" class="text-xs uppercase font-medium text-[#E5CD9E] tracking-wider block">
                {{ currentItem.category }}
              </span>
              <h3 class="font-spartan text-lg sm:text-xl font-semibold">
                {{ currentItem.title }}
              </h3>
            </div>

            <!-- Counter -->
            <span v-if="items.length > 1" class="font-opensans text-sm text-white/70">
              {{ currentIndex + 1 }} / {{ items.length }}
            </span>
          </div>

          <!-- Navigation Controls -->
          <button
            v-if="items.length > 1"
            type="button"
            class="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
            @click.stop="handlePrev"
            aria-label="Previous image"
          >
            <ChevronLeft class="w-6 h-6" />
          </button>

          <button
            v-if="items.length > 1"
            type="button"
            class="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
            @click.stop="handleNext"
            aria-label="Next image"
          >
            <ChevronRight class="w-6 h-6" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
