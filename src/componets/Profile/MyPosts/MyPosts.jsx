import React from 'react'

import '../Profile.scss'

const MyPosts = (props) => {
  return (
    <div className='profile__myPosts'>
      <div className='profile__myPosts-container'>
        <div className='profile__myPosts-logo'>My posts</div>
        <form>
          <input type='text' placeholder='Some information.....' />
          <button>Send</button>
        </form>
        {props.postsArray}
      </div>
    </div>
  )
}

export default MyPosts
