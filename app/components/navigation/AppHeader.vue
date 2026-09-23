<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import ResortLogo from '~/components/common/ResortLogo.vue'
import { Menu, X } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const store = useResortStore()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const isRoomsPage = computed(() => {
  return route.path.includes('/rooms')
})

const isFacilityPage = computed(() => {
  return route.path.includes('/facility') || route.path.includes('/facilities')
})

const isGalleryPage = computed(() => {
  return route.path.includes('/gallery') || route.path.includes('/galleries')
})

const isPackagePage = computed(() => {
  return route.path.includes('/package') || route.path.includes('/packages')
})

const isBlogPage = computed(() => {
  return route.path.includes('/blog') || route.path.includes('/blogs')
})

const activeRoute = computed(() => {
  if (isRoomsPage.value) return 'Rooms'
  if (isFacilityPage.value) return 'Facility'
  if (isGalleryPage.value) return 'Gallery'
  if (isPackagePage.value) return 'Package'
  if (isBlogPage.value) return 'Blog'
  return 'Home'
})

const navLinks = computed(() => [
  { name: t('nav.home'), key: 'Home', href: localePath('/') },
  { name: t('nav.rooms'), key: 'Rooms', href: localePath('/rooms') },
  { name: t('nav.facility'), key: 'Facility', href: localePath('/facility') },
  { name: t('nav.gallery'), key: 'Gallery', href: localePath('/gallery') },
  { name: t('nav.package'), key: 'Package', href: localePath('/package') },
  { name: t('nav.discover'), key: 'Discover', href: localePath('/') + '#about' },
  { name: t('nav.blog'), key: 'Blog', href: localePath('/blog') },
  { name: t('nav.contactUs'), key: 'Contact Us', href: '#contact' },
  { name: t('nav.faq'), key: 'FAQ', href: '#faq' },
])

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 40
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 select-none px-5 sm:px-6 md:px-7"
    :class="[
      isScrolled
        ? 'glass-nav py-3.5 shadow-xl border-b border-white/10'
        : 'bg-transparent py-5 sm:py-6'
    ]"
  >
    <div class="w-full">
      <div class="flex items-center justify-between">
        <!-- Logo (Stacked with Lotus & Script Karimunjawa) -->
        <NuxtLink to="/" class="flex items-center shrink-0">
          <ResortLogo variant="light" layout="stacked" size="md" />
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <nav class="hidden lg:flex items-center gap-6 xl:gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.key"
            :to="link.href"
            class="text-[16px] tracking-wide transition-all relative py-1 font-opensans"
            style="font-family: 'Open Sans', sans-serif;"
            :class="[
              activeRoute === link.key
                ? 'text-white after:content-[\'\'] after:absolute after:-bottom-1.5 after:-left-2.5 after:-right-2.5 after:h-[1.5px] after:bg-white'
                : 'text-white/85 hover:text-white'
            ]"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Right CTA: Reserve Now -->
        <div class="hidden lg:flex items-center">
          <button
            type="button"
            class="h-[48px] px-5 flex items-center justify-center bg-[#977E5B] hover:bg-[#856c4c] active:scale-95 text-white font-opensans text-[16px] font-normal rounded-[16px] tracking-normal transition-all duration-300 cursor-pointer"
            @click="store.openBookingModal()"
          >
            {{ t('nav.reserveNow') }}
          </button>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="flex items-center lg:hidden">
          <button
            type="button"
            class="p-2 text-white hover:text-[#b98e46] transition-colors"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            aria-label="Toggle menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden glass-nav border-t border-white/10 px-6 py-6 mt-3 space-y-4"
      >
        <div class="flex flex-col space-y-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.key"
            :to="link.href"
            class="text-sm font-medium transition-colors py-1 flex items-center justify-between"
            :class="[
              activeRoute === link.key
                ? 'text-[#b98e46] font-semibold pl-2 border-l-2 border-[#b98e46]'
                : 'text-white/90 hover:text-white'
            ]"
            @click="isMobileMenuOpen = false"
          >
            <span>{{ link.name }}</span>
          </NuxtLink>
        </div>

        <div class="pt-4 border-t border-white/10">
          <button
            type="button"
            class="w-full h-[48px] flex items-center justify-center bg-[#977E5B] hover:bg-[#856c4c] text-white font-opensans text-[16px] font-normal rounded-[16px] tracking-normal transition-all text-center"
            @click="isMobileMenuOpen = false; store.openBookingModal()"
          >
            {{ t('nav.reserveNow') }}
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>
