'use client';
import { useSelector } from '@/store';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const LoginGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) router.back();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return children;
};

export default LoginGuard;
