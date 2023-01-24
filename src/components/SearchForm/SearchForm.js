import { HiOutlineSearch } from 'react-icons/hi';
import css from './SearchForm.module.css';

export const SearchForm = ({ submit }) => {
    return (
        <form onSubmit={submit}>
            <label className={css.form__label}>Filter by keywords</label>
            <br />
            <div className={css.form__inputBox}>
                <button type="submit" className={css.form__btn}>
                    <HiOutlineSearch className={css.form__btnIcon} />
                </button>
                <input type="text" name="string" className={css.form__input} />
            </div>
        </form>
    );
};
