import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "../../API_KEYS";
import { Item } from "../../TypeDefinations/types";
const ItemsApi = createApi({
  reducerPath: "items",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
  }),
  endpoints(builder) {
    return {
      fetchItems: builder.query<
        { results: Item[] },
        { categories: string; page: number }
      >({
        query: ({ categories, page }) => {
          return {
            url: "/",
            params: {
              country: "in",
              lang: "en",
              currentpage: page,
              pagesize: "30",
              categories: categories,
            },
            headers: headers,
          };
        },
      }),
    };
  },
});
export const { useFetchItemsQuery } = ItemsApi;
export { ItemsApi };
