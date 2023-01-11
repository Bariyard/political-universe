

import type { AppProps } from 'next/app';
import '@wevisdemo/ui/styles/index.css';
const WvCookieConsent = dynamic(() => import('@wevisdemo/ui/react/cookie-consent'), { ssr: false });
import { initClarity } from '../utils/clarity';
import dynamic from 'next/dynamic';
import 'dayjs/locale/th'

// Import Swiper styles
import "swiper/css/bundle";
import '../styles/globals.css';

// import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Autoplay, Navigation, Pagination],
//   // ...
// });

function onCookieAccept(options: Record<string, boolean>) {
  if (options['Analytics']) {
    initClarity();
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === "production" &&
        <WvCookieConsent
          policyUrl="https://wevis.info/cookies_1-3"
          cookieOptions={['Analytics']}
          onAccept={onCookieAccept}
        />
      }
    </>
  );
}

export default MyApp;
