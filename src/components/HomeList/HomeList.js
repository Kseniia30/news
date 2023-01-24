import { Link, useLocation } from 'react-router-dom';
import { uid } from 'uid';
import { result } from 'utils/formatData';
import { CiCalendar } from 'react-icons/ci';
import { AiOutlineArrowRight } from 'react-icons/ai';
import css from './HomeList.module.css';

export const HomeList = ({ list }) => {
    const location = useLocation();

    return (
        <ul className={css.homeList}>
            {list.map(item => {
                const { id, title, summary, publishedAt, imageUrl } = item;
                return (
                    <li key={uid()} className={css.homeList__item}>
                        <Link to={`/${id}`} state={{ from: location }}>
                            <img
                                src={imageUrl}
                                alt={title}
                                className={css.homeList__img}
                            />
                            <div className={css.homeList__textBox}>
                                <p className={css.homeList__date}>
                                    <CiCalendar
                                        className={css.homeList__dateIcon}
                                    />
                                    {result(publishedAt)}
                                </p>
                                <h2 className={css.homeList__title}>{title}</h2>
                                <p className={css.homeList__text}>{summary}</p>
                                <button
                                    type="button"
                                    className={css.homeList__btn}
                                >
                                    Read more
                                    <AiOutlineArrowRight
                                        className={css.homeList__btnIcon}
                                    />
                                </button>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
