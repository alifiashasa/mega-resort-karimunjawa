<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-3.5 h-3.5 text-white fill-white shrink-0 -mt-0.5',
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    :class="className"
  >
    <path
      d="M12 3c.3 0 .6.2.7.5l2.2 4.6 5 .7c.6.1.8.8.4 1.2l-3.6 3.5.9 5c.1.6-.5 1-1 .7L12 16.8l-4.5 2.4c-.5.3-1.1-.1-1-.7l.9-5-3.6-3.5c-.4-.4-.2-1.1.4-1.2l5-.7 2.2-4.6c.1-.3.4-.5.7-.5z"
      stroke="white"
      stroke-width="1.8"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
  </svg>
</template>
