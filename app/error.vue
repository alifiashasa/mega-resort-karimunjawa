<script setup lang="ts">
import type { NuxtError } from '#app'
import AppHeader from '~/components/navigation/AppHeader.vue'
import AppFooter from '~/components/navigation/AppFooter.vue'
import EmptyState from '~/components/common/EmptyState.vue'

interface Props {
  error: NuxtError
}

const props = defineProps<Props>()

const { t } = useI18n()

useHead({
  title: 'Temporary Issue | Mega Resort Karimunjawa',
  meta: [
    { name: 'description', content: "The page you're looking for is currently unavailable due to a technical problem." },
  ],
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white font-sans antialiased text-[#29241f]">
    <!-- Navbar with Light Theme -->
    <AppHeader :force-light="true" />

    <!-- Center Content -->
    <main class="flex-grow flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <EmptyState
          @action="handleError"
        />
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>
