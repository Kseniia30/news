import { HomeList } from 'components/HomeList/HomeList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getArticlesCount } from 'fetch/getArticlesCount';
import { getArticlesList } from 'fetch/getArticlesList';
import { getByQuery } from 'fetch/getByQuery';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import sass from '../components/common/Common.module.css';
import { GiSpaceSuit } from 'react-icons/gi';

// const copy_page = '';

// function FindOnPage(textToFind) {
//     if (copy_page.length > 0) document.body.innerHTML = copy_page;
//     else copy_page = document.body.innerHTML;
//     document.body.innerHTML = document.body.innerHTML.replace(
//         eval('/' + textToFind + '/gi'),
//         '<span' + " style='background:yellow'>" + textToFind + '</span>'
//     );
// }

export const Home = () => {
    const [page, setPage] = useState(0);
    const [list, setList] = useState();

    const [searchParams, setSearchParams] = useSearchParams();
    const pag = searchParams.get('pag') ?? '';
    const query = searchParams.get('query') ?? '';
    const [pagItem, setPagItem] = useState(pag !== '' ? pag : '');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (isNaN(Number(pagItem))) {
            return;
        }
        setPage(Number(pagItem));
    }, [pagItem]);

    useEffect(() => {
        if (!query) {
            getArticlesList(page).then(res => {
                setSearchParams(page > 0 ? { pag: page } : {});
                getArticlesCount().then(res => {
                    setTotal(res.data);
                });
                setList(res.data);
            });
        }
        if (query) {
            getByQuery(query).then(res => {
                setPagItem(query);
                setSearchParams(query ? { query: query } : {});
                setTotal(9);
                setList(res.data);
            });
        }
    }, [page, setSearchParams, query]);

    if (!list) {
        return;
    }
    const increasePage = evt => {
        setPage(page + 9);
    };

    const submit = evt => {
        evt.preventDefault();
        const searchQuery = evt.target.elements.string.value;
        if (searchQuery === '') {
            return;
        }
        getByQuery(searchQuery).then(res => {
            setPagItem(searchQuery);
            setSearchParams(searchQuery ? { query: searchQuery } : {});
            setTotal(9);
            setList(res.data);
        });
    };

    const resetParams = evt => {
        if (query) {
            searchParams.delete(query);
        }
        if (pag) {
            setPage(0);
            searchParams.delete(pag);
        }
    };
    return (
        <div className={sass.container}>
            <Link to="/" onClick={resetParams}>
                <GiSpaceSuit
                    style={{
                        width: '40px',
                        height: '40px',
                        marginBottom: '20px',
                        marginTop: '20px',
                    }}
                />
            </Link>
            <SearchForm submit={submit} />
            <HomeList list={list} increasePage={increasePage} />
            {total > 9 && (
                <button
                    type="button"
                    onClick={increasePage}
                    className="moreBtn"
                >
                    More articles
                </button>
            )}
        </div>
    );
};
