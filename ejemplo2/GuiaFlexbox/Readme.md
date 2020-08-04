# Guía Flexbox

A la hora de empezar una pantalla o componente lo primero que se debería realizar es mirar el diseño provisto por el equipo de diseño o el cual nosotros mismos o un tercero realizó, luego siempre es recomendable hacer un pequeño bosquejo de cómo se va a distribuir los distintos componentes en la pantalla para estar organizado a la hora de empezar a codificar.

Cuando ya hicimos esto y queremos empezar a codificar nuestras interfaces se nos plantea el problema de ¿cómo organizamos los distintos div o contenedores en la pantalla para lograr el bosquejo deseado?.

Para esto hay varias alternativas utilizando propiedades css para posicionar los elementos donde nosotros queremos (como pueden ser position, margin,padding, align, etc). Los problemas de estos approaches es que tenemos que tener en cuenta todos los tamaños de pantalla para los cuales vamos a desarrollar (utilizando [media queries](https://developer.mozilla.org/es/docs/CSS/Media_queries)) porque lo que funciona **large **probablemente no funcione para **small** y viceversa (los distintos tamaños de pantalla son small, medium, large y extra large) y esto es un problema grande a la hora de querer desarrollar algo rápido y que se quiera que no sea necesario solucionar sucesivamente bugs de UI a lo largo del tiempo dado que es muy difícil contemplar todos los casos siempre que uno está desarrollado.

La solución que planteamos a este problema es la utilización de flexbox.

Flexbox es un modelo de layout que ayuda a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación.

Esto hace que diseñemos algo siguiendo correctamente flexbox y automáticamente sea responsive.

Para hacer uso de este modelo no hay que instalar ninguna plugin, librería, sino que solo es necesario hacer uso de algunas propiedades de css particulares.

Estas son:

* **display**:Para hacer uso de flex deberemos colocarle al div que contendrá nuestros elementos html esta propiedad en **flex **o **inline-flex**.Esto define un contenedor flex y permite que el contenido se distribuya siguiendo este modelo.

* **flex-direction**:Esta propiedad define el main axis de la dirección con la cual se van a renderizar los elementos en la contenedor.Los posibles valores son:

    * row(default): de izquierda a derecha.

    * row-reverse: de derecha a izquierda.

    * column: igual que row solo que de arriba a abajo.

    * column-reverse: igual que row reverse solo que de abajo a arriba.

* **flex-wrap**:Esta propiedad define si al terminarse el espacio de un contenedor, los items que no entran van a saltar de línea o no.Los posibles valores son:

    * nowrap: no salta de línea.

    * wrap: salta de línea desde arriba hacia abajo.

    * wrap-reverse: salta de línea desde abajo hacia arriba.

* **justify-content**:Esta propiedad define cómo se va a alinear los elementos que se encuentran en el main axis.Los distintos valores que puede tener es mejor explicarlos con una imagen:[https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)En el caso de la imagen el flex-direction está en row, por lo cual el main axis es el eje x.

* **align-items**:Esta propiedad define cómo se va a alinear los elementos que se encuentran en el cross axis.Los distintos valores que puede tener es mejor explicarlos con una imagen:[https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)En el caso de la imagen el flex-direction está en row, por lo cual el cross axis es el eje y.

* **align-content**:Esta propiedad alinea los elementos del cross axis cuando sobra espacio.Los distintos valores que puede tener es mejor explicarlos con una imagen:[https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)

* **order**:Esta propiedad define el orden en el cual los elementos van a aparecer en el contenedor, por ejemplo si en un contenedor tengo dos elementos con order en 1 y 2 respectivamente, primero va a aparecer el que tiene order 1.Vale la pena aclarar que puede tomar valores negativos.

* **flex-grow:** Esta propiedad define hasta cuanto puede crecer un contenedor en caso de ser necesario.Por ejemplo si tengo 3 divs con flex grow en 1 2 1 respectivamente, en caso de ser necesario el div del medio va a crecer hasta el 50% del espacio disponible, mientras que los otros hasta el 25%.Vale la pena comentar que los elementos no pueden tomar valores negativos.

* **flex-shrink**:Esta propiedad define si se reducirá y cuanto potencialmente el tamaño en caso de ser necesario.Si esta propiedad se setea en 0 el elemento no se reducirá.

* **flex-basis**:Esta propiedad define el tamaño predeterminado de un elemento antes de que se distribuya el espacio restante.

* **flex**: Esta propiedad es un shortcut de flex-grow, flex-shrink y flex-basis.Por ejemplo podría asignar a un contenedor:**flex: 0 1 auto**El análogo sería:**flex-grow: 0flex-shrink: 1flex-basis: auto**Se recomienda usar esta propiedad en vez de las propiedades individuales.

* **align-self**:Esta propiedad permite sobreescribir el default alignment seteado por la propiedad align-items.

En el siguiente link se puede obtener más información sobre esto:

[https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox)

Las imágenes de los valores de las propiedades fueron tomadas del siguiente link el cual presenta una explicación más detallada de lo explicado en este post junto a imágenes amenas:[https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

En siguientes guías se hará uso de flexbox en un ejemplo integrador de las guías anteriores.

# Conclusión:

Al principio podría considerarse que son muchas propiedades a aprender pero cuando uno le agarra la mano al uso de estas propiedades se hace mucho más fácil el diseño de la interfaz y nos ayuda a luego de tener definida la estructura correctamente de lo que queremos diseñar poder centrarnos en los detalles que realmente hacen la diferencia en un diseño y lo hace llamativo y que sea tal cual lo que el cliente o nosotros queremos.

Si partimos de la base de un diseño no organizado nos va a suceder que no va a ser mantenible y a medida que agreguemos nuevos elementos, cambiemos fuentes, margins, paddings nuestro diseño se romperá y tendremos que perder tiempo en arreglarlo para seguir con los detalles. Se podrán imaginar que en pantallas muy complejas esto es inmantenible.

Por último nos parece bueno agregar varios juegos o guías con la cuales pueden hacer uso de flexbox y entender más en profundidad el comportamiento de las distintas propiedades: 

* [https://flexboxfroggy.com/](https://flexboxfroggy.com/)

* [http://www.flexboxdefense.com/](http://www.flexboxdefense.com/)

* [https://preview.webflow.com/preview/flexbox-game?preview=d1a26b027c4803817087a91c651e321f&m=1](https://preview.webflow.com/preview/flexbox-game?preview=d1a26b027c4803817087a91c651e321f&m=1)

* [https://flexbox.webflow.com/](https://flexbox.webflow.com/)

