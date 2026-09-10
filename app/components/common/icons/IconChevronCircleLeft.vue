<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-[#1E75BB] shrink-0 -translate-x-[0.5px]',
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="className"
  >
    <path d="M14 17L9 12L14 7" />
  </svg>
</template>
