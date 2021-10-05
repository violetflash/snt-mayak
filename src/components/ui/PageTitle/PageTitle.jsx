import React from 'react';

import s from './PageTitle.module.scss';

const PageTitle = ({ tag, title }) => {
  const pageTitle = tag === "h1" ? <h1 className={s.Title__title}>{title}</h1> :
    tag === "h2" ? <h2 className={s.Title__title}>{title}</h2> :
      tag === "h3" ? <h3 className={s.Title__title}>{title}</h3> : null;
  return (
    <div className={s.Title}>
      {pageTitle}
    </div>
  );
};

export default PageTitle;
