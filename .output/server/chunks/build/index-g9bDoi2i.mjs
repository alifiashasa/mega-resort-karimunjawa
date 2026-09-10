import { defineComponent, withAsyncContext, mergeProps, unref, computed, ref, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useResortStore } from './resortStore-B33Vif7n.mjs';
import { u as useAsyncData, H as HeroSection, I as IconLotus } from './HeroSection-22iQIvCu.mjs';
import { h as publicAssetsURL } from '../_/nitro.mjs';
import { a as useI18n, b as useSeoMeta } from './server.mjs';
import { Play, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, Calendar } from 'lucide-vue-next';
import 'pinia';
import 'axios';
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

const _imports_0$1 = publicAssetsURL("/images/about-resort.jpg");
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useResortStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "pt-10 sm:pt-10 pb-20 sm:pb-28 bg-[#FFF9EB] relative overflow-hidden"
      }, _attrs))}><div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"><span class="flex-1 h-[1px] bg-[#977E5B]"></span>`);
      _push(ssrRenderComponent(IconLotus, {
        "fill-color": "#977E5B",
        "class-name": "w-8 h-6 sm:w-10 sm:h-7 shrink-0"
      }, null, _parent));
      _push(`<span class="flex-1 h-[1px] bg-[#977E5B]"></span></div><div class="text-left mb-10 sm:mb-14"><span class="font-opensans text-xs sm:text-[18px] font-normal text-[#717680] block mb-2 sm:mb-3 tracking-normal">${ssrInterpolate(unref(t)("about.badge"))}</span><h2 class="font-spartan text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-bold text-[#977E5B] leading-tight">${ssrInterpolate(unref(t)("about.title"))}</h2></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch"><div class="w-full"><div class="relative rounded-[12px] overflow-hidden shadow-lg group h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]"><img${ssrRenderAttr("src", _imports_0$1)} alt="Mega Resort Karimunjawa Boardwalk &amp; Overwater Villas" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"></div></div><div class="w-full flex flex-col justify-between gap-8 sm:gap-12 lg:gap-14 h-full"><p class="text-sm sm:text-[15px] lg:text-[20px] text-[#717680] leading-[1.85] font-normal">${ssrInterpolate(unref(store).resortData?.aboutDescription || unref(t)("about.description"))}</p><div class="grid grid-cols-3 gap-4 sm:gap-5"><div class="bg-[#977E5B] text-white p-4 sm:p-5 rounded-[20px] shadow-sm flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.03]"><span class="font-sans text-2xl sm:text-3xl font-bold block mb-1.5">${ssrInterpolate(unref(t)("about.stat1Value"))}</span><span class="text-xs sm:text-[20px] text-white/90 leading-snug block font-normal">${ssrInterpolate(unref(t)("about.stat1Label"))}</span></div><div class="bg-transparent p-4 sm:p-5 flex flex-col items-center justify-center text-center"><span class="font-sans text-2xl sm:text-3xl font-bold text-[#977E5B] block mb-1.5">${ssrInterpolate(unref(t)("about.stat2Value"))}</span><span class="text-xs sm:text-[20px] text-[#977E5B] leading-snug block font-normal">${ssrInterpolate(unref(t)("about.stat2Label"))}</span></div><div class="bg-transparent p-4 sm:p-5 flex flex-col items-center justify-center text-center"><span class="font-sans text-2xl sm:text-3xl font-bold text-[#977E5B] block mb-1.5">${ssrInterpolate(unref(t)("about.stat3Value"))}</span><span class="text-xs sm:text-[20px] text-[#977E5B] leading-snug block font-normal">${ssrInterpolate(unref(t)("about.stat3Label"))}</span></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/home/AboutSection.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const AboutSection = Object.assign(_sfc_main$i, { __name: "SectionHomeAboutSection" });
const _imports_0 = publicAssetsURL("/images/video-banner-bg.jpg");
const _imports_1 = publicAssetsURL("/logo/logo-megaresort-color.svg");
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "FeatureVideoSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useResortStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full overflow-hidden min-h-[550px] sm:min-h-[620px] lg:h-[700px] lg:min-h-[700px] flex flex-col justify-between" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Mega Resort Karimunjawa Sunset Panorama" class="absolute inset-x-0 -top-16 sm:-top-24 lg:-top-36 w-full h-[calc(100%+64px)] sm:h-[calc(100%+96px)] lg:h-[calc(100%+144px)] object-cover object-bottom" loading="lazy"><div class="relative z-20 w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto flex justify-end px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 lg:pt-12"><div class="flex flex-col items-center"><img${ssrRenderAttr("src", _imports_1)} alt="Mega Resort Karimunjawa Logo" class="w-20 sm:w-24 lg:w-28 h-auto select-none" loading="eager"></div></div><div class="relative z-10 w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 pb-8 sm:pb-12 lg:pb-14 text-white"><div class="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-12"><div class="flex-1 w-full max-w-none pl-2 sm:pl-6 lg:pl-10"><h2 class="font-allura font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[100px] text-white leading-tight lg:leading-[112px] tracking-[0.035em] mb-2 sm:mb-3">${ssrInterpolate(unref(t)("videoBanner.title"))}</h2><p class="font-spartan text-[18px] sm:text-[20px] lg:text-[24px] text-white leading-[1.6] font-normal text-left max-w-none">${ssrInterpolate(unref(t)("videoBanner.description"))}</p></div><div class="flex flex-col items-center justify-center shrink-0 self-start md:self-center -translate-y-8 sm:-translate-y-14 lg:-translate-y-20 pr-1 sm:pr-4"><button type="button" class="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] rounded-full border border-white/85 hover:border-white hover:bg-black/50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-md group" aria-label="Play resort video">`);
      _push(ssrRenderComponent(unref(Play), { class: "w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5 text-white fill-white ml-0.5" }, null, _parent));
      _push(`</button><span class="text-[12px] sm:text-[13px] text-white/95 font-opensans font-normal mt-2 text-center whitespace-nowrap">${ssrInterpolate(unref(t)("videoBanner.playVideo"))}</span></div></div></div></section>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/home/FeatureVideoSection.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const FeatureVideoSection = Object.assign(_sfc_main$h, { __name: "SectionHomeFeatureVideoSection" });
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "IconChatDots",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-5 h-5 text-[#977E5B] shrink-0" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><path d="M7 6.2A3.8 3.8 0 0 1 10.5 3h6.5A4 4 0 0 1 21 7v4.5a4 4 0 0 1-4 4h-.5"></path><path d="M5.5 7.5h8.5A3.5 3.5 0 0 1 17.5 11v3.5a3.5 3.5 0 0 1-3.5 3.5h-3.2l-2.2 2.4a.5.5 0 0 1-.8-.4V18H5.5A3.5 3.5 0 0 1 2 14.5V11A3.5 3.5 0 0 1 5.5 7.5Z"></path><circle cx="6.8" cy="12.8" r="0.75" fill="currentColor" stroke="none"></circle><circle cx="9.8" cy="12.8" r="0.75" fill="currentColor" stroke="none"></circle><circle cx="12.8" cy="12.8" r="0.75" fill="currentColor" stroke="none"></circle></svg>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconChatDots.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const IconChatDots = Object.assign(_sfc_main$g, { __name: "CommonIconsIconChatDots" });
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "IconLocation",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-5 h-5 text-[#977E5B] shrink-0" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.6",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><path d="M12 21.5C12 21.5 19 15.5 19 9.5C19 5.634 15.866 2.5 12 2.5C8.134 2.5 5 5.634 5 9.5C5 15.5 12 21.5 12 21.5Z"></path><circle cx="12" cy="9.5" r="2.2" stroke-width="1.6"></circle></svg>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconLocation.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const IconLocation = Object.assign(_sfc_main$f, { __name: "CommonIconsIconLocation" });
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "IconInstagram",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-5 h-5 text-[#977E5B] shrink-0" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.6",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><rect width="18" height="18" x="3" y="3" rx="5"></rect><circle cx="12" cy="12" r="3.6"></circle><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"></circle></svg>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconInstagram.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const IconInstagram = Object.assign(_sfc_main$e, { __name: "CommonIconsIconInstagram" });
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "IconWhatsapp",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-5 h-5 text-[#977E5B] shrink-0" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.6",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconWhatsapp.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const IconWhatsapp = Object.assign(_sfc_main$d, { __name: "CommonIconsIconWhatsapp" });
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "GallerySection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useResortStore();
    const defaultGallery = [
      {
        id: 1,
        title: "Tropical Waters & Overwater Deck",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: 2,
        title: "Sunset Over Lagoon Walkway",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: 3,
        title: "Overwater Bungalow Experience",
        image: "/images/about-resort.jpg"
      },
      {
        id: 4,
        title: "Overwater Villa Pavilion",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: 5,
        title: "Lagoon Wooden Boardwalk",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
      }
    ];
    const galleryList = computed(() => {
      if (store.resortData?.gallery && store.resortData.gallery.length >= 5) {
        return store.resortData.gallery;
      }
      return defaultGallery;
    });
    const activeIndex = ref(2);
    const visibleSlides = computed(() => {
      const list = galleryList.value;
      const len = list.length;
      if (len === 0) return [];
      const offsets = [-2, -1, 0, 1, 2];
      return offsets.map((offset) => {
        const itemIndex = ((activeIndex.value + offset) % len + len) % len;
        const item = list[itemIndex] ?? defaultGallery[itemIndex % defaultGallery.length] ?? defaultGallery[0];
        return {
          offset,
          itemIndex,
          item
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "gallery",
        class: "py-16 sm:py-20 lg:py-10 bg-[#FFF9EB] overflow-hidden select-none"
      }, _attrs))}><div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 text-center"><span class="font-opensans text-xs sm:text-[18px] text-[#717680] block mb-4 font-normal tracking-normal">${ssrInterpolate(unref(t)("gallery.badge"))}</span><h2 class="font-spartan text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#977E5B] mb-4 sm:mb-5 leading-tight">${ssrInterpolate(unref(t)("gallery.title"))}</h2><p class="font-opensans text-xs sm:text-[15px] lg:text-[20px] text-[#717680] max-w-4xl mx-auto leading-relaxed mb-10 sm:mb-14 font-normal px-2">${ssrInterpolate(unref(t)("gallery.description"))}</p><div class="relative w-full max-w-[1480px] mx-auto h-[260px] sm:h-[350px] md:h-[410px] lg:h-[460px] flex items-center justify-center"><!--[-->`);
      ssrRenderList(unref(visibleSlides), (slide) => {
        _push(`<div class="${ssrRenderClass([[
          slide.offset === 0 ? "z-30 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[232px] sm:h-[320px] md:h-[378px] lg:h-[435.58px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-2xl -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100" : slide.offset === -1 ? "z-20 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[210px] sm:h-[290px] md:h-[342px] lg:h-[393.29px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-xl -translate-x-[79.5%] -translate-y-1/2 scale-95 opacity-100" : slide.offset === 1 ? "z-20 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[210px] sm:h-[290px] md:h-[342px] lg:h-[393.29px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-xl -translate-x-[20.5%] -translate-y-1/2 scale-95 opacity-100" : slide.offset === -2 ? "z-10 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[188px] sm:h-[260px] md:h-[305px] lg:h-[351px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-lg -translate-x-[109%] -translate-y-1/2 scale-90 opacity-100 hidden sm:block" : "z-10 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[598.84px] h-[188px] sm:h-[260px] md:h-[305px] lg:h-[351px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shadow-lg translate-x-[9%] -translate-y-1/2 scale-90 opacity-100 hidden sm:block"
        ], "absolute top-1/2 left-1/2 cursor-pointer transition-all duration-500 ease-out overflow-hidden group select-none"])}">`);
        if (slide.item) {
          _push(`<img${ssrRenderAttr("src", slide.item.image)}${ssrRenderAttr("alt", slide.item.title)} class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy">`);
        } else {
          _push(`<!---->`);
        }
        if (slide.offset !== 0) {
          _push(`<div class="${ssrRenderClass([[
            Math.abs(slide.offset) === 1 ? "bg-white/50" : "bg-white/65"
          ], "absolute inset-0 transition-opacity duration-300 pointer-events-none"])}"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flex items-center justify-center gap-4 mt-8 sm:mt-10 mb-6"><button type="button" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5C2A5] bg-transparent hover:bg-white text-[#977E5B] hover:text-[#7d6443] flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer" aria-label="Previous image">`);
      _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-5 h-5" }, null, _parent));
      _push(`</button><button type="button" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5C2A5] bg-transparent hover:bg-white text-[#977E5B] hover:text-[#7d6443] flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer" aria-label="Next image">`);
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-5 h-5" }, null, _parent));
      _push(`</button></div><div class="inline-flex items-center justify-center my-6 max-w-full px-2"><div class="bg-[#FDFDFD] rounded-[12px] shadow-[1.5px_1.5px_8px_0px_rgba(0,0,0,0.06),6px_6px_20px_0px_rgba(0,0,0,0.04)] p-5 min-h-[68px] flex items-center justify-center flex-wrap gap-5 sm:gap-[20px]"><button type="button" class="group inline-flex items-center gap-2 font-spartan text-[14px] sm:text-[18px] font-medium uppercase tracking-[0] leading-normal text-[#977E5B] hover:text-[#7b6444] transition-colors cursor-pointer select-none">`);
      _push(ssrRenderComponent(IconChatDots, { "class-name": "w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#977E5B] shrink-0" }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(t)("gallery.contactUs"))}</span></button><a href="#contact" class="group inline-flex items-center gap-2 font-spartan text-[14px] sm:text-[18px] font-medium uppercase tracking-[0] leading-normal text-[#977E5B] hover:text-[#7b6444] transition-colors cursor-pointer select-none">`);
      _push(ssrRenderComponent(IconLocation, { "class-name": "w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#977E5B] shrink-0" }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(t)("gallery.comingHere"))}</span></a><a href="https://instagram.com/megaresort.karimunjawa" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 font-spartan text-[14px] sm:text-[18px] font-medium uppercase tracking-[0] leading-normal text-[#977E5B] hover:text-[#7b6444] transition-colors cursor-pointer select-none">`);
      _push(ssrRenderComponent(IconInstagram, { "class-name": "w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#977E5B] shrink-0" }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(t)("gallery.instagram"))}</span></a><a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 font-spartan text-[14px] sm:text-[18px] font-medium uppercase tracking-[0] leading-normal text-[#977E5B] hover:text-[#7b6444] transition-colors cursor-pointer select-none">`);
      _push(ssrRenderComponent(IconWhatsapp, { "class-name": "w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#977E5B] shrink-0" }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(t)("gallery.whatsapp"))}</span></a></div></div><p class="font-opensans text-xs sm:text-[14px] lg:text-[20px] text-[#717680] max-w-3xl mx-auto leading-relaxed mt-0.5 font-normal px-2">${ssrInterpolate(unref(t)("gallery.bottomCaption"))}</p></div></section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/home/GallerySection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const GallerySection = Object.assign(_sfc_main$c, { __name: "SectionHomeGallerySection" });
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "IconChevronCircleLeft",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-[#1E75BB] shrink-0 -translate-x-[0.5px]" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><path d="M14 17L9 12L14 7"></path></svg>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconChevronCircleLeft.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const IconChevronCircleLeft = Object.assign(_sfc_main$b, { __name: "CommonIconsIconChevronCircleLeft" });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "IconChevronCircleRight",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-[#1E75BB] shrink-0 translate-x-[0.5px]" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><path d="M10 17L15 12L10 7"></path></svg>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconChevronCircleRight.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const IconChevronCircleRight = Object.assign(_sfc_main$a, { __name: "CommonIconsIconChevronCircleRight" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "IconTriangleDown",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-[16px] h-[12px] text-white fill-current block" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 16 12",
        class: __props.className
      }, _attrs))}><polygon points="0,0 16,0 8,12"></polygon></svg>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconTriangleDown.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const IconTriangleDown = Object.assign(_sfc_main$9, { __name: "CommonIconsIconTriangleDown" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VillaTourSection",
  __ssrInlineRender: true,
  setup(__props) {
    const facilities = [
      {
        id: 1,
        name: "Bot Tours",
        title: "Boat Tours & Island Excursions",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85",
        description: "Explore the natural wonders of Karimunjawa by traditional wooden boat, visiting secluded beaches, turquoise lagoons, and untouched tropical islands perfect for exploration and nature photography."
      },
      {
        id: 2,
        name: "Dive Center",
        title: "PADI Dive Center",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=85",
        description: "Our certified PADI dive center provides professional equipment, expert guides, and daily excursions to the finest coral reefs and marine sanctuaries in Karimunjawa."
      },
      {
        id: 3,
        name: "Adult Swimming Poll",
        title: "Adult Swimming Pool",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
        description: "Immerse yourself in our infinity-edge oceanfront pool, crafted exclusively for adults to unwind with panoramic lagoon vistas, refreshing cocktails, and gentle island breezes."
      },
      {
        id: 4,
        name: "Mes Center",
        title: "Mess Center",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85",
        description: "The Mess Center is designed to provide a convenient and comfortable dining space for guests during their stay. Offering a variety of meals and refreshments, this facility ensures that you can enjoy delicious food without having to leave the resort area. With a welcoming atmosphere and attentive service, it becomes the perfect place to relax, dine, and recharge after a day of activities in Karimunjawa."
      },
      {
        id: 5,
        name: "Restaurant",
        title: "Resort Restaurant",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85",
        description: "Indulge in an exquisite beachfront culinary journey offering fresh caught seafood, authentic Indonesian specialties, and international favorites paired with premium refreshments."
      },
      {
        id: 6,
        name: "Snorkeling",
        title: "Snorkeling Excursions",
        image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=2000&q=85",
        description: "Discover the vibrant underwater paradise of Karimunjawa with guided snorkeling adventures among protected coral gardens and colorful tropical fish species."
      },
      {
        id: 7,
        name: "Yoga Medition",
        title: "Yoga & Meditation Deck",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=85",
        description: "Rejuvenate your body and mind on our serene open-air wooden pavilion, featuring sunrise yoga sessions, guided mindfulness meditation, and sound healing rituals."
      }
    ];
    const currentIndex = ref(3);
    const activeFacility = computed(() => facilities[currentIndex.value] || facilities[3]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "facility",
        class: "relative min-h-[600px] sm:min-h-[750px] lg:h-[900px] lg:min-h-[900px] flex items-center overflow-hidden bg-[#1b1713] select-none"
      }, _attrs))}><div class="absolute inset-0 overflow-hidden"><!--[-->`);
      ssrRenderList(facilities, (item, idx) => {
        _push(`<img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="${ssrRenderClass([idx === unref(currentIndex) ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none", "absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out will-change-[opacity]"])}" loading="lazy">`);
      });
      _push(`<!--]--><div class="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/85 via-black/40 to-transparent z-1 pointer-events-none"></div></div><div class="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20 flex flex-col justify-between min-h-[600px] sm:min-h-[750px] lg:h-[900px] lg:min-h-[900px]"><div class="flex-1 flex items-center"><div class="w-full max-w-[392px] ml-0 sm:ml-4 lg:ml-8 xl:ml-10 p-6 sm:p-[32px] rounded-[20px] text-white transition-all duration-300" style="${ssrRenderStyle({ "background": "rgba(10, 10, 10, 0.48)", "backdrop-filter": "blur(6px)", "-webkit-backdrop-filter": "blur(6px)" })}"><h3 class="font-spartan text-2xl sm:text-[28px] font-semibold text-white mb-3 sm:mb-4">${ssrInterpolate(unref(activeFacility).title)}</h3><p class="font-opensans text-xs sm:text-[14px] text-white/90 leading-relaxed font-normal">${ssrInterpolate(unref(activeFacility).description)}</p></div></div><div class="relative w-full pt-6 sm:pt-8"><div class="flex items-center justify-between gap-3 sm:gap-6"><button type="button" class="group w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full bg-black/35 backdrop-blur-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shrink-0 z-20 p-2.5 sm:p-[10px] border border-white/10" aria-label="Previous facility"><div class="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">`);
      _push(ssrRenderComponent(IconChevronCircleLeft, null, null, _parent));
      _push(`</div></button><div class="relative flex-1 overflow-hidden py-2"><div class="relative flex flex-col items-center justify-center w-full"><div class="relative w-full h-[16px]"><div class="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-white/85 to-transparent z-0"></div>`);
      _push(ssrRenderComponent(IconTriangleDown, { "class-name": "w-[16px] h-[12px] text-white fill-current absolute left-1/2 -translate-x-1/2 top-0 z-10 block" }, null, _parent));
      _push(`</div><div class="w-full overflow-hidden pt-2"><div class="flex items-center transition-transform duration-500 ease-out will-change-transform [backface-visibility:hidden]" style="${ssrRenderStyle({
        transform: `translate3d(calc(50% - ${unref(currentIndex) * 280 + 140}px), 0, 0)`
      })}"><!--[-->`);
      ssrRenderList(facilities, (item, idx) => {
        _push(`<button type="button" class="w-[280px] shrink-0 flex justify-center text-center cursor-pointer transition-opacity duration-300 px-3 select-none"><span class="${ssrRenderClass([[
          idx === unref(currentIndex) ? "text-white opacity-100" : "text-white/40 hover:text-white/80 opacity-40 hover:opacity-80"
        ], "font-spartan font-semibold text-[18px] sm:text-[24px] lg:text-[30px] transition-all duration-300 whitespace-nowrap block"])}">${ssrInterpolate(item.name)}</span></button>`);
      });
      _push(`<!--]--></div></div></div></div><button type="button" class="group w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full bg-black/35 backdrop-blur-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shrink-0 z-20 p-2.5 sm:p-[10px] border border-white/10" aria-label="Next facility"><div class="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">`);
      _push(ssrRenderComponent(IconChevronCircleRight, null, null, _parent));
      _push(`</div></button></div></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/home/VillaTourSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const VillaTourSection = Object.assign(_sfc_main$8, { __name: "SectionHomeVillaTourSection" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "IconArrowLongLeft",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-5 h-3.5 text-white" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 12",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.6",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><path d="M23 6H1M1 6L6 1M1 6L6 11"></path></svg>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconArrowLongLeft.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const IconArrowLongLeft = Object.assign(_sfc_main$7, { __name: "CommonIconsIconArrowLongLeft" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "IconArrowLongRight",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-5 h-3.5 text-white" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 12",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.6",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: __props.className
      }, _attrs))}><path d="M1 6H23M23 6L18 1M23 6L18 11"></path></svg>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconArrowLongRight.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const IconArrowLongRight = Object.assign(_sfc_main$6, { __name: "CommonIconsIconArrowLongRight" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DiningSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useResortStore();
    const diningList = [
      {
        id: 1,
        title: "Coastal Breakfast on the Veranda",
        scriptTitle: "Floating Breakfast",
        description: "Start your tropical morning with fresh ocean breezes and gourmet morning treats. Indulge in an exquisite assortment of artisan pastries, tropical fruit platters, and organic island coffee served overlooking crystal-clear waters.",
        subDescription: "Tailored for early risers who wish to greet the rising sun while enjoying private, tranquil oceanfront hospitality.",
        imageVertical: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
        imageInset: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        imageTop: "https://images.unsplash.com/photo-1533777857889-4be7c70e33f7?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 2,
        title: "Beachfront Sunset Seafood BBQ",
        scriptTitle: "Beachfront BBQ",
        description: "Savor freshly caught coral reef fish, succulent prawns, and rock lobsters grilled to perfection over fragrant coconut husks directly on the white sand beach.",
        subDescription: "Immerse yourself in authentic island flavors accompanied by acoustic melodies and warm Caribbean-style beach fires as dusk falls.",
        imageVertical: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
        imageInset: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        imageTop: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 3,
        title: "Romantic Candlelit Dinner",
        scriptTitle: "Romantic Dining",
        description: "Enjoy a romantic dinner experience specially designed to create unforgettable moments with your loved one. With warm candlelight, the soothing sound of the waves, and a breathtaking ocean view, every detail is carefully curated to create an intimate and warm atmosphere.",
        subDescription: "Each dish is served with exceptional flavor, paired with elegant, personalized service to make your evening truly special.",
        imageVertical: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        imageInset: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        imageTop: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 4,
        title: "Overwater Sunset Cocktails",
        scriptTitle: "Sunset Cocktails",
        description: "Relish hand-crafted tropical signature mocktails and cocktails on our wooden pier pavilion. Watch golden hues reflect across the pristine Java Sea horizon in pure tranquility.",
        subDescription: "Served with curated tapas and canapés crafted by our executive culinary chef.",
        imageVertical: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
        imageInset: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
        imageTop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: 5,
        title: "Private Sandbank Picnic",
        scriptTitle: "Sandbank Picnic",
        description: "Escape by private wooden boat to a secluded sandbank amidst azure waters for an unforgettable gourmet luxury picnic with champagne and artisanal delicacies.",
        subDescription: "An exclusive sanctuary for couples and families wishing to experience Karimunjawa’s pristine natural majesty.",
        imageVertical: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        imageInset: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
        imageTop: "https://images.unsplash.com/photo-1533777857889-4be7c70e33f7?auto=format&fit=crop&w=1000&q=80"
      }
    ];
    const currentIndex = ref(2);
    const activeDining = computed(() => diningList[currentIndex.value] || diningList[0]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "dining",
        class: "py-16 sm:py-20 lg:py-24 bg-[#8F7553] text-white relative overflow-hidden select-none"
      }, _attrs))}><div class="w-full pl-4 sm:pl-8 lg:pl-12 xl:pl-16 pr-4 sm:pr-8 lg:pr-0 relative z-10"><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start"><div class="lg:col-span-6 flex flex-col"><h2 class="font-spartan text-3xl sm:text-4xl lg:text-[44px] font-bold text-white mb-8 sm:mb-12 leading-tight">${ssrInterpolate(unref(t)("dining.title"))}</h2><div class="relative w-full max-w-[640px] pb-16 sm:pb-24 lg:pb-28"><div class="w-full max-w-[488px] h-[380px] sm:h-[480px] lg:h-[590px] rounded-[6px] overflow-hidden shadow-[0px_7px_18px_rgba(0,0,0,0.09)]"><img${ssrRenderAttr("src", unref(activeDining).imageVertical)}${ssrRenderAttr("alt", unref(activeDining).title)} class="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105" loading="lazy"></div><div class="absolute bottom-0 right-0 sm:right-2 lg:left-[165px] lg:right-auto w-[75%] sm:w-[70%] lg:w-[465px] max-w-[465px] h-[180px] sm:h-[240px] lg:h-[321px] rounded-[6px] overflow-hidden shadow-[0px_7px_18px_rgba(0,0,0,0.09)] z-10"><img${ssrRenderAttr("src", unref(activeDining).imageInset)}${ssrRenderAttr("alt", unref(activeDining).title)} class="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105" loading="lazy"></div></div></div><div class="lg:col-span-6 flex flex-col justify-between pt-0 lg:pt-1"><div class="w-full max-w-[517px] ml-auto h-[200px] sm:h-[260px] lg:h-[319px] rounded-[6px] lg:rounded-r-none overflow-hidden shadow-[0px_7px_18px_rgba(0,0,0,0.09)] mb-8 sm:mb-10"><img${ssrRenderAttr("src", unref(activeDining).imageTop)}${ssrRenderAttr("alt", unref(activeDining).title)} class="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105" loading="lazy"></div><div class="w-full pr-0 lg:pr-12 xl:pr-16"><div class="w-full lg:-ml-20 xl:-ml-32 lg:w-[calc(100%+5rem)] xl:w-[calc(100%+8rem)] mb-6"><span class="font-spartan text-base sm:text-lg font-medium text-white block mb-2 tracking-wide">${ssrInterpolate(unref(currentIndex) + 1)}/${ssrInterpolate(diningList.length)}</span><div class="w-full border-b border-white/50"></div></div><h3 class="font-allura text-5xl sm:text-6xl lg:text-[68px] text-white leading-[1.1] mb-6 font-normal tracking-wide">${ssrInterpolate(unref(activeDining).scriptTitle)}</h3><p class="font-opensans text-sm sm:text-[15px] lg:text-[18px] text-white/95 leading-[1.75] mb-5 font-normal">${ssrInterpolate(unref(activeDining).description)}</p><p class="font-opensans text-sm sm:text-[15px] lg:text-[18px] text-white/95 leading-[1.75] mb-8 font-normal">${ssrInterpolate(unref(activeDining).subDescription)}</p><div class="flex items-center justify-between pt-2"><button type="button" class="px-7 sm:px-8 py-2.5 sm:py-3 border border-white/80 hover:border-white text-white rounded-[14px] text-sm sm:text-[15px] font-opensans font-normal tracking-normal bg-transparent hover:bg-white/10 transition-all active:scale-95 cursor-pointer"> View More </button><div class="flex flex-col items-center gap-2 text-white"><button type="button" class="hover:opacity-75 transition-opacity cursor-pointer p-1 active:scale-90" aria-label="Next dining experience">`);
      _push(ssrRenderComponent(IconArrowLongRight, { "class-name": "w-5 h-3.5 text-white" }, null, _parent));
      _push(`</button><button type="button" class="hover:opacity-75 transition-opacity cursor-pointer p-1 active:scale-90" aria-label="Previous dining experience">`);
      _push(ssrRenderComponent(IconArrowLongLeft, { "class-name": "w-5 h-3.5 text-white" }, null, _parent));
      _push(`</button></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/home/DiningSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DiningSection = Object.assign(_sfc_main$5, { __name: "SectionHomeDiningSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PackageCard",
  __ssrInlineRender: true,
  props: {
    pkg: {},
    currentIndex: {},
    totalCount: {}
  },
  emits: ["book", "detail", "prev", "next", "select"],
  setup(__props, { emit: __emit }) {
    const formatPrice = (val) => {
      return "Rp " + val.toLocaleString("id-ID");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconRibbonBadge = resolveComponent("IconRibbonBadge");
      const _component_IconStar = resolveComponent("IconStar");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white rounded-[20px] shadow-xs p-6 sm:p-8 lg:px-11 lg:py-5 lg:h-[512px] lg:min-h-[512px] overflow-hidden transition-all duration-300" }, _attrs))}><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch h-full relative z-10"><div class="lg:col-span-4 flex flex-col justify-between h-full"><div><span class="font-urbanist text-xs sm:text-[16px] font-semibold text-[#717680] tracking-wider">${ssrInterpolate(String(__props.currentIndex + 1).padStart(2, "0"))} — ${ssrInterpolate(String(__props.totalCount).padStart(2, "0"))}</span></div><div class="flex flex-col gap-1.5 sm:gap-2"><span class="font-urbanist text-[16px] text-[#717680] font-semibold block"> Category </span><h3 class="font-spartan text-2xl sm:text-3xl lg:text-[38px] font-normal text-[#1f1a16] tracking-tight leading-tight">${ssrInterpolate(__props.pkg.category || __props.pkg.title)}</h3></div><div class="flex items-start justify-between gap-3 font-urbanist"><div class="shrink-0 flex flex-col gap-1.5 sm:gap-2"><span class="font-urbanist text-[16px] text-[#717680] font-semibold block">Price Form</span><div class="flex items-baseline gap-1"><span class="font-spartan text-base sm:text-[24px] font-normal text-[#000000] whitespace-nowrap">${ssrInterpolate(formatPrice(__props.pkg.price))}</span><span class="font-urbanist text-[16px] text-[#000000] font-normal whitespace-nowrap">/${ssrInterpolate(__props.pkg.priceUnit || "2 Person")}</span></div></div><div class="flex flex-col gap-1.5 sm:gap-2"><span class="font-urbanist text-[16px] text-[#717680] font-semibold block">Best Season</span><span class="font-spartan text-xs sm:text-[24px] font-normal text-[#000000] block whitespace-nowrap">${ssrInterpolate(__props.pkg.bestSeason || "10 - 13 Apr")}</span></div><div class="flex flex-col gap-1.5 sm:gap-2"><span class="font-urbanist text-[16px] text-[#717680] font-semibold block">Duration</span><span class="font-spartan text-xs sm:text-[24px] font-normal text-[#000000] block whitespace-nowrap">${ssrInterpolate(__props.pkg.duration || "3 Days")}</span></div></div><div><div class="inline-flex items-center gap-1.5 p-1 bg-[#E5E7EB] rounded-full"><!--[-->`);
      ssrRenderList(__props.totalCount, (idx) => {
        _push(`<button type="button" class="${ssrRenderClass([idx - 1 === __props.currentIndex ? "w-9 bg-[#977E5B]" : "w-3 bg-white hover:bg-white/80", "transition-all duration-300 rounded-full cursor-pointer h-3"])}"${ssrRenderAttr("aria-label", `Go to package ${idx}`)}></button>`);
      });
      _push(`<!--]--></div></div></div><div class="lg:col-span-4 flex items-center justify-center relative min-h-[360px] sm:min-h-[420px] lg:min-h-[472px]"><div class="absolute inset-0 flex items-center justify-center pointer-events-none -z-0"><div class="w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] rounded-full border border-dashed border-[#e6ddd2] opacity-75"></div><div class="w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[580px] lg:h-[580px] rounded-full border border-dashed border-[#ebdcc9] opacity-45"></div></div><div class="relative z-10 w-full max-w-[324px] h-[360px] sm:h-[420px] lg:h-[472px] rounded-[16px] overflow-hidden shadow-xs group bg-[#FFF9EB]"><img${ssrRenderAttr("src", __props.pkg.image)}${ssrRenderAttr("alt", __props.pkg.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy"></div></div><div class="lg:col-span-4 flex flex-col justify-between h-full"><div class="flex items-center gap-3 font-urbanist"><div class="relative inline-flex items-center h-[34px] select-none shrink-0 drop-shadow-[2px_1.6px_1px_rgba(28,110,164,0.2)]">`);
      _push(ssrRenderComponent(_component_IconRibbonBadge, null, null, _parent));
      _push(`<div class="absolute inset-0 flex items-center pl-2.5 pr-3 gap-1 text-white">`);
      _push(ssrRenderComponent(_component_IconStar, null, null, _parent));
      _push(`<div class="flex items-baseline font-hanken"><span class="text-[18px] font-bold leading-none tracking-tight">${ssrInterpolate(__props.pkg.rating)}</span><span class="text-[14px] font-normal text-white/95 leading-none">${ssrInterpolate(__props.pkg.ratingScale || "/10")}</span></div></div></div><span class="font-urbanist text-xs sm:text-[18px] text-[#717680] font-normal underline decoration-[#717680]/60 underline-offset-2"> (Based on ${ssrInterpolate(__props.pkg.reviewCount)} Review) </span></div><div><p class="font-urbanist text-[15px] sm:text-[20px] text-[#717680] leading-[1.65] font-normal">${ssrInterpolate(__props.pkg.description)}</p></div><div class="flex flex-wrap gap-2.5 font-urbanist"><!--[-->`);
      ssrRenderList(__props.pkg.tags || ["Beachfront Villa", "Ocean View", "Private Terrace", "Infinity Pool", "Resort Facilities"], (tag) => {
        _push(`<span class="font-urbanist h-[36px] inline-flex items-center justify-center px-4 py-2 rounded-[12px] bg-[#FAFAFA] shadow-button-outlined-default text-[13px] sm:text-[14px] text-[#8F7553] font-normal hover:opacity-90 transition-colors cursor-default">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div><div class="flex items-center justify-between font-urbanist"><div class="flex items-center gap-2 sm:gap-2.5"><button type="button" class="font-urbanist px-3.5 sm:px-4 py-2 rounded-[12px] btn-detail-outlined text-[13px] sm:text-[14px] font-normal text-[#8F7553] hover:opacity-95 active:translate-y-[1px] transition-all cursor-pointer"> See Detail </button><button type="button" class="font-urbanist px-3.5 sm:px-4 py-2 rounded-[12px] btn-book-solid text-[13px] sm:text-[14px] font-normal text-white hover:opacity-95 active:translate-y-[1px] transition-all cursor-pointer"> Book Package </button></div><div class="flex items-center gap-4 text-[#717680]"><button type="button" class="hover:text-black transition-colors cursor-pointer p-1" aria-label="Previous Package">`);
      _push(ssrRenderComponent(unref(ArrowLeft), { class: "w-5 h-5 text-[#717680] stroke-[1.75]" }, null, _parent));
      _push(`</button><button type="button" class="hover:text-black transition-colors cursor-pointer p-1" aria-label="Next Package">`);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "w-5 h-5 text-[#1f1a16] stroke-[1.75]" }, null, _parent));
      _push(`</button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/PackageCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PackageCard = Object.assign(_sfc_main$4, { __name: "CardPackageCard" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PackageSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useResortStore();
    const currentPackageIndex = ref(0);
    const packages = computed(() => store.resortData?.packages || []);
    const activePackage = computed(() => packages.value[currentPackageIndex.value] || null);
    const prevPackage = () => {
      if (currentPackageIndex.value > 0) {
        currentPackageIndex.value--;
      } else {
        currentPackageIndex.value = Math.max(0, packages.value.length - 1);
      }
    };
    const nextPackage = () => {
      if (currentPackageIndex.value < packages.value.length - 1) {
        currentPackageIndex.value++;
      } else {
        currentPackageIndex.value = 0;
      }
    };
    const selectPackage = (idx) => {
      if (idx >= 0 && idx < packages.value.length) {
        currentPackageIndex.value = idx;
      }
    };
    const handleBookPackage = (pkg) => {
      store.openBookingModal(pkg);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "package",
        class: "pt-20 lg:pt-28 pb-8 lg:pb-12 bg-[#FFF9EB]"
      }, _attrs))}><div class="w-full px-4 sm:px-8 lg:px-12 xl:px-16"><div class="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12"><div class="max-w-[833px]"><h2 class="font-spartan text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#977E5B] tracking-normal leading-tight lg:leading-[52px]">${ssrInterpolate(unref(t)("packages.title"))}</h2></div><div class="max-w-sm flex flex-col items-start lg:items-end text-left lg:text-right"><p class="font-urbanist text-xs sm:text-sm text-[#717680] leading-relaxed mb-3">${ssrInterpolate(unref(t)("packages.description"))}</p><a href="#package" class="font-urbanist text-xs sm:text-sm font-bold text-[#090C10] hover:text-[#8a7058] transition-colors">${ssrInterpolate(unref(t)("packages.allPackages"))}</a></div></div>`);
      if (unref(activePackage)) {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(PackageCard, {
          pkg: unref(activePackage),
          "current-index": unref(currentPackageIndex),
          "total-count": unref(packages).length,
          onBook: handleBookPackage,
          onDetail: handleBookPackage,
          onPrev: prevPackage,
          onNext: nextPackage,
          onSelect: selectPackage
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/home/PackageSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PackageSection = Object.assign(_sfc_main$3, { __name: "SectionHomePackageSection" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NewsCard",
  __ssrInlineRender: true,
  props: {
    news: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[22px] overflow-hidden border border-[#E9EAEB]/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 group flex flex-col h-[560px] w-full" }, _attrs))}><div class="relative h-[270px] sm:h-[280px] w-full shrink-0 overflow-hidden bg-gray-100"><img${ssrRenderAttr("src", __props.news.image)}${ssrRenderAttr("alt", __props.news.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" loading="lazy"></div><div class="p-6 flex flex-col flex-grow justify-between"><div><div class="flex items-center gap-1.5 font-urbanist text-xs text-[#717680] mb-2.5">`);
      _push(ssrRenderComponent(unref(Calendar), { class: "w-3.5 h-3.5 text-[#717680] shrink-0" }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.news.date)}</span></div><h3 class="font-spartan text-[17px] sm:text-[24px] font-semibold text-[#090C10] group-hover:text-[#977E5B] transition-colors line-clamp-2 leading-snug mb-2.5">${ssrInterpolate(__props.news.title)}</h3><p class="font-urbanist text-xs sm:text-[18px] text-[#717680] line-clamp-2 leading-relaxed mb-6">${ssrInterpolate(__props.news.excerpt)}</p></div><div class="flex items-center gap-3 pt-2">`);
      if (__props.news.author?.avatar) {
        _push(`<img${ssrRenderAttr("src", __props.news.author.avatar)}${ssrRenderAttr("alt", __props.news.author.name)} class="w-9 h-9 rounded-full object-cover shrink-0">`);
      } else {
        _push(`<div class="w-9 h-9 rounded-full bg-[#0092B3] text-white flex items-center justify-center font-bold text-xs shrink-0 tracking-wider">${ssrInterpolate(__props.news.author?.initials || "PM")}</div>`);
      }
      _push(`<div class="flex flex-col"><span class="font-urbanist font-normal text-xs sm:text-[14px] text-[#090C10] leading-tight">${ssrInterpolate(__props.news.author?.name || "Jenny Wilson")}</span><span class="font-urbanist text-[11px] sm:text-xs text-[#717680] leading-tight mt-0.5">${ssrInterpolate(__props.news.author?.role || "Web Designer")}</span></div></div></div></article>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/NewsCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NewsCard = Object.assign(_sfc_main$2, { __name: "CardNewsCard" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NewsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useResortStore();
    const newsArticles = computed(() => store.resortData?.news || []);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "blog",
        class: "pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 bg-[#FFF9EB]"
      }, _attrs))}><div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"><div class="text-center max-w-2xl mx-auto mb-12 sm:mb-14"><h2 class="font-spartan text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#977E5B] tracking-normal leading-tight">${ssrInterpolate(unref(t)("news.title"))}</h2><p class="font-urbanist text-xs sm:text-sm md:text-[20px] text-[#717680] leading-relaxed mt-3.5">${ssrInterpolate(unref(t)("news.description"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"><!--[-->`);
      ssrRenderList(unref(newsArticles), (article) => {
        _push(ssrRenderComponent(NewsCard, {
          key: article.id,
          news: article
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-end gap-6 sm:gap-8"><div class="w-44 sm:w-56 h-[2px] bg-[#D5D7DA] rounded-full overflow-hidden flex"><div class="w-1/2 h-full bg-[#977E5B] rounded-full"></div></div><a href="#blog" class="font-urbanist text-xs sm:text-sm font-semibold text-[#977E5B] hover:text-[#7A6042] flex items-center gap-1.5 transition-colors group cursor-pointer"><span>${ssrInterpolate(unref(t)("news.discoverMore"))}</span>`);
      _push(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 group-hover:translate-x-1 transition-transform" }, null, _parent));
      _push(`</a></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/home/NewsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NewsSection = Object.assign(_sfc_main$1, { __name: "SectionHomeNewsSection" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useResortStore();
    const { t } = useI18n();
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("resort-data-v2", async () => {
      await store.fetchResortData(true);
      return store.resortData;
    })), await __temp, __restore();
    useSeoMeta({
      title: "Mega Resort Karimunjawa - A Hidden Paradise in Java Sea",
      description: "Experience pure luxury in Karimunjawa with overwater villas, crystal clear waters, private boat excursions, and authentic coastal gastronomy.",
      ogTitle: "Mega Resort Karimunjawa - Luxury Island Getaway",
      ogDescription: "Experience pure luxury in Karimunjawa with overwater villas, crystal clear waters, private boat excursions, and authentic coastal gastronomy.",
      ogImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(HeroSection, { "bg-position": "object-[center_20%]" }, null, _parent));
      _push(ssrRenderComponent(AboutSection, null, null, _parent));
      _push(ssrRenderComponent(FeatureVideoSection, null, null, _parent));
      _push(ssrRenderComponent(GallerySection, null, null, _parent));
      _push(ssrRenderComponent(VillaTourSection, null, null, _parent));
      _push(ssrRenderComponent(DiningSection, null, null, _parent));
      _push(ssrRenderComponent(PackageSection, null, null, _parent));
      _push(ssrRenderComponent(NewsSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-g9bDoi2i.mjs.map
