---
title: "Ud. 02 - Entendiendo la POO"
permalink: /mod_prog/ud02/intro/
excerpt: "Entendiendo la POO."
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

---

# 1. Entendiendo la programación orientada a objetos

## 1.1 Pensamiento orientado a objetos

(Tanto esta sección como la siguiente han sido adaptadas de la "Guía del usuario de Ruby" escrita por Yukihiro "Matz" Matsumoto, creador del lenguaje Ruby) 
{: .text-justify}

La orientación a objetos es una palabra con gancho. Llamar a cualquier cosa “orientada a objetos” puede hacerla parecer más elegante. Java reclama ser un lenguaje orientado a objetos: pero, ¿qué significa exactamente “orientado a objetos”?  
{: .text-justify}

Existe una gran variedad de respuestas a esta pregunta, y probablemente todas ellas se pueden reducir a la misma cosa.  
{: .text-justify}

En vez de recapitular demasiado deprisa, pensemos un momento en el paradigma de la programación tradicional. Tradicionalmente, un problema informático se ataca produciendo algún tipo de representación de datos y procedimientos que operan sobre esos datos. Bajo este modelo, los datos son inertes, pasivos e incapaces. Están a la completa merced de un gran cuerpo procedimental, que es activo, lógico y todopoderoso.  
{: .text-justify}

El problema con esta aproximación es, que los programas los escriben programadores, que son humanos, que sólo pueden retener cierto número de detalles en sus cabezas en un momento determinado. A medida que crece el proyecto, el núcleo procedimental crece hasta un punto que se hace difícil recordar cómo funciona todo el conjunto. Pequeños lapsos de pensamiento o errores tipográficos llegan a ser errores muy ocultos. Empiezan a surgir interacciones complejas e inintencionadas dentro de este núcleo y el mantenimiento se convierte en algo parecido a transportar un calamar gigante intentando que ninguno de sus tentáculos te alcance la cara. Existen políticas de programación que ayudan a minimizar y localizar errores dentro de este paradigma tradicional pero existe una solución mejor que pasa fundamentalmente por cambiar la forma de trabajar.  
{: .text-justify}

Lo que hace la programación orientada a objetos es, delegar la mayoría del trabajo mundano y repetitivo a los propios datos; modifica el concepto de los datos que pasan de pasivos a activos. Dicho de otra forma.  
{: .text-justify}

* Dejamos de tratar cada pieza de dato como una caja en la que se puede abrir su tapa y arrojar cosas en ella.
{: .text-justify}

* Empezamos a tratar cada pieza de dato como una máquina funcional cerrada con unos pocos interruptores y diales bien definidos.  
{: .text-justify}

Lo que se define anteriormente como una “máquina” puede ser, en su interior, algo muy simple o muy complejo. No se puede saber desde el exterior y no se nos permite abrir la máquina (excepto cuando estamos completamente seguros de que algo está mal en su diseño), por lo que se nos obliga a conmutar interruptores y leer los diales para interactuar con los datos. Una vez construida, no queremos tener que pensar en cómo funciona internamente.  
{: .text-justify}

Se podría pensar que estamos haciendo más trabajo nosotros mismos, pero esta forma de trabajo tiende a ser un buen método para evitar que vayan mal todo tipo de cosas.
{: .text-justify}

Comencemos con un ejemplo que es demasiado simple para tener algún valor práctico pero que al menos muestra parte del concepto. Nuestro coche consta de un cuentakilómetros. Su trabajo consiste en llevar un registro de la distancia recorrida desde la última vez que se pulsó el botón de reinicialización. ¿Cómo podríamos representar esto en un lenguaje de programación? En C, por ejemplo, el cuentakilómetros sería, simplemente, una variable numérica de tipo float. El programa manipularía esa variable aumentando el valor en pequeños incrementos y ocasionalmente la reinicializaría a cero cuando fuese apropiado. ¿Qué hay de malo en esto?
{: .text-justify}

