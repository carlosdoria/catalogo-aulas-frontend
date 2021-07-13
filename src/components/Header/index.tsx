import { useUser } from 'hooks/useUser'
import Image from 'next/image'
import Link from 'next/Link'

import logoImg from '../../assets/logo.png'

import * as S from './styles'

export function Header () {
  const context = useUser()

  return (
    <S.Container>
      <Link href='/'>
        <a>
          <Image
            src={logoImg}
            alt='Logo'
            height={60}
            width={70}
          />
        </a>
      </Link>

      <S.Navbar>
        <S.NavList>

          <li>
            <Link href='/'>
              <a>Aulas</a>
            </Link>
          </li>

          {context.user.isAdmin &&
            <li>
              <Link href='/registerLesson'>
                <a>Cadastro de Aulas</a>
              </Link>
            </li>
          }

          <li>
            {context.user.username ?
              <Link href='/'>
                <S.Username onClick={ () => context.logout()}>
                  {context.user.username}
                </S.Username>
              </Link>

              :
              <Link href='/signIn'>
                <a>Login</a>
              </Link>
            }
          </li>

        </S.NavList>
      </S.Navbar>
    </S.Container>
  )
}
