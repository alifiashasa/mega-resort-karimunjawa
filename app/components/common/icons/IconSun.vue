<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-3.5 h-3.5 text-[#8C704E] fill-current',
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    :class="className"
  >
    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 100-2H2a1 1 0 100 2zm18 0h2a1 1 0 100-2h-2a1 1 0 100 2zM11 2v2a1 1 0 102 0V2a1 1 0 10-2 0zm0 18v2a1 1 0 102 0v-2a1 1 0 10-2 0zM5.99 4.58a1 1 0 10-1.41 1.41l1.41 1.42a1 1 0 101.42-1.42L5.99 4.58zm12.02 12.02a1 1 0 10-1.41 1.42l1.41 1.41a1 1 0 101.42-1.41l-1.42-1.42zm1.42-12.02a1 1 0 00-1.42 0l-1.41 1.41a1 1 0 101.41 1.42l1.42-1.42a1 1 0 000-1.41zM6 16.6l-1.42 1.42a1 1 0 101.42 1.41l1.41-1.41A1 1 0 006 16.6z"/>
  </svg>
</template>
