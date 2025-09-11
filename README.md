# KitchenMind Website

KitchenMind là ứng dụng web thông minh giúp gia đình quản lý tồn kho nhà bếp, tạo thực đơn tuần cá nhân hóa và tiết kiệm chi phí. Ứng dụng hỗ trợ quét OCR hóa đơn, nhắc nhở hạn sử dụng và tối ưu hóa ngân sách mua sắm.

## Tính năng chính

- **Quản lý tồn kho thông minh**: Theo dõi thực phẩm trong nhà bếp với OCR scanning
- **Thực đơn tuần cá nhân hóa**: Tạo menu dựa trên tồn kho và sở thích gia đình
- **Nhắc nhở hạn sử dụng**: Giảm lãng phí thực phẩm với hệ thống cảnh báo
- **Tối ưu ngân sách**: Quản lý chi phí mua sắm theo khu vực
- **Đa ngôn ngữ**: Hỗ trợ Tiếng Việt và Tiếng Anh
- **Dark/Light Mode**: Giao diện tùy chỉnh theo sở thích
- **Mobile App**: Ứng dụng di động với Capacitor

## Công nghệ sử dụng

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: SCSS, Bootstrap 5
- **Animation**: GSAP, ScrollTrigger
- **Form Handling**: React Hook Form + Yup
- **Theme**: next-themes
- **Mobile**: Capacitor (Android)
- **Icons**: Phosphor Icons, Heroicons
- **Images**: Placeholder.co, Unsplash

## Yêu cầu hệ thống

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

## Cài đặt

### 1. Clone repository

```bash
git clone git@github.com:KitchenMind/kitchenmind-website.git
cd kitchenmind-website
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## Scripts có sẵn

```bash
# Development
npm run dev          # Chạy development server
npm run build        # Build cho production
npm run start        # Chạy production server
npm run lint         # Kiểm tra linting

# Mobile (Android)
npm run build:mobile     # Build cho mobile
npm run cap:add:android  # Thêm Android platform
npm run cap:copy         # Copy web assets
npm run cap:sync         # Sync với native code
```

## Cấu trúc dự án

```
src/
├── app/                    # Next.js App Router
│   ├── (about)/           # About pages
│   ├── (blog)/            # Blog pages
│   ├── (contact)/         # Contact pages
│   ├── (homes)/           # Home pages
│   ├── (portfolio)/       # Portfolio pages
│   ├── (service)/         # Service pages
│   ├── (shop)/            # Shop pages
│   ├── (team)/            # Team pages
│   ├── account/           # Account pages
│   ├── login/             # Login page
│   ├── register/          # Register page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── about/             # About components
│   ├── blog/              # Blog components
│   ├── contact/           # Contact components
│   ├── form/              # Form components
│   ├── hero-banner/       # Hero banner components
│   ├── portfolio/         # Portfolio components
│   ├── pricing/           # Pricing components
│   ├── service/           # Service components
│   ├── shop/              # Shop components
│   └── ui/                # UI components
├── contexts/              # React contexts
│   └── app-context.tsx    # Main app context
├── data/                  # Static data
├── hooks/                 # Custom hooks
├── layouts/               # Layout components
│   ├── footers/           # Footer layouts
│   └── headers/           # Header layouts
├── pages/                 # Page components
├── plugins/               # Third-party plugins
├── styles/                # Global styles
├── types/                 # TypeScript types
└── utils/                 # Utility functions
```

## Tính năng đa ngôn ngữ

Ứng dụng hỗ trợ 2 ngôn ngữ:
- **Tiếng Việt** (mặc định)
- **Tiếng Anh**

Chuyển đổi ngôn ngữ thông qua:
- URL parameter: `?lang=en`
- Language switcher component
- LocalStorage persistence

## Dark/Light Mode

Hỗ trợ 2 chế độ giao diện:
- **Light Mode** (mặc định)
- **Dark Mode**

Theme được lưu trong localStorage và tự động khôi phục.

## Mobile Development

### Android Setup

1. Cài đặt Android Studio
2. Cấu hình Android SDK
3. Thêm Android platform:

```bash
npm run cap:add:android
```

4. Build và sync:

```bash
npm run build:mobile
npm run cap:sync
```

5. Mở trong Android Studio:

```bash
npx cap open android
```

## Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Deploy tự động

### Manual Build

```bash
npm run build
npm run start
```

## Environment Variables

Tạo file `.env.local`:

```env
# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API Keys (nếu cần)
NEXT_PUBLIC_API_URL=your_api_url
```

## Contributing

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

## Commit Convention

Sử dụng format: `<type>: <description>`

Types:
- `feat`: Thêm tính năng mới
- `fix`: Sửa lỗi
- `docs`: Cập nhật documentation
- `style`: Formatting, không thay đổi logic
- `refactor`: Refactor code
- `test`: Thêm/sửa tests
- `chore`: Cập nhật build tools, dependencies

## License

Dự án này thuộc về KitchenMind Team.

## Liên hệ

- Website: [KitchenMind](https://kitchenmind.com)
- Email: contact@kitchenmind.com
- GitHub: [KitchenMind/kitchenmind-website](https://github.com/KitchenMind/kitchenmind-website)

---

**KitchenMind** - Smart Kitchen Planning for Modern Families