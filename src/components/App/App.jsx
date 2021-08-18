import React from 'react';

import Header from '../Header/';
import MainPage from '../Pages/MainPage/';
import AboutPage from '../Pages/AboutPage/';
import DocumentsPage from '../Pages/DocumentsPage/';
import PaymentsPage from '../Pages/PaymentsPage/';
import ContactsPage from '../Pages/ContactsPage/';

import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <Header />
            <MainPage />
            <AboutPage />
            <DocumentsPage />
            <PaymentsPage />
            <ContactsPage />
        </Router>

    );

};

export default App;
