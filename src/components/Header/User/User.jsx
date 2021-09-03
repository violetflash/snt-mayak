import React, { useContext } from 'react';

import { useAuth, auth, LS_USERNAME } from "../../../context/AuthProvider/AuthProvider";
import { getFirstName } from "../../../functions/functions";
import { addConditionedStyle } from '../../../functions/functions';

import Context from '../../../context/context';
import s from './User.module.scss';
import defaultUser from './icons/defaultUser.svg';
import UserMenu from "./UserMenu";

const User = () => {
    const { user } = useAuth();
    const { menuOpened, setMenuOpened } = useContext(Context);


    //current user starts with null and then sets itself. The way that happend is that firebase set localStorage and verifies
    //that we have user Signed In
    const activeUser = auth.currentUser.displayName ? getFirstName(auth.currentUser.displayName) :
        localStorage.getItem(LS_USERNAME) ? JSON.parse(localStorage.getItem(LS_USERNAME)) :
            auth.currentUser.email;

    const avatar = user && user.photoURL ? user.photoURL : defaultUser;

    const chevronClass = addConditionedStyle(menuOpened, [s.User__chevron], s.opened);

    const chevron =
        <svg className={chevronClass.join(' ')} enableBackground="new 0 0 515.556 515.556" height="512" viewBox="0 0 515.556 515.556" width="512" xmlns="http://www.w3.org/2000/svg">
            <path className={s.User__chevronPath}  d="m257.778 386.671-257.778-257.778h128.886l128.892 128.889 128.886-128.897 128.892.008z"/>
        </svg>
    ;

    const openUserMenu = () => {
        setMenuOpened(() => {
            return !menuOpened;
        });
    };

    return (
        <figure className={s.User} onClick={openUserMenu}>
            <div className={s.User__imageWrapper}>
                <img className={s.User__image} src={avatar} alt=""/>
            </div>
            <figcaption className={s.User__nameWrapper}>
                <div className={s.User__name} >
                    <span>{activeUser}</span>
                    {chevron}
                </div>
                <UserMenu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
            </figcaption>
        </figure>
    );

};

export default User;
