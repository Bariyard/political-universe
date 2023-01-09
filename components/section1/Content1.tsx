import React from 'react'
import WvContainer from '@wevisdemo/ui/react/container';

type Props = {}

const Content1 = (props: Props) => {
  return (
    <div className='text-center'>
      <WvContainer>
        <div>
          <div className='wv-font-kondolar wv-h4 wv-font-black leading-[125%] flex flex-col gap-y-[4px] !mb-[18px]'>
            <span>10 ปี</span>
            <span>3, 422 เหตุการณ์</span>
            <span>129 ตัวละคร</span>
          </div>
          <div>
            เหตุการณ์ทางการเมือง ตลอดช่วงเวลา 10กว่าปีที่ผ่าน
            มาซึ่งเหตุการณ์เหล่านี้ถูกบันทึก
            เอาไว้โดยสำนักข่าว
            ออนไลน์ต่าง ๆ เป็นจำนวนมาก
          </div>
          <div>
            เมื่อนำเอาข้อมูลต่าง ๆ มาร้อยเรียง สร้างความเชื่อม
            โยงกันก็จะออกมาเป็นเครือข่ายของ “จักรวาลการเมืองไทย” ที่บอกเราได้ว่า “ใครเป็นใครทำอะไร
            กับการเมืองไทยไว้บ้าง ?”
          </div>
        </div>
      </WvContainer>
    </div>
  )
}

export default Content1