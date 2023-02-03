import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: aquamarine;
    color: #000;
    margin-top: 1rem;
`;
const ContenedorH2 = styled.h2`
    font-size: 30px;
    text-align: center;
    color: #000;
    margin: 0;
`;

const ContenedorLi = styled.li`
    font-size: 18px;
    text-align: left;
    color: #000;
    margin: 0;
`;

const Resumen = ({datos}) => {

    //extraer datos
    const {municipio, peso, horario, fecha} = datos;

    //validar datos
    if (municipio ==='' || peso === '' || horario === '' || fecha === '') {
        return null;
    };

    return ( 
        <ContenedorResumen>
            <ContenedorH2>Resumen de Cotización</ContenedorH2>
            <ul>
                <ContenedorLi>Municipio: {municipio} </ContenedorLi>
                <ContenedorLi>Peso: {peso} </ContenedorLi>
                <ContenedorLi>Horario: {horario} </ContenedorLi>
                <ContenedorLi>Fecha: {fecha} </ContenedorLi>
            </ul>
        </ContenedorResumen>
     );
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;
