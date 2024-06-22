// types
import { DefaultRootStateProps } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

// project imports


// initial state
const initialState: DefaultRootStateProps['userProfile'] = {
  error: null,
  isAuthenticated: false,
  user : null
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
    userLogin: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    userLogout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

export default authentication.reducer;

export const { userLogin, userLogout } = authentication.actions;

