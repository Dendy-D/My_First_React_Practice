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
        <Post text='Me sooo good' date='09.01.2021' />
        <Post text="Hello guys it's me e  fhf feh e fe fugfeugfehfeghf fe fegefhgcud  ejgfefegjef fegue df hdjdfh fe fe  dhdfhdfiffh v bfuhefiu e hfhofejofe" date='02.01.2021' />
        <Post text='Happy new year dhdhdfeoeenffkfhjfe dhdjhehedjehejfejhfjfee 3jei3ihe3j3eh3e
        3ek3eje3he3ije3ie3  ejdbeb3gh3uhu fejf4 i4f 4f 4u 4g ufgui fegi efegeehjfege e feu fehuif ufekfehjfeioehefejhfefehfekjhfejkhfejfe  dfjhdfjkfhefuiergfbfd' date='01.01.2021' />
      </div>
    </div>
  )
}

export default MyPosts
