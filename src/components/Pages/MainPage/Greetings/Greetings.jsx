import React from 'react';

import s from './Greetings.module.scss';

const Greetings = () => {
    return (
        <aside className={s.Greetings}>
            <h1>Добро пожаловать на сайт садового некоммерческого товарищества "Маяк"</h1>
        </aside>
    )

};

export default Greetings;