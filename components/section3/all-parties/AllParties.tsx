import * as d3 from 'd3'
import dynamic from 'next/dynamic'
import React from 'react'
import { VIZ4_TYPE } from '../../section2/Box4ChartCollection'
import AllPartiesSearch from './AllPartiesSearch'

type Props = {}

const DynamicIndividualChart = dynamic(
  () => import('./AllPartiesChart'),
  { ssr: false }
)


const AllParties = (props: Props) => {
  const [series1, setSeries1] = React.useState<ApexAxisChartSeries>([])
  const [series2, setSeries2] = React.useState<ApexAxisChartSeries>([])
  const [series3, setSeries3] = React.useState<ApexAxisChartSeries>([])
  const [series4, setSeries4] = React.useState<ApexAxisChartSeries>([])

  const loadDataSet = React.useCallback(async () => {
    const csv1 = await d3.csv<VIZ4_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz5[วัง & องคมนตรี]-sum-all-positive-negative-event-format-2.csv`, d3.autoType)

    const processData = (csv: d3.DSVParsedArray<VIZ4_TYPE>): ApexAxisChartSeries => {
      let positiveData: { x: number; y: number | null; }[] = []
      let negativeData: { x: number; y: number | null; }[] = []
      csv.map(({ year, positive, negative }) => {
        positiveData.push({
          x: year,
          y: positive
        })
        negativeData.push({
          x: year,
          y: negative
        })
      })

      for (let i = 2554; i <= 2565; i++) {
        if (positiveData.findIndex((data) => data.x === i) === -1)
          positiveData.push({
            x: i,
            y: null
          })
        if (negativeData.findIndex((data) => data.x === i) === -1)
          negativeData.push({
            x: i,
            y: null
          })
      }

      positiveData = positiveData.sort((a, b) => a.x - b.x)
      negativeData = negativeData.sort((a, b) => a.x - b.x)
      // console.log(positiveData);
      return [{
        name: "positive",
        data: positiveData
      },
      {
        name: 'negative',
        data: negativeData
      }]
    }

    setSeries1(processData(csv1))
    const csv2 = await d3.csv<VIZ4_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz5[ตำรวจ & ทหาร]-sum-all-positive-negative-event-format-2.csv`, d3.autoType)
    setSeries2(processData(csv2))
    const csv3 = await d3.csv<VIZ4_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz5[ศาล & องค์กรอิสระ]-sum-all-positive-negative-event-format-2.csv`, d3.autoType)
    setSeries3(processData(csv3))
    const csv4 = await d3.csv<VIZ4_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz5[พรรคการเมือง & กลุ่มการเมือง]-sum-all-positive-negative-event-format-2.csv`, d3.autoType)
    setSeries4(processData(csv4))

  }, [])

  React.useEffect(() => {
    loadDataSet()
  }, [loadDataSet])


  return (
    <div id='section3-allparties' className='min-h-screen flex flex-col gap-x-[66px] w-full max-w-[1170px] mx-auto
      justify-center items-center 
      desktop:flex-row'>
      <div className='w-full '>
        <div className='wv-kondolar wv-bold wv-h8 !mb-[12px] text-center'>ภาพรวมเหตุการณ์การเมืองย้อนหลังกว่า 10 ปี</div>
        <div className='hidden tablet:flex flex-col justify-center h-full max-h-[80vh]'>
          <DynamicIndividualChart step={5} selectFilter={""} csvData={[...series4, ...series3, ...series1, ...series2,]} />
        </div>
      </div>
      <AllPartiesSearch />
    </div>

  )
}

export default AllParties