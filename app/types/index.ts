export interface StatItem {
  value: string
  label: string
}

export interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  description?: string
}

export interface VillaHighlight {
  id: number
  name: string
  tagline: string
  description: string
  image: string
  capacity: string
  bedType: string
  features: string[]
  pricePerNight: number
}

export interface PackageItem {
  id: number
  slug?: string
  title: string
  category: string
  duration: string
  image: string
  badge?: string
  rating: number
  ratingScale?: string
  reviewCount: number
  description: string
  includes?: string[]
  tags?: string[]
  price: number
  priceUnit?: string
  bestSeason?: string
  originalPrice?: number
}

export interface NewsItem {
  id: number
  title: string
  date: string
  category?: string
  image: string
  excerpt: string
  author: {
    name: string
    avatar?: string
    role?: string
    initials?: string
  }
  readTime?: string
}

export interface DiningFeature {
  id: number
  title: string
  subtitle: string
  description: string
  highlight: string
  imagePrimary: string
  imageSecondary: string
}

export interface RoomItem {
  id: number
  name: string
  fullName?: string
  subtitle?: string
  image: string
  rating: number
  ratingScale?: string
  reviewCount?: number
  price: number
  priceUnit?: string
  originalPrice?: number
  discountPercent?: number
  discountText?: string
  taxInfo?: string
  badge?: string
  category?: string
  isFeatured?: boolean
  tags?: string[]
  specs: {
    totalRooms: string
    bathroom: string
    internet: string
    coveredParking: string
  }
  highlights?: {
    cleanliness: string
    amenities: string
  }
}

export interface FacilityItem {
  id: number
  name: string
  image: string
  description: string
  descriptionEn?: string
  category?: string
}

export interface ResortData {
  name: string
  tagline: string
  location: string
  heroDescription: string
  aboutDescription: string
  stats: StatItem[]
  videoBanner: {
    title: string
    description: string
    videoUrl: string
    thumbnail: string
  }
  gallery: GalleryItem[]
  villas: VillaHighlight[]
  rooms?: RoomItem[]
  facilities?: FacilityItem[]
  dining: DiningFeature
  packages: PackageItem[]
  news: NewsItem[]
  contact: {
    phone: string
    whatsapp: string
    email: string
    address: string
    socials: {
      instagram: string
      facebook: string
      whatsapp: string
      youtube: string
    }
  }
}

