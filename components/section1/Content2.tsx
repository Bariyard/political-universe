import WvContainer from '@wevisdemo/ui/react/container'
import React from 'react'
import { CATEGORY_INFO } from '../utils'

type Props = {}

const Content2 = (props: Props) => {
  const CONTENT = [
    { ...CATEGORY_INFO[0], description: <div>ได้แก่ <ul className="list-disc list-inside"><li>สมาชิกราชวงศ์จักรี </li><li>ประธานองคมนตรี</li></ul></div> },
    { ...CATEGORY_INFO[1], description: <div>ได้แก่ <ul className="list-disc list-inside"><li>ผู้บัญชาการทหารบก (ผบ. ทบ.) </li><li>ผู้บัญชาการทหารเรือ (ผบ. ทร.) </li><li>ผู้บัญชาการทหารอากาศ (ผบ. ทอ.) </li><li>ผู้บัญชาการทหารสูงสุด (ผบ. สส.) </li><li>ผู้บัญชาการตำรวจแห่งชาติ (ผบ. ตร.)</li></ul></div> },
    { ...CATEGORY_INFO[2], description: <div>ได้แก่ <ul className="list-disc list-inside"><li>ศาลรัฐธรรมนูญ</li><li>ศาลปกครอง</li><li>ศาลยุติธรรม</li><li>คณะกรรมการการเลือกตั้ง (กกต.)</li><li>ผู้ตรวจการแผ่นดิน</li><li>คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ (ปปช.)</li><li>และคณะกรรมการตรวจเงินแผ่นดิน (คตง.)</li></ul></div> },
    { ...CATEGORY_INFO[3], description: <div>ได้แก่ <ul className="list-disc list-inside"><li>พรรคการเมือง</li><li>สมาชิกสภาผู้แทนราษฎร (ส.ส.)</li><li>สมาชิกวุฒิสภา (ส.ว.)</li><li>สมาชิกคณะรัฐมนตรี (ครม.)</li></ul></div> },
  ]
  return (
    <div className='flex flex-col items-center text-center
    max-w-[957px] mx-auto mb-[140px]'>
      <div className='flex flex-col gap-y-[30px]'>
        <div className='wv-kondolar wv-h4 wv-black leading-[125%]'>
          ใครอยู่ในจักรวาล
        </div>
        <div className='wv-ibmplex wv-b3 leading-[150%] max-w-[487px] !mx-auto'>ตัวละครการเมืองไทยที่ถูกคัดเลือกจากองค์กรหรือบุคคลที่มีบทบาท/อยู่ในตำแหน่งช่วงรัฐบาลประยุทธ์ จันทร์โอชา 2 และแบ่งตัวละครออกเป็น 4 กลุ่ม</div>
        <div className='flex flex-row gap-[20px] text-neutral-super-black'>
          {CONTENT.map((data) => (
            <div key={data.title}
              className='bg-white rounded-[10px] px-[15px] py-[20px]
                flex flex-col items-center desktop:w-1/4 h-fit '>
              <div className='w-[100px] h-[100px]'>{data.icon}</div>
              <div className='wv-kondolar wv-h7 wv-black 
                !mt-[40px] !mb-[8px] text-center'>
                {data.title}
              </div>
              <div className='wv-ibmplex wv-b5 leading-[150%] text-left'>
                {data.description}
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  )
}

export default Content2 