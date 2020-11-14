import React from 'react'
import objClass from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={objClass.nav}>
      <a href='*'>Profile</a>
      <a href='*'>Messages</a>
      <a href='*'>News</a>
      <a href='*'>Music</a>
      <a href='*'>Settings</a>
    </nav>
  )
}

export default Nav