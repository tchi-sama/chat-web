import React from 'react'
import Center from '../components/Center'
import Left from '../components/Left'
import Navbar from '../components/Navbar'
import Right from '../components/Right'

function MessagesPage() {
  const [rightOpen, setRightOpen] = React.useState(true);
  const [leftOpen, setLeftOpen] = React.useState(false);
  const infoToggle = () => {
    setRightOpen(p=>!p);
  }
  return (
    <div className='flex h-full'>
        <Navbar  where={"messages"}/>
        <Left/>
        <Center infoToggle={infoToggle}/>
        {
          rightOpen &&
          <Right/>
        }
    </div>
  )
}

export default MessagesPage