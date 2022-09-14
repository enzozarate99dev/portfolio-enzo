import { React, useState } from 'react'
import Image from 'next/image'
import NavLogo from '../images/logo-s-fondo.png'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose, AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-20 bg-[#2823bc] shadow-xl z=[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 p-5'>


                <Image src={NavLogo}
                    alt='/'
                    width='150'
                    height='150'
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
                    <div onClick={handleNav} className="md:hidden cursor-pointer">
                        <AiOutlineMenu size={25} className='text-[#ddd] ' />
                    </div>
                </div>
            </div>
            <div className={nav ? 'fixed w-full h-screen left-0 top-0 bg-black/80 ease-in  duration-500'  : ''}>
                <div className={nav
                    ? 'fixed w-[75%] sm:w-[60%] md:w-[45%] h-screen left-0 top-0 p-10 bg-[#2d2c55] ease-in  duration-500'
                    : 'fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500 '
                }>
                    <div className='flex w-full items-center justify-between '>
                        <Image src={NavLogo} width='130' height='130' />
                        <div onClick={handleNav} className='rounded-full shadow-lg  shadow-[#000] p-3 cursor-pointer'>
                            <AiOutlineClose className='text-white ' />
                        </div>
                    </div>

                    <div>
                        <ul className='uppercase py-4'>
                            <Link href={'/'}><li className='text-sm py-4'>Inicio</li></Link>
                            <Link href={'/'}><li className='text-sm py-4'>Sobre mi</li></Link>
                            <Link href={'/'}><li className='text-sm py-4'>Skills</li></Link>
                            <Link href={'/'}><li className='text-sm py-4'>Proyectos</li></Link>
                            <Link href={'/'}><li className='text-sm py-4'>Contacto</li></Link>
                        </ul>
                    </div>
                    <div className="pt-10">
                        <p className='uppercase text-white'>¡Conectemos!</p>
                        <div className='flex items-center justify-between w-full my-4 sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-black hover:scale-105 ease-in duration-300 p-4 cursor-pointer '>
                                < AiFillLinkedin size={25} />
                            </div>
                            <div className='rounded-full shadow-lg shadow-black hover:scale-105 ease-in duration-300 p-4 cursor-pointer '>
                                < AiOutlineGithub size={25} />
                            </div>
                            <div className='rounded-full shadow-lg shadow-black hover:scale-105 ease-in duration-300 p-4 cursor-pointer '>
                                < AiOutlineInstagram size={25} />
                            </div>
                            <div className='rounded-full shadow-lg shadow-black hover:scale-105 ease-in duration-300 p-4 cursor-pointer '>
                                < AiOutlineMail size={25} />
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Navbar