import React from 'react'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import DialogMessages from './DialogMessages/DialogMessages'

import './Messages.scss'

const Messages = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <div>
      <NavLink to={'/dialogs/' + d.id}>{d.name}</NavLink>
    </div>
  ))

  let messagesElements = props.messages.map((m) => <div>{m.message}</div>)

  return (
    <div className='dialogs'>
      <div className='dialogs__items'>
        <DialogItem dialogsArray={dialogsElements} />
      </div>
      <div className='dialogs__messages'>
        <DialogMessages messagesArray={messagesElements} />
      </div>
    </div>
  )
}

export default Messages
