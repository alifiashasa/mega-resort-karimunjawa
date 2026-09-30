<script setup lang="ts">
import { ChevronDown, ChevronUp } from 'lucide-vue-next'
import IconLotus from '~/components/common/icons/IconLotus.vue'

const { t, locale } = useI18n()

// Active category filter state
const activeCategory = ref('all')

// Accordion expanded state (can store multiple open IDs or single open ID; default open the first one like screenshot)
const openFaqId = ref<number | null>(1)

const toggleFaq = (id: number) => {
  if (openFaqId.value === id) {
    openFaqId.value = null
  } else {
    openFaqId.value = id
  }
}

interface FaqItem {
  id: number
  category: string
  questionEn: string
  questionId: string
  answerEn: string
  answerId: string
  hasWhatsappLink?: boolean
}

const categories = computed(() => [
  { id: 'all', nameEn: 'General', nameId: 'Umum' },
  { id: 'booking', nameEn: 'Booking & Reservation', nameId: 'Pemesanan & Reservasi' },
  { id: 'transportation', nameEn: 'Transportation', nameId: 'Transportasi' },
  { id: 'activities', nameEn: 'Activities & Experience', nameId: 'Aktivitas & Pengalaman' },
  { id: 'diving', nameEn: 'Diving & Snorkeling', nameId: 'Diving & Snorkeling' },
  { id: 'location', nameEn: 'Location', nameId: 'Lokasi' },
])

const faqList = computed<FaqItem[]>(() => [
  {
    id: 1,
    category: 'booking',
    questionEn: 'Can I get help with my booking?',
    questionId: 'Bisakah saya mendapatkan bantuan untuk pemesanan saya?',
    answerEn: 'Of course! If you need assistance with reservations or bookings, our team is ready to assist you directly. You can contact us via WhatsApp for a fast and personalized response.',
    answerId: 'Tentu saja! Jika Anda memerlukan bantuan mengenai reservasi atau pemesanan kamar, tim kami siap membantu Anda secara langsung melalui WhatsApp untuk respon cepat dan personal.',
    hasWhatsappLink: true,
  },
  {
    id: 2,
    category: 'diving',
    questionEn: 'Is Mega Resort a certified dive center?',
    questionId: 'Apakah Mega Resort merupakan pusat menyelam bersertifikasi?',
    answerEn: 'Yes, Mega Resort collaborates with certified dive masters and offers certified diving trips, professional equipment rentals, and guided diving sessions across Karimunjawa’s best underwater spots.',
    answerId: 'Ya, Mega Resort bekerja sama dengan dive master bersertifikasi dan menyediakan paket menyelam, penyewaan perlengkapan profesional, serta pemanduan menyelam di spot terbaik Karimunjawa.',
  },
  {
    id: 3,
    category: 'booking',
    questionEn: 'Are meals and amenities included in the room packages?',
    questionId: 'Apakah makanan dan fasilitas sudah termasuk dalam paket kamar?',
    answerEn: 'Yes, all our stay packages include daily complimentary breakfast, access to resort facilities, high-speed Wi-Fi, and personalized island assistance. Full-board meal packages are also available upon request.',
    answerId: 'Ya, semua paket menginap kami sudah termasuk sarapan harian, akses fasilitas resort, Wi-Fi berkecepatan tinggi, dan bantuan pramutamu. Paket makan lengkap juga tersedia berdasarkan permintaan.',
  },
  {
    id: 4,
    category: 'transportation',
    questionEn: 'How do I get boat tickets to Karimunjawa?',
    answerEn: 'You can book fast boat (Express Bahari) tickets from Jepara to Karimunjawa or slow ferry (KMP Siginjai). Our team can also assist you with ticket bookings as part of our travel packages.',
    questionId: 'Bagaimana cara mendapatkan tiket kapal ke Karimunjawa?',
    answerId: 'Anda dapat memesan tiket kapal cepat (Express Bahari) dari Jepara ke Karimunjawa atau kapal feri (KMP Siginjai). Tim kami juga dapat membantu pemesanan tiket sebagai bagian dari paket liburan Anda.',
  },
  {
    id: 5,
    category: 'transportation',
    questionEn: 'How do I get from the harbour to the resort?',
    questionId: 'Bagaimana cara menuju resort dari pelabuhan Karimunjawa?',
    answerEn: 'We provide complimentary pickup and drop-off shuttle services between Karimunjawa Harbour and Mega Resort for all confirmed guests upon arrival and departure.',
    answerId: 'Kami menyediakan layanan antar-jemput gratis antara Pelabuhan Karimunjawa dan Mega Resort untuk semua tamu yang telah melakukan konfirmasi reservasi.',
  },
  {
    id: 6,
    category: 'activities',
    questionEn: 'What activities are available at Mega Resort?',
    questionId: 'Aktivitas apa saja yang tersedia di Mega Resort?',
    answerEn: 'Guests can enjoy island hopping, snorkeling, scuba diving, kayaking, sunset watching, beach dinners, and exploring local Karimunjawa culture.',
    answerId: 'Tamu dapat menikmati island hopping, snorkeling, scuba diving, bermain kayak, menikmati matahari terbenam, makan malam di pantai, serta menjelajahi budaya lokal Karimunjawa.',
  },
  {
    id: 7,
    category: 'diving',
    questionEn: 'Is snorkeling available for beginners?',
    questionId: 'Apakah aktivitas snorkeling ramah untuk pemula?',
    answerEn: 'Absolutely! We provide life jackets, high-quality snorkeling gear, and experienced guides to assist beginners and non-swimmers safely in shallow reef areas.',
    answerId: 'Tentu saja! Kami menyediakan pelampung keselamatan, peralatan snorkeling berkualitas, dan pemandu berpengalaman untuk mendampingi pemula serta non-perenang dengan aman di area terumbu karang dangkal.',
  },
  {
    id: 8,
    category: 'general',
    questionEn: 'What makes Mega Resort unique?',
    questionId: 'Apa yang membuat Mega Resort unik dan berbeda?',
    answerEn: 'Mega Resort combines direct private beach access, authentic wooden tropical villas, personalized island tour packages, and warm Indonesian hospitality in an untouched marine sanctuary.',
    answerId: 'Mega Resort memadukan akses pantai pribadi langsung, villa kayu tropis yang otentik, paket tur pulau yang disesuaikan secara personal, dan keramahan khas Indonesia di suaka laut yang asri.',
  },
  {
    id: 9,
    category: 'location',
    questionEn: 'Where is Mega Resort located?',
    questionId: 'Di mana lokasi Mega Resort Karimunjawa?',
    answerEn: 'Mega Resort is located in Kemujan, Karimunjawa Island, Jepara Regency, Central Java, Indonesia, surrounded by crystal-clear turquoise waters and lush tropical landscapes.',
    answerId: 'Mega Resort berlokasi di Kemujan, Pulau Karimunjawa, Kabupaten Jepara, Jawa Tengah, Indonesia, dikelilingi oleh air laut pirus yang jernih dan lanskap tropis yang alami.',
  },
])

