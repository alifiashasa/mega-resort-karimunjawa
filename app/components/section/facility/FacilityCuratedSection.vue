<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="facility-highlight" class="py-16 sm:py-20 lg:py-28 bg-[#FDFDFD] overflow-hidden select-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Left Column: 3-Layer Stacked Card Deck Effect -->
        <div class="lg:col-span-6 flex justify-center lg:justify-start">
          <div class="relative w-[280px] sm:w-[350px] md:w-[390px] lg:w-[430px] h-[400px] sm:h-[480px] md:h-[530px] lg:h-[590px] ml-10 sm:ml-14 lg:ml-16">
            <!-- Back Layer 3 (Far Left with ~75% White Wash Overlay) -->
            <div
              class="absolute -left-10 sm:-left-14 top-7 bottom-7 w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-md bg-white pointer-events-none"
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                alt="Mega Resort Landscape"
                class="w-full h-full object-cover object-center opacity-85"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-white/75 pointer-events-none" />
            </div>

            <!-- Middle Layer 2 (Middle Left with ~50% White Wash Overlay) -->
            <div
              class="absolute -left-5 sm:-left-7 top-3.5 bottom-3.5 w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xl bg-white pointer-events-none"
            >
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
                alt="Mega Resort Boardwalk Villa"
                class="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-white/50 pointer-events-none" />
            </div>

            <!-- Front Card Layer 1 (Boardwalk Romantic Dining) -->
            <div
              class="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl bg-neutral-900 group"
            >
              <img
                src="/images/facility-curated-dining.jpg"
                alt="Elevated Comfort Dining"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Right Column: Curated Info & Typography -->
        <div class="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
          <!-- Small Upper Label -->
          <span class="inline-block font-sans text-xs sm:text-sm font-normal tracking-[0.14em] uppercase text-[#717680]">
            {{ t('facilityPage.curated.badge') }}
          </span>

          <!-- Main Title -->
          <h2 class="font-sans text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#977E5B] leading-tight">
            {{ t('facilityPage.curated.title') }}
          </h2>

          <!-- Paragraph Description -->
          <p class="font-sans text-sm sm:text-base text-[#717680] leading-relaxed max-w-xl font-normal">
            {{ t('facilityPage.curated.description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
