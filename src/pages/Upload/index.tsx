

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

import CampoButton from '@app/components/SubmitButton'
import LimpaCampoButton from '@app/components/SubmitButton'
import SubmitButton from '@app/components/SubmitButton'

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

        return returnData
    }, [graph])

    return (




        <div className="w-full max-w-7xl bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 shadow-md mx-auto text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <h1 className="text-2xl font-bold mb-4">Importação de Arquivo</h1>
                <form>
                    <div className="mb-4">
                        <select
                            id="nomeArquivo"
                            name="nomeArquivo"
                            className="shadow appearance-none border border-gray-400/30 font-sm rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100/80 min-h-[48px]"
                        >
                            <option value="">Selecione um Layout</option>
                            <option value="clientes.csv">clientes.csv</option>
                            <option value="produtos.csv">produtos.csv</option>
                            <option value="vendas.csv">vendas.csv</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <div className="w-full h-full block mx-3">
                            <div className="form-group">
                                <label htmlFor="fileInput">
                                    Selecione um arquivo para fazer a importação dos dados
                                </label>
                                <br />
                                <input type="file" className="form-control-file" id="fileInput" />
                            </div>
                        </div>
                    </div>

                    <br />

                    <CampoButton
                        fullWidth
                        className="mt-4 bg-green-500 hover:bg-green-700"
                        type="submit"
                    >
                        Enviar
                    </CampoButton>
                </form>
                <br />
                <br />
                <h1 className="text-2xl font-bold mb-4">Arquivos Importados</h1>
                <div className="w-full h-full block">
                    <Grid data={processData} />
                </div>
            </div>
        </div>


    )
}

export default Admin