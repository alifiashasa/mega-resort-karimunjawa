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
    <path d="M19 4h-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a2 2 0 0 0-2 2v2a5 5 0 0 0 4 4.9V14a5 5 0 0 0 4 4.9V20H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-1.1A5 5 0 0 0 17 14v-1.1A5 5 0 0 0 21 8V6a2 2 0 0 0-2-2zM5 8V6h2v3.8A3 3 0 0 1 5 8zm14 0a3 3 0 0 1-2 1.8V6h2v2z"/>
  </svg>
</template>
