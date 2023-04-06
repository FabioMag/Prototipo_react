import React from 'react'

import { MantineProvider } from '@mantine/core'

import { Notifications } from '@mantine/notifications'

import Routes from '@app/routes'

const App: React.FC = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={{ colorScheme: 'light' }}
    >
      <Routes />
      <Notifications />
    </MantineProvider>
  )
}

export default App
