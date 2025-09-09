import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/logo-white.png";
import logo_2 from "@/assets/img/logo/logo.png";
import { RightArrow } from "@/components/svg";
import { useSearchParams } from "next/navigation";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false,topCls='footer-top' }: IProps) {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  const texts = lang === 'en' ? {
    desc: 'KitchenMind helps families plan weekly menus, track pantry, and save costs.',
    sitemap: 'Sitemap',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    blog: 'Blog',
    landing: 'Landing',
    office: 'Office',
    address: '740 NEW SOUTH HEAD RD, TRIPLE BAY SWFW 3108, NEW YORK',
    phone: 'P: + 725 214 456',
    email: 'E: contact@kitchenmind.com',
    newsletter: 'Subscribe to our newsletter',
    emailPlaceholder: 'Enter your email...',
    copyright: `All rights reserved — ${new Date().getFullYear()} © KitchenMind`,
    social: ['Linkedin', 'Twitter', 'Instagram']
  } : {
    desc: 'KitchenMind giúp gia đình lập kế hoạch thực đơn tuần, theo dõi tồn kho và tiết kiệm chi phí.',
    sitemap: 'Sơ đồ trang',
    home: 'Trang chủ',
    about: 'Về chúng tôi',
    contact: 'Liên hệ',
    blog: 'Blog',
    landing: 'Landing',
    office: 'Văn phòng',
    address: '740 NEW SOUTH HEAD RD, TRIPLE BAY SWFW 3108, NEW YORK',
    phone: 'ĐT: + 725 214 456',
    email: 'E: contact@kitchenmind.com',
    newsletter: 'Đăng ký nhận bản tin của chúng tôi',
    emailPlaceholder: 'Nhập email của bạn...',
    copyright: `Mọi quyền được bảo lưu — ${new Date().getFullYear()} © KitchenMind`,
    social: ['Linkedin', 'Twitter', 'Instagram']
  };
  
  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image src={logo_2} alt="logo" />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                <div className="tp-footer-2-widget-text">
                  <p>
                    {texts.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">{texts.sitemap}</h4>
                  <ul>
                    <li><Link href="#">{texts.home}</Link></li>
                    <li><Link href="#">{texts.about}</Link></li>
                    <li><Link href="#">{texts.contact}</Link></li>
                    <li><Link href="#">{texts.blog}</Link></li>
                    <li><Link href="#">{texts.landing}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">{texts.office}</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a
                      href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                      target="_blank"
                    >
                      {texts.address}
                    </a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="tel:+725214456">{texts.phone}</a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="mailto:contact@liko.com">{texts.email}</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    {texts.newsletter}
                  </h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder={texts.emailPlaceholder} />
                      <button>
                        <RightArrow clr={whiteFooter?"currentcolor":'#F3F3F4'}/>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  {texts.copyright}
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                {texts.social.map((s, i) => <li key={i}><Link href="#">{s}</Link></li>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}
