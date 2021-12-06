import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticle } from '../../api/api';
import { RootState, AppThunk } from '../../app/store';
import { Article } from '../../types/interfaceArticle';

export interface ArticleState {
  article: Article;
  status: 'pending' | 'fullfilled' | 'rejected';
}

const initialState: ArticleState = {
  article: {
    id: '',
    title: '',
    url: '',
    imageUrl: '',
    newsSite: '',
    summary: '',
    publishedAt: '',
  },
  status: 'pending',
};

export const fetchAsyncArticle = createAsyncThunk(
  'article/fetchAsyncArticle',
  async (articleId: string) => {
    const response = await fetchArticle(articleId);

    return response.data;
  }
);

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    removeArticle: (state) => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncArticle.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAsyncArticle.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        state.article = action.payload;
      });
  },
});

export const { removeArticle } = articleSlice.actions;

export const getArticle = (state: RootState) => state.article.article;

export default articleSlice.reducer;
