// @ts-nocheck
import React from 'react'
import * as d3 from "d3";
import StackedAreaChart from '../section2/viz/stacked'
import { NEGATIVE_ICON_COLOR, POSITIVE_ICON_COLOR } from '../utils';
type Props = {}

const Chart = (props: Props) => {
  const svg = React.useRef<SVGSVGElement>(null);

  const drawChart = React.useCallback(async (svg: React.RefObject<SVGSVGElement>) => {
    // const csv = await d3.csv("http://localhost:3000/data/example/unemployment.csv", d3.autoType)
    // console.log(csv)
    // await StackedAreaChart(svg, csv, {
    //   x: d => d.date,
    //   y: d => d.unemployed,
    //   z: d => d.industry,
    //   yLabel: "↑ Unemployed persons",
    //   width: 500,
    //   height: 500
    // })

    const csv = await d3.csv(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz4-sum-all-positive-negative-event.csv`, d3.autoType)

    // console.log(csv)
    await StackedAreaChart(svg, csv, {
      x: d => d.year,
      y: d => d.count,
      z: d => d.type,
      xType: d3.scaleLinear,
      yLabel: "จำนวนเหตุการณ์",
      // width: Number(d3.select('#chart').style('width')),
      height: 500,
      // yDomain: [-200, 200],
      // xFormat: d3.format("%"),
      colors: ["#60C1AF", "#F92D46"]
    })
  }
    , [])

  React.useEffect(() => {
    drawChart(svg);

  }, [svg, drawChart]);

  return (
    <div className='flex flex-row'>
      <div className='w-2/3 relative'>
        <div className='absolute inset-y-auto w-[100px] h-full'>
          <div className='flex flex-col justify-center h-full pt-[20px] pb-[80px] text-center
            divide-y-[1px] divide-dashed divide-y-white'>
            <div className='flex flex-col items-center pb-[9px]'>
              <div className='w-[16px] h-[16px]'><POSITIVE_ICON_COLOR /></div>
              <span className='wv-ibmplex wv-bold wv-b7'>
                เหตุการณ์<br />
                เป็นผลดี<br />
                กับรัฐบาล
              </span>
            </div>
            <div className='flex flex-col items-center pt-[9px]'>
              <div className='w-[16px] h-[16px]'><NEGATIVE_ICON_COLOR /></div>
              <span className='wv-ibmplex wv-bold wv-b7'>
                เหตุการณ์<br />
                เป็นผลลบ<br />
                กับรัฐบาล
              </span>
            </div>
          </div>
        </div>
        <div id="chart">
        </div>
        <svg ref={svg} />
      </div>
      <div className='bg-red-600 w-1/3 h-[50px] '>
        xx
      </div>
    </div >
  );
}

export default Chart
