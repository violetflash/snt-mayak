import React, { useState } from 'react';

import { useAuth } from "../../../context/AuthProvider/AuthProvider";
import { getFirstName } from "../../../functions/functions";
import { addConditionedStyle } from '../../../functions/functions';

import s from './User.module.scss';
import defaultUser from './icons/defaultUser.svg';
import UserMenu from "./UserMenu";

const User = () => {
    const { user, name } = useAuth();
    const [menuOpened, setMenuOpened] = useState(false);


    //current user starts with null and then sets itself. The way that happend is that firebase set localStorage and verifies
    //that we have user Signed In
    //TODO try to just user && user.displayName instead of drilling Name prop
    const activeUser = user?.displayName ? getFirstName(user.displayName) :
        user && name ? getFirstName(name) :
            user ? user.email : null
    ;

    // const activeUser = user.displayName ? getFirstName(user.displayName) : user.email;


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
        <figure className={s.User}>
            <div className={s.User__imageWrapper}>
                <img className={s.User__image} src={avatar} alt=""/>
            </div>
            <figcaption className={s.User__nameWrapper}>
                <button className={s.User__name} onClick={openUserMenu}>
                    <span>{activeUser}</span>
                    {chevron}
                </button>
                <UserMenu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
            </figcaption>
        </figure>
    );

};

export default User;
