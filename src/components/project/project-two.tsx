"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const getProjectData = (lang: string, basePath: string = '') => [
  {
    id: 1,
    img: `${basePath}/assets/img/home-02/project/project-1.jpg`,
    subtitle: lang === 'en' ? 'Feature' : 'Tính năng',
    title: lang === 'en' ? 'Showcase' : 'Trưng bày', // Adjust as needed
  },
  {
    id: 2,
    img: `${basePath}/assets/img/home-02/project/project-2.jpg`,
    subtitle: lang === 'en' ? 'Planner' : 'Planner',
    title: lang === 'en' ? 'Menu Generation' : 'Tạo thực đơn',
  },
  {
    id: 3,
    img: `${basePath}/assets/img/home-02/project/project-3.jpg`,
    subtitle: lang === 'en' ? 'Shopping' : 'Mua sắm',
    title: lang === 'en' ? 'Smart List' : 'Danh sách thông minh',
  },
  {
    id: 4,
    img: `${basePath}/assets/img/home-02/project/project-4.jpg`,
    subtitle: lang === 'en' ? 'Inventory' : 'Tồn kho',
    title: lang === 'en' ? 'Auto Deduction' : 'Tự trừ',
  },
  {
    id: 5,
    img: `${basePath}/assets/img/home-02/project/project-5.jpg`,
    subtitle: lang === 'en' ? 'Reminders' : 'Nhắc nhở',
    title: lang === 'en' ? 'Expiry Alerts' : 'Cảnh báo hết hạn',
  },
  {
    id: 6,
    img: `${basePath}/assets/img/home-02/project/project-6.jpg`,
    subtitle: lang === 'en' ? 'Reports' : 'Báo cáo',
    title: lang === 'en' ? 'Weekly Insights' : 'Thông tin tuần',
  },
  {
    id: 7,
    img: `${basePath}/assets/img/home-02/project/project-7.jpg`,
    subtitle: lang === 'en' ? 'Offline' : 'Ngoại tuyến',
    title: lang === 'en' ? 'Tick List' : 'Danh sách tick',
  },
];

export default function ProjectTwo() {
  const [basePath, setBasePath] = useState('');
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  
  useEffect(() => {
    // Detect if we're on GitHub Pages
    if (typeof window !== 'undefined') {
      const isGitHubPages = window.location.hostname === 'kitchenmind.github.io';
      setBasePath(isGitHubPages ? '/kitchenmind-website' : '');
    }
  }, []);
  
  const project_data = getProjectData(lang, basePath);

  return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item  p-relative">
                <div className="tp-project-2-thumb">
                  <Image src={item.img} alt="p-img" width={890} height={700} />
                </div>
                <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm">
                    <Link href="/portfolio-details-1">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
