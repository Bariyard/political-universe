import { PERSON_TYPE } from '../models/event'
import { getCategoryBorderColor, getCategoryIcon } from './utils'


const MemberCard = ({ person, category, total_event }: PERSON_TYPE) => {
  const personImg = `bg-${person.replaceAll(' ', '-')}`
  return (
    <div className='flex flex-row px-[8px] py-[6px] gap-x-[8px] items-center'>
      <div className={`${getCategoryBorderColor(category)} flex-shrink-0 border-[4px] rounded-full w-[64px] h-[64px]`} >
        <div className={`grayscale  ${personImg} bg-contain w-full h-full rounded-full`} />
      </div>
      <div className='flex-grow'>
        <div className='wv-ibmplex wv-bold wv-b4'>
          {person}
        </div>
        <div className='inline-flex gap-x-[4px]'>
          <div className='w-[19px] h-[19px]'>{getCategoryIcon(category)}</div>
          <div className='wv-ibmplex wv-bold wv-b6'>{category}</div>
          <div className='wv-ibmplex wv-b6'>{total_event} เหตุการณ์</div>
        </div>
      </div>
      <div className='flex-shrink-0 w-fit inline-flex gap-x-[4px] items-center cursor-pointer'>
        <div className='wv-ibmplex wv-u4 wv-semibold'>ดูเหตุการณ์</div>
        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-3.49691e-07 0L0 8L5 4L-3.49691e-07 0Z" fill="black" />
        </svg>
      </div>

    </div>
  )
}

export default MemberCard