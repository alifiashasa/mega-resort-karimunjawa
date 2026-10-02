<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  MessageSquare,
  UploadCloud,
  CalendarDays,
  Copy,
  Check,
  FileCheck,
  X,
} from 'lucide-vue-next'

import PaymentSuccessModal from '~/components/section/booking/PaymentSuccessModal.vue'

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
  transferDate: '',
  receiptFile: null,
  receiptFileName: '',
})

const isFormValid = computed(() => {
  return (
    !!form.value.receiptFile &&
    form.value.accountHolderName.trim() !== '' &&
    form.value.senderBankName.trim() !== '' &&
    form.value.transferDate.trim() !== ''
  )
})

const isDragging = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)
const filePreviewUrl = ref('')
const fileSize = ref<number>(0)
const isCopied = ref(false)
const isSubmitting = ref(false)
const isSuccess = ref(false)
const showSuccessModal = ref(false)

const formattedFileSize = computed(() => {
  if (!fileSize.value) return '2,4 MB'
  const mb = fileSize.value / (1024 * 1024)
  if (mb < 1) {
    return `${(fileSize.value / 1024).toFixed(1).replace('.', ',')} KB`
  }
  return `${mb.toFixed(1).replace('.', ',')} MB`
})

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
    fileSize.value = file.size
    if (file.type.startsWith('image/')) {
      filePreviewUrl.value = URL.createObjectURL(file)
    } else {
      filePreviewUrl.value = ''
    }
  }
}

const handleDrop = (e: DragEvent) => {
  isDragging.value = false
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
    const file = e.dataTransfer.files[0]
    form.value.receiptFile = file
    form.value.receiptFileName = file.name
    fileSize.value = file.size
    if (file.type.startsWith('image/')) {
      filePreviewUrl.value = URL.createObjectURL(file)
    } else {
      filePreviewUrl.value = ''
    }
  }
}

const removeFile = (e?: MouseEvent) => {
  e?.stopPropagation()
  if (filePreviewUrl.value) {
    URL.revokeObjectURL(filePreviewUrl.value)
    filePreviewUrl.value = ''
  }
  form.value.receiptFile = null
  form.value.receiptFileName = ''
  fileSize.value = 0
  if (fileInputRef.value) {
    fileInputRef.value.value = ''
  }
}

