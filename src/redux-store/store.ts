import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import {passkeyApi} from './rtk-query_apis/authApi';
import authReducer from './slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  [passkeyApi.reducerPath]: passkeyApi.reducer,
});

// Redux-Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], // Only persist the 'auth' slice
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignore Redux-Persist actions
      },
    }).concat(passkeyApi.middleware), // Add RTK Query middleware
});

// Create a persistor
export const persistor = persistStore(store);

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
