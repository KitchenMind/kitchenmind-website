'use client';
import { Suspense } from 'react';
import { AppProvider } from './app-context';

interface AppProviderWrapperProps {
  children: React.ReactNode;
}

export function AppProviderWrapper({ children }: AppProviderWrapperProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppProvider>
        {children}
      </AppProvider>
    </Suspense>
  );
}
