import React from 'react'
import ventapyme from '../images/proyectos/ventapymee.jpeg'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import HiOutlineChevronDoubleUp from "react-icons/ai"
import { MdArrowBackIos } from "react-icons/md";
const VentaPyme = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={ventapyme}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Venta Pyme</h2>
                    <h3>.NET Core/ Javascript / Bootstrap</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4 px-2 md:px-0'>
                    <h2>Detalle</h2>
                    <p className='py-4'>
                        Este proyecto es un sistema de ventas desarrollado con .NET Core utilizando una arquitectura de N-Capas y
                        el patrón MVC (Modelo-Vista-Controlador), diseñado para gestionar el inventario, procesar pedidos y
                        realizar el seguimiento de las ventas de manera eficiente. El sistema permite a los usuarios
                        gestionar productos, generar facturas, y realizar un control detallado de las transacciones,
                        todo dentro de una interfaz amigable y de fácil acceso. Además, utiliza Firebase Storage para el manejo de imágenes
                        y ASP.NET Core Authentication para la autenticación y gestión de roles, garantizando seguridad y escalabilidad.
                    </p>
                    <h3 className='mt-3'>Características principales</h3>
                    <ul className='list-disc pl-5'>
                        <div className='p-3'>
                            <li>Diseño de arquitectura N-Capas</li>
                            <li>Patrón MVC</li>
                            <li>Integración con Firebase Storage</li>
                            <li>Autenticación y gestión de roles</li>
                            <li>Generación de facturas</li>
                            <li>Control detallado de transacciones</li>
                            <li>Sistema de seguimiento de ventas</li>
                            <li>Gestión de roles y permisos</li>
                            <li>Sistema de búsqueda y filtros</li>
                        </div>
                    </ul>

                    <h3 className='mt-5'>Demo del sistema</h3>
                    <div className='flex w-full mt-3 justify-center'>
                        <div className='relative w-full max-w-[600px] aspect-video'>
                            <iframe
                                className='absolute top-0 left-0 w-full h-full'
                                src="https://www.youtube.com/embed/NwSKDM0S_bI?si=e6Xc5rXB8BMCtYJ0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className='flex w-full justify-center mt-5 gap-4'>
                        <a
                            href="https://github.com/enzozarate99dev/Ecommerce-MVC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-6 py-2 bg-[#009929] text-white rounded-lg hover:bg-[#1cc549] transition duration-300'
                        >
                            Ver Repositorio
                        </a>
                        {/* <a
                            href="https://tu-sitio-web.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-6 py-2 bg-[#ff7b00] text-white rounded-lg hover:bg-[#007acc] transition duration-300'
                        >
                            Ir al Sitio Web
                        </a> */}
                    </div>


                </div>
                <div className='col-span-4 md:col-span-1 sm:mx-[20px] max-h-fit  shadow-xl shadow-[#009929]'>
                    <div className='p-2 '>
                        <p className='text-center text-[#5ccb5f] font-bold pb-2'>Tecnologias</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>

                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> .Net Core
                            </p>
                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Bootstrap
                            </p>

                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> SQL Server
                            </p>
                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> jQuery
                            </p>
                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Firebase
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <button>
                        <MdArrowBackIos size={30} />
                    </button>
                </Link>
            </div>

        </div>
    )
}
export default VentaPyme