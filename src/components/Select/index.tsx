import React from 'react'

import { SelectProps, Select } from '@mantine/core'

const CPSelect: React.FC<SelectProps> = (props) => {
  return (
    <Select
      className="border-gray-300 bg-white"
      classNames={{
        input: 'min-h-[48px] rounded-md focus:border-blue-300',
      }}
      {...props}
    />
  )
}

export default CPSelect
