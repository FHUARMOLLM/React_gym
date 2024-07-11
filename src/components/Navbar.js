import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Gym Collpani</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item"><a href="#home" className="nav-link">Inicio</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">Acerca de nosotros</a></li>
            <li className="nav-item"><a href="#class" className="nav-link">Clases</a></li>
            <li className="nav-item"><a href="#schedule" className="nav-link">Horarios</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contactos</a></li>
          </ul>
          <ul className="social-icon ml-lg-3">
            <li><a href="https://fb.com/tooplate" className="fa fa-facebook"></a></li>
            <li><a href="#" className="fa fa-twitter"></a></li>
            <li><a href="#" className="fa fa-instagram"></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
