import React, { useState } from 'react';

import { useFirebase, auth, LS_USERNAME } from "../../../context/FirebaseProvider/FirebaseProvider";
import { getFirstName } from "../../../functions/functions";
import { addConditionedStyle } from '../../../functions/functions';

import s from './User.module.scss';
import defaultUser from './icons/defaultUser.svg';
import UserMenu from "./UserMenu/";

const User = () => {
    const { user } = useFirebase();
    const [isMenuOpened, setIsMenuOpened] = useState(false);



    //current user starts with null and then sets itself. The way that happend is that firebase set localStorage and verifies
    //that we have user Signed In
    const activeUser = auth.currentUser.displayName ? getFirstName(auth.currentUser.displayName) :
        localStorage.getItem(LS_USERNAME) ? getFirstName(JSON.parse(localStorage.getItem(LS_USERNAME))) :
            auth.currentUser.email;

    const avatar = user && user.photoURL ? user.photoURL : defaultUser;

    const nameClass = addConditionedStyle(isMenuOpened, [s.User__name], s.opened);

    // const chevron =
    //     <svg className={chevronClass.join(' ')} enableBackground="new 0 0 515.556 515.556" height="512" viewBox="0 0 515.556 515.556" width="512" xmlns="http://www.w3.org/2000/svg">
    //         <path className={s.User__chevronPath}  d="m257.778 386.671-257.778-257.778h128.886l128.892 128.889 128.886-128.897 128.892.008z"/>
    //     </svg>
    // ;

    const hoverHandler = () => {
        setIsMenuOpened(true);
    };

    const leaveHandler = () => {
        setIsMenuOpened(false);
    };

    return (
        <figure className={s.User} onMouseEnter={hoverHandler} onMouseLeave={leaveHandler}>
            <div className={s.User__imageWrapper}>
                <img className={s.User__image} src={avatar} alt=""/>
            </div>
            <figcaption className={s.User__nameWrapper} >
                <button className={nameClass.join(' ')}>
                    <span>{activeUser}</span>
                    {/*{chevron}*/}
                </button>
                <UserMenu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}/>
            </figcaption>
        </figure>
    );

};

export default User;
