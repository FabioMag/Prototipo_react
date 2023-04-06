import React from 'react'
import { Badge, Table } from '@mantine/core'


const data = [
    {
        Fundo: "Mazzotini",
        "Rendimento Anual": "19,50%",
        "Rendimento Mensal": "1,63%",
        Liquidez: "Alto",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Alto",
    },
    {
        Fundo: "Poupança",
        "Rendimento Anual": "10,50%",
        "Rendimento Mensal": "0,88%",
        Liquidez: "Alta",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "Fundo Poupança",
        "Rendimento Anual": "11,40%",
        "Rendimento Mensal": "0,95%",
        Liquidez: "Alta",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "Fundo SELIC",
        "Rendimento Anual": "13,50%",
        "Rendimento Mensal": "1,13%",
        Liquidez: "Alta",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "CDB",
        "Rendimento Anual": "15,00%",
        "Rendimento Mensal": "1,25%",
        Liquidez: "Média",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Médio",
    },
    {
        Fundo: "LCI",
        "Rendimento Anual": "15,30%",
        "Rendimento Mensal": "1,28%",
        Liquidez: "Baixa",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "Fundo Renda Fixa",
        "Rendimento Anual": "15,90%",
        "Rendimento Mensal": "1,33%",
        Liquidez: "Baixa",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "FII",
        "Rendimento Anual": "18,00%",
        "Rendimento Mensal": "1,50%",
        Liquidez: "Média",
        Risco: "Médio",
        "Potencial de Rentabilidade": "Médio",
    },
];

const Grid = () => {
    const columns = [
        {
            key: 'Fundo',
            header: 'Fundo',
            align: 'center',
            content: ({ row }) => <strong>{row.Fundo}</strong>,
        },
        {
            key: 'Rendimento Anual',
            header: 'Rendimento Anual',
            align: 'center',
            content: ({ row }) => <strong>{row['Rendimento Anual']}</strong>,
        },
        {
            key: 'Rendimento Mensal',
            header: 'Rendimento Mensal',
            align: 'center',
            content: ({ row }) => <strong>{row['Rendimento Mensal']}</strong>,
        },
        {
            key: 'Liquidez',
            header: 'Liquidez',
            align: 'center',
            content: ({ row }) => <strong>{row.Liquidez}</strong>,
        },
        {
            key: 'Risco',
            header: 'Risco',
            align: 'center',
            content: ({ row }) => <strong>{row.Risco}</strong>,
        },
        {
            key: 'Potencial de Rentabilidade',
            header: 'Potencial de Rentabilidade',
            align: 'center',
            content: ({ row }) => (
                <strong>{row['Potencial de Rentabilidade']}</strong>
            ),
        },
    ];

    return (
        <Table
            data={data}
            columns={columns}
            striped
            highlightOnHover
            styles={{
                table: { borderRadius: '4px', overflow: 'hidden' },
                thead: { backgroundColor: '#f4f4f4' },
                tr: { borderBottom: '1px solid #ededed' },
                th: { fontWeight: 600, textTransform: 'uppercase' },
                td: { fontSize: '14px', padding: '8px 12px' },
            }}
        />


    );
};


export default Grid
