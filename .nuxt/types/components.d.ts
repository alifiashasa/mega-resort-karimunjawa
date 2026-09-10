
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

interface _GlobalComponents {
  CardGalleryCard: typeof import("../../app/components/card/GalleryCard.vue")['default']
  CardNewsCard: typeof import("../../app/components/card/NewsCard.vue")['default']
  CardPackageCard: typeof import("../../app/components/card/PackageCard.vue")['default']
  CardRoomDetailedCard: typeof import("../../app/components/card/RoomDetailedCard.vue")['default']
  CardRoomFeaturedCard: typeof import("../../app/components/card/RoomFeaturedCard.vue")['default']
  CommonAppButton: typeof import("../../app/components/common/AppButton.vue")['default']
  CommonBookingModal: typeof import("../../app/components/common/BookingModal.vue")['default']
  CommonResortLogo: typeof import("../../app/components/common/ResortLogo.vue")['default']
  CommonSectionBadge: typeof import("../../app/components/common/SectionBadge.vue")['default']
  CommonVideoModal: typeof import("../../app/components/common/VideoModal.vue")['default']
  CommonIconsIconAmenities: typeof import("../../app/components/common/icons/IconAmenities.vue")['default']
  CommonIconsIconArrowLongLeft: typeof import("../../app/components/common/icons/IconArrowLongLeft.vue")['default']
  CommonIconsIconArrowLongRight: typeof import("../../app/components/common/icons/IconArrowLongRight.vue")['default']
  CommonIconsIconAwardShield: typeof import("../../app/components/common/icons/IconAwardShield.vue")['default']
  CommonIconsIconBuildingAc: typeof import("../../app/components/common/icons/IconBuildingAc.vue")['default']
  CommonIconsIconChatDots: typeof import("../../app/components/common/icons/IconChatDots.vue")['default']
  CommonIconsIconChevronCircleLeft: typeof import("../../app/components/common/icons/IconChevronCircleLeft.vue")['default']
  CommonIconsIconChevronCircleRight: typeof import("../../app/components/common/icons/IconChevronCircleRight.vue")['default']
  CommonIconsIconCleanliness: typeof import("../../app/components/common/icons/IconCleanliness.vue")['default']
  CommonIconsIconInstagram: typeof import("../../app/components/common/icons/IconInstagram.vue")['default']
  CommonIconsIconLocation: typeof import("../../app/components/common/icons/IconLocation.vue")['default']
  CommonIconsIconLotus: typeof import("../../app/components/common/icons/IconLotus.vue")['default']
  CommonIconsIconRibbonBadge: typeof import("../../app/components/common/icons/IconRibbonBadge.vue")['default']
  CommonIconsIconSpinner: typeof import("../../app/components/common/icons/IconSpinner.vue")['default']
  CommonIconsIconStar: typeof import("../../app/components/common/icons/IconStar.vue")['default']
  CommonIconsIconStarSolid: typeof import("../../app/components/common/icons/IconStarSolid.vue")['default']
  CommonIconsIconSun: typeof import("../../app/components/common/icons/IconSun.vue")['default']
  CommonIconsIconTiktok: typeof import("../../app/components/common/icons/IconTiktok.vue")['default']
  CommonIconsIconTreeLeaf: typeof import("../../app/components/common/icons/IconTreeLeaf.vue")['default']
  CommonIconsIconTriangleDown: typeof import("../../app/components/common/icons/IconTriangleDown.vue")['default']
  CommonIconsIconWhatsapp: typeof import("../../app/components/common/icons/IconWhatsapp.vue")['default']
  NavigationAppFooter: typeof import("../../app/components/navigation/AppFooter.vue")['default']
  NavigationAppHeader: typeof import("../../app/components/navigation/AppHeader.vue")['default']
  SectionHomeAboutSection: typeof import("../../app/components/section/home/AboutSection.vue")['default']
  SectionHomeDiningSection: typeof import("../../app/components/section/home/DiningSection.vue")['default']
  SectionHomeFeatureVideoSection: typeof import("../../app/components/section/home/FeatureVideoSection.vue")['default']
  SectionHomeGallerySection: typeof import("../../app/components/section/home/GallerySection.vue")['default']
  SectionHomeHeroSection: typeof import("../../app/components/section/home/HeroSection.vue")['default']
  SectionHomeNewsSection: typeof import("../../app/components/section/home/NewsSection.vue")['default']
  SectionHomePackageSection: typeof import("../../app/components/section/home/PackageSection.vue")['default']
  SectionHomeVillaTourSection: typeof import("../../app/components/section/home/VillaTourSection.vue")['default']
  SectionRoomsCollectionSection: typeof import("../../app/components/section/rooms/RoomsCollectionSection.vue")['default']
  SectionRoomsFeaturedSection: typeof import("../../app/components/section/rooms/RoomsFeaturedSection.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  NuxtLinkLocale: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
  SwitchLocalePathLink: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyCardGalleryCard: LazyComponent<typeof import("../../app/components/card/GalleryCard.vue")['default']>
  LazyCardNewsCard: LazyComponent<typeof import("../../app/components/card/NewsCard.vue")['default']>
  LazyCardPackageCard: LazyComponent<typeof import("../../app/components/card/PackageCard.vue")['default']>
  LazyCardRoomDetailedCard: LazyComponent<typeof import("../../app/components/card/RoomDetailedCard.vue")['default']>
  LazyCardRoomFeaturedCard: LazyComponent<typeof import("../../app/components/card/RoomFeaturedCard.vue")['default']>
  LazyCommonAppButton: LazyComponent<typeof import("../../app/components/common/AppButton.vue")['default']>
  LazyCommonBookingModal: LazyComponent<typeof import("../../app/components/common/BookingModal.vue")['default']>
  LazyCommonResortLogo: LazyComponent<typeof import("../../app/components/common/ResortLogo.vue")['default']>
  LazyCommonSectionBadge: LazyComponent<typeof import("../../app/components/common/SectionBadge.vue")['default']>
  LazyCommonVideoModal: LazyComponent<typeof import("../../app/components/common/VideoModal.vue")['default']>
  LazyCommonIconsIconAmenities: LazyComponent<typeof import("../../app/components/common/icons/IconAmenities.vue")['default']>
  LazyCommonIconsIconArrowLongLeft: LazyComponent<typeof import("../../app/components/common/icons/IconArrowLongLeft.vue")['default']>
  LazyCommonIconsIconArrowLongRight: LazyComponent<typeof import("../../app/components/common/icons/IconArrowLongRight.vue")['default']>
  LazyCommonIconsIconAwardShield: LazyComponent<typeof import("../../app/components/common/icons/IconAwardShield.vue")['default']>
  LazyCommonIconsIconBuildingAc: LazyComponent<typeof import("../../app/components/common/icons/IconBuildingAc.vue")['default']>
  LazyCommonIconsIconChatDots: LazyComponent<typeof import("../../app/components/common/icons/IconChatDots.vue")['default']>
  LazyCommonIconsIconChevronCircleLeft: LazyComponent<typeof import("../../app/components/common/icons/IconChevronCircleLeft.vue")['default']>
  LazyCommonIconsIconChevronCircleRight: LazyComponent<typeof import("../../app/components/common/icons/IconChevronCircleRight.vue")['default']>
  LazyCommonIconsIconCleanliness: LazyComponent<typeof import("../../app/components/common/icons/IconCleanliness.vue")['default']>
  LazyCommonIconsIconInstagram: LazyComponent<typeof import("../../app/components/common/icons/IconInstagram.vue")['default']>
  LazyCommonIconsIconLocation: LazyComponent<typeof import("../../app/components/common/icons/IconLocation.vue")['default']>
  LazyCommonIconsIconLotus: LazyComponent<typeof import("../../app/components/common/icons/IconLotus.vue")['default']>
  LazyCommonIconsIconRibbonBadge: LazyComponent<typeof import("../../app/components/common/icons/IconRibbonBadge.vue")['default']>
  LazyCommonIconsIconSpinner: LazyComponent<typeof import("../../app/components/common/icons/IconSpinner.vue")['default']>
  LazyCommonIconsIconStar: LazyComponent<typeof import("../../app/components/common/icons/IconStar.vue")['default']>
  LazyCommonIconsIconStarSolid: LazyComponent<typeof import("../../app/components/common/icons/IconStarSolid.vue")['default']>
  LazyCommonIconsIconSun: LazyComponent<typeof import("../../app/components/common/icons/IconSun.vue")['default']>
  LazyCommonIconsIconTiktok: LazyComponent<typeof import("../../app/components/common/icons/IconTiktok.vue")['default']>
  LazyCommonIconsIconTreeLeaf: LazyComponent<typeof import("../../app/components/common/icons/IconTreeLeaf.vue")['default']>
  LazyCommonIconsIconTriangleDown: LazyComponent<typeof import("../../app/components/common/icons/IconTriangleDown.vue")['default']>
  LazyCommonIconsIconWhatsapp: LazyComponent<typeof import("../../app/components/common/icons/IconWhatsapp.vue")['default']>
  LazyNavigationAppFooter: LazyComponent<typeof import("../../app/components/navigation/AppFooter.vue")['default']>
  LazyNavigationAppHeader: LazyComponent<typeof import("../../app/components/navigation/AppHeader.vue")['default']>
  LazySectionHomeAboutSection: LazyComponent<typeof import("../../app/components/section/home/AboutSection.vue")['default']>
  LazySectionHomeDiningSection: LazyComponent<typeof import("../../app/components/section/home/DiningSection.vue")['default']>
  LazySectionHomeFeatureVideoSection: LazyComponent<typeof import("../../app/components/section/home/FeatureVideoSection.vue")['default']>
  LazySectionHomeGallerySection: LazyComponent<typeof import("../../app/components/section/home/GallerySection.vue")['default']>
  LazySectionHomeHeroSection: LazyComponent<typeof import("../../app/components/section/home/HeroSection.vue")['default']>
  LazySectionHomeNewsSection: LazyComponent<typeof import("../../app/components/section/home/NewsSection.vue")['default']>
  LazySectionHomePackageSection: LazyComponent<typeof import("../../app/components/section/home/PackageSection.vue")['default']>
  LazySectionHomeVillaTourSection: LazyComponent<typeof import("../../app/components/section/home/VillaTourSection.vue")['default']>
  LazySectionRoomsCollectionSection: LazyComponent<typeof import("../../app/components/section/rooms/RoomsCollectionSection.vue")['default']>
  LazySectionRoomsFeaturedSection: LazyComponent<typeof import("../../app/components/section/rooms/RoomsFeaturedSection.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyNuxtLinkLocale: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
  LazySwitchLocalePathLink: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
