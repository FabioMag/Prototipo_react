import React from 'react'

import { Route, Redirect } from 'wouter'

import LoginLayout from '@app/layouts/Login'
import DashboardLayout from '@app/layouts/Dashboard'

import { useAuth } from '@app/hooks/auth'

interface RouteProps {
  isPrivate?: boolean
  path: string
  component: React.ComponentType<any>
}

const Routes: React.FC<RouteProps> = (props) => {
  const { isPrivate = false } = props

  const Layout = isPrivate ? DashboardLayout : LoginLayout

  const isAuthenticated = useAuth((auth) => auth.isAuthenticated)

  if (isPrivate && !isAuthenticated) {
    return <Redirect to="/login" />
  }

  if (!isPrivate && isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Layout>
      <Route {...props} />
    </Layout>
  )
}

export default Routes
