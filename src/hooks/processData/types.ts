export interface Data {
  number: string
  status: string
  text: string
  subStatus: string
  font: string
  dateProcess: string
  dateExecution: string
  value: number
  _id: string
}

export interface ReturnProcess {
  _id: string
  date_id: string
  month: number
  year: number
  process: Data[]
}

export interface ProcessData {
  data: Data[]
  dashboard: {
    group: any[]
  }
  loading: boolean
  totalPages: number
}

export interface Filter {
  type: string
  dateStart?: Date
  dateStop?: Date
  value?: number
  number?: string
}

export interface ProcessDataStore extends ProcessData {
  getInitialData: () => void
  setFilter: (data: Filter) => Promise<void>
  setNextPage: (page: number) => Promise<void>
}
