import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
import logo from "@/assets/img/logo/logo.png";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({openOffcanvas,setOpenOffcanvas}: IProps) {
  const searchParams = useSearchParams();
  const { setTheme, theme, resolvedTheme } = useTheme();
  const lang = searchParams?.get('lang') || 'vi';
  
  const texts = lang === 'en' ? {
    getStarted: 'Get Started',
    joinUs: 'Join us today!',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode'
  } : {
    getStarted: 'Bắt Đầu',
    joinUs: 'Tham gia cùng chúng tôi hôm nay!',
    darkMode: 'Chế độ tối',
    lightMode: 'Chế độ sáng'
  };

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="#">
                <Image src={logo} alt="logo" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus/>
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <a href="#">
                        <Image src={item} alt="gallery-img" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <a href="tel:1245654">+ 4 20 7700 1007</a>
                </li>
                <li>
                  <a href="mailto:hello@diego.com">hello@diego.com</a>
                </li>
                <li>
                  <a href="#">Avenue de Roma 158b, Lisboa</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href="#"><InstagramTwo /></a>
                </li>
                <li>
                  <a href="#"><Dribble /></a>
                </li>
                <li>
                  <a href="#"> <Behance /></a>
                </li>
                <li>
                  <a href="#"><Youtube /></a>
                </li>
              </ul>
            </div>

            {/* Theme Toggle */}
            <div className="tp-offcanvas-theme-toggle">
              <h3 className="tp-offcanvas-title sm">Theme</h3>
              <div className="tp-mobile-theme-switcher">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`tp-mobile-theme-btn ${resolvedTheme === 'light' ? 'active' : ''}`}
                >
                  <span className="tp-theme-icon">☀️</span>
                  <span className="tp-theme-text">{texts.lightMode}</span>
                </button>
                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`tp-mobile-theme-btn ${resolvedTheme === 'dark' ? 'active' : ''}`}
                >
                  <span className="tp-theme-icon">🌙</span>
                  <span className="tp-theme-text">{texts.darkMode}</span>
                </button>
              </div>
            </div>
            
            {/* Get Started CTA - Special Mobile Button */}
            <div className="tp-offcanvas-cta-special">
              <Link href="/register" className="tp-btn-get-started-mobile-special">
                <div className="tp-btn-content">
                  <span className="tp-btn-icon">🚀</span>
                  <div className="tp-btn-text-wrapper">
                    <span className="tp-btn-main-text">{texts.getStarted}</span>
                    <span className="tp-btn-sub-text">{texts.joinUs}</span>
                  </div>
                  <span className="tp-btn-arrow">→</span>
                </div>
                <div className="tp-btn-glow"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>

      <style jsx global>{`
        /* Mobile Theme Toggle */
        .tp-offcanvas-theme-toggle {
          margin-top: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tp-mobile-theme-switcher {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .tp-mobile-theme-btn {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tp-mobile-theme-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .tp-mobile-theme-btn.active {
          background: linear-gradient(135deg, #FF6A00, #FFA437);
          border-color: #FF6A00;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(255, 106, 0, 0.3);
        }

        .tp-theme-icon {
          font-size: 16px;
        }

        .tp-theme-text {
          font-size: 13px;
        }

        /* Special Get Started Button */
        .tp-offcanvas-cta-special {
          position: sticky;
          bottom: 0;
          margin-top: 40px;
          padding: 20px 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.95) 100%);
          backdrop-filter: blur(10px);
        }

        .tp-btn-get-started-mobile-special {
          display: block;
          position: relative;
          text-decoration: none;
          overflow: hidden;
          border-radius: 16px;
          background: linear-gradient(135deg, #FF6A00 0%, #FFA437 100%);
          box-shadow: 
            0 8px 32px rgba(255, 106, 0, 0.3),
            0 4px 16px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .tp-btn-get-started-mobile-special:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 12px 48px rgba(255, 106, 0, 0.4),
            0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .tp-btn-content {
          display: flex;
          align-items: center;
          padding: 18px 24px;
          position: relative;
          z-index: 2;
        }

        .tp-btn-icon {
          font-size: 24px;
          margin-right: 16px;
          animation: tp-rocket-bounce 2s ease-in-out infinite;
        }

        .tp-btn-text-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .tp-btn-main-text {
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 2px;
        }

        .tp-btn-sub-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.2;
        }

        .tp-btn-arrow {
          color: #ffffff;
          font-size: 20px;
          font-weight: bold;
          margin-left: 12px;
          transition: transform 0.3s ease;
        }

        .tp-btn-get-started-mobile-special:hover .tp-btn-arrow {
          transform: translateX(4px);
        }

        .tp-btn-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tp-btn-get-started-mobile-special:hover .tp-btn-glow {
          opacity: 1;
        }

        /* Rocket bounce animation */
        @keyframes tp-rocket-bounce {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-3px) rotate(2deg);
          }
          50% {
            transform: translateY(-1px) rotate(-1deg);
          }
          75% {
            transform: translateY(-2px) rotate(1deg);
          }
        }

        /* Dark mode styles */
        .dark .tp-mobile-theme-btn {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .dark .tp-mobile-theme-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .dark .tp-offcanvas-cta-special {
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.98) 100%);
        }

        /* Responsive */
        @media (max-width: 480px) {
          .tp-btn-content {
            padding: 16px 20px;
          }
          
          .tp-btn-icon {
            font-size: 20px;
            margin-right: 12px;
          }
          
          .tp-btn-main-text {
            font-size: 16px;
          }
          
          .tp-btn-sub-text {
            font-size: 12px;
          }
          
          .tp-mobile-theme-switcher {
            flex-direction: column;
            gap: 8px;
          }
          
          .tp-mobile-theme-btn {
            justify-content: center;
            padding: 14px 16px;
          }
        }
      `}</style>
    </>
  );
}
