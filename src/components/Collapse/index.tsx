import React, { useMemo, useState } from 'react'

import classNames from 'classnames'

import { Button, Tooltip } from '@mantine/core'

import * as Collapsible from '@radix-ui/react-collapsible'

import { ChevronDownIcon, InfoCircledIcon } from '@radix-ui/react-icons'

interface CollapseProps {
  title: string
  children: React.ReactNode
  defaultIsOpen?: boolean
  tooltip?: string
}

const Collapse: React.FC<CollapseProps> = (props) => {
  const { children, defaultIsOpen = false, title, tooltip = null } = props

  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  const renderMessage = useMemo(() => {
    if (isOpen) return <span>OCULTAR</span>

    return <span>MOSTRAR</span>
  }, [isOpen])

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className="collapsible"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-2 content-center items-center">
          <span className="font-medium text-lg">{title}</span>
          {tooltip !== null && (
            <Tooltip label={tooltip}>
              <InfoCircledIcon />
            </Tooltip>
          )}
        </div>

        <Collapsible.Trigger asChild>
          <Button variant="subtle" color="blue" compact uppercase>
            {renderMessage}
            <ChevronDownIcon
              className={classNames('transition-all', {
                'rotate-180': isOpen,
              })}
            />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className="pt-4">{children}</Collapsible.Content>
    </Collapsible.Root>
  )
}

export default Collapse
