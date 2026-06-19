---
title: "Ud. 03 - Reglas de estilo"
permalink: /mod_prog/ud03/estilo/
excerpt: "Cada lenguaje de programación debe tener unas reglas de estilo que permitan escribir un código claro, organizado y bien estructurado."
last_modified_at: 2025-08-08T08:48:05-04:00
redirect_from:
  - /theme-setup/
toc: true
#toc_sticky: true
#toc_icon: "heart"
---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}
{: .text-justify}

---

# 6 Reglas de estilo

La escritura de un algoritmo debe ser siempre lo más clara posible, ya se esté escribiendo en Java, en ensamblador o en C. La razón es evidente: los programas pueden llegar a ser muy complejos, y, si a su complejidad le añadimos una escritura sucia y desordenada, se volverán ininteligibles.
{: .text-justify}

Recuerda que en todos los lenguajes, por bien organizados y estructurados que estén, es posible escribir código sucio e ilegible.
{: .notice--info}

Esto es un aviso para navegantes. Todos los programadores han experimentado la frustración que se siente al ir a **revisar un algoritmo redactado pocos días antes y no entender ni una palabra** de lo que uno mismo escribió. Multiplíquese esto por mil en el caso de revisión de algoritmos escritos por otras personas. 
{: .text-justify}

Por esta razón, y ya desde el principio, debemos acostumbrarnos a **respetar ciertas reglas básicas de estilo**. Cierto que cada programador puede luego desarrollar su estilo propio, y en las organizaciones (empresas) dedicadas al desarrollo de software tienen sus propias "normas de la casa" que hay que respetar cuando uno trabaja para ellos, pero todo esto siempre debe de estar dentro de un marco aceptado por la mayoría. 
{: .text-justify}

## 6.1 Partes de un algoritmo

Los algoritmos deberían tener siempre una **estructura en tres partes**:
{: .text-justify}

1. Cabecera  
2. Declaraciones  
3. Acciones

Algunos lenguajes, Java entre ellos, son lo bastante flexibles como para permitir saltarse a la torera esta estructura, pero es una buena costumbre respetarla siempre: 
{: .text-justify}

* *La **cabecera**: contiene el nombre del método, sus parámetros de entrada y los tipos que devuelve. Esto es obligatorio en Java.* 
{: .text-justify}

* *Las **declaraciones**: contiene las declaraciones de variables y constantes que se usan en el algoritmo. En Java la declaración puede hacerse en cualquier sitio (siempre antes del primer uso de la variable).* 
{: .text-justify}

* *Las **acciones**: son el cuerpo en sí del algoritmo, es decir, las instrucciones.* 
{: .text-justify}

## 6.2 Documentación

La documentación del programa comprende el conjunto de **información interna y externa** que facilita su posterior mantenimiento. 
{: .text-justify}

* *La **documentación externa** la forman todos los documentos ajenos al programa: guías de instalación, guías de usuario, etc.* 
{: .text-justify}

* *La **documentación interna** es la que acompaña al programa. Nosotros sólo nos ocuparemos, por ahora, de esta documentación.* 
{: .text-justify}

La forma más habitual de plasmar la **documentación interna** es por medio de **comentarios** significativos que acompañen a las instrucciones del algoritmo o programa. Los comentarios son **líneas de texto** insertadas entre las instrucciones, o bien al lado, que se ignoran durante la ejecución del programa y aclaran el funcionamiento del algoritmo a cualquier programador que pueda leerlo en el futuro. 
{: .text-justify}

Para que el ordenador sepa qué debe ignorar y qué debe ejecutar, **los comentarios se escriben precedidos de determinados símbolos** que la máquina interpreta como "principio de comentario" o "fin de comentario". 
{: .text-justify}

Los símbolos que marcan las zonas de comentario dependen del lenguaje de programación, como es lógico. Así, por ejemplo, en Pascal se escriben encerrados entre los símbolos (**`*`** y **`*`**):
{: .text-justify}

