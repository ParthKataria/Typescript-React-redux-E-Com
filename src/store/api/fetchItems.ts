import { createAsyncThunk } from "@reduxjs/toolkit";
import { headers } from "../../API_KEYS";
import axios from "axios";
const fetchItems = createAsyncThunk("category/items", async (category) => {
  const response = await axios.request({
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
    params: {
      country: "in",
      lang: "en",
      currentpage: "0",
      pagesize: "30",
      categories: category,
    },
    headers: headers,
  });
  //   console.log(response);
  return response.data;
});
export { fetchItems };
