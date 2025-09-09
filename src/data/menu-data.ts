import { IMenuDT } from "@/types/menu-d-t";


// Vietnamese by default
export function getMenuData(lang = 'vi') {
  const titles = lang === 'en' ? {
    home: 'Home',
    pricing: 'Pricing',
    contact: 'Contact',
  } : {
    home: 'Trang chủ',
    pricing: 'Giá',
    contact: 'Liên Hệ',
  };

  return [
    { id: 1, title: titles.home, link: '/' },
    { id: 2, title: titles.pricing, link: '/pricing' },
    { id: 3, title: titles.contact, link: '/contact' },
  ];
}

// For mobile, add login
export function getMobileMenuData(lang = 'vi') {
  const titles = lang === 'en' ? {
    home: 'Home',
    pricing: 'Pricing',
    contact: 'Contact',
    login: 'Login',
  } : {
    home: 'Trang chủ',
    pricing: 'Giá',
    contact: 'Liên Hệ',
    login: 'Đăng nhập',
  };

  return [
    { id: 1, title: titles.home, link: '/' },
    { id: 2, title: titles.pricing, link: '/pricing' },
    { id: 3, title: titles.contact, link: '/contact' },
    { id: 4, title: titles.login, link: '/login' },
  ];
}