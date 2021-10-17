import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeAuthPopup } from '../../../redux';
import Logo from "../../Logo";
import Methods from './Methods/'
import { addConditionedStyle } from '../../../functions/functions';
import s from "./LoginPopup.module.scss";

const LoginPopup = () => {
    const dispatch = useDispatch();
    const { authPopupIsOpened } = useSelector(state => state.interface);
    const [activeTab, setActiveTab] = useState('login');

    const closePopup = () => {
        setActiveTab('login');
        dispatch(closeAuthPopup());
    }
    const closeButton = <button className={s.LoginPopup__close} onClick={closePopup} />;

    const tabsData = [{ title: "Вход", value: "login" }, { title: "Регистрация", value: "register" }];
    const tabsHandler = (e) => setActiveTab(e.target.value);
    const tabsButtons = tabsData.map(btn => {
        const { title, value } = btn;
        const btnClass = addConditionedStyle(activeTab === value, [s.LoginPopup__tabBtn], s.active);
        return <button className={btnClass.join(' ')} value={value} onClick={tabsHandler} key={title}>{title}</button>;
    });

    const popupClassName = addConditionedStyle(authPopupIsOpened, [s.LoginPopup], s.opened);

    return (
        <div className={popupClassName.join(' ')}>
            <header className={s.LoginPopup__header}>
                {closeButton}
                <Logo color="light"/>
            </header>
            <div className={s.LoginPopup__tabs}>
                {tabsButtons}
            </div>
            <Methods
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                loginIsOpened={authPopupIsOpened}
            />
        </div>
    );

};

export default LoginPopup;
