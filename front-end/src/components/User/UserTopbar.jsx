import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { ModeToggle } from '../ModeToggle'
const UserTopbar = () => {
  return (
    <div className='sticky top-0 left-0  h-[8vh] flex justify-center items-center font-sans font-bold gap-4 b border rounded-lg shadow-md bg-white dark:bg-slate-950'>
      <div className='w-[90%] flex items-center justify-end gap-8'>
        <Avatar>
          <AvatarImage src="https://github.com/sh/adcn.png" alt="@shadcn" />
          <AvatarFallback>VK</AvatarFallback>
        </Avatar>
      </div>
      <ModeToggle/>
    </div>
  )
}

export default UserTopbar