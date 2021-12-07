import React from "react";
import { Article } from "../../types/interfaceArticle";
import './articleCard.scss';
import moment from "moment";
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useAppSelector } from "../../app/hooks";
import { getQuery } from "../../features/articles/articlesSlice";

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
  }

  let newTitle = title;
  let newBody = summary;

  if (queryText) {
    newTitle = highlighText(title, queryText);
    newBody = highlighText(newBody, queryText);
  }

  const datePrepared = moment(publishedAt).format("MMM Do, YYYY");

  return (
    <Grid item xs='12' md='4'>
      <Card
        sx={{ height: '100%' }}
      >
        <CardMedia
          image={imageUrl}
          alt={title}
          title={title}
          sx={{ height: 217 }}
        />
        <CardContent>
          <Stack direction="row" spacing={2}>
            <CalendarTodayOutlinedIcon />
            <Typography variant="overline" display="block" gutterBottom>
              {datePrepared}
            </Typography>
          </Stack>
          <Typography variant='h6' component='h3' dangerouslySetInnerHTML={{ __html: newTitle }} />
          <Typography variant='body1' dangerouslySetInnerHTML={{ __html: newBody.substring(0, 97) + '...' }} />
        </CardContent>
        <CardActions>
            <Button
              component={Link}
              to={`/article/${id}`}
              sx={{ textDecoration: 'none' }}
            >
              <Typography variant="button" display="block" gutterBottom>
                Read more &rarr;
              </Typography>
            </Button>
        </CardActions>
      </Card>
    </Grid>

    // <div className='ArticleCard'>
    //   <div className='ArticleCard__img-container'>
    //     <img src={imageUrl} alt={title} className='ArticleCard__image' />
    //   </div>
    //   <div className='ArticleCard__article-container'>
    //     <div className='ArticleCard__date-block'>
    //       <img src={calendarIcon} alt="calendar-icon" className='ArticleCard__calendar-icon' />
    //       <span className='ArticleCard__date'>{datePrepared}</span>
    //     </div>
    //     <article>
    //       <h2 className='ArticleCard__title'>
    //         {title}
    //       </h2>
    //       <p className='ArticleCard__text'>{textPrepared}</p>
    //     </article>
    //     <div className='ArticleCard__link-container'>
    //       <Link to={`/article/${id}`} className='ArticleCard__link'>
    //           Read more &rarr;
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ArticleCard;
