import React from 'react'

import { NumberInput, NumberInputProps } from '@mantine/core'

const InputMask: React.FC<NumberInputProps> = (props) => {
  return (
    <NumberInput
      className="border-gray-300 bg-white"
      classNames={{
        input: 'min-h-[48px] rounded-md focus:border-blue-300',
      }}
      parser={(value) => value.replace(/\D/g, '')}
      formatter={(value) =>
        value !== undefined && value !== null && value !== ''
          ? `R$ ${parseFloat(value)
              .toFixed(2)
              .replace('.', ',')
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
          : ''
      }
      {...props}
    />
  )
}

export default InputMask
