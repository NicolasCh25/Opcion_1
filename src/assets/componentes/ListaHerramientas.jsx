import React from 'react';
import '../estilos/ListaHerramientas.css';

const ListaHerramientas = () => {
  return (
    <div className="lis2">
      <h2>Lista de Herramientas Utilizadas</h2>
      <ul>
        <li>Visual Studio Code (VS Code): Muy popular entre desarrolladores, es ligero y tiene muchas extensiones para diferentes lenguajes de programación (JavaScript, Python, C++, etc.).</li>
        <li>IntelliJ IDEA: Ideal para Java, Kotlin y otros lenguajes JVM. Viene con herramientas de análisis y depuración potentes.</li>
        <li>NetBeans: También utilizado para Java, PHP y HTML5.</li>
      </ul>
    </div>
  );
};

export default ListaHerramientas;
