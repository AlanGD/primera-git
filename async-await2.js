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


let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el Id ${id}`)
    } else {
        return empleadoDB;

    }
}

let getSalarioEmpleado = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No existe un salario para: ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }

}


let getInformacion = async(id) => {

    let empleados = await getEmpleado(id);
    let resp = await getSalarioEmpleado(empleados);

    return `${ resp.nombre} tiene un salario de  ${ resp.salario} $`;

}
getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));