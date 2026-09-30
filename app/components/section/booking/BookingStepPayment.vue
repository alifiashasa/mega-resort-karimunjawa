<script setup lang="ts">
import { ref } from 'vue'
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  MessageSquare,
  UploadCloud,
  Calendar,
  Copy,
  Check,
  FileCheck,
  X,
} from 'lucide-vue-next'

export interface PaymentForm {
  accountHolderName: string
  senderBankName: string
  transferDate: string
  receiptFile: File | null
  receiptFileName?: string
}

const emit = defineEmits<{
  (e: 'submitPayment', form: PaymentForm): void
}>()

const form = ref<PaymentForm>({
  accountHolderName: '',
  senderBankName: '',
  transferDate: new Date().toISOString().split('T')[0] || '',
  receiptFile: null,
  receiptFileName: '',
})

const isDragging = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)
const isCopied = ref(false)
const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleCopyAccount = async () => {
  try {
    await navigator.clipboard.writeText('8985490020')
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (e) {
    console.error(e)
  }
}

const triggerFileInput = () => {
  fileInputRef.value?.click()
}

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    form.value.receiptFile = file
    form.value.receiptFileName = file.name
  }
}

const handleDrop = (e: DragEvent) => {
  isDragging.value = false
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
    const file = e.dataTransfer.files[0]
    form.value.receiptFile = file
    form.value.receiptFileName = file.name
  }
}

const removeFile = (e: MouseEvent) => {
  e.stopPropagation()
  form.value.receiptFile = null
  form.value.receiptFileName = ''
  if (fileInputRef.value) {
    fileInputRef.value.value = ''
  }
}

