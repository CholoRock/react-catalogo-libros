import { useState } from "react";
import { Link } from "react-router-dom";
const ListaLibros = ({libros}) => {
    const [categoria, setCategoria] =useState("");
    const librosFiltrados = libros.filter(libro => libro.categoria === categoria  !categoria);
    return (
    <>
        <h1>Mini Catálogo de Libros</h1>
        <label>Categoria: 
<select onChange={(e) => setCategoria(e.target.value)}></select>
    <option key="0" value="">Todos</option>
    <option key="1" value="Clasico">Clasico</option>
    <option key="2" value="distopia">distopia</option>
<select>           
        <div className="book-grid">
            {
                libros.map((libro)=>(
                    <div key={libro.id} className="book-card">
                        <div className="book-title" >{libro.titulo}</div>
                        <div>{libro.autor}</div>
                        <div>{libro.descripcion}</div>
                        <div>{libro.categoria}</div>
                        <Link to={`/libro/${libro.id}`}>Ver más</Link>
                    </div>
                ))
            }
        </div>
     </>
    )
}

export default ListaLibros;