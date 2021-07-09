import { parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useContext, useState, useEffect } from 'react'
// import { toast } from 'react-toastify';
import { api } from 'services/api'

interface UserProviderProps {
  children: ReactNode
}

interface IUser {
  isAdmin: string
  username: string
  _id: string
}

interface UserLogin {
  username: string
  password: string
}

interface NewUser {
  name: string
  username: string
  password: string
  confirmPassword: string
}

interface UserContextData {
  user: IUser
  signIn: (data: UserLogin) => Promise<void>
  signUp: (data: NewUser) => Promise<void>
  logout: () => Promise<void>
}

const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider ({ children }: UserProviderProps) {
  const [ user, setUser ] = useState<IUser>({} as IUser)

  async function signIn ({ username, password } : UserLogin) {
    const response = await api.post('/users/authenticate', {
      username,
      password
    })
    setUser(response.data.user)
    setCookie(undefined, 'catalogo-aulas-token', response.data.token, {
      maxAge: 60 * 60 * 24 // 24h
    })
    api.defaults.headers[ 'Authorization' ] = `Bearer ${response.data.token}`
  }

  async function signUp ({ name, username, password, confirmPassword } : NewUser) {
    const response = await api.post('/users', {
      name,
      username,
      password,
      confirmPassword
    })
    console.log(response.data.newUser)
    setUser(response.data.newUser)
    setCookie(undefined, 'catalogo-aulas-token', response.data.token, {
      maxAge: 60 * 60 * 24 // 24h
    })
    api.defaults.headers[ 'Authorization' ] = `Bearer ${response.data.token}`
  }

  async function logout () {
    console.log('rodei')
    setUser({} as IUser)
    setCookie(undefined, 'catalogo-aulas-token', '', {
      maxAge: 60 * 60 * 24 // 24h
    })
    api.defaults.headers[ 'Authorization' ] = ''
  }

  async function recoverUserByToken () {
    const { 'catalogo-aulas-token': token } = parseCookies()

    if (token) {
      const response = await api.get('/users/token')
      setUser(response.data)
    }
  }

  useEffect(() => {
    recoverUserByToken()
  }, [])

  return (
    <UserContext.Provider value={{
      user,
      signIn,
      signUp,
      logout,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser (): UserContextData {
  const context = useContext(UserContext)
  return context
}
