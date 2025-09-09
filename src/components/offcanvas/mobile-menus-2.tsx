import React from "react";
import Link from "next/link";
import { getMobileMenuData } from '@/data/menu-data';
import { useSearchParams } from "next/navigation";

export default function MobileMenusTwo() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'vi';
  const mobile_menu_data = getMobileMenuData(lang);

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {mobile_menu_data.map((menu) => (
          <li key={menu.id}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
