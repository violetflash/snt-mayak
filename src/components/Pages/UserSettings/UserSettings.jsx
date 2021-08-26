import React from 'react';

import s from './UserSettings.module.scss';

const UserSettings = () => {
    return (
        <section className={s.UserSettings}>
            <div className="container">
                <div className={s.UserSettings__content}>
                    <h1>User Settings Page</h1>
                    <p>Редактирование профиля:</p>
                    <p>Изменение аватара</p>
                    <p>Объявлений: 0</p>
                </div>

            </div>
        </section>
    );

};

export default UserSettings;
