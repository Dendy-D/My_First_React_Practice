import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './componets/Header/Header'
import Nav from './componets/Navbar/Nav'
import Profile from './componets/Profile/Profile'
import Message from './componets/Message/Message'

import './index.scss'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='app__header'>
          <Header />
        </div>
        <div className='app__сontent'>
          <Nav />
          <div className='rightSide'>
            <Route path='/profile' component={Profile} />
            <Route path='/messages' component={Message} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
