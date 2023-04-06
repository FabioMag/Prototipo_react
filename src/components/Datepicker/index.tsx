import React from 'react'

import { DateInput, DateInputProps } from '@mantine/dates'

const DatePicker: React.FC<DateInputProps> = (props) => {
  return (
    <DateInput
      locale="pt-br"
      valueFormat="DD/MM/YYYY"
      classNames={{
        input:
          'min-h-[48px] rounded-md border-gray-300 bg-white focus:ring-blue-300 focus:border-blue-300',
      }}
      type=""
      mx="auto"
      maw={400}
      {...props}
    />
  )
}

export default DatePicker
