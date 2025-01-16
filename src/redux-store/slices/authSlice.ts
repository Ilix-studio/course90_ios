import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  passkey: string | null;
}

const initialState: AuthState = {
  passkey: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPasskey: (state, action: PayloadAction<string>) => {
      state.passkey = action.payload;
    },
    clearPasskey: state => {
      state.passkey = null;
    },
  },
});
export const {setPasskey, clearPasskey} = authSlice.actions;
export default authSlice.reducer;
