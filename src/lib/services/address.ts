import { match } from "ts-pattern";
import { type Project } from "@/lib/classes/project";
import { fetchResultWithError, type RequestResult } from "@/lib/utils/fetch";

type Param = {
  lat: number;
  lon: number;
};

type Response = {
  /**
   * レスポンスのまとめ情報。
   */
  ResultInfo: {
    /**
     * レスポンス情報に含まれる住所情報のデータ件数。
     */
    Count: number;
    /**
     * 出力されている住所情報以外も含めた全データ件数。
     */
    Total: number;
    /**
     * レスポンス情報に含まれる住所情報の、全データからの取得開始位置。
     */
    Start: number;
    /**
     * レスポンス情報を生成するのに要した時間。
     */
    Latency: number;
    /**
     * リクエスト元に処理結果を伝えるためのコード。正常終了の場合、200を出力します。エラー時は、下記エラー項目を参照してください。
     */
    Status: number;
    /**
     * データの説明。詳細情報がある場合に表示されます。
     */
    Description: string;
    /**
     * 著作権情報。
     */
    Copyright: string;
    /**
     * 圧縮方式のタイプ。
     */
    CompressType: string;
  };
  /**
   * 検索結果1件分のデータ群。
   */
  Feature: Array<{
    /**
     * 拠点の場所を表すGeometry要素です。
     */
    Geometry: {
      /**
       * 図形情報のタイプ。
       */
      Type: string;
      /**
       * 座標情報です。
       */
      Coordinates: string;
    };
    /**
     * 各種データを格納。
     */
    Property: {
      /**
       * 国情報。
       */
      Country: {
        /**
         * 国（ISO）コード。
         */
        Code: string;
        /**
         * 国名。
         */
        Name: string;
      };
      /**
       * 1行であらわす住所。
       */
      Address: string;
      /**
       * 部分住所情報。
       */
      AddressElement: Array<{
        /**
         * 部分住所。
         */
        Name: string;
        /**
         * 部分住所のかな表記。
         */
        Kana: string;
        /**
         * 住所レベル。
         */
        Level: string;
        /**
         * 行政コード。（オプショナル）
         */
        Code?: string;
      }>;
      /**
       * 道路情報。
       */
      Road: Array<{
        /**
         * 道路名。
         */
        Name: string;
        /**
         * 道路名かな。
         */
        Kana: string;
        /**
         * 通称名。
         */
        PopularName: string;
      }>;
    };
  }>;
};

type APIError = {
  Error: {
    Message: string;
    Code: string;
  };
};

export function fetchAddressFromLocation(
  param: Param,
): RequestResult<Response, APIError> {
  const searchParams = new URLSearchParams({
    lat: param.lat.toString(),
    lon: param.lon.toString(),
  });

  return fetchResultWithError<Response, APIError>(
    `/address?${searchParams.toString()}`,
    { cache: "force-cache" },
  );
}

export function addr2str(
  addr: Response["Feature"][0]["Property"]["AddressElement"],
  projectStatus: ReturnType<Project["calcStatus"]>,
): string {
  return match(projectStatus)
    .with("wakaba", () => `${addr?.at(2)?.Name}周辺`)
    .otherwise(() => addr?.at(2)?.Name ?? addr?.at(3)?.Name ?? "");
}
