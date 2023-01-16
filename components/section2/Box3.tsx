import React from 'react'
import * as d3 from 'd3'
import { POSITIVE_ICON_COLOR, NEGATIVE_ICON_COLOR, POSITIVE_BW, NEGATIVE_BW, PM_01, PM_02 } from '../utils'
type Props = {}

const Box3 = (props: Props) => {
  const [expand, setExpand] = React.useState(-1)
  const CONTENT = [
    {
      icon: <POSITIVE_ICON_COLOR />,
      title: 'เป็นผลดี',
      desc: 'เป็นผลดีต่อการเกิดขึ้นและคงอยู่ของรัฐบาลนั้น',
      example: [
        'พท.ขู่ ปชป.ถอดถอน “ปู” เจอฟ้องกลับ ฐานแจ้งความเท็จ',
        `“ป๋าเปรม” ขอบคุณนายกฯ บิ๊กเหล่าทัพอวยพร ชมยอมเหนื่อยให้คนไทยมีสุข`,
        `(ชมคลิป) สั่งยุบแล้ว! อนค.กู้เงินหัวหน้าพรรคผิด ม.72 ศาลฯ ชี้ทำสัญญาเอื้อประโยชน์-ผิดปกติวิสัย ตัดสิทธิ กก.บห.10 ปี`,
      ]
    },
    {
      icon: <NEGATIVE_ICON_COLOR />,
      title: 'เป็นผลลบ',
      desc: 'เป็นผลไม่ดีต่อการเกิดขึ้นและคงอยู่ของรัฐบาลนั้น',
      example: [
        'พท.ขู่ ปชป.ถอดถอน “ปู” เจอฟ้องกลับ ฐานแจ้งความเท็จ',
        `“ป๋าเปรม” ขอบคุณนายกฯ บิ๊กเหล่าทัพอวยพร ชมยอมเหนื่อยให้คนไทยมีสุข`,
        `(ชมคลิป) สั่งยุบแล้ว! อนค.กู้เงินหัวหน้าพรรคผิด ม.72 ศาลฯ ชี้ทำสัญญาเอื้อประโยชน์-ผิดปกติวิสัย ตัดสิทธิ กก.บห.10 ปี`,
      ]
    }
  ]

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

  return (
    <div className='py-[10px] px-[10px] border-dashed border-white border-[1px] rounded-[10px] text-center h-full
              flex flex-col justify-center gap-y-[10px]'>
      {/* <div className='wv-kondolar wv-bold wv-h11 leading-[140%] !mb-[10px]'>จากข้อมูลข่าวออนไลน์ย้อนหลัง 10 ปีกว่า</div> */}
      <div className='wv-kondolar wv-bold wv-h8 leading-[140%]'>
        แต่ละเหตุการณ์สามารถระบุ<br />
        ความสัมพันธ์ต่อรัฐบาลช่วงนั้น<br />
        ได้ 2 แบบ คือ
      </div>
      {/* <div className='flex flex-col gap-y-[10px]'> */}
      {CONTENT.map((data, index) => (
        <div key={`${data.title}`}
          className='rounded-[4px] border-[1px] border-white p-[10px]'>
          <div className='flex flex-row gap-x-[10px]
              border-b-white border-dashed border-b-[1px]'>
            <div className='inline-flex justify-center items-center gap-x-[2px] w-2/3'>
              <div className='w-[20px] h-[20px]'>
                {data.icon}
              </div>
              <div className='wv-ibmplex wv-h10 wv-bold leading-[140%]'>{data.title}</div>
            </div>
            <div className='wv-ibmplex wv-h11 leading-[140%] text-left'>
              {data.desc}
            </div>
          </div>
          <button className='inline-flex items-center gap-1' onClick={() => { expand === index ? setExpand(-1) : setExpand(index) }}>
            <span className='wv-ibmplex wv-u4'>ดูตัวอย่าง</span>
            <svg width={9} height={6} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 0.5L0.5 0.5L4.5 5.5L8.5 0.5Z" fill="white" />
            </svg>
          </button>

          {expand === index &&
            <div className='max-h-[50px] overflow-y-scroll'>
              <div className='flex flex-col gap-y-1 items-center'>
                {data.example.map((item) => (
                  <div key={`example-${data.title}}}`}
                    className={`${index === 0 ? 'bg-action-positive' : 'bg-action-negative'} max-w-[266px]
                    text-center wv-ibmplex wv-h11 wv-bold text-black px-2 py-1 rounded-[2px]`}>{item}</div>
                ))}
              </div>
            </div>}
        </div>
      ))}
      <div className='wv-kondolar wv-h11 wv-bold'>
        เมื่อสรุปแล้ว พบว่ารัฐบาลยิ่งลักษณ์<br />
        มีแนวโน้มเหตุการณ์เป็นลบมากกว่า
      </div>
      <div className='flex flex-row gap-x-[8px] px-[30px] pb-[30px]'>
        {VIZ_DATA.map((data) => (
          <div key={data.title} className='flex flex-col items-center gap-y-[6px]  text-center'>
            <div className='w-[60px] h-[60px]'>{data.icon}</div>
            <div className='wv-ibmplex wv-b6 wv-bold'>{data.title}</div>
            <div className='wv-ibmplex wv-b6'>{data.count} เหตุการณ์</div>
            <div>
              <div className='flex flex-row justify-start items-center gap-x-1'>
                <div className='w-[12px] h-[12px]'><POSITIVE_BW /></div>
                <div className='h-[12px] bg-action-positive' style={{ width: `${(data.positive_count / data.count) * 72}px` }} />
                <div>
                  {((data.positive_count / data.count) * 100).toFixed(0)}%
                </div>
              </div>
              <div className='flex flex-row justify-start items-center gap-x-1'>
                <div className='w-[12px] h-[12px]'><NEGATIVE_BW /></div>
                <div className='h-[12px] bg-action-negative' style={{ width: `${(data.negative_count / data.count) * 72}px` }} />
                <div>
                  {((data.negative_count / data.count) * 100).toFixed(0)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Box3