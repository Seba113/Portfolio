import React from 'react';
import html from '../assets/Img/html.png'
import css from '../assets/Img/css.png'
import bootrstrap from '../assets/Img/bootrstrap.png'
import react from '../assets/Img/react.png'
import js from '../assets/Img/js.png'
import nodejs from '../assets/Img/nodejs.png'
import sql from '../assets/Img/sql.png'
import c from '../assets/Img/c.png'
import git from '../assets/Img/git.png'
import github from '../assets/Img/github.png'
import cv from '../assets/cv _sebastian_fernandez.pdf'
import './MainSection.css';

const MainSection = () => {
    return (
        <section className='mainSection'>
            <div className='container d-flex justify-content-center'>
                <div className='text-center'>
                    <h1>Software Developer</h1>
                    <h2>Sebastián Fernández</h2>
                    <p className='mt-4'>Full Stack Student</p>
                    <p>ORT University → Montevideo, Uy </p>
                </div>
                <div className='redes mt-3'>
                    <nav className='mt-4'>
                        <a href="https://www.linkedin.com/in/sebastianfernandezti/" className='p-3' target='_blank'>LinkedIn →</a>
                        <a href="./src/assets/cv _sebastian_fernandez.pdf" download={cv} className='p-3'>CV ↓</a>
                        <a href="https://github.com/Seba113" className='p-3'target='_blank'>GitHub →</a>
                    </nav>
                </div>
                <div className='stack'>
                    <div>
                        <img src={html} alt="html" />
                    </div>
                    <div>
                        <img src={css} alt="css" />
                    </div>
                    <div>
                        <img src={bootrstrap} alt="bootrstrap" />
                    </div>
                    <div>
                        <img src={js} alt="js" />
                    </div>
                    <div>
                        <img src={react} alt="react" />
                    </div>
                    <div>
                        <img src={nodejs} alt="nodejs" />
                    </div>
                    <div>
                        <img src={c} alt="c#" />
                    </div>
                    <div>
                        <img src={git} alt="git" />
                    </div>
                    <div>
                        <img src={github} alt="github" />
                    </div>
                    <div>
                        <img src={sql} alt="sql" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection