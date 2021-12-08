import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import ArticleCard from "../ArcticleCard/ArticleCard";
import SearchBar from '../SearchBar/SearchBar'

import { useAppDispatch } from "../../app/hooks";
import { fetchAsyncArticles, fetchAsyncFilteredArticles, getAllArticles, getQuery } from "../../features/articles/articlesSlice";
import { Article } from "../../types/interfaceArticle";

import { Container, Divider, Grid, Typography } from "@mui/material";

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
      <Container
        sx={{
          mt : '50px',
          mb: 8 ,
          maxWidth:'1290px'
        }}
        maxWidth={false}
      >
        <SearchBar />
        <Typography
          variant="button"
          display="block"
          gutterBottom sx={{ fontWeight: 600 }}
        >
          Results: {articlesList.length}
        </Typography>
        <Divider />
        <Grid
          container
          spacing={6}
          sx={{ pt: '45px'}}
        >
          {
            articlesList.map((article: Article) => (
              <ArticleCard key={article.id} data={article} />
            ))
          }
        </Grid>
      </Container>
    </>
  );
}

export default ArticleListing;
