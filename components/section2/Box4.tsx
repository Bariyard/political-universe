import React from 'react'
import { CATEGORY_INFO, getCategoryIcon, NEGATIVE_ICON_COLOR, PM_01, PM_02, POSITIVE_ICON_COLOR } from '../utils'

import * as d3 from 'd3'
type Props = {}

type BOX4_VIZ1_TYPE = {
  categories: 'string'
  total_event: number
  total_person: number
  title: string;
  id: number;
  bgcolor: string;
  bordercolor: string;
  icon: JSX.Element;

}

type BOX4_VIZ2_RAW = {
  categories: string,
  period: string,
  plus: number,
  minus: number,
  total: number,
  plus_percentage: number,
  minus_percentage: number,
}

type BOX4_VIZ2_TYPE = {
  [index: string | number]: Omit<BOX4_VIZ2_RAW, 'period'>[]
}

const Box4 = (props: Props) => {
  const [box4Viz1Data, setBox4Viz1Data] = React.useState<BOX4_VIZ1_TYPE[]>([])
  const [box4Viz2Data, setBox4Viz2Data] = React.useState<BOX4_VIZ2_TYPE>()
  const fetchBox4 = React.useCallback(
    async () => {
      const VIZ_DATA = [
        {
          icon:
            <PM_01 />,
          title: 'รัฐบาลยิ่งลักษณ์',
          count: 2433,
          positive_count: 1000,
          negative_count: 2433,
        },
        {
          icon:
            <PM_02 />,
          title: 'รัฐบาลประยุทธ์',
          count: 4033,
          positive_count: 4000,
          negative_count: 33,

        }
      ]

      // Viz1
      const csv1 = await d3.csv<BOX4_VIZ1_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz5-sum-event-person-filter-by-category.csv`, d3.autoType)
      let list: BOX4_VIZ1_TYPE[] = []
      csv1.map((data, index) => {
        list = [...list, { ...data, ...CATEGORY_INFO[index] }]
      })
      setBox4Viz1Data(list)

      const csv2 = await d3.csv<BOX4_VIZ2_RAW>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz5-sum-by-categories-percentage.csv`, d3.autoType)
      // let list: BOX4_VIZ1_TYPE[] = []
      console.log(new Set(csv2.map((data) => data.categories)));

      let viz2Object: BOX4_VIZ2_TYPE = Object.fromEntries(Array.from(new Set(csv2.map((data) => data.period))).map(key => [key, []]));
      csv2.map(({ period, ...rest }) => {
        viz2Object[period] = [...viz2Object[period], { ...rest }]
        // list = [...list, { ...data, ...CATEGORY_INFO[index] }]
      })

      console.log(viz2Object);

      setBox4Viz2Data(viz2Object)
    },
    [setBox4Viz1Data, setBox4Viz2Data],
  )

  React.useEffect(() => {
    fetchBox4()
  }, [fetchBox4])

  console.log(box4Viz2Data)

  const VIZ_DATA = [
    {
      period: 'PM_01',
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
      period: 'PM_02',
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
        {box4Viz1Data.map((data) => (
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
        {VIZ_DATA.map((data, index) => (
          <div key={data.title} className='flex flex-col gap-y-[6px]  text-center item-center justify-center'>
            <div className='w-[60px] h-[60px] mx-auto'>{data.icon}</div>
            <div className='wv-ibmplex wv-b6 wv-bold'>{data.title}</div>
            <div className='wv-ibmplex wv-b6'>{data.count} เหตุการณ์</div>
            <div className='flex flex-col items-start gap-y-1'>
              {box4Viz2Data && box4Viz2Data[data.period].map((item, index) => (
                <div key={`${data.title}-sum`}
                  className='inline-flex items-center gap-x-[4px] '>
                  <div className='w-[25px] h-[25px]'>{CATEGORY_INFO[index].icon}</div>
                  <div className='inline-flex items-center gap-x-[4px]'>
                    <div className='wv-ibmplex wv-bold wv-b7'>{item.plus_percentage.toFixed(0)}%</div>
                    <div className='inline-flex'>
                      <div className='h-[16px] bg-action-positive' style={{ width: `${item.plus_percentage / 2}px` }} />
                      <div className='h-[16px] bg-action-negative' style={{ width: `${item.minus_percentage / 2}px` }} />
                    </div>
                    <div className='wv-ibmplex wv-bold wv-b7'>{item.minus_percentage.toFixed(0)}%</div>
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