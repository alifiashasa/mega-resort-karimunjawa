import axios from 'axios'

export const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// Ensure SSR compatibility with relative URLs in Node.js
apiClient.interceptors.request.use((config) => {
  if (import.meta.server) {
    const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const apiBase = process.env.NUXT_PUBLIC_API_BASE || '/api'
    config.baseURL = `${siteUrl}${apiBase}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error?.message || error)
    return Promise.reject(error)
  }
)
