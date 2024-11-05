import type { PagesFunction } from "@cloudflare/workers-types";
import { z } from "zod";
import { getDefaultCors, type Env } from "./__lib/consts.js";

export const onRequestOptions: PagesFunction<Env> = async ({ env }) =>
  getDefaultCors(env.ADDR_REFERER_URL);

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== "GET") {
    return new Response("Method not allowed.", { status: 405 });
  }

  const reqUrl = new URL(request.url);
  const reqSearchParams = Object.fromEntries(reqUrl.searchParams.entries());
  const result = z
    .object({
      prompt: z.string(),
      height: z.string(),
      width: z.string(),
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

  const url = `https://image.pollinations.ai/prompt/${result.data.prompt}`;
  const param = new URLSearchParams({
    height: result.data.height,
    width: result.data.width,
  });

  return await fetch(`${url}?${param.toString()}`);
};
