'use client';
import { useApp } from "@/contexts/app-context";

export type Language = 'vi' | 'en';

// Use the app context instead of direct useSearchParams
export function useLanguage() {
  const { currentLang, isClient } = useApp();

  // Get stored language from localStorage
  const getStoredLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('liko-language');
      return (stored as Language) || 'vi';
    }
    return 'vi';
  };

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
