"use client"
import './globals.css'
import "@wevisdemo/ui/styles/index.css";

import WvNavbar from '@wevisdemo/ui/react/navbar';
import WvNavButton from '@wevisdemo/ui/react/nav-button';
import WvFooter from '@wevisdemo/ui/react/footer';
import { useRouter, usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='min-h-screen overflow-x-hidden'>
        <WvNavbar title="POLITICAL UNIVERSE" >
          <WvNavButton active={pathname === '/'} onClick={() => router.replace('/')}>Home</WvNavButton>
          <WvNavButton active={pathname === '/about'} onClick={() => router.replace('/about')}>About</WvNavButton>
        </WvNavbar>
        {children}
        <WvFooter />
      </body>
    </html>
  )
}
