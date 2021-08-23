import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';

import ThemeProvider from "./context/ThemeProvider/";
import AuthProvider from "./context/AuthProvider/";

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

