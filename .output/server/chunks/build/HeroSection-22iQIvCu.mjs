import { computed, toValue, getCurrentInstance, onServerPrefetch, defineComponent, mergeProps, unref, ref, shallowRef, nextTick, toRef, useSSRContext } from 'vue';
import { c as useNuxtApp, d as asyncDataDefaults, a as useI18n, e as createError } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useResortStore } from './resortStore-B33Vif7n.mjs';
import { ChevronDown } from 'lucide-vue-next';

//#region src/index.ts
const DEBOUNCE_DEFAULTS = { trailing: true };
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
console.log(await debouncedFn(number));
}
//=> 1
//=> 2
//=> 3
```
*/
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry = nuxtApp._asyncData[key.value];
      if (entry?._abortController) {
        try {
          entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  Object.defineProperties(asyncDataPromise, {
    then: { enumerable: true, value: asyncDataPromise.then.bind(asyncDataPromise) },
    catch: { enumerable: true, value: asyncDataPromise.catch.bind(asyncDataPromise) },
    finally: { enumerable: true, value: asyncDataPromise.finally.bind(asyncDataPromise) }
  });
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= asyncDataDefaults.errorValue;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer(opts.dedupe ?? options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return;
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        if (nuxtApp._asyncDataPromises[key] === promise) {
          delete nuxtApp._asyncDataPromises[key];
        }
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (nuxtApp._asyncDataPromises[key]) {
        asyncData._abortController?.abort(new DOMException("AsyncData request cancelled by unmount", "AbortError"));
        delete nuxtApp._asyncDataPromises[key];
        if (asyncData.status.value === "pending") {
          asyncData.status.value = "idle";
        }
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
            asyncData.data.value = asyncDataDefaults.value;
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => asyncDataDefaults.value;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IconLotus",
  __ssrInlineRender: true,
  props: {
    className: { default: "w-full h-full" },
    fillColor: { default: "currentColor" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "18 0 54 36",
        fill: __props.fillColor,
        xmlns: "http://www.w3.org/2000/svg",
        class: __props.className
      }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1757 10.8964C19.6344 12.3077 20.4309 21.0185 21.3803 24.0684C23.6287 31.2894 28.1107 35.0627 34.4971 35.1107C37.2733 35.1315 38.9735 34.5722 38.9735 33.6376C38.9735 32.3133 36.1713 29.2838 32.98 27.157C28.8761 24.4224 26.955 22.7242 26.955 21.8316C26.955 21.4544 27.8278 21.9536 29.0513 23.0306C30.2042 24.0452 32.8561 25.7541 34.945 26.8275C37.0334 27.9012 39.3123 29.3097 40.0089 29.9573C40.7051 30.6049 41.4271 30.9825 41.6129 30.7967C41.7987 30.6109 42.0331 28.9981 42.1343 27.2125C42.4653 21.3481 40.9112 19.5389 33.4048 17.0521C28.1925 15.3251 25.5396 14.0355 22.6265 11.8121C20.8233 10.4356 20.4119 10.2821 20.1757 10.8964Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M40.7838 0.380857C39.51 1.19446 34.9755 8.67461 33.9273 11.6919C31.4458 18.8363 32.8094 24.5341 37.918 28.3668C40.1389 30.0328 41.8388 30.593 42.394 29.8411C43.1808 28.7759 42.7266 24.6742 41.423 21.0676C39.7465 16.4299 39.2102 13.9225 39.7404 13.2045C39.9645 12.9011 40.37 13.8211 40.7143 15.4144C41.0389 16.9154 42.1568 19.8655 43.1995 21.9698C44.2415 24.0743 45.2378 26.561 45.4134 27.4958C45.5887 28.4303 45.9451 29.163 46.205 29.1239C46.4649 29.0849 47.6115 27.9268 48.7538 26.5506C52.5041 22.0299 52.3289 19.6514 47.7682 13.1915C44.6014 8.70588 43.2336 6.0925 42.2112 2.57343C41.5785 0.394881 41.3388 0.0270317 40.7838 0.380857Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M69.6393 8.41522C68.2277 7.87503 59.5172 8.67819 56.468 9.62998C49.2485 11.8839 45.4787 16.3686 45.4355 22.7549C45.4169 25.5312 45.9775 27.2308 46.9122 27.2301C48.2365 27.2291 51.2639 24.4247 53.3882 21.2317C56.1197 17.1259 57.8166 15.2035 58.7092 15.2028C59.0864 15.2025 58.5878 16.0756 57.5117 17.3C56.498 18.4536 54.7911 21.1068 53.7193 23.1965C52.6472 25.2857 51.2404 27.5656 50.5934 28.2627C49.9463 28.9593 49.5692 29.6816 49.7552 29.8673C49.9411 30.053 51.5541 30.2861 53.3398 30.3859C59.2046 30.7124 61.0127 29.1569 63.4938 21.6487C65.2167 16.4352 66.5043 13.7814 68.7255 10.8667C70.1007 9.06246 70.2538 8.65095 69.6393 8.41522Z"></path></svg>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/icons/IconLotus.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconLotus = Object.assign(_sfc_main$1, { __name: "CommonIconsIconLotus" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    id: { default: "home" },
    bgImage: { default: "/images/hero-home.jpg" },
    bgPosition: { default: "object-center" },
    badgePrefix: { default: "" },
    scriptWord: { default: "" },
    title: { default: "" },
    description: { default: "" },
    ctaText: { default: "" },
    ctaTargetId: { default: "" },
    showScrollDown: { type: Boolean, default: true },
    scrollDownTarget: { default: "#about" },
    minHeight: { default: "min-h-[620px] sm:min-h-[720px] lg:h-[820px]" },
    overlayClass: { default: "bg-black/25" }
  },
  setup(__props) {
    const { t } = useI18n();
    useResortStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: __props.id,
        class: ["relative flex items-center justify-center overflow-hidden select-none", __props.minHeight]
      }, _attrs))}><div class="absolute inset-0 z-0"><img${ssrRenderAttr("src", __props.bgImage)} alt="Mega Resort Karimunjawa" class="${ssrRenderClass([__props.bgPosition, "w-full h-full object-cover scale-100"])}"><div class="${ssrRenderClass([__props.overlayClass, "absolute inset-0"])}"></div></div><div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-14 pb-20 flex flex-col items-center"><div class="w-12 h-9 sm:w-16 sm:h-12 mb-5 sm:mb-6">`);
      _push(ssrRenderComponent(IconLotus, {
        "fill-color": "#FFFFFF",
        "class-name": "w-full h-full drop-shadow-sm"
      }, null, _parent));
      _push(`</div><div class="mb-4"><h2 class="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[0.14em] uppercase font-normal text-white leading-tight flex items-baseline justify-center flex-wrap gap-x-2 sm:gap-x-3"><span>${ssrInterpolate(__props.badgePrefix || unref(t)("hero.badge"))}</span><span class="font-script lowercase font-normal italic tracking-normal text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white/95 -ml-1">${ssrInterpolate(__props.scriptWord || unref(t)("hero.of"))}</span></h2><h1 class="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-normal tracking-[0.14em] uppercase text-white mt-1 sm:mt-2 leading-tight">${ssrInterpolate(__props.title || unref(t)("hero.title"))}</h1></div><p class="font-opensans text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-white/90 leading-relaxed font-normal max-w-4xl mx-auto mb-8 px-2">${ssrInterpolate(__props.description || unref(t)("hero.description"))}</p><div class="flex justify-center"><button type="button" class="group inline-flex items-center justify-center gap-2.5 h-[48px] px-6 min-w-[215px] rounded-[16px] border border-[#FAFAFA] bg-transparent hover:bg-white/10 text-[#FAFAFA] font-sans text-[15px] sm:text-[16px] tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer shadow-lg">`);
      _push(ssrRenderComponent(IconLotus, { "class-name": "w-6 h-[18px] sm:w-6.5 sm:h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" }, null, _parent));
      _push(`<span class="whitespace-nowrap">${ssrInterpolate(__props.ctaText || unref(t)("hero.explore"))}</span></button></div></div>`);
      if (__props.showScrollDown) {
        _push(`<a${ssrRenderAttr("href", __props.scrollDownTarget)} class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white flex flex-col items-center gap-1 transition-colors group cursor-pointer" aria-label="Scroll down to next section">`);
        _push(ssrRenderComponent(unref(ChevronDown), { class: "w-6 h-6 animate-bounce text-white/80 group-hover:text-white" }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/home/HeroSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeroSection = Object.assign(_sfc_main, { __name: "SectionHomeHeroSection" });

export { HeroSection as H, IconLotus as I, useAsyncData as u };
//# sourceMappingURL=HeroSection-22iQIvCu.mjs.map
