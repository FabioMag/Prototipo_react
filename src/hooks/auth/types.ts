export interface Auth {
  isAuthenticated: boolean
  token: string | null
  loading: boolean
}

export interface AuthStore extends Auth {
  setLoading: (loading: boolean) => void
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}
