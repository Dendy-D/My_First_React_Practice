import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import objClass from './Profile.module.css'

const Profile = () => {
  return (
    <main className={objClass.main}>
      <div>
        <img src='https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg' alt='' />
      </div>
      <MyPosts/>
    </main>
  )
}

export default Profile