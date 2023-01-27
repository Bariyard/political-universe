import { create } from 'zustand'
import { INDIVIDUAL_DATA_TYPE } from '../models/individual'
import * as d3 from 'd3'
import { EVENT_TYPE } from '../models/event'
import { CHART_DATA_TYPE, processData } from '../models/chart'
import dayjs from 'dayjs'
interface IndividualState {
  individual?: INDIVIDUAL_DATA_TYPE
  setIndividual: (by: INDIVIDUAL_DATA_TYPE) => void
  individualAgg: ApexAxisChartSeries
  individualEventList: EVENT_TYPE[]
  filteredEventList: EVENT_TYPE[]
  setFilteredEventList: (by: EVENT_TYPE[]) => void
}

export const useIndividualStore = create<IndividualState>()((set) => ({
  individual: undefined,
  setIndividual: async (by) => {
    const csvAgg = await d3.csv<CHART_DATA_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz6/agg/${by.person.replace(' ', '-')}.csv`, d3.autoType)
    let aggData = processData(csvAgg)
    let csvEventList = await d3.csv<EVENT_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz6/event-list/${by.person.replace(' ', '-')}.csv`, d3.autoType)
    csvEventList = csvEventList.sort((a, b) => dayjs(a.date_time, 'YYYY-MM-DD HH:mm:ss').diff(dayjs(b.date_time, 'YYYY-MM-DD HH:mm:ss')))
    return set((state) => ({ individual: { ...state.individual, ...by }, individualAgg: aggData, individualEventList: csvEventList }))
  },
  individualAgg: [],
  individualEventList: [],
  filteredEventList: [],
  setFilteredEventList: (by) => {
    return set((state) => ({ ...state, filteredEventList: by }))
  }
}))