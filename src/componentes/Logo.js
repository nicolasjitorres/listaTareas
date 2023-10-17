import React from "react";
import imagenLogo from '../imagenes/app-logo.png';

function Logo() {
  return (
    <div className='contenedor-logo'>
      <img
        src= {imagenLogo}
        className='logo'
        alt='Logo de la aplicacion'
      />
    </div>
  );
};

export default Logo;