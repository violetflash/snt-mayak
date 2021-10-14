import React from 'react';

import s from './Greetings.module.scss';

const Greetings = () => {
  return (
    <aside className={s.Greetings}>
      <div className={s.Greetings__wrapper}>
        <h1 className={s.Greetings__title}>Мы рады приветствовать Вас на официальном сайте СНТ «Маяк»!</h1>
        <p className={s.Greetings__subtitle}>Тут вы можете оперативно получать актуальную информацию о жизни снт.</p>
      </div>
    </aside>
  );

};

export default Greetings;
