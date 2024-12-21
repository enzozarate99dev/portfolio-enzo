import React from 'react'
import Image from 'next/image';
import Javascript from '../images/skills/javascript.png';
import ReactImg from '../images/skills/react.png';
import Git from '../images/skills/git.png';
import Github from '../images/skills/github.jpeg';
import ASPNET from '../images/skills/net.png';
import Csharp from '../images/skills/Cs.png';
import Typescript from '../images/skills/typescript.svg';
import Sql from '../images/skills/sql-server.png';
import Postgree from '../images/skills/postgree2-removebg-preview.png'
import Azure from '../images/skills/Azure-Logo.png'
import { FaGithub } from 'react-icons/fa';


const Skills = () => {
    return (
        <div id='skills' className='w-full h-100vh p-2 flex items-center'>
            <div className='max-w-[80vw] mx-auto py-16'>

                <h2 className='py-4 text-center md:text-left'>Mis Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  md:gap-8'>
                    <div className='p-6 shadow-md bg-black shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Csharp} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>C#</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-md bg-black shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={ASPNET} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>ASP.NET Core</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-md bg-black shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Sql} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>SQL Server</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 bg-black shadow-md  shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto '>
                                <Image src={Javascript} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-md bg-black shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Typescript} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>Typescript</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-6  shadow-md bg-black shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={ReactImg} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-md bg-black shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Postgree} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>Postgree SQL</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-md bg-black shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center mt-2'>
                            <div className='m-auto'>
                                <Image src={Azure} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>Azure</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-md bg-black shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Git} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-md bg-black shadow-[#5ccb5f] rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                            <Image src={Github} width='64px' height='64px' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <p>Github</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default Skills
