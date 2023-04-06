import { shallow } from 'zustand/shallow'
import { StateSelector } from 'zustand'

import { ProcessDataStore as Store } from './types'
import { processData } from './store'

export const useProcessData = <T>(selector: StateSelector<Store, T>): T => {
  return processData(selector, shallow)
}
