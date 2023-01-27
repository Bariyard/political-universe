
export type CHART_DATA_TYPE = { year: number, positive: number, negative: number }
export const processData = (csv: d3.DSVParsedArray<CHART_DATA_TYPE>): ApexAxisChartSeries => {
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