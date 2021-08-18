import React from 'react';

import s from './Logo.module.scss';

const Logo = () => {
    return (
        <figure className={s.Logo}>
            <svg className={s.Logo__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.17 92.59">
                <polygon className={s.cls1}
                         points="180.59 75.17 130.41 27.88 130.41 27.88 150.34 0 251.17 92.58 180.59 75.17"/>
                <polygon className={s.cls2} points="130.41 27.88 100.83 0 150.34 0 130.41 27.88 130.41 27.88"/>
                <rect className={s.cls3} x="109.66" y="46.29" width="12.68" height="12.68"/>
                <rect className={s.cls3} x="128.83" y="46.29" width="12.68" height="12.68"/>
                <rect className={s.cls3} x="109.66" y="64.28" width="12.68" height="12.68"/>
                <rect className={s.cls3} x="128.83" y="64.28" width="12.68" height="12.68"/>
                <polygon className={s.cls4}
                         points="100.83 0 68.83 29.39 68.83 17.65 51.49 17.65 51.09 18.15 51.09 26.34 51.16 26.32 51.16 45.61 0 92.58 70.58 75.17 150.34 0 100.83 0"/>
            </svg>

            <figcaption className={s.Logo__text}>
                <span className={s.Logo__prefix}>снт</span>
                <span className={s.Logo__title}>МАЯК</span>
            </figcaption>
        </figure>
    );

};

export default Logo;
