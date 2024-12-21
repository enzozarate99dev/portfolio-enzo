import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-[#009929] rounded-xl group hover:bg-gradient-to-r from-[#000] to-[#009929]'>
      <Image
        className='rounded-xl group-hover:opacity-10 object-cover h-full w-full'
        src={backgroundImg}
        alt='/'
      />
      <div className='hidden p-4 group-hover:flex flex-col items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='sm:text-1.5xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-sm sm:text-base text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
          <button className='w-[200px] py-3 rounded-lg bg-white text-gray-700 font-bold text-sm sm:text-lg cursor-pointer text-center'>
            Más Información
          </button>
        </Link>
      </div>
    </div>
  );
};


export default ProjectItem