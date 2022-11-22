"use client"
import WvContainer from '@wevisdemo/ui/react/container';
import TestBTN from '../components/TestBTN';
export default function Home() {
  return (
    <div>
      <WvContainer>
        <h1 className="text-3xl font-bold underline">
          Hello, Next.js!
          <TestBTN />
        </h1>
      </WvContainer>
    </div>
  )
}
