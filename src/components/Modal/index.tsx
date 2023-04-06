import React, {
  forwardRef,
  ReactElement,
  useImperativeHandle,
  useState,
} from 'react'

import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'

interface ModalProps {
  children: ReactElement
  title: string
}

export interface HandleModal {
  onOpen: (content: any) => void
  onClose: () => void
}

const ModalComponent = forwardRef<HandleModal, ModalProps>((props, ref) => {
  const [content, setContent] = useState({} as any)

  const { title } = props

  const [opened, { open, close }] = useDisclosure(false)

  useImperativeHandle(ref, () => ({
    onClose: () => close(),
    onOpen: (content: any) => {
      setContent(content)
      open()
    },
  }))

  return (
    <>
      <Modal opened={opened} onClose={close} title={title} centered size="auto">
        <>
          {props?.children &&
            React.cloneElement(props.children, { ...content })}
        </>
      </Modal>
    </>
  )
})

export default ModalComponent
