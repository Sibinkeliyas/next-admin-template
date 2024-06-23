'use client'
import { useSelector } from '@/store';
import { useRouter } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import React, { useEffect } from 'react';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) router.push('/signin');
    // eslint-disable-next-line
  }, [isAuthenticated]);

  if(!isAuthenticated) return <NextTopLoader />;

  return children;
};

export default AuthGuard;
