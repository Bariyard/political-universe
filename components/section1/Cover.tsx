import React from 'react'
import WvContainer from '@wevisdemo/ui/react/container';

type Props = {}

const Cover = (props: Props) => {
  return (
    <WvContainer>
      <div className='text-center flex flex-col gap-y-[10px] mb-[41px]'>
        <div className='wv-font-kondolar wv-h4 wv-font-black leading-[125%] '>
          “จักรวาล<br />
          การเมืองไทย”
        </div>
        <div className='wv-font-kondolar wv-h4 wv-font-black leading-[125%]'>
          ใครเป็นใคร<br />
          ทำอะไรกันไว้บ้าง ?
        </div>
        <div className='wv-font-kondolar wv-h7 leading-[140%]'>
          ส่องเหตุการณ์การเมืองไทย<br />
          ย้อนหลัง 10 ปี
        </div>
        <div className='wv-font-kondolar wv-b5 wv-font-bold leading-[150%]'>
          อัปเดตล่าสุด:  6 ตุลาคม 2565
        </div>

      </div>
      <div className='flex flex-col justify-center items-center text-center gap-y-[9px] animate-bounce'>
        <span className='wv-font-kondolar wv-u1 wv-font-semibold'>ไปต่อ</span>
        <svg width={15} height={31} viewBox="0 0 15 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.79289 30.7071C7.18342 31.0976 7.81658 31.0976 8.20711 30.7071L14.5711 24.3431C14.9616 23.9526 14.9616 23.3195 14.5711 22.9289C14.1805 22.5384 13.5474 22.5384 13.1569 22.9289L7.5 28.5858L1.84315 22.9289C1.45262 22.5384 0.819458 22.5384 0.428933 22.9289C0.0384088 23.3195 0.0384088 23.9526 0.428933 24.3431L6.79289 30.7071ZM6.5 4.37114e-08L6.5 30L8.5 30L8.5 -4.37114e-08L6.5 4.37114e-08Z" fill="white" />
        </svg>
      </div>
    </WvContainer>
  )
}

export default Cover