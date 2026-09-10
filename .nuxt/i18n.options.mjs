
// @ts-nocheck


export const localeCodes =  [
  "en",
  "id"
]

export const localeLoaders = {
  en: [
    {
      key: "locale_en_46json_69b9988f",
      load: () => import("#nuxt-i18n/69b9988f" /* webpackChunkName: "locale_en_46json_69b9988f" */),
      cache: true
    }
  ],
  id: [
    {
      key: "locale_id_46json_c1537a5f",
      load: () => import("#nuxt-i18n/c1537a5f" /* webpackChunkName: "locale_id_46json_c1537a5f" */),
      cache: true
    }
  ]
}

export const vueI18nConfigs = []

export const nuxtI18nOptions = {
  restructureDir: "i18n",
  experimental: {
    localeDetector: "",
    switchLocalePathLinkSSR: false,
    autoImportTranslationFunctions: false,
    typedPages: true,
    typedOptionsAndMessages: false,
    generatedLocaleFilePathFormat: "absolute",
    alternateLinkCanonicalQueries: false,
    hmr: true
  },
  bundle: {
    compositionOnly: true,
    runtimeOnly: false,
    fullInstall: true,
    dropMessageCompiler: false,
    optimizeTranslationDirective: false
  },
  compilation: {
    strictMessage: true,
    escapeHtml: false
  },
  customBlocks: {
    defaultSFCLang: "json",
    globalSFCScope: false
  },
  locales: [
    {
      code: "en",
      language: "en-US",
      name: "English",
      files: [
        {
          path: "C:/Project shasa/magang can creative/nuxt-boilerplate/web-mega-resort/i18n/locales/en.json",
          cache: undefined
        }
      ]
    },
    {
      code: "id",
      language: "id-ID",
      name: "Indonesia",
      files: [
        {
          path: "C:/Project shasa/magang can creative/nuxt-boilerplate/web-mega-resort/i18n/locales/id.json",
          cache: undefined
        }
      ]
    }
  ],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  trailingSlash: false,
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "locales",
  rootRedirect: undefined,
  detectBrowserLanguage: {
    alwaysRedirect: false,
    cookieCrossOrigin: false,
    cookieDomain: null,
    cookieKey: "i18n_redirected",
    cookieSecure: false,
    fallbackLocale: "",
    redirectOn: "root",
    useCookie: true
  },
  differentDomains: false,
  baseUrl: "",
  customRoutes: "page",
  pages: {},
  skipSettingLocaleOnNavigate: false,
  types: "composition",
  debug: false,
  parallelPlugin: false,
  multiDomainLocales: false,
  i18nModules: []
}

export const normalizedLocales = [
  {
    code: "en",
    language: "en-US",
    name: "English",
    files: [
      {
        path: "C:/Project shasa/magang can creative/nuxt-boilerplate/web-mega-resort/i18n/locales/en.json",
        cache: undefined
      }
    ]
  },
  {
    code: "id",
    language: "id-ID",
    name: "Indonesia",
    files: [
      {
        path: "C:/Project shasa/magang can creative/nuxt-boilerplate/web-mega-resort/i18n/locales/id.json",
        cache: undefined
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
export const hasPages = true

export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
/** client **/

/** client-end **/