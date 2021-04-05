import React from 'react'
// import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import DialogMessages from './DialogMessages/DialogMessages'

import './Messages.scss'

const Messages = () => {
  return (
    <div className='dialogs'>
      <div className='dialogs__items'>
        <DialogItem name='Bro1' id='1' />
        <DialogItem name='Bro2' id='2' />
        <DialogItem name='Bro3' id='3' />
        <DialogItem name='Bro4' id='4' />
      </div>
      <div className='dialogs__messages'>
        <DialogMessages message='Hello' />
        <DialogMessages message='Hi' />
        <DialogMessages message='Yo' />
      </div>
    </div>
  )
}

export default Messages
