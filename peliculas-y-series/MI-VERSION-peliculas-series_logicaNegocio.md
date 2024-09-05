## Listado de entidades y atributos

### pelicula (Entidad de datos)

- pelicula_id **PK**
- nombre
- sinopsis
- fecha_publicacion
- puntuacion
- duracion
- clasificacion **FK**
- pais_id **FK**

### serie (Entidad de datos)

- serie_id **PK**
- nombre
- sinopsis
- fecha_publicacion
- puntuacion
- episodios
- temporadas
- episodio_id **FK**
- clasificacion **FK**
- pais_id **FK**

### episodio (Entidad datos)

- episodio_id **PK**
- nombre
- sinopsis
- fecha_publicacion
- duracion

### actor/actriz (Entidad Catálogo)

- actor/actriz_id **PK**
- nombre
- edad
- pais **FK**

### actor/actriz_x_pelicula (Entidad pivote)

- axp_id **PK**
- actor/actriz_id **FK**
- pelicula_id **FK**

### actor/actriz_x_serie (Entidad pivote)

- axs_id **PK**
- actor/actriz_id **FK**
- serie_id **FK**

### generos (Entidad catálogo)

- genero_id **PK**
- nombre

### generos_x_pelicula (Entidad pivote)

- gxp_id **PK**
- serie_id **FK**
- genero_id **FK**

### generos_x_pelicula (Entidad pivote)

- gxp_id **PK**
- pelicula_id **FK**
- genero_id **FK**

### clasificaciones (Entidad catálogo)

- clasificacion_id **PK**
- nombre

### paises (Entidad de catálogo)

- pais_id **PK**
- nombre

## Relaciones

1. Una pelicula tiene actores/actrices
1. Una serie tiene actores/actrices
1. Una pelicula tiene generos
1. Una serie tiene generos
1. Una pelicula tiene clasificacion
1. Una serie tiene clasificacion
1. Una pelicula tiene pais
1. Una serie tiene pais
