import React from 'react';

import s from './OffersPage.module.scss';

const OffersPage = () => {
    return (
        <section className={s.About}>
            <div className="container">
                <div className={s.About__content}>
                    <h2>Offers Page: Объявления от зарегистрированных пользователей</h2>
                </div>
            </div>
        </section>
    );

};

export default OffersPage;
