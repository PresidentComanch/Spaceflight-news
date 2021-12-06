import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticles, fetchFilteredArticles } from '../../api/api';
import { RootState, AppThunk } from '../../app/store';
import { Article } from '../../types/interfaceArticle';

export interface ArticlesState {
  articles: Article[];
  query: string;
  status: 'pending' | 'fullfilled' | 'rejected';
}

const initialState: ArticlesState = {
  articles: [],
  query: '',
  status: 'pending',
};


export const fetchAsyncArticles = createAsyncThunk(
  'articles/fetchAsyncArticles',
  async () => {
    const response = await fetchArticles();

    return response.data;
  }
);

export const fetchAsyncFilteredArticles = createAsyncThunk(
  'articles/fetchAsyncFilteredArticles',
  async (query: string) => {
    const responseByTitle = await fetchFilteredArticles('title', query);
    const responseByText = await fetchFilteredArticles('summary', query);

    return [ ...responseByTitle.data, ...responseByText.data].filter((el, i, arr) => i === arr.findIndex(check => check.id === el.id));
  }
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
      })
      .addCase(fetchAsyncFilteredArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
      });
  },
});

export const { setSearchQuery } = articlesSlice.actions;
export const getAllArticles = (state: RootState) => state.articles.articles;
export const getQuery = (state: RootState) => state.articles.query;
export default articlesSlice.reducer;
