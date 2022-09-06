import React from 'react'
import Image from 'next/image'
import NavLogo from '../images/logo-s-fondo.png'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='fixed w-full h-20 bg-[#0c059ae4] shadow-xl z=[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>


                <Image src={NavLogo}
                    alt='/'
                    width='120'
                    height='120'
                    className='cursor-pointer' />

                <div>
                    <ul className='hidden md:flex'>
                        <Link href={'/'} >
                            <li className='ml-10 text-sm uppercase hover:border-b'>Inicio</li>
                        </Link>
                        <Link href={'/'} >
                            <li className='ml-10 text-sm uppercase hover:border-b'>Sobre mi</li>
                        </Link>
                        <Link href={'/'} >
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href={'/'} >
                            <li className='ml-10 text-sm uppercase hover:border-b'>Proyectos</li>
                        </Link>
                        <Link href={'/'} >
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contacto</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar