import React from 'react'

import { Button, Text } from '@mantine/core'

import { useMediaQuery } from '@mantine/hooks'

interface ContentModalViewProcessProps {
  processNumber?: string
}

const baseURL = 'https://esaj.tjsp.jus.br/cpopg/show.do?processo.numero='

const ContentModalViewProcess: React.FC<ContentModalViewProcessProps> = (
  props,
) => {
  const matches = useMediaQuery('(min-width: 1200px)')

  const height = document.documentElement.clientHeight

  const { processNumber } = props

  const handleOpenNewTab = () => {
    window.open(baseURL + processNumber, '_blank')
  }

  if (!processNumber) return null

  return (
    <div className="w-full">
      <div className="grid grid-cols-2  gap-4 mb-3">
        <div className="flex items-center justify-start">
          <Text>
            Processo Nº: <strong>{processNumber}</strong>
          </Text>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="outline" onClick={handleOpenNewTab}>
            Abrir em nova aba
          </Button>
        </div>
      </div>
      <iframe
        width={matches ? '1000px' : '600px'}
        height={height - 200}
        src={baseURL + processNumber}
      />
    </div>
  )
}

export default ContentModalViewProcess
