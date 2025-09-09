'use client';
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PricingTeaser() {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  const texts = lang === 'en' ? {
    title: 'Choose Your Plan',
    basic: 'Basic',
    basicPrice: '$9.99/month',
    basicFeatures: ['Weekly Menus', 'Inventory Tracking', 'Shopping List'],
    pro: 'Pro',
    proPrice: '$19.99/month',
    proFeatures: ['All Basic +', 'OCR Scanning', 'Auto Deduction', 'Reports'],
    enterprise: 'Enterprise',
    enterprisePrice: 'Contact Us',
    enterpriseFeatures: ['All Pro +', 'Custom Integrations', 'Priority Support'],
    btn: 'View All Plans'
  } : {
    title: 'Chọn Gói Của Bạn',
    basic: 'Cơ Bản',
    basicPrice: '9.99$/tháng',
    basicFeatures: ['Thực Đơn Tuần', 'Theo Dõi Tồn Kho', 'Danh Sách Mua Sắm'],
    pro: 'Pro',
    proPrice: '19.99$/tháng',
    proFeatures: ['Tất Cả Cơ Bản +', 'Quét OCR', 'Tự Trừ Tồn', 'Báo Cáo'],
    enterprise: 'Doanh Nghiệp',
    enterprisePrice: 'Liên Hệ',
    enterpriseFeatures: ['Tất Cả Pro +', 'Tích Hợp Tùy Chỉnh', 'Hỗ Trợ Ưu Tiên'],
    btn: 'Xem Tất Cả Gói'
  };

  return (
    <section className="pricing-teaser">
      <h2>{texts.title}</h2>
      <div className="plans">
        <div className="plan">
          <h3>{texts.basic}</h3>
          <p>{texts.basicPrice}</p>
          <ul>{texts.basicFeatures.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
        <div className="plan">
          <h3>{texts.pro}</h3>
          <p>{texts.proPrice}</p>
          <ul>{texts.proFeatures.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
        <div className="plan">
          <h3>{texts.enterprise}</h3>
          <p>{texts.enterprisePrice}</p>
          <ul>{texts.enterpriseFeatures.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
      <Link href="/pricing">{texts.btn}</Link>
    </section>
  );
}

