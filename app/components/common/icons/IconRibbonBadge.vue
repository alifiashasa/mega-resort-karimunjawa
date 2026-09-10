<script setup lang="ts">
interface Props {
  className?: string
  fillColor?: string
}

withDefaults(defineProps<Props>(), {
  className: 'h-full w-auto',
  fillColor: '#FF9F3F',
})
</script>

<template>
  <svg
    viewBox="0 0 96 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <path
      d="M17 0H91Q94 0 92.48 2.59L85.52 14.41Q84 17 85.52 19.59L92.48 31.41Q94 34 91 34H17C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0Z"
      :fill="fillColor"
    />
  </svg>
</template>
