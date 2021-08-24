import React from 'react';

import s from './Methods.module.scss';

const Methods = ({ activeTab }) => {

    const signIn =
        <form>
            <label className={s.Methods__label}>
                <span>Эл. почта:</span>
                <input className={s.Methods__input} type="text"/>
            </label>
            <label className={s.Methods__label}>
                <span>Пароль:</span>
                <input className={s.Methods__input} type="password"/>
                <button className={s.Methods__forgot}>Забыли пароль?</button>
            </label>

            <button className={s.Methods__submit}>Войти</button>
        </form>

    return (
        <div className={s.Methods}>
            {signIn}
        </div>
    );

};

export default Methods;
