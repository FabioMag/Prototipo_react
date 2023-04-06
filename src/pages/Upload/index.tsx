

import React, { useCallback, useEffect, useMemo, useState } from 'react'

import Upload from '@app/components/Upload'

import Table from '@app/components/Table'

import ReactDOM from 'react-dom'
import Grid from '@app/components/Table/uploadGrid'

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

        dataGroup?.forEach((e: any) => {
            returnData.total = parseInt(returnData.total + e.totalValue)
            returnData.average = parseInt(returnData.average + e.averageValue)
        })

        return returnData
    }, [graph])

    return (


        <div>
            <div className="mb-4">
                <div className="w-full h-full block mx-3">
                    <Upload />
                </div>
            </div>

            <div className="w-full h-full block">
                <Grid data={processData} />
            </div>
        </div>




    )
}

export default Admin