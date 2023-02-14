import React from 'react'
import Navbar from '../components/Navbar'
import Left from '../components/Left'
import Center from '../components/Center'
import Right from '../components/Right'

function Home() {
  return (
    <div className='flex-1 flex'>
        <Navbar where={"home"}/>
    </div>
  )
}

export default Home