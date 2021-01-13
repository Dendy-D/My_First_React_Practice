import React from 'react'

import Header from './componets/Header/Header'
import Nav from './componets/Navbar/Nav'
import Profile from './componets/Profile/Profile'

import './index.scss'

const App = () => {
  return (
    <div className='app'>
      <div className='app__header'>
        <Header />
      </div>
      <div className='app__сontent'>
        <Nav />
        <Profile />
      </div>
    </div>
  )
}

export default App
