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
import SocialLogin from "@/components/form/social-login";
import LoginForm from "@/components/form/login-form";
import ThemeSetting from "@/components/theme-setting";

// Import necessary
import { useSearchParams } from "next/navigation";

const LoginMain = () => {
  const lang = useSearchParams()?.get('lang') || 'vi';
  const texts = lang === 'en' 
    ? { 
        title: 'Welcome Back to KitchenMind', 
        subtitle: 'Sign in to your account to continue',
        noAccount: "Don't have an account?", 
        signUp: 'Create Account', 
        or: 'Or continue with email',
        backToHome: 'Back to Home'
      } 
    : { 
        title: 'Chào Mừng Trở Lại KitchenMind', 
        subtitle: 'Đăng nhập để tiếp tục quản lý nhà bếp thông minh',
        noAccount: 'Chưa có tài khoản?', 
        signUp: 'Tạo Tài Khoản', 
        or: 'Hoặc tiếp tục với email',
        backToHome: 'Về Trang Chủ'
      };

  useScrollSmooth();

  return (
    <>
      {/* MongoDB-style login page - 2 column layout */}
      <main className="mongodb-auth-main">
        {/* Theme Toggle */}
        <div className="mongodb-theme-toggle">
          <ThemeSetting />
        </div>

        <div className="mongodb-auth-layout">
          {/* Left Side - Login Form */}
          <div className="mongodb-auth-left">
            <div className="mongodb-auth-content">
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

              {/* Login Form */}
              <div className="mongodb-form-section">
                <LoginForm lang={lang} />
              </div>

              {/* Footer Links */}
              <div className="mongodb-auth-footer">
                <p className="mongodb-signup-link">
                  {texts.noAccount} <Link href={`/register?lang=${lang}`} className="mongodb-link">{texts.signUp}</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Full Image */}
          <div className="mongodb-auth-right">
            <div className="mongodb-full-image">
              {/* Background image will be set via CSS */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginMain;
