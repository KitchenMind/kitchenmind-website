'use client';
import { useTheme } from "next-themes";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
// Removed Leaf icon for clean modern design

const AppDownload = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const searchParams = useSearchParams();
  const { resolvedTheme } = useTheme();
  const lang = searchParams?.get('lang') || 'vi';
  const isDark = resolvedTheme === 'dark';
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const desc1Ref = useRef<HTMLParagraphElement>(null);
  const desc2Ref = useRef<HTMLParagraphElement>(null);

  // Force style override after GSAP animations
  useEffect(() => {
    const forceStyle = () => {
      // Title styles
      if (titleRef.current) {
        const element = titleRef.current;
        if (isDark) {
          element.style.setProperty('color', '#ffffff', 'important');
          element.style.setProperty('text-shadow', '0 2px 8px rgba(0,0,0,0.8)', 'important');
        } else {
          element.style.setProperty('color', '#212121', 'important');
          element.style.setProperty('text-shadow', '0 2px 4px rgba(0,0,0,0.1)', 'important');
        }
      }

      // Subtitle styles
      if (subtitleRef.current) {
        const element = subtitleRef.current;
        if (isDark) {
          element.style.setProperty('color', '#ffffff', 'important');
          element.style.setProperty('text-shadow', '0 1px 4px rgba(0,0,0,0.6)', 'important');
        } else {
          element.style.setProperty('color', '#212121', 'important');
          element.style.setProperty('text-shadow', '0 1px 2px rgba(0,0,0,0.1)', 'important');
        }
      }

      // Description 1 styles
      if (desc1Ref.current) {
        const element = desc1Ref.current;
        if (isDark) {
          element.style.setProperty('color', '#ffffff', 'important');
          element.style.setProperty('text-shadow', '0 1px 4px rgba(0,0,0,0.5)', 'important');
        } else {
          element.style.setProperty('color', '#212121', 'important');
          element.style.setProperty('text-shadow', '0 1px 2px rgba(0,0,0,0.1)', 'important');
        }
      }

      // Description 2 styles
      if (desc2Ref.current) {
        const element = desc2Ref.current;
        if (isDark) {
          element.style.setProperty('color', '#cccccc', 'important');
          element.style.setProperty('text-shadow', '0 1px 4px rgba(0,0,0,0.5)', 'important');
        } else {
          element.style.setProperty('color', '#424242', 'important');
          element.style.setProperty('text-shadow', '0 1px 2px rgba(0,0,0,0.1)', 'important');
        }
      }
    };

    const addKitchenMindColorEffect = () => {
      if (titleRef.current) {
        const element = titleRef.current;
        const text = element.textContent || element.innerText || '';
        
        // Check if we're in Vietnamese or English
        const isVietnamese = text.includes('Tải') && text.includes('điện thoại');
        
        if (isVietnamese) {
          // For Vietnamese: "Tải KitchenMind về điện thoại"
          const newHTML = text.replace(
            /KitchenMind/g,
            '<span class="tp-kitchenmind-highlight">KitchenMind</span>'
          );
          element.innerHTML = newHTML;
        } else {
          // For English: "Get KitchenMind on Your Phone"
          const newHTML = text.replace(
            /KitchenMind/g,
            '<span class="tp-kitchenmind-highlight">KitchenMind</span>'
          );
          element.innerHTML = newHTML;
        }
        
        // Force re-apply styles after changing innerHTML
        setTimeout(() => {
          if (isDark) {
            element.style.setProperty('color', '#ffffff', 'important');
            element.style.setProperty('text-shadow', '0 2px 8px rgba(0,0,0,0.8)', 'important');
          } else {
            element.style.setProperty('color', '#212121', 'important');
            element.style.setProperty('text-shadow', '0 2px 4px rgba(0,0,0,0.1)', 'important');
          }
        }, 100);
      }
    };

    // Apply immediately
    forceStyle();

    // Apply after potential GSAP animations
    const timer = setTimeout(() => {
      forceStyle();
      addKitchenMindColorEffect();
    }, 500);
    
    // Apply on interval to ensure it sticks
    const interval = setInterval(() => {
      forceStyle();
      addKitchenMindColorEffect();
    }, 1000);

    // Add KitchenMind highlight after char animation completes
    const kitchenMindTimer = setTimeout(() => {
      addKitchenMindColorEffect();
    }, 3000); // Wait longer for char animation to complete
    
    // Also try multiple times to ensure it works
    const kitchenMindTimer2 = setTimeout(() => {
      addKitchenMindColorEffect();
    }, 4000);
    
    const kitchenMindTimer3 = setTimeout(() => {
      addKitchenMindColorEffect();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(kitchenMindTimer);
      clearTimeout(kitchenMindTimer2);
      clearTimeout(kitchenMindTimer3);
      clearInterval(interval);
    };
  }, [isDark]);

  // Also force on theme change
  useEffect(() => {
    const elements = [titleRef, subtitleRef, desc1Ref, desc2Ref];
    elements.forEach((ref) => {
      if (ref.current) {
        const element = ref.current;
        if (ref === titleRef) {
          if (isDark) {
            element.style.setProperty('color', '#ffffff', 'important');
            element.style.setProperty('text-shadow', '0 2px 8px rgba(0,0,0,0.8)', 'important');
          } else {
            element.style.setProperty('color', '#212121', 'important');
            element.style.setProperty('text-shadow', '0 2px 4px rgba(0,0,0,0.1)', 'important');
          }
        } else if (ref === subtitleRef || ref === desc1Ref) {
          if (isDark) {
            element.style.setProperty('color', '#ffffff', 'important');
            element.style.setProperty('text-shadow', '0 1px 4px rgba(0,0,0,0.6)', 'important');
          } else {
            element.style.setProperty('color', '#212121', 'important');
            element.style.setProperty('text-shadow', '0 1px 2px rgba(0,0,0,0.1)', 'important');
          }
        } else if (ref === desc2Ref) {
          if (isDark) {
            element.style.setProperty('color', '#cccccc', 'important');
            element.style.setProperty('text-shadow', '0 1px 4px rgba(0,0,0,0.5)', 'important');
          } else {
            element.style.setProperty('color', '#424242', 'important');
            element.style.setProperty('text-shadow', '0 1px 2px rgba(0,0,0,0.1)', 'important');
          }
        }
      }
    });
  }, [resolvedTheme, isDark]);

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
                <span 
                  ref={subtitleRef}
                  className="tp-section-subtitle-3 tp-app-download-subtitle tp_fade_bottom tp-pulse-animation tp-glow-effect"
                >
                  {texts.subtitle}
                </span>
                <h1 
                  ref={titleRef}
                  className="tp-app-download-main-title tp-char-animation"
                  style={{
                    color: isDark ? '#ffffff' : '#212121',
                    textShadow: isDark ? '0 2px 8px rgba(0,0,0,0.8)' : '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  {texts.title}
                </h1>
                <div className="tp-app-download-desc-wrapper">
                  <p 
                    ref={desc1Ref}
                    className="tp-app-download-desc-line1 tp_fade_bottom tp-typewriter-effect"
                  >
                    {texts.desc1}
                  </p>
                  <p 
                    ref={desc2Ref}
                    className="tp-app-download-desc-line2 tp_fade_bottom tp-slide-up-effect"
                  >
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
                        src={`${basePath}/assets/img/logo/chplay.png`}
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
                        src={`${basePath}/assets/img/logo/appstore.svg`}
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
          <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
            <div className="tp-app-download-mockup text-center">
              <div className="tp-smartphone-3d tp_fade_bottom">
                <Image
                  src={`${basePath}/assets/img/home-02/mockup/iphone-2.png`}
                  alt="KitchenMind App Dashboard"
                  className="tp-smartphone-image tp-zoom-in"
                  width={1000}
                  height={800}
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block',
                    maxWidth: '400px',
                    margin: '0 auto'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        /* App Download Area Container */
        .tp-app-download-area {
          position: relative;
          overflow: visible;
          z-index: 5;
          isolation: isolate;
          clear: both;
        }
        
        /* Ensure no other elements overlap */
        .tp-app-download-area * {
          position: relative;
        }
        
        .tp-app-download-content {
          z-index: 12;
          position: relative;
        }

        /* Multi-layer gradient background */
        .tp-app-download-bg {
          background: 
            linear-gradient(135deg, rgba(255,106,0,0.9) 0%, rgba(255,212,117,0.9) 100%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          position: relative;
          overflow: hidden;
          z-index: 1;
          isolation: isolate;
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
          z-index: 10;
          isolation: isolate;
        }
        
        /* Typography */
        .tp-app-download-subtitle {
          color: #212121;
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
          color: #212121;
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 30px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        
        /* Force dark mode styles with highest specificity */
        .dark .tp-app-download-area .tp-app-download-main-title,
        [data-theme="dark"] .tp-app-download-area .tp-app-download-main-title,
        html.dark .tp-app-download-main-title,
        html[data-theme="dark"] .tp-app-download-main-title {
          color: #ffffff !important;
          text-shadow: 0 2px 8px rgba(0,0,0,0.8) !important;
        }
        
        .tp-app-download-desc-wrapper {
          margin-bottom: 40px;
        }
        
        .tp-app-download-desc-line1 {
          color: #212121;
          font-size: 22px;
          font-weight: 500;
          line-height: 1.4;
          margin-bottom: 8px;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        
        .tp-app-download-desc-line2 {
          color: #424242;
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
          z-index: 8;
          position: relative;
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
        
        /* KitchenMind Highlight Effect */
        .tp-kitchenmind-highlight {
          display: inline;
          color: #FFA437;
          animation: tp-kitchenmind-color-change 2s ease-in-out 1s forwards;
          position: relative;
          font-weight: 800;
        }
        
        .tp-kitchenmind-highlight::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FFA437, #FF6A00);
          animation: tp-underline-expand 1s ease-out 3s forwards;
        }
        
        /* Dark mode KitchenMind highlight */
        .dark .tp-kitchenmind-highlight,
        [data-theme="dark"] .tp-kitchenmind-highlight {
          color: #FFA437;
          text-shadow: 0 0 10px rgba(255, 164, 55, 0.3);
        }

        /* Special Animation Effects */
        .tp-pulse-animation {
          animation: tp-pulse 2s ease-in-out infinite;
        }
        
        .tp-glow-effect {
          position: relative;
          overflow: visible;
          z-index: 15;
        }
        
        .tp-glow-effect::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #FF6A00, #FFD475, #FF6A00, #FFD475);
          background-size: 400% 400%;
          border-radius: inherit;
          z-index: -1;
          filter: blur(8px);
          animation: tp-glow-rotate 3s linear infinite;
          opacity: 0.7;
        }
        
        .tp-typewriter-effect {
          overflow: hidden;
          border-right: 2px solid;
          white-space: nowrap;
          animation: 
            tp-typewriter 3s steps(40, end),
            tp-blink-caret 0.75s step-end infinite;
        }
        
        .tp-slide-up-effect {
          animation: tp-slide-up 1.5s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
          transform: translateY(30px);
        }
        
        /* Keyframes */
        @keyframes tp-kitchenmind-color-change {
          0% {
            color: #FFA437;
          }
          50% {
            color: #FF8A1A;
            transform: scale(1.02);
          }
          100% {
            color: #FF6A00;
            transform: scale(1);
          }
        }
        
        @keyframes tp-underline-expand {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }
        
        @keyframes tp-pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes tp-glow-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes tp-typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes tp-blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: currentColor;
          }
        }
        
        @keyframes tp-slide-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Dark mode animations */
        .dark .tp-glow-effect::before,
        [data-theme="dark"] .tp-glow-effect::before {
          background: linear-gradient(45deg, #ffffff, #cccccc, #ffffff, #cccccc);
          background-size: 400% 400%;
        }
        
        .dark .tp-typewriter-effect,
        [data-theme="dark"] .tp-typewriter-effect {
          border-right-color: #ffffff;
        }
        
        /* Responsive animations */
        @media (max-width: 768px) {
          .tp-pulse-animation {
            animation-duration: 1.5s;
          }
          
          .tp-typewriter-effect {
            animation-duration: 2s;
            white-space: normal;
            border-right: none;
          }
          
          .tp-glow-effect::before {
            filter: blur(4px);
          }
          
          .tp-kitchenmind-highlight {
            animation-delay: 0.5s; /* Faster on mobile */
          }
          
          .tp-kitchenmind-highlight::after {
            animation-delay: 2.5s; /* Faster on mobile */
            height: 1px; /* Thinner underline on mobile */
          }
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
        .dark .tp-app-download-desc-line1,
        [data-theme="dark"] .tp-app-download-subtitle,
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