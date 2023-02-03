import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #FFffde;
    background-image: url(${process.env.PUBLIC_URL + '/vgdca.jpg'}) ;
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 50px 50px;
    padding: 3rem;
`;


function App() {
  const [resumen, guardarResumen] = useState({
      cotizacion: 0,
      datos: {
          municipio: '',
          peso: '',
          horario: '',
          fecha: ''
      }
  });

  const [ cargando, guardarCargando ] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header
          titulo='Cotizador de Domicilios'
      />

      <ContenedorFormulario>
          <Formulario
              guardarResumen = {guardarResumen}
              guardarCargando = {guardarCargando}
          />
          
          {(cargando) ? <Spinner/> : null}
          
          {(!cargando)
          ?
          <Resumen
              datos = {datos}                
          />
          :
          null
          }

          {(cargando)
          ?
          null
          :
          <Resultado
              cotizacion= {cotizacion}
          />
          }

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
