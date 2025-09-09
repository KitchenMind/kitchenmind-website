'use client';
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
// Removed Leaf icon for clean modern design

const AppDownload = () => {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  const texts = lang === 'en' ? {
    subtitle: 'Download Now',
    title: 'Get KitchenMind on Your Phone',
    desc1: "Transform your kitchen into your smart assistant.",
    desc2: "Available on Google Play & App Store.",
    downloadText: 'Download the app and start your smart kitchen journey today!'
  } : {
    subtitle: 'Tải Ngay',
    title: 'Tải KitchenMind về điện thoại',
    desc1: 'Biến nhà bếp thành trợ lý thông minh của bạn.',
    desc2: 'Có mặt trên Google Play & App Store.',
    downloadText: 'Tải ứng dụng và bắt đầu hành trình nhà bếp thông minh ngay hôm nay!'
  };
  
  return (
    <div className="tp-app-download-area pt-140 pb-140 tp-app-download-bg">
      <div className="container container-1870">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            {/* Glassmorphism Card */}
            <div className="tp-app-download-glass-card">
              <div className="tp-app-download-content text-center">
                <span className="tp-section-subtitle-3 tp-app-download-subtitle tp_fade_bottom">
                  {texts.subtitle}
                </span>
                <h1 className="tp-app-download-main-title tp-char-animation">
                  {texts.title}
                </h1>
                <div className="tp-app-download-desc-wrapper">
                  <p className="tp-app-download-desc-line1 tp_fade_bottom">
                    {texts.desc1}
                  </p>
                  <p className="tp-app-download-desc-line2 tp_fade_bottom">
                    {texts.desc2}
                  </p>
                </div>
                
                {/* Big CTA Buttons */}
                <div className="tp-app-download-buttons-wrapper tp_fade_bottom">
                  <div className="tp-app-download-buttons d-flex justify-content-center gap-4">
                    <a 
                      href="#" 
                      className="tp-app-download-btn-large tp-btn-bounce"
                    >
                      <Image 
                        src="/assets/img/logo/chplay.png" 
                        alt="Get it on Google Play"
                        width={300}
                        height={100}
                        style={{borderRadius: '16px', objectFit: 'contain'}}
                      />
                    </a>
                    <a 
                      href="#" 
                      className="tp-app-download-btn-large tp-btn-bounce"
                    >
                      <Image 
                        src="/assets/img/logo/appstore.svg" 
                        alt="Download on the App Store"
                        width={300}
                        height={100}
                        style={{borderRadius: '16px', objectFit: 'contain'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3D Smartphone Mockup */}
        <div className="row justify-content-center mt-5">
          <div className="col-xl-6 col-lg-8">
            <div className="tp-app-download-mockup text-center">
              <div className="tp-smartphone-3d tp_fade_bottom">
                <Image 
                  src="https://placehold.co/350x700/FF6A00/FFFFFF?text=KitchenMind+Dashboard&font=roboto" 
                  alt="KitchenMind App Dashboard"
                  width={350}
                  height={700}
                  className="tp-smartphone-image tp-zoom-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        /* Multi-layer gradient background */
        .tp-app-download-bg {
          background: 
            linear-gradient(135deg, rgba(255,106,0,0.9) 0%, rgba(255,212,117,0.9) 100%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          position: relative;
          overflow: hidden;
        }
        
        .tp-app-download-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%);
          pointer-events: none;
        }
        
        /* Glassmorphism Card */
        .tp-app-download-glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 60px 40px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          z-index: 2;
        }
        
        /* Typography */
        .tp-app-download-subtitle {
          color: #212121 !important;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        
        .tp-app-download-main-title {
          color: #212121 !important;
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 30px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        
        .tp-app-download-desc-wrapper {
          margin-bottom: 40px;
        }
        
        .tp-app-download-desc-line1 {
          color: #212121 !important;
          font-size: 22px;
          font-weight: 500;
          line-height: 1.4;
          margin-bottom: 8px;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        
        .tp-app-download-desc-line2 {
          color: #424242 !important;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
          margin-bottom: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        
        /* Big CTA Buttons */
        .tp-app-download-buttons-wrapper {
          margin-bottom: 20px;
        }
        
        .tp-app-download-buttons {
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .tp-app-download-btn-large {
          display: inline-block;
          transition: all 0.3s ease;
          filter: drop-shadow(0 8px 25px rgba(33, 33, 33, 0.15));
          min-width: 44px;
          min-height: 44px;
          margin: 5px;
        }
        
        .tp-app-download-btn-large:hover {
          transform: translateY(-5px) scale(1.05);
          filter: drop-shadow(0 15px 35px rgba(33, 33, 33, 0.25));
        }
        
        .tp-app-download-btn-large img {
          transition: all 0.3s ease;
          max-width: 100%;
          height: auto;
        }
        
        .tp-app-download-btn-large:hover img {
          box-shadow: 0 0 30px rgba(255, 106, 0, 0.4);
        }
        
        /* 3D Smartphone Mockup */
        .tp-smartphone-3d {
          perspective: 1000px;
          display: inline-block;
          margin-top: 20px;
        }
        
        .tp-smartphone-image {
          border-radius: 30px;
          box-shadow: 
            0 30px 80px rgba(255, 106, 0, 0.3),
            0 15px 40px rgba(0, 0, 0, 0.2);
          transform: rotateY(-15deg) rotateX(10deg);
          transition: all 0.4s ease;
          border: 8px solid #2c2c2c;
        }
        
        .tp-smartphone-3d:hover .tp-smartphone-image {
          transform: rotateY(-8deg) rotateX(5deg) scale(1.05);
          box-shadow: 
            0 40px 100px rgba(255, 106, 0, 0.4),
            0 20px 50px rgba(0, 0, 0, 0.3);
        }
        
        /* Dark theme support */
        .dark .tp-app-download-bg,
        [data-theme="dark"] .tp-app-download-bg {
          background: 
            linear-gradient(135deg, rgba(44,44,44,0.95) 0%, rgba(66,66,66,0.95) 100%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        .dark .tp-app-download-glass-card,
        [data-theme="dark"] .tp-app-download-glass-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .dark .tp-app-download-subtitle,
        .dark .tp-app-download-main-title,
        .dark .tp-app-download-desc-line1,
        [data-theme="dark"] .tp-app-download-subtitle,
        [data-theme="dark"] .tp-app-download-main-title,
        [data-theme="dark"] .tp-app-download-desc-line1 {
          color: #ffffff !important;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        
        .dark .tp-app-download-desc-line2,
        [data-theme="dark"] .tp-app-download-desc-line2 {
          color: #cccccc !important;
        }
        
        .dark .tp-smartphone-image,
        [data-theme="dark"] .tp-smartphone-image {
          border-color: #ffffff;
          box-shadow: 
            0 30px 80px rgba(255, 106, 0, 0.2),
            0 15px 40px rgba(255, 255, 255, 0.1);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .tp-app-download-glass-card {
            padding: 40px 20px;
            margin: 0 15px;
          }
          
          .tp-app-download-main-title {
            font-size: 32px;
            line-height: 1.3;
            margin-bottom: 25px;
          }
          
          .tp-app-download-desc-line1 {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 12px;
          }
          
          .tp-app-download-desc-line2 {
            font-size: 16px;
            line-height: 1.5;
          }
          
          .tp-app-download-desc-wrapper {
            margin-bottom: 35px;
          }
          
          .tp-app-download-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .tp-app-download-btn-large {
            width: 100%;
            max-width: 280px;
            margin: 0;
          }
          
          .tp-app-download-btn-large img {
            width: 100%;
            max-width: 280px;
            height: auto;
          }
          
          .tp-smartphone-image {
            width: 280px;
            height: 560px;
            max-width: 90vw;
          }
          
          .tp-smartphone-3d {
            margin-top: 30px;
          }
        }
        
        @media (max-width: 480px) {
          .tp-app-download-glass-card {
            padding: 30px 15px;
            border-radius: 20px;
          }
          
          .tp-app-download-main-title {
            font-size: 28px;
            line-height: 1.4;
          }
          
          .tp-app-download-desc-line1 {
            font-size: 16px;
          }
          
          .tp-app-download-desc-line2 {
            font-size: 14px;
          }
          
          .tp-app-download-subtitle {
            font-size: 14px;
            letter-spacing: 1px;
          }
          
          .tp-app-download-btn-large {
            max-width: 260px;
          }
          
          .tp-smartphone-image {
            width: 240px;
            height: 480px;
          }
        }
      `}</style>
    </div>
  );
};

export default AppDownload;
