'use client';

import React, { useEffect } from 'react';

// third-party
import jwtDecode from 'jwt-decode';
import { DefaultRootStateProps } from '@/types';
import { dispatch, useDispatch, useSelector } from '@/store';
import { Api_endpoint } from '@/types/enum';
import axios from '@/utils/axios';
import { userLoginSuccess, userLogoutSuccess } from '@/store/slices/auth';
import NextTopLoader from 'nextjs-toploader';


// constant
export const initialState: DefaultRootStateProps['userProfile'] = {
  isAuthenticated: false,
  isInitialized : false,
  user: null
};

export const setSession = (serviceToken?: string | null) => {
  if (serviceToken) localStorage.setItem('accessToken', serviceToken);
  else localStorage.removeItem('accessToken');
};


export const verifyToken: (st: string) => boolean = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded: any = jwtDecode(serviceToken);
  return decoded.exp > Date.now() / 1000;
};


export async function userLogin(email: string, password: string) {
  try {
    const res = await axios.post(`${Api_endpoint.user_auth}`, {
      email,
      password
    });
    if (res.data.status) setSession(res.data.user.accessToken);
    dispatch(userLoginSuccess(res.data.user));
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function userLogout() {
    setSession(null)
    dispatch(userLogoutSuccess())
}

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const dispatch = useDispatch();
  const { isInitialized } = useSelector((state) => state.authReducer)

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = localStorage.getItem('accessToken');
        if (serviceToken && verifyToken(serviceToken)) {
          const res = await axios.get(`${Api_endpoint.user_auth}`)
          dispatch(userLoginSuccess(res.data.user));
        } else {
          dispatch(userLogoutSuccess());
        }
      } catch (err) {
        dispatch(userLogoutSuccess());
      }
    };
    init();
  }, [dispatch]);
 if (isInitialized !== undefined && !isInitialized) {
   return <NextTopLoader />;
 }
  return <>{children}</>;
};