Un error en el programa podría asignar un valor falso a la variable, por cualquier número de razones inesperadas. Cualquiera que haya programado en C sabe que se pueden perder horas o días tratando de encontrar ese error que una vez encontrado parece absurdamente simple. El momento de encontrar el error es indicado por una sonora palmada en la frente.
{: .text-justify}

En un contexto orientado a objetos, el mismo problema se puede atacar desde un ángulo completamente diferente. La primera cosa que se pregunta un programador al diseñar el cuentakilómetros no es “¿qué tipos de datos son los más cercanos para representar esta cosa?” sino “¿cómo se supone que actúa esta cosa?”. La diferencia termina siendo profunda.
{: .text-justify}

Es necesario dedicar cierto tiempo a decidir para qué es exactamente un cuentakilómetros y cómo se espera que el mundo exterior interactúe con él. Se decide entonces construir una pequeña máquina con controles que permitan incrementar, reinicializar y leer su valor y nada más.
{: .text-justify}

El cuentakilómetros se crea sin un mecanismo para asignarle un valor arbitrario. ¿Por qué? Porque es de todos sabido que los cuentakilómetros no trabajan de esa forma. Existen sólo unas cuantas cosas que un cuentakilómetros puede hacer, y sólo permitimos esas cosas. Así, si alguien desde un programa trata de asignar algún otro valor (por ejemplo, la temperatura límite del sistema de control de climatización del vehículo) al cuentakilómetros, aparece de inmediato una indicación de lo que va mal. Al ejecutar el programa se nos dice (o posiblemente, al compilarlo dependiendo de la naturaleza del lenguaje) que NO se nos permite asignar valores arbitrarios al objeto Cuentakilómetros. El mensaje podría ser menos preciso, pero sí razonablemente próximo al problema. Esto no evita el error, ¿verdad? pero apunta rápidamente en la dirección de la causa. Esta es sólo alguna de las múltiples formas en las que la programación OO nos puede evitar muchas pérdidas de tiempo.  
{: .text-justify}

Existe, normalmente, un nivel de abstracción superior a éste porque resulta que es igual de fácil construir una factoría que hace máquinas como hacer una máquina individual. Es poco probable que construyamos un único cuentakilómetros, sino que nos preparamos para construir cualquier cantidad de cuentakilómetros a partir de un único patrón. El patrón (o, si lo prefieres, la factoría de cuentakilómetros) es lo que se conoce como clase, y el cuentakilómetros individual sacado del patrón (o construido en la línea de montaje de la factoría) se conoce como objeto.  
{: .text-justify}

Conviene resaltar aquí que la utilización de un lenguaje OO no obliga a un diseño OO válido. Es posible, en cualquier lenguaje, escribir código poco claro, descuidado, mal concebido, erróneo e inestable. Lo que permite Java (en oposición, especialmente, a C++) es que la práctica de la programación OO sea lo suficientemente natural para que, incluso, trabajando a pequeña escala no se sienta la necesidad de recurrir a un código mal estructurado por evitar esfuerzo.  
{: .text-justify}

A continuación hablaremos de los “interruptores y diales” (métodos del objeto) y en próximos capítulos pasaremos a las "factorías" (clases) 
{: .text-justify}

## 1.2 Métodos

¿Qué es un método? En la programación OO no se piensa en operar sobre los datos directamente desde el exterior de un objeto, sino que los objetos tienen algún conocimiento de cómo se debe operar sobre ellos (cuando se les pide amablemente). Podríamos decir que se pasa un mensaje al objeto y este mensaje obtiene algún tipo de acción o respuesta significativa. Esto debe ocurrir sin que tengamos necesariamente algún tipo de conocimiento o nos importe como realiza el objeto, interiormente, el trabajo. Las tareas que podemos pedir que un objeto realice (o lo que es lo mismo, los mensajes que comprende) son los métodos.
{: .text-justify}

