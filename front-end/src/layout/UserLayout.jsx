import UserLeftBar from '@/components/User/UserLeftbar'
import UserMain from '@/components/User/UserMain'
import UserTopbar from '@/components/User/UserTopbar'
import React from 'react'

const UserLayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden flex pt-2  pl-2 pb-3 '>
      <UserLeftBar />
      <div className='flex-1 flex flex-col gap-3'>
        <div className='sticky top-0 z-50 pt-0 pr-2 pl-2'>
          <UserTopbar />
        </div>
        <div className='flex-1 overflow-auto h-full w-full flex justify-center items-center pr-2 pl-2'>
          <UserMain/>
        </div>
      </div>
    </div>
  )
}

export default UserLayout