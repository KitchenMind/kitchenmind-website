import React, { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { getMenuData } from "@/data/menu-data";
import { useSearchParams } from "next/navigation";

const imgStyle:CSSProperties = { width: "100%", height: "auto", objectFit: "cover" };
const HeaderMenus = () => {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  const menu_data = getMenuData(lang);
  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id}>
          <Link href={menu.link}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
