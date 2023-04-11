import React from 'react'

import { useForm } from '@mantine/form'

import Input from '@app/components/InputSearch'
import Select from '@app/components/Select'
import InputMask from '@app/components/InputMask'
import DatePicker from '@app/components/Datepicker'
import Button from '@app/components/SubmitButton'
import { filterValidator } from './validator'

export interface FiltersInput {
  dateStart?: Date
  dateStop?: Date
  valueStart?: string
  valueStop?: string
  number?: string
  type: string
}

const INITIAL_FILTER: FiltersInput = {
  dateStart: undefined,
  dateStop: undefined,
  valueStart: '',
  valueStop: '',
  number: '',
  type: 'N',
}

interface FiltersProps {
  handleFilterApplication: (filters: FiltersInput) => void
  resetAll: () => void
}

const Filters: React.FC<FiltersProps> = ({
  handleFilterApplication,
  resetAll,
}) => {
  const form = useForm<FiltersInput>({
    initialValues: INITIAL_FILTER,
  })

  const handleSubmitForm = (data: FiltersInput) => {
    const manipulatedData = { ...data, type: 'N' }
    if (filterValidator(data, form)) return

    if (data.dateStart) {
      manipulatedData.type = 'D'
    }

    if (data.valueStart) {
      manipulatedData.type = 'V'
    }

    if (data.dateStart && data.valueStart) {
      manipulatedData.type = 'DV'
    }

    handleFilterApplication(manipulatedData)
  }

  const handleClear = () => {
    form.reset()
    resetAll()
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmitForm)}>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <Input
            onInputBlur={() => form.setValues(INITIAL_FILTER)}
            placeholder="Fundo"
            {...form.getInputProps('number')}
          />
        </div>
        <div className="col-span-4">
          <Input
            onInputBlur={() => form.setValues(INITIAL_FILTER)}
            placeholder="Liquidez"
            {...form.getInputProps('text')}
          />
        </div>
        <div className="col-span-4">
          <Input
            onInputBlur={() => form.setValues(INITIAL_FILTER)}
            placeholder="Risco"
            {...form.getInputProps('number')}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-3">
          <Input
            onInputBlur={() => form.setValues(INITIAL_FILTER)}
            placeholder="Rendimento Anual"
            {...form.getInputProps('number')}
          />
        </div>
        <div className="col-span-3">
          <Input
            onInputBlur={() => form.setValues(INITIAL_FILTER)}
            placeholder="Rendimento Mensal"
            {...form.getInputProps('number')}
          />
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-3">
              <Button fullWidth>Filtrar</Button>
            </div>
            <div className="col-span-1">
              <Button
                type="button"
                onClick={handleClear}
                variant="subtle"
                compact
              >
                limpar filtros
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Filters
