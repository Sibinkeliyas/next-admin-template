'use client';
import React from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { JWTProvider } from '@/context/jwtContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Provider store={store}>
          <JWTProvider>
            <>{children}</>
          </JWTProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}
