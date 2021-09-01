import React from 'react';

import s from './EmailConfirmPopup.module.scss';

const EmailConfirmPopup = () => {
    return (
        <div className={s.Confirm}>
            <p className={s.Confirm__text}>Пожалуйста, подтвердите Ваш электронный адрес.</p>
        </div>
    );

};

export default EmailConfirmPopup;
