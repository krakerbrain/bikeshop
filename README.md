|||<p>Talento Digital</p><p>CASO</p>|
| :- | :-: | -: |

**ANEXO EXAMEN DE CERTIFICACIÓN**

|Plan de Estudio|Desarrollo Aplicaciones Fullstack JavaScript Trainee|
| :- | :- |
|Anexo|Caso BikeShop Catalog & Inventory|
# Caso “BikeShop Catalog & Inventory”

“BikeShop” es una empresa dedicada a la comercialización bicicletas, accesorios y repuestos. Es una tienda de nicho que busca satisfacer las necesidades de un exclusivo segmento de deportistas y entusiastas de alto rendimiento, para lo cual ofrece una gran variedad de productos con un excelente nivel de calidad.

La empresa se creó a inicio de los noventas como un emprendimiento de un grupo de amigos entusiastas de los deportes ciclísticos. La empresa ha tenido un crecimiento paulatino y hoy en día cuenta con 3 locales en Estados Unidos y una platafoma web que recibe pedidos de los clientes pero que no ha tenido mayores cambios durante los últimos años.

Dado que hoy en día las personas están optando por medios de transporte ecológicos, la empresa apuesta por un aumento de las ventas para los próximos 5 años razón por la cual se ha propuesto renovar sus sistemas de inventario, órdenes y catálogo web.

Para esto, el CTO (Chief Tecnological Officer) ha formado un equipo de proyectos de primera línea del cual usted forma parte como desarrollador full-stack JavaScript. El equipo de proyectos también lo conforma un Jefe de Proyectos, un Diseñador UX/UI, un Diseñador Web, un Analista Funcional, un Desarrollador Mobile, y un Arquitecto de Software.

El proyecto busca, dentro de otras cosas, ordenar el sistema de inventario y catálogo de productos que utilizan los funcionarios para la gestión de los pedidos y ventas. A continuación, se listan los requisitos funcionales de alto nivel del sistema:

- El sistema debe permitir navegar la estructura del catálogo de productos
- El sistema debe permitir visualizar el inventario de productos por tienda 
- El sistema debe permitir el cálculo de descuentos y promociones al momento de ingresar una orden

A la fecha, ha transcurrido gran parte del proyecto y se tiene el siguiente avance:

- Ya se cuenta con un prototipo funcional del aplicativo
- Existe un modelo de datos diseñado
- Existe una base de datos con datos de prueba
- Existe una aplicación web desarrollada con JavaScript  que desarrolla algunas de las funcionalidades requeridas


## Requerimientos a Desarrollar
El jefe de proyectos, quien lleva un control meticuloso de las actividades del proyecto, le ha solicitado a Usted que realice las siguientes tareas:

1. Realizar consultas a la base de datos
1. Construir un algoritmo de cálculo consulta cliente y calculo descuento
1. Crear un Monitor de Inventario
1. Crear una API REST que disponibilice la información del Monitor de Inventario

A continuación, se especifica con mayor detalle cada uno de los requerimientos:

1. ### Realizar consultas a la base de datos

El Chief Sales Manager ha solicitado algunos reportes de información, razón por la cual el jefe del proyecto le ha encargado a usted que realice algunas consultas en la base de datos, para la extracción de cierta información necesaria para el negocio, por mientras se termina el desarrollo de la aplicación. **Para esto, cree un paquete en su proyecto JavaScript con nombre “consultas”, cree un archivo por cada una de ellas, identificando claramente de qué consulta se trata** (ejm: Consulta-A.sql, Consulta-B.sql, …etc).

1) Se requiere un listado de productos con sus precios, de aquellos productos cuyo modelo es 2016, ordenado alfabéticamente por nombre. El reporte debe tener la siguiente forma:

2) Se requiere un inventario de productos para mujeres (aquellos que dice Ladies en el nombre) ordenado por precio descendente. El reporte debe tener la siguiente forma:

3) Se requiere un reporte con la cantidad de productos de cada categoría, ordenado de mayor a menor cantidad. El reporte debe tener la siguiente forma:

4) Se requiere un reporte con la cantidad de inventario de productos por marca, ordenado descendentemente. El reporte debe tener la siguiente forma:

5) Se requiere un inventario para la tienda Santa Cruz Bike de los productos que tienen en existencia en la categoría Electric Bikes. El reporte debe tener la siguiente manera:

## RESPUESTA

La respuesta a este ejercicio se puede encontrar en la carpeta 1-consultas

1. ### Construir un algoritmo de Consulta de cliente y cálculo de descuento

Un objetivo importante de este proyecto es solucionar el problema para verificar si usuario está registrado en sistema para realizar compras, si no se encuentra registrado informar que debe registrarse para realizar compras.

Para darle solución al problema anterior, vendedor debe ingresar por consola nombre cliente, monto y descuento.

El Nombre de cliente será validado a través de un Json,  el cual debe ser leído y recorrido para validar que cliente se encuentra en esa lista.

Se le solicita que desarrolle un algoritmo que recorra el Json, que valide si existe cliente en los registros.

Si existe, realizar el cálculo descuento, y se debe crear un archivo con el siguiente mensaje:

` `Cliente: xxxxxx

`               `Su compra es de  xxxxxx pesos

`               `porcentaje de descuento xxxxxx da un total de: $xxxxxxx


Si no existe el cliente, se deberá crear el archivo con el siguiente mensaje:

Don: xxxxxxx

`    `Actualmente usted no es cliente en la tienda, favor registrarse para poder realizar compras 

Al final del programa leer archivo creado y mandar información a vendedor por consola.

## RESPUESTA

La respuesta a este ejercicio se puede encontrar en la carpeta 2-descuento.

Usando express se crea una consulta a la base de datos (que se creó previamente en el ejercicio 1)para obtener el JSON con los 
datos de los clientes y partir de eso se verifica si el cliente existe o no y se crean los archivos que muestran los mensajes en consola
según sea el caso.

Si el archivo JSON no está creado, será creado y luego se ejecuta el resto del programa.

### Para poder ejecutar el programa se debe usar la siguiente sintaxis:

- cd 2-descuento (para ingresar a la carpeta);
- node app --nombre "nombre cliente" --monto "monto de transaccion" --descuento "descuento otorgado"
- Ejemplo: node app --nombre "Lee" --monto "10000" --descuento "20%"

### 3.Crear Monitor de Ordenes

Se requiere crear una página web dinámica que despliegue el listado de órdenes, tal como se detalla en la siguiente imagen mock-up.


Se pide:

1) Desplegar el listado de Tiendas en el primer combobox, ordenado alfabéticamente, con valores que consuman la api
2) Desplegar el listado de Categorías en el segundo combobox, ordenado alfabéticamente, con valores que consuman la api
3) Desplegar el listado de las Marcas en el tercer combobox, ordenado alfabéticamente, con valores que consuman la api
4) Desplegar el lisado de los Productos y su inventario (de acuerdo a mock) de acuerdo a los filtros seleccionados (tienda, categoría, marca), a partir de la información de la api
5) ` `Para realizar el requerimiento, el arquitecto le señala lo siguiente:
- Utilizar html, css, JavaScript  para el despliegue de la vista 
- Utilizar bootstrap para los elementos
- Que los elementos se ajusten a distintos tamaños de pantalla

## RESPUESTA

La respuesta a este ejercicio se encuentra en la carpeta raíz 


### 4.Crear una API REST que disponibilice el listado de productos Utilizando tecnología NodeJs con Express

Disponibilice un servicio REST que permita enviar la información al Monitor de Inventario. Recuerde que el servicio podría recibir como la tienda, categoría y marca.



