import { UseFormReturnType } from '@mantine/form'
import { FiltersInput } from './'

function filterValidator(
  data: FiltersInput,
  form: UseFormReturnType<FiltersInput>,
) {
  const { dateStart, dateStop, valueStart, valueStop } = data

  if ((dateStart && !dateStop) || (!dateStart && dateStop)) {
    form.setErrors({
      dateStart: 'Filtro utilizados em conjunto',
      dateStop: 'Filtro utilizados em conjunto',
    })

    setTimeout(() => form.clearErrors(), 5000)

    return true
  }
  if ((valueStart && !valueStop) || (!valueStart && valueStop)) {
    form.setErrors({
      valueStop: 'Filtro utilizados em conjunto',
      valueStart: 'Filtro utilizados em conjunto',
    })

    setTimeout(() => form.clearErrors(), 5000)

    return true
  }

  return false
}

export { filterValidator }
