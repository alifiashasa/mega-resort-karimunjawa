<script setup lang="ts">
import EmptyState from '~/components/common/EmptyState.vue'

definePageMeta({
  layout: 'default',
})

const handleTryAgain = () => {
  if (typeof window !== 'undefined') {
    window.location.reload()
  }
}
</script>

<template>
  <div class="pt-28 pb-16 min-h-[75vh] flex items-center justify-center bg-white">
    <div class="w-full max-w-[1480px] mx-auto px-4">
      <EmptyState @action="handleTryAgain" />
    </div>
  </div>
</template>
