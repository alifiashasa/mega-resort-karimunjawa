import { defineComponent, withAsyncContext, mergeProps, unref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useResortStore } from './resortStore-B33Vif7n.mjs';
import { u as useAsyncData, H as HeroSection } from './HeroSection-22iQIvCu.mjs';
import { Star } from 'lucide-vue-next';
import { a as useI18n, b as useSeoMeta } from './server.mjs';
import 'pinia';
import 'axios';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "IconSun",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-3.5 h-3.5 text-[#8C704E] fill-current" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        class: __props.className
      }, _attrs))}><path d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 100-2H2a1 1 0 100 2zm18 0h2a1 1 0 100-2h-2a1 1 0 100 2zM11 2v2a1 1 0 102 0V2a1 1 0 10-2 0zm0 18v2a1 1 0 102 0v-2a1 1 0 10-2 0zM5.99 4.58a1 1 0 10-1.41 1.41l1.41 1.42a1 1 0 101.42-1.42L5.99 4.58zm12.02 12.02a1 1 0 10-1.41 1.42l1.41 1.41a1 1 0 101.42-1.41l-1.42-1.42zm1.42-12.02a1 1 0 00-1.42 0l-1.41 1.41a1 1 0 101.41 1.42l1.42-1.42a1 1 0 000-1.41zM6 16.6l-1.42 1.42a1 1 0 101.42 1.41l1.41-1.41A1 1 0 006 16.6z"></path></svg>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconSun.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const IconSun = Object.assign(_sfc_main$8, { __name: "CommonIconsIconSun" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "IconBuildingAc",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-3.5 h-3.5 text-[#8C704E]" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconBuildingAc.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const IconBuildingAc = Object.assign(_sfc_main$7, { __name: "CommonIconsIconBuildingAc" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RoomFeaturedCard",
  __ssrInlineRender: true,
  props: {
    room: {},
    isCenter: { type: Boolean, default: false }
  },
  emits: ["book", "select"],
  setup(__props, { emit: __emit }) {
    const formatPrice = (val) => {
      return "Rp " + val.toLocaleString("id-ID") + ",00";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group cursor-pointer flex flex-col w-full bg-transparent rounded-[12px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2" }, _attrs))}><div class="${ssrRenderClass([[
        __props.isCenter ? "h-[340px] sm:h-[400px] lg:h-[446px]" : "h-[300px] sm:h-[350px] lg:h-[390px]"
      ], "relative w-full rounded-[12px] overflow-hidden bg-[#e5e7eb] shadow-xs group-hover:shadow-xl transition-all duration-500 ease-out"])}"><img${ssrRenderAttr("src", __props.room.image)}${ssrRenderAttr("alt", __props.room.name)} class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy"><div class="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-black/40 backdrop-blur-md text-white text-xs font-semibold select-none border border-white/20">`);
      _push(ssrRenderComponent(unref(Star), { class: "w-3.5 h-3.5 text-[#FFA03F] fill-[#FFA03F]" }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.room.rating)}${ssrInterpolate(__props.room.ratingScale || "/10")}</span></div></div><div class="pt-4 flex flex-col gap-2"><h3 class="font-spartan text-xl sm:text-[22px] font-bold text-[#1f1a16] leading-snug group-hover:text-[#977E5B] transition-colors">${ssrInterpolate(__props.room.name)}</h3><p class="font-opensans text-[13px] text-[#717680] line-clamp-1"> 16 Admiralty war, Lekki Phase 1, Lagos </p><div class="flex flex-wrap items-center gap-2 pt-1"><span class="inline-flex items-center gap-1.5 font-urbanist text-[11px] sm:text-[12px] px-3 py-1 rounded-[8px] bg-[#F5EFE6] text-[#8C704E] font-medium border border-[#ebdcc9]/50">`);
      _push(ssrRenderComponent(IconSun, { "class-name": "w-3.5 h-3.5 text-[#8C704E] fill-current" }, null, _parent));
      _push(`<span>Sunset ans Sunrise View</span></span><span class="inline-flex items-center gap-1.5 font-urbanist text-[11px] sm:text-[12px] px-3 py-1 rounded-[8px] bg-[#F5EFE6] text-[#8C704E] font-medium border border-[#ebdcc9]/50">`);
      _push(ssrRenderComponent(IconBuildingAc, { "class-name": "w-3.5 h-3.5 text-[#8C704E]" }, null, _parent));
      _push(`<span>AC Central</span></span></div><div class="pt-2 flex items-baseline gap-1"><span class="font-spartan text-[18px] sm:text-[20px] font-bold text-[#1f1a16]">${ssrInterpolate(formatPrice(__props.room.price))}</span><span class="font-urbanist text-xs sm:text-[13px] text-[#717680] font-normal"> /${ssrInterpolate(__props.room.priceUnit || "night")}</span></div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/RoomFeaturedCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const RoomFeaturedCard = Object.assign(_sfc_main$6, { __name: "CardRoomFeaturedCard" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RoomsFeaturedSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useResortStore();
    const { t } = useI18n();
    const featuredRooms = computed(() => {
      const rooms = store.resortData?.rooms || [];
      const filtered = rooms.filter((r) => r.isFeatured);
      return filtered.length > 0 ? filtered : rooms.slice(0, 3);
    });
    const handleSelectRoom = (room) => {
      const target = (void 0).getElementById("collection");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "featured-rooms",
        class: "py-16 sm:py-20 lg:py-24 bg-[#FDFDFD]"
      }, _attrs))}><div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"><div class="text-center max-w-7xl mx-auto mb-14 sm:mb-20"><span class="font-urbanist text-xs sm:text-[16px] font-normal uppercase tracking-[0.18em] text-[#717680] block mb-4 sm:mb-3">${ssrInterpolate(unref(t)("roomsPage.featured.badge"))}</span><h2 class="font-spartan text-2xl sm:text-3xl lg:text-[48px] font-semibold text-[#977E5B] uppercase tracking-tight leading-[1.18] max-w-none mx-auto">${ssrInterpolate(unref(t)("roomsPage.featured.title"))}</h2><p class="font-opensans text-sm sm:text-base lg:text-[20px] text-[#717680] leading-relaxed mt-4 max-w-8xl mx-auto">${ssrInterpolate(unref(t)("roomsPage.featured.description"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 items-end justify-center"><!--[-->`);
      ssrRenderList(unref(featuredRooms), (room, idx) => {
        _push(ssrRenderComponent(RoomFeaturedCard, {
          key: room.id,
          room,
          "is-center": idx === 1,
          onSelect: handleSelectRoom
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/rooms/RoomsFeaturedSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const RoomsFeaturedSection = Object.assign(_sfc_main$5, { __name: "SectionRoomsFeaturedSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "IconCleanliness",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-3.5 h-3.5 stroke-[2]" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconCleanliness.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconCleanliness = Object.assign(_sfc_main$4, { __name: "CommonIconsIconCleanliness" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "IconAmenities",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-3.5 h-3.5 stroke-[2]" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></svg>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconAmenities.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconAmenities = Object.assign(_sfc_main$3, { __name: "CommonIconsIconAmenities" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RoomDetailedCard",
  __ssrInlineRender: true,
  props: {
    room: {}
  },
  emits: ["book", "view"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const formatPrice = (val) => {
      return "Rp " + val.toLocaleString("id-ID");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[20px] p-6 sm:p-7 border border-[#F0ECE6] shadow-xs hover:shadow-md transition-all duration-300" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"><div class="lg:col-span-3 flex flex-col justify-between items-start w-full"><div class="relative w-full h-[240px] sm:h-[280px] lg:h-[260px] rounded-[16px] overflow-hidden bg-[#e5e7eb] group"><img${ssrRenderAttr("src", __props.room.image)}${ssrRenderAttr("alt", __props.room.name)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" loading="lazy"></div><button type="button" class="mt-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[6px] border border-[#d5c7b5] text-xs sm:text-[13px] font-urbanist text-[#717680] hover:text-[#8F7553] hover:border-[#8F7553] hover:bg-[#FAF7F2] transition-colors cursor-pointer select-none font-normal"><span>View Detail</span><span class="text-xs">→</span></button></div><div class="lg:col-span-3 flex flex-col justify-between"><div><span class="font-urbanist text-xs uppercase tracking-wider text-[#717680] font-normal block mb-1.5">${ssrInterpolate(__props.room.badge || "BEST OPTION TO STAY")}</span><h3 class="font-spartan text-lg sm:text-[20px] font-bold text-[#1f1a16] leading-snug">${ssrInterpolate(__props.room.fullName || __props.room.name + " Mega Resort Karimunjawa")}</h3></div></div><div class="lg:col-span-3 flex flex-col justify-between space-y-4"><div><div class="font-spartan text-lg sm:text-[20px] font-bold text-[#1f1a16]">${ssrInterpolate(formatPrice(__props.room.price))}/${ssrInterpolate(__props.room.priceUnit || "night")}</div><div class="font-urbanist text-xs text-[#717680] mt-0.5">`);
      if (__props.room.originalPrice) {
        _push(`<span class="line-through">${ssrInterpolate(formatPrice(__props.room.originalPrice))}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.room.originalPrice) {
        _push(`<span> · </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(__props.room.discountText || "Save 5%")}</span></div><p class="font-urbanist text-xs text-[#717680] mt-0.5">${ssrInterpolate(__props.room.taxInfo || "Include All Taxed")}</p></div><div class="pt-2"><span class="font-urbanist text-xs font-semibold text-[#1f1a16] block mb-2"> Basic Information </span><div class="space-y-1.5 text-xs font-urbanist"><div class="flex items-center justify-between gap-2"><span class="text-[#717680]">Total Rooms</span><span class="text-[#717680] font-normal">${ssrInterpolate(__props.room.specs?.totalRooms || "1 King + 2")}</span></div><div class="flex items-center justify-between gap-2"><span class="text-[#717680]">Bathrooms</span><span class="text-[#717680] font-normal">${ssrInterpolate(__props.room.specs?.bathroom || "3 Attached")}</span></div><div class="flex items-center justify-between gap-2"><span class="text-[#717680]">Internet</span><span class="text-[#717680] font-normal">${ssrInterpolate(__props.room.specs?.internet || "100Mbps")}</span></div><div class="flex items-center justify-between gap-2"><span class="text-[#717680]">Covered Parking</span><span class="text-[#717680] font-normal">${ssrInterpolate(__props.room.specs?.coveredParking || "Yes Two")}</span></div></div></div></div><div class="lg:col-span-3 flex flex-col justify-between space-y-4"><div><span class="font-urbanist text-xs uppercase tracking-wider text-[#717680] font-normal block mb-3">${ssrInterpolate(__props.room.category || "BASIC BACK COTTAGE")}</span><div class="space-y-3.5"><div class="flex items-start gap-2.5">`);
      _push(ssrRenderComponent(IconCleanliness, { "class-name": "w-4 h-4 text-[#8F7553] shrink-0 mt-0.5" }, null, _parent));
      _push(`<div><h5 class="font-spartan text-[14px] font-bold text-[#8F7553]"> Cleanlines </h5><p class="font-opensans text-[11px] sm:text-[12px] text-[#717680] leading-snug mt-0.5">${ssrInterpolate(__props.room.highlights?.cleanliness || "A well-maintained cottage with high standards of cleanliness,")}</p></div></div><div class="flex items-start gap-2.5">`);
      _push(ssrRenderComponent(IconAmenities, { "class-name": "w-4 h-4 text-[#8F7553] shrink-0 mt-0.5" }, null, _parent));
      _push(`<div><h5 class="font-spartan text-[14px] font-bold text-[#8F7553]"> Aminities </h5><p class="font-opensans text-[11px] sm:text-[12px] text-[#717680] leading-snug mt-0.5">${ssrInterpolate(__props.room.highlights?.amenities || "Equipped with essential amenities to provide convenience")}</p></div></div></div></div><div class="pt-2"><button type="button" class="w-full h-[40px] sm:h-[42px] flex items-center justify-center bg-[#8F7553] hover:bg-[#7b6343] text-white font-urbanist text-xs sm:text-[14px] font-medium rounded-[8px] transition-colors cursor-pointer shadow-xs"> Booking Now </button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/RoomDetailedCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RoomDetailedCard = Object.assign(_sfc_main$2, { __name: "CardRoomDetailedCard" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RoomsCollectionSection",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useResortStore();
    const { t } = useI18n();
    const allRooms = computed(() => {
      return store.resortData?.rooms || [];
    });
    const handleBookRoom = (room) => {
      store.openBookingModal(null, null, room);
    };
    const handleViewRoom = (room) => {
      store.openBookingModal(null, null, room);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "collection",
        class: "py-16 sm:py-20 lg:py-24 bg-[#FDFDFD] border-t border-[#F0F0F0]"
      }, _attrs))}><div class="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"><div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16"><div class="lg:col-span-7 space-y-2.5"><span class="font-urbanist text-xs sm:text-[14px] font-normal uppercase tracking-[0.18em] text-[#717680] block">${ssrInterpolate(unref(t)("roomsPage.collection.badge"))}</span><h2 class="font-spartan text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#977E5B] uppercase tracking-tight leading-[1.2]">${ssrInterpolate(unref(t)("roomsPage.collection.title"))}</h2></div><div class="lg:col-span-5 flex justify-end"><p class="font-opensans text-xs sm:text-[14px] text-[#717680] leading-relaxed lg:text-right max-w-lg">${ssrInterpolate(unref(t)("roomsPage.collection.description"))}</p></div></div><div class="space-y-6 sm:space-y-8"><!--[-->`);
      ssrRenderList(unref(allRooms), (room) => {
        _push(ssrRenderComponent(RoomDetailedCard, {
          key: room.id,
          room,
          onBook: handleBookRoom,
          onView: handleViewRoom
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/rooms/RoomsCollectionSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RoomsCollectionSection = Object.assign(_sfc_main$1, { __name: "SectionRoomsCollectionSection" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rooms",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useResortStore();
    const { t } = useI18n();
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("resort-data-rooms-page", async () => {
      await store.fetchResortData(true);
      return store.resortData;
    })), await __temp, __restore();
    useSeoMeta({
      title: "Rooms & Suites - Mega Resort Karimunjawa",
      description: "Carefully selected stays for a more memorable experience. Explore our full collection of stays, designed for comfort and relaxation in Karimunjawa.",
      ogTitle: "Rooms & Suites - Mega Resort Karimunjawa",
      ogDescription: "Carefully selected stays for a more memorable experience at Mega Resort Karimunjawa.",
      ogImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden bg-[#FDFDFD]" }, _attrs))}>`);
      _push(ssrRenderComponent(HeroSection, {
        id: "rooms-hero",
        "bg-image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85",
        "badge-prefix": unref(t)("roomsPage.hero.titlePrefix"),
        "script-word": unref(t)("roomsPage.hero.titleAt"),
        title: unref(t)("roomsPage.hero.titleSuffix"),
        description: unref(t)("roomsPage.hero.description"),
        "cta-text": unref(t)("roomsPage.hero.exploreCta"),
        "cta-target-id": "#featured-rooms",
        "show-scroll-down": false,
        "min-height": "min-h-[620px] sm:min-h-[720px] lg:h-[820px]",
        "overlay-class": "bg-gradient-to-b from-black/60 via-black/40 to-black/75"
      }, null, _parent));
      _push(ssrRenderComponent(RoomsFeaturedSection, null, null, _parent));
      _push(ssrRenderComponent(RoomsCollectionSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rooms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rooms-DWgZja2T.mjs.map
