import * as d3 from 'd3'
import dayjs from 'dayjs'
import { create } from 'zustand'
import { CHART_DATA_TYPE, processData } from '../models/chart'
import { EVENT_TYPE } from '../models/event'
import { INDIVIDUAL_DATA_TYPE, RELATED_DATA_TYPE, VIZ6_RAW } from '../models/individual'
interface IndividualState {
  allPerson: VIZ6_RAW[]
  setAllPerson: (by: VIZ6_RAW[]) => void
  searchText: string
  setSearchText: (by: string) => void
  isSelectPerson: boolean
  setIsSelectPerson: (by: boolean) => void
  individual?: INDIVIDUAL_DATA_TYPE
  setIndividual: (by: INDIVIDUAL_DATA_TYPE) => void
  individualAgg: ApexAxisChartSeries
  individualEventList: EVENT_TYPE[]
  filteredEventList: EVENT_TYPE[]
  setFilteredEventList: (by: EVENT_TYPE[]) => void
  relatedList: RELATED_DATA_TYPE[]
}

export const useIndividualStore = create<IndividualState>()((set) => ({
  allPerson: [],
  setAllPerson: (by) => {
    return set((state) => ({ ...state, allPerson: by }))
  },
  searchText: "",
  setSearchText: (by) => { return set((state) => ({ ...state, searchText: by })) },
  isSelectPerson: false,
  setIsSelectPerson: (by) => { return set((state) => ({ ...state, isSelectPerson: by })) },
  individual: undefined,
  setIndividual: async (by) => {
    const csvAgg = await d3.csv<CHART_DATA_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz6/agg/${by.person.replaceAll(' ', '-')}.csv`, d3.autoType)
    let aggData = processData(csvAgg)
    let csvEventList = await d3.csv<EVENT_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz6/event-list/${by.person.replaceAll(' ', '-')}.csv`, d3.autoType)
    csvEventList = csvEventList.sort((a, b) => dayjs(a.date_time, 'YYYY-MM-DD HH:mm:ss').diff(dayjs(b.date_time, 'YYYY-MM-DD HH:mm:ss')))

    let csvRelate = await d3.csv<RELATED_DATA_TYPE>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz6/related/${by.person.replaceAll(' ', '-')}.csv`, d3.autoType)


    return set((state) => ({
      individual: { ...state.individual, ...by },
      individualAgg: aggData,
      individualEventList: csvEventList,
      relatedList: csvRelate.slice().splice(1, 3).map((relatedPerson) => {
        let person = state.allPerson.find((data) => data.person === relatedPerson.person)
        return { ...relatedPerson, img: person?.img, categories: person?.categories }
      })
    }))
  },
  individualAgg: [],
  individualEventList: [],
  filteredEventList: [],
  setFilteredEventList: (by) => {
    return set((state) => ({ ...state, filteredEventList: by }))
  },
  relatedList: [],
}))