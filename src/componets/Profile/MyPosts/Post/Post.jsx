import React from 'react'

import userAvatar from '../../../../assets/images/ava.jpg'

import './Post.scss'

const Post = () => {
  return (
    <div className='post'>
      <img className='post__avatar' src={userAvatar} alt='Avatar'/>
      <div className='post__content'>Me sooo good</div>
      <div className='post__date'>09.01.2021</div>
    </div>
  )
}

export default Post
