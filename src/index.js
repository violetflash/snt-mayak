import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';


import './index.scss';
import ThemeProvider from "./context/ThemeProvider/ThemeProvider";

ReactDOM.render(
    <ThemeProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
);

