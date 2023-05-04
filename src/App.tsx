import { Routes, Route } from 'react-router-dom'

// -> pages
import Index from './pages/public/Index'
import Register from './pages/public/Register'
import Login from './pages/public/Login'
import Home from './pages/private/Home'

function App () {
  return (
    <div className='bg-slate-300 h-screen text-white flex'>
      <Routes>
        {/* public pages */}
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* private pages */}
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
