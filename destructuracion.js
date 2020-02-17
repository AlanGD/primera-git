/* let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: ' Regenerarse',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }
}; */

//console.log(deadpool.getNombre());

/* let { nombre:NombreSuperH, apellido:ApellidoSuperH, poder:SuperPoder } = deadpool;
console.log(NombreSuperH, ApellidoSuperH, SuperPoder); */

let reno = {
    nombre: 'Alan',
    apellido: 'García',
    titulo: 'Ing. Sistemas',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } -titulo: ${ this.titulo }`
    }

};
console.log(reno.getNombre());

let { nombre: nombreR, apellido, titulo } = reno;

console.log(nombreR, apellido, titulo);