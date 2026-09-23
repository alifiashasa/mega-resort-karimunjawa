<script setup lang="ts">
import ResortLogo from '~/components/common/ResortLogo.vue'
import gallery1 from '~/assets/images/package-detail/gallery-1.webp'
import gallery2 from '~/assets/images/package-detail/gallery-2.webp'
import gallery3 from '~/assets/images/package-detail/gallery-3.webp'
import gallery4 from '~/assets/images/package-detail/gallery-4.webp'
import galleryBanner from '~/assets/images/package-detail/gallery-banner.webp'

const topPhotos = [
  { id: 1, src: gallery1, alt: 'Package Activity Experience 1' },
  { id: 2, src: gallery2, alt: 'Package Activity Experience 2' },
  { id: 3, src: gallery3, alt: 'Package Activity Experience 3' },
  { id: 4, src: gallery4, alt: 'Package Activity Experience 4' },
]
</script>

<template>
  <section class="w-full bg-[#FFF9EB] py-0 overflow-hidden">
    <div class="w-full flex flex-col">
      
      <!-- Top Row: 4 Photos Saling Nempel Tanpa Jarak (Grid 4 Columns, Gap 0) Full Layar Kanan Kiri -->
      <div class="grid grid-cols-4 w-full gap-0">
        <div
          v-for="photo in topPhotos"
          :key="photo.id"
          class="relative w-full h-[140px] sm:h-[200px] md:h-[260px] lg:h-[320px] overflow-hidden group bg-[#1b1713]"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            class="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Bottom Image: Saling Nempel Tanpa Jarak (Gap 0), Full Layar Kanan Kiri, Tinggi 700px di Desktop -->
      <div class="relative w-full h-[360px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden group bg-[#1b1713]">
        <img
          :src="galleryBanner"
          alt="Mega Resort Karimunjawa Package Experience"
          class="w-full h-full object-cover object-center block group-hover:scale-102 transition-transform duration-1000 ease-out"
          loading="lazy"
        />

        <!-- Watermark Reusable ResortLogo Component di Pojok Kanan Atas -->
        <div class="absolute top-6 right-6 sm:top-8 sm:right-10 lg:top-10 lg:right-14 z-10 drop-shadow-md pointer-events-none">
          <ResortLogo variant="color" size="lg" />
        </div>
      </div>

    </div>
  </section>
</template>
