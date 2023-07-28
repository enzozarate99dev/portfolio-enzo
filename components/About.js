import Image from 'next/image';
import Link from 'next/link';
const About = () => {
    return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
              About
            </p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
            Me especializo en construir aplicaciones web completas con diseño adaptable
             (responsive). Me apasiona aprender
              nuevas tecnologías y entiendo que hay más de una forma de lograr una tarea. Aunque soy más
               competente en construir aplicaciones web de frontend usando HTML, CSS, TypeScript y React, y poseo
               un buen manejo de tecnologías backend como ASP.NET Core, Entity Framework y SQL Server,
                soy un aprendiz rápido y puedo adaptarme a nuevos stacks según
                 sea necesario. Creo que ser un gran desarrollador no es usar un lenguaje específico,
                  sino elegir la mejor herramienta para el trabajo.
            </p>
            <p className='py-2 text-gray-600'>
              Mi camino como desarrollador comenzó en 2021 de manera autodidacta, aprendiendo
              los fundamentos de programacion y posteriormente desarrollo frontend con React y Next Js, gracias a Folcademy.
              Esto me sirvió para conseguir mi primera experiencia en Software Makers San Juan, donde trabajé
              durante 7 meses.
              Allí adquirí los conocimientos en typescript y .NET necesarios para desarrollar un sistema de 
              gestion de ventas, que se encuentra detallado en la seccion de <a href='#projects'>Proyectos</a>.  
              Actualmente me sigo perfeccionando en estas tecnologías desarrollando proyectos personales, y aprendiendo desarrollo mobile 
              en React Native
            </p>
           
          </div>
         
        </div>
      </div>
    );
  };
  
  export default About;