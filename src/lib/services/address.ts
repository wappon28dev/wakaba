import axios from "axios";
import { ok, ResultAsync } from "neverthrow";

const { VITE_YAHOO_REV_GEO_API_KEY } = import.meta.env;

export function yahooRevGeoAPI(
  lat: number,
  lon: number,
): ResultAsync<string, unknown> {
  const url = `https://map.yahooapis.jp/geoapi/V1/reverseGeoCoder?lat=${lat}&lon=${lon}&appid=${VITE_YAHOO_REV_GEO_API_KEY}`;

  return ResultAsync.fromPromise(
    axios.get(url, {
      headers: { "Access-Control-Allow-Origin": "http://127.0.0.1:5173" },
    }),
    (e) => e, 
  )
    .andThen((response) => {
      const { data } = response;
      if (data.Status.Code === 200 && Array.isArray(data.Feature)) {
        const fetchedAddress = data.Feature[0].Property.Address;
        if (typeof fetchedAddress === "string") {
          return ok(fetchedAddress);
        }
      }
      return ResultAsync.fromPromise(
        Promise.reject(new Error("Invalid response")),
        (e) => e,
      );
    })
    .mapErr((e) => e);
}
