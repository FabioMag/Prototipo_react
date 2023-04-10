import React, { useEffect, useMemo, useState } from 'react'

import Grid from '@app/components/Table/teste'

import { Divider } from '@mantine/core'

import BarChart from '@app/components/Chart/chartBar'
import LineChart from '@app/components/Chart/chartLine'
import PieChart from '@app/components/Chart/chartPie'
import RadarChart from '@app/components/Chart/chartRadar'

import { useProcessData } from '@app/hooks/processData'

import Box from '@app/components/Box'

const Admin: React.FC = () => {
  const [hasFilters, setHasFilters] = useState(false)

  const processData = useProcessData((p) => p.data)
  const getInitialData = useProcessData((p) => p.getInitialData)

  const graph = useProcessData((p) => p.dashboard)

  useEffect(() => {
    getInitialData()
  }, [getInitialData])

  const renderTotal = useMemo(() => {
    const returnData = {
      total: 0,
      average: 0,
    }

    return returnData
  }, [graph])

  return (

    <div className="w-full">

      <div className="mb-0">
        <Box />
      </div>

      <div className="mt-7 w-full h-full block">
        <Grid data={processData} />
      </div>

      <div className="mt-7 mb-0">
        <Divider />
      </div>

      <div className="flex flex-wrap">
        <div className="flex-1 w-full md:w-1/2 mt-7 mx-3">
          <h2 className="text-center text-lg font-semibold">Evolução mensal</h2>
          <div className="bg-white rounded-md shadow-sm p-3">
            <BarChart dashboard={graph as any} />
          </div>
        </div>
        <div className="flex-1 w-full md:w-1/2 mt-7 mx-3">
          <h2 className="text-center text-lg font-semibold">Evolução anual</h2>
          <div className="bg-white rounded-md shadow-sm p-3">
            <LineChart dashboard={graph as any} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="flex-1 w-full md:w-1/2 mt-7 mx-3">
          <h2 className="text-center text-lg font-semibold">Comparativo geral</h2>
          <div className="bg-white rounded-md shadow-sm p-3">
            <PieChart dashboard={graph as any} />
          </div>
        </div>
        <div className="flex-1 w-full md:w-1/2 mt-7 mx-3">
          <h2 className="text-center text-lg font-semibold">Radar</h2>
          <div className="bg-white rounded-md shadow-sm p-3">
            <RadarChart dashboard={graph as any} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Admin
