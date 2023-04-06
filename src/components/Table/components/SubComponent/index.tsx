import React from 'react'

import { Mark, Text } from '@mantine/core'

import classNames from 'classnames'

interface SubComponentProps {
  row: {
    text: string
  }
}

const HighLightComponent = ({ children }: any) => {
  return <Mark>{children}</Mark>
}

const SubComponent: React.FC<SubComponentProps> = (props) => {
  const { row } = props

  if (row.text === '0') {
    return (
      <div className="p-5 pt-0 text-gray-500">
        Nenhum texto encontrado para esta Decisão/Execução
      </div>
    )
  }

  const linhas = row.text?.split(/\n/)

  return (
    <div className="p-5 pt-0 text-gray-500">
      <Text>
        {linhas.map((linha, index) => (
          <span
            className={classNames('mb-0 block', {
              'mb-2': index === 0,
              'mb-1': index !== 0,
            })}
            key={index}
          >
            {highlightWords(linha)}
          </span>
        ))}
      </Text>
    </div>
  )
}

function highlightWords(str: string) {
  const parts = str.split(/\*\*(.*?)\*\*/g)

  const novaStr = parts.map((part, index) => {
    const word = part.replace(/\*/g, ' ')

    if (index % 2 !== 0) {
      return <HighLightComponent key={index}>{word}</HighLightComponent>
    }
    return word
  })

  return novaStr
}

export default SubComponent
