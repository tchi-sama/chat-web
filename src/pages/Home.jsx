import React from 'react'
import Navbar from '../components/Navbar'
import Left from '../components/Left'
import Center from '../components/Center'
import Right from '../components/Right'

function Home() {
  return (
    <div className='flex-1 flex'>
        <Left />
        <Center/>
        <Right/>
    </div>
  )
}

export default Home