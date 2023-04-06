import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { notifications } from '@mantine/notifications'

import { Auth, AuthStore } from './types'

const INITIAL_STATE: Auth = {
  isAuthenticated: false,
  token: null,
  loading: false,
}

export const authStore = create(
  persist<AuthStore>(
    (set) => ({
      ...INITIAL_STATE,
      setLoading: (loading: boolean) => set({ loading }),
      signIn: async (email: string, password: string) => {
        set({ loading: true })

        if (email !== 'pana' || password !== 'pana@2023') {
          notifications.show({
            title: 'Erro ao se conectar',
            message: 'Verifica seus dados e tente novamente',
            color: 'red',
            autoClose: 3000,
          })

          set({ loading: false })
          return
        }

        setTimeout(() => {
          set({ isAuthenticated: true, loading: false })
        }, 2000)
      },
      signOut: async () => {
        set({ isAuthenticated: false, loading: false })
      },
    }),
    {
      name: '@paulista:auth-storage',
    },
  ),
)
