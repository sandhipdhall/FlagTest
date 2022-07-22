/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './theme/theme';
import store from './redux/store';
import Routes from './routes';
import Loader from './components/Loader/Loader';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Loader>
          <Routes />
        </Loader>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