const filteredFaqs = computed(() => {
  if (activeCategory.value === 'all') {
    return faqList.value
  }
  return faqList.value.filter(faq => faq.category === activeCategory.value)
})
</script>

<template>
  <section class="w-full bg-white text-[#29241f] py-12 sm:py-16 md:py-20 select-none">
    <div class="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Center Header -->
      <div class="text-center flex flex-col items-center mb-8 sm:mb-10">
        <!-- Lotus Icon -->
        <div class="w-10 h-7 sm:w-12 sm:h-8 mb-4 text-[#977E5B] flex items-center justify-center">
          <IconLotus class-name="w-full h-full fill-[#977E5B]" />
        </div>

        <!-- Title -->
        <h1 class="text-2xl sm:text-3xl md:text-[48px] font-semibold text-[#977E5B] tracking-tight leading-tight mb-3.5 font-spartan">
          {{ t('faqPage.title', 'How Can We Assist You?') }}
        </h1>

        <!-- Subtitle -->
        <p class="text-xs sm:text-sm md:text-[20px] text-[#717680] leading-relaxed max-w-3xl mx-auto font-sans">
          {{ t('faqPage.description', 'Find quick answers about reservations, transportation, activities, and your stay at Mega Resort Karimunjawa. If you still have questions, our team is ready to help.') }}
        </p>
      </div>

      <!-- Filter Category Pills (One Line on desktop/tablet with custom colors) -->
      <div class="w-full flex items-center justify-start sm:justify-center overflow-x-auto sm:overflow-visible flex-nowrap gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-10 pb-2 sm:pb-0 scrollbar-none">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          class="px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full text-xs sm:text-[14px] font-regular whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0"
          :class="[
            activeCategory === cat.id
              ? 'bg-[#977E5B] text-white shadow-xs'
              : 'bg-[#F6F4F0] text-[#977E5B] hover:bg-[#ECE8DF]'
          ]"
          @click="activeCategory = cat.id"
        >
          {{ locale === 'id' ? cat.nameId : cat.nameEn }}
        </button>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-3 sm:space-y-3.5">
        <div
          v-for="faq in filteredFaqs"
          :key="faq.id"
          class="rounded-[16px] sm:rounded-[18px] transition-all duration-300 overflow-hidden"
          :class="[
            openFaqId === faq.id
              ? 'bg-[#977E5B] text-white shadow-xs'
              : 'bg-[#F5F5F5] text-[#1C1C1C] hover:bg-[#EEEEEE]'
          ]"
        >
          <!-- Accordion Header Button -->
          <button
            type="button"
            class="w-full px-6 py-4.5 sm:px-7 sm:py-5 flex items-center justify-between text-left cursor-pointer transition-colors duration-200"
            @click="toggleFaq(faq.id)"
          >
            <span
              class="text-sm sm:text-[17px] md:text-[18px] font-medium pr-4 leading-snug"
              :class="openFaqId === faq.id ? 'text-white' : 'text-[#1C1C1C]'"
            >
              {{ locale === 'id' ? faq.questionId : faq.questionEn }}
            </span>

            <!-- Chevron Icon Button (White circle in both states) -->
            <div
              class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200"
            >
              <ChevronUp v-if="openFaqId === faq.id" class="w-4 h-4 sm:w-5 sm:h-5 text-[#977E5B] stroke-[2.5]" />
              <ChevronDown v-else class="w-4 h-4 sm:w-5 sm:h-5 text-[#717680] stroke-[2]" />
            </div>
          </button>

          <!-- Accordion Answer Details with Divider -->
          <div
            v-if="openFaqId === faq.id"
            class="border-t border-white/15 px-6 py-4.5 sm:px-7 sm:py-5 text-xs sm:text-[14.5px] md:text-[15px] text-white/90 leading-relaxed font-sans animate-fade-in"
          >
            <p>
              {{ locale === 'id' ? faq.answerId : faq.answerEn }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.animate-fade-in {
  animation: fadeIn 0.25s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
