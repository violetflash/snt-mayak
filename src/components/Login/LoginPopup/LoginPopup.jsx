import React, { useContext } from 'react';
import s from "./LoginPopup.module.scss";
import Logo from "../../Logo";
import Context from '../../../context/context';
import { addConditionedStyle } from '../../../functions/functions';

const LoginPopup = () => {
    const { loginIsOpened, setLoginIsOpened } = useContext(Context);
    const closePopup = () => setLoginIsOpened(false);

    const closeButton = <button className={s.LoginPopup__close} onClick={closePopup} />

    const popupClassName = addConditionedStyle(loginIsOpened, [s.LoginPopup], s.opened);

    return (
        <div className={popupClassName.join(' ')}>
            <header className={s.LoginPopup__header}>
                {closeButton}
                <Logo />
            </header>
            <div className={s.LoginPopup__tabs}>
                <button>Вход</button>
                <button>Регистрация</button>
            </div>
            {/*{!isGoogleAuth && <button className={s.Login__byEmail} onClick={setByEmail}>Войти по адресу электр. почты</button>}*/}
            {/*<button className={s.Login__byGoogle} onClick={setByGoogle}>Войти, используя Google аккаунт </button>*/}
        </div>
    );

};

export default LoginPopup;
