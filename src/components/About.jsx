import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id='about' className='about'>
            <div className='container text-center'>
                <p className='span m-0'>Sobre mi</p>
                <div className='aboutme'>
                    <h3 className='mb-4'>Sebastián Fernández</h3>
                    
                        <p>¡Hola! Soy estudiante de desarrollo de software de la Universisad ORT en Montevideo, Uruguay.
                        Mas especificamente de la carrera Analista en Tecnologias de la Información.
                        </p>
                        <p>Actualmente desarrollando con React + Vite, JavaScript, y CSS + Bootstrap. </p><p>Puliendo y adquiriendo conocimientos de backend con Node.js + Express.js, para convertirme en desarrollador Full-Stack.</p>
                        <p>Considero mi mayor fortaleza el tener una sólida base en desarrollo y programación, ya que me facilita mucho al aprender algún lenguaje nuevo o a desenvolverme en nuevos entornos o tecnologías.</p>
                        <p>Tambien tengo conocimentos desarrollando con C# y .NET programando con orientacion a objetos y MVC.</p>
                        <strong><p>¡Estoy abierto a nuevos desafíos! No dudes en contactarme.</p></strong>
                </div>
            </div>
        </section>
    )
}

export default About;