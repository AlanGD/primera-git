/* let empleados = [{
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

let getEmpleado = (id, callback) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            callback(`No existe un empleado con el Id ${id}`)
        } else {
            callback(null, empleadoDB);

        }

    } */
/*
getEmpleado(4, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
}); */

/* 
let getSalarioEmpleado = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No existe us salario con ese Id ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}
getEmpleado(8, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalarioEmpleado(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };
        console.log(`El salario de  ${resp.nombre} es de ${resp.salario}$`);
    })
}) */

let empleados = [{
    id: 1,
    name: 'AlanG'
}, {
    id: 2,
    name: 'Diana'
}, {
    id: 3,
    name: 'Brandón'
}];

let salario = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

let getEmpleadoById = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe el empleado con el Id ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}
getEmpleadoById(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});