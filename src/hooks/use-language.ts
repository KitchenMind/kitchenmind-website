'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type Language = 'vi' | 'en';

export function useLanguage() {
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);
  
  // Get stored language from localStorage
  const getStoredLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('liko-language');
      return (stored as Language) || 'vi';
    }
    return 'vi';
  };
  
  // Get current language priority: URL > localStorage > default
  const getCurrentLanguage = (): Language => {
    const urlLang = searchParams?.get('lang');
    if (urlLang === 'en') return 'en';
    if (isClient) {
      return getStoredLanguage();
    }
    return 'vi';
  };
  
  const currentLang = getCurrentLanguage();
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Save language to localStorage
  const saveLanguage = (lang: Language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('liko-language', lang);
    }
  };
  
  return {
    currentLang,
    isClient,
    saveLanguage,
    getStoredLanguage
  };
}
