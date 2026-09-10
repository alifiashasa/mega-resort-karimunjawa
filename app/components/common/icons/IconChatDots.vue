<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-5 h-5 text-[#977E5B] shrink-0',
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="className"
  >
    <!-- Back bubble -->
    <path d="M7 6.2A3.8 3.8 0 0 1 10.5 3h6.5A4 4 0 0 1 21 7v4.5a4 4 0 0 1-4 4h-.5" />
    <!-- Front bubble with downward tail -->
    <path d="M5.5 7.5h8.5A3.5 3.5 0 0 1 17.5 11v3.5a3.5 3.5 0 0 1-3.5 3.5h-3.2l-2.2 2.4a.5.5 0 0 1-.8-.4V18H5.5A3.5 3.5 0 0 1 2 14.5V11A3.5 3.5 0 0 1 5.5 7.5Z" />
    <!-- 3 dots inside -->
    <circle cx="6.8" cy="12.8" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="9.8" cy="12.8" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="12.8" cy="12.8" r="0.75" fill="currentColor" stroke="none" />
  </svg>
</template>
