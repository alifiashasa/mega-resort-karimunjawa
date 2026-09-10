<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import { X } from 'lucide-vue-next'

const store = useResortStore()
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
        v-if="store.isVideoModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        @click.self="store.closeVideoModal"
      >
        <div class="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/20">
          <button
            class="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/50 rounded-full transition-colors cursor-pointer"
            @click="store.closeVideoModal"
          >
            <X class="w-6 h-6" />
          </button>
          
          <iframe
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Mega Resort Karimunjawa Video"
            class="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
