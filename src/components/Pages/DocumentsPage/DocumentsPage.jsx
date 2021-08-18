import React from 'react';

import s from "../AboutPage/AboutPage.module.scss";

const DocumentsPage = () => {
    return (
        <section className={s.Documents}>
            <div className="container">
                <div className={s.Documents__content}>
                    <h2>Documents Page: Законы и нормативные акты, Устав, Протоколы общих собраний, Внутренние документы</h2>
                </div>
            </div>
        </section>
    );

};

export default DocumentsPage;
