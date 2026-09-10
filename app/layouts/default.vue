<script setup lang="ts">
import AppHeader from '~/components/navigation/AppHeader.vue'
import AppFooter from '~/components/navigation/AppFooter.vue'
import BookingModal from '~/components/common/BookingModal.vue'
import VideoModal from '~/components/common/VideoModal.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#faf7f2] font-sans antialiased text-[#29241f]">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
    <BookingModal />
    <VideoModal />
  </div>
</template>
