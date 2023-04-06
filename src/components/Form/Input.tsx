import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import InputComponent, { InputProps } from '../Input'

interface InputPropsType extends InputProps {
  name: string
}

const Input: React.FC<InputPropsType> = (rest) => {
  const { name } = rest

  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <InputComponent
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
      error={error}
    />
  )
}

export default Input
