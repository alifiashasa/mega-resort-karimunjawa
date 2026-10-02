<script setup lang="ts">
import EmptyState from '~/components/common/EmptyState.vue'

definePageMeta({
  layout: 'default',
})

useHead({
  title: "We're Unable to Connect to Our Services | Mega Resort Karimunjawa",
  meta: [
    {
      name: 'description',
      content:
        "It looks like there's a problem establishing a connection. This could be caused by a network interruption or an unstable internet connection.",
    },
  ],
})

const handleTryAgain = () => {
  if (typeof window !== 'undefined') {
    window.location.reload()
  }
}
</script>

<template>
  <div class="pt-28 sm:pt-32 pb-16 min-h-[75vh] flex items-center justify-center bg-white">
    <div class="w-full max-w-[1480px] mx-auto px-4">
      <EmptyState
        image-src="/images/empty-state-network.svg"
        title="We're Unable to Connect to Our Services"
        description="It looks like there's a problem establishing a connection. This could be caused by a network interruption or an unstable internet connection. Please verify your connection and try again in a few moments."
        button-text="Try Again"
        @action="handleTryAgain"
      />
    </div>
  </div>
</template>
