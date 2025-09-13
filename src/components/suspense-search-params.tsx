'use client';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { ReactNode, Suspense } from 'react';

interface SuspenseSearchParamsProps {
  children: (searchParams: ReadonlyURLSearchParams) => ReactNode;
  fallback?: ReactNode;
}

// Component that uses useSearchParams and passes it to children
function SearchParamsProvider({ children }: { children: (searchParams: ReadonlyURLSearchParams) => ReactNode }) {
  const searchParams = useSearchParams();

  // Handle the case where searchParams might be null
  if (!searchParams) {
    return null;
  }

  return <>{children(searchParams)}</>;
}

const SuspenseSearchParams = ({ children, fallback = <div>Loading...</div> }: SuspenseSearchParamsProps) => {
  return (
    <Suspense fallback={fallback}>
      <SearchParamsProvider>
        {children}
      </SearchParamsProvider>
    </Suspense>
  );
};

export default SuspenseSearchParams;
