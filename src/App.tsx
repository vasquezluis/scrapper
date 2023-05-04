import { Routes, Route } from 'react-router-dom'

// -> pages
import Index from './pages/public/Index'
import Register from './pages/public/Register'
import Login from './pages/public/Login'
import Home from './pages/private/Home'

// -> provider (context)
import { AuthProvider } from './context/authContext'

function App () {
  return (
    <div className='bg-slate-300 h-screen text-white flex'>
      <AuthProvider>
        <Routes>
          {/* public pages */}
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* private pages */}
          <Route path='/home' element={<Home />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
