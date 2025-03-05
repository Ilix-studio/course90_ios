import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import React from 'react';
import {Provider} from 'react-redux';

import {store, persistor} from './src/redux-store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          backgroundColor="#152A38" // Match your dark app background
          barStyle="light-content" // For light text/icons in the status bar
          translucent={false}
        />
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
