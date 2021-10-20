import React, { useLayoutEffect, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { useSelector } from 'react-redux';

import {ThemeContext} from "../../context/ThemeProvider/ThemeProvider";
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
import EmailConfirmPopup from "../EmailConfirmPopup";
import Footer from "../Footer/Footer";
import {ContentFlexWrapper, PageContainer, PageContent} from "./styles";


const App = () => {
  const activeNavID = useSelector(state => state.interface.activeNavID);
  const { showPopup, setShowPopup } = useFirebase();
  const { mode } = useContext(ThemeContext);
  const { setSlidersStartParams, updateReduxData } = useFirebase();

  //TODO переделать эту инициализацию через итерацию ключей dynamicData в ReduxStore
  useLayoutEffect(() => {
    // console.log('updateReduxData from App');
    setSlidersStartParams();
    updateReduxData('news');
    updateReduxData('announce');

  }, [setSlidersStartParams, updateReduxData]);

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
      <PageContainer mode={mode}>
        <ContentFlexWrapper>
          <PageContent>
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
          </PageContent>
          <Footer num={activeNavID}/>
        </ContentFlexWrapper>
        <Login/>
        {confirmEmailPopup}
      </PageContainer>
    </Router>
  );
};

export default App;