const handleSubmit = () => {
  if (!isFormValid.value) {
    alert('Mohon lengkapi semua data dan upload bukti transfer terlebih dahulu.')
    return
  }
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    showSuccessModal.value = true
    emit('submitPayment', { ...form.value })
  }, 600)
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header Section -->
    <div>
      <h1 class="text-xl sm:text-[30px] font-semibold text-[#090C10] font-spartan tracking-tight">
        Complete Your Payment
      </h1>
      <p class="text-xs sm:text-[16px] text-[#757575] font-opensans mt-1 leading-relaxed">
        Finalize your booking by completing the payment through our secure and trusted methods.
      </p>
    </div>

    <!-- Main Payment Container -->
    <div class="bg-white rounded-[16px] border border-[#E9EAEB] p-5 sm:p-7 shadow-xs space-y-6">
      
      <!-- Booking Created Success Banner -->
      <div class="bg-[#F2FBF3] border border-[#E1FBD8] rounded-[12px] p-3.5 sm:p-4 flex items-start gap-3">
        <svg class="w-5 h-5 text-[#289B40] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8" />
          <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="flex flex-col">
          <span class="text-xs sm:text-[13px] font-semibold text-[#38B546]">
            Booking Created!
          </span>
          <span class="text-[11px] sm:text-[12px] text-[#38B546] font-opensans">
            Please complete your payment to confirm your reservation
          </span>
        </div>
      </div>

      <!-- Payment Instruction Section -->
      <div class="space-y-4 pt-1">
        <div>
          <h3 class="text-sm sm:text-[24px] font-semibold text-[#090C10] font-spartan">
            Payment Instruction
          </h3>
          <p class="text-xs sm:text-[16px] text-[#717980] font-opensans mt-0.5">
            Please transfer the total payment to the bank account below.
          </p>
        </div>

        <!-- Bank BCA Card Details -->
        <div class="space-y-7">
          <!-- BCA Logo -->
          <div class="pt-7">
            <img
              src="/images/booking/logo-bca.svg"
              alt="Bank Central Asia (BCA)"
              class="w-[120px] h-[43px] object-contain"
            />
          </div>

          <!-- Bank Account Info Table -->
          <div class="space-y-6 text-xs sm:text-[14px] font-opensans">
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

      <!-- Divider Line Full Width -->
      <div class="-mx-5 sm:-mx-7 border-t border-[#E9EAEB]"></div>

      <!-- Upload Payment Proof Section -->
      <div class="space-y-4">
        <div>
          <h3 class="text-sm sm:text-[24px] font-semibold text-[#090C10] font-spartan">
            Upload Payment Proof
          </h3>
          <p class="text-xs sm:text-[16px] text-[#717980] font-opensans mt-1 leading-relaxed">
            Please upload your payment receipt to verify your reservation. Our team will review your payment within less than 24 hours.
          </p>
        </div>

        <!-- Upload Dropzone -->
        <div class="space-y-1.5">
          <label class="text-xs sm:text-[14px] font-normal text-[#090C10] font-opensans flex items-center gap-0.5">
            Upload Receipt <span class="text-red-500">*</span>
          </label>
          
          <input
            ref="fileInputRef"
            type="file"
            accept="image/*,.pdf"
            class="hidden"
            @change="handleFileChange"
          />

          <!-- File Selected Preview Card -->
          <div
            v-if="form.receiptFile"
            class="border border-[#D0D5DD] bg-white rounded-[14px] p-3.5 sm:p-4 flex items-center gap-4 transition-all"
          >
            <!-- Thumbnail Image -->
            <div class="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[10px] overflow-hidden bg-[#F2F4F7] shrink-0 border border-[#EAECF0]">
              <img
                v-if="filePreviewUrl"
                :src="filePreviewUrl"
                alt="Receipt Preview"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-[#98A2B3] bg-[#F9FAFB]">
                <FileCheck class="w-8 h-8 text-[#12B76A]" />
              </div>
            </div>

            <!-- File Details & Actions -->
            <div class="flex-1 min-w-0 flex flex-col justify-center gap-2">
              <div class="flex items-baseline flex-wrap gap-x-1.5">
                <span class="text-xs sm:text-[14px] font-semibold text-[#090C10] truncate max-w-full font-opensans">
                  {{ form.receiptFileName || 'Bukti Pembayaran Mega Resort Karimunjawa' }}
                </span>
                <span class="text-xs sm:text-[13px] text-[#98A2B3] font-opensans shrink-0">
                  ({{ formattedFileSize }})
                </span>
              </div>

              <!-- Buttons: Change & Delete -->
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="px-3.5 py-1.5 rounded-[8px] bg-white border border-[#D0D5DD] hover:bg-[#F9FAFB] text-[#344054] text-xs font-medium font-opensans transition-colors shadow-2xs cursor-pointer"
                  @click="triggerFileInput"
                >
                  Change
                </button>
                <button
                  type="button"
                  class="px-3.5 py-1.5 rounded-[8px] bg-[#E02D3C] hover:bg-[#C92533] text-white text-xs font-medium font-opensans transition-colors shadow-2xs cursor-pointer"
                  @click="removeFile"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          <!-- Default Dropzone -->
          <div
            v-else
            class="border border-dashed rounded-[14px] p-6 sm:p-7 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200"
            :class="isDragging ? 'border-[#977E5B] bg-[#FAF8F5]' : 'border-[#D0D5DD] bg-[#FCFCFD] hover:bg-[#F9FAFB]'"
            @click="triggerFileInput"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleDrop"
          >
            <div class="w-10 h-10 rounded-full border border-[#EAECF0] bg-white text-[#667085] flex items-center justify-center mb-2 shadow-2xs">
              <UploadCloud class="w-5 h-5" />
            </div>
            <p class="text-xs sm:text-[13px] text-[#475467] font-opensans">
              Drag & drop or <span class="text-[#977E5B] font-medium hover:underline">click to choose files</span>
            </p>
            <div class="flex items-center justify-center gap-1.5 text-[13px] text-[#D5D7DA] font-opensans mt-1">
              <svg class="w-3.5 h-3.5 text-[#D5D7DA] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2.7L20.5 7.6V16.4L12 21.3L3.5 16.4V7.6L12 2.7Z" />
                <line x1="12" y1="8.5" x2="12" y2="12.5" stroke-width="2" />
                <circle cx="12" cy="15.8" r="0.8" fill="currentColor" stroke="none" />
              </svg>
              <span>Max file size: 10MB</span>
            </div>
          </div>
        </div>

        <!-- Form Inputs -->
        <div class="space-y-3.5">
          <!-- Account Holder Name -->
          <div>
            <label class="block text-xs sm:text-[14px] font-medium text-[#090C10] font-opensans mb-1.5">
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
              <label class="block text-xs sm:text-[14px] font-medium text-[#090C10] font-opensans mb-1.5">
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
              <label class="block text-xs sm:text-[14px] font-medium text-[#090C10] font-opensans mb-1.5">
                Transfer Date <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  v-model="form.transferDate"
                  type="date"
                  class="w-full h-[46px] px-3.5 pr-10 rounded-[12px] border border-[#E9EAEB] bg-white text-xs sm:text-[13px] text-[#090C10] focus:outline-none focus:border-[#977E5B] focus:ring-1 focus:ring-[#977E5B] transition-colors cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
                <CalendarDays class="w-4 h-4 text-[#98A2B3] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button
            type="button"
            :disabled="!isFormValid || isSubmitting"
            class="w-full py-3 px-5 rounded-[12px] font-opensans text-xs sm:text-[15px] transition-all duration-200 flex items-center justify-center"
            :class="[
              isFormValid && !isSubmitting
                ? 'bg-[#937A54] hover:bg-[#886F4A] text-white font-semibold cursor-pointer border border-[#6D532F]/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_2px_rgba(0,0,0,0.25)] active:scale-[0.99]'
                : 'bg-[#E9EAEB] text-[#98A2B3] font-medium cursor-not-allowed'
            ]"
            @click="handleSubmit"
          >
            <span v-if="isSubmitting">Submitting Proof...</span>
            <span v-else-if="isSuccess" class="text-white font-semibold">Submitted Successfully!</span>
            <span v-else>Submit</span>
          </button>
        </div>

      </div>

      <!-- Note From Mega Resort Karimunjawa -->
      <div class="bg-[#FFFEEB] rounded-[16px] p-5 sm:p-6 space-y-7">
        <div class="flex items-center gap-2 text-[#FF9F3F]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-6 h-6 text-[#FF9F3F] shrink-0"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
          <h3 class="text-sm sm:text-[20px] font-semibold font-opensans">
            Note From Mega Resort KarimunJawa
          </h3>
        </div>

        <div class="space-y-7 text-xs sm:text-[14px] text-[#717680] font-opensans leading-relaxed">
          <div class="flex items-start gap-3">
            <Clock class="w-4 h-4 text-[#717680] shrink-0 mt-0.5" />
            <p>
              Untuk segera melakukan pembayaran dari tagihan pada nomor rekening diatas. Admin akan menghubungi anda dalam kurang dari 24 jam setelah pembayaran masuk,
            </p>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-4 h-4 text-[#38B546] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <p>
              Jika Anda mengalami kendala saat melakukan pembayaran atau upload bukti pembayaran, silakan hubungi tim Mega Resort Karimunjawa melalui nomor WhatsApp di bawah ini.
            </p>
          </div>
        </div>

        <!-- WhatsApp Card Box -->
        <div class="bg-[#F2FBF3] border border-[#38B546] rounded-[16px] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3.5">
            <div class="w-9 h-9 rounded-full flex items-center justify-center shrink-0">
              <svg class="w-7 h-7 text-[#38B546]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-xs sm:text-[14px] text-[#717680] font-opensans">
                WhatsApp Mega Resort KarimunJawa
              </span>
              <span class="text-base sm:text-[20px] font-bold text-[#090C10]">
                +62 812 - 3456 - 7890
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Mega%20Resort%20Karimunjawa,%20saya%20ingin%20konfirmasi%20pembayaran"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto px-5 py-2.5 rounded-[12px] bg-white border border-[#D0D5DD] hover:bg-[#F9FAFB] text-[#38B546] font-opensans text-xs sm:text-[14px] font-medium text-center transition-colors shrink-0 shadow-2xs"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

    </div>

    <!-- Payment Success Modal Dialog -->
    <PaymentSuccessModal
      v-model="showSuccessModal"
    />
  </div>
</template>
