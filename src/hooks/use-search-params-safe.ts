'use client';
import { useSearchParams } from 'next/navigation';

// Safe hook that can be used within Suspense boundaries
export function useSearchParamsSafe() {
  return useSearchParams();
}

// Helper function to get language parameter
export function useLangParam(): string {
  const searchParams = useSearchParamsSafe();
  return searchParams?.get('lang') || 'vi';
}
