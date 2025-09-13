'use client';
import Image from 'next/image';
import { useSearchParams } from "next/navigation";
import { CSSProperties } from 'react';
// images
import ab_1 from '@/assets/img/home-02/about/ab-1.jpg';
import ab_2 from '@/assets/img/home-02/about/ab-2.jpg';
import ab_3 from '@/assets/img/home-02/about/ab-s.jpg';

// img style
const imgStyle:CSSProperties = {height: "auto"};
const AboutOne = () => {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  const texts = lang === 'en' ? {
    title: 'Transform your pantry into personalized weekly menus',
    tagline: 'SMART KITCHEN PLANNING',
    follow: 'REDUCE WASTE • SAVE TIME • MANAGE BUDGET',
    desc1: 'KitchenMind turns your kitchen inventory, family portions, and budget into personalized weekly menus and automatic shopping lists. Never wonder what to cook again.',
    desc2: 'With OCR receipt scanning, expiry reminders, and smart meal planning, we help families reduce food waste while saving time and money.'
  } : {
    title: 'Biến tồn kho nhà bếp thành thực đơn tuần cá nhân hóa',
    tagline: 'QUẢN LÝ NHÀ BẾP THÔNG MINH',
    follow: 'GIẢM LÃNG PHÍ • TIẾT KIỆM THỜI GIAN • QUẢN LÝ NGÂN SÁCH',
    desc1: 'KitchenMind biến tồn kho nhà bếp, khẩu phần gia đình và ngân sách thành thực đơn tuần cá nhân hóa và danh sách mua sắm tự động. Không còn băn khoăn nấu gì.',
    desc2: 'Với tính năng quét OCR hóa đơn, nhắc hạn sử dụng và lập kế hoạch bữa ăn thông minh, chúng tôi giúp gia đình giảm lãng phí thực phẩm đồng thời tiết kiệm thời gian và chi phí.'
  };

  return (
    <div className="tp-about-2-area pt-125 pb-200">
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
              <h2 className="tp-about-2-section-title">
                {texts.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 order-1 order-xl-0">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <Image data-speed="auto" data-lag="0" src={ab_1} alt="ab-img" style={imgStyle} />
              </div>
              <div className="tp-about-2-thumb-inner">
                <Image data-speed="auto" data-lag="0" src={ab_2} alt="ab-img" style={imgStyle} />
                <span className="tp-about-2-thumb-text">
                  {texts.tagline}
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 order-0 order-xl-1">
            <div className="tp-about-2-content">
              <span className="tp-about-2-content-subtitle">
                {texts.follow}
              </span>
              <p className="mb-30">
                {texts.desc1}
              </p>
              <p className="mb-0">
                {texts.desc2}
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6 order-1">
            <div className="tp-about-2-right-thumb text-end">
              <Image data-speed="auto" data-lag="0" src={ab_3} alt="ab-img" style={imgStyle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;