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

const App = (props) => {
  return (
    <Router>
      <div className='app'>
        <div className='app__header'>
          <Header />
        </div>
        <div className='app__сontent'>
          <Nav />
          <div className='rightSide'>
            <Route
              path='/profile'
              render={() => <Profile posts={props.posts} />}
            />
            <Route path='/friends' render={() => <Friends />} />
            <Route
              path='/dialogs'
              render={() => (
                <Messages messages={props.messages} dialogs={props.dialogs} />
              )}
            />
            <Route path='/music' render={() => <Music />} />
            <Route path='/communities' render={() => <Communities />} />
            <Route path='/news' render={() => <News />} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
