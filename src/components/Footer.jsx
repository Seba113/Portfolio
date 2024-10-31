import React from 'react';
import ig from '../assets/Img/ig.png';
import linkedin from '../assets/Img/linkedin.png';
import git from '../assets/Img/github2.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer id='contacto' className='footer'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 col-12'>
                <h3>¡Let's get in touch!</h3>
                <p className='pt-4'><strong>Email:</strong> fernandezsolarisebastian@gmail.com</p>
            </div>
            <div className='col-md-6 col-12 redes'>
                <h4 className='text-center'>Redes Sociales</h4>
                <div className='d-flex justify-content-center pt-3'>
                    <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/sebastianfernandezti/">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href="https://github.com/Seba113/">
                        <img src={git} alt="GitHub" />
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/sebafs98/">
                        <img src={ig} alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
    )
}

export default Footer;