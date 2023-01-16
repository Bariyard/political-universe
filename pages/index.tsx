import Head from 'next/head'

import TestBTN from '../components/TestBTN';
import TestStyle from '../components/TestStyle';

import WvNavbar from '@wevisdemo/ui/react/navbar';
import WvNavButton from '@wevisdemo/ui/react/nav-button';
import WvFooter from '@wevisdemo/ui/react/footer';
import { useRouter, usePathname } from 'next/navigation'
import Section1 from '../components/section1';
import Section2 from '../components/section2/index';

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className='bg-black text-white'>
      <WvNavbar title="POLITICAL UNIVERSE" >
        <WvNavButton active={pathname === '/'} onClick={() => router.replace('/')}>Home</WvNavButton>
        <WvNavButton active={pathname === '/about'} onClick={() => router.replace('/about')}>About</WvNavButton>
      </WvNavbar>
      <Section1 />
      <Section2 />
      <h1 className="text-3xl bold underline">
        Hello, Next.js!
      </h1>
      <TestBTN />
      <TestStyle />
      <WvFooter />
    </div>
  )
}
