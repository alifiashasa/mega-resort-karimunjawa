<script setup lang="ts">
import EmptyState from '~/components/common/EmptyState.vue'

definePageMeta({
  layout: 'default',
})

useHead({
  title: "We're Currently Enhancing This Page for a Better Experience | Mega Resort Karimunjawa",
  meta: [
    {
      name: 'description',
      content:
        "This page is temporarily unavailable while we make improvements behind the scenes. We're working to ensure everything runs smoothly and delivers the best possible experience. Please check back again shortly.",
    },
  ],
})
</script>

<template>
  <div class="pt-28 sm:pt-32 pb-16 min-h-[75vh] flex items-center justify-center bg-white">
    <div class="w-full max-w-[1480px] mx-auto px-4">
      <EmptyState
        image-src="/images/empty-state-maintenance.svg"
        title="We're Currently Enhancing This Page for a Better Experience"
        description="This page is temporarily unavailable while we make improvements behind the scenes. We're working to ensure everything runs smoothly and delivers the best possible experience. Please check back again shortly."
        button-text="Back to Beranda"
        to="/"
      />
    </div>
  </div>
</template>
