import React, { useContext } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";
import { addConditionedStyle } from "../../functions/functions";

import useNavLink from '../../hooks/useNavLink/'

import Header from '../Header/';
import Nav from "../Nav/";
import MainPage from '../Pages/MainPage/';
import AboutPage from '../Pages/AboutPage/';
import DocumentsPage from '../Pages/DocumentsPage/';
import PaymentsPage from '../Pages/PaymentsPage/';
import OffersPage from '../Pages/OffersPage/';
import ContactsPage from '../Pages/ContactsPage/';
import Login from "../Login/";
import UserSettings from "../Pages/UserSettings";
import useLogin from '../../hooks/useLogin/useLogin';

import Context from '../../context/context';
import s from './App.module.scss';


const App = () => {
    const { mode } = useContext(ThemeContext);
    const appClass = mode === 'light' ?
        addConditionedStyle(mode === 'light', [s.App], s.lightTheme) :
        addConditionedStyle(mode === 'dark', [s.App], s.darkTheme);

    const { loginIsOpened, setLoginIsOpened } = useLogin();
    const { activeLink, setActiveLink } = useNavLink();

    const value = {
        loginIsOpened, setLoginIsOpened,
        activeLink, setActiveLink
    }

    return (
        <Context.Provider value={value}>
            <Router>
                <div className={appClass.join(' ')}>
                    <Header />
                    <Nav />
                    <Switch >
                        <Route path="/main" component={MainPage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/documents" component={DocumentsPage} />
                        <Route path="/payments" component={PaymentsPage} />
                        <Route path="/offers" component={OffersPage} />
                        <Route path="/contacts" component={ContactsPage} />
                        <Route path="/user-settings" component={UserSettings} />
                        <Redirect to="/main" />
                    </Switch>
                    <Login/>
                </div>
            </Router>
        </Context.Provider>
    );

};

export default App;
