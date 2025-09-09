'use client';
import React from "react";
import { useApp } from "@/contexts/app-context";

export default function LanguageSwitcher() {
  const { currentLang, setLanguage, isClient } = useApp();
  
  // Prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div style={{position:'fixed', right: 16, bottom: 16, zIndex: 9999}} className="desktop-language-switcher">
      <div style={{background:'#111', color:'#fff', padding:'6px 10px', borderRadius: 8, fontSize: 12, display:'flex', gap:8, alignItems:'center'}}>
        <button onClick={() => setLanguage('vi')} style={{background:'transparent', color: currentLang==='vi' ? '#00E5A1' : '#fff', border:'none', cursor:'pointer'}}>VN</button>
        <span style={{opacity:0.5}}>|</span>
        <button onClick={() => setLanguage('en')} style={{background:'transparent', color: currentLang==='en' ? '#00E5A1' : '#fff', border:'none', cursor:'pointer'}}>EN</button>
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-language-switcher {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}


