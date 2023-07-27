import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import animesflixImg from '../images/proyectos/animesflix.png'
import sistemaImg from '../images/proyectos/sistema.jpeg'


export default function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    mis proyectos
                </p>
                <h2 className='py-4'>Algo de lo que he construido</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='AnimesFlix'
                        backgroundImg={animesflixImg}
                        projectUrl='/animesflix'
                        tech='Next JS'
                    />
                     <ProjectItem
                        title='Sistema de Facturacion'
                        backgroundImg={sistemaImg}
                        projectUrl='/sistema'
                        tech='React JS'
                    />
                </div>
            </div>
        </div>
    )
}