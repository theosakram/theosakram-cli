import type { AppProps } from 'next/app';

import { QueryProvider } from '@/providers/QueryProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default MyApp;
