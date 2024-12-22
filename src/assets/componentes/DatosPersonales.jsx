import React from 'react';
import yo from '../imagenes2/yo.png'; // Importa correctamente la imagen
import './../estilos/DatosPersonales.css';

const DatosPersonales = () => {
  return (
    <div className="datos-personales">
      <h1>Datos Personales</h1>
      <img src={yo} className="yo" alt="Yo" />
      <p><strong>Nombre:</strong> Nicolás Chiguano</p>
      <p><strong>Dirección:</strong> Quito-La Tola</p>
      <p><strong>Teléfono:</strong> +593 984427131</p>
      <p><strong>Correo Electrónico:</strong> nicolas.chiguano@epn.edu.ec</p>
    </div>
  );
};

export default DatosPersonales;
