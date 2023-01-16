import React from 'react'
import { CATEGORY_INFO, getCategoryBorderColor, getCategoryIcon, PM_01, PM_02 } from '../utils'
type Props = {}

const Box5 = (props: Props) => {
  const FILTER_LIST = [
    { title: 'ทั้งหมด', bgcolor: 'white' },
    { ...CATEGORY_INFO[0], },
    { ...CATEGORY_INFO[1], },
    { ...CATEGORY_INFO[2], },
    { ...CATEGORY_INFO[3], },
  ]
  const [selectedFilter, setSelectedFilter] = React.useState(FILTER_LIST[0].title)

  const TOP_DATA = [
    { person: 'ประวิตร คงสุวรรณ', category: 'พรรคการเมือง & กลุ่มการเมือง', total_event: 233, },
    { person: 'ศาลรัฐธรรมนูญ', category: 'ศาล & องค์กรอิสระ', total_event: 233, img: 'bg-ศาลรัฐธรรมนูญ' },
    { person: 'เปรม ติณสูลานนท์', category: 'กลุ่มวัง & องคมนตรี', total_event: 233, img: 'bg-เปรม-ติณสูลานนท์' }
  ]

  return (
    <div className='py-[10px] px-[10px] border-dashed border-white border-[1px] rounded-[10px] text-center h-full
              flex flex-col justify-center gap-y-[10px]'>
      <div className='wv-kondolar wv-bold wv-h8 leading-[140%]'>3 ตัวละครผู้มีส่วนเกี่ยวข้องกับ<br /> เหตุการณ์การเมืองถี่ที่สุด</div>
      <div className='wv-ibmplex wv-u2 wv-semibold'>เลือกประเภทกลุ่มทางการเมืองที่คุณสนใจ</div>
      <div className='max-w-[317px] mx-auto overflow-x-scroll'>
        <div className='flex flex-row flex-grow gap-x-[6px]'>
          {FILTER_LIST.map((data) => (
            <button key={`filter-${data.title}`}
              className='flex-grow inline-flex items-center py-[8px] px-[12px] gap-x-[6px] bg-neutral-super-white rounded-[4px]'
              onClick={() => setSelectedFilter(data.title)}>
              <div className='flex-shrink-0 w-[20px] h-[20px] border-[2px] border-neutral-super-black rounded-full flex'>
                {selectedFilter === data.title &&
                  <div className='w-[10px] h-[10px] m-auto bg-neutral-super-black rounded-full' />
                }
              </div>
              <div className='whitespace-nowrap text-neutral-super-black wv-ibmplex wv-u3 wv-semibold
                inline-flex items-center gap-x-1'>
                <div className={`w-[12px] h-[12px] rounded-full ${data.bgcolor}`} />
                {data.title}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className='wv-ibmplex wv-u2 wv-semibold'>เลือกตัวละครเพื่อดูเหตุการณ์</div>
      <div className='flex flex-col gap-y-[8px]'>
        {TOP_DATA.map((data, index) => (
          <div key={`${data.person}`} className={`flex flex-row gap-x-[8px] ${index === 0 ? 'border-[3px] bg-white bg-opacity-20' : 'border-[1px]'} border-white rounded-[4px] p-[10px]`}>
            <div className='inline-flex gap-x-[8px] items-center'>
              <div className='bg-white text-neutral-super-black wv-ibmplex wv-b6 wv-bold w-[24px] h-[24px] leading-[150%]'>{index + 1}</div>
              <div className={`${getCategoryBorderColor(data.category)} border-[4px] rounded-full w-[64px] h-[64px]`} >
                <div className={`grayscale  ${data.img} bg-contain w-full h-full rounded-full`} />
              </div>
            </div>
            <div className='flex flex-col gap-y-[3px] text-left'>
              <div className='inline-flex gap-x-[4px]'>
                <div className='w-[19px] h-[19px]'>{getCategoryIcon(data.category)}</div>
                <div className='wv-ibmplex wv-bold wv-b6'>{data.category}</div>
              </div>
              <div className='wv-ibmplex wv-bold wv-b4'>
                {data.person}
              </div>
              <div className='wv-ibmplex wv-b6'>{data.total_event} เหตุการณ์</div>
              {index === 0 &&
                <div className='flex flex-col gap-y-[5px]'>
                  <div className='inline-flex items-center gap-x-[4px]'>
                    <div className='w-[25px] h-[25px]'><PM_01 /></div>
                    <div className='inline-flex items-center gap-x-[4px]'>
                      <div className='wv-ibmplex wv-bold wv-b7'>34%</div>
                      <div className='inline-flex'>
                        <div className='h-[16px] bg-action-positive' style={{ width: `${34}px` }} />
                        <div className='h-[16px] bg-action-negative' style={{ width: `${66}px` }} />
                      </div>
                      <div className='wv-ibmplex wv-bold wv-b7'>66%</div>
                    </div>
                  </div>
                  <div className='inline-flex items-center gap-x-[4px]'>
                    <div className='w-[25px] h-[25px]'><PM_02 /></div>
                    <div className='inline-flex items-center gap-x-[4px]'>
                      <div className='wv-ibmplex wv-bold wv-b7'>34%</div>
                      <div className='inline-flex'>
                        <div className='h-[16px] bg-action-positive' style={{ width: `${34}px` }} />
                        <div className='h-[16px] bg-action-negative' style={{ width: `${66}px` }} />
                      </div>
                      <div className='wv-ibmplex wv-bold wv-b7'>66%</div>
                    </div>
                  </div>
                </div>
              }
              <button className='inline-flex gap-x-[4px] items-center
                wv-ibmplex wv-4 wv-semibold'>
                ดูเหตุการณ์
                <svg width={5} height={8} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-3.49691e-07 0L0 8L5 4L-3.49691e-07 0Z" fill="white" />
                </svg>

              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Box5