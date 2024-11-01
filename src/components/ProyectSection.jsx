import React from 'react';
import ProyectCard from './ProyectCard';
import rick from '../assets/Img/rick.png'
import newage from '../assets/Img/newage.png'
import app from '../assets/Img/ionicapp.png'
import './ProyectSection.css';

const ProyectSection = () => {

    const projects = [
        {
            title: 'Web App responsive para empresa de Landscaping',
            description: 'Web app para cliente con empresa dedicada al Landscaping detallando sus servicios, contacto, y descripcion de la empresa.',
            link: 'https://newagelandscaping.azurewebsites.net/',
            imageSrc: newage,
            tech: 'HTML, CSS, BOOTSTRAP, JAVASCRIPT, AZZURE'
        },
        {
            title: 'Consumiendo Api con React',
            description: 'Este fue mi primer proyecto con React consumiendo la API de Rick y Morty para crear una wiki de personajes y mostrar su información.',
            link: 'https://seba113.github.io/1er-proyecto-api-con-React/',
            imageSrc: rick,
            tech: 'REACT, JSX (JavaScript Syntax eXtension), CSS, BOOTSTRAP'
        },
        {
            title: 'App Mobile Android con Ionic',
            description: 'App implementada para Android pensada para padres recientes, en la cual podran crear eventos del dia a dia relacionados con su bebe para llevar un mejor control, como horarios en los que comió, durmió, cuantos pañales o biberones llevan en el día y mas.Esta desarrollada con IONIC y JavaScript y pueden ver el codigo fuente en mi github. Si quieren la apk no duden en contactarme.',
            link: 'https://github.com/Seba113/AppMovilAndroid-CreadorDeEventos',
            imageSrc: app,
            tech: 'HTML, IONIC, JAVASCRIPT, CSS, ANDROID STUDIO'
        },
    ]

    return (
        <section id='proyectos' className='proyectSection'>
            <div className='container'>
                <div className='text-center'>
                    <small><p className='span mb-1'>Proyectos</p></small>
                    <h3 className='mb-4'>Mis proyectos destacados</h3>
                </div>
                <div className= 'row'>

                    {projects.map((project, index) => (
                        <ProyectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            imageSrc={project.imageSrc}
                            tech={project.tech}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProyectSection;