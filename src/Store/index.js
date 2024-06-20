import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { API_kEY, URL } from "../Constant";
import axios from "axios";

const initialState = {
  articles: [],
  LoadingFinished:null
};
export const getArticles = createAsyncThunk(
  "get/articles",
  async ({ country, category }) => {
    const response = await await axios.get(
      `${URL}${country}&lang=en&category=${category}&apikey=${API_kEY}`
    );
    return response.data.articles;
  }
);
const articleSlice = createSlice({
  name: "article",
  initialState,
  extraReducers: (builder) => {
     builder
       .addCase(getArticles.pending, (state) => {
         state.LoadingFinished = false;
       })
       .addCase(getArticles.fulfilled, (state, action) => {
         state.articles = action.payload;
         state.LoadingFinished = true;
       })
       .addCase(getArticles.rejected, (state) => {
         state.LoadingFinished = true;
       });
  }
});
export const appStore = configureStore({
  reducer: {
    article: articleSlice.reducer,
  },
});
export const {setArticle} = articleSlice.actions;
