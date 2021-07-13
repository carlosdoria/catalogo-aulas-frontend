import { useRef } from 'react'
import { useRouter } from 'next/router'
import { useUser } from 'hooks/useUser'
import { FormHandles } from '@unform/core'
import { Input } from 'components/Form/Input'

import * as S from '../styles/signIn.styles'
import Link from 'next/Link'

interface NewUser {
  username: string
  password: string
}

export default function SignIn () {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()
  const context = useUser()

  async function handleSubmit ({ username, password }: NewUser) {

    if (username === '' || password === '') {
      formRef.current?.setErrors({
        username: 'O nome do usuário é obrigatório.',
        password: 'A senha é um campo obrigatório.'
      })
    }
    try {
      await context.signIn({ username, password })
      router.push('/RegisterLesson')
      formRef.current?.reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Container>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Fazer login</h1>
        <label>Nome do usuário</label>
        <Input name='username' placeholder='Usuário' />
        <label>Senha</label>
        <Input name='password' placeholder='Senha' type='password'/>

        <S.ButtonContainer>
          <Link href='/signUp'><a>Crie sua conta</a></Link>
          <S.SubmitButton type='submit'>Enviar</S.SubmitButton>
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  )
}