```Pascal
(* Esto es un comentario en Pascal *)
```

El **lenguaje Java**, sin embargo, utiliza los símbolos `/*` y `*/` para marcar los comentarios. También se puede emplear la doble barra (`//`) para comentarios que ocupen sólo una línea. Nosotros usaremos indistintamente estos dos métodos:
{: .text-justify}

```java
/* Esto es un comentario en Java. Puede ocupar varias líneas */

/*
   Por ejemplo:
   Esto sería un comentario multilínea.
*/

// Esto es un comentario de una sola línea en Java
```

### 6.2.1 javadoc

Bajo el auspicio primero de Sun Microsystems y ahora de Oracle, junto con el lenguaje Java se desarrolló una forma específica de redactar los comentarios del programa (documentación interna) de manera que más tarde, con el programa terminado, se pudiera generar documentación externa de forma automática. En concreto, javadoc está pensado para generar la documentación de la API5. 
{: .text-justify}

A este formato se le denomina JavaDoc, porque es el nombre de la utilidad que genera la documentación de forma automática. 
{: .text-justify}

Javadoc se ha extendido de tal modo que es un estándar de facto en la industria, utilizándose en la actualidad en desarrollos llevados a cabo con otros muchos lenguajes de programación, no solo Java. 
{: .text-justify}

Para generar APIs con Javadoc han de usarse etiquetas (tags) precedidas por el carácter "@". Estas etiquetas han de escribirse al principio de cada clase, atributo o método mediante un comentario iniciado con /\*\* y acabado con \*/. Tan sencillo como eso. Después, la aplicación javadoc las reconocerá y generará un documento HTML con la documentación de la API completa. 
{: .text-justify}

A continuación se muestran algunos de los tags más comunes[^1]:
{: .text-justify}

