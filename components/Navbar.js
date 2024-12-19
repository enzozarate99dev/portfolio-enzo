import { React, useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from '../utils/Logo';
const Navbar = () => {

    const [nav, setNav] = useState(false)                                       
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-20 bg-[#000] shadow-xl z-50'>
            <div className='flex justify-between items-center w-full h-full px-8 2xl:px-16 p-5 '>
                <div className='cursor-pointer'>
                    <Logo />
                </div>
                <div>
                    <div className='hidden md:flex'>
                        <Link href={'/#main'}>
                            <button className='ml-10 text-sm uppercase border-2 rounded-lg border-[#009929] py-2 px-4 text-white bg-transparent hover:bg-[#009929]'>
                                Inicio
                            </button>
                        </Link>
                        <Link href={'/#projects'}>
                            <button className='ml-10 text-sm uppercase border-2 rounded border-[#009929] py-2 px-4 text-white bg-transparent hover:bg-[#009929]'>
                                Proyectos
                            </button>
                        </Link>
                        <Link href={'/#skills'}>
                            <button className='ml-10 text-sm uppercase border-2 rounded border-[#009929] py-2 px-4 text-white bg-transparent hover:bg-[#009929]'>
                                Skills
                            </button>
                        </Link>
                        <Link href={'/#contact'}>
                            <button className='ml-10 text-sm uppercase border-2 rounded border-[#009929] py-2 px-4 text-white bg-transparent hover:bg-[#009929]'>
                                Contacto
                            </button>
                        </Link>
                    </div>
                    <div onClick={handleNav} className="md:hidden cursor-pointer">
                        <AiOutlineMenu size={25} className='text-[#ddd]' />
                    </div>
                </div>
            </div>
            <div className={nav ? 'fixed w-full h-screen left-0 top-0 bg-black/80 ease-in  duration-500' : ''}>
                <div className={nav
                    ? 'fixed w-[75%] sm:w-[60%] md:w-[45%] h-screen left-0 top-0 p-10 bg-[#000] ease-in  duration-500'
                    : 'fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500'
                }>
                    <div className='flex w-full items-center justify-between'>
                        <div></div>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-[#009929] p-3 cursor-pointer'>
                            <AiOutlineClose className='text-white' />
                        </div>
                    </div>

                    <div>
                        <ul className='uppercase py-4'>
                            <Link onClick={handleNav} href={'/#main'}><li className='text-sm py-4 px-2 hover:bg-[#009929]'>Inicio</li></Link>
                            <Link onClick={handleNav} href={'/#projects'}><li className='text-sm py-4 px-2 hover:bg-[#009929]'>Proyectos</li></Link>
                            <Link onClick={handleNav} href={'/#skills'}><li className='text-sm py-4 px-2 hover:bg-[#009929]'>Skills</li></Link>
                            <Link onClick={handleNav} href={'/#contact'}><li className='text-sm py-4 px-2 hover:bg-[#009929]'>Contacto</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar