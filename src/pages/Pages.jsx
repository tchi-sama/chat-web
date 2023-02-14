import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'

function Pages() {
  return (
    <div className='flex h-[100vh]'>
        <Navbar/>
        <Home/>
    </div>
  )
}

export default Pages
    