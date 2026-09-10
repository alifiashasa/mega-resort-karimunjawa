<script setup lang="ts">
import ResortLogo from '~/components/common/ResortLogo.vue'
import { Phone, Mail, MapPin, Instagram, Star, Award, ShieldCheck } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
const localePath = useLocalePath()

const siteMapLinks = computed(() => [
  { name: 'Home', href: localePath('/') },
  { name: 'Rooms', href: localePath('/rooms') },
  { name: 'Facility', href: localePath('/') + '#about' },
  { name: 'Gallary', href: localePath('/') + '#gallery' },
  { name: 'Package', href: localePath('/') + '#package' },
  { name: 'Discover', href: localePath('/') + '#about' },
  { name: 'Blog', href: localePath('/') + '#blog' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'FAQ', href: '#faq' },
])

const aboutUsLinks = computed(() => [
  { name: 'Overview', href: localePath('/') + '#about' },
  { name: 'Journey Mega Resort', href: localePath('/') + '#about' },
  { name: 'Find Mega resort', href: localePath('/') + '#contact' },
  { name: 'Why Choose Us', href: localePath('/') + '#about' },
])

const roomsLinks = computed(() => [
  { name: 'Mermaid Rooms', href: localePath('/rooms') },
  { name: 'Cemara Rooms', href: localePath('/rooms') },
  { name: 'Mahi - Mahi Rooms', href: localePath('/rooms') },
  { name: 'Nemo Rooms', href: localePath('/rooms') },
])

const awards = [
  { name: 'TripAdvisor', icon: 'star' },
  { name: 'Luxury Awards', icon: 'award' },
  { name: 'Green Certified', icon: 'green' },
]

</script>

<template>
  <footer id="contact" class="bg-[#F5F5F5] text-[#4A4A4A] pt-14 pb-10 border-t border-[#E5E5E5] font-sans">
    <div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <!-- Main Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">
        <!-- Col 1: Brand Info & Bio (Span 4) -->
        <div class="lg:col-span-4 space-y-4 pr-0 lg:pr-4">
          <ResortLogo variant="color" size="lg" />
          <p class="text-xs sm:text-[14px] text-[#717680] leading-relaxed max-w-sm pt-1">
            More than just a place to stay, Mega Resort Karimunjawa is a destination where nature, comfort, and serenity meet. Surrounded by the beauty of Karimunjawa's islands, every moment is designed to let you slow down, breathe deeper, and enjoy an authentic tropical escape from sunrise to sunset.
          </p>
          <div class="pt-2">
            <a
              href="#about"
              class="inline-block px-5 py-2.5 text-xs sm:text-[13px] font-normal text-white bg-[#977E5B] hover:bg-[#785f40] rounded-lg transition-colors shadow-xs"
            >
              See more about us
            </a>
          </div>
        </div>

        <!-- Col 2: Site Map (Span 2) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="font-bold text-sm sm:text-[18px] text-[#1C1C1C]">
            Site Map
          </h4>
          <ul class="space-y-2.5 text-xs sm:text-[13px] text-[#666666]">
            <li v-for="link in siteMapLinks" :key="link.name">
              <a :href="link.href" class="hover:text-[#8C704E] transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: About Us (Span 2) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="font-bold text-sm sm:text-[18px] text-[#1C1C1C]">
            About Us
          </h4>
          <ul class="space-y-2.5 text-xs sm:text-[13px] text-[#666666]">
            <li v-for="link in aboutUsLinks" :key="link.name">
              <a :href="link.href" class="hover:text-[#8C704E] transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 4: Rooms (Span 2) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="font-bold text-sm sm:text-[18px] text-[#1C1C1C]">
            Rooms
          </h4>
          <ul class="space-y-2.5 text-xs sm:text-[13px] text-[#666666]">
            <li v-for="link in roomsLinks" :key="link.name">
              <a :href="link.href" class="hover:text-[#8C704E] transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 5: Contact Us (Span 2) -->
        <div class="lg:col-span-2 space-y-3">
          <h4 class="font-bold text-sm sm:text-[18px] text-[#1C1C1C]">
            Contact Us
          </h4>
          <ul class="space-y-3 text-xs sm:text-[13px] text-[#666666]">
            <!-- Phone -->
            <li class="flex items-center gap-2.5">
              <Phone class="w-4 h-4 text-[#737373] shrink-0" />
              <span>08xx - xxxx - xxxx</span>
            </li>
            <!-- Email -->
            <li class="flex items-start gap-2.5">
              <Mail class="w-4 h-4 text-[#737373] shrink-0 mt-0.5" />
              <span class="break-all">Megaresortkarimunjawa@gmail.com</span>
            </li>
            <!-- Instagram -->
            <li class="flex items-center gap-2.5">
              <Instagram class="w-4 h-4 text-[#737373] shrink-0" />
              <a href="https://instagram.com/Megaresortkarimunjawa" target="_blank" class="hover:text-[#8C704E] transition-colors">
                @Megaresortkarimunjawa
              </a>
            </li>
            <!-- TikTok -->
            <li class="flex items-center gap-2.5">
              <IconTiktok class-name="w-4 h-4 text-[#737373] shrink-0 fill-current" />
              <a href="https://tiktok.com/@Mega.resort.karim" target="_blank" class="hover:text-[#8C704E] transition-colors">
                @Mega.resort.karim
              </a>
            </li>
            <!-- Address -->
            <li class="flex items-start gap-2.5">
              <MapPin class="w-4 h-4 text-[#737373] shrink-0 mt-0.5" />
              <span class="leading-relaxed">Jl. Sentyaki Raya No.7, Bulu Lor, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50179</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Awards & Recognitions Section -->
      <div class="border-t border-[#E5E5E5] pt-8 pb-6 text-center">
        <h5 class="font-bold text-[#8C704E] text-sm sm:text-base mb-5 tracking-wide">
          Award & Recognitions
        </h5>
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <!-- TripAdvisor -->
          <div class="flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-[#FFFEEB] text-[#FA9D33] text-xs sm:text-[14px] font-medium">
            <IconStarSolid class-name="w-4 h-4 fill-[#FA9D33]" />
            <span>TripAdvisor</span>
          </div>
          <!-- Luxury Awards -->
          <div class="flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-[#FFFEEB] text-[#FA9D33] text-xs sm:text-[14px] font-medium">
            <IconAwardShield class-name="w-4 h-4 fill-[#FA9D33]" />
            <span>Luxury Awards</span>
          </div>
          <!-- Green Certified -->
          <div class="flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-[#FFFEEB] text-[#FA9D33] text-xs sm:text-[14px] font-medium">
            <IconTreeLeaf class-name="w-4 h-4 fill-[#FA9D33]" />
            <span>Green Certified</span>
          </div>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="border-t border-[#E5E5E5] pt-6 text-center text-xs sm:text-[13px] text-[#888888]">
        <p>© 2025, All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>
