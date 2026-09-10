import { defineComponent, mergeProps, ref, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, resolveComponent, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-BvzvZodX.mjs';
import { u as useResortStore } from './resortStore-B33Vif7n.mjs';
import { Menu, X, Phone, Mail, Instagram, MapPin, CheckCircle2, User, Calendar } from 'lucide-vue-next';
import { a as useI18n, f as useLocalePath, g as useRoute } from './server.mjs';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ResortLogo",
  __ssrInlineRender: true,
  props: {
    variant: { default: "light" },
    size: { default: "md" },
    alt: { default: "Mega Resort Karimunjawa Logo" }
  },
  setup(__props) {
    const props = __props;
    const logoSrc = computed(() => {
      if (props.variant === "color") {
        return "/logo/logo-megaresort-color.svg";
      }
      return "/logo/logo-megaresort.svg";
    });
    const sizeClasses = computed(() => {
      switch (props.size) {
        case "sm":
          return "h-10 sm:h-11 w-auto";
        case "lg":
          return "h-18 sm:h-20 w-auto";
        case "xl":
          return "h-22 sm:h-24 w-auto";
        case "md":
        default:
          return "h-14 sm:h-[62px] w-auto";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center select-none cursor-pointer group transition-transform duration-300 hover:scale-105" }, _attrs))}><img${ssrRenderAttr("src", unref(logoSrc))}${ssrRenderAttr("alt", __props.alt)} class="${ssrRenderClass([
        unref(sizeClasses),
        __props.variant === "dark" ? "invert brightness-0" : ""
      ])}" loading="eager"></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/ResortLogo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ResortLogo = Object.assign(_sfc_main$5, { __name: "CommonResortLogo" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localePath = useLocalePath();
    const route = useRoute();
    useResortStore();
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);
    const isRoomsPage = computed(() => {
      return route.path.includes("/rooms");
    });
    const activeRoute = computed(() => {
      if (isRoomsPage.value) return "Rooms";
      return "Home";
    });
    const navLinks = computed(() => [
      { name: t("nav.home"), key: "Home", href: localePath("/") },
      { name: t("nav.rooms"), key: "Rooms", href: localePath("/rooms") },
      { name: t("nav.facility"), key: "Facility", href: localePath("/") + "#about" },
      { name: t("nav.gallery"), key: "Gallery", href: localePath("/") + "#gallery" },
      { name: t("nav.package"), key: "Package", href: localePath("/") + "#package" },
      { name: t("nav.discover"), key: "Discover", href: localePath("/") + "#about" },
      { name: t("nav.blog"), key: "Blog", href: localePath("/") + "#blog" },
      { name: t("nav.contactUs"), key: "Contact Us", href: "#contact" },
      { name: t("nav.faq"), key: "FAQ", href: "#faq" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 right-0 z-40 transition-all duration-300 select-none px-5 sm:px-6 md:px-7", [
          unref(isScrolled) ? "glass-nav py-3.5 shadow-xl border-b border-white/10" : "bg-transparent py-5 sm:py-6"
        ]]
      }, _attrs))}><div class="w-full"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ResortLogo, {
              variant: "light",
              layout: "stacked",
              size: "md"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ResortLogo, {
                variant: "light",
                layout: "stacked",
                size: "md"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center gap-6 xl:gap-8"><!--[-->`);
      ssrRenderList(unref(navLinks), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.key,
          to: link.href,
          class: ["text-[16px] tracking-wide transition-all relative py-1 font-opensans", [
            unref(activeRoute) === link.key ? "text-white after:content-[''] after:absolute after:-bottom-1.5 after:-left-2.5 after:-right-2.5 after:h-[1.5px] after:bg-white" : "text-white/85 hover:text-white"
          ]],
          style: { "font-family": "'Open Sans', sans-serif" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="hidden lg:flex items-center"><button type="button" class="h-[48px] px-5 flex items-center justify-center bg-[#977E5B] hover:bg-[#856c4c] active:scale-95 text-white font-opensans text-[16px] font-normal rounded-[16px] tracking-normal transition-all duration-300 cursor-pointer">${ssrInterpolate(unref(t)("nav.reserveNow"))}</button></div><div class="flex items-center lg:hidden"><button type="button" class="p-2 text-white hover:text-[#b98e46] transition-colors" aria-label="Toggle menu">`);
      if (!unref(isMobileMenuOpen)) {
        _push(ssrRenderComponent(unref(Menu), { class: "w-6 h-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
      }
      _push(`</button></div></div></div>`);
      if (unref(isMobileMenuOpen)) {
        _push(`<div class="lg:hidden glass-nav border-t border-white/10 px-6 py-6 mt-3 space-y-4"><div class="flex flex-col space-y-3"><!--[-->`);
        ssrRenderList(unref(navLinks), (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.key,
            to: link.href,
            class: ["text-sm font-medium transition-colors py-1 flex items-center justify-between", [
              unref(activeRoute) === link.key ? "text-[#b98e46] font-semibold pl-2 border-l-2 border-[#b98e46]" : "text-white/90 hover:text-white"
            ]],
            onClick: ($event) => isMobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(link.name)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div><div class="pt-4 border-t border-white/10"><button type="button" class="w-full h-[48px] flex items-center justify-center bg-[#977E5B] hover:bg-[#856c4c] text-white font-opensans text-[16px] font-normal rounded-[16px] tracking-normal transition-all text-center">${ssrInterpolate(unref(t)("nav.reserveNow"))}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/AppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AppHeader = Object.assign(_sfc_main$4, { __name: "NavigationAppHeader" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    (/* @__PURE__ */ new Date()).getFullYear();
    const localePath = useLocalePath();
    const siteMapLinks = computed(() => [
      { name: "Home", href: localePath("/") },
      { name: "Rooms", href: localePath("/rooms") },
      { name: "Facility", href: localePath("/") + "#about" },
      { name: "Gallary", href: localePath("/") + "#gallery" },
      { name: "Package", href: localePath("/") + "#package" },
      { name: "Discover", href: localePath("/") + "#about" },
      { name: "Blog", href: localePath("/") + "#blog" },
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#faq" }
    ]);
    const aboutUsLinks = computed(() => [
      { name: "Overview", href: localePath("/") + "#about" },
      { name: "Journey Mega Resort", href: localePath("/") + "#about" },
      { name: "Find Mega resort", href: localePath("/") + "#contact" },
      { name: "Why Choose Us", href: localePath("/") + "#about" }
    ]);
    const roomsLinks = computed(() => [
      { name: "Mermaid Rooms", href: localePath("/rooms") },
      { name: "Cemara Rooms", href: localePath("/rooms") },
      { name: "Mahi - Mahi Rooms", href: localePath("/rooms") },
      { name: "Nemo Rooms", href: localePath("/rooms") }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconTiktok = resolveComponent("IconTiktok");
      const _component_IconStarSolid = resolveComponent("IconStarSolid");
      const _component_IconAwardShield = resolveComponent("IconAwardShield");
      const _component_IconTreeLeaf = resolveComponent("IconTreeLeaf");
      _push(`<footer${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "bg-[#F5F5F5] text-[#4A4A4A] pt-14 pb-10 border-t border-[#E5E5E5] font-sans"
      }, _attrs))}><div class="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12"><div class="lg:col-span-4 space-y-4 pr-0 lg:pr-4">`);
      _push(ssrRenderComponent(ResortLogo, {
        variant: "color",
        size: "lg"
      }, null, _parent));
      _push(`<p class="text-xs sm:text-[14px] text-[#717680] leading-relaxed max-w-sm pt-1"> More than just a place to stay, Mega Resort Karimunjawa is a destination where nature, comfort, and serenity meet. Surrounded by the beauty of Karimunjawa&#39;s islands, every moment is designed to let you slow down, breathe deeper, and enjoy an authentic tropical escape from sunrise to sunset. </p><div class="pt-2"><a href="#about" class="inline-block px-5 py-2.5 text-xs sm:text-[13px] font-normal text-white bg-[#977E5B] hover:bg-[#785f40] rounded-lg transition-colors shadow-xs"> See more about us </a></div></div><div class="lg:col-span-2 space-y-3"><h4 class="font-bold text-sm sm:text-[18px] text-[#1C1C1C]"> Site Map </h4><ul class="space-y-2.5 text-xs sm:text-[13px] text-[#666666]"><!--[-->`);
      ssrRenderList(unref(siteMapLinks), (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.href)} class="hover:text-[#8C704E] transition-colors">${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="lg:col-span-2 space-y-3"><h4 class="font-bold text-sm sm:text-[18px] text-[#1C1C1C]"> About Us </h4><ul class="space-y-2.5 text-xs sm:text-[13px] text-[#666666]"><!--[-->`);
      ssrRenderList(unref(aboutUsLinks), (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.href)} class="hover:text-[#8C704E] transition-colors">${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="lg:col-span-2 space-y-3"><h4 class="font-bold text-sm sm:text-[18px] text-[#1C1C1C]"> Rooms </h4><ul class="space-y-2.5 text-xs sm:text-[13px] text-[#666666]"><!--[-->`);
      ssrRenderList(unref(roomsLinks), (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.href)} class="hover:text-[#8C704E] transition-colors">${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="lg:col-span-2 space-y-3"><h4 class="font-bold text-sm sm:text-[18px] text-[#1C1C1C]"> Contact Us </h4><ul class="space-y-3 text-xs sm:text-[13px] text-[#666666]"><li class="flex items-center gap-2.5">`);
      _push(ssrRenderComponent(unref(Phone), { class: "w-4 h-4 text-[#737373] shrink-0" }, null, _parent));
      _push(`<span>08xx - xxxx - xxxx</span></li><li class="flex items-start gap-2.5">`);
      _push(ssrRenderComponent(unref(Mail), { class: "w-4 h-4 text-[#737373] shrink-0 mt-0.5" }, null, _parent));
      _push(`<span class="break-all">Megaresortkarimunjawa@gmail.com</span></li><li class="flex items-center gap-2.5">`);
      _push(ssrRenderComponent(unref(Instagram), { class: "w-4 h-4 text-[#737373] shrink-0" }, null, _parent));
      _push(`<a href="https://instagram.com/Megaresortkarimunjawa" target="_blank" class="hover:text-[#8C704E] transition-colors"> @Megaresortkarimunjawa </a></li><li class="flex items-center gap-2.5">`);
      _push(ssrRenderComponent(_component_IconTiktok, { "class-name": "w-4 h-4 text-[#737373] shrink-0 fill-current" }, null, _parent));
      _push(`<a href="https://tiktok.com/@Mega.resort.karim" target="_blank" class="hover:text-[#8C704E] transition-colors"> @Mega.resort.karim </a></li><li class="flex items-start gap-2.5">`);
      _push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-[#737373] shrink-0 mt-0.5" }, null, _parent));
      _push(`<span class="leading-relaxed">Jl. Sentyaki Raya No.7, Bulu Lor, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50179</span></li></ul></div></div><div class="border-t border-[#E5E5E5] pt-8 pb-6 text-center"><h5 class="font-bold text-[#8C704E] text-sm sm:text-base mb-5 tracking-wide"> Award &amp; Recognitions </h5><div class="flex flex-wrap items-center justify-center gap-3 sm:gap-5"><div class="flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-[#FFFEEB] text-[#FA9D33] text-xs sm:text-[14px] font-medium">`);
      _push(ssrRenderComponent(_component_IconStarSolid, { "class-name": "w-4 h-4 fill-[#FA9D33]" }, null, _parent));
      _push(`<span>TripAdvisor</span></div><div class="flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-[#FFFEEB] text-[#FA9D33] text-xs sm:text-[14px] font-medium">`);
      _push(ssrRenderComponent(_component_IconAwardShield, { "class-name": "w-4 h-4 fill-[#FA9D33]" }, null, _parent));
      _push(`<span>Luxury Awards</span></div><div class="flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-[#FFFEEB] text-[#FA9D33] text-xs sm:text-[14px] font-medium">`);
      _push(ssrRenderComponent(_component_IconTreeLeaf, { "class-name": "w-4 h-4 fill-[#FA9D33]" }, null, _parent));
      _push(`<span>Green Certified</span></div></div></div><div class="border-t border-[#E5E5E5] pt-6 text-center text-xs sm:text-[13px] text-[#888888]"><p>© 2025, All Rights Reserved</p></div></div></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AppFooter = Object.assign(_sfc_main$3, { __name: "NavigationAppFooter" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BookingModal",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const store = useResortStore();
    const isSubmitted = ref(false);
    const formData = reactive({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "2",
      notes: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(store).isBookingModalOpen) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"><div class="relative w-full max-w-lg bg-[#faf7f2] rounded-lg shadow-2xl border border-[#cfaa83]/40 overflow-hidden"><div class="bg-[#1b1713] text-white p-6 relative"><button class="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer">`);
          _push2(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
          _push2(`</button><span class="text-xs uppercase tracking-[0.2em] text-[#b98e46] font-semibold"> Mega Resort Karimunjawa </span><h3 class="font-luxury text-2xl mt-1 font-semibold">${ssrInterpolate(unref(t)("bookingModal.title"))}</h3><p class="text-xs text-white/70 mt-1">${ssrInterpolate(unref(t)("bookingModal.subtitle"))}</p></div><div class="p-6 max-h-[80vh] overflow-y-auto">`);
          if (unref(store).selectedPackage || unref(store).selectedVilla || unref(store).selectedRoom) {
            _push2(`<div class="mb-4 p-3 bg-[#f1e4cb]/40 border border-[#b98e46]/30 rounded text-xs text-[#573b24]"><span class="font-semibold">Selected:</span> ${ssrInterpolate(unref(store).selectedPackage?.title || unref(store).selectedRoom?.fullName || unref(store).selectedRoom?.name || unref(store).selectedVilla?.name)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          if (unref(isSubmitted)) {
            _push2(`<div class="py-8 text-center space-y-3">`);
            _push2(ssrRenderComponent(unref(CheckCircle2), { class: "w-16 h-16 text-emerald-600 mx-auto animate-bounce" }, null, _parent));
            _push2(`<h4 class="font-luxury text-xl font-bold text-[#1b1713]"> Reservation Request Sent! </h4><p class="text-sm text-[#715e4a]">${ssrInterpolate(unref(t)("bookingModal.success"))}</p><div class="pt-4"><button type="button" class="px-6 py-2 bg-[#b98e46] text-white rounded text-sm hover:bg-[#a37936] transition-colors"> Close </button></div></div>`);
          } else {
            _push2(`<form class="space-y-4"><div><label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">${ssrInterpolate(unref(t)("bookingModal.name"))} * </label><div class="relative">`);
            _push2(ssrRenderComponent(unref(User), { class: "w-4 h-4 text-gray-400 absolute left-3 top-3" }, null, _parent));
            _push2(`<input${ssrRenderAttr("value", unref(formData).name)} required type="text" placeholder="e.g. Shasa Putri" class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">${ssrInterpolate(unref(t)("bookingModal.email"))} * </label><div class="relative">`);
            _push2(ssrRenderComponent(unref(Mail), { class: "w-4 h-4 text-gray-400 absolute left-3 top-3" }, null, _parent));
            _push2(`<input${ssrRenderAttr("value", unref(formData).email)} required type="email" placeholder="name@email.com" class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"></div></div><div><label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">${ssrInterpolate(unref(t)("bookingModal.phone"))} * </label><div class="relative">`);
            _push2(ssrRenderComponent(unref(Phone), { class: "w-4 h-4 text-gray-400 absolute left-3 top-3" }, null, _parent));
            _push2(`<input${ssrRenderAttr("value", unref(formData).phone)} required type="tel" placeholder="+62 812..." class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"></div></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">${ssrInterpolate(unref(t)("bookingModal.checkIn"))}</label><div class="relative">`);
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-gray-400 absolute left-3 top-3" }, null, _parent));
            _push2(`<input${ssrRenderAttr("value", unref(formData).checkIn)} type="date" class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"></div></div><div><label class="block text-xs font-semibold uppercase tracking-wider text-[#594939] mb-1">${ssrInterpolate(unref(t)("bookingModal.checkOut"))}</label><div class="relative">`);
            _push2(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-gray-400 absolute left-3 top-3" }, null, _parent));
            _push2(`<input${ssrRenderAttr("value", unref(formData).checkOut)} type="date" class="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#dec4a6] rounded focus:outline-none focus:border-[#b98e46]"></div></div></div><button type="submit" class="w-full mt-2 py-3 bg-[#b98e46] hover:bg-[#9e7336] text-white font-medium text-sm rounded uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">${ssrInterpolate(unref(t)("bookingModal.submit"))}</button></form>`);
          }
          _push2(`</div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/BookingModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BookingModal = Object.assign(_sfc_main$2, { __name: "CommonBookingModal" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VideoModal",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useResortStore();
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(store).isVideoModalOpen) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"><div class="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/20"><button class="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/50 rounded-full transition-colors cursor-pointer">`);
          _push2(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
          _push2(`</button><iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1" title="Mega Resort Karimunjawa Video" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/VideoModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const VideoModal = Object.assign(_sfc_main$1, { __name: "CommonVideoModal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-[#faf7f2] font-sans antialiased text-[#29241f]" }, _attrs))}>`);
      _push(ssrRenderComponent(AppHeader, null, null, _parent));
      _push(`<main class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(ssrRenderComponent(BookingModal, null, null, _parent));
      _push(ssrRenderComponent(VideoModal, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BCg1CoS9.mjs.map
