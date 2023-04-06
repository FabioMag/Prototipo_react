import api from './api'

import { format, parseISO } from 'date-fns'

import { ReturnProcess, Data } from '@app/hooks/processData/types'
import { currencyBRL } from '@app/utils/currencyBRL'

interface ProcessData {
  page?: number
  limit?: number
}

const intepretFont = {
  GENERATOR: 'Robô Gerador',
  DIARIO: 'Diário Oficial',
  DO: 'Diário Oficial',
  robo: 'Robô Gerador',
}

function interpret(key: string): string {
  const selectedKey = (key || 'DIARIO') as any
  return intepretFont[selectedKey as keyof typeof intepretFont]
}

interface ReturnProcessData<T> {
  data: T[]
  totalPages: number
  dashboard: any[]
}

async function getProcessData<T>(
  filter: ProcessData,
): Promise<ReturnProcessData<T>> {
  const response = await api.get('/process', {
    params: {
      ...filter,
      limit: 20,
    },
  })

  const data = response.data?.process as ReturnProcess[]
  const totalPages = response.data?.total as number
  const dashboard = response.data?.dashboard as T[]

  const prepareData: any = []

  data.forEach((d) => {
    d.process.forEach((e) => {
      const data: Data = {
        ...e,
        font: interpret(e.font),
        dateExecution: format(parseISO(e.dateExecution), 'dd/MM/yyyy HH:mm'),
        dateProcess: format(parseISO(e.dateProcess), 'dd/MM/yyyy HH:mm'),
        value: currencyBRL(e.value) as any,
      }
      prepareData.push(data)
    })
  })

  return {
    data: prepareData as T[],
    totalPages,
    dashboard,
  }
}

export { getProcessData }
