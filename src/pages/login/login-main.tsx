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
import { useSearchParams } from "next/navigation";

const LoginMain = () => {
  const lang = useSearchParams()?.get('lang') || 'vi';
  const texts = lang === 'en' 
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
                <Link href={`/?lang=${lang}`} className="mongodb-back-btn">
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
              <div className="mongodb-image-overlay">
                <div className="mongodb-overlay-content">
                  <h2 className="mongodb-overlay-title">
                    {lang === 'en' ? 'Welcome to KitchenMind' : 'Chào mừng đến với KitchenMind'}
                  </h2>
                  <p className="mongodb-overlay-subtitle">
                    {lang === 'en'
                      ? 'Discover amazing recipes and cooking tips from our community of food lovers.'
                      : 'Khám phá những công thức nấu ăn tuyệt vời và mẹo vặt từ cộng đồng yêu ẩm thực.'
                    }
                  </p>
                  <div className="mongodb-overlay-features">
                    <div className="mongodb-feature-item">
                      <span className="mongodb-feature-icon">🍳</span>
                      <span className="mongodb-feature-text">
                        {lang === 'en' ? 'Smart Recipe Suggestions' : 'Gợi ý công thức thông minh'}
                      </span>
                    </div>
                    <div className="mongodb-feature-item">
                      <span className="mongodb-feature-icon">👥</span>
                      <span className="mongodb-feature-text">
                        {lang === 'en' ? 'Community Sharing' : 'Chia sẻ cộng đồng'}
                      </span>
                    </div>
                    <div className="mongodb-feature-item">
                      <span className="mongodb-feature-icon">📱</span>
                      <span className="mongodb-feature-text">
                        {lang === 'en' ? 'Mobile Friendly' : 'Thân thiện di động'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginMain;
