import React from 'react';

import Header from '../Header/';
import MainPage from '../Pages/MainPage/';
import AboutPage from '../Pages/AboutPage/';
import DocumentsPage from '../Pages/DocumentsPage/';
import PaymentsPage from '../Pages/PaymentsPage/';
import ContactsPage from '../Pages/ContactsPage/';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <Header />
            <Switch >
                <Route path="/main" component={MainPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/documents" component={DocumentsPage} />
                <Route path="/payments" component={PaymentsPage} />
                <Route path="/contacts" component={ContactsPage} />
                <Redirect to="/main" />
            </Switch>

        </Router>
    );

};

export default App;
