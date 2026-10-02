<script setup lang="ts">
import EmptyState from '~/components/common/EmptyState.vue'
import AppHeader from '~/components/navigation/AppHeader.vue'
import AppFooter from '~/components/navigation/AppFooter.vue'

const isOnline = useOnline()
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Mega Resort Karimunjawa`
      : 'Mega Resort Karimunjawa - Luxury Island Getaway'
  },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Great+Vibes&family=Open+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
    },
  ],
})

const handleRetry = () => {
  if (typeof window !== 'undefined') {
    if (navigator.onLine) {
      window.location.reload()
    }
  }
}
</script>

<template>
  <div>
    <!-- Offline State automatically shown when WiFi / Network disconnects -->
    <div
      v-if="!isOnline"
      class="min-h-screen flex flex-col bg-white font-sans antialiased text-[#29241f]"
    >
      <AppHeader :force-light="true" />
      <main class="flex-grow flex items-center justify-center pt-28 sm:pt-32 pb-16">
        <div class="w-full max-w-[1480px] mx-auto px-4">
          <EmptyState
            image-src="/images/empty-state-network.svg"
            title="We're Unable to Connect to Our Services"
            description="It looks like there's a problem establishing a connection. This could be caused by a network interruption or an unstable internet connection. Please verify your connection and try again in a few moments."
            button-text="Try Again"
            @action="handleRetry"
          />
        </div>
      </main>
      <AppFooter />
    </div>

    <!-- Normal Layout -->
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
