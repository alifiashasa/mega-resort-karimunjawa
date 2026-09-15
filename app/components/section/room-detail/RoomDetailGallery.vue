<script setup lang="ts">
import ResortLogo from '~/components/common/ResortLogo.vue'

const galleryPhotos = [
  {
    id: 1,
    title: 'Luxury Blue Bath',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury Blue Mosaic Tile Bathroom',
  },
  {
    id: 2,
    title: 'Master Suite Interior',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    alt: 'Master Bedroom Suite Ocean View',
  },
  {
    id: 3,
    title: 'Balcony Soaking Tub',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    alt: 'Outdoor Balcony Ocean Bathtub',
  },
  {
    id: 4,
    title: 'Oceanfront Terrace',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    alt: 'Oceanfront Wooden Terrace Living',
  },
]
</script>

<template>
  <section class="py-8 bg-[#FFF9EB]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-6 sm:space-y-8">
      
      <!-- 4-Grid Horizontal Gallery Row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        <div
          v-for="photo in galleryPhotos"
          :key="photo.id"
          class="relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[280px] rounded-[16px] overflow-hidden group shadow-xs bg-[#e5e7eb]"
        >
          <img
            :src="photo.image"
            :alt="photo.alt"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
        </div>
      </div>

      <!-- Large Full-Width Atmospheric Ocean Banner -->
      <div class="relative w-full h-[360px] sm:h-[480px] lg:h-[580px] rounded-[20px] overflow-hidden shadow-md group bg-[#1b1713]">
        <img
          src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1800&q=85"
          alt="Mega Resort Karimunjawa Ocean Balcony Experience"
          class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000 ease-out"
          loading="lazy"
        />
        
        <!-- Subtle gradient overlay for luxury feel -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        <!-- Resort Logo Watermark Top Right -->
        <div class="absolute top-6 right-6 sm:top-8 sm:right-8 z-10 drop-shadow-md">
          <ResortLogo variant="light" layout="stacked" size="sm" />
        </div>
      </div>

    </div>
  </section>
</template>
