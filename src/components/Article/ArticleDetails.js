import { getArticlesDetails } from 'fetch/getArticlesDetails';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import sass from '../common/Common.module.css';
import css from './ArticleDetail.module.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { result } from 'utils/formatData';

export const ArticleDetails = () => {
    const { articleId } = useParams();
    const [details, setDetails] = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            getArticlesDetails(articleId).then(setDetails);
        }
        isFirstRender.current = false;
    }, [articleId]);
    if (!details) {
        return;
    }
    const { title, imageUrl, url, newsSite, summary, publishedAt } =
        details.data;
    return (
        <div className={css.details__box}>
            <header className={css.details__header}></header>
            <div className={sass.container}>
                <div className={css.details}>
                    <h1 className={css.details__title}>{title}</h1>
                    <img
                        src={imageUrl}
                        alt={title}
                        className={css.details__img}
                    />
                    <p className={css.details__text}>{summary}</p>
                    <p className={css.details__text}>
                        <b>Sourse:{'  '} </b>
                        {newsSite}
                    </p>
                    <p className={css.details__text}>
                        <b>Pablished:{'  '} </b>
                        {result(publishedAt)}
                    </p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className={css.details_seeMore}
                    >
                        See more{' '}
                        <AiOutlineArrowRight style={{ marginLeft: '10px' }} />
                    </a>
                </div>
                <button type="button" className={css.details__backBtn}>
                    <Link to={backLinkHref} className={css.details__btnLink}>
                        <AiOutlineArrowLeft className={css.details__btnIcon} />
                        Back to homepage
                    </Link>
                </button>
            </div>
        </div>
    );
};
