import { ApexOptions } from 'apexcharts';
import * as d3 from 'd3';
import { DSVParsedArray } from 'd3';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
type Props = {
  series: ApexAxisChartSeries
}

type VIZ4_TYPE = { year: number, positive: number, negative: number }

const AreaBox4ChartNew = ({ series }: Props) => {

  const [loaded, setLoaded] = useState(false)

  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "area",
      group: "category",
      height: 200,
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
        //   updated: (chartContext, configOptions) => {
        //     console.log(configOptions)
        //     const topPadding = Number(d3.select('.apexcharts-inner').attr('transform').split(',')[1].replace(')', ''))
        //     // d3.select('.apexcharts-xaxis').attr('transform', `translate(0, ${(configOptions.globals.gridHeight + configOptions.globals.xAxisLabelsHeight) * 0.5 - 3})`)
        //     d3.select('.apexcharts-inner').append('use').attr('xlink:href', `#${d3.select('.apexcharts-xaxis').attr('id')}`)

        //     d3.selectAll(".apexcharts-xaxis-label").nodes().map((node) => {
        //       const textNode = d3.select(node)
        //       const g = d3.select('.apexcharts-xaxis-texts-g')
        //         .insert('g', 'text').attr('transform', 'translate(0,0)')
        //       g.append("rect")
        //         .attr("transform", `translate(-9,0)`)
        //         .attr('x', textNode.attr('x'))
        //         .attr('y', Number(textNode.attr('y')) - 12)
        //         .attr("rx", "2")
        //         .attr("ry", "2")
        //         .attr("width", `${18}`)
        //         .attr("height", `${15}`)
        //         .attr("fill", '#FFFFFF')
        //       g.append('use').attr('xlink:href', `#${textNode.attr('id')}`)
        //     })
        //     // xaxis dashed line
        //     d3.select('.apexcharts-xaxis')
        //       .insert('line', 'g')
        //       .attr("class", "xAxis dashed")
        //       .style("stroke", "white")
        //       .style("stroke-width", '2px')
        //       .attr('class', 'dashed')
        //       .attr("x1", 0)
        //       .attr("y1", `-12`)
        //       .attr("x2", `${configOptions.globals.gridWidth}`)
        //       .attr("y2", `-12`);

        //     // console.log(configOptions.globals.translateXAxisX)
        //     const xScale = d3.scaleLinear([54, 65], [configOptions.globals.translateXAxisX, configOptions.globals.gridWidth])

        //     // Decoration for chart
        //     const apexchartsInner = d3.select('.apexcharts-inner')
        //     apexchartsInner
        //       .append('line')
        //       .style("stroke", "white")
        //       .style("stroke-width", '2px')
        //       .attr('class', 'dashed')
        //       .attr("x1", xScale(54))
        //       .attr("y1", 0)
        //       .attr("x2", xScale(54))
        //       .attr("y2", configOptions.globals.gridHeight);

        //     apexchartsInner
        //       .append('line')
        //       .style("stroke", "white")
        //       .style("stroke-width", '2px')
        //       .attr('class', 'dashed')
        //       .attr("x1", xScale(57))
        //       .attr("y1", 0)
        //       .attr("x2", xScale(57))
        //       .attr("y2", configOptions.globals.gridHeight);

        //     // Decoration icon
        //     apexchartsInner.append("svg:image")
        //       .attr("xlink:href", `${process.env.HOST}${process.env.BASE_PATH}/design_assets/03_main_viz/pm_01_label.svg`)
        //       .attr("width", 49)
        //       .attr("height", 94)
        //       .attr("x", xScale(54) - 24.5)
        //       .attr("y", -94 * .75);
        //     apexchartsInner.append("svg:image")
        //       .attr("xlink:href", `${process.env.HOST}${process.env.BASE_PATH}/design_assets/03_main_viz/pm_02_label.svg`)
        //       .attr("width", 49)
        //       .attr("height", 94)
        //       .attr("x", xScale(57) - 25.5)
        //       .attr("y", -94 * .75);

        //     apexchartsInner.append("svg:image")
        //       .attr("xlink:href", `${process.env.HOST}${process.env.BASE_PATH}/design_assets/03_main_viz/pm_01-range.svg`)
        //       .attr("width", 73)
        //       .attr("height", 48)
        //       .attr("x", xScale(55) - 73 * .5)
        //       .attr("y", configOptions.globals.xAxisLabelsHeight * .5);
        //     apexchartsInner.append("svg:image")
        //       .attr("xlink:href", `${process.env.HOST}${process.env.BASE_PATH}/design_assets/03_main_viz/pm_02-range.svg`)
        //       .attr("width", xScale(65) - xScale(57))
        //       .attr("height", 24)
        //       .attr("x", xScale(56.1))
        //       .attr("y", configOptions.globals.xAxisLabelsHeight);

        //     // const chart = d3.select(`.apexcharts-svg`)
        //     // chart.append("svg:image")
        //     //   .attr("xlink:href", `${process.env.HOST}${process.env.BASE_PATH}/design_assets/03_main_viz/legend.svg`)
        //     //   .attr("width", 56)
        //     //   .attr("height", 176)
        //     //   .attr("x", configOptions.globals.translateY * .5 - 56 * .5)
        //     //   .attr("y", configOptions.globals.translateX + (configOptions.globals.gridHeight - 176) * .5);

        //     // chart
        //     //   .append('line')
        //     //   .style("stroke", "white")
        //     //   .style("stroke-width", '2px')
        //     //   .attr('class', 'dashed')
        //     //   .attr("x1", 5)
        //     //   .attr("y1", configOptions.globals.translateX + (configOptions.globals.gridHeight) * .5)
        //     //   .attr("x2", configOptions.globals.translateY)
        //     //   .attr("y2", configOptions.globals.translateX + (configOptions.globals.gridHeight) * .5);
        //   }
      },
    },
    noData: {
      text: 'Loading...'
    },
    grid: {
      show: false,
      // padding: {
      //   top: 60,
      //   left: 100,
      //   bottom: 20,
      //   right: 10
      // }
    },
    colors: ["#60C1AF", "#F92D46"],
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
      show: false,
      // min: -500,
      // max: 500,
      // opposite: true,

      // axisBorder: {
      //   show: true,
      //   color: 'white',
      //   offsetX: 0,
      //   offsetY: 0
      // },
      // axisTicks: {
      //   show: true,
      //   // borderType: 'solid',
      //   color: 'white',
      //   width: 5,
      //   offsetX: 0,
      //   offsetY: 0
      // },
      // labels: {
      //   show: true,
      //   align: 'left',
      //   minWidth: 0,
      //   maxWidth: 160,
      //   style: {
      //     colors: ['white'],
      //     fontSize: '12px',
      //     fontFamily: 'IBM Plex Sans Thai, sans-serif',
      //     fontWeight: 700,
      //     cssClass: 'apexcharts-yaxis-label',
      //   },
      //   offsetX: -10,
      //   offsetY: 0,
      //   rotate: 0,
      //   formatter: (value) => { return String(Math.abs(value)) },
      // },
      // title: {
      //   text: 'จำนวนเหตุการณ์',
      //   rotate: -90,
      //   offsetX: -5,
      //   offsetY: 0,
      //   style: {
      //     color: 'white',
      //     fontSize: '12px',
      //     fontFamily: 'IBM Plex Sans Thai, sans-serif',
      //     fontWeight: 700,
      //     cssClass: 'apexcharts-yaxis-title',
      //   },
      // },
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



  return (
    <div id='chart-box4' className='w-[70%] desktop:w-[600px] my-auto'>
      <ReactApexChart
        id="apex-chart-box4"
        height={130}
        type={"area"}
        options={options}
        series={series}
      />
    </div>
  )
}

export default AreaBox4ChartNew