import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchAsyncFilteredArticles, getAllArticles, getQuery } from "../../features/articles/articlesSlice";
import ArticleCard from "../ArcticleCard/ArticleCard";
import SearchBar from '../SearchBar/SearchBar'
import { Article } from "../../types/interfaceArticle";
import { fetchAsyncArticles } from "../../features/articles/articlesSlice";
import { useAppDispatch } from "../../app/hooks";

const ArticleListing: React.FC = () => {
  const articlesList = useSelector(getAllArticles);
  const queryFromStore = useSelector(getQuery);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (queryFromStore) {
      dispatch(fetchAsyncFilteredArticles(queryFromStore));
    } else {
      dispatch(fetchAsyncArticles());
    }
  }, [dispatch, queryFromStore])

  return (
    <>
    <SearchBar />
      <div>
        {queryFromStore}
        {
          articlesList.map((article: Article) => (
            <ArticleCard key={article.id} data={article} />
          ))
        }
      </div>
    </>
  );
}

export default ArticleListing;
