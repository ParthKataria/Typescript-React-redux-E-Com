import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "../../API_KEYS";
const ItemDetailsApi = createApi({
  reducerPath: "item-details",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
  }),
  endpoints(builder) {
    return {
      fetchItemDetails: builder.query({
        query: (code) => {
          return {
            url: "/",
            params: { lang: "en", country: "us", productcode: code },
            headers: headers,
          };
        },
      }),
    };
  },
});
export const { useFetchItemDetailsQuery } = ItemDetailsApi;
export { ItemDetailsApi };
