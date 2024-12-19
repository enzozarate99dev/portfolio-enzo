import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <div id='contact' className='w-full h-100vh p-2'>
        <div className='max-w-[80vw] m-auto px-2 py-16 w-full '>
        <h2 className='py-4 text-center md:text-left'>Contacto</h2>

          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='bg-black col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-[green] rounded-xl p-4'>
              <div className='lg:p-4 h-full '>
                
                <div>
                  <h2 className='py-2'>Enzo Zarate</h2>
                  <p>BackEnd Developer</p>
                  <p className='py-4'>
                  Estoy disponible para trabajo freelance o en relación de dependencia. Hablemos!
                  </p>
                </div>
                <div>
                  <div className='flex items-center justify-between py-4'>
                    <a
                      href='https://www.linkedin.com/in/enzo-zárate-9a2380201/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
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
                    <a
                      href='https://wa.link/d0jdan'
                      target='_blank'
                      rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      < FaWhatsapp />
                    </div>
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
  
            {/* right */}
            <div className='bg-black col-span-3 w-full h-auto shadow-md shadow-[green] rounded-xl lg:p-4'>
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
                  <button className='w-full p-4 bg-[#009929] rounded-md text-gray-100 mt-4'>
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
        
        
    )
}
export default Contact