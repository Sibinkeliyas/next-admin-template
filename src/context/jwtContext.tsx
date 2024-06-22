'use client';

import React, { useEffect } from 'react';

// third-party
// import jwtDecode from 'jwt-decode';
import { DefaultRootStateProps } from '@/types';
import { useDispatch } from '@/store';
import { userLogin, userLogout } from '@/store/slices/auth';


// constant
export const initialState: DefaultRootStateProps['userProfile'] = {
  isAuthenticated: false,
  user: null
};

export const setSession = (serviceToken?: string | null) => {
  if (serviceToken) localStorage.setItem('accessToken', serviceToken);
  else localStorage.removeItem('accessToken');
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = localStorage.getItem('accessToken');

        if (serviceToken) {
          const userData = { email: '', id: '' };
          dispatch(userLogin(userData));
        } else {
          dispatch(userLogout());
        }
      } catch (err) {
        dispatch(userLogout());
      }
    };
    init();
  }, [dispatch]);

  return <>{children}</>;
};
