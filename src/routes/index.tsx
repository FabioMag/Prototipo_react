import React from 'react'

import { Switch } from 'wouter'

import Route from './Routes'

import Login from '../pages/Login'
import Admin from '../pages/Admin'
import Relatorio from '../pages/Relatorio'
import Upload from '../pages/Upload'

const rootRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Admin} isPrivate />
      <Route path="/Relatorio" component={Relatorio} isPrivate />
      <Route path="/Upload" component={Upload} isPrivate />
    </Switch>
  )
}

export default rootRoutes
