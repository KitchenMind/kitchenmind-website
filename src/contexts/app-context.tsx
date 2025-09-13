'use client';
import { useTheme } from 'next-themes';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'vi' | 'en';

interface AppContextType {
  // Language
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  
  // Theme
  theme: string | undefined;
  setTheme: (theme: string) => void;
  
  // Utils
  isClient: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>('vi');
  
  // Use resolvedTheme for better theme detection
  const currentTheme = isClient ? (resolvedTheme || theme) : 'light';

  // Get stored language from localStorage
  const getStoredLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('liko-language');
      return (stored as Language) || 'vi';
    }
    return 'vi';
  };

  // Initialize on client side
  useEffect(() => {
    setIsClient(true);
    
    // Initialize language
    const urlLang = searchParams?.get('lang');
    const storedLang = getStoredLanguage();
    
    if (urlLang === 'en') {
      setCurrentLang('en');
      localStorage.setItem('liko-language', 'en');
    } else if (storedLang === 'en' && !urlLang) {
      // Auto-restore from localStorage
      setCurrentLang('en');
      const params = new URLSearchParams(searchParams?.toString());
      params.set('lang', 'en');
      router.replace(`${pathname}?${params.toString()}`);
    } else {
      setCurrentLang('vi');
      if (storedLang !== 'vi') {
        localStorage.setItem('liko-language', 'vi');
      }
    }
  }, [searchParams, pathname, router]);

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('liko-language', lang);
    }
    
    // Update URL
    const params = new URLSearchParams(searchParams?.toString() || '');
    if (lang === 'vi') {
      params.delete('lang');
    } else {
      params.set('lang', 'en');
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  const value: AppContextType = {
    currentLang,
    setLanguage,
    theme: currentTheme,
    setTheme,
    isClient,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
