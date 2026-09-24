<script setup lang="ts">
import type { NewsItem } from '~/types'
import { Calendar } from 'lucide-vue-next'

interface Props {
  news: NewsItem
}

defineProps<Props>()
</script>

<template>
  <article class="bg-white rounded-[22px] overflow-hidden border border-[#E9EAEB]/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 group flex flex-col h-full w-full">
    <!-- Thumbnail Image -->
    <NuxtLink :to="`/blog/${news.id}`" class="relative h-[270px] sm:h-[280px] w-full shrink-0 overflow-hidden bg-gray-100 block cursor-pointer">
      <img
        :src="news.image"
        :alt="news.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
      />
    </NuxtLink>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-grow justify-between">
      <div>
        <!-- Date -->
        <div class="flex items-center gap-1.5 font-urbanist text-xs text-[#717680] mb-2.5">
          <Calendar class="w-3.5 h-3.5 text-[#717680] shrink-0" />
          <span>{{ news.date }}</span>
        </div>

        <!-- Title -->
        <NuxtLink :to="`/blog/${news.id}`" class="block cursor-pointer">
          <h3 class="font-spartan text-[17px] sm:text-[24px] font-semibold text-[#090C10] group-hover:text-[#977E5B] transition-colors line-clamp-2 leading-snug mb-2.5">
            {{ news.title }}
          </h3>
        </NuxtLink>

        <!-- Excerpt -->
        <p class="font-urbanist text-xs sm:text-[18px] text-[#717680] line-clamp-2 leading-relaxed mb-6">
          {{ news.excerpt }}
        </p>
      </div>

      <!-- Author -->
      <div class="flex items-center gap-3 pt-2">
        <!-- Avatar Image or PM Initials circle -->
        <template v-if="news.author?.avatar">
          <img
            :src="news.author.avatar"
            :alt="news.author.name"
            class="w-9 h-9 rounded-full object-cover shrink-0"
          />
        </template>
        <template v-else>
          <div class="w-9 h-9 rounded-full bg-[#0092B3] text-white flex items-center justify-center font-bold text-xs shrink-0 tracking-wider">
            {{ news.author?.initials || 'PM' }}
          </div>
        </template>

        <div class="flex flex-col">
          <span class="font-urbanist font-normal text-xs sm:text-[14px] text-[#090C10] leading-tight">
            {{ news.author?.name || 'Jenny Wilson' }}
          </span>
          <span class="font-urbanist text-[11px] sm:text-xs text-[#717680] leading-tight mt-0.5">
            {{ news.author?.role || 'Web Designer' }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

