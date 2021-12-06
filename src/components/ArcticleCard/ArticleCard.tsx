import React from "react";
import { Article } from "../../types/interfaceArticle";
import calendarIcon from '../../images/icons/calendar-icon.svg';
import './articleCard.scss';
import moment from "moment";
import { Link } from "react-router-dom";

type Props = {
  data: Article;
};

const ArticleCard: React.FC<Props> = ({ data }) => {
  const { id, title, imageUrl, summary, publishedAt } = data;

  const textPrepared = summary.substring(0, 97) + '...';
  const datePrepared = moment(publishedAt).format("MMM Do, YYYY");

  return (
    <div className='ArticleCard'>
      <div className='ArticleCard__img-container'>
        <img src={imageUrl} alt={title} className='ArticleCard__image' />
      </div>
      <div className='ArticleCard__article-container'>
        <div className='ArticleCard__date-block'>
          <img src={calendarIcon} alt="calendar-icon" className='ArticleCard__calendar-icon' />
          <span className='ArticleCard__date'>{datePrepared}</span>
        </div>
        <article>
          <h2 className='ArticleCard__title'>
            {title}
          </h2>
          <p className='ArticleCard__text'>{textPrepared}</p>
        </article>
        <div className='ArticleCard__link-container'>
          <Link to={`/article/${id}`} className='ArticleCard__link'>
              Read more &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
