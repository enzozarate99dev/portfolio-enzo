import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import animesflixImg from '../images/proyectos/animesflix.png'

export default function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Proyectos
                </p>
                <h2 className='py-4'>Lo que he construido</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='AnimesFlix'
                        backgroundImg={animesflixImg}
                        projectUrl='/animesflix'
                        tech='Next JS'
                    />
                </div>
            </div>
        </div>
    )
}