import { getMenuData } from '@/data/menu-data';
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function MobileMenus() {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
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
