import { create } from 'zustand'

import { getProcessData } from '@app/api/getProcessData'
import { getProcessDataByFilter } from '@app/api/getProcessDataByFilter'

import { ProcessData, ProcessDataStore, Filter, Data } from './types'

const INITIAL_STATE: ProcessData = {
  loading: false,
  totalPages: 0,
  dashboard: [],
  data: [],
}

export const processData = create<ProcessDataStore>((set) => ({
  ...INITIAL_STATE,
  getInitialData: async () => {
    set({ loading: true })
    const { data, totalPages, dashboard } = await getProcessData<Data>({})

    set({
      data,
      loading: false,
      dashboard,
      totalPages,
    })
  },
  setNextPage: async (page: number) => {
    set({ loading: true })

    const { data, totalPages } = await getProcessData<Data>({ page })

    set({
      data,
      loading: false,
      totalPages,
    })
  },
  setFilter: async (filters: Filter) => {
    set({ loading: true })

    const { data } = await getProcessDataByFilter<Data>(filters)

    set({ data, loading: false })
  },
}))
