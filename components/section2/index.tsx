import dynamic from 'next/dynamic'
import Box1 from './Box1'
import Box3 from './Box3'
import Box4 from './Box4'
import Box4ChartCollection from './Box4ChartCollection'
import Box5 from './Box5'
import * as d3 from 'd3'
import React from 'react'
import { VIZ4_TYPE } from './Box4ChartCollection'
import { CATEGORY_INFO } from '../utils'

const DynamicStackedAreaChart = dynamic(
  () => import('./StackedAreaChartNew'),
  { ssr: false }
)

const DynamicBox5ChartNew = dynamic(
  () => import('./Box5ChartNew'),
  { ssr: false }
)


type Props = {}



const Section2 = (props: Props) => {

  const [series, setSeries] = React.useState<ApexAxisChartSeries>([])
  const [series1, setSeries1] = React.useState<ApexAxisChartSeries>([])
  const [series2, setSeries2] = React.useState<ApexAxisChartSeries>([])
  const [series3, setSeries3] = React.useState<ApexAxisChartSeries>([])
  const [series4, setSeries4] = React.useState<ApexAxisChartSeries>([])

  const loadDataSet = React.useCallback(async () => {

    const csv = await d3.csv<VIZ4_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz4-[format2]sum-all-positive-negative-event.csv`, d3.autoType)
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
      return [{
        name: "positive",
        data: positiveData
      },
      {
        name: 'negative',
        data: negativeData
      }]
    }


    setSeries(processData(csv))
    setSeries1(processData(csv1))
    const csv2 = await d3.csv<VIZ4_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz5[ตำรวจ & ทหาร]-sum-all-positive-negative-event-format-2.csv`, d3.autoType)
    setSeries2(processData(csv2))
    const csv3 = await d3.csv<VIZ4_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz5[ศาล & องค์กรอิสระ]-sum-all-positive-negative-event-format-2.csv`, d3.autoType)
    setSeries3(processData(csv3))
    const csv4 = await d3.csv<VIZ4_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz5[พรรคการเมือง & กลุ่มการเมือง]-sum-all-positive-negative-event-format-2.csv`, d3.autoType)
    setSeries4(processData(csv4))
    setCsvData(processData(csv))

  }, [])

  React.useEffect(() => {
    loadDataSet()
  }, [loadDataSet])


  const [selectFilter, setSelectFilter] = React.useState('ทั้งหมด')
  const [csvData, setCsvData] = React.useState<ApexAxisChartSeries>([])
  React.useEffect(() => {
    switch (selectFilter) {
      case 'ทั้งหมด': setCsvData(series); break;
      case CATEGORY_INFO[0].title: setCsvData(series1); break;
      case CATEGORY_INFO[1].title: setCsvData(series2); break;
      case CATEGORY_INFO[2].title: setCsvData(series3); break;
      case CATEGORY_INFO[3].title: setCsvData(series4); break;

    }
  }, [selectFilter, series, series1, series2, series3, series4])


  return (
    <div id='section2' className='max-w-[1100px] mx-auto flex flex-col gap-y-[36px]'>
      <div className='flex flex-col items-center min-h-screen
        desktop:flex-row'>
        <div className='flex-grow'>
          <div className='wv-kondolar wv-bold wv-h8 text-center !mb-[12px]'>ภาพรวมเหตุการณ์ทางการเมือง ย้อนหลัง  10 ปี</div>
          <DynamicStackedAreaChart step={0} />
        </div>
        <div className='w-[360px] h-fit'>
          <Box1 key={`box-1`} opacity={0.5} />
        </div>
      </div>
      <div className='flex flex-col items-center min-h-screen
        desktop:flex-row'>
        <div className='flex-grow'><div className='wv-kondolar wv-bold wv-h8 text-center !mb-[12px]'>ภาพรวมเหตุการณ์ทางการเมือง ย้อนหลัง  10 ปี</div><DynamicStackedAreaChart step={1} /></div>
        <div className='w-[360px] h-fit'>
          <Box1 key='box-2' />
        </div>
      </div>
      <div className='flex flex-col items-center min-h-screen
        desktop:flex-row'>
        <div className='flex-grow'><div className='wv-kondolar wv-bold wv-h8 text-center !mb-[12px]'>ภาพรวมเหตุการณ์ทางการเมือง ย้อนหลัง  10 ปี</div><DynamicStackedAreaChart step={2} /></div>
        <div className='w-[360px] h-fit'>
          <Box3 />
        </div>
      </div>
      <div className='flex flex-col items-center min-h-screen
        desktop:flex-row'>
        <div className='flex-grow flex flex-col items-center'>
          <div className='wv-kondolar wv-bold wv-h8 text-center !mb-[12px]'>ภาพรวมเหตุการณ์ทางการเมืองแยกตามกลุ่มการเมืองย้อนหลัง  10 ปี</div>
          <Box4ChartCollection />
        </div>
        <div className='w-[360px] h-fit'>
          <Box4 />
        </div>
      </div>
      <div className='flex flex-col items-center min-h-screen
        desktop:flex-row'>
        <div className='flex-grow'><DynamicBox5ChartNew step={5} selectFilter={selectFilter} csvData={csvData} /></div>
        <div className='w-[360px] h-fit'>
          <Box5 setSelectFilter={setSelectFilter} />
        </div>
      </div>

    </div >

  )
}

export default Section2