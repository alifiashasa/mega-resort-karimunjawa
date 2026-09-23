<script setup lang="ts">
import HeroSection from '~/components/section/home/HeroSection.vue'
import PackageDetailOverview from '~/components/section/package-detail/PackageDetailOverview.vue'
import PackageDetailSelector from '~/components/section/package-detail/PackageDetailSelector.vue'
import PackageDetailHighlights from '~/components/section/package-detail/PackageDetailHighlights.vue'
import PackageDetailGallery from '~/components/section/package-detail/PackageDetailGallery.vue'
import FunDivingDetailModal, { type FunDivingModalData } from '~/components/section/package-detail/FunDivingDetailModal.vue'
import { useResortStore } from '~/stores/resortStore'

const route = useRoute()
const store = useResortStore()
const { t } = useI18n()

// Fetch resort data on server & client
await useAsyncData('resort-data-package-detail', async () => {
  await store.fetchResortData(true)
  return store.resortData
})

onMounted(() => {
  store.fetchResortData(true)
})

interface SelectorOption {
  id: number
  title: string
  price: string
  description: string
  image: string
  modalData?: FunDivingModalData
}

interface PackageDetailData {
  id: string
  title: string
  seoTitle: string
  seoDescription: string
  hero: {
    bgImage: string
    badgePrefix: string
    scriptWord: string
    title: string
    description: string
    ctaText: string
  }
  overview: {
    title: string
    eyebrow: string
    description1: string
    description2: string
    price: string
    image: string
    ctaText?: string
  }
  showSelector: boolean
  selector?: {
    eyebrow: string
    title: string
    options?: SelectorOption[]
  }
  highlights: {
    eyebrow: string
    title: string
    items: Array<{ label: string; description: string }>
  }
}

