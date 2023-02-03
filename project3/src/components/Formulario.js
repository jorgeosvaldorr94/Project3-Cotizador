import React, {useState} from 'react';
import styled from '@emotion/styled';
import { obtenerHorario, obtenerMunicipio, obtenerPeso } from './Helper';
import PropTypes from 'prop-types';

const Error = styled.div`
    background-color: red;
    color: white;
    font-size: 18px;
    padding: 1px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    //height: 40px;
`;

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;

    &:hover {
        cursor: pointer;
    }
`;

const InputRadio = styled.input`
    margin: 0 1rem;
    margin-left: 2rem;

    &:hover {
        cursor: pointer;
    }
`;
const InputDate = styled.input`
    margin: 0 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
    margin-left: 3rem;
    font-size: 16px;

    &:hover {
        cursor: pointer;
    }
`;

const Boton = styled.button`
    background-color: #4364e9;
    //font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    //font-weight: bold;
    border: none;
    transition: background-color .3s esae;
    margin-top: 2rem;

    &:hover {
        background-color: #43aaf9;
        //font-size: 18px;
        cursor: pointer; 
    }
`;

const Paragraph1 = styled.p`
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: bold;
`;

const Paragraph2 = styled.p`
    padding: 0;
    margin: 0;
    font-size: 10px;
    //font-weight: bold;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {
    
    const [datos, guardarDatos] = useState ({
        municipio:'',
        peso:'',
        horario:'Laboral',
        fecha: ''
    });

    //State de Error
    const [ error, guardarError] = useState(false);
    
    // extraer los valores del state 
    const {municipio, peso, horario, fecha} = datos;
    
    //leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        });  
    };
    
    //cuando el usuario preciona submit
    const cotizarDomicilio = e => {
        e.preventDefault();

        if (municipio.trim() === '' || peso.trim() === '' || horario.trim() === '' || fecha.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        //Manera mas facil es ponerle directamente el valor al municipio

        //Obtener precio por municipio
        const firstPrice = parseFloat(obtenerMunicipio(municipio));

        //Obtener precio por peso
        const secondPrice = parseFloat(obtenerPeso(peso, firstPrice));

        //Obtener precio por Horario
        const thirdPrice = parseFloat(obtenerHorario(horario, secondPrice));
        const resultado = parseFloat(thirdPrice).toFixed(2);

        //Mostrar el Spinner
        guardarCargando(true);

        //Esperar un tiempo para quitar el spinner y mandar la informacion
        setTimeout(() => {
            guardarCargando(false);

            //Mandar el resultado final para App
            guardarResumen({
                cotizacion: resultado,
                datos
            });

        },2300 )


    };

    return ( 
        <form
            onSubmit={cotizarDomicilio}
        >
            {error
            ? (<Error>
                <p>Existen campos vacíos</p>
            </Error>)
            : null
            }

            <Campo>
                <Label>Municipio:</Label>
                <Select
                    name='municipio'
                    value={municipio}
                    onChange={obtenerInformacion}
                >                
                    <option value=''>-- Seleccione Municipio (Destino)--</option>
                    <option value='Arroyo Naranjo'>Arroyo Naranjo</option>
                    <option value='Boyero'>Boyero</option>
                    <option value='Centro Habana'>Centro Habana</option>
                    <option value='Cerro'>Cerro</option>
                    <option value='Cotorro'>Cotorro</option>
                    <option value='Diez de Octubre'>Diez de Octubre</option>
                    <option value='Guanabacoa'>Guanabacoa</option>
                    <option value='Habana del Este'>Habana del Este</option>
                    <option value='Habana Vieja'>Habana Vieja</option>
                    <option value='La Lisa'>La Lisa</option>
                    <option value='Marianao'>Marianao</option>
                    <option value='Playa'>Playa</option>
                    <option value='Plaza'>Plaza</option>
                    <option value='Regla'>Regla</option>
                    <option value='San Miguel'>San Miguel</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Peso:</Label>
                <Select
                    name='peso'
                    value={peso}
                    onChange={obtenerInformacion}
                >
                    <option value=''>-- Peso (Incluye peso del cliente) --</option>
                    <option value='Hasta 100kg'>Hasta 100kg</option>
                    <option value='De 100kg a 250kg'>De 100kg a 250kg</option>
                    <option value='De 250kg a 450kg'>De 250kg a 450kg</option>
                    <option value='Más de 450Kg'>Más de 450Kg</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Horario:</Label>
                <InputRadio
                    type='radio'
                    name='horario'
                    value='Laboral'
                    checked={horario === 'Laboral'}
                    onChange={obtenerInformacion}
                /> Laboral
                <InputRadio
                    type='radio'
                    name='horario'
                    value='Extra'
                    checked={horario === 'Extra'}
                    onChange={obtenerInformacion}
                /> Extra

                <InputDate
                   type='Date'
                   name='fecha'
                   value={fecha}
                   onChange={obtenerInformacion}
                />
            </Campo>

            <Boton
               type='submit'
            >
                    <Paragraph1>Cotizar</Paragraph1>
                    <Paragraph2>(Punto de partida Ayestarán y Boyeros)</Paragraph2>                
                </Boton>
        </form>
     );
};

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired

}
 
export default Formulario;
