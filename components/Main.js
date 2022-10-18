import React from 'react'

const Main = () => {
    return(
        <div id='main' className='w-full lg:h-screen text-center'>
            <div className='w-full h-full p-2 mx-auto flex justify-center items-center'>
                <div >
                    <h1 className='py-4 text-gray-700'>Hola, soy <span className='text-[#2823bc]'>Enzo</span></h1>
                    <h1 className='py-2 text-gray-700'>Front-End Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto '>
                        Me especializo en el desarrollo de Aplicaciones Web desde el lado del 
                         cliente. Adicionalmente, me encuentro aprendiendo tecnologías de desarrollo
                         Back-End como Java y Spring
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main