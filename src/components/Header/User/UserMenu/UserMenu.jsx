import React from 'react';
import s from "./UserMenu.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthProvider/AuthProvider";
import { addConditionedStyle } from '../../../../functions/functions';


const UserMenu = ({ menuOpened }) => {
    const { logout } = useAuth();

    const userMenuClass = addConditionedStyle(menuOpened, [s.UserMenu], s.active);

    return (
        <div className={userMenuClass.join(' ')}>
            <Link to="/user-settings" className={s.UserMenu__settings}>Настройки</Link>
            <button onClick={logout} className={s.UserMenu__logout}>Выйти</button>
        </div>
    );

};

export default UserMenu;
