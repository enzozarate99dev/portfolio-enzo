import React, { useEffect, useState } from 'react'
import perfil from '../images/perfil2.png'
import Image from 'next/image';


const Main = () => {
 
    return (
        <div id='main' className='h-screen flex justify-center items-center p-4 max-w-[1240px] mx-auto px-2 py-16'>
      <div className='flex flex-col lg:flex-row items-center max-w-[80vw]'>
        <div className='lg:w-1/2 '>
          <h1 className='py-4 text-white text-center md:text-left' style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.8)' }}>Hola, soy Enzo</h1>
          <h1 className='py-2 text-white text-center md:text-left'style={{ textShadow: '2px 2px 4px rgba(255, 165, 0, 0.8)' }}>FullStack Developer</h1>
          
        </div>
        <div className='lg:w-1/2  flex justify-center'>
          <div className=' overflow-hidden'>
            <Image 
              src={perfil} 
              alt='/'
              style={{borderRadius: '50%',border: '4px solid transparent',
                animation: 'pulse 2s infinite'}}
              className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]'
            />
          </div>
        </div>
      </div>
    </div>
    )
}
export default Main