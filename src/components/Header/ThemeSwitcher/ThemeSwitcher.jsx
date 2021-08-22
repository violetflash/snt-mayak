import React, { useState, useContext } from 'react';
import Switch from "react-switch";

import { ThemeContext } from "../../../context/ThemeProvider/ThemeProvider";

import s from './ThemeSwitcher.module.scss';
import sun from './icons/sun.svg';
import moon from './icons/moon.svg';




const ThemeSwitcher = () => {
    const [checked, setChecked] = useState(false);
    const { setMode } = useContext(ThemeContext);

    const switchHandler = () => {
        setChecked(() => !checked);
        setMode();
    };

    const lightTheme = <img className={s.Switcher__icon} src={sun} alt="Light Theme"/>
    const darkTheme = <img className={s.Switcher__icon} src={moon} alt="Dark Theme"/>

    return (
        <label className={s.Switcher}>
            <Switch
                onChange={switchHandler}
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={lightTheme}
                checkedHandleIcon={darkTheme}
                onColor="#86d3ff"
                offColor="#eee"
                onHandleColor="#92ccce"
                handleDiameter={30}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
            />
        </label>
    )

};

export default ThemeSwitcher;