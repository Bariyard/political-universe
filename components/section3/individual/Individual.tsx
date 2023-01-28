import dynamic from 'next/dynamic'
import React from 'react'
import { useIndividualStore } from '../../../store/individual'
import IndividualInfo from './IndividualInfo'
import IndividualTimeline from './IndividualTimeline'

type Props = {}

const DynamicIndividualChart = dynamic(
  () => import('./IndividualChart'),
  { ssr: false }
)

const Individual = (props: Props) => {

  const csvData = useIndividualStore((state) => state.individualAgg)

  return (
    <div id='section3-individual' className='min-h-screen flex flex-col gap-x-[66px] max-w-[1170px] mx-auto mt-[36px]
      w-screen justify-center items-center
      desktop:flex-row'>
      <div className='w-full desktop:w-auto'>
        <div className='wv-kondolar wv-bold wv-h8 !mb-[12px] text-center hidden tablet:block'>ภาพรวมเหตุการณ์การเมืองย้อนหลังกว่า 10 ปี</div>
        <div className='hidden desktop:flex flex-col justify-center h-full desktop:max-h-[80vh]'>
          <IndividualInfo />
          <div className='hidden tablet:block'>
            <DynamicIndividualChart step={5} selectFilter={""} csvData={csvData} />
          </div>
        </div>
      </div>
      <IndividualTimeline />
    </div>

  )
}

export default Individual