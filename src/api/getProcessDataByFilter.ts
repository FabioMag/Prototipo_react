import api from './api'

import { format, parseISO } from 'date-fns'

import { ReturnProcess, Data, Filter } from '@app/hooks/processData/types'
import { currencyBRL } from '@app/utils/currencyBRL'

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

async function getProcessDataByFilter<T>(
  filter: Filter,
): Promise<ReturnProcessData<T>> {
  try {
    const response = await api.post('/process/filter', filter)

    const data = response.data?.process as ReturnProcess[]
    const dashboard = response.data?.dashboard as any[]

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
      data: prepareData,
      totalPages: 0,
      dashboard,
    }
  } catch (error) {
    return {
      data: [],
      totalPages: 0,
      dashboard: [],
    }
  }
}

export { getProcessDataByFilter }
