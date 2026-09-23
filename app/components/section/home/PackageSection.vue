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
  sectionClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: 'package',
  bgClass: 'bg-[#FFF9EB]',
})

const { t } = useI18n()
const localePath = useLocalePath()
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

const handleDetailPackage = (pkg?: PackageItem) => {
  navigateTo(localePath('/package/detail'))
}
</script>

<template>
  <section :id="props.id" :class="[props.bgClass, props.sectionClass || 'pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20']">
    <div :class="props.containerClass || 'w-full px-4 sm:px-8 lg:px-12 xl:px-16'">
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 sm:mb-10">
        <div class="max-w-[833px]">
          <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#977E5B] tracking-normal leading-tight lg:leading-[52px]">
            {{ props.title || t('packages.title') }}
          </h2>
        </div>

        <div class="max-w-sm flex flex-col items-start lg:items-end text-left lg:text-right">
          <p class="font-urbanist text-xs sm:text-sm text-[#717680] leading-relaxed mb-3">
            {{ props.description || t('packages.description') }}
          </p>
          <NuxtLink
            :to="props.viewAllHref || localePath('/package')"
            class="font-urbanist text-xs sm:text-sm font-bold text-[#090C10] hover:text-[#8a7058] transition-colors"
          >
            {{ props.viewAllText || t('packages.allPackages') }}
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
          @prev="prevPackage"
          @next="nextPackage"
          @select="selectPackage"
        />
      </div>
    </div>
  </section>
</template>

