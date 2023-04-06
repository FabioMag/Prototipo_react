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
  data: Data[]
}

const Expander = ({ isExpanded, onClick }: any) => {
  return (
    <div className="flex items-center justify-center p-3 cursor-pointer">
      <ReaderIcon
        color={isExpanded ? '#0093f1' : '#a4a4a4'}
        onClick={onClick}
      />
    </div>
  )
}

const SelectBadge = (text: string) => {
  if (text === 'Robô Gerador') {
    return <Badge color="teal">{text}</Badge>
  }
  return <Badge color="blue">{text}</Badge>
}

const ReactBaseTable: React.FC<ReactBaseTableProps> = (props) => {
  const modalRef = useRef<HandleModal>(null)
  const { data } = props

  const handleOpenModal = (processNumber: string) => {
    modalRef.current?.onOpen({ processNumber })
  }

  const columns = [
    {
      width: 20,
      header: () => (
        <div className="p-4 cursor-help">
          <Tooltip label="Acessar texto capturado" withArrow>
            <InfoCircledIcon />
          </Tooltip>
        </div>
      ),
      expander: Expander,
    },
    {
      width: 230,
      key: 'number',
      header: () => (
        <div className="p-4 cursor-help">
          <Tooltip
            label="Clique no número do processo para visualiza-lo"
            withArrow
          >
            <span className="flex items-center gap-2">
              Número do processo
              <InfoCircledIcon />
            </span>
          </Tooltip>
        </div>
      ),
      content: ({ row }: any) => (
        <Button
          compact
          variant="subtle"
          color="gray"
          onClick={() => handleOpenModal(row.number)}
        >
          {row.number}
        </Button>
      ),
    },
    {
      key: 'font',
      header: 'Fonte',
      content: ({ row }: any) => SelectBadge(row.font),
    },
    {
      key: 'dateExecution',
      header: 'Data da Execução',
    },
    {
      key: 'dateProcess',
      header: 'Data do Processo',
    },
    {
      key: 'value',
      header: 'Valor',
    },
    {
      key: 'keywords',
      header: 'Palavras Localizadas',
      content: ({ row }: any) => <Keywords data={row.keywords} />,
    },
    {
      key: 'origin',
      header: 'Origem',
      content: () => <Badge color="indigo">TJSP</Badge>,
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
      />
      <Modal title="Visualizar processo" ref={modalRef}>
        <ContentModalViewProcess />
      </Modal>
    </>
  )
}

export default ReactBaseTable
