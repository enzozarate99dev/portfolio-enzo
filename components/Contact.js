import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
//import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Contacto
          </p>
          
          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full '>
                <div>
                 
                </div>
                <div>
                  <h2 className='py-2'>Enzo Zarate</h2>
                  <p>Front-End Developer</p>
                  <p className='py-4'>
                  Estoy disponible para trabajo freelance o en relación de dependencia. Contáctame y hablemos
                  </p>
                </div>
                <div>
                  <p className='uppercase pt-8'>Contactemos</p>
                  <div className='flex items-center justify-between py-4'>
                    <a
                      href='https://www.linkedin.com/in/enzo-zárate-9a2380201/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href='https://github.com/enzozarate99dev'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </a>
  
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      < AiOutlineInstagram />
                    </div>
                    <Link href='/resume'>
                      <a>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                          <AiOutlineMail />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
  
            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
              <div className='p-4'>
                <form
                  action='https://getform.io/f/e9879ce8-39c9-46c4-9ac0-5a651de4bd2b'
                  method='POST'
                  encType='multipart/form-data'
                >
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Nombre</label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='name'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>
                        Numero de teléfono
                      </label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='phone'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Asunto</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='subject'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Mensaje</label>
                    <textarea
                      className='border-2 rounded-lg p-3 border-gray-300'
                      rows='10'
                      name='message'
                    ></textarea>
                  </div>
                  <button className='w-full p-4 bg-[#2823bc] text-gray-100 mt-4'>
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-12'>
            <Link href='/'>
              <a>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <HiOutlineChevronDoubleUp
                    className='text-[#5651e5]'
                    size={30}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
        
        
    )
}
export default Contact