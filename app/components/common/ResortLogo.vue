<script setup lang="ts">
interface Props {
  variant?: 'light' | 'dark' | 'color'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'light',
  size: 'md',
  alt: 'Mega Resort Karimunjawa Logo',
})

const logoSrc = computed(() => {
  if (props.variant === 'color') {
    return '/logo/logo-megaresort-color.svg'
  }
  return '/logo/logo-megaresort.svg'
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-10 sm:h-11 w-auto'
    case 'lg':
      return 'h-18 sm:h-20 w-auto'
    case 'xl':
      return 'h-22 sm:h-24 w-auto'
    case 'md':
    default:
      return 'h-14 sm:h-[62px] w-auto'
  }
})
</script>

<template>
  <div class="flex items-center select-none cursor-pointer group transition-transform duration-300 hover:scale-105">
    <img
      :src="logoSrc"
      :alt="alt"
      :class="[
        sizeClasses,
        variant === 'dark' ? 'invert brightness-0' : ''
      ]"
      loading="eager"
    />
  </div>
</template>
