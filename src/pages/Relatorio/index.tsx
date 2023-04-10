import React, { useCallback, useEffect, useMemo, useState } from 'react'

import Table from '@app/components/Table'

import ReactDOM from 'react-dom'
import Grid from '@app/components/Table/teste'

import Collapse from '@app/components/Collapse'
import Filters, { FiltersInput } from './components/Filters'

import { Pagination, Divider } from '@mantine/core'

import Chart from '@app/components/Chart'
import BarChart from '@app/components/Chart/chartBar'
import LineChart from '@app/components/Chart/chartLine'
import PieChart from '@app/components/Chart/chartPie'
import RadarChart from '@app/components/Chart/chartRadar'

import ReactLoading from 'react-loading'

import { useProcessData } from '@app/hooks/processData'

import Relatorio from '@app/components/Relatorio'
import Recomendacao from '@app/components/Relatorio/recomendacao'

const Admin: React.FC = () => {
  const [hasFilters, setHasFilters] = useState(false)

  const totalPages = useProcessData((p) => p.totalPages)
  const loading = useProcessData((p) => p.loading)
  const processData = useProcessData((p) => p.data)
  const getInitialData = useProcessData((p) => p.getInitialData)
  const setNextPage = useProcessData((p) => p.setNextPage)
  const setFilter = useProcessData((p) => p.setFilter)

  const graph = useProcessData((p) => p.dashboard)

  useEffect(() => {
    getInitialData()
  }, [getInitialData])

  const handleFilterApplication = useCallback(
    (data: FiltersInput) => {
      setFilter(data)
      setHasFilters(true)
    },
    [setFilter],
  )

  const handlePageChange = useCallback(
    (page: number) => {
      setNextPage(page)
    },
    [setNextPage],
  )

  const renderTotal = useMemo(() => {
    const returnData = {
      total: 0,
      average: 0,
    }

    const dataGroup = graph.group || []



    return returnData
  }, [graph])

  return (

    <div className="w-full">
      <Collapse
        title="Filtros"
        tooltip="Filtros não acumulativos"
        defaultIsOpen
      >
        <Filters
          handleFilterApplication={handleFilterApplication}
          resetAll={getInitialData}
        />
      </Collapse>

      <div className="mt-7 mb-0">
        <Divider />
      </div>

      <div className="w-full h-full block">
        <Grid data={processData} />
      </div>

      <div className="mt-7 mb-0">
        <Divider />
      </div>

      <div className="flex flex-wrap">
        <div className="flex-1 w-full md:w-1/2 mt-7 mx-3">
          <Collapse title="Evolução mensal">
            <div className="bg-white rounded-md shadow-sm p-3">
              <BarChart dashboard={graph as any} />
            </div>
          </Collapse>
        </div>
        <div className="flex-1 w-full md:w-1/2 mt-7 mx-3">
          <Collapse title="Evolução anual">
            <div className="bg-white rounded-md shadow-sm p-3">
              <LineChart dashboard={graph as any} />
            </div>
          </Collapse>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="flex-1 w-full md:w-1/2 mt-7 mx-3">
          <Collapse title="Comparativo geral">
            <div className="bg-white rounded-md shadow-sm p-3">
              <PieChart dashboard={graph as any} />
            </div>
          </Collapse>
        </div>
        <div className="flex-1 w-full md:w-1/2 mt-7 mx-3">
          <Collapse title="Radar">
            <div className="bg-white rounded-md shadow-sm p-3">
              <RadarChart dashboard={graph as any} />
            </div>
          </Collapse>
        </div>
      </div>

      <div className="w-full h-full block mx-3">
        <Relatorio />
      </div>

      <div className="w-full h-full block mx-3">
        <Recomendacao />
      </div>





    </div>
  )
}

export default Admin
