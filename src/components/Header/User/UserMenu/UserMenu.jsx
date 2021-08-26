import React from 'react';
import s from "./UserMenu.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthProvider/AuthProvider";


const UserMenu = () => {
    const { logout } = useAuth();

    return (
        <div className={s.UserMenu}>
            <Link to="/user-settings" className={s.UserMenu__settings}>Настройки</Link>
            <button onClick={logout} className={s.UserMenu__logout}>Выйти</button>
        </div>
    );

};

export default UserMenu;
