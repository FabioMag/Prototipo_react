import React, { useRef } from 'react'

import { Data } from '@app/hooks/processData/types'

import { ReaderIcon, InfoCircledIcon } from '@radix-ui/react-icons'

import { Tooltip, Badge, Button } from '@mantine/core'

import Keywords from './components/Keywords'
import SubComponent from './components/SubComponent'
import Modal, { HandleModal } from '@app/components/Modal'

import { Table } from 'react-fluid-table'

import './styles.css'
import ContentModalViewProcess from './components/ContentModalViewProcess/index'

interface ReactBaseTableProps {
    data: Data2[]
}

interface Data2 {
    "Rendimento Anual": string;
    "Rendimento Mensal": string;
    Liquidez: string;
    Risco: string;
    "Potencial de Rentabilidade": string;
    Fundo: string;
}


const props: ReactBaseTableProps = {
    data: [
        {
            "Rendimento Anual": "19,50%",
            "Rendimento Mensal": "1,63%",
            Liquidez: "Alto",
            Risco: "Baixo",
            "Potencial de Rentabilidade": "Alto",
            Fundo: "Mazzotini",
        },
        {
            "Rendimento Anual": "10,50%",
            "Rendimento Mensal": "0,88%",
            Liquidez: "Alta",
            Risco: "Baixo",
            "Potencial de Rentabilidade": "Baixo",
            Fundo: "Poupança",
        },
        {
            "Rendimento Anual": "11,40%",
            "Rendimento Mensal": "0,95%",
            Liquidez: "Alta",
            Risco: "Baixo",
            "Potencial de Rentabilidade": "Baixo",
            Fundo: "Fundo Poupança",
        },
    ],
};


const Expander = ({ isExpanded, onClick }: any) => {
    return (
        <div className="flex items-center justify-center p-3 cursor-pointer">
            <ReaderIcon color={isExpanded ? '#0093f1' : '#a4a4a4'} onClick={onClick} />
        </div>
    )
}

const SelectBadge = (text: string) => {
    if (text === 'Robô Gerador') {
        return <Badge color="teal">{text}</Badge>
    }
    return <Badge color="blue">{text}</Badge>
}





const ReactBaseTable: React.FC<ReactBaseTableProps> = ({ data }) => {
    const modalRef = useRef<HandleModal>(null)

    const handleOpenModal = (processNumber: string) => {
        modalRef.current?.onOpen({ processNumber })
    }

    const columns = [
        {
            key: 'Data Importação',
            header: 'Data Importação',
            align: 'center',
            content: ({ row }) => <strong>{row['Data Importação']}</strong>,
        },
        {
            key: 'Nome do Arquivo',
            header: 'Rendimento Anual',
            align: 'center',
            content: ({ row }) => <strong>{row['Rendimento Anual']}</strong>,
        },
    ]

    return (
        <>
            <Table
                className="rounded-md shadow-sm"
                tableStyle={{
                    fontSize: '14px',
                }}
                rowHeight={60}
                data={data}
                columns={columns as any}
                subComponent={SubComponent as any}
                keyField="Fundo"
            />

        </>
    );
};

export default ReactBaseTable;
