import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 1e4
});
apiClient.interceptors.request.use((config) => {
  {
    const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const apiBase = process.env.NUXT_PUBLIC_API_BASE || "/api";
    config.baseURL = `${siteUrl}${apiBase}`;
  }
  return config;
});
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.message || error);
    return Promise.reject(error);
  }
);
const resortService = {
  async getResortData() {
    const { data } = await apiClient.get("/resort");
    return data;
  }
};
const useResortStore = defineStore("resort", () => {
  const resortData = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  const isBookingModalOpen = ref(false);
  const isVideoModalOpen = ref(false);
  const selectedPackage = ref(null);
  const selectedVilla = ref(null);
  const selectedRoom = ref(null);
  const activeGalleryIndex = ref(2);
  const fetchResortData = async (force = false) => {
    if (resortData.value && !force) return;
    isLoading.value = true;
    error.value = null;
    try {
      resortData.value = await resortService.getResortData();
    } catch (err) {
      error.value = err?.message || "Failed to load resort data";
    } finally {
      isLoading.value = false;
    }
  };
  const openBookingModal = (pkg, villa, room) => {
    selectedPackage.value = pkg || null;
    selectedVilla.value = villa || null;
    selectedRoom.value = room || null;
    isBookingModalOpen.value = true;
  };
  const closeBookingModal = () => {
    isBookingModalOpen.value = false;
  };
  const openVideoModal = () => {
    isVideoModalOpen.value = true;
  };
  const closeVideoModal = () => {
    isVideoModalOpen.value = false;
  };
  return {
    resortData,
    isLoading,
    error,
    isBookingModalOpen,
    isVideoModalOpen,
    selectedPackage,
    selectedVilla,
    selectedRoom,
    activeGalleryIndex,
    fetchResortData,
    openBookingModal,
    closeBookingModal,
    openVideoModal,
    closeVideoModal
  };
});

export { useResortStore as u };
//# sourceMappingURL=resortStore-B33Vif7n.mjs.map
