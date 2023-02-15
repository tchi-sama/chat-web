import { Avatar, IconButton } from '@mui/material'
import React from 'react'

function Msg() {
  return (
    <div>
        <div className="py-4 flex gap-4 justify-start items-start hover:px-2 duration-200">
          <IconButton>
            <Avatar />
          </IconButton>
          <div className="flex flex-col gap-1">
            <div className="flex w-full justify-between items-end">
              <h1 className="font-semibold text-white">tchisama</h1>
              <span className="text-xs text-gray-400">05:48</span>
            </div>
            <p className="w-fit text-sm text-white p-4 bg-[#20222b] rounded-xl">
              hello how are you today
            </p>
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default Msg