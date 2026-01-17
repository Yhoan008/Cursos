//Type
// Se usan para definir tipos de datos personalizados
// La diferencia principal es que type permite definir tipos primitivos, uniones y tuplas, mientras que las interfaces se usan principalmente para objetos y clases

type Programador = {
  nombre: string;
  tecnologias: string[];
  tomarMate?: boolean | string; //para una propiedad opcional
};

let programador: Programador = {
  nombre: "Yhoan",
  tecnologias: ["TypeScript", "JavaScript", "Python"],
  tomarMate: true,
};

let programador2: Programador = {
  nombre: "Mateo",
  tecnologias: ["Java", "C#"],
};

//Ademas de type tenemos interface

interface Programador2 {
  nombre: string;
  tecnologias: string[];
  tomarMate?: boolean | string;
}

let programador3: Programador2 = {
  nombre: "Ana",
  tecnologias: ["Go", "Rust"],
  tomarMate: "con azucar",
};

//CLASES
class Sorteo<T> {
  private ticket?: T; //El ticket puede ser de cualquier tipo de dato gracias al uso de genericos, que son como parametros de funciones pero para clases y mas privatizados 
  constructor(private nombre: string) {}

  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  public sortear(): string{
    return `El ganador del sorteo es ${this.nombre} con el ticket ${this.ticket}`;
  }

}


const sorteo1 = new Sorteo<string>("Yhoan Matero");

sorteo1.setTicket("ABC123");

console.log(sorteo1.sortear())



