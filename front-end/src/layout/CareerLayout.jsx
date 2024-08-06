
import CarFooter from '@/components/CareerFooter'
import CarHeader from '@/components/CarHeader'
import Footer from '@/components/Web/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

const CareerLayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'>
                <CarHeader />
                <Outlet />
                <CarFooter />
            </div>
  )
}

export default CareerLayout;