import React from 'react'
import * as d3 from 'd3'
import dynamic from 'next/dynamic'
import AreaBox4ChartNew from './AreaBox4ChartNew'
import { CATEGORY_INFO } from '../utils'
const DynamicBox4AreaChart = dynamic(
  () => import('./AreaBox4ChartNew'),
  { ssr: false }
)

type Props = {}

export type VIZ4_TYPE = { year: number, positive: number, negative: number }
const Box4ChartCollection = (props: Props) => {
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
    <div className='' id="wrapper">
      <div className='flex flex-row'>
        <div className='inline-flex items-center w-[111px] gap-x-[6px] flex-grow-0'>
          <div className='flex-grow-0 wv-ibmplex wv-bold wv-b7 text-right'>{CATEGORY_INFO[0].title}</div>
          <div className='flex-shrink-0 w-[30px] h-[30px]'>{CATEGORY_INFO[0].icon}</div>
        </div>
        <div >
          <DynamicBox4AreaChart series={series1} />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='inline-flex items-center w-[111px] gap-x-[6px] flex-grow-0'>
          <div className='flex-grow-0 wv-ibmplex wv-bold wv-b7 text-right'>{CATEGORY_INFO[1].title}</div>
          <div className='flex-shrink-0 w-[30px] h-[30px]'>{CATEGORY_INFO[1].icon}</div>
        </div>
        <div >
          <DynamicBox4AreaChart series={series2} />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='inline-flex items-center w-[111px] gap-x-[6px] flex-grow-0'>
          <div className='flex-grow-0 wv-ibmplex wv-bold wv-b7 text-right'>{CATEGORY_INFO[2].title}</div>
          <div className='flex-shrink-0 w-[30px] h-[30px]'>{CATEGORY_INFO[2].icon}</div>
        </div>
        <div >
          <DynamicBox4AreaChart series={series3} />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='inline-flex items-center w-[111px] gap-x-[6px] flex-grow-0'>
          <div className='flex-grow-0 wv-ibmplex wv-bold wv-b7 text-right'>{CATEGORY_INFO[3].title}</div>
          <div className='flex-shrink-0 w-[30px] h-[30px]'>{CATEGORY_INFO[3].icon}</div>
        </div>
        <div >
          <DynamicBox4AreaChart series={series4} />
        </div>
      </div>
    </div>
  )
}

export default Box4ChartCollection