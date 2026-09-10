# Nuxt 4 Frontend Boilerplate

Referensi struktur untuk proyek website marketing, hospitality, atau company profile. Struktur ini diambil dari pola Deepsky Villa, tanpa membawa source code, aset, konten, URL backend, atau credential proyek asal.

## Stack yang disarankan

- Nuxt 4 dengan `srcDir: "app"`
- Vue 3, Composition API, dan `<script setup lang="ts">`
- TypeScript strict mode
- Tailwind CSS v4
- Pinia untuk state lintas halaman/komponen
- Axios untuk HTTP client
- `@nuxtjs/i18n` untuk bahasa `en` dan `id`
- `@nuxt/image` serta `@nuxt/fonts`
- Nitro server route sebagai proxy API
- Bun untuk package management dan script

Tambahkan library tambahan—seperti carousel, lightbox, toast, atau date picker—hanya saat fitur membutuhkannya.

## Struktur folder

```text
.
├── app/
│   ├── assets/css/              # Tailwind, token desain, CSS global
│   ├── components/
│   │   ├── card/                # Card/item presentasional berulang
│   │   ├── common/              # UI reusable lintas domain
│   │   ├── navigation/          # Navbar, footer, drawer
│   │   └── section/             # Section besar per halaman
│   ├── composables/             # Logic Vue yang reusable
│   ├── layouts/                 # Shell halaman
│   ├── middleware/              # Route guard atau status situs
│   ├── pages/                   # File-based routing Nuxt
│   ├── plugins/                 # Plugin client/server
│   ├── services/
│   │   └── features/            # API service per domain
│   ├── stores/                  # Pinia stores
│   ├── types/                   # Entity domain dan API response
│   └── utils/                   # Formatter dan helper murni
├── i18n/locales/                # File translation en.json dan id.json
├── public/
│   ├── fonts/                   # Font publik berlisensi
│   └── images/                  # Asset dengan URL stabil
└── server/
    ├── api/
    │   └── media/               # Opsional: proxy media upstream
    └── routes/                  # robots.txt dan sitemap.xml
```

## Tanggung jawab layer

| Layer | Fungsi |
| --- | --- |
| `pages` | Menyusun section, kebutuhan route, data awal, dan SEO. |
| `components/section` | Container untuk satu blok UI halaman. |
| `components/card` | Tampilan item berulang dari props; tidak fetch data. |
| `components/common` | Komponen UI yang dipakai lintas domain. |
| `services` | Akses HTTP dan endpoint API. |
| `stores` | State, loading, error, dan action Pinia. |
| `types` | Kontrak entity, payload, dan response API. |
| `utils` | Fungsi murni, formatter, dan transformasi data. |
| `server/api` | Proxy server-side agar URL upstream dan secret tetap privat. |

## Alur data

```text
Upstream API → Nitro proxy → feature service → Pinia store → page/section → card/common component
```

Jangan panggil Axios atau URL backend langsung dari page, section, maupun card.

## Kebutuhan konfigurasi saat mulai implementasi

1. Buat `package.json`, `nuxt.config.ts`, dan `tsconfig.json`.
2. Aktifkan Tailwind, Pinia, i18n, Nuxt Image, Nuxt Fonts, serta VueUse pada Nuxt config.
3. Tambahkan `.env.example` tanpa nilai secret:

   ```dotenv
   NUXT_APP_API_URL=https://api.example.com/api
   NUXT_APP_API_KEY=
   NUXT_APP_API_TOKEN=
   NUXT_PUBLIC_API_BASE=/api
   NUXT_PUBLIC_SITE_URL=http://localhost:3000
   NUXT_PUBLIC_LINK_BOOKING=
   ```

4. Gunakan locale default `en`, locale tambahan `id`, dan strategy `prefix_except_default`.
5. Buat proxy catch-all `server/api/[...path].ts` jika aplikasi memakai backend API.
6. Tambahkan `robots.txt` dan `sitemap.xml` bila halaman akan diindeks search engine.

## Checklist fitur baru

- [ ] Tentukan domain, route, dan sumber data.
- [ ] Definisikan tipe di `app/types`.
- [ ] Tambahkan endpoint dan feature service.
- [ ] Gunakan store bila ada state lintas komponen atau state loading/error.
- [ ] Pilih apakah UI merupakan page, section, card, atau common component.
- [ ] Tambahkan copy baru pada `en.json` dan `id.json`.
- [ ] Tambahkan `useSeoMeta()` pada page publik.
- [ ] Periksa loading, empty, error, dan mobile state.
- [ ] Jalankan type check dan build setelah source code mulai dibuat.

## Aturan keamanan

- Jangan commit `.env`, API key, token, maupun credential.
- Jangan menyimpan secret pada `NUXT_PUBLIC_*`, source code, atau folder `public`.
- Jangan menyalin aset berlisensi atau data brand dari proyek referensi tanpa izin.
