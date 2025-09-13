"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Leaf } from "../svg";
// instagram images
import inst_1 from "@/assets/img/home-02/instagram/insta-inner-1.jpg";
import inst_2 from "@/assets/img/home-02/instagram/insta-inner-2.jpg";
import inst_3 from "@/assets/img/home-02/instagram/insta-inner-3.jpg";
import inst_4 from "@/assets/img/home-02/instagram/insta-inner-4.jpg";
import inst_5 from "@/assets/img/home-02/instagram/insta-inner-5.jpg";
import inst_6 from "@/assets/img/home-02/instagram/insta-inner-6.jpg";
import inst_7 from "@/assets/img/home-02/instagram/insta-inner-7.jpg";

export default function InstagramArea() {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  // Use window.location.pathname to detect if we're on GitHub Pages
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname === 'kitchenmind.github.io';
  const basePath = isGitHubPages ? '/kitchenmind-website' : '';
  // Update texts
  const texts = lang === 'en' ? {
    subtitle: 'COMMUNITY',
    title: '@kitchenmind',
    desc: 'Join thousands of families sharing their meal planning journey and kitchen tips.',
    btn: 'Follow Us'
  } : {
    subtitle: 'CỘNG ĐỒNG',
    title: '@kitchenmind',
    desc: 'Tham gia cùng hàng nghìn gia đình chia sẻ hành trình lập kế hoạch bữa ăn và mẹo vặt nhà bếp.',
    btn: 'Theo dõi Chúng tôi'
  };
  
  // instagram images
  const instagram_images = [
    { id: 1, img: inst_1 },
    { id: 2, img: inst_2 },
    { id: 3, img: inst_3 },
    { id: 4, img: inst_4 },
    { id: 5, img: inst_5 },
    { id: 6, img: inst_6 },
    { id: 7, img: inst_7 },
  ];

  return (
    <div className="tp-instagram-area tp-instagram-ptb text-center">
      <div className="tp-instagram-thumb-wrap p-relative">
        {instagram_images.map((item) => (
          <div
            key={item.id}
            className={`tp-instagram-thumb-inner-${item.id} d-none d-xl-block`}
          >
            <Image src={item.img} alt="inst-img" />
          </div>
        ))}
        <div className="tp-instagram-thumb-inner-8 d-none d-xl-block">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="tp-instagram-thumb">
          <Image src={`${basePath}/assets/img/home-02/instagram/insta-1.jpg`} alt="inst-img" width={400} height={400} />
        </div>
        <div className="tp-instagram-content-wrap text-start">
          <div className="tp-instagram-title-box">
            <span className="tp-instagram-subtitle">{texts.subtitle}</span>
            <h4 className="tp-instagram-title">{texts.title}</h4>
          </div>
          <div className="tp-instagram-content">
            <p>
              {texts.desc}
            </p>
            <a className="tp-btn-white background-black" href="#">
              {texts.btn}
              <span>
                <Leaf />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
