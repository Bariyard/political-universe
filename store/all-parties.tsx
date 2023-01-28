import { create } from 'zustand'
import { VIZ6_RAW, VIZ6_TYPE } from '../models/individual'
interface AllPartiesState {
  allPersonGroup: VIZ6_TYPE
  setAllPersonGroup: (by: VIZ6_TYPE) => void
  filteredPersonList: VIZ6_RAW[]
  setFilteredPersonList: (by: VIZ6_RAW[]) => void
}

export const useAllPartiesStore = create<AllPartiesState>()((set) => ({
  //viz7
  allPersonGroup: {},
  setAllPersonGroup: (by) => { return set((state) => ({ ...state, allPersonGroup: by })) },
  filteredPersonList: [],
  setFilteredPersonList: (by) => { return set((state) => ({ ...state, filteredPersonList: by })) }
}))