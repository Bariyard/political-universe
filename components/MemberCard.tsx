import { VIZ6_RAW } from '../models/individual'
import { useAllPartiesStore } from '../store/all-parties'
import { useIndividualStore } from '../store/individual'
import { getCategoryBorderColor, getCategoryIcon, scrollInToView } from './utils'

const MemberCard = ({ person, categories, total_event, img }: VIZ6_RAW) => {
  const { setSearchText, setIsSelectPerson } = useIndividualStore((state) => state)
  return (
    <div className='flex flex-row px-[8px] py-[6px] gap-x-[8px] items-center'>
      <div className={`${getCategoryBorderColor(categories)} flex-shrink-0 border-[4px] rounded-full w-[64px] h-[64px]`} >
        <div className={` ${img} bg-contain w-full h-full rounded-full`} />
      </div>
      <div className='flex-grow'>
        <div className='wv-ibmplex wv-bold wv-b4'>
          {person}
        </div>
        <div className='inline-flex gap-x-[4px]'>
          <div className='w-[19px] h-[19px]'>{getCategoryIcon(categories)}</div>
          <div className='inline-flex gap-x-[8px]'>
            <span className='wv-ibmplex wv-bold wv-b6'>{categories}</span>
            <span className='wv-ibmplex wv-b6'>{total_event} เหตุการณ์</span>
          </div>
        </div>
      </div>
      <button className='flex-shrink-0 w-fit inline-flex gap-x-[4px] items-center cursor-pointer'
        onClick={() => {
          setSearchText(person)
          setIsSelectPerson(true)
          scrollInToView('section3-individual')
        }}
      >
        <div className='wv-ibmplex wv-u4 wv-semibold'>ดูเหตุการณ์</div>
        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-3.49691e-07 0L0 8L5 4L-3.49691e-07 0Z" fill="black" />
        </svg>
      </button>

    </div>
  )
}

export default MemberCard