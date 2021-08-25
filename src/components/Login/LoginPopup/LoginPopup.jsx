import React, { useState, useContext } from 'react';
import s from "./LoginPopup.module.scss";
import Logo from "../../Logo";
import Methods from './Methods/'
import Context from '../../../context/context';
import { addConditionedStyle } from '../../../functions/functions';

const LoginPopup = () => {
    const { loginIsOpened, setLoginIsOpened } = useContext(Context);
    const [activeTab, setActiveTab] = useState('login');

    const closePopup = () => setLoginIsOpened(false);
    const closeButton = <button className={s.LoginPopup__close} onClick={closePopup} />;

    const tabsData = [{ title: "Вход", value: "login" }, { title: "Регистрация", value: "register" }];
    const tabsHandler = (e) => setActiveTab(e.target.value);
    const tabsButtons = tabsData.map(btn => {
        const { title, value } = btn;
        const btnClass = addConditionedStyle(activeTab === value, [s.LoginPopup__tabBtn], s.active);
        return <button className={btnClass.join(' ')} value={value} onClick={tabsHandler} key={title}>{title}</button>;
    });

    const popupClassName = addConditionedStyle(loginIsOpened, [s.LoginPopup], s.opened);

    return (
        <div className={popupClassName.join(' ')}>
            <header className={s.LoginPopup__header}>
                {closeButton}
                <Logo />
            </header>
            <div className={s.LoginPopup__tabs}>
                {tabsButtons}
            </div>
            <Methods
                activeTab={activeTab}
                loginIsOpened={loginIsOpened}
                setLoginIsOpened={setLoginIsOpened}/>
        </div>
    );

};

export default LoginPopup;
