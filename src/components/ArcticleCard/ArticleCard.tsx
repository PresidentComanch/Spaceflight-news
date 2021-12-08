import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { Article } from "../../types/interfaceArticle";
import { getQuery } from "../../features/articles/articlesSlice";
import moment from "moment";

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

type Props = {
  data: Article;
};

const ArticleCard: React.FC<Props> = ({ data }) => {
  const { id, title, imageUrl, summary, publishedAt } = data;
  const queryText= useAppSelector(getQuery);

  const highlighText = (text: string, queryText: string) => {
    return text.replace(
      new RegExp(queryText, 'gi'),
      match =>
        `<mark style="background: yellow;">${match}</mark>`
    );
  };

  let newTitle = title;
  let newBody = summary;

  if (queryText) {
    newTitle = highlighText(title, queryText);
    newBody = highlighText(newBody, queryText);
  }

  const datePrepared = moment(publishedAt).format("MMM Do, YYYY");

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          border: '1px solid #EAEAEA' ,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' ,
          minHeight: '530px' ,
        }}
      >
        <CardActionArea
          component={Link}
          to={`/article/${id}`}
        >
          <CardMedia
            component="img"
            image={imageUrl}
            alt={title}
            title={title}
            sx={{ height: 217 }}
          />
          <CardContent
            sx={{ padding: 3 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 3 }}
              >
              <CalendarTodayOutlinedIcon sx={{ fontSize: 14 }} />
              <Typography
                variant="subtitle2"
                display="block"
                color="text.secondary"
                gutterBottom
              >
                {datePrepared}
              </Typography>
            </Stack>
            <Typography
              variant='h5'
              sx={{ mb: '20px' }}
              dangerouslySetInnerHTML={{ __html: newTitle }}
            />
            <Typography
              variant='body1'
              dangerouslySetInnerHTML={{ __html: newBody.substring(0, 97) + '...' }}
              sx={{ mb: '20px' }}
            />
            <Typography
              variant="button"
              display="block"
              gutterBottom sx={{ fontWeight: 'bold' }}
            >
              Read more &rarr;
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ArticleCard;
