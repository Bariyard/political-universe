"use client"
import WvContainer from '@wevisdemo/ui/react/container';
import TestBTN from '../components/TestBTN';
import TestStyle from '../components/TestStyle';
export default function Home() {
  return (
    <div className='bg-black text-white'>
      <WvContainer>
        <h1 className="text-3xl font-bold underline">
          Hello, Next.js!
        </h1>
        <TestBTN />
        <TestStyle />

      </WvContainer>
    </div>
  )
}