| Tag | Aplicable a… | Descripción |
| :---: | :---: | :---- |
| [@author](https://www.oracle.com/es/technical-resources/articles/java/javadoc-tool.html#@author) | clases interfaces | Nombre del desarrollador. |
| [@version](https://www.oracle.com/es/technical-resources/articles/java/javadoc-tool.html#@version) | clases interfaces | Indica la versión del método o de la clase. |
| [@deprecated](https://www.oracle.com/es/technical-resources/articles/java/javadoc-tool.html#@deprecated) |  | Indica que el método o clase es antigua y que no se recomienda su uso porque posiblemente desaparecerá en versiones posteriores. |
| [@param](https://www.oracle.com/es/technical-resources/articles/java/javadoc-tool.html#@param) | métodos constructores | Definición de un parámetro de un método, es requerido para todos los parámetros del método. |
| [@return](https://www.oracle.com/es/technical-resources/articles/java/javadoc-tool.html#@return) | métodos | Informa de lo que devuelve el método, no se puede usar en constructores o métodos "void". |
| [@see](https://www.oracle.com/es/technical-resources/articles/java/javadoc-tool.html#@see) |  | Asocia con otro método o clase, creando un enlace a su javadoc. |
| @exception o [@throws](https://www.oracle.com/es/technical-resources/articles/java/javadoc-tool.html#@exception) | métodos constructores | Excepción lanzada por el método |

#### Ejemplo  
Escribir un algoritmo que sume todos los números naturales de n hasta m, siendo n y m números recibidos como parámetros. Devuelve la suma si todo ha ido bien o -1 en caso de error.
{: .text-justify}

```java
/**
 * Suma todos los números naturales entre 1 y 1000
 * @version: 1.0
 * @author:  Jaime Tralleta
 * @param:   n int número inicial de la secuencia
 * @param:   m int número final de la secuencia
 * @return   int la suma si todo funciona bien, -1 en caso de fallo
 */
public int sumarNumeros(int n, int m) {
    int i; 
    int suma; 	// Variable acumulador 
    if (n <= m) { // Comprobamos los límites
        suma = 0;
        for (i = n; i <= m; i++) {
            suma = suma + i;
        }
    }
    else { 		// Si n > m, tenemos un error
        suma = -1; 	// En caso de error, devolveremos -1
    }
    return suma;
}
```
Este es un ejemplo de **algoritmo comentado usando el estándar javadoc**. Observa el comentario al principio del método. Además, en el interior del método, aparecen comentarios adicionales destinados a un futuro lector humano. Se han escrito a la derecha de las instrucciones. A efectos de ejecución, se ignora todo lo que haya escrito entre los símbolos `/*` y `*/` o a la derecha de los símbolos `//`, pero a efectos de documentación y mantenimiento, lo que haya escrito en los comentarios puede ser importantísimo[^2]. 
{: .text-justify}

Pero, ¡cuidado\! Comentar un programa en exceso no sólo es tedioso para el programador, sino contraproducente, porque un **exceso de documentación** lo puede hacer más ilegible. Sólo hay que insertar comentarios en los puntos que se considere que necesitan una explicación. Ya decía Aristóteles que "*La virtud está en el punto medio entre dos extremos viciosos*". Bien es cierto que el macedonio no tenía ni idea de programación, pero, ¿a que mola citar a los sabios de la antigüedad? 
{: .text-justify}

## 6.3 Estilo de escritura

A lo largo de esta unidad has podido ver diversos ejemplos de algoritmos. Si te fijas en ellos, todos siguen ciertas convenciones en el uso de la tipografía, las sangrías, los espacios, etc. Escribir los algoritmos cumpliendo estas reglas es una sana costumbre. 
{: .text-justify}

### 6.3.1 Sangrías

Las instrucciones que aparezcan **debajo de la llave de apertura** deben tener una **sangría mayor** que dicha instrucción. Ésta sangría se mantendrá hasta la aparición de la llave de cierre correspondiente. Esto es particularmente importante cumplirlo si existen varios bloques anidados. Asimismo, un algoritmo es más fácil de leer si los **comentarios** tienen todos la misma sangría.
{: .text-justify}

### 6.3.2 Llaves de apertura y cierre de bloques

Existen **dos estilos de escritura de la llave de apertura:** inmediatamente a la derecha de la instrucción que genera el bloque, o debajo de la misma. Puedes ver las diferencias en este ejemplo:
{: .text-justify}

```java
while (condicion) {  
  // Este bucle tiene la llave de apertura a la derecha del while
}

while (condicion)  
{  
  // Este bucle tiene la llave de apertura debajo del while
}
```

En ambos casos, la llave de cierre debería ir alineada con la instrucción de apertura del bloque y, en el primero, también con la llave de apertura.
{: .text-justify}

Ningún estilo de apertura de bloques es mejor que el otro, y, si piensas un minuto, encontrarás ventajas e inconvenientes a ambos. En general, lo más importante no es el estilo que uses, sino que **seas consistente**, es decir, que utilices siempre estilo de escritura. 
{: .text-justify}

**En Java, por convenio, suele utilizarse más la llave de apertura en la misma línea**, es decir, el primero de los estilos del ejemplo anterior. En todos los códigos de ejemplo que hemos puesto hasta ahora hemos intentado utilizar esa forma de abrir los bloques. 
{: .text-justify}

Las llaves de inicio y cierre pueden llegar a ser una pesadilla cuando los algoritmos crecen y existen muchos bloques anidados. Ya lo verás, ya. Así que más te vale ser organizado con ellas desde el principio. 
{: .text-justify}

Una aclaración al respecto: cuando un bloque de instrucciones **sólo contiene una instrucción**, podemos escribirla directamente, sin necesidad de encerrarla entre { y }. Esto suele redundar en una mayor facilidad de lectura. 
{: .text-justify}

Por supuesto, esta y las siguientes reglas **solo son convenciones** y, de hecho, puedes saltártelas. Pero no se considera ni elegante ni práctico, y te mirarán mal a cualquier sitio al que vayas. Sí que se permiten ciertas **excepciones**. Por ejemplo, en la sección *catch* de un bloque *try-catch*, si no vas a manejar la excepción de ningún modo especial, se considera admisible saltarse la regla de las llaves de apertura y cierre, como ves en el siguiente ejemplo. Eso sí: ¡no conviene abusar de estas licencias\!
{: .text-justify}

```java
try {
    ... sección try ...
}  
catch (IOException e) {
    e.printStackTrace();
}  // Licencia poética
```

### 6.3.3 Tipografías

Los editores de texto usados por los programadores deben resaltar las palabras reservadas y distinguir los literales, cadenas, y otros elementos del lenguaje con colores diferentes. Esto aumenta enormemente la legibilidad. También pueden ayudarte con las aperturas y cierres de llaves resaltándote la pareja de una determinada llave, o permitiéndote ocultar o mostrar bloques enteros. 
{: .text-justify}

Si vas a escribir un algoritmo con un procesador de texto normal (por ejemplo, para presentarlo como parte de una documentación impresa), es conveniente que uses una **fuente de tamaño fijo** (el tipo **Courier** va bastante bien, aunque nosotros hemos usado Andale Mono, que nos gusta más). 
{: .text-justify}

### 6.3.4 ¡Sólo una instrucción por línea, por favor!

Una regla de estilo básica es utilizar sólo una instrucción por línea. Por ejemplo:
{: .text-justify}

```java
int salarioMinimo, salarioMaximo;    // Maaaaaaal 

int salarioMinimo,  
    salarioMaximo;                   // Bien

int salarioMinimo;  
int salarioMaximo;                   // También bien
```

Aquí tienes otro ejemplo:
{: .text-justify}

```java
for (i = 1; i < LIMITE; i++) {  
    x = v[i] / z; System.out.println(x);  // ¡¡ Mal !!
}

for (i = 1; i < LIMITE; i++) {  
    x = v[i] / z;  
    System.out.println(x);  // Bien
}
```

Por supuesto, también aquí pueden hacerse **excepciones** y considerar admisible definir diversas variables, o incluso escribir varias instrucciones, en la misma línea. Pero solo cuando te parezca suficientemente justificado y no abuses de ello. Recuerda que **pulsar la tecla Intro es gratis.**
{: .text-justify}

### 6.3.5 Espacios

Otro elemento que aumenta la legibilidad es **espaciar** suficientemente (pero no demasiado) los distintos elementos de cada instrucción. Por ejemplo, esta instrucción ya es bastante complicada y difícil de leer:
{: .text-justify}

```java
if (a > b) y (c > d * Math.sqrt(k) ) a = k + 5.7 * b
```

Pero se lee mucho mejor que esta otra, en la que se han suprimido los espacios (excepto los imprescindibles):
{: .text-justify}

```java
if (a>b)y(c>d*Math.sqrt(k)) a=k+5.7*b
```

Al ordenador le dará igual si escribimos (a > b) o (a>b), pero a cualquier programador que deba leer nuestro código le resultará mucho más cómoda la primera forma. 
{: .text-justify}

Por la misma razón, también es conveniente dejar **líneas en blanco** entre determinadas instrucciones del algoritmo cuando se considere que mejora la legibilidad. Te lo recordamos de nuevo: sé generoso/a con el Intro, que pulsarlo es gratis, al menos de momento. 
{: .text-justify}

### 6.3.6 Elección de los identificadores

A la hora de elegir identificadores de variables (o de constantes) es muy importante **utilizar nombres que sean significativos**, es decir, que den una idea de la información que almacena esa variable. Por ejemplo, si en un programa de nóminas vamos a guardar en una variable la edad de los empleados, es una buena ocurrencia llamar a esa variable "edad", pero no llamarla "X", "A" o "cosa". 
{: .text-justify}

Ahora bien, dentro de esta política de elegir identificadores significativos, es conveniente optar por aquellos que sean **lo más cortos posible**, siempre que sean descifrables. Así, un identificador llamado "edad_de_los_empleados" es engorroso de escribir y leer, sobre todo si aparece muchas veces en el algoritmo, cuando probablemente "edad_empl" proporciona la misma información. Sin embargo, si lo acortamos demasiado (por ejemplo "ed_em") llegará un momento en el quede claro lo que significa.
{: .text-justify}

Toda esta idea de significación de los identificadores es **extensible** a los nombres de las clases, de los métodos y, en general, de **todos los objetos** relacionados con un programa.
{: .text-justify}

Para construir los identificadores que consten de varias palabras, hay una divertida y en general absurda controversia entre los profesionales. Básicamente, hay dos formas de construir los identificadores:
{: .text-justify}

* **camelCase**: si un identificador tiene varias palabras, la primera letra de cada palabra se escribe con mayúscula y el resto en minúscula. Por ejemplo: edadEmpleado, vidasRestantes, puntosCocheRojo, etc. Existe la variedad *lowerCamelCase* (el identificador empieza por minúscula, como en edadEmpleado) y la *UpperCamelCase* (como en EdadEmplead) 
{: .text-justify}

* **snake_case**: se separan las palabras con un signo de subrayado (de ahí lo de "snake", ¿lo pillas?). Por ejemplo: edad_empleado, vidas_restantes, puntos_coche_rojo, y así todo. 
{: .text-justify}

La gente se insulta en las redes sociales a cuenta de si es mejor uno u otro. En el fondo, todo es una cuestión de convenciones y no conviene dejarse llevar por el lado derecho del cerebro en estas cuestiones. Más importante que utilizar uno u otro estilo, es: 
{: .text-justify}

* **Ser consistentes**. Es decir, si usamos camelCase, usarlo SIEMPRE. Y si usamos **snake_case**, lo mismo. 
{: .text-justify}

* **Respetar el estilo** que usen en el sitio en el que vayamos a trabajar (si lo tienen) y, si no, sugerir la conveniencia de establecer uno. 
{: .text-justify}

**Por convenio, en la programación en Java suele preferirse:**
{: .text-justify}

* Usar UpperCamelCase en los identificadores de clase y de paquete. 
{: .text-justify}

* Usar MAYÚSCULAS para las constantes. 
{: .text-justify}

* Usar lowerCamelCase para el resto de identificadores. 
{: .text-justify}

Como esto es lo más extendido, será lo que hagamos a lo largo del curso, pero recuerda que se trata de una **pura convención**. Realmente, el lenguaje no obliga a usar uno u otro estilo de identificadores. 
{: .text-justify}

Por último, señalar que Java **distingue entre mayúsculas y minúsculas**, es decir, que para ellos no es lo mismo el identificador "edad" que "Edad" o "EDAD". Esto es común en casi todos los lenguajes, pero hay excepciones molestas.
{: .text-justify}

[^1]: La API (*Application Program Interface* = Interfaz de Programación de Aplicación) es el conjunto de métodos públicos que ofrece una biblioteca para ser usados por otro programa. Es decir, es una lista exhaustiva de todas las funciones de una biblioteca con sus nombres, parámetros, tipos devueltos y tareas que realizan. Es una documentación imprescindible para que otros programadores puedan hacer uso de esa biblioteca, como comprobarás en tu práctica profesional. Recuérdalo cuando tengas que pelearte, por ejemplo, con jQuery y recurras continuamente a la web oficial, donde está recogida la API completa de esta biblioteca JavaScript.
{: .text-justify}

[^2]: Santander, B. T. W. (2024, enero 8). 5 consejos de programación para escribir mejor código. Medium. <https://medium.com/be-tech-with-santander/5-consejos-de-programaci%C3%B3n-para-escribir-mejor-c%C3%B3digo-3ea7414fefc8>{:target="_blank"}
{: .text-justify}

---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}
{: .text-justify}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
{: .text-justify}
