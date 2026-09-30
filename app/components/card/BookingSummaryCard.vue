<script setup lang="ts">
import { computed } from 'vue'

export interface SummaryItem {
  id?: string | number
  name: string
  subtext?: string
  price: string | number
}

export interface SummaryGroup {
  categoryTitle: string
  items: SummaryItem[]
}

export interface BreakdownItem {
  label: string
  value: string | number
}

const props = withDefaults(
  defineProps<{
    dateRange?: string
    duration?: string
    title?: string
    items?: SummaryItem[]
    groups?: SummaryGroup[]
    breakdowns?: BreakdownItem[]
    rateLabel?: string
    rateValue?: string | number
    totalPrice: string | number
    taxInfo?: string
    buttonText?: string
    showButton?: boolean
    disabled?: boolean
    loading?: boolean
    sticky?: boolean
  }>(),
  {
    dateRange: 'Tue, 19 May 26 – Fri, 22 May 26',
    duration: '3 Night',
    title: '',
    items: () => [],
    groups: () => [],
    breakdowns: () => [],
    rateLabel: 'Room rate',
    rateValue: '',
    taxInfo: 'Include All Taxed',
    buttonText: 'Continue',
    showButton: true,
    disabled: false,
    loading: false,
    sticky: true,
  }
)

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'click'): void
}>()

const formattedTotal = computed(() => {
  if (typeof props.totalPrice === 'number') {
    return 'Rp ' + props.totalPrice.toLocaleString('id-ID')
  }
  return props.totalPrice
})

const formatItemPrice = (val: string | number) => {
  if (typeof val === 'number') {
    return 'Rp ' + val.toLocaleString('id-ID')
  }
  return val
}

const handleClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
    emit('submit')
  }
}
</script>

<template>
  <div
    class="bg-white rounded-[20px] border border-[#EBEBEB] shadow-xs divide-y divide-[#EBEBEB] overflow-hidden"
    :class="sticky ? 'sticky top-28' : ''"
  >
    <!-- Section 1: Date Range, Duration, & Header Title -->
    <div class="p-6">
      <div class="flex items-center justify-between text-xs sm:text-[18px] text-[#717680] font-opensans">
        <span>{{ dateRange }}</span>
        <span class="font-normal text-[#717680]">{{ duration }}</span>
      </div>

      <!-- Optional Title (e.g. Single Room Name) -->
      <h3
        v-if="title"
        class="font-spartan text-xl sm:text-[28px] font-semibold text-[#090C10] mt-3 leading-snug"
      >
        {{ title }}
      </h3>
    </div>

    <!-- Section 2: Items List / Rate Breakdown -->
    <!-- Case A: Categorized Groups (e.g. Room Charges, Additional Charges) -->
    <div v-if="groups && groups.length > 0" class="divide-y divide-[#F2F4F7]">
      <div
        v-for="(grp, gIdx) in groups"
        :key="gIdx"
        class="py-4 px-6 space-y-3"
      >
        <h4 class="font-spartan text-base sm:text-[18px] font-semibold text-[#090C10]">
          {{ grp.categoryTitle }}
        </h4>
        <div class="space-y-3">
          <div
            v-for="(item, idx) in grp.items"
            :key="item.id || idx"
            class="flex items-center justify-between gap-4 text-sm sm:text-[16px] font-opensans"
          >
            <div class="flex flex-col justify-center">
              <h5 class="font-spartan text-sm sm:text-[16px] font-semibold text-[#090C10] leading-snug">
                {{ item.name }}
              </h5>
              <p v-if="item.subtext" class="text-xs sm:text-[13px] text-[#717680] font-opensans mt-0.5">
                {{ item.subtext }}
              </p>
            </div>
            <div class="text-[#090C10] font-normal text-sm sm:text-[16px] font-spartan shrink-0 flex items-center leading-none">
              {{ formatItemPrice(item.price) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Case B: Multiple flat items passed via items array -->
    <div v-else-if="items && items.length > 0" class="divide-y divide-[#F2F4F7]">
      <div
        v-for="(item, idx) in items"
        :key="item.id || idx"
        class="px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-sm sm:text-[18px] font-opensans"
      >
        <div class="flex flex-col justify-center">
          <h4 class="font-spartan text-base sm:text-[20px] font-semibold text-[#090C10] leading-snug">
            {{ item.name }}
          </h4>
          <p v-if="item.subtext" class="text-xs sm:text-[14px] text-[#717680] font-opensans mt-1">
            {{ item.subtext }}
          </p>
        </div>
        <div class="text-[#090C10] font-normal text-sm sm:text-[18px] font-spartan shrink-0 flex items-center leading-none">
          {{ formatItemPrice(item.price) }}
        </div>
      </div>
    </div>

    <!-- Case C: Single rateValue passed -->
    <div
      v-else-if="rateValue"
      class="px-6 py-4 sm:py-5 flex items-center justify-between text-sm sm:text-[18px] font-opensans"
    >
      <span class="text-[#717680] flex items-center">{{ rateLabel }}</span>
      <span class="text-[#090C10] font-normal sm:font-normal flex items-center leading-none">{{ formatItemPrice(rateValue) }}</span>
    </div>

    <!-- Section 2.5: Subtotal Breakdowns (if provided) -->
    <div v-if="breakdowns && breakdowns.length > 0" class="px-6 py-4 space-y-2.5 bg-[#FAF8F5]/60 font-opensans text-xs sm:text-[14px]">
      <div
        v-for="(b, bIdx) in breakdowns"
        :key="bIdx"
        class="flex items-center justify-between text-[#717680]"
      >
        <span>{{ b.label }}</span>
        <span class="text-[#090C10] font-medium font-spartan text-sm sm:text-[15px]">{{ formatItemPrice(b.value) }}</span>
      </div>
    </div>

    <!-- Section 3: Total Price Row -->
    <div class="px-6 py-5 flex items-center justify-between">
      <div class="flex flex-col justify-center">
        <div class="font-spartan text-2xl sm:text-[28px] font-semibold text-[#090C10] leading-none">
          Total
        </div>
        <div class="text-xs sm:text-[18px] text-[#717680] font-opensans mt-1.5">
          {{ taxInfo }}
        </div>
      </div>
      <div class="font-spartan text-2xl sm:text-[30px] font-semibold text-[#090C10] flex items-center leading-none">
        {{ formattedTotal }}
      </div>
    </div>

    <!-- Section 4: Action Button -->
    <div v-if="showButton" class="p-5 sm:p-6">
      <button
        type="button"
        :disabled="disabled || loading"
        class="w-full py-2.5 sm:py-3 px-5 rounded-[10px] sm:rounded-[12px] bg-[#937A54] hover:bg-[#886F4A] text-white font-opensans text-sm sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center whitespace-nowrap active:scale-[0.99] border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
        @click="handleClick"
      >
        <slot name="button">
          {{ buttonText }}
        </slot>
      </button>
    </div>
  </div>
</template>
