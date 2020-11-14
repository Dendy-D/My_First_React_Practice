import React from 'react'
import './App.css'
import Header from './componets/Header/Header'
import Nav from './componets/Navbar/Nav'
import Profile from './componets/Profile/Profile'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Profile/> 
    </div>
  )
}

export default App
