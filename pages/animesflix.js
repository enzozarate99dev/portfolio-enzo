import React from 'react'
import animesflixImg from '../images/proyectos/animesflix.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import HiOutlineChevronDoubleUp from "react-icons/ai"
const AnimesFlix = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={animesflixImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>AnimesFlix App</h2>
                    <h3>Next JS / Material UI / Firebase</h3>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Proyecto</p>
                    <h2>Vista General</h2>
                    <p>
                        Esta app se desarrolló usando Next JS y se encuentra hosteada en Vercel.
                        Cuenta con autenticacion de usuario en firebase.
                         La app consume datos de una API de 
                        series llamada JIKAN API y muestra un catálogo de animes.
                        Con el uso del hook useRouter se crearon las rutas para la pagina de cada 
                        serie, con su respectiva descripcion, imagen, valoración y trailer
                    </p>
                    <a
                        href='https://github.com/enzozarate99dev/animeapp'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Repo</button>
                    </a>
                    <a
                        href='https://animesflix-enzo-zaratedev.vercel.app'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Tecnologias</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Next JS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Material UI
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Firebase
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Jikan API
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <button>
                        back
                    </button>
                </Link>
            </div>

        </div>
    )
}
export default AnimesFlix