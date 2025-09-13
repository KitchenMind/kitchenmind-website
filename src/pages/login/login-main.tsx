"use client";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { gsap } from "gsap";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import logo from "@/assets/img/logo/logo.png";
import LoginForm from "@/components/form/login-form";
import SocialLogin from "@/components/form/social-login";
import ThemeSetting from "@/components/theme-setting";

// Import necessary
import { useLanguage } from "@/hooks/use-language";

const LoginMain = () => {
  const { currentLang } = useLanguage();
  const texts = currentLang === 'en'
    ? { 
      
    
        noAccount: "Don't have an account?", 
        signUp: 'Create Account', 
        or: 'Or continue with email',
        backToHome: 'Back to Home'
      } 
    : { 
     
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
              {/* Back to Home Button */}
              <div className="mongodb-back-home">
                <Link href={`/?lang=${currentLang}`} className="mongodb-back-btn">
                  <span className="mongodb-back-icon">←</span>
                  <span className="mongodb-back-text">{texts.backToHome}</span>
                </Link>
              </div>

              {/* Logo Section */}
              <div className="mongodb-auth-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt="KitchenMind" className="mongodb-logo-img" />
              </div>

              {/* Welcome Text */}

              {/* Social Login */}
              <div className="mongodb-social-section">
                <SocialLogin lang={currentLang} />
              </div>

              {/* Divider */}
              <div className="mongodb-divider">
                <div className="mongodb-divider-line"></div>
                <span className="mongodb-divider-text">{texts.or}</span>
                <div className="mongodb-divider-line"></div>
              </div>

              {/* Login Form */}
              <div className="mongodb-form-section">
                <LoginForm lang={currentLang} />
              </div>

              {/* Footer Links */}
              <div className="mongodb-auth-footer">
                <p className="mongodb-signup-link">
                  {texts.noAccount} <Link href={`/register?lang=${currentLang}`} className="mongodb-link">{texts.signUp}</Link>
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
