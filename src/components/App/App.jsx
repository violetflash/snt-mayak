import React, { useLayoutEffect, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {ThemeContext} from "../../context/ThemeProvider/ThemeProvider";
import {addConditionedStyle} from "../../functions/functions";
import {useFirebase} from '../../context/FirebaseProvider/FirebaseProvider';

import Header from '../Header/';
import Nav from "../Nav/";
import MainPage from '../Pages/MainPage/';
import AboutPage from '../Pages/AboutPage/';
import DocumentsPage from '../Pages/DocumentsPage/';
import PaymentsPage from '../Pages/PaymentsPage/';
import OffersPage from '../Pages/OffersPage/';
import ContactsPage from '../Pages/ContactsPage/';
import ContentControl from '../Pages/ContentControl/';
import Login from "../Login/";
import UserSettings from "../Pages/UserSettings";
import s from './App.module.scss';
import EmailConfirmPopup from "../EmailConfirmPopup";


const App = () => {
  const { showPopup, setShowPopup } = useFirebase();
  const { mode } = useContext(ThemeContext);
  const appClass = mode === 'light' ?
    addConditionedStyle(mode === 'light', [s.App], s.lightTheme) :
    addConditionedStyle(mode === 'dark', [s.App], s.darkTheme);

  const { setSlidersStartParams, updateReduxDynamicDataState } = useFirebase();

  //TODO переделать эту инициализацию через итерацию ключей dynamicData в ReduxStore
  useLayoutEffect(() => {
    setSlidersStartParams();
    updateReduxDynamicDataState('news');
    updateReduxDynamicDataState('announce');

  }, [setSlidersStartParams, updateReduxDynamicDataState]);

  useEffect(() => {
    const showEmailConfirmPopup = () => {

      if (showPopup) {
        setTimeout(() => {
          setShowPopup(false);
        }, 10000);
      }
    };

    showEmailConfirmPopup();

    return showEmailConfirmPopup;
  }, [showPopup, setShowPopup]);




  const confirmEmailPopup = showPopup ? <EmailConfirmPopup/> : null;

  return (
    <Router>
      <div className={appClass.join(' ')}>
        <Header/>
        <Nav/>
        <Switch>
          <Route path="/" component={MainPage} exact/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/documents" component={DocumentsPage}/>
          <Route path="/payments" component={PaymentsPage}/>
          <Route path="/offers" component={OffersPage}/>
          <Route path="/contacts" component={ContactsPage}/>
          <Route path="/user-settings" component={UserSettings}/>
          <Route path="/content-control" component={ContentControl}/>
          <Redirect to="/" exact/>
        </Switch>
        <Login/>
        {confirmEmailPopup}
      </div>
    </Router>
  );
};

export default App;
