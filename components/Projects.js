import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import sistemaImg from '../images/proyectos/sistema.jpeg'


export default function Projects() {
    return (
        <div id='projects' className='w-full  h-100vh p-2 flex items-center'>
            <div className='max-w-[80vw] mx-auto px-2 py-16'>
                
                <h2 className='py-4 text-center md:text-left'>Experiencia y proyectos personales</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                   
                
                     <ProjectItem
                        title='Sistema de Facturacion'
                        backgroundImg={sistemaImg}
                        projectUrl='/sistema'
                        tech='React - .NET Core'
                    />
                </div>
            </div>
        </div>
    )
}