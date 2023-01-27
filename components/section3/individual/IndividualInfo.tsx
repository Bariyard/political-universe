import dynamic from 'next/dynamic'
import React from 'react'
import { useIndividualStore } from '../../../store/store'
import { getCategoryBorderColor, getCategoryBGColor, PM_01, PM_02, POSITIVE_BW, NEGATIVE_BW } from '../../utils'

type Props = {}

const IndividualInfo = (props: Props) => {

  const INDIVIDUAL_DATA = {
    "categories": "พรรคการเมือง & กลุ่มการเมือง",
    "person": "พรรคประชาธิปัตย์",
    "id": 265,
    "groups": "พรรคการเมือง",
    "sub_categories": "สายพรรคการเมือง",
    "keyword": "ประชาธิปัตย์ , ปชป.",
    "count": 1588,
    "total_event": 1588,
    "period_1_plus": 134,
    "period_1_minus": -1071,
    "period_1_total": 1205,
    "period_2_plus": 161,
    "period_2_minus": -222,
    "period_2_total": 383,
    "period_1_plus_percentage": 11.120331950207468,
    "period_1_minus_percentage": 88.87966804979253,
    "period_2_plus_percentage": 42.03655352480418,
    "period_2_minus_percentage": 57.96344647519582,
    "img": "bg-พรรคประชาธิปัตย์"
  }

  const [selectFilter, setSelectFilter] = React.useState('')
  const individual = useIndividualStore((state) => state.individual)
  const relatedList = useIndividualStore((state) => state.relatedList)
  return (
    <>
      {
        individual &&
        <div className='flex flex-row gap-x-[20px] flex-1'>
          <div className='flex flex-col items-center gap-y-[10px] text-center justify-center'>
            <div className={`flex-shrink-0 ${getCategoryBorderColor(individual.categories)} border-[4px] rounded-full w-[64px] h-[64px]`} >
              <div className={`${individual.img} bg-contain w-full h-full rounded-full`} />
            </div>
            <div className='flex flex-col gap-y-1'>
              <div className='wv-kondolar wv-black wv-h8'>{individual.person}</div>
              <div className='wv-ibmplex wv-bold wv-b5'>{individual.total_event} เหตุการณ์</div>
            </div>
            <div className={`${getCategoryBGColor(individual.categories)} px-[10px] py-[2px] rounded-[2px]`}>
              <span className='wv-kondolar wv-bold wv-h11'>{individual.categories}</span>
            </div>
          </div>
          <div className='flex-grow flex flex-col gap-y-[12px]'>
            <div className='w-full inline-flex items-center gap-x-[11px]'>
              <div className='flex-shrink-0 wv-kondolar wv-bold wv-h9'>เหตุการณ์ที่เกี่ยวข้อง</div>
              <div className='border-[1px] border-dashed h-[1px] w-full ' />
            </div>
            <div className='flex flex-row gap-x-[8px]'>
              <div className='inline-flex items-center gap-x-[11px]'>
                <div className='w-[48px] h-[48px]'><PM_01 /></div>
                <div>
                  <div className='wv-ibmplex wv-b6 wv-bold'>รัฐบาลยิ่งลักษณ์</div>
                  <div className='wv-ibmplex wv-b6'>{individual.period_1_total} เหตุการณ์</div>
                  <div>
                    <div className='flex flex-row justify-start items-center gap-x-1'>
                      <div className='w-[12px] h-[12px]'><POSITIVE_BW /></div>
                      <div className='h-[12px] bg-action-positive' style={{ width: `${individual.period_1_plus_percentage.toFixed(0)}px` }} />
                      <div className='wv-ibmplex wv-u5 wv-semibold'>
                        {individual.period_1_plus_percentage.toFixed(0)}%
                      </div>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-1'>
                      <div className='w-[12px] h-[12px]'><NEGATIVE_BW /></div>
                      <div className='h-[12px] bg-action-negative' style={{ width: `${individual.period_1_minus_percentage.toFixed(0)}px` }} />
                      <div className='wv-ibmplex wv-u5 wv-semibold'>
                        {individual.period_1_minus_percentage.toFixed(0)}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='inline-flex items-center gap-x-[11px]'>
                <div className='w-[48px] h-[48px]'><PM_02 /></div>
                <div>
                  <div className='wv-ibmplex wv-b6 wv-bold'>รัฐบาลประยุทธ์</div>
                  <div className='wv-ibmplex wv-b6'>{individual.period_2_total} เหตุการณ์</div>
                  <div>
                    <div className='flex flex-row justify-start items-center gap-x-1'>
                      <div className='w-[12px] h-[12px]'><POSITIVE_BW /></div>
                      <div className='h-[12px] bg-action-positive' style={{ width: `${individual.period_2_plus_percentage.toFixed(0)}px` }} />
                      <div className='wv-ibmplex wv-u5 wv-semibold'>
                        {individual.period_2_plus_percentage.toFixed(0)}%
                      </div>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-x-1'>
                      <div className='w-[12px] h-[12px]'><NEGATIVE_BW /></div>
                      <div className='h-[12px] bg-action-negative' style={{ width: `${individual.period_2_minus_percentage.toFixed(0)}px` }} />
                      <div className='wv-ibmplex wv-u5 wv-semibold'>
                        {individual.period_2_minus_percentage.toFixed(0)}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full inline-flex items-center gap-x-[11px]'>
              <div className='flex-shrink-0 wv-kondolar wv-bold wv-h9'>มักร่วมเหตุการณ์กับ</div>
              <div className='border-[1px] border-dashed h-[1px] w-full ' />
            </div>
            <div className='flex flex-row gap-x-[8px]'>
              {relatedList.map((data) => (
                <div key={`related-${data.person}`} className={`flex-shrink-0 ${data.categories && getCategoryBorderColor(data.categories)} 
                  border-[4px] rounded-full w-[30px] h-[30px]
                  group relative
                  `} >
                  <div className={`${data.img} bg-contain w-full h-full rounded-full`} />
                  <div className='group-hover:opacity-100 opacity-0  -translate-x-1/2 w-[10rem] absolute -top-3 -translate-y-full bg-white text-black
                    rounded-[4px] z-30 p-[4px]'>
                    <div className='text-center wv-ibmplex wv-bold wv-b6'>{data.person}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default IndividualInfo