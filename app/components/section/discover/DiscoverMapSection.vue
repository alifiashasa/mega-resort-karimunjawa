<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <section id="location-map" class="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden select-none">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/discover/discover-sunset-villas.jpg"
        alt="Mega Resort Karimunjawa at Sunset"
        class="w-full h-full object-cover object-center"
        loading="lazy"
      />
      <!-- Soft Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/50" />
    </div>

    <!-- Interactive Island Map Graphic Layer -->
    <div class="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
      <div class="relative w-full max-w-[1480px] h-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        
        <!-- SVG Archipelago Contour Illustration -->
        <div class="absolute left-8 sm:left-16 lg:left-24 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[620px] opacity-80 pointer-events-auto">
          <svg
            viewBox="0 0 500 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-auto drop-shadow-lg"
          >
            <!-- Karimunjawa Main Island Contour -->
            <path
              d="M120,180 C90,160 80,130 110,100 C140,70 190,60 220,90 C250,110 270,90 300,100 C330,110 320,150 290,180 C260,200 240,220 200,210 C160,200 140,200 120,180 Z"
              stroke="rgba(255, 255, 255, 0.7)"
              stroke-width="1.8"
              stroke-dasharray="4 2"
              fill="rgba(255, 255, 255, 0.05)"
            />
            <!-- Kemujan Island Contour -->
            <path
              d="M260,85 C275,60 310,50 335,70 C360,90 350,120 330,130 C300,140 280,120 260,85 Z"
              stroke="rgba(255, 255, 255, 0.85)"
              stroke-width="2"
              fill="rgba(255, 255, 255, 0.12)"
            />
            <!-- Small Outer Islets -->
            <path
              d="M70,80 C65,70 80,65 85,75 C90,85 75,90 70,80 Z"
              stroke="rgba(255, 255, 255, 0.6)"
              stroke-width="1.5"
              fill="rgba(255, 255, 255, 0.05)"
            />
            <path
              d="M370,160 C365,150 380,145 385,155 C390,165 375,170 370,160 Z"
              stroke="rgba(255, 255, 255, 0.6)"
              stroke-width="1.5"
              fill="rgba(255, 255, 255, 0.05)"
            />
            <!-- Dashed Route Line to Resort -->
            <path
              d="M180,140 Q240,110 300,85"
              stroke="#FFA03F"
              stroke-width="2"
              stroke-dasharray="5 3"
            />
          </svg>

          <!-- Golden Pin Marker on Kemujan Island -->
          <div class="absolute top-[28%] left-[58%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group cursor-pointer">
            <div class="relative flex items-center justify-center">
              <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#FFA03F] opacity-75" />
              <div class="relative w-7 h-7 rounded-full bg-[#FFA03F] flex items-center justify-center text-white shadow-lg">
                <MapPin class="w-4 h-4 fill-white" />
              </div>
            </div>
            <span class="font-spartan text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 shadow-md">
              MEGA RESORT KARIMUNJAWA
            </span>
          </div>
        </div>

        <!-- Right: Glassmorphic Location Info Card -->
        <div class="ml-auto pointer-events-auto max-w-[420px] w-full bg-black/65 backdrop-blur-md border border-white/20 rounded-[16px] p-6 sm:p-8 text-white shadow-2xl">
          <h3 class="font-spartan text-xl sm:text-2xl font-bold mb-3 tracking-wide">
            {{ t('discoverPage.map.title') }}
          </h3>
          <p class="font-opensans text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
            {{ t('discoverPage.map.description') }}
          </p>
          <div class="pt-4 border-t border-white/15 flex items-center gap-2 text-xs sm:text-[13px] text-[#FFA03F]">
            <MapPin class="w-4 h-4 shrink-0" />
            <span class="font-opensans font-medium text-white/90">
              {{ t('discoverPage.map.location') }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
