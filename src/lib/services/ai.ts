import { GoogleGenerativeAI } from "@google/generative-ai";
import { ok, ResultAsync } from "neverthrow";
import { ENV } from "./env";

const ai = new GoogleGenerativeAI(ENV.VITE_GEMINI_API_KEY);

export function ask<T extends object>(prompt: string): ResultAsync<T, unknown> {
  const model = ai.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  return ResultAsync.fromPromise(model.generateContent(prompt), (e) => e)
    .andThen(({ response }) => ok(response.text()))
    .map((t) => JSON.parse(t) as T)
    .mapErr((e) => e);
}
