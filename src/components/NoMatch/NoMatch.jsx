import React from 'react';

import s from './NoMatch.module.scss';

const NoMatch = () => {
    return (
        <div className="container">
            <section className={s.NoMatch}>
                <h1>Такой страницы не существует!</h1>
            </section>
        </div>
    );

};

export default NoMatch;
