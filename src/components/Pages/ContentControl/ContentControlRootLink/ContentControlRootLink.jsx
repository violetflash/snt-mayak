import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveAdminTab } from '../../../../redux';
import { Link } from 'react-router-dom';
import SvgIcons from "../../../SvgIcons/";
import s from "./ContentControlRootLink.module.scss";

const ContentControlRootLink = () => {
    const dispatch = useDispatch();
    const resetActiveTab = () => dispatch(setActiveAdminTab({ activeAdminTab: null }));

    return <Link className={s.RootLink} to="/content-control" onClick={resetActiveTab}>
        <span className={s.RootLink__chevron}><SvgIcons name="chevron"/></span>
        <span className={s.RootLink__text}>к инструкции</span>
    </Link>

};

export default ContentControlRootLink;
