import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

function RegisterForm () {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  // const errorToast = (messsage: string) => {
  //   toast(`💔 ${messsage}`, {
  //     position: 'top-right',
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: 'dark'
  //   })
  // }

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      navigate('/home')
    } catch (error) {
      // if (error && 'code' in error && error.code === 'auth/internal-error') {
      //   setError('Correo Invalido')
      // }
      if (error instanceof Error) {
        console.log(error.message)

        switch (error.message) {
          case 'Firebase: Error (auth/invalid-email).':
            setError('Correo Invalido.')
            break
          case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
            setError('La contraseña debe tener al menos 6 caracteres.')
            break
          case 'Firebase: Error (auth/email-already-in-use).':
            setError('El correo ya esta registrado.')
            break
          default:
            setError('Error en el registro')
        }
      }
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' placeholder='youremail@company.ltd' onChange={handleChange} />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' placeholder='******' onChange={handleChange} />

        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
