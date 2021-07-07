import Image from 'next/image'
import Link from 'next/Link'

import logoImg from '../../../public/logo1.png'

import * as S from './styles'

export function Header () {
  return (
    <S.Container>
      <Image
        src={logoImg}
        alt='Logo'
        height={60}
        width={140}
      />

      <S.Navbar>
        <S.NavList>

          <S.NavContent>
            <Link href='/'>
              <a>Aulas</a>
            </Link>
          </S.NavContent>

          <S.NavContent>
            <Link href='/SignIn'>
              <a>Login</a>
            </Link>
          </S.NavContent>

          <S.NavContent>
            <Link href='/SignUp'>
              <a>Cadastre-se</a>
            </Link>
          </S.NavContent>

        </S.NavList>
      </S.Navbar>
    </S.Container>
  )
}
