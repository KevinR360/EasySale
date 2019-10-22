import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import store from './store';

import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Provider>
    </>
  );
}

export default App;
