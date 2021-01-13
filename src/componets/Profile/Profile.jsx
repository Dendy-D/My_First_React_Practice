import React from 'react'
import MyPosts from './MyPosts/MyPosts'

import './Profile.scss'

const Profile = () => {
  return (
    <main className='main'>
      <div className='main__container-fon'>
        {/* <img src={mainImg} alt='Main fon' /> */}
      </div>
      <MyPosts />
    </main>
  )
}

export default Profile
