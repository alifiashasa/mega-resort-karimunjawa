<script setup lang="ts">
import type { PackageItem } from '~/types'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import IconRibbonBadge from '~/components/common/icons/IconRibbonBadge.vue'
import IconStar from '~/components/common/icons/IconStar.vue'

interface Props {
  pkg: PackageItem
  currentIndex: number
  totalCount: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'book', pkg: PackageItem): void
  (e: 'detail', pkg: PackageItem): void
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'select', index: number): void
}>()

const formatPrice = (val: number) => {
  return 'Rp ' + val.toLocaleString('id-ID')
}

const localePath = useLocalePath()
const detailUrl = computed(() => localePath('/package/detail'))
</script>

<template>
  <div class="relative bg-white rounded-[20px] shadow-xs p-6 sm:p-8 lg:px-11 lg:py-5 lg:h-[512px] lg:min-h-[512px] overflow-hidden transition-all duration-300">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch h-full relative z-10">
      
      <!-- Left Column: Counter, Category Title, Stats & Dots -->
      <div class="lg:col-span-4 flex flex-col justify-between h-full">
        <!-- 1. Index Counter -->
        <div>
          <span class="font-urbanist text-xs sm:text-[16px] font-semibold text-[#717680] tracking-wider">
            {{ String(currentIndex + 1).padStart(2, '0') }} — {{ String(totalCount).padStart(2, '0') }}
          </span>
        </div>

        <!-- 2. Category Title -->
        <div class="flex flex-col gap-1.5 sm:gap-2">
          <span class="font-urbanist text-[16px] text-[#717680] font-semibold block">
            Category
          </span>
          <h3 class="font-spartan text-2xl sm:text-3xl lg:text-[38px] font-normal text-[#1f1a16] tracking-tight leading-tight">
            {{ pkg.category || pkg.title }}
          </h3>
        </div>

        <!-- 3. 3 Stats Columns -->
        <div class="flex items-start justify-between gap-3 font-urbanist">
          <!-- Price -->
          <div class="shrink-0 flex flex-col gap-1.5 sm:gap-2">
            <span class="font-urbanist text-[16px] text-[#717680] font-semibold block">Price Form</span>
            <div class="flex items-baseline gap-1">
              <span class="font-spartan text-base sm:text-[24px] font-normal text-[#000000] whitespace-nowrap">
                {{ formatPrice(pkg.price) }}
              </span>
              <span class="font-urbanist text-[16px] text-[#000000] font-normal whitespace-nowrap">/{{ pkg.priceUnit || '2 Person' }}</span>
            </div>
          </div>

          <!-- Best Season -->
          <div class="flex flex-col gap-1.5 sm:gap-2">
            <span class="font-urbanist text-[16px] text-[#717680] font-semibold block">Best Season</span>
            <span class="font-spartan text-xs sm:text-[24px] font-normal text-[#000000] block whitespace-nowrap">
              {{ pkg.bestSeason || '10 - 13 Apr' }}
            </span>
          </div>

          <!-- Duration -->
          <div class="flex flex-col gap-1.5 sm:gap-2">
            <span class="font-urbanist text-[16px] text-[#717680] font-semibold block">Duration</span>
            <span class="font-spartan text-xs sm:text-[24px] font-normal text-[#000000] block whitespace-nowrap">
              {{ pkg.duration || '3 Days' }}
            </span>
          </div>
        </div>

        <!-- 4. Capsule Indicator Dots -->
        <div>
          <div class="inline-flex items-center gap-1.5 p-1 bg-[#E5E7EB] rounded-full">
            <button
              v-for="idx in totalCount"
              :key="idx"
              type="button"
              class="transition-all duration-300 rounded-full cursor-pointer h-3"
              :class="idx - 1 === currentIndex ? 'w-9 bg-[#977E5B]' : 'w-3 bg-white hover:bg-white/80'"
              :aria-label="`Go to package ${idx}`"
              @click="emit('select', idx - 1)"
            />
          </div>
        </div>
      </div>

      <!-- Center Column: Visual Feature Image with Concentric Dashed Circles -->
      <div class="lg:col-span-4 flex items-center justify-center relative min-h-[360px] sm:min-h-[420px] lg:min-h-[472px]">
        <!-- Decorative Concentric Dashed Radial Rings -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
          <div class="w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] rounded-full border border-dashed border-[#e6ddd2] opacity-75"></div>
          <div class="w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[580px] lg:h-[580px] rounded-full border border-dashed border-[#ebdcc9] opacity-45"></div>
        </div>

        <!-- Tall Vertical Image Card (Width: 324px, Height: 472px) -->
        <div class="relative z-10 w-full max-w-[324px] h-[360px] sm:h-[420px] lg:h-[472px] rounded-[16px] overflow-hidden shadow-xs group bg-[#FFF9EB]">
          <img
            :src="pkg.image"
            :alt="pkg.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Right Column: Rating, Description, Tags & Actions -->
      <div class="lg:col-span-4 flex flex-col justify-between h-full">
        <!-- 1. Rating Badge & Reviews -->
        <div class="flex items-center gap-3 font-urbanist">
          <div class="relative inline-flex items-center h-[34px] select-none shrink-0 drop-shadow-[2px_1.6px_1px_rgba(28,110,164,0.2)]">
            <IconRibbonBadge />
            <div class="absolute inset-0 flex items-center pl-2.5 pr-3 gap-1 text-white">
              <IconStar />
              <div class="flex items-baseline font-hanken">
                <span class="text-[18px] font-bold leading-none tracking-tight">{{ pkg.rating }}</span><span class="text-[14px] font-normal text-white/95 leading-none">{{ pkg.ratingScale || '/10' }}</span>
              </div>
            </div>
          </div>
          <span class="font-urbanist text-xs sm:text-[18px] text-[#717680] font-normal underline decoration-[#717680]/60 underline-offset-2">
            (Based on {{ pkg.reviewCount }} Review)
          </span>
        </div>

        <!-- 2. Description -->
        <div>
          <p class="font-urbanist text-[15px] sm:text-[20px] text-[#717680] leading-[1.65] font-normal">
            {{ pkg.description }}
          </p>
        </div>

        <!-- 3. Feature Tag Pills -->
        <div class="flex flex-wrap gap-2.5 font-urbanist">
          <span
            v-for="tag in (pkg.tags || ['Beachfront Villa', 'Ocean View', 'Private Terrace', 'Infinity Pool', 'Resort Facilities'])"
            :key="tag"
            class="font-urbanist h-[36px] inline-flex items-center justify-center px-4 py-2 rounded-[12px] bg-[#FAFAFA] shadow-button-outlined-default text-[13px] sm:text-[14px] text-[#8F7553] font-normal hover:opacity-90 transition-colors cursor-default"
          >
            {{ tag }}
          </span>
        </div>

        <!-- 4. Action Row: Buttons & Arrows -->
        <div class="flex items-center justify-between font-urbanist">
          <div class="flex items-center gap-2 sm:gap-2.5">
            <NuxtLink
              :to="detailUrl"
              class="font-urbanist px-3.5 sm:px-4 py-2 rounded-[12px] btn-detail-outlined text-[13px] sm:text-[14px] font-normal text-[#8F7553] hover:opacity-95 active:translate-y-[1px] transition-all cursor-pointer inline-flex items-center justify-center text-center"
            >
              See Detail
            </NuxtLink>
            <button
              type="button"
              class="font-urbanist px-3.5 sm:px-4 py-2 rounded-[12px] btn-book-solid text-[13px] sm:text-[14px] font-normal text-white hover:opacity-95 active:translate-y-[1px] transition-all cursor-pointer"
              @click="emit('book', pkg)"
            >
              Book Package
            </button>
          </div>

          <!-- Navigation Arrow Controls -->
          <div class="flex items-center gap-4 text-[#717680]">
            <button
              type="button"
              class="hover:text-black transition-colors cursor-pointer p-1"
              aria-label="Previous Package"
              @click="emit('prev')"
            >
              <ArrowLeft class="w-5 h-5 text-[#717680] stroke-[1.75]" />
            </button>
            <button
              type="button"
              class="hover:text-black transition-colors cursor-pointer p-1"
              aria-label="Next Package"
              @click="emit('next')"
            >
              <ArrowRight class="w-5 h-5 text-[#1f1a16] stroke-[1.75]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


