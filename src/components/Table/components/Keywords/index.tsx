import React, { useMemo } from 'react'

import { RingProgress, Group } from '@mantine/core'

import { calculatePercentage } from '@app/utils/calculatePercentage'

import { getRandomColor } from './colors'

interface KeywordsProps {
  data: Array<Array<string>>
}

const Keywords: React.FC<KeywordsProps> = (props) => {
  const { data } = props

  const renderedData = useMemo(() => {
    return calculatePercentage(
      data?.map((row) => {
        if (row[1]) {
          return Number(row[1])
        }
        return 0
      }),
    )
  }, [data])

  return (
    <div className="w-[100%] flex justify-center items-center">
      <Group position="center" h="60px">
        <RingProgress
          size={60}
          thickness={8}
          sections={data.map((row: any, i) => ({
            value: renderedData[i],
            color: getRandomColor(),
            tooltip: `${row[0]}: ${row[1]}`,
          }))}
        />
      </Group>
    </div>
  )
}

export default Keywords
