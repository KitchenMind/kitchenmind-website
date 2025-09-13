import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AppProviderWrapper } from '@/contexts/app-provider-wrapper';
import LanguageSwitcher from '@/components/language-switcher';
import '@/app/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="light"
      enableSystem={false}
      storageKey="liko-theme"
      attribute="data-theme"
      disableTransitionOnChange={false}
      enableColorScheme={true}
    >
      <AppProviderWrapper>
        <Component {...pageProps} />
        <LanguageSwitcher />
      </AppProviderWrapper>
    </ThemeProvider>
  );
}

