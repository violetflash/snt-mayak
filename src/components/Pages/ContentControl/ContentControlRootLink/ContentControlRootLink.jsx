import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import SvgIcons from "../../../SvgIcons/";

import s from "./ContentControlRootLink.module.scss";
import Context from "../../../../context/context";


const ContentControlRootLink = () => {
    const { setActiveAdminTab } = useContext(Context);
    const resetActiveTab = () => setActiveAdminTab(null);

    return <Link className={s.RootLink} to="/content-control" onClick={resetActiveTab}>
        <span className={s.RootLink__chevron}><SvgIcons name="chevron"/></span>
        <span className={s.RootLink__text}>к инструкции</span>
    </Link>

};

export default ContentControlRootLink;
