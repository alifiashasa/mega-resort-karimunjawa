<script setup lang="ts">
import { useResortStore } from '~/stores/resortStore'
import NewsCard from '~/components/card/NewsCard.vue'
import { ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()
const store = useResortStore()

const newsArticles = computed(() => store.resortData?.news || [])
</script>

<template>
  <section id="blog" class="pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 bg-[#FFF9EB]">
    <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
        <h2 class="font-spartan text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#977E5B] tracking-normal leading-tight">
          {{ t('news.title') }}
        </h2>
        <p class="font-urbanist text-xs sm:text-sm md:text-[20px] text-[#717680] leading-relaxed mt-3.5">
          {{ t('news.description') }}
        </p>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        <NewsCard
          v-for="article in newsArticles"
          :key="article.id"
          :news="article"
        />
      </div>

      <!-- Bottom Bar: Progress Indicator & Action Link -->
      <div class="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-end gap-6 sm:gap-8">
        <!-- Progress Line Indicator -->
        <div class="w-44 sm:w-56 h-[2px] bg-[#D5D7DA] rounded-full overflow-hidden flex">
          <div class="w-1/2 h-full bg-[#977E5B] rounded-full" />
        </div>

        <!-- Discover More Activities Link -->
        <NuxtLink
          :to="localePath('/blog')"
          class="font-urbanist text-xs sm:text-sm font-semibold text-[#977E5B] hover:text-[#7A6042] flex items-center gap-1.5 transition-colors group cursor-pointer"
        >
          <span>{{ t('news.discoverMore') }}</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

