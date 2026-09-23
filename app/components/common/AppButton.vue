<script setup lang="ts">
import IconSpinner from '~/components/common/icons/IconSpinner.vue'

interface Props {
  variant?: 'primary' | 'outline' | 'dark' | 'ghost' | 'light'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm select-none cursor-pointer tracking-wider text-center',
      // Size variants
      size === 'sm' && 'px-4 py-1.5 text-xs gap-1.5',
      size === 'md' && 'px-6 py-2.5 text-sm gap-2',
      size === 'lg' && 'px-8 py-3.5 text-base gap-2.5 font-semibold',
      // Color variants
      variant === 'primary' && 'bg-[#b98e46] text-white hover:bg-[#a37936] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
      variant === 'outline' && 'border border-[#b98e46] text-[#b98e46] hover:bg-[#b98e46] hover:text-white',
      variant === 'dark' && 'bg-[#1b1713] text-white hover:bg-[#2e2720] shadow-sm hover:-translate-y-0.5',
      variant === 'light' && 'bg-white text-[#29241f] hover:bg-[#faf7f2] shadow-sm hover:shadow-md',
      variant === 'ghost' && 'text-current hover:opacity-80 bg-transparent',
      (disabled || loading) && 'opacity-60 cursor-not-allowed hover:transform-none',
    ]"
    @click="handleClick"
  >
    <IconSpinner
      v-if="loading"
      class-name="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
    />
    <slot />
  </component>
</template>
