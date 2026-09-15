
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const CardGalleryCard: typeof import("../app/components/card/GalleryCard.vue")['default']
export const CardNewsCard: typeof import("../app/components/card/NewsCard.vue")['default']
export const CardPackageCard: typeof import("../app/components/card/PackageCard.vue")['default']
export const CardRoomDetailedCard: typeof import("../app/components/card/RoomDetailedCard.vue")['default']
export const CardRoomFeaturedCard: typeof import("../app/components/card/RoomFeaturedCard.vue")['default']
export const CommonAppButton: typeof import("../app/components/common/AppButton.vue")['default']
export const CommonBookingModal: typeof import("../app/components/common/BookingModal.vue")['default']
export const CommonResortLogo: typeof import("../app/components/common/ResortLogo.vue")['default']
export const CommonSectionBadge: typeof import("../app/components/common/SectionBadge.vue")['default']
export const CommonVideoModal: typeof import("../app/components/common/VideoModal.vue")['default']
export const CommonIconsIcon360View: typeof import("../app/components/common/icons/Icon360View.vue")['default']
export const CommonIconsIconAcUnit: typeof import("../app/components/common/icons/IconAcUnit.vue")['default']
export const CommonIconsIconAmenities: typeof import("../app/components/common/icons/IconAmenities.vue")['default']
export const CommonIconsIconArrowLongLeft: typeof import("../app/components/common/icons/IconArrowLongLeft.vue")['default']
export const CommonIconsIconArrowLongRight: typeof import("../app/components/common/icons/IconArrowLongRight.vue")['default']
export const CommonIconsIconAwardShield: typeof import("../app/components/common/icons/IconAwardShield.vue")['default']
export const CommonIconsIconBathrobe: typeof import("../app/components/common/icons/IconBathrobe.vue")['default']
export const CommonIconsIconBuildingAc: typeof import("../app/components/common/icons/IconBuildingAc.vue")['default']
export const CommonIconsIconChatDots: typeof import("../app/components/common/icons/IconChatDots.vue")['default']
export const CommonIconsIconChevronCircleLeft: typeof import("../app/components/common/icons/IconChevronCircleLeft.vue")['default']
export const CommonIconsIconChevronCircleRight: typeof import("../app/components/common/icons/IconChevronCircleRight.vue")['default']
export const CommonIconsIconCleanliness: typeof import("../app/components/common/icons/IconCleanliness.vue")['default']
export const CommonIconsIconDrinkGlass: typeof import("../app/components/common/icons/IconDrinkGlass.vue")['default']
export const CommonIconsIconInstagram: typeof import("../app/components/common/icons/IconInstagram.vue")['default']
export const CommonIconsIconLocation: typeof import("../app/components/common/icons/IconLocation.vue")['default']
export const CommonIconsIconLotus: typeof import("../app/components/common/icons/IconLotus.vue")['default']
export const CommonIconsIconMealTray: typeof import("../app/components/common/icons/IconMealTray.vue")['default']
export const CommonIconsIconRibbonBadge: typeof import("../app/components/common/icons/IconRibbonBadge.vue")['default']
export const CommonIconsIconShowerBath: typeof import("../app/components/common/icons/IconShowerBath.vue")['default']
export const CommonIconsIconSpinner: typeof import("../app/components/common/icons/IconSpinner.vue")['default']
export const CommonIconsIconStar: typeof import("../app/components/common/icons/IconStar.vue")['default']
export const CommonIconsIconStarSolid: typeof import("../app/components/common/icons/IconStarSolid.vue")['default']
export const CommonIconsIconSun: typeof import("../app/components/common/icons/IconSun.vue")['default']
export const CommonIconsIconTiktok: typeof import("../app/components/common/icons/IconTiktok.vue")['default']
export const CommonIconsIconTreeLeaf: typeof import("../app/components/common/icons/IconTreeLeaf.vue")['default']
export const CommonIconsIconTriangleDown: typeof import("../app/components/common/icons/IconTriangleDown.vue")['default']
export const CommonIconsIconWhatsapp: typeof import("../app/components/common/icons/IconWhatsapp.vue")['default']
export const CommonIconsIconWifiRound: typeof import("../app/components/common/icons/IconWifiRound.vue")['default']
export const NavigationAppFooter: typeof import("../app/components/navigation/AppFooter.vue")['default']
export const NavigationAppHeader: typeof import("../app/components/navigation/AppHeader.vue")['default']
export const SectionHomeAboutSection: typeof import("../app/components/section/home/AboutSection.vue")['default']
export const SectionHomeDiningSection: typeof import("../app/components/section/home/DiningSection.vue")['default']
export const SectionHomeFeatureVideoSection: typeof import("../app/components/section/home/FeatureVideoSection.vue")['default']
export const SectionHomeGallerySection: typeof import("../app/components/section/home/GallerySection.vue")['default']
export const SectionHomeHeroSection: typeof import("../app/components/section/home/HeroSection.vue")['default']
export const SectionHomeNewsSection: typeof import("../app/components/section/home/NewsSection.vue")['default']
export const SectionHomePackageSection: typeof import("../app/components/section/home/PackageSection.vue")['default']
export const SectionHomeVillaTourSection: typeof import("../app/components/section/home/VillaTourSection.vue")['default']
export const SectionRoomDetailAmenities: typeof import("../app/components/section/room-detail/RoomDetailAmenities.vue")['default']
export const SectionRoomDetailExclusive: typeof import("../app/components/section/room-detail/RoomDetailExclusive.vue")['default']
export const SectionRoomDetailGallery: typeof import("../app/components/section/room-detail/RoomDetailGallery.vue")['default']
export const SectionRoomDetailOverview: typeof import("../app/components/section/room-detail/RoomDetailOverview.vue")['default']
export const SectionRoomsCollectionSection: typeof import("../app/components/section/rooms/RoomsCollectionSection.vue")['default']
export const SectionRoomsFeaturedSection: typeof import("../app/components/section/rooms/RoomsFeaturedSection.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyCardGalleryCard: LazyComponent<typeof import("../app/components/card/GalleryCard.vue")['default']>
export const LazyCardNewsCard: LazyComponent<typeof import("../app/components/card/NewsCard.vue")['default']>
export const LazyCardPackageCard: LazyComponent<typeof import("../app/components/card/PackageCard.vue")['default']>
export const LazyCardRoomDetailedCard: LazyComponent<typeof import("../app/components/card/RoomDetailedCard.vue")['default']>
export const LazyCardRoomFeaturedCard: LazyComponent<typeof import("../app/components/card/RoomFeaturedCard.vue")['default']>
export const LazyCommonAppButton: LazyComponent<typeof import("../app/components/common/AppButton.vue")['default']>
export const LazyCommonBookingModal: LazyComponent<typeof import("../app/components/common/BookingModal.vue")['default']>
export const LazyCommonResortLogo: LazyComponent<typeof import("../app/components/common/ResortLogo.vue")['default']>
export const LazyCommonSectionBadge: LazyComponent<typeof import("../app/components/common/SectionBadge.vue")['default']>
export const LazyCommonVideoModal: LazyComponent<typeof import("../app/components/common/VideoModal.vue")['default']>
export const LazyCommonIconsIcon360View: LazyComponent<typeof import("../app/components/common/icons/Icon360View.vue")['default']>
export const LazyCommonIconsIconAcUnit: LazyComponent<typeof import("../app/components/common/icons/IconAcUnit.vue")['default']>
export const LazyCommonIconsIconAmenities: LazyComponent<typeof import("../app/components/common/icons/IconAmenities.vue")['default']>
export const LazyCommonIconsIconArrowLongLeft: LazyComponent<typeof import("../app/components/common/icons/IconArrowLongLeft.vue")['default']>
export const LazyCommonIconsIconArrowLongRight: LazyComponent<typeof import("../app/components/common/icons/IconArrowLongRight.vue")['default']>
export const LazyCommonIconsIconAwardShield: LazyComponent<typeof import("../app/components/common/icons/IconAwardShield.vue")['default']>
export const LazyCommonIconsIconBathrobe: LazyComponent<typeof import("../app/components/common/icons/IconBathrobe.vue")['default']>
export const LazyCommonIconsIconBuildingAc: LazyComponent<typeof import("../app/components/common/icons/IconBuildingAc.vue")['default']>
export const LazyCommonIconsIconChatDots: LazyComponent<typeof import("../app/components/common/icons/IconChatDots.vue")['default']>
export const LazyCommonIconsIconChevronCircleLeft: LazyComponent<typeof import("../app/components/common/icons/IconChevronCircleLeft.vue")['default']>
export const LazyCommonIconsIconChevronCircleRight: LazyComponent<typeof import("../app/components/common/icons/IconChevronCircleRight.vue")['default']>
export const LazyCommonIconsIconCleanliness: LazyComponent<typeof import("../app/components/common/icons/IconCleanliness.vue")['default']>
export const LazyCommonIconsIconDrinkGlass: LazyComponent<typeof import("../app/components/common/icons/IconDrinkGlass.vue")['default']>
export const LazyCommonIconsIconInstagram: LazyComponent<typeof import("../app/components/common/icons/IconInstagram.vue")['default']>
export const LazyCommonIconsIconLocation: LazyComponent<typeof import("../app/components/common/icons/IconLocation.vue")['default']>
export const LazyCommonIconsIconLotus: LazyComponent<typeof import("../app/components/common/icons/IconLotus.vue")['default']>
export const LazyCommonIconsIconMealTray: LazyComponent<typeof import("../app/components/common/icons/IconMealTray.vue")['default']>
export const LazyCommonIconsIconRibbonBadge: LazyComponent<typeof import("../app/components/common/icons/IconRibbonBadge.vue")['default']>
export const LazyCommonIconsIconShowerBath: LazyComponent<typeof import("../app/components/common/icons/IconShowerBath.vue")['default']>
export const LazyCommonIconsIconSpinner: LazyComponent<typeof import("../app/components/common/icons/IconSpinner.vue")['default']>
export const LazyCommonIconsIconStar: LazyComponent<typeof import("../app/components/common/icons/IconStar.vue")['default']>
export const LazyCommonIconsIconStarSolid: LazyComponent<typeof import("../app/components/common/icons/IconStarSolid.vue")['default']>
export const LazyCommonIconsIconSun: LazyComponent<typeof import("../app/components/common/icons/IconSun.vue")['default']>
export const LazyCommonIconsIconTiktok: LazyComponent<typeof import("../app/components/common/icons/IconTiktok.vue")['default']>
export const LazyCommonIconsIconTreeLeaf: LazyComponent<typeof import("../app/components/common/icons/IconTreeLeaf.vue")['default']>
export const LazyCommonIconsIconTriangleDown: LazyComponent<typeof import("../app/components/common/icons/IconTriangleDown.vue")['default']>
export const LazyCommonIconsIconWhatsapp: LazyComponent<typeof import("../app/components/common/icons/IconWhatsapp.vue")['default']>
export const LazyCommonIconsIconWifiRound: LazyComponent<typeof import("../app/components/common/icons/IconWifiRound.vue")['default']>
export const LazyNavigationAppFooter: LazyComponent<typeof import("../app/components/navigation/AppFooter.vue")['default']>
export const LazyNavigationAppHeader: LazyComponent<typeof import("../app/components/navigation/AppHeader.vue")['default']>
export const LazySectionHomeAboutSection: LazyComponent<typeof import("../app/components/section/home/AboutSection.vue")['default']>
export const LazySectionHomeDiningSection: LazyComponent<typeof import("../app/components/section/home/DiningSection.vue")['default']>
export const LazySectionHomeFeatureVideoSection: LazyComponent<typeof import("../app/components/section/home/FeatureVideoSection.vue")['default']>
export const LazySectionHomeGallerySection: LazyComponent<typeof import("../app/components/section/home/GallerySection.vue")['default']>
export const LazySectionHomeHeroSection: LazyComponent<typeof import("../app/components/section/home/HeroSection.vue")['default']>
export const LazySectionHomeNewsSection: LazyComponent<typeof import("../app/components/section/home/NewsSection.vue")['default']>
export const LazySectionHomePackageSection: LazyComponent<typeof import("../app/components/section/home/PackageSection.vue")['default']>
export const LazySectionHomeVillaTourSection: LazyComponent<typeof import("../app/components/section/home/VillaTourSection.vue")['default']>
export const LazySectionRoomDetailAmenities: LazyComponent<typeof import("../app/components/section/room-detail/RoomDetailAmenities.vue")['default']>
export const LazySectionRoomDetailExclusive: LazyComponent<typeof import("../app/components/section/room-detail/RoomDetailExclusive.vue")['default']>
export const LazySectionRoomDetailGallery: LazyComponent<typeof import("../app/components/section/room-detail/RoomDetailGallery.vue")['default']>
export const LazySectionRoomDetailOverview: LazyComponent<typeof import("../app/components/section/room-detail/RoomDetailOverview.vue")['default']>
export const LazySectionRoomsCollectionSection: LazyComponent<typeof import("../app/components/section/rooms/RoomsCollectionSection.vue")['default']>
export const LazySectionRoomsFeaturedSection: LazyComponent<typeof import("../app/components/section/rooms/RoomsFeaturedSection.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
