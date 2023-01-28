import Head from 'next/head'

// import TestBTN from '../components/TestBTN';
// import TestStyle from '../components/TestStyle';

import WvNavbar from '@wevisdemo/ui/react/navbar';
import WvNavButton from '@wevisdemo/ui/react/nav-button';
import WvFooter from '@wevisdemo/ui/react/footer';
import { useRouter, usePathname } from 'next/navigation'
import Section1 from '../components/section1';
import Section2 from '../components/section2/index';
import Section3 from '../components/section3';
import Outro from '../components/Outro';

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className='bg-black text-white'>
      <Head>
        <title>Wevis | Politics Universe</title>
        <link rel="icon" href="/design_assets/sns/favicon.png" />
        <meta property="og:url" content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="จักรวาลการเมืองไทย" />
        <meta property="og:description" content="ส่องการเมืองไทยช่วง 10 กว่าปีที่ผ่านมา ใครเป็นใคร ทำอะไรกันไว้บ้าง ?" />
        <meta property="og:image" content={`${process.env.SECURE_HOST}/design_assets/sns/og.jpg`} />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`} />
        <meta name="twitter:title" content="จักรวาลการเมืองไทย" />
        <meta name="twitter:description" content="ส่องการเมืองไทยช่วง 10 กว่าปีที่ผ่านมา ใครเป็นใคร ทำอะไรกันไว้บ้าง ?" />
        <meta name="twitter:image" content={`${process.env.SECURE_HOST}/design_assets/sns/og.jpg`} />
      </Head>
      <WvNavbar title="POLITICAL UNIVERSE" >
        <WvNavButton active={pathname === '/'} onClick={() => router.replace('/')}>Home</WvNavButton>
        <WvNavButton active={pathname === '/about'} onClick={() => router.replace('/about')}>About</WvNavButton>
      </WvNavbar>
      <Section1 />
      <Section2 />
      <Section3 />
      <Outro />
      {/* <TestBTN /> */}
      {/* <TestStyle /> */}
      <WvFooter />
    </div>
  )
}
