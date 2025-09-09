import React from "react";
import { useSearchParams } from "next/navigation";
import { Leaf } from "../svg";
import Image from "next/image";
// service icon
import ser_1 from "@/assets/img/home-02/service/sv-icon-1.png";
import ser_2 from "@/assets/img/home-02/service/sv-icon-2.png";
import ser_3 from "@/assets/img/home-02/service/sv-icon-3.png";
import ser_4 from "@/assets/img/home-02/service/sv-icon-4.png";
// shape
import shape from "@/assets/img/home-02/service/sv-shape-1.png";

export default function ServiceTwo() {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  const service_accordion = getServiceAccordion(lang);
  const texts = lang === 'en' ? {
    subtitle: 'FEATURES',
    title: 'Core features for busy families'
  } : {
    subtitle: 'TÍNH NĂNG',
    title: 'Tính năng cốt lõi cho gia đình bận rộn'
  };
  return (
    <div className="tp-service-2-area tp-service-2-pt  pb-150 z-index-5">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-2-title-box mb-70">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                {texts.subtitle}
              </span>
              <h4 className="tp-section-title-40">
                {texts.title}
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className="tp-service-2-shape-img text-center text-lg-start">
              <Image src={shape} alt="" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-buttons ${s.id !== 1 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${s.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${s.id}`}
                      >
                        <span>
                          <Image src={s.icon} alt="icon" />
                        </span>
                        {s.title}
                        <span className="accordion-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${s.id}`}
                      className={`accordion-collapse collapse ${s.id === 1 ? "show" : ""}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getServiceAccordion = (lang) => [
  {
    id: 1,
    icon: ser_1,
    title: lang === 'en' ? 'OCR Receipt' : 'OCR hóa đơn',
    desc: lang === 'en' ? 'Scan receipts to auto-create inventory batches with zones and expiry dates.' : 'Quét hóa đơn để tự động tạo lô tồn kho với khu vực và hạn sử dụng.',
  },
  {
    id: 2,
    icon: ser_2,
    title: lang === 'en' ? 'Smart Planner' : 'Planner thông minh',
    desc: lang === 'en' ? 'Generate personalized weekly menus based on inventory, portions, budget, and preferences.' : 'Tạo thực đơn tuần cá nhân hóa dựa trên tồn kho, khẩu phần, ngân sách và sở thích.',
  },
  {
    id: 3,
    icon: ser_3,
    title: lang === 'en' ? 'Shopping List' : 'Danh sách mua sắm',
    desc: lang === 'en' ? 'Auto-generate shopping lists with market prices by district, and optional delivery.' : 'Tự động tạo danh sách mua sắm với giá thị trường theo quận, và tùy chọn giao hàng.',
  },
  {
    id: 4,
    icon: ser_4,
    title: lang === 'en' ? 'Auto Deduction' : 'Tự trừ tồn kho',
    desc: lang === 'en' ? 'Automatically deduct stock after cooking, with daily expiry reminders.' : 'Tự động trừ tồn kho sau khi nấu, với nhắc nhở hạn sử dụng hàng ngày.',
  },
];
