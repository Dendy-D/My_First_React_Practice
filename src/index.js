import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import App from './App'

import './index.scss'

const posts = [
  { id: 1, content: 'Me sooo good', date: '09.01.2021' },
  {
    id: 1,
    content:
      'Hello guys its me e  fhf feh e fe fugfeugfehfeghf fe fegefhgcud  ejgfefegjef fegue df hdjdfh fe fe  dhdfhdfiffh v bfuhefiu e hfhofejofe',
    date: '02.01.2021',
  },
  {
    id: 1,
    content: `Happy new year dhdhdfeoeenffkfhjfe dhdjhehedjehejfejhfjfee 3jei3ihe3j3eh3e
  3ek3eje3he3ije3ie3  ejdbeb3gh3uhu fejf4 i4f 4f 4u 4g ufgui fegi efegeehjfege e feu fehuif ufekfehjfeioehefejhfefehfekjhfejkhfejfe  dfjhdfjkfhefuiergfbfd`,
    date: '01.01.2021',
  },
]

const dialogs = [
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Marcus' },
  { id: 4, name: 'Elisabet' },
  { id: 5, name: 'Daniel' },
  { id: 6, name: 'Mary' },
]

const messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'Hi' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
