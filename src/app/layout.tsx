import LanguageSwitcher from "@/components/language-switcher";
import { AppProviderWrapper } from "@/contexts/app-provider-wrapper";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import {
    Aladin,
    Be_Vietnam_Pro,
    Big_Shoulders_Display,
    Marcellus,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});
const syne_body = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--tp-ff-body",
});
const syne_heading = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--tp-ff-heading",
});
const syne_p = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--tp-ff-p",
});
const syne = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--tp-ff-syne",
});
const big_shoulders = Big_Shoulders_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-shoulders",
});
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

export const metadata: Metadata = {
  title: "KitchenMind – Smart Kitchen Planner",
  description: "KitchenMind helps families plan weekly menus, track pantry, and save costs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${big_shoulders.variable} ${marcellus.variable}`}
      >
        <ThemeProvider 
          defaultTheme="light" 
          enableSystem={false}
          storageKey="liko-theme"
          attribute="data-theme"
          disableTransitionOnChange={false}
          enableColorScheme={true}
        >
          <AppProviderWrapper>
            {children}
            <LanguageSwitcher/>
          </AppProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
