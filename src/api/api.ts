import axios from "axios";

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3/articles';

export const fetchArticles = () => axios.get('');

export const fetchArticle = (articleId?: string) =>  axios.get(`/${articleId}`);

export const fetchFilteredArticles = (prop: string, query: string) => axios.get(`/?${prop}_contains=${query}`);
