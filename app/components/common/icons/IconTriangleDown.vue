<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-[16px] h-[12px] text-white fill-current block',
})
</script>

<template>
  <svg
    viewBox="0 0 16 12"
    :class="className"
  >
    <polygon points="0,0 16,0 8,12" />
  </svg>
</template>
