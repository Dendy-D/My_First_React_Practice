import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './componets/Header/Header'
import Nav from './componets/Navbar/Nav'
import Profile from './componets/Profile/Profile'
import Messages from './componets/Messages/Messages'
import Music from './componets/Music/Music'
import Communities from './componets/Communities/Communities'
import News from './componets/News/News'
import Friends from './componets/Friends/Friends'

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
            <Route path='/friends' component={Friends} />
            <Route path='/dialogs' component={Messages} />
            <Route path='/music' component={Music} />
            <Route path='/communities' component={Communities} />
            <Route path='/news' component={News} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
