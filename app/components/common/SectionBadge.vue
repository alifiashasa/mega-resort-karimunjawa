<script setup lang="ts">
interface Props {
  text?: string
  align?: 'left' | 'center' | 'right'
  color?: 'gold' | 'dark' | 'white'
}

withDefaults(defineProps<Props>(), {
  align: 'center',
  color: 'gold',
})
</script>

<template>
  <div
    class="flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold select-none"
    :class="[
      align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start',
      color === 'gold' ? 'text-[#b98e46]' : color === 'white' ? 'text-white/90' : 'text-[#826e58]'
    ]"
  >
    <span
      v-if="align === 'center' || align === 'right'"
      class="h-[1px] w-6 sm:w-10 opacity-70"
      :class="color === 'white' ? 'bg-white' : 'bg-[#b98e46]'"
    />
    <slot>{{ text }}</slot>
    <span
      v-if="align === 'center' || align === 'left'"
      class="h-[1px] w-6 sm:w-10 opacity-70"
      :class="color === 'white' ? 'bg-white' : 'bg-[#b98e46]'"
    />
  </div>
</template>
