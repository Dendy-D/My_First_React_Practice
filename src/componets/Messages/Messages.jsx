import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from '../../redux/store'
import DialogItem from './DialogItem/DialogItem'
import DialogMessages from './DialogMessages/DialogMessages'

import './Messages.scss'

const Messages = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <div>
      <NavLink to={'/dialogs/' + d.id}>{d.name}</NavLink>
    </div>
  ))

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <div>{m.message}</div>
  ))

  const inputValue = React.createRef()

  const onMessageChange = () => {
    let value = inputValue.current.value
    props.dispatch(onMessageChangeActionCreator(value))
  }

  const onAddMessage = (event) => {
    event.preventDefault()
    props.dispatch(addMessageActionCreator())
  }

  return (
    <div className='dialogs'>
      <div className='dialogs__items'>
        <DialogItem dialogsArray={dialogsElements} />
      </div>
      <div className='dialogs__messages'>
        <DialogMessages messagesArray={messagesElements} />
        <form>
          <input
            ref={inputValue}
            type='text'
            onChange={onMessageChange}
            value={props.dialogsPage.messageValue}
          />
          <button onClick={onAddMessage}>send</button>
        </form>
      </div>
    </div>
  )
}

export default Messages
