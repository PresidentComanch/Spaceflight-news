import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { EffectCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAsyncArticle, getArticle, removeArticle } from "../../features/article/articleSlice";

const ArticlePage: React.FC = () => {
  const { articleId } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getArticle);

  const { title, imageUrl, summary } = data;

  useEffect((): (()=> void) => {
    if (articleId) {
      dispatch(fetchAsyncArticle(articleId));
    }

    return () => dispatch(removeArticle());
  }, [dispatch, articleId])

  return (
    <Paper sx={{ height: '100vh' }}>
      <Box
        sx={{
          width: '100%',
          height : '245px' ,
          backgroundImage : `url(${imageUrl})` ,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <Container sx={{ mt: '-95px' }}>
        <Paper
          elevation={4}
          sx={{
            mb: '35px',
            p: '35px 75px 50px',
            border: '1px solid #EAEAEA',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)'
          }} >
            <Typography variant='h5' gutterBottom sx={{ mb: '50px' }}>
              {title}
            </Typography>
            <Typography variant='body1'>
              {summary}
            </Typography>
        </Paper>
        <Button
          variant='text'
          component={Link}
          to={`/`}
          sx={{ mb: '45px'}}
        >
          <Typography
            variant="button"
            display="block"
            gutterBottom sx={{ fontWeight: 600 }}
            color='primary'
          >
            &larr; Back to homepage
          </Typography>
        </Button>
      </Container>
    </Paper>
  );
};

export default ArticlePage;
