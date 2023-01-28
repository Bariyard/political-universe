import { ApexOptions } from 'apexcharts';
import * as d3 from 'd3';
import { DSVParsedArray } from 'd3';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
type Props = {
  step: number
  selectFilter: string,
  csvData: ApexAxisChartSeries
}

type VIZ4_TYPE = { year: number, positive: number, negative: number }

const AllPartiesChart = ({ step, selectFilter, csvData }: Props) => {

  const [originalSeries, setOriginalSeries] = useState<ApexAxisChartSeries>([])
  const [series, setSeries] = useState<ApexAxisChartSeries>([])
  const chartRef = useRef<ReactApexChart>(null)
  const loadDataSet = useCallback(async () => {
    const csv = await d3.csv<VIZ4_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz4-[format2]sum-all-positive-negative-event.csv`, d3.autoType)
    let positiveData: { x: number; y: number; }[] = []
    let negativeData: { x: number; y: number; }[] = []
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
    setSeries([{
      name: "positive",
      data: positiveData
    },
    {
      name: 'negative',
      data: negativeData
    }])
    setOriginalSeries([{
      name: "positive",
      data: positiveData
    },
    {
      name: 'negative',
      data: negativeData
    }])

  }, [])

  useEffect(() => {
    loadDataSet()
  }, [loadDataSet])

  useEffect(() => {
    if (csvData.length) {
      setSeries([...originalSeries, ...csvData])
    } else {
      setSeries([...originalSeries])
    }
  }, [originalSeries, csvData])


  const [options, setOptions] = useState<ApexOptions>({
    tooltip: {
      enabled: false
    },
    chart: {
      type: "area",
      height: 385,
      toolbar: {
        show: false
      },
      selection: {
        enabled: false,
      },
      parentHeightOffset: 0,
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        speed: 432,
        dynamicAnimation: {
          enabled: true,
          speed: 432
        }
      },
      // stacked: true,
      events: {
        //   selection: function (_, e: any) {
        //     console.log(new Date(e.xaxis.min))
        //   }
        updated: (chartContext, configOptions) => {
          console.log(configOptions)
          const svg = d3.select(`#apexcharts${configOptions.globals.chartID}`)

          const topPadding = Number(svg.select('.apexcharts-inner').attr('transform').split(',')[1].replace(')', ''))
          svg.select('.apexcharts-xaxis').attr('transform', `translate(0, ${(configOptions.globals.gridHeight + configOptions.globals.xAxisLabelsHeight) * 0.5 - 3})`)
          svg.select('.apexcharts-inner').append('use').attr('xlink:href', `#${svg.select('.apexcharts-xaxis').attr('id')}`)

          svg.selectAll(".apexcharts-xaxis-label").nodes().map((node) => {
            const textNode = d3.select(node)
            const g = svg.select('.apexcharts-xaxis-texts-g')
              .insert('g', 'text').attr('transform', 'translate(0,0)')
            g.append("rect")
              .attr("transform", `translate(-9,0)`)
              .attr('x', textNode.attr('x'))
              .attr('y', Number(textNode.attr('y')) - 12)
              .attr("rx", "2")
              .attr("ry", "2")
              .attr("width", `${18}`)
              .attr("height", `${15}`)
              .attr("fill", '#FFFFFF')
            g.append('use').attr('xlink:href', `#${textNode.attr('id')}`)
          })
          // xaxis dashed line
          svg.select('.apexcharts-xaxis')
            .insert('line', 'g')
            .attr("class", "xAxis dashed")
            .style("stroke", "white")
            .style("stroke-width", '2px')
            .attr('class', 'dashed')
            .attr("x1", 0)
            .attr("y1", `-12`)
            .attr("x2", `${configOptions.globals.gridWidth}`)
            .attr("y2", `-12`);

          // console.log(configOptions.globals.translateXAxisX)
          const xScale = d3.scaleLinear([54, 65], [configOptions.globals.translateXAxisX, configOptions.globals.gridWidth])

          // Decoration for chart
          const apexchartsInner = svg.select('.apexcharts-inner')
          apexchartsInner
            .append('line')
            .style("stroke", "white")
            .style("stroke-width", '2px')
            .attr('class', 'dashed')
            .attr("x1", xScale(54))
            .attr("y1", 0)
            .attr("x2", xScale(54))
            .attr("y2", configOptions.globals.gridHeight);

          apexchartsInner
            .append('line')
            .style("stroke", "white")
            .style("stroke-width", '2px')
            .attr('class', 'dashed')
            .attr("x1", xScale(57))
            .attr("y1", 0)
            .attr("x2", xScale(57))
            .attr("y2", configOptions.globals.gridHeight);

          // Decoration icon
          apexchartsInner.append("svg:image")
            .attr("xlink:href", `${process.env.HOST}/design_assets/03_main_viz/pm_01_label.svg`)
            .attr("width", 49)
            .attr("height", 94)
            .attr("x", xScale(54) - 24.5)
            .attr("y", -94 * .75);
          apexchartsInner.append("svg:image")
            .attr("xlink:href", `${process.env.HOST}/design_assets/03_main_viz/pm_02_label.svg`)
            .attr("width", 49)
            .attr("height", 94)
            .attr("x", xScale(57) - 25.5)
            .attr("y", -94 * .75);

          // apexchartsInner.append("svg:image")
          //   .attr("xlink:href", `${process.env.HOST}/design_assets/03_main_viz/pm_01-range.svg`)
          //   .attr("width", 73)
          //   .attr("height", 48)
          //   .attr("x", xScale(55) - 73 * .5)
          //   .attr("y", configOptions.globals.xAxisLabelsHeight * .5);
          // apexchartsInner.append("svg:image")
          //   .attr("xlink:href", `${process.env.HOST}/design_assets/03_main_viz/pm_02-range.svg`)
          //   .attr("width", xScale(65) - xScale(57))
          //   .attr("height", 24)
          //   .attr("x", xScale(56.1))
          //   .attr("y", configOptions.globals.xAxisLabelsHeight);

          const chart = svg.select(`.apexcharts-svg`)
          chart.append("svg:image")
            .attr("xlink:href", `${process.env.HOST}/design_assets/03_main_viz/legend.svg`)
            .attr("width", 56)
            .attr("height", 176)
            .attr("x", configOptions.globals.translateY * .5 - 56 * .5)
            .attr("y", configOptions.globals.translateX + (configOptions.globals.gridHeight - 176) * .5);

          chart
            .append('line')
            .style("stroke", "white")
            .style("stroke-width", '2px')
            .attr('class', 'dashed')
            .attr("x1", 5)
            .attr("y1", configOptions.globals.translateX + (configOptions.globals.gridHeight) * .5)
            .attr("x2", configOptions.globals.translateY)
            .attr("y2", configOptions.globals.translateX + (configOptions.globals.gridHeight) * .5);
        }
      },
    },
    noData: {
      text: 'Loading...'
    },
    grid: {
      show: false,
      padding: {
        top: 60,
        left: 100,
        bottom: 20,
        right: 10
      }
    },
    colors: ["#60C1AF", "#F92D46",
      "#676DFF", "#676DFF",
      "#FF8A00", "#FF8A00",
      "#FFEC3F", "#FFEC3F",
      "#94A86B", "#94A86B",


    ],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'solid',
      opacity: 1
      // gradient: {
      //   opacityFrom: 0.6,
      //   opacityTo: 0.8,
      // }
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left'
    },
    xaxis: {
      position: 'top',
      type: 'category',
      categories: [
        '54',
        '55',
        '56',
        '57',
        '58',
        '59',
        '60',
        '61',
        '62',
        '63',
        '64',
        '65',
      ],

      // position: 'middle',
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          // colors: ['white'],
          fontSize: '12px',
          fontFamily: 'IBM Plex Sans Thai, sans-serif',
          fontWeight: 700,
          // cssClass: 'apexcharts-xaxis-label',
        },
        offsetX: 0,
        offsetY: 3,
        format: undefined,
        formatter: (value: any) => {
          return String(value - 2500)
        },
        // datetimeUTC: true,
        // datetimeFormatter: {
        //   year: 'yyyy',
        //   month: "MMM 'yy",
        //   day: 'dd MMM',
        //   hour: 'HH:mm',
        // },
      },
      axisBorder: {
        show: true,
        color: 'white',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: 'white',
        height: 6,
        offsetX: 0,
        offsetY: 0
      },
      group: {
        groups: [],
        style: {
          colors: ['white'],
          fontSize: '12px',
          fontWeight: 400,
          fontFamily: undefined,
          cssClass: ''
        }
      },
      tooltip: {
        enabled: false,
        formatter: undefined,
        offsetY: 0,
        // style: {
        //   fontSize: 0,
        //   fontFamily: 0,
        // },
      },

    },
    yaxis: {
      min: -500,
      max: 500,
      opposite: true,

      axisBorder: {
        show: true,
        color: 'white',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: true,
        // borderType: 'solid',
        color: 'white',
        width: 5,
        offsetX: 0,
        offsetY: 0
      },
      labels: {
        show: true,
        align: 'left',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ['white'],
          fontSize: '12px',
          fontFamily: 'IBM Plex Sans Thai, sans-serif',
          fontWeight: 700,
          cssClass: 'apexcharts-yaxis-label',
        },
        offsetX: -10,
        offsetY: 0,
        rotate: 0,
        formatter: (value) => { return String(Math.abs(value)) },
      },
      title: {
        text: 'จำนวนเหตุการณ์',
        rotate: -90,
        offsetX: -5,
        offsetY: 0,
        style: {
          color: 'white',
          fontSize: '12px',
          fontFamily: 'IBM Plex Sans Thai, sans-serif',
          fontWeight: 700,
          cssClass: 'apexcharts-yaxis-title',
        },
      },
    },
    // tooltip: {
    //   custom: function({series, seriesIndex, dataPointIndex, w}) {
    //     var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

    //     return '<ul>' +
    //     '<li><b>Price</b>: ' + data.x + '</li>' +
    //     '<li><b>Number</b>: ' + data.y + '</li>' +
    //     '</ul>';
    //   }
    // }  
  })

  // useEffect(() => {
  //   switch (step) {
  //     case 0: setOptions((prev) => ({ ...prev, colors: ["#FFFFFF15", "#FFFFFF15"] })); break;
  //     case 1: setOptions((prev) => ({ ...prev, colors: ["#ffffffd1", "#FFFFFFd1"] })); break;
  //     case 2: setOptions((prev) => ({ ...prev, colors: ["#60C1AF", "#F92D46"] })); break;
  //     case 5: setOptions((prev) => ({ ...prev, colors: ["#FFFFFF15", "#FFFFFF15", "#60C1AF", "#F92D46"] })); break;

  //   }
  // }, [step])


  return (
    <div id='chart' className='w-[600px] my-auto'>
      <ReactApexChart
        id="apex-chart"
        type={"area"}
        height={400}
        options={options}
        series={series}
        ref={chartRef}
      />
    </div>
  )
}

export default AllPartiesChart