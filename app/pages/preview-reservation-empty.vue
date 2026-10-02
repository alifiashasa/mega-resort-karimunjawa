<script setup lang="ts">
import EmptyState from '~/components/common/EmptyState.vue'

definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Online Reservations Are Currently Unavailable | Mega Resort Karimunjawa',
  meta: [
    {
      name: 'description',
      content:
        "We're unable to accept bookings at this time. Our reservation system may be undergoing maintenance or availability updates.",
    },
  ],
})
</script>

<template>
  <div class="pt-28 sm:pt-32 pb-16 min-h-[75vh] flex items-center justify-center bg-white">
    <div class="w-full max-w-[1480px] mx-auto px-4">
      <EmptyState
        image-src="/images/empty-state-reservation.svg"
        title="Online Reservations Are Currently Unavailable"
        description="We're unable to accept bookings at this time. Our reservation system may be undergoing maintenance or availability updates. Please try again later or contact our team directly for assistance with your reservation."
        button-text="Back to Beranda"
        to="/"
      />
    </div>
  </div>
</template>
