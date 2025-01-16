import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import React from 'react';
import {Provider} from 'react-redux';
import AppInitializer from './AppInitializer';
import {store} from './src/redux-store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppInitializer>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </AppInitializer>
    </Provider>
  );
};

export default App;
