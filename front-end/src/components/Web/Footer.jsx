import { Facebook, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        
        <div className='absolute bottom-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center border-t-4 border-purple-900 shadow-sm'>
            <div className='h-full w-2/4 font-bold flex justify-center items-center text-purple-900'>
                © vishwa@2024
            </div>
            <div className='h-full w-2/4 font-bold flex justify-center items-center text-purple-900 gap-10'>

                <a href='facebook' target='_blank'>
                    <Facebook className='h-6 w-6' />
                </a>
                <a href='twitter' target='_blank'>
                    <Twitter className='h-6 w-6' />
                </a>
            </div>
        </div>
    )
}

export default Footer