En Ruby, se llama a un método con la notación punto (como en C++ o Java). El objeto con el que nos comunicamos se nombra a la izquierda del punto. Por ejemplo:
{: .text-justify}

```java
String mi_cadena = "Esto es una cadena de caracteres";   
System.out.println("La longitud de la cadena es: " + mi_cadena.length());
```

La salida por pantalla será:
{: .text-justify}

```
La longitud de la cadena es 32
```

Intuitivamente, a este objeto cadena se le está pidiendo que diga la longitud que tiene (y, como es una cadena de caracteres, nos responde con la cantidad total de letras de que consta). Técnicamente, lo que hemos hecho se llama "invocar el método length() del objeto mi_cadena".  
{: .text-justify}

Otros objetos pueden hacer una interpretación un poco diferente de length. La decisión sobre cómo responder a un mensaje se hace al vuelo, durante la ejecución del programa, y la acción a tomar puede cambiar dependiendo de la variable a que se haga referencia.
{: .text-justify}

```java
String mi_cadena = "Esto es una cadena de caracteres";   
String[] mi_array = {mi_cadena, "Otra cadena"};   
System.out.println("La longitud de la cadena es: " + mi_cadena.length());
System.out.println("La longitud del array es: " + mi_array.length());
```

La salida por pantalla será:
{: .text-justify}

```
La longitud de la cadena es 32   
La longitud del array es 2
```

Lo que indicamos con length puede variar dependiendo del objeto con el que nos comunicamos. En el primer caso, le pedimos a mi_cadena su longitud. Como se trata de una cadena de caracteres, solo hay una respuesta posible. En el segundo caso, se lo pedimos a mi_array. Podríamos pensar que el método length pudiera contar todos los caracteres en total almacenados en el objeto (43 en total). Pero lo más plausible es que nos devuelva 2, que es el número de elementos del array. 
{: .text-justify}

No importa si por el momento no entiendes bien lo que son los strings o los arrays. Lo que hay que tener en cuenta ahora es que el objeto array conoce lo que significa ser un array, y el string, lo que significa ser string, y ambos saben exactamente lo que tienen que hacer si les pedimos que nos calculen su propia longitud (length).  
{: .text-justify}

En Java, las piezas de datos llevan consigo ese *conocimiento,* por lo que las solicitudes que se les hace se pueden satisfacer en las formas adecuadas para el tipo de dato. Esto libera al programador de la carga de memorizar una gran cantidad de nombres de funciones, ya que una cantidad relativamente pequeña de nombres de métodos, que corresponden a conceptos que sabemos como expresar en lenguaje natural, se pueden aplicar a diferentes tipos de datos siendo el resultado el que lógicamente cabría esperar. Esta característica de los lenguajes OO se conoce como polimorfismo[^1].  
{: .text-justify}

Cuando un objeto recibe un mensaje que no conoce, se produce un error. Por lo tanto, hay que conocer qué métodos son aceptables para un objeto, aunque no se necesita saber cómo están programados por dentro.  
{: .text-justify}

## 1.3 Atributos

Los atributos de un objeto definen las características del mismo. Por ejemplo, un atributo del cuentakilómetros es el contador del número de kilómetros, o un atributo de un String debe de ser el número de caracteres de que consta la cadena. 
{: .text-justify}

Al programador que usa un objeto deberían importarle un bledo los atributos del mismo. Él (o ella) se encargará de usar el objeto a través de sus métodos, y éstos operarán con los atributos, si ello es necesario, de forma totalmente transparente al programador. Es decir, los atributos raramente son accesibles desde el exterior del objeto, salvo que, por razones de diseño, el programador del objeto haya decidido lo contrario. 
{: .text-justify}


*[POO]: Programación Orientada a Objetos
*[OOP]: Object-Oriented Programming
*[AOP]: Aspect-oriented programming
*[JDK]: Java Development Kit
*[JVM]: Java Virtual Machine
*[JRE]: Java Runtime Environment
*[IntelliJ]: IntelliJ IDEA Community Edition

---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
