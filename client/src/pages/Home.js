import React,{useState} from 'react'
import Auth from '../components/Auth'
import Stream from '../components/Stream'

const Home = () => {
  const [token, setToken] = useState('')

  return (
    <div>
      <h1>Welcome to Twitch Clone</h1>
      {token ? <Stream token={token} /> : <Auth setToken={setToken} />}
    </div>
  )
}

export default Home
