import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import SvgIcons from "../../../SvgIcons";

import {useAuth} from "../../../../context/AuthProvider/AuthProvider";
import Context from "../../../../context/context";
import {addConditionedStyle} from '../../../../functions/functions';
import s from "./UserMenu.module.scss";


const UserMenu = ({menuOpened, setMenuOpened}) => {
    const {logout, auth} = useAuth();
    const {setActiveLink} = useContext(Context);

    const closeMenu = () => {
        setMenuOpened(false);
    }

    const openMenuLink = () => {
        setActiveLink(null);
        closeMenu();
    };

    const logoutHandler = () => {
        logout();
        closeMenu();
    };

    const closeButton = <button className={s.UserMenu__close} onClick={closeMenu}/>;

    const userMenuClass = addConditionedStyle(menuOpened, [s.UserMenu], s.active);

    return (
        <div className={userMenuClass.join(' ')}>
            {closeButton}
            <header className={s.UserMenu__header}>
                <button onClick={logoutHandler} className={s.UserMenu__quit}>
                    <span>Выйти</span>
                </button>
                <span className={s.UserMenu__name}>{auth.currentUser.displayName}</span>
            </header>
            <div className={s.UserMenu__body}>
                <Link to="/user-offers" className={s.UserMenu__link} onClick={openMenuLink}>
                    <SvgIcons name="offers" />
                    <span>Мои объявления</span>
                </Link>
                <Link to="/user-settings" className={s.UserMenu__link} onClick={openMenuLink}>
                    <SvgIcons name="settings" />
                    <span>Настройки аккаунта</span>
                </Link>
            </div>

        </div>
    );

};

export default UserMenu;
