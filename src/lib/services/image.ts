import { err, ok, type Result } from "neverthrow";

export async function fetchGeneratedImage(
  prompt: string,
  { height, width }: { height: number; width: number },
): Promise<Result<string, Error>> {
  const sanitizedPrompt = prompt.replaceAll(" ", "_").replaceAll(",", "_");

  const param = new URLSearchParams({
    prompt: sanitizedPrompt,
    height: height.toString(),
    width: width.toString(),
  });

  const res = await fetch(`/image?${param.toString()}`);

  if (!res.ok) {
    return err(new Error("画像の生成に失敗しました", { cause: res }));
  }

  const blob = await res.blob();
  return ok(URL.createObjectURL(blob));
}
