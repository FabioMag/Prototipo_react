import React, { useState } from 'react'
import { Badge } from '@mantine/core'

import { Table } from 'react-fluid-table'

const data = [
    {
        Fundo: "Mazzotini",
        "Rendimento Anual": "19,50%",
        "Rendimento Mensal": "1,63%",
        Liquidez: "D + 120",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Alto",
    },
    {
        Fundo: "Poupança",
        "Rendimento Anual": "10,50%",
        "Rendimento Mensal": "0,88%",
        Liquidez: "D + 0",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "Fundo Poupança",
        "Rendimento Anual": "11,40%",
        "Rendimento Mensal": "0,95%",
        Liquidez: "D + 0",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "Fundo SELIC",
        "Rendimento Anual": "13,50%",
        "Rendimento Mensal": "1,13%",
        Liquidez: "D + 360",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "CDB",
        "Rendimento Anual": "15,00%",
        "Rendimento Mensal": "1,25%",
        Liquidez: "D + 720",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Médio",
    },
    {
        Fundo: "LCI",
        "Rendimento Anual": "15,30%",
        "Rendimento Mensal": "1,28%",
        Liquidez: "D + 120",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "Fundo Renda Fixa",
        "Rendimento Anual": "15,90%",
        "Rendimento Mensal": "1,33%",
        Liquidez: "D + 5",
        Risco: "Baixo",
        "Potencial de Rentabilidade": "Baixo",
    },
    {
        Fundo: "FII",
        "Rendimento Anual": "18,00%",
        "Rendimento Mensal": "1,50%",
        Liquidez: "D + 1",
        Risco: "Médio",
        "Potencial de Rentabilidade": "Médio",
    },
];

const Grid = () => {
    const [highlightFirstRow, setHighlightFirstRow] = useState(true); // variável de estado para controlar a cor da primeira linha

    const columns = [
        {
            key: 'Fundo',
            header: 'Fundo',
            align: 'center',
            content: ({ row, index }) => (
                <strong style={{ backgroundColor: highlightFirstRow && index === 0 ? 'yellow' : 'transparent' }}>
                    {row.Fundo}
                </strong>
            ),
        },
        {
            key: 'Rendimento Anual',
            header: 'Rendimento Anual',
            align: 'center',
            content: ({ row, index }) => (
                <strong style={{ backgroundColor: highlightFirstRow && index === 0 ? 'yellow' : 'transparent' }}>
                    {row['Rendimento Anual']}
                </strong>
            ),
        },
        {
            key: 'Rendimento Mensal',
            header: 'Rendimento Mensal',
            align: 'center',
            content: ({ row, index }) => (
                <strong style={{ backgroundColor: highlightFirstRow && index === 0 ? 'yellow' : 'transparent' }}>
                    {row['Rendimento Mensal']}
                </strong>
            ),
        },
        {
            key: 'Liquidez',
            header: 'Liquidez',
            align: 'center',
            content: ({ row, index }) => (
                <strong style={{ backgroundColor: highlightFirstRow && index === 0 ? 'yellow' : 'transparent' }}>
                    {row.Liquidez}
                </strong>
            ),
        },
        {
            key: 'Risco',
            header: 'Risco',
            align: 'center',
            content: ({ row, index }) => (
                <strong style={{ backgroundColor: highlightFirstRow && index === 0 ? 'yellow' : 'transparent' }}>
                    {row.Risco}
                </strong>
            ),
        },
        {
            key: 'Potencial de Rentabilidade',
            header: 'Potencial de Rentabilidade',
            align: 'center',
            content: ({ row, index }) => (
                <strong style={{ backgroundColor: highlightFirstRow && index === 0 ? 'yellow' : 'transparent' }}>
                    {row['Potencial de Rentabilidade']}
                </strong>
            ),
        },
    ];

    return (
        <Table
            data={data}
            columns={columns}
        />
    );
};

export default Grid
