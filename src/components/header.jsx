import React from 'react';
import './Header.css'
import miImagen from '../assets/Img/yo.jpg';

const Header = () => {
    return (
        <>
        <header className="container-fluid mb-0 p-0 fixed-top bg-light">
    <div className="header row justify-content-between text-align-center m-0">
        <div className="col-sm-13 col-md-5 d-flex justify-content-center align-items-center">
            <a href="#body" className="d-flex align-items-center m-1">
                <img src={miImagen} alt="Sebastián Fernández" className="img-fluid" />
                <div className='name-content d-flex flex-column m-3'>
                    <p className="mb-0">Sebastián Fernández</p>
                    <small>
                        <p className="mb-0">Software Developer</p>
                    </small>
                </div>
            </a>
        </div>
        <div className="col-md-7 col-sm-6 d-none d-md-flex justify-content-center align-items-center">
            <nav>
                <a href="#" className="p-3">Home</a>
                <a href="#proyectos" className="p-3">Proyectos</a>
                <a href="#about" className="p-3">Sobre mí</a>
                <a href="#contacto" className="p-3">Contacto</a>
            </nav>
        </div>
        
        <div className="col-3 d-flex d-sm-none justify-content-end align-items-center">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
</header>
<div className="collapse navbar-collapse" id="navbarNav">
    <nav className="navbar-nav">
        <a href="#" className="nav-link">Home</a>
        <a href="#proyectos" className="nav-link">Proyectos</a>
        <a href="#about" className="nav-link">Sobre mí</a>
        <a href="#contacto" className="nav-link">Contacto</a>
    </nav>
</div>


</>

    )
}

export default Header;