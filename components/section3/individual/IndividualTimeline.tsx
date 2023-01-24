import React from 'react'
import { NEGATIVE_ICON_COLOR, PM_01, PM_02, POSITIVE_ICON_COLOR } from '../../utils'
import IndividualDataTable from './IndividualDataTable'

type Props = {}

const IndividualTimeline = (props: Props) => {
  const [searchText, setSearchText] = React.useState("")
  const defaultFilter = {
    pm_01: true,
    pm_02: true,
    positive: true,
    negative: true,
    sort: 'asc',
    year: -1,

  }
  const [filter, setFilter] = React.useState(defaultFilter)
  return (
    <div className='max-w-[1189px] mx-auto'>
      <div>

      </div>
      <div className='max-w-[480px] '>
        <div className='relative flex flex-row justify-center items-center rounded-[10px] px-[10px] border-white border-[1px]'>
          <div className='inline-flex items-center gap-x-[10px]'>
            <svg className='w-[24px] h-[25px] ml-auto' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.0748 10.5578C14.0748 12.8071 12.259 14.6157 10.0374 14.6157C7.8158 14.6157 6 12.8071 6 10.5578C6 8.30855 7.8158 6.5 10.0374 6.5C12.259 6.5 14.0748 8.30855 14.0748 10.5578ZM13.81 16.5169C12.7197 17.2126 11.4255 17.6157 10.0374 17.6157C6.15075 17.6157 3 14.4558 3 10.5578C3 6.6599 6.15075 3.5 10.0374 3.5C13.924 3.5 17.0748 6.6599 17.0748 10.5578C17.0748 11.9764 16.6575 13.2973 15.9393 14.4036L20.5006 18.9967L18.3867 21.1254L13.81 16.5169Z" fill="white" />
            </svg>
            <input type="text" placeholder='ตรวจสอบรายบุคคล' className='text-white wv-kondolar wv-bold text-[32px] leading-[140%] bg-transparent border-transparent focus:border-transparent focus:ring-0'
              value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          </div>
          <svg className='w-[24px] h-[24px] absolute right-[12.5px] cursor-pointer' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSearchText("")}>
            <g clipPath="url(#clip0_1121_462062)">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 0.5C2.20435 0.5 1.44129 0.816071 0.87868 1.37868C0.316071 1.94129 0 2.70435 0 3.5L0 21.5C0 22.2956 0.316071 23.0587 0.87868 23.6213C1.44129 24.1839 2.20435 24.5 3 24.5H21C21.7956 24.5 22.5587 24.1839 23.1213 23.6213C23.6839 23.0587 24 22.2956 24 21.5V3.5C24 2.70435 23.6839 1.94129 23.1213 1.37868C22.5587 0.816071 21.7956 0.5 21 0.5L3 0.5ZM17.781 7.781C17.9218 7.64017 18.0009 7.44916 18.0009 7.25C18.0009 7.05084 17.9218 6.85983 17.781 6.719C17.6402 6.57817 17.4492 6.49905 17.25 6.49905C17.0508 6.49905 16.8598 6.57817 16.719 6.719L12 11.4395L7.281 6.719C7.21127 6.64927 7.12848 6.59395 7.03738 6.55621C6.94627 6.51848 6.84862 6.49905 6.75 6.49905C6.65138 6.49905 6.55373 6.51848 6.46262 6.55621C6.37152 6.59395 6.28873 6.64927 6.219 6.719C6.14927 6.78873 6.09395 6.87152 6.05621 6.96262C6.01848 7.05373 5.99905 7.15138 5.99905 7.25C5.99905 7.34862 6.01848 7.44627 6.05621 7.53738C6.09395 7.62848 6.14927 7.71127 6.219 7.781L10.9395 12.5L6.219 17.219C6.07817 17.3598 5.99905 17.5508 5.99905 17.75C5.99905 17.9492 6.07817 18.1402 6.219 18.281C6.35983 18.4218 6.55084 18.5009 6.75 18.5009C6.94916 18.5009 7.14017 18.4218 7.281 18.281L12 13.5605L16.719 18.281C16.7887 18.3507 16.8715 18.406 16.9626 18.4438C17.0537 18.4815 17.1514 18.5009 17.25 18.5009C17.3486 18.5009 17.4463 18.4815 17.5374 18.4438C17.6285 18.406 17.7113 18.3507 17.781 18.281C17.8507 18.2113 17.906 18.1285 17.9438 18.0374C17.9815 17.9463 18.0009 17.8486 18.0009 17.75C18.0009 17.6514 17.9815 17.5537 17.9438 17.4626C17.906 17.3715 17.8507 17.2887 17.781 17.219L13.0605 12.5L17.781 7.781Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1121_462062">
                <rect width={24} height={24} fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className='mt-[8px] overflow-y-scroll bg-white text-neutral-super-black rounded-[10px] py-[20px] px-[12px]
          flex flex-col gap-y-[10px] justify-center items-center'>
          <div className='wv-kondolar wv-bold wv-h8'>สรุปเหตุการณ์การเมืองที่เกี่ยวข้อง</div>
          <div className='wv-ibmplex wv-b4'>เลือกช่วงเวลาของรัฐบาล</div>
          <div className='flex flex-row gap-x-[10px]'>
            <div className='rounded-[4px] px-[12px] py-[6.5px] inline-flex gap-x-[6px] items-center border-neutral-super-black border-[1px] cursor-pointer'
              onClick={() => setFilter((prev) => ({ ...prev, pm_01: !prev['pm_01'] }))}>
              <input type={"checkbox"} className='text-neutral-super-black rounded-[2px] cursor-pointer' checked={filter.pm_01}
                onChange={(e) => setFilter((prev) => ({ ...prev, pm_01: !prev['pm_01'] }))} />
              <div className='w-[22px] h-[22px]'><PM_01 /></div>
              <div className='wv-ibmplex wv-u2 wv-semibold'>รัฐบาลยิ่งลักษณ์</div>
            </div>
            <div className='rounded-[4px] px-[12px] py-[6.5px] inline-flex gap-x-[6px] items-center border-neutral-super-black border-[1px] cursor-pointer'
              onClick={() => setFilter((prev) => ({ ...prev, pm_02: !prev['pm_02'] }))}>
              <input type={"checkbox"} className='text-neutral-super-black rounded-[2px] cursor-pointer' checked={filter.pm_02}
                onChange={(e) => setFilter((prev) => ({ ...prev, pm_02: !prev['pm_02'] }))} />
              <div className='w-[22px] h-[22px]'><PM_02 /></div>
              <div className='wv-ibmplex wv-u2 wv-semibold'>รัฐบาลประยุทธ์</div>
            </div>
          </div>
          <div className='wv-ibmplex wv-b4'>กรองประเภทเหตุการณ์</div>

          <div className='flex flex-row gap-x-[10px]'>
            <div className='rounded-[4px] px-[12px] py-[6.5px] inline-flex gap-x-[6px] items-center border-neutral-super-black border-[1px] cursor-pointer'
              onClick={() => setFilter((prev) => ({ ...prev, positive: !prev['positive'] }))}>
              <input type={"checkbox"} className='text-neutral-super-black rounded-[2px] cursor-pointer' checked={filter.positive}
                onChange={(e) => setFilter((prev) => ({ ...prev, positive: !prev['positive'] }))} />
              <div className='w-[14px] h-[14px]'><POSITIVE_ICON_COLOR /></div>
              <div className='wv-ibmplex wv-u5 wv-semibold'>ผลดี</div>
            </div>
            <div className='rounded-[4px] px-[12px] py-[6.5px] inline-flex gap-x-[6px] items-center border-neutral-super-black border-[1px] cursor-pointer'
              onClick={() => setFilter((prev) => ({ ...prev, negative: !prev['negative'] }))}>
              <input type={"checkbox"} className='text-neutral-super-black rounded-[2px] cursor-pointer' checked={filter.negative}
                onChange={(e) => setFilter((prev) => ({ ...prev, negative: !prev['negative'] }))} />
              <div className='w-[14px] h-[14px]'><NEGATIVE_ICON_COLOR /></div>
              <div className='wv-ibmplex wv-u5 wv-semibold'>ผลเสีย</div>
            </div>
            <select className="border-neutral-super-black border-[1px] cursor-pointer wv-ibmplex wv-u4 wv-semibold rounded-[4px] pl-[5.62px]"
              value={filter.sort}
              onChange={(e) => setFilter((prev) => ({ ...prev, sort: e.target.value }))}>
              <option value={"asc"}>เรียงตามเก่าสุด</option>
              <option value={"desc"}>เรียงตามใหม่สุด</option>
            </select>
            <select className="border-neutral-super-black border-[1px] cursor-pointer wv-ibmplex wv-u4 wv-semibold rounded-[4px] pl-[5.62px]"
              value={filter.year}
              onChange={(e) => setFilter((prev) => ({ ...prev, year: parseInt(e.target.value) }))}>
              <option value={-1}>ทั้งหมด</option>
              <option value={2022}>2022</option>
              <option value={2021}>2022</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
              <option value={2017}>2017</option>
            </select>
          </div>
          <IndividualDataTable />
        </div>
      </div>

    </div >
  )
}

export default IndividualTimeline