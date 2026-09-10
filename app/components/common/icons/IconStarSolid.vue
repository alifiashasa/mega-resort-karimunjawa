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
    <path d="M12 2l2.9 6.88L22 9.76l-5.3 4.67 1.63 7.23L12 17.8l-6.33 3.86 1.63-7.23L2 9.76l7.1-0.88L12 2z"/>
  </svg>
</template>
