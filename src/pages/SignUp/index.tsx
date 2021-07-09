import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from 'hooks/useUser'
import { api } from 'services/api'
import { FormHandles } from '@unform/core'
import { Input } from 'components/Form/Input'

import * as S from './styles'

interface NewUser {
  name: string
  username: string
  password: string
  confirmPassword: string
}

export default function SignUp () {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()
  const context = useUser()
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPasswor ] = useState('')

  function error (name: string, fieldName: string) {
    if (name === '') {
      formRef.current?.setErrors({
        [ name ]: `O ${fieldName} é obrigatório.`
      })
    }
  }

  async function handleSubmit ({ name, username, password, confirmPassword }: NewUser) {
    // error(name, 'nome completo')
    // error(username, 'username')
    // error(password, 'senha')
    // error(confirmPassword, 'confirmar senha')
    try {
      await context.signUp({ name, username, password, confirmPassword })
      router.push('/')
      formRef.current?.reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Container>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Cadastre-se</h1>
        <label>Nome Completo do usuário</label>
        <Input name='name' placeholder='Usuário' />
        <label>Usuário para login</label>
        <Input name='username' placeholder='Usuário' />
        <label>Senha</label>
        <Input name='password' placeholder='Senha' type='password' onChange={e => setPassword(e.target.value)}/>
        <label>Confirme sua senha {password !== confirmPassword && <small>as senhas devem ser iguais</small>}</label>
        <Input name='confirmPassword' placeholder='Senha' type='password' onChange={e => setConfirmPasswor(e.target.value)}/>

        <S.SubmitButton type='submit' disabled={false}>Cadastrar</S.SubmitButton>
      </S.Form>
    </S.Container>
  )
}
