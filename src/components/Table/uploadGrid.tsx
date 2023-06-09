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

const data = [
    {
        'Data Importação': '2022-03-01',
        'Nome do Arquivo': 'arquivo1.csv',
    },
    {
        'Data Importação': '2022-03-02',
        'Nome do Arquivo': 'arquivo2.csv',
    },
    {
        'Data Importação': '2022-03-03',
        'Nome do Arquivo': 'arquivo3.csv',
    },
];


const Grid = () => {
    const columns = [
        {
            key: 'Data Importação',
            header: 'Data Importação',
            align: 'center',
            content: ({ row }) => <strong>{row['Data Importação']}</strong>,
        },
        {
            key: 'Nome do Arquivo',
            header: 'Arquivo Importado',
            align: 'center',
            content: ({ row }) => <strong>{row['Nome do Arquivo']}</strong>,
        },
    ];


    return (
        <>
            <Table
                data={data}
                columns={columns}
            />

        </>
    );
};

export default Grid;
