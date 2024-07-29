// import AdminLeftBar from '@/components/Admin/AdminLeftbar'
// import AdminMain from '@/components/Admin/AdminMain'
// import AdminTopbar from '@/components/Admin/AdminTopbar'
// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const AdminLayout = () => {
//   return (
//     <div className=' h-screen w-screen overflow-x-hidden flex flex-row overflow-y-hidden pt-2  pl-2 pb-3 '>
//       <AdminLeftBar />
//       <div className=' w-full flex justify-center items-center flex-col gap-3'>
//         <div className='w-full pt-0 pr-2 pl-2 sticky top-0'>
//           <AdminTopbar />
//         </div>
//         <div className=' h-full w-full flex justify-center items-center pr-2 pl-2'>
//           <AdminMain />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminLayout


import AdminLeftBar from '@/components/Admin/AdminLeftbar'
import AdminMain from '@/components/Admin/AdminMain'
import AdminTopbar from '@/components/Admin/AdminTopbar'
import React from 'react'

const AdminLayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden flex pt-2  pl-2 pb-3 bg-slate-100 dark:bg-gray-800'>
      <AdminLeftBar />
      <div className='flex-1 flex flex-col gap-1'>
        <div className='sticky top-0 z-50 pt-0 pr-2 pl-2'>
          <AdminTopbar />
        </div>
        <div className='flex-1 overflow-auto h-full w-full flex justify-center items-center pr-2 pl-2'>
          <AdminMain />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
