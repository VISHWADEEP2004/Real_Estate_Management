import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { ModeToggle } from '../ModeToggle'
const AdminTopbar = () => {
  return (
    <div className=' sticky top-0 left-0  h-[8vh] flex justify-center items-center font-sans font-bold gap-8  b border border-b-2  rounded-lg shadow-md dark:  dark:bg-slate-950 bg-white'>
      <div className='w-[90%] flex items-center justify-end gap-8'>
        <Avatar>
          <AvatarImage src="https://github.com/sh/adcn.png" alt="@shadcn" />
          <AvatarFallback className='text-violet-900'>VK</AvatarFallback>
        </Avatar>
      </div>
      <ModeToggle/>
    </div>
  )
}

export default AdminTopbar