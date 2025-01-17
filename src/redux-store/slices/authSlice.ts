import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  passkey: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  passkey: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPasskey: (state, action: PayloadAction<string>) => {
      state.passkey = action.payload;
      state.isAuthenticated = true;
    },
    clearPasskey: state => {
      state.passkey = null;
      state.isAuthenticated = false;
    },
  },
});
export const {setPasskey, clearPasskey} = authSlice.actions;
export default authSlice.reducer;
