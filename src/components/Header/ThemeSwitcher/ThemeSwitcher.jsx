import React, { useState, useContext, useEffect } from 'react';
import Switch from "react-switch";

import { ThemeContext } from "../../../context/ThemeProvider/ThemeProvider";

import s from './ThemeSwitcher.module.scss';
import sun from './icons/sun.svg';
import moon from './icons/moon.svg';

const LS_THEME_KEY = 'Mayak-theme';

const ThemeSwitcher = () => {
    const initialState = !!(localStorage.getItem(LS_THEME_KEY) &&
        JSON.parse(localStorage.getItem(LS_THEME_KEY)) === 'dark');

    const [checked, setChecked] = useState(initialState);
    const { mode, setMode } = useContext(ThemeContext);

    const switchHandler = () => {
        setChecked(() => !checked);
        setMode();
    };

    useEffect(() => {
        localStorage.setItem(LS_THEME_KEY, JSON.stringify(mode));
    }, [mode]);

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
                onHandleColor="#282c34"
                handleDiameter={20}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={34}
            />
        </label>
    )

};

export default ThemeSwitcher;