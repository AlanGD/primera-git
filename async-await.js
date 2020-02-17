/*   */

/* let getNombre = async () => {
    return 'AlanG';
};
console.log(getNombre()); */

/* let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('AlanG');
        }, 3000);
    });
}
getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(e => {
        console.log('Error de ASYNC', e);
    })
     */
/* let getNombre = async() => {
    return 'AlanG';
}; */


let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('AlanG');

        }, 3000);


    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
})