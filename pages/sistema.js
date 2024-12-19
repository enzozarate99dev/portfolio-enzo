import React from 'react'
import sistemaImg from '../images/proyectos/sistema.jpeg'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import HiOutlineChevronDoubleUp from "react-icons/ai"
import { MdArrowBackIos } from "react-icons/md";
const Sistema = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={sistemaImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Sistema de Facturacion</h2>
                    <h3>React / Bootstrap / ASP.NET Core / Entity Framework</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <h2>Detalle</h2>
                    <p className='py-4'>
                        Esta es una app completa que se desarrolló usando React en el frontend con las librerías Ant Design y Bootstrap.
                        Para el backend se utilizó un Web Api de .NET Core y SQL Server como base de datos.
                        Consiste en un sistema de gestion para una tienda pequeña o mediana. Cuenta con una pantalla de inicio, una de login,
                        una para cargar la venta en la cual pueden elegirse multiples productos, aplicar descuentos, seleccionar una o 
                        varias formas de pago. Tambien cuenta con una pantallla de clientes donde puede consultarse el historial de ventas,
                        una pantalla de productos donde se puede consultar por stock, hacer pedidos de productos y editarlos.

                        Debido a que se trata de un software privado no es posible mostrar el repositorio.
                    </p>
                    
                </div>
                <div className='col-span-4 md:col-span-1 sm:mx-[20px] sm:!mx-[20px]  shadow-xl shadow-[#009929]'>
                    <div className='p-2'>
                        <p className='text-center text-[#5ccb5f] font-bold pb-2'>Tecnologias</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />  React
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> TypeScript
                            </p>
                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> ASP.Net Core
                            </p>
                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Entity Framework
                            </p>
                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Swagger
                            </p>
                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> SQL Server
                            </p>
                            <p className=' py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Filezilla
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <button>
                        <MdArrowBackIos size={30}/>
                    </button>
                </Link>
            </div>

        </div>
    )
}
export default Sistema