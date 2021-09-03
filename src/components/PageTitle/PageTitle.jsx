import React from 'react';

import s from './PageTitle.module.scss';

const PageTitle = ({ title }) => {
    return (
        <h1 className={s.Title}>{title}</h1>
    );

};

export default PageTitle;
