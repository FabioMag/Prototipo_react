import React from 'react'

import { Box, Text } from '@mantine/core'

import { Container, GraphBar } from './styles'

export interface GraphItemProps {
  positiveColor?: string
  negativeColor?: string
  title: string
  value: string
  percent: number
}

const GraphItem: React.FC<GraphItemProps> = (props) => {
  const {
    positiveColor = '#57a484',
    negativeColor = '#e24b40',
    percent,
    title,
    value,
  } = props

  return (
    <Container>
      <Box className="information">{title}</Box>
      <Text className="value" color="#939393">
        {value}
      </Text>
      <Box className="bar">
        <GraphBar
          percent={percent}
          positiveColor={positiveColor}
          negativeColor={negativeColor}
        ></GraphBar>
      </Box>
    </Container>
  )
}

export default GraphItem
