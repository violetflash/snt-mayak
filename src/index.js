import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';


import ThemeProvider from "./context/ThemeProvider/";
import AuthProvider from "./context/FirebaseProvider/";

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

