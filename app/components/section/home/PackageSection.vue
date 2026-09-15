<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import PackageCard from '~/components/card/PackageCard.vue'
import type { PackageItem } from '~/types'

interface Props {
  id?: string
  title?: string
  description?: string
  viewAllText?: string
  viewAllHref?: string
  bgClass?: string
  containerClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: 'package',
  title: '',
  description: '',
  viewAllText: '',
  viewAllHref: '#package',
  bgClass: 'bg-[#FFF9EB]',
  containerClass: 'w-full px-4 sm:px-8 lg:px-12 xl:px-16',
})

const { t } = useI18n()
const store = useResortStore()

const currentPackageIndex = ref(0)
const packages = computed(() => store.resortData?.packages || [])
const activePackage = computed(() => packages.value[currentPackageIndex.value] || null)

const prevPackage = () => {
  if (currentPackageIndex.value > 0) {
    currentPackageIndex.value--
  } else {
    currentPackageIndex.value = Math.max(0, packages.value.length - 1)
  }
}

const nextPackage = () => {
  if (currentPackageIndex.value < packages.value.length - 1) {
    currentPackageIndex.value++
  } else {
    currentPackageIndex.value = 0
  }
}

const selectPackage = (idx: number) => {
  if (idx >= 0 && idx < packages.value.length) {
    currentPackageIndex.value = idx
  }
}

const handleBookPackage = (pkg: PackageItem) => {
  store.openBookingModal(pkg)
}
</script>

<template>
  <section :id="id" class="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16" :class="bgClass">
    <div :class="containerClass">
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12">
        <div class="max-w-[833px]">
          <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#977E5B] tracking-normal leading-tight lg:leading-[52px]">
            {{ title || t('packages.title') }}
          </h2>
        </div>

        <div class="max-w-sm flex flex-col items-start lg:items-end text-left lg:text-right">
          <p class="font-urbanist text-xs sm:text-sm text-[#717680] leading-relaxed mb-3">
            {{ description || t('packages.description') }}
          </p>
          <NuxtLink
            :to="viewAllHref"
            class="font-urbanist text-xs sm:text-sm font-bold text-[#090C10] hover:text-[#8a7058] transition-colors"
          >
            {{ viewAllText || t('packages.allPackages') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Active Package Card Container -->
      <div v-if="activePackage" class="relative">
        <PackageCard
          :pkg="activePackage"
          :current-index="currentPackageIndex"
          :total-count="packages.length"
          @book="handleBookPackage"
          @detail="handleBookPackage"
          @prev="prevPackage"
          @next="nextPackage"
          @select="selectPackage"
        />
      </div>
    </div>
  </section>
</template>

