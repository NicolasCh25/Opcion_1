import React from 'react';
import ecu from '../imagenes2/ecuavoly.jpg';
import fut from '../imagenes2/futbol.avif';
import basquet from '../imagenes2/basquet.jpeg';
import '../estilos/GaleriaDeportes.css';

const GaleriaDeportes = () => {
  return (
    <div className="galeria-deportes">
      <h2>Galería de Deportes Favoritos</h2>
      <div className="galeria">
        <div className="deporte">
          <p>Fútbol</p>
          <img src={fut} className="futbol" alt="Fútbol" />
        </div>
        <div className="deporte">
          <p>Ecuavoley</p>
          <img src={ecu} className="ecua" alt="Ecuavoley" />
        </div>
        <div className="deporte">
          <p>Basket</p>
          <img src={basquet} className="basquet" alt="Basket" />
        </div>
      </div>
    </div>
  );
};

export default GaleriaDeportes;
  