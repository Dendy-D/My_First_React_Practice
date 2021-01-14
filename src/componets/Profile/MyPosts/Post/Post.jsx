import React from 'react'

import userAvatar from '../../../../assets/images/ava.jpg'

import './Post.scss'

const Post = ({text, date}) => {
  return (
    <div className='post'>
      <img className='post__avatar' src={userAvatar} alt='Avatar'/>
      <div className='post__content'>{text}</div>
      <div className='post__date'>{date}</div>
    </div>
  )
}

export default Post
