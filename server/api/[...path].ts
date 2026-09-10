export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const path = getRouterParam(event, 'path')

  // If upstream API URL is configured, proxy to upstream; otherwise return 404 or let internal routes handle
  if (!config.appApiUrl) {
    return {
      statusCode: 404,
      message: 'API Proxy: No upstream API configured',
    }
  }

  const target = `${config.appApiUrl}/${path}`
  return proxyRequest(event, target, {
    headers: {
      ...(config.appApiKey ? { 'x-api-key': config.appApiKey } : {}),
      ...(config.appApiToken ? { Authorization: `Bearer ${config.appApiToken}` } : {}),
    },
  })
})
