let empleados = [{
    id: 1,
    nombre: 'AlanG'

}, {
    id: 2,
    nombre: 'Diana'
}, {
    id: 3,
    nombre: 'Iker'
}];
let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el Id ${id}`)
        } else {
            resolve(empleadoDB);

        }
    });
}

let getSalarioEmpleado = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No existe un salario para: ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}


getEmpleado(2).then(empleado => {
    return getSalarioEmpleado(empleado);
    /*  getSalarioEmpleado(empleado).then(resp => {
        console.log(`El Salario de ${resp.nombre} es de ${ resp.salario}`);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err); */
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de  ${resp.salario}`);
}).catch(err => {
    console.log(err);

})





/* getEmpleado(4).then(empleado => {
    console.log('Empleado de BD', empleado);
}, (err) => {
    console.log(err);
}); */