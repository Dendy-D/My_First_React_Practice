import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import App from './App'

import './index.scss'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState())

store.subcribe(rerenderEntireTree)
