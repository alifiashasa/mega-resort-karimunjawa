import { c as defineEventHandler, u as useRuntimeConfig, g as getRouterParam, p as proxyRequest } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'node:crypto';

const ____path_ = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const path = getRouterParam(event, "path");
  if (!config.appApiUrl) {
    return {
      statusCode: 404,
      message: "API Proxy: No upstream API configured"
    };
  }
  const target = `${config.appApiUrl}/${path}`;
  return proxyRequest(event, target, {
    headers: {
      ...config.appApiKey ? { "x-api-key": config.appApiKey } : {},
      ...config.appApiToken ? { Authorization: `Bearer ${config.appApiToken}` } : {}
    }
  });
});

export { ____path_ as default };
//# sourceMappingURL=_...path_.mjs.map
