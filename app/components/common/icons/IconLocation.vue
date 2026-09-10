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
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="className"
  >
    <path d="M12 21.5C12 21.5 19 15.5 19 9.5C19 5.634 15.866 2.5 12 2.5C8.134 2.5 5 5.634 5 9.5C5 15.5 12 21.5 12 21.5Z" />
    <circle cx="12" cy="9.5" r="2.2" stroke-width="1.6" />
  </svg>
</template>
