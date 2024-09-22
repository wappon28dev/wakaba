export type Env = {
  YAHOO_REV_GEO_API_KEY: string;
  ADDR_REFERER_URL: string;
};

export function getEnv<T extends keyof Env>(env: Partial<Env>, key: T): Env[T] {
  const value = env[key];
  if (value == null) {
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value;
}

export function getDefaultCors(ADDR_REFERER_URL: string): Response {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": new URL(ADDR_REFERER_URL).origin,
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
}
