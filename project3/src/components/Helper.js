
//obtener precio del municipio
export function obtenerMunicipio(municipio) {
    let firstPrice;

    //Obtener municipio        
    if(municipio.trim() === 'Arroyo Naranjo' ) {
        //ArroyoNaranjo 1200
        firstPrice = 1200;          
    } else if(municipio.trim() === 'Boyero') {
        //Boyero 750
        firstPrice = 750;
    } else if(municipio.trim() === 'Centro Habana') {
        //CentroHabana 200
        firstPrice = 200;
    } else if(municipio.trim() === 'Cerro') {
        //Cerro 150
        firstPrice = 150;
    } else if(municipio.trim() === 'Cotorro') {
        //Cotorro 1400
        firstPrice = 1400;
    } else if(municipio.trim() === 'Diez de Octubre') {
        //DiezOctubre 400
        firstPrice = 400;
    } else if(municipio.trim() === 'Guanabacoa') {
        //Guanabacoa 1600
        firstPrice = 1600;
    } else if(municipio.trim() === 'Habana del Este') {
        //HabanaEste 1800
        firstPrice = 1800;
    } else if(municipio.trim() === 'Habana Vieja') {
        //HabanaVieja 350
        firstPrice = 350;
    } else if(municipio.trim() === 'La Lisa') {
        //Lisa 900
        firstPrice = 900;
    } else if(municipio.trim() === 'Marianao') {
        //Marianao 700
        firstPrice = 700;
    } else if(municipio.trim() === 'Playa') {
        //Playa 800
        firstPrice = 800;
    } else if(municipio.trim() === 'Plaza') {
        //Plaza 300
        firstPrice = 300;
    } else if(municipio.trim() === 'Regla') {
        //Regla 1300
        firstPrice = 1300;
    } else {
        //SanMiguel 1000
        firstPrice = 1000;
    };

    return parseFloat(firstPrice);
};

//Obtener precio por peso
export function obtenerPeso(peso, firstPrice) {
    switch(peso) {
        case 'Hasta 100kg':
            firstPrice += 100;
            break;
        case 'De 100kg a 250kg':
            firstPrice += 150;
            break;
        case 'De 250kg a 450kg':
            firstPrice += 200;
            break;
        case 'Más de 450Kg':
            firstPrice += 250;
            break;
        default:
            break;
    };

    return parseFloat(firstPrice);
};

//Obtener precio por horario
export function obtenerHorario(horario, thirdPrice) {

    if(horario === 'Extra') {
        //extra 300
        thirdPrice += 300;
        //console.log(firstPrice); 
    }

    return parseFloat(thirdPrice);
};

//Poner un texto con la primera letra en mayuscula
export function primerMayuscula (texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
};