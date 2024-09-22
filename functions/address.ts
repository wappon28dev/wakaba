import type { PagesFunction } from "@cloudflare/workers-types";
import { z } from "zod";
import { type Env } from "./__lib/consts.js";

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== "GET") {
    return new Response("Method not allowed.", { status: 405 });
  }

  const reqUrl = new URL(request.url);

  const reqSearchParams = Object.fromEntries(reqUrl.searchParams.entries());

  const result = z
    .object({
      lat: z.string(),
      lon: z.string(),
    })
    .safeParse(reqSearchParams);

  if (result.error != null) {
    return new Response(
      `Invalid query parameters: ${result.error.toString()}`,
      {
        status: 400,
      },
    );
  }

  const url = "https://map.yahooapis.jp/geoapi/V1/reverseGeoCoder";
  const params = new URLSearchParams({
    ...result.data,
    output: "json",
    appid: env.YAHOO_REV_GEO_API_KEY,
  });

  return await fetch(`${url}?${params.toString()}`);
};
