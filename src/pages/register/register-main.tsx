"use client";
import { gsap } from "gsap";
import React from "react";
import Link from "next/link";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderTwelve from "@/layouts/headers/header-twelve";
import FooterTwo from "@/layouts/footers/footer-two";
import RegisterForm from "@/components/form/register-form";
import SocialLogin from "@/components/form/social-login";
import ThemeSetting from "@/components/theme-setting";

// Import necessary
import { useSearchParams } from "next/navigation";

const RegisterMain = () => {
  const lang = useSearchParams()?.get('lang') || 'vi';
  const texts = lang === 'en' 
    ? { 
        title: 'Create Your KitchenMind Account', 
        subtitle: 'Join us to start managing your kitchen smartly',
        haveAccount: "Already have an account?", 
        signIn: 'Sign In', 
        or: 'Or continue with email',
        backToHome: 'Back to Home'
      } 
    : { 
        title: 'Tạo Tài Khoản KitchenMind', 
        subtitle: 'Bắt đầu hành trình quản lý nhà bếp thông minh',
        haveAccount: 'Đã có tài khoản?', 
        signIn: 'Đăng Nhập', 
        or: 'Hoặc tiếp tục với email',
        backToHome: 'Về Trang Chủ'
      };

  useScrollSmooth();

  return (
    <>
      {/* MongoDB-style register page - 2 column layout */}
      <main className="mongodb-auth-main">
        {/* Theme Toggle */}
        <div className="mongodb-theme-toggle">
          <ThemeSetting />
        </div>

        <div className="mongodb-auth-layout">
          {/* Left Side - Register Form */}
          <div className="mongodb-auth-left">
            <div className="mongodb-auth-content">
              {/* Back to Home Button */}
              <div className="mongodb-back-home">
                <Link href={`/?lang=${lang}`} className="mongodb-back-btn">
                  <span className="mongodb-back-icon">←</span>
                  <span className="mongodb-back-text">{texts.backToHome}</span>
                </Link>
              </div>

              {/* Logo Section */}
              <div className="mongodb-auth-logo">
                <img src="https://placehold.co/120x40?text=KitchenMind&bg=FF6A00&color=white" alt="KitchenMind" className="mongodb-logo-img" />
              </div>

              {/* Welcome Text */}
              <div className="mongodb-auth-welcome">
                <h2 className="mongodb-welcome-title">{texts.title}</h2>
                <p className="mongodb-welcome-subtitle">{texts.subtitle}</p>
              </div>

              {/* Social Login */}
              <div className="mongodb-social-section">
                <SocialLogin lang={lang} />
              </div>

              {/* Divider */}
              <div className="mongodb-divider">
                <div className="mongodb-divider-line"></div>
                <span className="mongodb-divider-text">{texts.or}</span>
                <div className="mongodb-divider-line"></div>
              </div>

              {/* Register Form */}
              <div className="mongodb-form-section">
                <RegisterForm lang={lang} />
              </div>

              {/* Footer Links */}
              <div className="mongodb-auth-footer">
                <p className="mongodb-signup-link">
                  {texts.haveAccount} <Link href={`/login?lang=${lang}`} className="mongodb-link">{texts.signIn}</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Full Image */}
          <div className="mongodb-auth-right">
            <div className="mongodb-full-image mongodb-full-image-register">
              {/* Background image will be set via CSS */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterMain;
