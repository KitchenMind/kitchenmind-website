'use client';
import User from "@/components/svg/user";
import { useApp } from "@/contexts/app-context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";
import useSticky from "@/hooks/use-sticky";


export default function HeaderTwo() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const {sticky} = useSticky();
  const [openOffCanvas, setOpenOffcanvas] = React.useState(false);
  const { currentLang } = useApp();
  
  const texts = currentLang === 'en' ? {
    signIn: 'Sign In',
    getStarted: 'Get Started'
  } : {
    signIn: 'Đăng Nhập',
    getStarted: 'Bắt Đầu'
  };
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-header-2-area tp-header-2-ptb z-index-2 tp-transparent ${sticky?'header-sticky':''}`}
        >
          <div className="container container-1870">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-1" href="/">
                    <Image
                      src={`${basePath}/assets/img/logo/logo.png`}
                      alt="logo"
                      width={85}
                      height={26}
                    />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image
                      src={`${basePath}/assets/img/logo/logo.png`}
                      alt="logo"
                      width={85}
                      height={26}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 d-xl-none">
                <div className="tp-header-2-menu-bar text-end text-sm-center">
                  <button className="tp-offcanvas-open-btn" onClick={() => setOpenOffcanvas(true)}>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
              <div className="col-xl-4 d-none d-xl-block">
                <div className="tp-header-2-menu-bar text-center">
                  <button className="tp-offcanvas-open-btn" onClick={() => setOpenOffcanvas(true)}>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                <div className="tp-header-2-login-btn text-end">
                  <Link href="/login" className="tp-btn-login d-none d-md-inline-flex align-items-center gap-1 gap-sm-2">
                    <User />
                    <span className="d-none d-sm-inline">{texts.signIn}</span>
                  </Link>
                  <Link href="/register" className="tp-btn-get-started d-none d-md-inline-block ms-2 ms-sm-3">
                    <span className="d-inline d-sm-none">+</span>
                    <span className="d-none d-sm-inline">{texts.getStarted}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvasTwo openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffcanvas} />
      {/* off canvas */}
    </>
  );
}