const packageCatalog: Record<string, PackageDetailData> = {
  'canoe-tour': {
    id: 'canoe-tour',
    title: 'Canoe Tour',
    seoTitle: 'Canoe Tour - Mega Resort Karimunjawa',
    seoDescription: 'Glide through calm waters with Canoe Tour at Mega Resort Karimunjawa. Enjoy a peaceful journey across crystal-clear waters.',
    hero: {
      bgImage: '/images/packages/water-activity-4.jpg',
      badgePrefix: 'GLIDE THROUGH CALM WATERS',
      scriptWord: 'with',
      title: 'CANOE TOUR',
      description: 'Enjoy a peaceful journey across crystal-clear waters, where every paddle brings you closer to nature. Perfect for those who seek calm, scenic exploration in the heart of Karimunjawa.',
      ctaText: 'Find your perfect stay',
    },
    overview: {
      title: 'Canoe Tour',
      eyebrow: 'COMFORTABLE STAY, THOUGHTFULLY DESIGNED',
      description1: "Enjoy a calm and refreshing escape with our canoe rental experience, designed for those who seek a slower and more peaceful way to explore Karimunjawa's coastal beauty. Glide gently across the clear, tranquil waters while taking in the surrounding scenery, from soft sandy shores to lush island views.",
      description2: "This activity is perfect for a light adventure—whether you want to unwind, spend quality time with a partner, or simply enjoy the ocean at your own pace. With a duration of 60 minutes, you'll have plenty of time to paddle, relax, and fully immerse yourself in the serene atmosphere.",
      price: 'Rp 300.000,00',
      image: '/images/packages/water-activity-3.jpg',
      ctaText: 'Booking Now',
    },
    showSelector: false,
    highlights: {
      eyebrow: 'Peaceful Moments by the Water',
      title: 'Experience a simple yet meaningful activity designed to enjoy the natural beauty of Karimunjawa at your own pace.',
      items: [
        {
          label: '100%',
          description: 'Calm waters and a slow-paced activity designed for total relaxation.',
        },
        {
          label: '60 Min',
          description: 'Perfect amount of time to unwind without feeling rushed.',
        },
        {
          label: 'Beginner Friendly',
          description: 'Enjoy the freedom to explore at your own pace, with your companion.',
        },
        {
          label: 'Private & Flexible',
          description: 'No experience needed for this package, safe and easy for everyone.',
        },
      ],
    },
  },
  'boat-tour': {
    id: 'boat-tour',
    title: 'Full Day Boat Tour',
    seoTitle: 'Full Day Boat Tour - Mega Resort Karimunjawa',
    seoDescription: 'Explore the beauty of Karimunjawa through a full-day island hopping experience designed for comfort and ease.',
    hero: {
      bgImage: '/images/packages/canoe-hero.jpg',
      badgePrefix: 'EXPLORE THE ISLANDS',
      scriptWord: 'in',
      title: 'A FULL DAY ADVENTURE.',
      description: 'Sail across the Karimunjawa archipelago and discover hidden gems, stunning coral reefs, and tranquil beaches — a journey of relaxation and wonder created just for you.',
      ctaText: 'Find your perfect stay',
    },
    overview: {
      title: 'Full Day Boat Tour',
      eyebrow: 'COMFORTABLE STAY, THOUGHTFULLY DESIGNED',
      description1: 'Explore the beauty of Karimunjawa through a full-day island hopping experience designed for comfort and ease. From 10 AM to 4 PM, enjoy a seamless journey across crystal-clear waters, with opportunities to snorkel, relax, and take in the surrounding islands.',
      description2: 'Perfect for groups, this all-inclusive experience covers everything you need—from meals and drinks to guided snorkeling—so you can simply enjoy every moment at sea.',
      price: 'Rp 2.000.000,00 - 8.000.000,00',
      image: '/images/packages/water-activity-1.jpg',
      ctaText: 'Booking Now',
    },
    showSelector: true,
    selector: {
      eyebrow: 'Choose Your Boat Experience',
      title: 'Select the perfect boat based on your group size, comfort, and preferred way to explore the sea.',
      options: [
        {
          id: 1,
          title: 'Per Dive Experience',
          price: '$ 50 - 60 (Rp 800.000 - 1.040.000)',
          description: 'Enjoy full flexibility with single dive options, perfect if you prefer a short and customizable diving experience based on your schedule.',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 2,
          title: 'Full Day Island Boat',
          price: '$ 80 - 120 (Rp 1.200.000 - 1.800.000)',
          description: 'Explore scenic islands and coral gardens with comfortable seating and dedicated private crew.',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 3,
          title: 'Private Charter Boat',
          price: '$ 120 - 180 (Rp 1.800.000 - 2.800.000)',
          description: 'Exclusive private vessel charter tailored for families and private groups exploring Karimunjawa.',
          image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    highlights: {
      eyebrow: 'Peaceful Moments by the Water',
      title: 'Experience a simple yet meaningful activity designed to enjoy the natural beauty of Karimunjawa at your own pace.',
      items: [
        {
          label: 'Up to 10 Guests',
          description: 'Flexible and convenient for medium groups, suitable for friends, family, or private trips.',
        },
        {
          label: '6 Hours',
          description: 'From 10 AM – 4 PM, giving you plenty of time to explore multiple islands and snorkeling spots.',
        },
        {
          label: '5+ Benefits',
          description: 'Lunch, drinks, snorkeling guide, snacks, documentation, and all prepared for a hassle-free experience.',
        },
        {
          label: 'Group & Private',
          description: "Ideal for bonding moments, whether you're traveling with friends, family, or a special group.",
        },
      ],
    },
  },
  'fun-diving': {
    id: 'fun-diving',
    title: 'Fun Dive Experience',
    seoTitle: 'Fun Dive Experience - Mega Resort Karimunjawa',
    seoDescription: 'Discover the underwater wonder of Karimunjawa with curated fun dive and snorkeling packages at Mega Resort Karimunjawa.',
    hero: {
      bgImage: '/images/packages/canoe-hero.jpg',
      badgePrefix: 'DISCOVER THE UNDERWATER WONDER',
      scriptWord: 'of',
      title: 'KARIMUNJAWA',
      description: 'Choose from our curated fun dive & snorkeling packages, designed to match every interest and experience level.',
      ctaText: 'Find your perfect stay',
    },
    overview: {
      title: 'Fun Dive Experience',
      eyebrow: 'Craft Your Own Karimunjawa Escape',
      description1: "Designed for certified divers, this experience offers the freedom to explore Karimunjawa's underwater beauty without any additional training. Whether you choose a single dive or combination package, each session brings unique opportunities to encounter vibrant marine life and stunning coral reefs.",
      description2: "With flexible options, you can choose from individual dives for a quick package, you can tailor your diving experience based on your time, preference, and spirit of exploration.",
      price: 'Rp 800.000,00 - 1.500.000,00',
      image: '/images/packages/water-activity-3.jpg',
      ctaText: 'Booking Now',
    },
    showSelector: true,
    selector: {
      eyebrow: 'Choose Your Dive Experience',
      title: 'Select the perfect diving package based on your preferences, skill level, and schedule.',
      options: [
        {
          id: 1,
          title: 'Per Dive Experience',
          price: '$ 50 - 60 (Rp 800.000 - 1.040.000)',
          description: 'Enjoy full flexibility with single dive options, perfect if you prefer a short and customizable diving experience based on your schedule.',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
          modalData: {
            title: 'Per Dive Experience',
            description: 'Enjoy full flexibility with single dive options, perfect if you prefer a short and customizable diving experience based on your schedule.',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
            duration: '+ 1 dive session',
            diveOption: '3 Type',
            experience: 'Certified Dive only',
            equipment: 'included',
            pricing: [
              { name: 'Shore Dive', price: 'Rp 800.000', unit: '/ dive' },
              { name: 'Boat Dive', price: 'Rp 1.000.000', unit: '/ dive' },
              { name: 'Night Dive', price: 'Rp 1.000.000', unit: '/ dive' },
            ],
            experienceNoteTitle: "What You'll Experience",
            experienceNoteDesc: 'Explore multiple dive sites with greater flexibility and better value. Ideal for those who want a more immersive diving experience and the opportunity to discover a wider range of underwater landscapes.',
          },
        },
        {
          id: 2,
          title: '2 Dive Package',
          price: '$ 90 - 110 (Rp 1.400.000 - 1.700.000)',
          description: 'Explore scenic islands and coral gardens with comfortable seating and dedicated private crew.',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
          modalData: {
            title: '2 Dive Package',
            description: 'Explore scenic islands and coral gardens with comfortable seating and dedicated private crew.',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
            duration: '+ 2 dive session',
            diveOption: '2 Type',
            experience: 'Certified Dive only',
            equipment: 'included',
            pricing: [
              { name: '2 Shore Dives', price: 'Rp 1.500.000', unit: '/ package' },
              { name: '2 Boat Dives', price: 'Rp 1.900.000', unit: '/ package' },
              { name: '1 Boat + 1 Night Dive', price: 'Rp 1.950.000', unit: '/ package' },
            ],
            experienceNoteTitle: "What You'll Experience",
            experienceNoteDesc: 'Experience deeper coral reefs and marine life encounters across two carefully selected dive sites in Karimunjawa.',
          },
        },
        {
          id: 3,
          title: 'Private Charter Dive',
          price: '$ 120 - 180 (Rp 1.800.000 - 2.800.000)',
          description: 'Exclusive private vessel charter tailored for families and private groups exploring Karimunjawa.',
          image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
          modalData: {
            title: 'Private Charter Dive',
            description: 'Exclusive private vessel charter tailored for families and private groups exploring Karimunjawa.',
            image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
            duration: '+ Custom session',
            diveOption: 'Private Boat',
            experience: 'Certified Dive only',
            equipment: 'included',
            pricing: [
              { name: 'Half Day Charter', price: 'Rp 2.000.000', unit: '/ charter' },
              { name: 'Full Day Charter', price: 'Rp 3.500.000', unit: '/ charter' },
            ],
            experienceNoteTitle: "What You'll Experience",
            experienceNoteDesc: 'Exclusive and personalized dive spots with dedicated divemaster and private boat captain tailored to your schedule.',
          },
        },
      ],
    },
    highlights: {
      eyebrow: 'Peaceful Moments by the Water',
      title: 'Experience a simple yet meaningful activity designed to enjoy the natural beauty of Karimunjawa at your own pace.',
      items: [
        {
          label: 'Single or Package',
          description: 'Choose between open dive sessions or bundled packages based on your needs.',
        },
        {
          label: '3 of 2 Type',
          description: 'Short, boat, or night dive, each offering a different underwater experience.',
        },
        {
          label: 'Certified Divers',
          description: 'This package is designed for divers with valid certification.',
        },
        {
          label: 'Multiple Dive Sites',
          description: 'Discover a variety of underwater environments across different sessions.',
        },
      ],
    },
  },
  'beginner-diving': {
    id: 'beginner-diving',
    title: 'Beginner Diving Package',
    seoTitle: 'Beginner Diving Package - Mega Resort Karimunjawa',
    seoDescription: 'Take your first step into the underwater world with guided support and complete safety at Mega Resort Karimunjawa.',
    hero: {
      bgImage: '/images/packages/canoe-hero.jpg',
      badgePrefix: 'YOUR FIRST DIVE INTO',
      scriptWord: 'the',
      title: 'THE OCEAN EXPERIENCE',
      description: 'Take your first step into the underwater world with guided support and complete safety. A perfect introduction to diving, where curiosity turns into an unforgettable adventure.',
      ctaText: 'Find Your Perfect Stay',
    },
    overview: {
      title: 'Beginner Diving Package',
      eyebrow: 'COMFORTABLE STAY, THOUGHTFULLY DESIGNED',
      description1: 'Take your first step into the underwater world with a guided diving experience designed especially for beginners. Discovery Scuba Diving allows you to safely explore the beauty beneath the surface without the need for prior training or certification.',
      description2: "Accompanied by a professional instructor, you'll be introduced to basic techniques before descending into calm, clear waters up to 10 meters deep. This short yet memorable experience is perfect for those who are curious about diving and want to try it in a safe, controlled, and enjoyable way without committing to a full course.",
      price: 'Rp 1.500.000,00',
      image: '/images/packages/water-activity-2.jpg',
      ctaText: 'Booking Now',
    },
    showSelector: false,
    highlights: {
      eyebrow: 'Peaceful Moments by the Water',
      title: 'Experience a simple yet meaningful activity designed to enjoy the natural beauty of Karimunjawa at your own pace.',
      items: [
        {
          label: 'Up to 10M',
          description: 'A safe and comfortable depth, ideal for first-time divers.',
        },
        {
          label: 'Prof Instructor',
          description: 'Fully guided throughout the experience to ensure safety and confidence.',
        },
        {
          label: 'Beginner Friendly',
          description: 'No certification or prior experience required for this experience.',
        },
        {
          label: 'No Course',
          description: 'Enjoy the experience without enrolling in a full diving program.',
        },
      ],
    },
  },
  'certification-diving': {
    id: 'certification-diving',
    title: 'Certificate Diving',
    seoTitle: 'Certificate Diving - Mega Resort Karimunjawa',
    seoDescription: 'Take your diving journey to the next level with internationally recognized PADI certification programs at Mega Resort Karimunjawa.',
    hero: {
      bgImage: '/images/packages/canoe-hero.jpg',
      badgePrefix: 'START YOUR JOURNEY',
      scriptWord: 'as',
      title: 'A CERTIFIED DIVER',
      description: "From beginners to certified divers, our certified PADI courses offer structured and safe learning to explore the beauty of Karimunjawa's waters. Led by professional instructors, every dive is an unforgettable adventure.",
      ctaText: 'Find your perfect stay',
    },
    overview: {
      title: 'Certificate Diving',
      eyebrow: 'CRAFT YOUR STAY, THOUGHTFULLY DESIGNED',
      description1: 'Take your diving journey to the next level with internationally recognized PADI certification programs. Designed for every stage, from beginners to advanced, this comprehensive training guides you in advancing your skills, mastering safe diving practices, diving theory, guided practice, and real ocean dives to build your confidence underwater.',
      description2: 'Led by professional instructors, these programs offer a structured learning experience, from pool sessions to open water exploration. Ensuring you gain both the background knowledge and hands-on experience. With flexible course options, you can progress at your own pace while working toward becoming a certified diver.',
      price: 'Rp 4.500.000 - 6.500.000',
      image: '/images/packages/water-activity-5.jpg',
      ctaText: 'Booking Now',
    },
    showSelector: true,
    selector: {
      eyebrow: 'Choose Your Diving Course',
      title: 'Select the certification level that matches your experience and discover the underwater world at your own pace.',
      options: [
        {
          id: 1,
          title: 'PADI Open Water Diver',
          price: '$400 | (IDR 6.500.000)',
          description: 'Learn essential diving theory, master basic skills through pool sessions, and complete open water dives to earn your entry-level certification.',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 2,
          title: 'PADI Advanced Open Water',
          price: '$350 | (IDR 5.500.000)',
          description: 'Advance your diving skills with deep diving, navigation, and elective adventure dives in the Karimunjawa marine park.',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 3,
          title: 'Discover Scuba Diving',
          price: '$100 | (IDR 1.500.000)',
          description: 'A quick and easy introduction to what it takes to explore the underwater world with an instructor.',
          image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    highlights: {
      eyebrow: 'Peaceful Moments by the Water',
      title: 'Experience a simple yet meaningful activity designed to enjoy the natural beauty of Karimunjawa at your own pace.',
      items: [
        {
          label: '3 Levels Available',
          description: 'From beginner to advanced, progress through clear and structured diving levels.',
        },
        {
          label: 'Up to 30M',
          description: 'Expand your depth limits as you advance through each certification level.',
        },
        {
          label: 'Theory + Practice',
          description: 'A learning experience classroom sessions, pool training, and ocean dives.',
        },
        {
          label: 'Global License',
          description: 'Earn globally recognized certification to dive anywhere in the world.',
        },
      ],
    },
  },
}

// Map route param or path to catalog
const currentPackage = computed<PackageDetailData>(() => {
  const param = String(route.params.id || '').toLowerCase()
  const path = route.path.toLowerCase()
  const target = `${param} ${path}`

  // Direct key lookup
  if (param && packageCatalog[param]) {
    return packageCatalog[param] as PackageDetailData
  }

  // Exact / keyword match
  if (target.includes('certif') || param === '5' || target.includes('padi')) {
    return packageCatalog['certification-diving'] as PackageDetailData
  }
  if (target.includes('boat') || param === '3') {
    return packageCatalog['boat-tour'] as PackageDetailData
  }
  if (target.includes('beginner') || param === '4') {
    return packageCatalog['beginner-diving'] as PackageDetailData
  }
  if (target.includes('fun') || target.includes('dive') || param === '6') {
    return packageCatalog['fun-diving'] as PackageDetailData
  }
  if (target.includes('canoe') || target.includes('water') || target.includes('santai') || param === '1' || param === '2') {
    return packageCatalog['canoe-tour'] as PackageDetailData
  }

  return (packageCatalog['certification-diving'] || packageCatalog['canoe-tour']) as PackageDetailData
})

const isFunDivingModalOpen = ref(false)
const selectedFunDiveOption = ref<FunDivingModalData | null>(null)

const handleSelectorCardClick = (item: SelectorOption) => {
  if (currentPackage.value.id === 'fun-diving') {
    selectedFunDiveOption.value = item.modalData || {
      title: item.title,
      description: item.description,
      image: item.image,
    }
    isFunDivingModalOpen.value = true
  }
}

useSeoMeta({
  title: () => `${currentPackage.value.seoTitle}`,
  description: () => currentPackage.value.seoDescription,
  ogTitle: () => `${currentPackage.value.seoTitle}`,
  ogDescription: () => currentPackage.value.seoDescription,
  ogImage: () => currentPackage.value.hero.bgImage,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="overflow-x-hidden bg-[#FFF9EB]">
    <!-- 1. Hero Section -->
    <HeroSection
      id="package-detail-hero"
      :bg-image="currentPackage.hero.bgImage"
      bg-position="object-center"
      :badge-prefix="currentPackage.hero.badgePrefix"
      :script-word="currentPackage.hero.scriptWord"
      :title="currentPackage.hero.title"
      :description="currentPackage.hero.description"
      :cta-text="currentPackage.hero.ctaText"
      cta-target-id="#package-overview"
      :show-scroll-down="false"
      min-height="min-h-[640px] sm:min-h-[720px] lg:h-[840px]"
      overlay-class="bg-black/35"
    />

    <!-- 2. Overview & Booking Section -->
    <PackageDetailOverview
      :title="currentPackage.overview.title"
      :eyebrow="currentPackage.overview.eyebrow"
      :description1="currentPackage.overview.description1"
      :description2="currentPackage.overview.description2"
      :price="currentPackage.overview.price"
      :image="currentPackage.overview.image"
      :cta-text="currentPackage.overview.ctaText || 'Booking Now'"
    />

    <!-- 3. Course / Experience Selector Slider -->
    <PackageDetailSelector
      v-if="currentPackage.showSelector"
      :eyebrow="currentPackage.selector?.eyebrow"
      :title="currentPackage.selector?.title"
      :options="currentPackage.selector?.options"
      :is-clickable="currentPackage.id === 'fun-diving'"
      @card-click="handleSelectorCardClick"
    />

    <!-- 4. Key Highlights Grid -->
    <PackageDetailHighlights
      :eyebrow="currentPackage.highlights.eyebrow"
      :title="currentPackage.highlights.title"
      :highlights="currentPackage.highlights.items"
    />

    <!-- 5. Photo Gallery Grid + Beach Waves Watermark Banner -->
    <PackageDetailGallery />

    <!-- 6. Fun Diving Detail Modal Dialog (Only on Fun Diving) -->
    <FunDivingDetailModal
      v-if="currentPackage.id === 'fun-diving'"
      v-model="isFunDivingModalOpen"
      :data="selectedFunDiveOption"
    />
  </div>
</template>
