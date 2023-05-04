import { useAuth } from '../../context/authContext'

function Home () {
  const auth = useAuth()

  console.log(auth?.user)

  return (
    <div>Home</div>
  )
}

export default Home
