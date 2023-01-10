import dayjs from 'dayjs'
import React from 'react'
import { EVENT_TYPE } from '../models/event'
import { NEGATIVE_ICON_COLOR, POSITIVE_ICON_COLOR } from './utils'


const EventCard = ({ date_time, title, score }: EVENT_TYPE) => {
  return (
    <div className='shadow-sm rounded-[6px] border-neutral-super-black border-[1px]'>
      <div className={`w-full h-[6px] rounded-tl-[6px] rounded-tr-[6px]
       ${score > 0 ? 'bg-action-positive' : 'bg-action-negative'}
      `} />
      <div className='p-[10px] flex flex-row gap-x-[20px]'>
        <div className='flex-shrink-0'>
          <div className='wv-font-anuphan wv-b5 wv-font-bold !mb-[4px] leading-[150%]'>{dayjs(date_time, 'YYYY-MM-DD HH:mm:ss').format('D MMM YYYY')}</div>
          {/* <div>17 ธ.ค. 2554</div> */}
          {score > 0 ?
            <div className='bg-action-soft-positive py-[7.5px] px-[9.5px] rounded-[5px]
              flex flex-row gap-x-[6px] items-center'>
              <POSITIVE_ICON_COLOR />
              <div className='wv-font-anuphan wv-u2 wv-font-semibold'>ผลดี</div>
            </div>
            :
            <div className='bg-action-soft-negative py-[7.5px] px-[9.5px] rounded-[5px]
            flex flex-row gap-x-[6px] items-center'>
              <NEGATIVE_ICON_COLOR />
              <div className='wv-font-anuphan wv-u2 wv-font-semibold'>ผลเสีย</div>
            </div>}
        </div>
        <div>
          <div className='text-left wv-font-kondolar wv-h11 wv-font-bold'>
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard