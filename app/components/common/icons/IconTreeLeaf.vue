<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-4 h-4 fill-[#FA9D33]',
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    :class="className"
  >
    <path d="M12 2a4.5 4.5 0 0 1 4.5 4.5c0 .6-.12 1.17-.34 1.68A4.5 4.5 0 0 1 20 12.5a4.5 4.5 0 0 1-4.14 4.48c.09.33.14.67.14 1.02a4.5 4.5 0 0 1-9 0c0-.35.05-.69.14-1.02A4.5 4.5 0 0 1 4 12.5a4.5 4.5 0 0 1 3.84-4.32A4.5 4.5 0 0 1 7.5 6.5 4.5 4.5 0 0 1 12 2z"/>
  </svg>
</template>
