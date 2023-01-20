import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react'
import Charts from 'react-apexcharts'
type Props = {}

const StackedAreaChartNew = (props: Props) => {

  const series: ApexAxisChartSeries = [
    {
      name: "Series 1",
      data: [
        {
          x: "02-10-2017",
          y: -34
        },
        {
          x: "02-11-2017",
          y: -43
        },
        {
          x: "02-12-2017",
          y: -31
        },
        {
          x: "02-13-2017",
          y: -43
        },
        {
          x: "02-14-2017",
          y: -33
        },
        {
          x: "02-15-2017",
          y: -52
        }
      ]
    },
    {
      name: "Series 2",
      data: [
        {
          x: "02-10-2017",
          y: 34
        },
        {
          x: "02-11-2017",
          y: 43
        },
        {
          x: "02-12-2017",
          y: 31
        },
        {
          x: "02-13-2017",
          y: 4
        },
        {
          x: "02-14-2017",
          y: 3
        },
        {
          x: "02-15-2017",
          y: 52
        }
      ]
    }
    // {
    //   name: 'Mexico',
    //   data: [6, 8, 16, 22, 29, 29, 29, 28, 28, 28, 27, 26]
    // }, {
    //   name: 'Other',
    //   data: [2, 6, 11, 9, 7, 7, 7, 8, 8, 8, 8, 9]
    // }
  ]
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      // stacked: true,
      events: {
        selection: function (_, e: any) {
          console.log(new Date(e.xaxis.min))
        }
      },
    },
    colors: ['#008FFB', '#00E396', '#CED4DC'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      min: -50,
      max: 50,
    }
  }
  return (
    <div id='chart'>
      <Charts
        type={"area"}
        height={350}
        options={options}
        series={series}
      />
    </div>
  )
}

export default StackedAreaChartNew