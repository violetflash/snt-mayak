import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import { setActiveAdminTab, setActiveNavLink } from '../../../../redux'
import SvgIcons from "../../../SvgIcons";

import {useFirebase} from "../../../../context/FirebaseProvider/FirebaseProvider";
import {addConditionedStyle} from '../../../../functions/functions';
import s from "./UserMenu.module.scss";


const UserMenu = ({setIsMenuOpened, isMenuOpened}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {logout, auth} = useFirebase();

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const openMenuLink = () => {
    dispatch(setActiveAdminTab({activeAdminTab: null}));
    dispatch(setActiveNavLink({ activeID: null }));
    closeMenu();
  };

  const logoutHandler = async () => {
    closeMenu();
    await logout();
    history.push("/");
  };

  const userMenuClass = addConditionedStyle(isMenuOpened, [s.UserMenu], s.active);

  return (
    <div className={userMenuClass.join(' ')}>

      <header className={s.UserMenu__header}>
        <span className={s.UserMenu__name}>{auth.currentUser.displayName}</span>
        <button aria-label="выход" onClick={logoutHandler} className={s.UserMenu__quit}>
          <span>Выйти</span>
        </button>
      </header>
      <div className={s.UserMenu__body}>
        <Link to="/content-control" className={s.UserMenu__link} onClick={openMenuLink}>
          <SvgIcons name="admin"/>
          <span>Управление контентом (флаг админа)</span>
        </Link>
        <Link to="/user-offers" className={s.UserMenu__link} onClick={openMenuLink}>
          <SvgIcons name="offers"/>
          <span>Мои объявления</span>
        </Link>
        <Link to="/user-settings" className={s.UserMenu__link} onClick={openMenuLink}>
          <SvgIcons name="settings"/>
          <span>Настройки аккаунта</span>
        </Link>
      </div>

    </div>
  );

};

export default UserMenu;
