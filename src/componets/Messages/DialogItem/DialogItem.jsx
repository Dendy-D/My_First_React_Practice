import React from 'react'
// import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  // let path = '/dialogs/' + props.id

  return (
    <div>
      {/* <NavLink to={path}>{props.name}</NavLink> */}
      {props.dialogsArray}
    </div>
  )
}

export default DialogItem
