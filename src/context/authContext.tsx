import { createContext, useContext } from 'react'
import { UserCredential, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

// * interface paral los datos que puede recibir authContext
interface AuthContextType {
  // user: {
  //   login: boolean
  // },
  signup: (email: string, password: string) => void
}

// * interface para las props de AuthProvider -> children
interface AuthProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error('There is no auth provider')
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext<AuthContextType | null>(null)

export function AuthProvider ({ children }: AuthProviderProps) {
  // * la funcion retorna un UserCredential por promesa
  // * los valores se reciben desde el formario de registro
  // * en el componente RegisterForm se manejan los errores
  const signup = (email: string, password: string): Promise<UserCredential> => createUserWithEmailAndPassword(auth, email, password)

  return (
    <authContext.Provider value={{ signup }}>
      {children}
    </authContext.Provider>
  )
}
