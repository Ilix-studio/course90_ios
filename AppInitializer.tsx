// AppInitializer.tsx
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from './src/redux-store/store';
import {loadPasskey} from './utils/storage';
import {setPasskey} from './src/redux-store/slices/authSlice';

const AppInitializer = ({children}: {children: React.ReactNode}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const initializeAuth = async () => {
      const passkey = await loadPasskey();
      if (passkey) {
        dispatch(setPasskey(passkey));
      }
    };

    initializeAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default AppInitializer;
