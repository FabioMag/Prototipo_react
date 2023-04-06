import React from 'react'

import { Grid, Box } from '@mantine/core'
import GraphBar from '../GraphBar'

import { calculateUniqPercentage } from '@app/utils/calculatePercentage'

interface DashProps {
  quantity: number
  average: number
  amount: number
}

const Dash: React.FC<DashProps> = (props) => {
  const { quantity, average, amount } = props

  return (
    <Grid gutter={5}>
      <Box className="w-full mt-2 bg-white rounded-md p-6 border-gray-500 shadow-sm">
        <GraphBar
          title="Quantidade"
          percent={calculateUniqPercentage(quantity, 100)}
          value={String(quantity)}
        />
        <GraphBar
          title="Média"
          percent={calculateUniqPercentage(average, 100)}
          value={String(average)}
        />
        <GraphBar
          title="Total"
          percent={calculateUniqPercentage(amount, 100)}
          value={String(amount)}
        />
      </Box>
    </Grid>
  )
}

export default Dash
