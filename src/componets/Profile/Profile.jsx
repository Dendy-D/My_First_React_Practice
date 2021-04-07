import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import Post from './MyPosts/Post/Post'

import userAvatar from '../../assets/images/ava.jpg'

import './Profile.scss'

const Profile = (props) => {
  let postsElements = props.posts.map((p) => <Post text={p.content} date={p.date} />)

  return (
    <div className='profile'>
      <div className='profile__header'>
        <div className='profile__header-edit'>
          <svg width='33' height='35' x='0' y='0' viewBox='0 0 528.899 528.899'>
            <g>
              <g xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z'
                  fill='#ffffff'
                  data-original='#000000'
                />
              </g>
            </g>
          </svg>
          <span>Edit</span>
          <svg
            className='circle'
            width='27'
            height='27'
            viewBox='0 0 27 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M26.5 13C26.5 20.1797 20.6797 26 13.5 26C6.3203 26 0.5 20.1797 0.5 13C0.5 5.8203 6.3203 0 13.5 0C20.6797 0 26.5 5.8203 26.5 13Z'
              fill='#1DA1F2'
            />
          </svg>
        </div>
        <div className='profile__header-status'>
          <span>Status:</span> free
        </div>
      </div>
      <hr />
      <div className='profile__main'>
        <div className='profile__main-container'>
          <div className='profile__main-avatar'>
            <img src={userAvatar} alt='User Avatar' />
          </div>
          <div className='profile__main-data'>
            <div className='profile__main-logo'>Kot Naric</div>
            <div>
              <span>Country: </span>Canada
            </div>
            <div>
              <span>City: </span>Toronto
            </div>
            <div>
              <span>Date of Birth: </span>10.09.2005
            </div>
            <div>
              <span>Language: </span>English
            </div>
            <div>
              <span>Job: </span>Web_Dev
            </div>
          </div>
        </div>
        <div className='profile__main-Git-Hub'>
          <span>Git Hub: </span>https://github.com/Dendy-D
        </div>
      </div>
      <hr />
      <MyPosts postsArray={postsElements} />
    </div>
  )
}

export default Profile
