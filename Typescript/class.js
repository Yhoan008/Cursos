class biblioteca {
  constructor(libros) {
    this.libros = libros || [];
  }

  agregarLibro(libro) {
    this.libros.push(libro);
  }

  eliminarLibro(titulo) {
    this.libros = this.libros.filter(libro => libro.titulo !== titulo);
  }

  mostrarLibros() {
    return this.libros;
  }

}

class libro extends biblioteca {
  constructor(titulo, autor, anioPublicacion, genero) {
    super();
    this.titulo = titulo;
    this.autor = autor;
    this.anioPublicacion = anioPublicacion;
    this.genero = genero;
  }
}

const libro1 = new libro(
  "Cien Años de Soledad",
  "Gabriel García Márquez",
  1967,
  "Realismo Mágico",
);
const libro2 = new libro("1984", "George Orwell", 1949, "Distopía");
const libro3 = new libro(
  "El Gran Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "Novela",
);

libro1.agregarLibro(libro1);
libro1.agregarLibro(libro2);
libro1.agregarLibro(libro3);

console.log("Libros en la biblioteca:");
console.log(libro1.mostrarLibros());
