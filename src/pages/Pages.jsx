import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import MessagesPage from './MessagesPage'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Pages() {
  return (
    <div className='h-[100vh]'>
        {/* <MessagesPage/> */}
        {/* <SignIn/> */}
        <SignUp/>
    </div>
  )
}

export default Pages
    