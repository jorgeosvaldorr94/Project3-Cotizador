import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const ContenedorH3 = styled.h3`
    text-align: center;
    font-size: 20px;
    padding-bottom: 0;
    margin-bottom: 0;
`;

const Resultado = ({ cotizacion }) => {

    return (
        (cotizacion === 0)
        ?
        (<ContenedorH3>Elige municipio, peso aproximado, horario y fecha</ContenedorH3>)
        :
        (
            <TransitionGroup
                component='h3'
                className="resultado"
            >
                <CSSTransition
                    classNames='resultado'
                    key={cotizacion}
                    timeout={ { enter: 500, exit:500 } }
                >
                    <ContenedorH3>Total a pagar: ${cotizacion}</ContenedorH3>
                </CSSTransition>
            </TransitionGroup>
        )
     );
};

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;
