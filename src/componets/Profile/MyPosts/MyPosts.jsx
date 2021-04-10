import React from 'react'
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/store'


import '../Profile.scss'

const MyPosts = (props) => {
  const inputValue = React.createRef()

  const addPost = (event) => {
    event.preventDefault()
    props.dispatch(addPostActionCreator())
  }

  const onChangePost = () => {
    let value = inputValue.current.value
    props.dispatch(onPostChangeActionCreator(value))
  }

  return (
    <div className='profile__myPosts'>
      <div className='profile__myPosts-container'>
        <div className='profile__myPosts-logo'>My posts</div>
        <form>
          <input
            ref={inputValue}
            type='text'
            placeholder='Some information.....'
            onChange={onChangePost}
            value={props.profilePage.postValue}
          />
          <button onClick={addPost}>Send</button>
        </form>
        {props.postsArray}
      </div>
    </div>
  )
}

export default MyPosts
