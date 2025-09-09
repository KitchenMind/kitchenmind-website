"use client";
import React from "react";
import Image from "next/image";
import award_img from "@/assets/img/home-02/award/award-1.png";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useSearchParams } from "next/navigation";

export default function AwardTwo() {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  const texts = lang === 'en' ? {
    subtitle: 'Reviews',
    title1: 'user',
    title2: 'reviews',
    desc: 'Hear from our users about how KitchenMind helped their families.',
    btn: 'See Reviews'
  } : {
    subtitle: 'Đánh giá',
    title1: 'người dùng',
    title2: 'đánh giá',
    desc: 'Nghe từ người dùng về cách KitchenMind giúp gia đình họ.',
    btn: 'Xem Đánh giá'
  };
  
  return (
    <div className="tp-award-2-area tpaward tp-award-2-space p-relative fix">
      <div className="tp-award-2-shape">
        <span className="tp-award-2-circle"></span>
        <span className="tp-award-2-img">
          <Image src={award_img} alt="award-img" />
        </span>
      </div>
      <div className="container container-1650">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-award-2-title-box p-relative">
              <span className="tp-award-2-subtitle">{texts.subtitle}</span>
              <h2 className="tp-award-2-title tp-award-title-1">{texts.title1}</h2>
              <h2 className="tp-award-2-title tp-award-title-2">
                <span>{texts.title2}</span>
              </h2>
              <p>{texts.desc}</p>
            </div>
            <div className="tp-award-2-btn-box">
              <div className="tp-projct-5-2-btn-box d-flex justify-content-end">
                <div className="tp-hover-btn-wrapper">
                  <Link
                    className="tp-btn-circle tp-hover-btn-item tp-hover-btn"
                    href="/portfolio-details-1"
                  >
                    <span className="tp-btn-circle-text">
                      {texts.btn}
                    </span>
                    <span className="tp-btn-circle-icon">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
