import { shallow } from 'zustand/shallow'
import { StateSelector } from 'zustand'

import { AuthStore as Store } from './types'
import { authStore } from './store'

export const useAuth = <T>(selector: StateSelector<Store, T>): T => {
  return authStore(selector, shallow)
}