const handleSubmit = () => {
  if (!form.value.accountHolderName.trim() || !form.value.senderBankName.trim() || !form.value.transferDate) {
    alert('Mohon lengkapi semua kolom bertanda bintang (*)')
    return
  }
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    emit('submitPayment', { ...form.value })
  }, 1000)
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div>
      <h1 class="text-xl sm:text-[28px] font-semibold text-[#090C10] font-spartan tracking-tight">
        Complete Your Payment
      </h1>
      <p class="text-xs sm:text-[14px] text-[#717980] font-opensans mt-1 leading-relaxed">
        Finalize your booking by completing the payment through our secure and trusted methods.
      </p>
    </div>

    <!-- Main Payment Container -->
    <div class="bg-white rounded-[16px] border border-[#E9EAEB] p-5 sm:p-7 shadow-xs space-y-6">
      
      <!-- Booking Created Success Banner -->
      <div class="bg-[#F0FDF4] border border-[#DCFAE6] rounded-[12px] p-3.5 sm:p-4 flex items-start gap-3">
        <CheckCircle2 class="w-5 h-5 text-[#12B76A] shrink-0 mt-0.5" />
        <div class="flex flex-col">
          <span class="text-xs sm:text-[13px] font-semibold text-[#027A48]">
            Booking Created!
          </span>
          <span class="text-[11px] sm:text-[12px] text-[#027A48] font-opensans">
            Please complete your payment to confirm your reservation
          </span>
        </div>
      </div>

      <!-- Payment Instruction Section -->
      <div class="space-y-4 pt-1">
        <div>
          <h3 class="text-sm sm:text-[16px] font-semibold text-[#090C10] font-spartan">
            Payment Instruction
          </h3>
          <p class="text-xs sm:text-[13px] text-[#717980] font-opensans mt-0.5">
            Please transfer the total payment to the bank account below.
          </p>
        </div>

        <!-- Bank BCA Card Details -->
        <div class="space-y-4">
          <!-- BCA Logo -->
          <div class="pt-1">
            <svg class="h-7 w-auto" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4C5.37258 4 0 9.37258 0 16V24C0 30.6274 5.37258 36 12 36H28C34.6274 36 40 30.6274 40 24V16C40 9.37258 34.6274 4 28 4H12Z" fill="#0033A0"/>
              <!-- Stylized BCA dual curves -->
              <path d="M14 12C14 12 18 16 18 20C18 24 14 28 14 28H20C24 28 27 24 27 20C27 16 24 12 20 12H14Z" fill="white"/>
              <path d="M22 15C22 15 25 17.5 25 20C25 22.5 22 25 22 25H25C28 25 30 22.5 30 20C30 17.5 28 15 25 15H22Z" fill="#0033A0"/>
              <!-- BCA Text -->
              <text x="48" y="27" fill="#0033A0" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" letter-spacing="1">BCA</text>
            </svg>
          </div>

          <!-- Bank Account Info Table -->
          <div class="space-y-2.5 text-xs sm:text-[14px] font-opensans">
            <div class="grid grid-cols-12 gap-2">
              <span class="col-span-4 sm:col-span-3 text-[#717980]">Bank Name</span>
              <span class="col-span-8 sm:col-span-9 font-semibold text-[#090C10]">BCA (Bank Central Asia)</span>
            </div>
            <div class="grid grid-cols-12 gap-2">
              <span class="col-span-4 sm:col-span-3 text-[#717980]">Account Name</span>
              <span class="col-span-8 sm:col-span-9 font-semibold text-[#090C10]">PT. Legon Permata Buana</span>
            </div>
            <div class="grid grid-cols-12 gap-2 items-center">
              <span class="col-span-4 sm:col-span-3 text-[#717980]">Account Number</span>
              <div class="col-span-8 sm:col-span-9 flex items-center gap-2">
                <span class="font-bold text-[#090C10] tracking-wider text-sm sm:text-[15px]">8985490020</span>
                <button
                  type="button"
                  class="text-[#977E5B] hover:text-[#7A6444] text-xs flex items-center gap-1 cursor-pointer transition-colors p-1"
                  title="Copy Account Number"
                  @click="handleCopyAccount"
                >
                  <Check v-if="isCopied" class="w-3.5 h-3.5 text-[#12B76A]" />
                  <Copy v-else class="w-3.5 h-3.5" />
                  <span class="text-[11px] font-medium" :class="isCopied ? 'text-[#12B76A]' : ''">
                    {{ isCopied ? 'Copied!' : 'Copy' }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upload Payment Proof Section -->
      <div class="space-y-4 pt-2 border-t border-[#F2F4F7]">
        <div>
          <h3 class="text-sm sm:text-[16px] font-semibold text-[#090C10] font-spartan">
            Upload Payment Proof
          </h3>
          <p class="text-xs sm:text-[13px] text-[#717980] font-opensans mt-0.5 leading-relaxed">
            Please upload your payment receipt to verify your reservation. Our team will review your payment within less than 24 hours.
          </p>
        </div>

        <!-- Upload Dropzone -->
        <div class="space-y-1.5">
          <label class="text-xs sm:text-[13px] font-medium text-[#344054] font-opensans flex items-center gap-0.5">
            Upload Receipt <span class="text-red-500">*</span>
          </label>
          
          <input
            ref="fileInputRef"
            type="file"
            accept="image/*,.pdf"
            class="hidden"
            @change="handleFileChange"
          />

          <div
            class="border border-dashed rounded-[14px] p-6 sm:p-7 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200"
            :class="[
              isDragging ? 'border-[#977E5B] bg-[#FAF8F5]' : 'border-[#D0D5DD] bg-[#FCFCFD] hover:bg-[#F9FAFB]',
              form.receiptFile ? 'border-[#12B76A] bg-[#F0FDF4]/30' : ''
            ]"
            @click="triggerFileInput"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleDrop"
          >
            <!-- File selected state -->
            <template v-if="form.receiptFile">
              <div class="w-10 h-10 rounded-full bg-[#D1FADF] text-[#027A48] flex items-center justify-center mb-2">
                <FileCheck class="w-5 h-5" />
              </div>
              <div class="flex items-center gap-2 max-w-full px-4">
                <span class="text-xs sm:text-[13px] font-medium text-[#090C10] truncate">
                  {{ form.receiptFileName }}
                </span>
                <button
                  type="button"
                  class="text-[#98A2B3] hover:text-red-500 p-0.5 transition-colors"
                  @click="removeFile"
                >
                  <X class="w-4 h-4" />
                </button>
              </div>
              <span class="text-[11px] text-[#027A48] font-medium mt-1">
                File successfully attached. Click to change.
              </span>
            </template>

            <!-- Default Dropzone -->
            <template v-else>
              <div class="w-10 h-10 rounded-full border border-[#EAECF0] bg-white text-[#667085] flex items-center justify-center mb-2 shadow-2xs">
                <UploadCloud class="w-5 h-5" />
              </div>
              <p class="text-xs sm:text-[13px] text-[#475467] font-opensans">
                Drag & drop or <span class="text-[#AF8437] font-semibold hover:underline">click to choose files</span>
              </p>
              <span class="text-[11px] text-[#98A2B3] font-opensans mt-1">
                Max file size: 10MB
              </span>
            </template>
          </div>
        </div>

        <!-- Form Inputs -->
        <div class="space-y-3.5">
          <!-- Account Holder Name -->
          <div>
            <label class="block text-xs sm:text-[13px] font-medium text-[#344054] font-opensans mb-1.5">
              Account Holder Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.accountHolderName"
              type="text"
              placeholder="Name used for the transfer"
              class="w-full h-[46px] px-3.5 rounded-[12px] border border-[#E9EAEB] bg-white text-xs sm:text-[13px] text-[#090C10] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] focus:ring-1 focus:ring-[#977E5B] transition-colors"
            />
          </div>

          <!-- 2 Columns: Sender Bank Name & Transfer Date -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label class="block text-xs sm:text-[13px] font-medium text-[#344054] font-opensans mb-1.5">
                Sender Bank Name <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.senderBankName"
                type="text"
                placeholder="Example: BCA"
                class="w-full h-[46px] px-3.5 rounded-[12px] border border-[#E9EAEB] bg-white text-xs sm:text-[13px] text-[#090C10] placeholder-[#98A2B3] focus:outline-none focus:border-[#977E5B] focus:ring-1 focus:ring-[#977E5B] transition-colors"
              />
            </div>

            <div>
              <label class="block text-xs sm:text-[13px] font-medium text-[#344054] font-opensans mb-1.5">
                Transfer Date <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  v-model="form.transferDate"
                  type="date"
                  class="w-full h-[46px] px-3.5 pr-10 rounded-[12px] border border-[#E9EAEB] bg-white text-xs sm:text-[13px] text-[#090C10] focus:outline-none focus:border-[#977E5B] focus:ring-1 focus:ring-[#977E5B] transition-colors"
                />
                <Calendar class="w-4 h-4 text-[#98A2B3] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button
            type="button"
            :disabled="isSubmitting"
            class="w-full py-3 px-5 rounded-[12px] bg-[#E4E7EC] hover:bg-[#D0D5DD] text-[#344054] font-opensans text-xs sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center shadow-xs active:scale-[0.99] disabled:opacity-50"
            @click="handleSubmit"
          >
            <span v-if="isSubmitting">Submitting Proof...</span>
            <span v-else-if="isSuccess" class="text-[#027A48]">Submitted Successfully!</span>
            <span v-else>Submit</span>
          </button>
        </div>

      </div>

      <!-- Note From Mega Resort Karimunjawa -->
      <div class="bg-[#FFFAEB] border border-[#FEDF89] rounded-[14px] p-4 sm:p-5 space-y-3.5">
        <div class="flex items-center gap-2">
          <AlertCircle class="w-4 h-4 text-[#D97706] shrink-0" />
          <h4 class="text-xs sm:text-[14px] font-semibold text-[#B54708]">
            Note From Mega Resort Karimunjawa
          </h4>
        </div>

        <div class="space-y-2.5 text-xs sm:text-[12px] text-[#717980] font-opensans leading-relaxed">
          <div class="flex items-start gap-2.5">
            <Clock class="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
            <span>
              Untuk segera melakukan pembayaran dari tagihan pada nomor rekening diatas. Admin akan menghubungi anda dalam kurang dari 24 jam setelah pembayaran masuk.
            </span>
          </div>
          <div class="flex items-start gap-2.5">
            <MessageSquare class="w-3.5 h-3.5 text-[#12B76A] shrink-0 mt-0.5" />
            <span>
              Jika Anda mengalami kendala saat melakukan pembayaran atau upload bukti pembayaran, silakan hubungi tim Mega Resort Karimunjawa melalui nomor WhatsApp di bawah ini.
            </span>
          </div>
        </div>

        <!-- WhatsApp Card Box -->
        <div class="bg-white border border-[#ABEFC6] rounded-[12px] p-3 sm:p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-[#ECFDF3] border border-[#ABEFC6] flex items-center justify-center shrink-0">
              <svg class="w-4 h-4 text-[#12B76A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-[11px] text-[#667085] font-opensans">
                WhatsApp Mega Resort Karimunjawa
              </span>
              <span class="text-xs sm:text-[14px] font-bold text-[#090C10]">
                +62 812 - 3456 - 7890
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Mega%20Resort%20Karimunjawa,%20saya%20ingin%20konfirmasi%20pembayaran"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto px-3.5 py-1.5 rounded-[8px] bg-[#ECFDF3] border border-[#ABEFC6] text-[#027A48] hover:bg-[#D1FADF] font-opensans text-xs font-semibold text-center transition-colors shrink-0"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

    </div>
  </div>
</template>
