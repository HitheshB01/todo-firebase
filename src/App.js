import React from 'react'
import Header from './components/Header'
import Signup from './components/Signup'
import Login from './components/Login'
import RoutingPage from './components/RoutingPage'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      {/* <Header/> */}
      <RoutingPage/>
      <Home/>
      {/* <Signup/> */}
    </div>
  )
}

export default App
