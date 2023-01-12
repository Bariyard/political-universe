import React from 'react'
import * as d3 from "d3";
import StackedAreaChart from '../utils/stacked'
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

    const csv = await d3.csv("http://localhost:3000/data/example/test.csv", d3.autoType)
    console.log(csv)
    await StackedAreaChart(svg, csv, {
      x: d => d.date_time,
      y: d => d.total,
      z: d => d.type,
      yLabel: "↑ Unemployed persons",
      // width: Number(d3.select('#chart').style('width')),
      height: 500,
      yDomain: [-40, 40],
      xFormat: d3.timeFormat("%y"),
      colors: ["#60C1AF", "#F92D46"]
    })
  }
    , [])

  React.useEffect(() => {
    drawChart(svg);

  }, [svg, drawChart]);

  return (
    <div className='flex flex-row'>
      <div id="chart" className='w-2/3'>
        <svg ref={svg} />
      </div>
      <div className='bg-red-600 w-1/3 h-[50px] '>
        xx
      </div>
    </div>
  );
}

export default Chart
