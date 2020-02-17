/* setTimeout(() => {
    console.log('Hola Mundo');
}, 10000); */

/* let getUserById = (id, callback) => {
    let usuario = {
        nombre: 'AlanG',
        id
    }

    if (id === 20) {
        callback(`El usuario con Id ${id}, no existe en ela BD`);

    } else {
        callback(null, usuario);
    }

}
getUserById(2, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario  de BD', usuario);

}); */

/* setTimeout(() => {
    console.log('hola mundo');
}, 3000); */

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Alan',
        id
    }

    if (id === 20)

        callback(`El ususario con el id ${id}, no existe en la BD`);
    else {

        callback(usuario);
    }


}

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);

}); 