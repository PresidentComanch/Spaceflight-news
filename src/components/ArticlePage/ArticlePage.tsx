import React, { EffectCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAsyncArticle, getArticle, removeArticle } from "../../features/article/articleSlice";

import './articlePage.scss';

const ArticlePage: React.FC = () => {
  const { articleId } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getArticle);
  let intViewportHeight = window.innerHeight;

  const { title, imageUrl, summary } = data;

  useEffect((): (()=> void) => {
    if (articleId) {
      dispatch(fetchAsyncArticle(articleId));
    }

    return () => dispatch(removeArticle());
  }, [dispatch, articleId])

  return (
    <section className='ArticlePage' >
      <div className='ArticlePage__img-container'>
        <img src={imageUrl} alt={title} className='ArticlePage__img' />
      </div>
      <div className='ArticlePage__article-container' style={{ height: `${intViewportHeight - 254}px` }}>
        <article className='ArticlePage__article'>
          <h2 className='ArticlePage__title'>
            {title}
          </h2>
          <p className='ArticlePage__text'>
            {summary}
          </p>
        </article>
      </div>
      <div className='container'>
        <Link to='/' className='ArticlePage__link'>&larr; Back to homepage</Link>
      </div>
    </section>
  );
}

export default ArticlePage;
