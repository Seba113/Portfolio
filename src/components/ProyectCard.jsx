import React from 'react';
 const ProyectCard = ({title, description, link, imageSrc, tech}) => {
    return (
        <div className="row">
    <div className="col-12 col-md-6 mt-4">
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <div>
                <a className="span" href={link} target="_blank" rel="noopener noreferrer">Frontend</a>
                <p className="stackProyects">{tech}</p>
            </div>
        </div>
    </div>
    <div className="container-img col-12 col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
        <a target="_blank" href={link}>
            <img className="img" src={imageSrc} alt={title} />
        </a>
    </div>
</div>
    )
 }

 export default ProyectCard;