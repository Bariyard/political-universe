import React from 'react'
import { CATEGORY_INFO, getCategoryIcon, NEGATIVE_ICON_COLOR, PM_01, PM_02, POSITIVE_ICON_COLOR } from '../utils'

type Props = {}

const Box4 = (props: Props) => {
  const CONTENT = [
    { ...CATEGORY_INFO[0], total_person: 33, total_event: 1963 },
    { ...CATEGORY_INFO[1], total_person: 33, total_event: 1963 },
    { ...CATEGORY_INFO[2], total_person: 33, total_event: 1963 },
    { ...CATEGORY_INFO[3], total_person: 33, total_event: 1963 },
  ]

  const VIZ_DATA = [
    {
      icon:
        <PM_01 />,
      title: 'รัฐบาลยิ่งลักษณ์',
      count: 2433,
      positive_count: 1000,
      negative_count: 2433,
      data: [
        {
          total: 100,
          positive: 21,
          negative: 79,
        },
        {
          total: 100,
          positive: 21,
          negative: 79,
        },
        {
          total: 100,
          positive: 21,
          negative: 79,
        }, {
          total: 100,
          positive: 21,
          negative: 79,
        }
      ]
    },
    {
      icon:
        <PM_02 />,
      title: 'รัฐบาลประยุทธ์',
      count: 4033,
      positive_count: 4000,
      negative_count: 33,
      data: [
        {
          total: 100,
          positive: 21,
          negative: 79,
        },
        {
          total: 100,
          positive: 21,
          negative: 79,
        },
        {
          total: 100,
          positive: 21,
          negative: 79,
        }, {
          total: 100,
          positive: 21,
          negative: 79,
        }
      ]

    }
  ]
  return (
    <div className='py-[10px] px-[10px] border-dashed border-white border-[1px] rounded-[10px] text-center h-full
    flex flex-col justify-center gap-y-[10px]'>
      <div className='wv-kondolar wv-bold wv-h8 leading-[140%]'>ตัวละครการเมืองไทยที่มี<br />
        หลากหลาย ถูกแบ่งเป็น 4 กลุ่ม<br /> ได้แก่</div>
      <div className='flex flex-col gap-y-[6px] text-left'>
        {CONTENT.map((data) => (
          <div key={`cat-${data.title}`}
            className='flex flex-row gap-x-[6px] items-center'>
            <div className='w-[37px] h-[37px]'>{data.icon}</div>
            <div className='wv-ibmplex wv-bold wv-b5 w-1/2'>{data.title}</div>
            <div>
              <div className='wv-ibmplex wv-bold wv-b6'>{data.total_person} ตัวละคร</div>
              <div className='wv-ibmplex wv-b6'>{data.total_event} เหตุการณ์</div>
            </div>
          </div>
        ))}
      </div>
      <div className='wv-ibmplex wv-semibold wv-u2'>
        สรุปเหตุการณ์
      </div>
      <div className='flex flex-row gap-x-[8px] px-[30px] '>
        {VIZ_DATA.map((data) => (
          <div key={data.title} className='flex flex-col items-center gap-y-[6px]  text-center'>
            <div className='w-[60px] h-[60px]'>{data.icon}</div>
            <div className='wv-ibmplex wv-b6 wv-bold'>{data.title}</div>
            <div className='wv-ibmplex wv-b6'>{data.count} เหตุการณ์</div>
            <div>
              {data.data.map((item, index) => (
                <div key={`${data.title}-sum`}
                  className='inline-flex items-center gap-x-[4px]'>
                  <div className='w-[25px] h-[25px]'>{CATEGORY_INFO[index].icon}</div>
                  <div className='inline-flex items-center gap-x-[4px]'>
                    <div className='wv-ibmplex wv-bold wv-b7'>{item.positive}%</div>
                    <div className='inline-flex'>
                      <div className='h-[16px] bg-action-positive' style={{ width: `${item.positive / 2}px` }} />
                      <div className='h-[16px] bg-action-negative' style={{ width: `${item.negative / 2}px` }} />
                    </div>
                    <div className='wv-ibmplex wv-bold wv-b7'>{item.negative}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='inline-flex items-center gap-x-[10px] wv-ibmplex wv-h10 wv-bold justify-center pb-[30px]'>
        <div className='inline-flex items-center gap-[2px]'><div className='w-[20px] h-[20px]'><POSITIVE_ICON_COLOR /></div><div className='leading-[140%]'>เป็นผลดี</div></div>
        <div className='inline-flex items-center gap-[2px]'><div className='w-[20px] h-[20px]'><NEGATIVE_ICON_COLOR /></div><div className='leading-[140%]'>เป็นผลลบ</div></div>
      </div>
    </div>
  )
}

export default Box4