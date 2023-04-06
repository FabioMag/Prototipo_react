import React, { useCallback } from 'react'

import { Form, Input, FormHandles } from '@app/components/Form'

import SubmitButton from '@app/components/SubmitButton'

import { useAuth } from '@app/hooks/auth'

import {
  getValidationErrors,
  ValidationError,
} from '@app/validators/validationErrors'
import loginValidator from '@app/validators/login'
import { type } from '../../components/Form/index'

interface HandleSubmitProps {
  username: string
  password: string
}

const Login: React.FC = () => {
  const { loading, signIn } = useAuth((auth) => auth)

  const formRef = React.useRef<FormHandles>(null)

  const handleSubmit = useCallback(
    async (data: HandleSubmitProps) => {
      try {
        await loginValidator.validate(data, { abortEarly: false })

        signIn(data.username, data.password)
      } catch (err) {
        if (err instanceof ValidationError) {
          const validationErrors = getValidationErrors(err)

          formRef.current?.setErrors(validationErrors)
        }
      }
    },
    [signIn],
  )

  return (
    <div className="space-y-4 ">
      <h5 className="text-lg font-semibold text-gray-90">Entrar</h5>
      <p className="text-sm font-light text-gray-80 m-0">
        Insira seus dados de acesso para começar
      </p>

      <Form ref={formRef} onSubmit={handleSubmit} className="form">
        <Input name="username" placeholder="Insira seu usuário" />
        <Input name="password" placeholder="Insira sua senha" type="password" />

        <SubmitButton
          fullWidth
          isLoading={loading}
          className="mt-4"
          type="submit"
        >
          ENTRAR
        </SubmitButton>
      </Form>
    </div>
  )
}

export default Login
