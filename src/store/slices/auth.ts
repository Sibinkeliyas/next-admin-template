// types
import { DefaultRootStateProps } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

// project imports


// initial state
const initialState: DefaultRootStateProps['userProfile'] = {
  error: null,
  isInitialized: false,
  isAuthenticated: false,
  user: null
};

// ==============================|| SLICE - AUTHENTICATION ||============================== //

const authentication = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // has error
    hasError(state, action) {
      state.error = action.payload;
    },
    userLoginSuccess: (state, action) => {
      state.isInitialized = true
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    userLogoutSuccess: (state) => {
      state.isInitialized = true
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

export default authentication.reducer;

export const { userLoginSuccess, userLogoutSuccess, hasError } = authentication.actions;



