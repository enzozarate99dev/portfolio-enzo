import React from 'react'

const Main = () => {
    return(
        <div id='main' className='w-full lg:h-screen text-center'>
            <div className='w-full h-full p-2 mx-auto flex justify-center items-center'>
                <div >
                    <h1 className='py-4 text-gray-700'>Hola, soy <span className='text-[#2823bc]'>Enzo</span></h1>
                    <h1 className='py-2 text-gray-700'>FullStack Web Developer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto '>
                    ¿Buscas un desarrollador web fullstack que pueda crear sitios web dinámicos, interactivos
                     y funcionales? Entonces estás en el lugar correcto. Mi nombre es Enzo Zarate.
                        Si te interesa 
                        trabajar conmigo, no dudes en contactarme. Estaré encantado de escuchar tus ideas
                         y convertirlas en realidad.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main