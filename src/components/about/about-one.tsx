'use client';
import Image from 'next/image';
import { useSearchParams } from "next/navigation";
import { CSSProperties, Suspense } from 'react';
import { Leaf } from '../svg';
// images
import ab_1 from '@/assets/img/home-02/about/ab-1.jpg';
import ab_2 from '@/assets/img/home-02/about/ab-2.jpg';
import ab_3 from '@/assets/img/home-02/about/ab-s.jpg';

// img style
const imgStyle:CSSProperties = {height: "auto"};

const AboutOneContent = () => {
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
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-center">
              <span className="tp-section-subtitle-3 mb-15">
                <span>
                  <Leaf />
                </span>
                {texts.tagline}
              </span>
              <h2 className="tp-about-2-section-title">
                {texts.title}
              </h2>
            </div>
          </div>
        </div>

        {/* New Grid Layout Design */}
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="tp-about-2-content mb-50">
              <span className="tp-about-2-content-subtitle mb-25">
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
          <div className="col-xl-4 col-lg-4">
            <div className="tp-about-2-feature-box">
              <div className="tp-about-2-feature-item mb-30">
                <div className="tp-about-2-feature-icon">
                  <Image src={ab_1} alt="feature-1" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%'}} />
                </div>
                <div className="tp-about-2-feature-content">
                  <h5>{lang === 'en' ? 'Smart Inventory' : 'Tồn kho thông minh'}</h5>
                  <p>{lang === 'en' ? 'Track expiry dates automatically' : 'Theo dõi hạn sử dụng tự động'}</p>
                </div>
              </div>
              <div className="tp-about-2-feature-item mb-30">
                <div className="tp-about-2-feature-icon">
                  <Image src={ab_2} alt="feature-2" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%'}} />
                </div>
                <div className="tp-about-2-feature-content">
                  <h5>{lang === 'en' ? 'Menu Planning' : 'Lập kế hoạch thực đơn'}</h5>
                  <p>{lang === 'en' ? 'Personalized weekly menus' : 'Thực đơn tuần cá nhân hóa'}</p>
                </div>
              </div>
              <div className="tp-about-2-feature-item">
                <div className="tp-about-2-feature-icon">
                  <Image src={ab_3} alt="feature-3" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%'}} />
                </div>
                <div className="tp-about-2-feature-content">
                  <h5>{lang === 'en' ? 'Budget Control' : 'Kiểm soát ngân sách'}</h5>
                  <p>{lang === 'en' ? 'Save money, reduce waste' : 'Tiết kiệm tiền, giảm lãng phí'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutOne = () => {
  return (
    <Suspense fallback={null}>
      <AboutOneContent />
    </Suspense>
  );
};

export default AboutOne;