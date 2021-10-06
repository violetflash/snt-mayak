import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import { Provider } from 'react-redux';
import { store } from './redux';
import ThemeProvider from "./context/ThemeProvider/";
import AuthProvider from "./context/FirebaseProvider/";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

