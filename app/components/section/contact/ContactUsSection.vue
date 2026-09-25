<script setup lang="ts">
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-vue-next'
import IconWhatsapp from '~/components/common/icons/IconWhatsapp.vue'
import IconInstagram from '~/components/common/icons/IconInstagram.vue'
import IconTiktok from '~/components/common/icons/IconTiktok.vue'

const { t } = useI18n()

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  if (!formData.name.trim() || !formData.email.trim()) return
  
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  isSubmitting.value = false
  isSubmitted.value = true
  
  formData.name = ''
  formData.email = ''
  formData.message = ''
  
  setTimeout(() => {
    isSubmitted.value = false
  }, 6000)
}
</script>

<template>
  <section class="w-full bg-white text-[#29241f] select-none">
    <!-- Container Split Row: Kiri Gambar Banner Menempel Penuh ke Navbar, Kanan Form & Info -->
    <div class="contact-container flex flex-col md:flex-row w-full min-h-[calc(100vh-88px)]">
      
      <!-- Sisi Kiri: Banner Gambar Visual Menempel Langsung dari Batas Bawah Navbar -->
      <div class="contact-banner w-full md:w-[35%] lg:w-[33%] xl:w-[32%] relative overflow-hidden min-h-[480px] md:min-h-full flex flex-col justify-end shrink-0">
        <img
          src="/images/discover/discover-map-bg.webp"
          alt="Beauty of Mega Resort Karimun Jawa"
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none"></div>

        <!-- Overlay Teks di bagian bawah banner -->
        <div class="relative z-10 p-6 sm:p-7 md:p-6 lg:p-7 xl:p-8 text-white w-full pr-3 sm:pr-4 md:pr-5">
          <h2 class="text-2xl sm:text-3xl xl:text-[46px] font-semibold leading-tight mb-3 tracking-normal text-white font-spartan w-full">
            Beauty of Mega Resort Karimun Jawa
          </h2>
          <p class="text-white/90 text-xs sm:text-[20px] xl:text-[14px] leading-relaxed w-full font-normal font-sans">
            Nestled within the breathtaking waters of the Karimunjawa archipelago, Mega Resort Karimunjawa
          </p>
        </div>
      </div>

      <!-- Sisi Kanan: Konten & Formulir Kontak dengan Padding Atas yang Nyaman -->
      <div class="contact-content w-full md:w-[65%] lg:w-[67%] xl:w-[68%] flex-1 bg-white flex flex-col justify-start px-6 sm:px-10 md:px-10 lg:px-14 xl:px-18 pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-12 sm:pb-16">
        <div class="w-full max-w-5xl">
          
          <!-- Header Informasi -->
          <div class="mb-8">
            <span class="text-xs sm:text-[18px] text-[#717680] font-normal block mb-4 font-sans">
              {{ t('contactPage.badge', 'Get in Touch') }}
            </span>
            <h1 class="text-2xl sm:text-3xl md:text-[34px] lg:text-[48px] font-semibold text-[#977E5B] leading-[1.2] tracking-tight mb-3.5 max-w-4xl font-spartan">
              {{ t('contactPage.title', 'We’re Here to Help You Plan Your Perfect Stay') }}
            </h1>
            <p class="text-xs sm:text-sm md:text-[20px] text-[#717680] leading-relaxed max-w-4xl font-sans">
              {{ t('contactPage.description', 'Have questions or need help planning your trip to Mega Resort Karimunjawa? Our team is ready to assist you with everything from reservations and transportation to your stay. Feel free to contact us anytime.') }}
            </p>
          </div>

          <!-- Grid Formulir (Card) & Info Kontak Berdampingan -->
          <div class="flex flex-col sm:flex-row gap-8 lg:gap-12 xl:gap-16 items-start w-full">
            
            <!-- Formulir Input (Kiri) -->
            <div class="w-full sm:w-[400px] md:w-[440px] lg:w-[480px] shrink-0">
              <!-- Success Alert -->
              <div
                v-if="isSubmitted"
                class="mb-4 p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] flex items-center gap-2.5 text-xs sm:text-sm animate-fade-in"
              >
                <CheckCircle2 class="w-4 h-4 shrink-0 text-[#22C55E]" />
                <span>{{ t('contactPage.form.successMessage', 'Pesan Anda telah berhasil dikirim! Tim kami akan segera menghubungi Anda.') }}</span>
              </div>

              <form class="space-y-4" @submit.prevent="handleSubmit">
                <!-- Nama Lengkap -->
                <div>
                  <label class="block text-sm font-medium text-[#090C10] mb-2 font-sans">
                    {{ t('contactPage.form.nameLabel', 'Nama Lengkap') }}
                  </label>
                  <input
                    v-model="formData.name"
                    type="text"
                    required
                    :placeholder="t('contactPage.form.namePlaceholder', 'Masukkan nama lengkap Anda')"
                    class="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-sm text-[#1C1C1C] placeholder-[#9CA3AF] focus:outline-none focus:border-[#8F7653] transition-colors"
                  />
                </div>

                <!-- Alamat Email -->
                <div>
                  <label class="block text-sm font-medium text-[#090C10] mb-2 font-sans">
                    {{ t('contactPage.form.emailLabel', 'Alamat Email') }}
                  </label>
                  <input
                    v-model="formData.email"
                    type="email"
                    required
                    :placeholder="t('contactPage.form.emailPlaceholder', 'contoh@email.com')"
                    class="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-sm text-[#1C1C1C] placeholder-[#9CA3AF] focus:outline-none focus:border-[#8F7653] transition-colors"
                  />
                </div>

                <!-- Label (Opsional) / Pesan -->
                <div>
                  <label class="block text-sm font-medium text-[#090C10] mb-2 font-sans">
                    {{ t('contactPage.form.messageLabel', 'Label') }}
                    <span class="text-[#9CA3AF] font-normal text-xs sm:text-sm ml-1">{{ t('contactPage.form.messageOptional', '(Opsional)') }}</span>
                  </label>
                  <textarea
                    v-model="formData.message"
                    rows="4"
                    :placeholder="t('contactPage.form.messagePlaceholder', 'Tuliskan pertanyaan atau kendala Anda di sini...')"
                    class="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-sm text-[#1C1C1C] placeholder-[#9CA3AF] focus:outline-none focus:border-[#8F7653] transition-colors resize-none"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <div class="pt-2">
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full py-3.5 px-6 rounded-[14px] bg-[#937A54] hover:bg-[#886F4A] active:scale-[0.99] disabled:opacity-70 text-white font-medium text-sm sm:text-base text-center transition-all duration-200 cursor-pointer border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)] font-sans"
                  >
                    <span v-if="isSubmitting">{{ t('contactPage.form.submitting', 'Mengirim...') }}</span>
                    <span v-else>{{ t('contactPage.form.submit', 'Submit') }}</span>
                  </button>
                </div>
              </form>
            </div>

            <!-- Detail Info Kontak (Kanan) -->
            <div class="w-full sm:flex-1 space-y-7 pt-1 sm:pl-2">
              
              <!-- Our Address -->
              <div class="space-y-3">
                <div class="w-10 h-10 rounded-[12px] bg-[#977E5B] flex items-center justify-center text-white shadow-xs">
                  <MapPin class="w-7 h-7 text-white stroke-[1.8]" />
                </div>
                <div>
                  <h3 class="font-regular text-base text-[#090C10] mb-1.5 font-sans">
                    {{ t('contactPage.info.addressTitle', 'Our Address') }}
                  </h3>
                  <p class="text-sm text-[#717680] leading-relaxed max-w-[280px] font-sans">
                    {{ t('contactPage.info.addressContent', '5GR5+F7C, Kemujan, Karimunjawa, Kabupaten Jepara, Jawa Tengah') }}
                  </p>
                </div>
              </div>

              <!-- Contact Us -->
              <div class="space-y-3">
                <div class="w-10 h-10 rounded-[12px] bg-[#977E5B] flex items-center justify-center text-white shadow-xs">
                  <Phone class="w-7 h-7 text-white stroke-[1.8]" />
                </div>
                <div>
                  <h3 class="font-regular text-base text-[#090C10] mb-3 font-sans">
                    {{ t('contactPage.info.contactTitle', 'Contact Us') }}
                  </h3>
                  
                  <ul class="space-y-2.5 text-sm text-[#8F7653] font-sans font-normal">
                    <!-- Phone / WhatsApp -->
                    <li class="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
                      <IconWhatsapp class-name="w-4 h-4 text-[#8F7653] shrink-0" />
                      <a href="tel:088xxxxxxx">{{ t('contactPage.info.phone', '088-xxx-xxxx') }}</a>
                    </li>

                    <!-- Email -->
                    <li class="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
                      <Mail class="w-4 h-4 text-[#8F7653] shrink-0 stroke-[1.6]" />
                      <a href="mailto:Megaresort@gmail.com">{{ t('contactPage.info.email', 'Megaresort@gmail.com') }}</a>
                    </li>

                    <!-- Instagram -->
                    <li class="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
                      <IconInstagram class-name="w-4 h-4 text-[#8F7653] shrink-0" />
                      <a href="https://instagram.com/megaresortkarimunjawa" target="_blank">{{ t('contactPage.info.instagram', '@megaresortkarimunjawa') }}</a>
                    </li>

                    <!-- TikTok -->
                    <li class="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
                      <IconTiktok class-name="w-4 h-4 text-[#8F7653] fill-current shrink-0" />
                      <a href="https://tiktok.com/@megaresortkarimunjawa" target="_blank">{{ t('contactPage.info.tiktok', '@megaresortkarimunjawa') }}</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@media (min-width: 768px) {
  .contact-container {
    flex-direction: row !important;
    align-items: stretch !important;
    min-height: 834px !important;
  }
  .contact-banner {
    width: 478px !important;
    min-width: 478px !important;
    max-width: 478px !important;
    height: 834px !important;
    min-height: 834px !important;
    flex-shrink: 0 !important;
  }
  .contact-content {
    flex: 1 !important;
    min-height: 834px !important;
  }
}
</style>
