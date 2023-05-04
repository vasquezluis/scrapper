import { createContext, useContext } from 'react'

interface AuthContextType {
  user: {
    login: boolean
  }
}

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
  const user = {
    login: true
  }

  return (
    <authContext.Provider value={{ user }}>
      {children}
    </authContext.Provider>
  )
}
