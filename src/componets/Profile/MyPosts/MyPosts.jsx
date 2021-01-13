import React from 'react'
import Post from './Post/Post'

import '../Profile.scss'

const MyPosts = () => {
  return (
    <div className='main__myPosts'>
      <div>Мои посты</div>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts
