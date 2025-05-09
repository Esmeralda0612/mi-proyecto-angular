export interface Libro {
  Libros: LibroD[]
}

export interface LibroD {
  id: number
  titulo: string
  autor: string
  imagen: string
  descripcion: string
}
