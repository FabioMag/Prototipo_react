import * as Yup from 'yup'

const schema = Yup.object().shape({
  username: Yup.string().required('Usuário é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
})

export default schema
