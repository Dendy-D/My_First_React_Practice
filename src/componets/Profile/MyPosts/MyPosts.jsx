import React from 'react'
import Post from './Post/Post'

import '../Profile.scss'

const MyPosts = () => {
  return (
    <div className='profile__myPosts'>
      <div className='profile__myPosts-container'>
        <div className='profile__myPosts-logo'>Мои посты</div>
        <form>
          <input type='text' placeholder='Some information.....' />
          <button>Send</button>
        </form>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts
