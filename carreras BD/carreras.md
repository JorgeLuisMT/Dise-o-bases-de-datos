# Carreras

## Listado de Entidades

### carreras **(Entidad tipo Datos)**

- carrera_id **(PK)**
- nombre
- tipo_carrera **(FK)**
- fecha
- tiempo
- mejor_tiempo
- altitud
- lugar
- pais **(FK)**
- foto

### tipo_carrera **(Entidad tipo Catálogo)**

- tipo_carrera **(PK)**
- descripcion
- distancia **(UK)**

### paises **(Entidad tipo Catálogo)**

- pais_id **(PK)**
- nombre

### Relaciones

1. Una **carrera** pertenece a un **tipo de carrera** (_1 a M_).
1. Una **carrera** se corre en un **país** (_1 a M_).

## Diagramas

### Modelo Entidad - Relación

![Modelo Entidad - Relación](./modeloEntidadRelacion.drawio.png)

### Modelo Relacional de la BD

![Modelo Relacional de la BD](./carrerasModeloRelacionalBD.drawio.png)

## Reglas de negocio

### carreras

1. Crear una carrera
1. Leer el registro de una(s) carrera(s) dada una condición en particular
1. Leer todos los registro de la entidad carreras
1. Actualizar los datos de una carrera dada condición en particular
1. Eliminar los datos de una carrera dada una condición en particular

### tipo_carrera

1. Todos los valores del atributo distancia deberán estar expresados en _km_ y no se podrán repetir
1. Crear un tipo de carrera
1. Leer el registro de uno(s) tipo(s) de carrera dada una condición en particular
1. Leer todos los registro de la entidad tipos carreras
1. Actualizar los datos de un tipo de carrera dada condición en particular
1. Eliminar los datos de un tipo de carrera dada una condición en particular

### paises

1. Crear un país
1. Leer el registro de uno(s) país(s) dada una condición en particular
1. Leer todos los registro de la entidad de países
1. Actualizar los datos de un país dada condición en particular
1. Eliminar los datos de un país dada una condición en particular
