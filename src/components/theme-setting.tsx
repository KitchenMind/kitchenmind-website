'use client';
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const  ThemeSetting = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [settingOpen, setSettingOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme for more reliable theme detection
  const currentTheme = mounted ? (resolvedTheme || theme) : 'light';

  function handleOpenSetting() {
    setSettingOpen(!settingOpen);
  };

  // Handle theme change with immediate feedback
  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  // Show loading state until mounted
  if (!mounted) {
    return (
      <div className="tp-theme-settings-area transition-3">
        <div className="tp-theme-wrapper">
          <div className="tp-theme-settings">
            <div className="tp-theme-settings-wrapper">
              <div className="tp-theme-settings-open">
                <button className="tp-theme-settings-open-btn">
                  <span className="tp-theme-settings-gear">
                    <i className="fa-light fa-gear"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`tp-theme-settings-area transition-3 desktop-theme-setting ${
        settingOpen ? "settings-opened" : ""
      }`}
    >
      <div className="tp-theme-wrapper">
        <div className="tp-theme-header text-center">
          <h4 className="tp-theme-header-title">Liko Mode Settings</h4>
        </div>

        <div className="tp-theme-dir mb-20">
          <label className={`tp-theme-dir-main ${currentTheme === 'dark' ? 'dark-active' : ''}`}>
            <span
              onClick={() => handleThemeChange("dark")}
              className={`tp-theme-dir-rtl ${currentTheme === "dark" ? "active" : ""}`}
            >
              Dark
            </span>
            <span
              onClick={() => handleThemeChange("light")}
              className={`tp-theme-dir-ltr ${currentTheme === "light" ? "active" : ""}`}
            >
              Light
            </span>
            <i className="tp-theme-dir-slide"></i>
          </label>
        </div>

        <div className="tp-theme-settings">
          <div className="tp-theme-settings-wrapper">
            <div className="tp-theme-settings-open">
              <button
                className="tp-theme-settings-open-btn"
                onClick={handleOpenSetting}
              >
                <span className="tp-theme-settings-gear">
                  <i className="fa-light fa-gear"></i>
                </span>
                <span className="tp-theme-settings-close">
                  <i className="fa-regular fa-xmark"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-theme-setting {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ThemeSetting), {
  ssr: false
})
