//Type
// Se usan para definir tipos de datos personalizados
// La diferencia principal es que type permite definir tipos primitivos, uniones y tuplas, mientras que las interfaces se usan principalmente para objetos y clases
var programador = {
    nombre: "Yhoan",
    tecnologias: ["TypeScript", "JavaScript", "Python"],
    tomarMate: true,
};
var programador2 = {
    nombre: "Mateo",
    tecnologias: ["Java", "C#"],
};
var programador3 = {
    nombre: "Ana",
    tecnologias: ["Go", "Rust"],
    tomarMate: "con azucar",
};
//CLASES
var Sorteo = /** @class */ (function () {
    function Sorteo(nombre) {
        this.nombre = nombre;
    }
    Sorteo.prototype.setTicket = function (ticket) {
        this.ticket = ticket;
    };
    Sorteo.prototype.getTicket = function () {
        return this.ticket;
    };
    Sorteo.prototype.sortear = function () {
        return "El ganador del sorteo es ".concat(this.nombre, " con el ticket ").concat(this.ticket);
    };
    return Sorteo;
}());
var sorteo1 = new Sorteo("Yhoan Matero");
sorteo1.setTicket("ABC123");
console.log(sorteo1.sortear());
