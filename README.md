# angular4-mobile-test-directions

**Whatapop** es un _amago_ de clon de [Wallapop](http://es.wallapop.com). Sus pretensiones son mucho más humildes que las del conocido portal, pero a la vez contribuyen a una grandiosa causa: que aprendas a familiarizarte con HTML5, CSS3 y Angular.

Lee detenidamente estas instrucciones **hasta el final**, las vas a necesitar para completar la práctica.

## ¿Qué tengo que hacer exactamente?

**Whatapop** es una app que funciona perfectamente desde el momento en que la descargas, pero la _pobre_ está algo escasa de funcionalidad y opciones: ahí es donde te necesito. Te ofrezco seis caminos posibles de mejora que a mí se me ocurren, a los que he llamado **Paths**; tendrás que **completarlos todos** para obtener una calificación de apto en la práctica. No te preocupes, son asequibles.

Los **Paths** están distribuidos por colores. Cuando navegues por el código de **Whatapop** verás que existen comentarios relacionados con los distintos **Paths**; eso significa que tienes trabajo que hacer justo en esa pieza de código. Por ejemplo:

```typescript
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
| Blue Path                                                        |
|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
| Crea el Pipe PublicationDatePipe. Su cometido es, partiendo de   |
| una fecha dada, retornar una cadena de texto que exprese el      |
| tiempo que ha pasado desde dicha fecha hasta ahora.              |
|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
``` 

Visto ese comentario, y siempre que estés completando ese **Path** concreto al que se hace referencia, ponte el mono de trabajo y _¡al lío!_. En cualquier caso, más abajo en cada **Path** te explico en qué consiste y qué documentos requieren tu atención.

Una vez completados los **Paths** obligatorios, tienes otros tres opcionales más por hacer si es que te ves con fuerzas. No son complejos, pero te quito los _ruedines_ y te dejo solo con ellos; no tienes instrucciones ni ayuda en los comentarios, por tanto te va a tocar tirar de ingenio y razonar la posible solución. Sé que es un último empujón y que probablemente llegues cansado a este punto, pero te recomiendo encarecidamente que intentes hacerlo. Si no llegas a tiempo para entregar la práctica con ellos, no te agobies lo más mínimo; ve rascando pequeños huecos e intenta implementarlos. La idea es que aprendas a trabajar con Angular, y qué mejor que dedicándole tiempo y esfuerzo.

Por cierto, por si te lo habías preguntado: no tienes que tocar ni una sola línea de CSS, y las que tienes que tocar de HTML, que son pocas, son del lenguaje de templates de Angular. La idea de esta práctica es que te centres en la parte funcional, en Angular, y dejes aparcado todo lo contextual. Si te ves creativo y quieres tocar algo de los estilos o de la maquetación siéntete con total libertad para hacerlo, siempre que tengas en cuenta que no es necesario y los **Paths** obligatorios hay que hacerlos sí o sí.

Hagas o no los **Optional Paths**, puedas terminar o no los obligatorios, te guste Java o COBOL, el metal o el reggaeton, yo estaré encantado de ayudarte. Ya sabes dónde localizarme.

## Entidades

Aprovecho este momento para contarte un poco sobre las entidades. Son estas tres: `Category`, `User` y `Product`. Como puedes imaginar, la entidad `Product` es la que más peso tiene y sobre la que gira **Whatapop**. Tiene todos los atributos necesarios para almacenar los datos propios de un producto, además de mantener relación con `User` para establecer el vendedor del mismo y con `Category` para enlazar la categoría en la que se publica. Están definidas de la siguiente forma:

Entidad `Category`:

- `id` de tipo `number`.
- `name` de tipo `string`.

Entidad `User`:

- `id` de tipo `number`.
- `name` de tipo `string`.
- `nick` de tipo `string`.
- `avatar` de tipo `string`.
- `latitude` de tipo `number`.
- `longitude` de tipo `number`.
- `email` de tipo `string`.

Entidad `Product`:

- `id` de tipo `number`.
- `name` de tipo `string`.
- `description` de tipo `string`.
- `category` de tipo `Category`.
- `seller` de tipo `User`.
- `publishedDate` de tipo `number`.
- `state` de tipo `string`.
- `price` de tipo `number`.
- `photos` de tipo `string[]`.

## Puesta a punto

Antes de empezar a completar **Whatapop**, que sé que tienes ganas, tienes que clonarlo e instalar sus dependencias. Puedes descargar el código desde [su repositorio en GitHub](https://github.com/vermicida/kc-whatapop-seed), o bien clonarlo desde una terminal:

```bash
$ git clone https://github.com/vermicida/kc-whatapop-seed.git
```

Recuerda que debes teber instalado [Angular CLI](https://cli.angular.io/) a nivel global para trabajar con **Whatapop**:

```
$ npm install -g @angular/cli
```

Una vez descargado y descomprimido, o bien clonado, vamos al directorio correspondiente e instalamos las dependencias:

```bash
$ cd kc-whatapop-seed
$ npm install
```

Y para iniciarlo:

```bash
$ npm start
```

## Paths

Los siguientes **Paths** son obligatorios. La práctica que entregues debe tenerlos implementados. Ve completándolos uno por uno; te recomiendo que no lleves varios a la vez.

### Green Path: Detalles de un producto

¿Te ves capaz de habilitar la vista en detalle de los productos?. Ahora mismo, por mucho que hagas clic sobre el botón de compra, no te lleva a una vista individual en la que ver los detalles del producto, como la descripción o el vendedor. Este **Path** no debería resultarte especialmente complicado, así que ¡ánimo!.

Dependencias:

- Ninguna

Documentos:

- src/app/product/**product.component.html**
- src/app/product/**product.component.ts**
- src/app/products-collection/**products-collection.component.html**
- src/app/products-collection/**products-collection.component.ts**

Qué practicamos:

- Comunicación entre componentes
- Routing

### Blue Path: Apañando la fecha de publicación

¿Te has fijado en que la fecha de publicación -en la vista en detalle- de los productos de **Whatapop** no se muestran correctamente?. Ahora mismo aparecen con formato de timestamp, lo cual carece de valor para los usuarios. Lo que debes hacer es indicar qué tiempo ha transcurrido desde que el producto se publicó. Puedes hacerlo muy fácilmente con un Pipe y la librería [Moment.js](http://momentjs.com/).

Dependencias:

- Green Path

Documentos:

- src/app/product-detail/**product-detail.component.html**
- src/app/**publication-date.pipe.ts**
- src/app/**app.module.ts**

Qué practicamos:

- Pipes

### Pink Path: Ordenando los productos

Si aún no te has percatado de este detalle, te lo cuento yo: los productos que se están mostrando no están ordenados, y lo ideal es que lo hicieran por fecha de publicación descendente, lo más nuevos primero. ¿Podrías corregirlo?

Dependencias:

- Ninguna

Documentos:

- src/app/**product.service.ts**

Qué practicamos:

- Cliente HTTP

### Red Path: Filtrando productos

Sería genial poder filtrar los productos por un texto cualquiera y/o por categoría. El componente necesario ya está implementado; tan solo tienes que echar un ojo a **Whatapop** y verás que sobre la colección de productos hay un formulario para filtrarla. El problema es que falta hacer un arreglo en el botón **Buscar**, pues ahora mismo no hace nada de nada. ¡Dale duro!

Dependencias:

- Ninguna

Documentos:

- src/app/**product.service.ts**

Qué practicamos:

- Cliente HTTP

### Yellow Path: Reseteando productos

En la vista principal de **Whatapop**, bajo la colección de productos, hay un enlace titulado **Reset de productos**. ¿Qué puñetas es esto? Pues es una opción _para desarrolladores_ a través de la cuál podemos volver a poner en venta productos previamente marcados como vendidos. Obviamente, esta opción no se publicaría en la versión productiva de **Whatapop**; tan solo la usaremos en tiempo de desarrollo para resetear productos -y así evitamos parar el servidor y modificar a mano el documento **db.json**-. Aún siendo una funcionalidad pensada para el desarrollador y no para el producto final, está a medias y te toca terminar de implementarla ;-)

Dependencias:

- Ninguna

Documentos:

- src/app/products-collection/**products-collection.component.html**
- src/app/**sold-products-resolve.service.ts**
- src/app/**product.service.ts**

Qué practicamos:

- Cliente HTTP
- Routing

### Purple Path: Mejorando el formato de los precios

Tanto en la vista principal de **Whatapop** como en la vista en detalle de un producto, los precios aparecen sin formato alguno, y esto no mola nada. Lo ideal sería respetar un formato, sea uno u otro, pero que todos los precios se vean afectados por él. Este **Path** debería llevarte 5 minutos, y solo porque 4 de ellos son para mirar la documentación y prepararte un café.

Dependencias:

- Green Path

Documentos:

- src/app/product/**product.component.html**
- src/app/product-detail/**product-detail.component.html**

Qué practicamos:

- Pipes

## Optional Paths

Como te decía más arriba, estos **Paths** son opcionales y por ello los he titulado con colores cuyo conocimiento de existencia es totalmente opcional. Igualmente, te pido que saques tiempo y fuerza de voluntad para hacerlos, bien para la entrega de la práctica o bien para más adelante.

En esta ocasión tan solo voy a contarte qué hacer en cada **Path**, pero no voy a guiarte con comentarios en el código. Como dice mi profesor de guitarra, esto ya es pipí de mayores. Intenta implementar por tu cuenta las soluciones, unque eso no quita que pueda echarte una mano si me lo pides.

### Broken White Path (AKA Blanco Roto): Likes

Estamos acustumbrados al puñetero botón de like en todos los servicios web que utilizamos a diario, pero **Whatapop** no lo tiene. Habría que hacer un nuevo componente para la vista en detalle del producto que nos permita hacer like del mismo. ¿Te ves con fuerzas para hacerlo?

**Pista:** hay que persistir de alguna forma los Like que hacemos como usuarios de la aplicación. Piensa qué opciones de persistencia tenemos disponible, no solo en servidor.

### Red Wine Path (AKA Vino Tinto): Filtro y ordenación avanzada

Ahora mismo no tenemos muchas opciones para filtrar los productos, ni hablemos ya siquiera de ordenar. ¿No sería genial ver solo los productos en venta o aquellos que están en un cierto rango de precio? Y en cuanto a ordenación, ¿no molaría poder ordenar en base al precio o alfabéticamente? ¡Pues ponte el mono de trabajo y manos a la obra!

**Pista:** pon un Pipe -o varios- en tu vida.

### Brick Red Path (AKA Teja): Productos por vendedor

Y aquí llegó el **Señor Path**, el que te todo lo puede. O no todo, pero sí que es algo más complicado que los anteriores y por eso lo hago saber. ¿Qué debemos desarrollar en este **Path**? Pues necesitamos tener localizado un punto donde pintar la colección de productos que está vendiendo un usuario concreto. Aportaría mucho valor a **Whatapop** ofrecer la posibilidad de consultar otros productos vendidos por el mismo usuario. ¡Demuestra que sabes hacerlo! ¡Hay una piruleta de colores en juego!

**Pista:** quizá puedas reutilizar algo de código. ¿Recuerdas el componente que mostraba una colección de productos?
