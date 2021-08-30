import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { useAuth } from "../../../../context/AuthProvider/AuthProvider";
import Context from "../../../../context/context";
import { addConditionedStyle } from '../../../../functions/functions';
import s from "./UserMenu.module.scss";


const UserMenu = ({ menuOpened, setMenuOpened }) => {
    const { logout } = useAuth();
    const { setActiveLink } = useContext(Context);

    const openUserSettings = () => {
        setActiveLink(null);
        setMenuOpened(false);
    };

    const closeMenu = () => {
        setMenuOpened(false);
    }

    const closeButton = <button className={s.UserMenu__close} onClick={closeMenu} />;

    const userMenuClass = addConditionedStyle(menuOpened, [s.UserMenu], s.active);

    return (
        <div className={userMenuClass.join(' ')}>
            {closeButton}
            <Link to="/user-settings" className={s.UserMenu__settings} onClick={openUserSettings}>Настройки</Link>
            <button onClick={logout} className={s.UserMenu__logout}>Выйти</button>
        </div>
    );

};

export default UserMenu;
