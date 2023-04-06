import React, { useEffect, useRef } from 'react'

import { TextInput, TextInputProps } from '@mantine/core'

interface InputSearchProps extends TextInputProps {
  onInputBlur?: () => void
}

const InputSearch: React.FC<InputSearchProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current?.addEventListener('focus', () => {
      if (props.onInputBlur) {
        props?.onInputBlur()
      }
    })
  }, [props])

  return (
    <TextInput
      ref={inputRef}
      className="border-gray-300 bg-white"
      classNames={{
        input: 'min-h-[48px] rounded-md focus:border-blue-300',
      }}
      {...props}
    />
  )
}

export default InputSearch
