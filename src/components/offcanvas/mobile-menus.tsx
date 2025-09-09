import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getMenuData } from '@/data/menu-data';
import shop_banner from '@/assets/img/menu/shop-menu/banner-1.jpg';
import port_img from '@/assets/img/menu/portfolio-menu/portfolio.png';
import { useSearchParams } from "next/navigation";

export default function MobileMenus() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'vi';
  const menu_data = getMenuData(lang);

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {menu_data.map((menu) => (
          <li key={menu.id}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
