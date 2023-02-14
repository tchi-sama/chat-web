import React from 'react'
import Center from '../components/Center'
import Left from '../components/Left'
import Navbar from '../components/Navbar'
import Right from '../components/Right'

function MessagesPage() {
  return (
    <div className='flex h-full'>
        <Navbar where={"messages"}/>
        <Left/>
        <Center/>
        <Right/>
    </div>
  )
}

export default MessagesPage