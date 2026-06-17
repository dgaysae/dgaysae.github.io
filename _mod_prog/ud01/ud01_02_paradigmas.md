---
title: "Unidad 01 - Estilos / Paradigmas"
permalink: /mod_prog/ud01/paradigmas/
excerpt: "Introducción a la programación. Conceptos fundamentales."
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


# 3. Estilos/Paradigmas

Recordemos que un programa de ordenador es un conjunto de instrucciones que el ordenador puede entender y que ejecuta en un determinado orden.
{: .text-justify}

Generalmente, el ordenador ejecuta ese código de la misma forma que nosotros leemos un libro. Es decir, el orden de ejecución de las instrucciones es el mismo en el que están escritas.
{: .text-justify}

Pero en sus primeros pasos, los programas no eran tan *ordenados*.

La evolución de los lenguajes de programación desde 

Si es cierto que los lenguajes permitían escribir código más legible, pero cada programador tenía su propio estilo y el código era difícil de mantener (incluso para el propio autor). La falta de unos estándares de programación, los errores de planificación y los largos periodos de desarrollo llevaron a desconfiar del desarrollo de software y de los ordenadores como elementos tecnológicos que ayudas en al ser humano.

Desde los primeros pasos en la programación, eso no siempre era así (como veremos en unidades posteriores). Existen bucles, que repiten varias veces un mismo bloque de instrucciones, o instrucciones que (según unas determinadas condiciones) evitan (condicionales) su ejecución o saltan (instrucción GOTO) a otra parte del código.
{: .text-justify}

Esto suena a código caótico... ¡Y lo es! Y más aún cuando el programa crece, el número de líneas de código es ingente y resulta difícil de leer, arreglar y mantener[^1]. Esta fue la causa de la crisis del software de los años 70[^2] que mencionamos anteriormente.
{: .text-justify}

[Edsger W. Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra){:target="_blank"} lo advirtió en su carta "*GoTo Statement Considered Harmful*"[^3] que publicó en 1968 en la revista "*Communications of the ACM*".
{: .text-justify}

Veamos los tipos de programación que surgieron a partir de esta crisis.
{: .text-justify}

Estos paradigmas o estilos de programación no son excluyentes. Esto es, un paradigma puede usar los principios de otro/s.
{: .notice--info}
{: .text-justify}

## 3.1. Evolución histórica de los lenguajes de programación

Desde los gloriosos tiempos del **[ENIAC](https://es.wikipedia.org/wiki/ENIAC){:target="_blank"}** y el **[UNIVAC](https://es.wikipedia.org/wiki/UNIVAC){:target="_blank"}**, que se programaban accionando interruptores y palancas, han cambiado mucho las cosas.
{: .text-justify}

Los estilos de programación han evolucionado mediante un proceso continuo de investigación, ensayo y error, y podemos distinguir estos periodos:
{: .text-justify}

 - El periodo de programación desestructurada de las primeras décadas de la informática (más o menos, entre 1950 y 1970).
 - El periodo de la programación estructurada clásica (entre 1970 y 1990)
 - El periodo de la programación modular, que coexiste con la anterior (entre 1970 y 1990)
 - El periodo de la programación orientada a objetos (desde la década de 1990 hasta la actualidad)
 - El periodo de la programación dirigida por eventos, que coexiste con el anterior (desde 2000, aproximadamente, hasta la actualidad)

### 3.1.1. Programación desestructurada

Un programa de ordenador, como hemos dicho, es un conjunto de instrucciones que el ordenador puede entender y que ejecuta en un determinado orden. Generalmente, el orden de ejecución de las instrucciones es el mismo que el orden en el que el programador las escribió, pero en ocasiones, como veremos, es imprescindible repetir un conjunto de instrucciones varias veces (a esto se le llama técnicamente bucle), o saltar hacia delante o hacia atrás en la lista de instrucciones.
{: .text-justify}

La programación desestructurada clásica utiliza indistintamente bucles y saltos entremezclados hasta conseguir el correcto funcionamiento del programa. Debido a ésto, este tipo de programación es farragosa, confusa, e implica una alta probabilidad de errores. Estos defectos se hacen más patentes cuanto más grande es el programa, llegando a un punto en que el código se hace inmanejable (es lo que se suele denominar, muy gráficamente, código spaghetti)
{: .text-justify}

Este tipo de programación cayó en desuso tras la crisis del software de los años 70. Hoy se considera una mala práctica y debe ser evitada siempre.
{: .text-justify}

Los lenguajes de programación más antiguos pertenecen a esta época: [Fortran](https://es.wikipedia.org/wiki/Fortran){:target="_blank"}, [Cobol](https://es.wikipedia.org/wiki/COBOL){:target="_blank"}, [Simula](https://es.wikipedia.org/wiki/Simula){:target="_blank"}, [Basic](https://es.wikipedia.org/wiki/BASIC){:target="_blank"}... Muchos de ellos han evolucionado y cambiado con el tiempo para adaptarse a los nuevos paradigmas, y por eso aún siguen usándose, aunque de forma mucho más marginal que en sus buenos tiempos.
{: .text-justify}

### 3.1.2. Programación estructurada

El mismo Edsger W. Dijkstra, en los años 70 del siglo XX, propuso un paradigma que ofrecía los mecanismos para crear un código más organizado eliminando las limitaciones de la programación convencional: la **programación estructurada**.
{: .text-justify}

Se base en tres tipos de **estructuras básicas de control** que optimizan los recursos lógicos y físicos del ordenador: **secuencial**, **alternativa** e **iterativa**.
{: .text-justify}

Dichas estructuras (de ahí el nombre de programación **estructurada**) y las reglas de uso que implican se han preservado hasta nuestros días y las estudiaremos y usaremos en las siguientes unidades.
{: .text-justify}

A este tipo de lenguajes también se les llama a veces imperativos o de tercera generación.
{: .text-justify}

Los lenguajes estructurados más populares y significativos son [C](https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)){:target="_blank"}, [Pascal](https://es.wikipedia.org/wiki/Pascal_(lenguaje_de_programaci%C3%B3n)){:target="_blank"} o [Modula-2](https://es.wikipedia.org/wiki/Modula-2){:target="_blank"}. 
{: .text-justify}

Los lenguajes más antiguos, como **Fortran** o **Cobol**, evolucionaron para adaptarse a este paradigma, aunque seguían permitiendo hacer programación desestructurada si el programador así lo deseaba.
{: .notice--info}
{: .text-justify}

### 3.1.3. Programación modular

Consiste en dividir un programa complejo en varios subprogramas más sencillos que pueden interactuar entre sí. Cada subprograma es un **módulo** y son independientes del resto. Es decir, un módulo no debe interferir en otro/s módulo/s pero sí deben cooperar en la resolución del problema principal.
{: .text-justify}

Esta técnica de programación no es excluyente de la anterior, sino que se pueden utilizar conjuntamente. Es decir, un programa **puede ser a la vez modular y estructurado**. Y, de hecho, suele serlo.
{: .notice--info}
{: .text-justify}

Un módulo es un subprograma, por lo que hace el papel de un programa. Es decir, puede tener: una **sección de declaraciones** (variables, constantes, funciones, procedimientos, etc…), unos **datos de entrada** sobre los que realizar operaciones y **datos de salida**, que pueden usarse como entrada de otro módulo o bien contribuir directamente a la salida final del programa. Esto permite que el módulo sea **totalmente independiente** del programa principal.
{: .text-justify}

Cada módulo del programa debe tener claramente definidos su **finalidad**, los **límites** de su funcionalidad y una **interfaz** lo más sencilla posible que permita interactuar con él. De esta forma se consigue su **independencia funcional**, esto es, que no dependa de otros módulos para funcionar. Esta independencia se mide con dos parámetros:
{: .text-justify}

- **Cohesión**: tiene que ver con que cada módulo se refiera a un único proceso o entidad. La cohesión es el grado de relación entre los elementos del módulo, de forma que estén bien definidos y alineados con la finalidad o tarea que debe realizar. La **cohesión es alta** cuando cada módulo realiza una única tarea trabajando sobre una sola estructura de datos.
{: .text-justify}
- **Acoplamiento**: indica el **nivel de dependencia** entre los módulos, es decir, hasta qué punto un módulo necesita de otros para poder funcionar.
{: .text-justify}

Dos módulos están **desacoplados** cuando no se necesitan el uno al otro para hacer su trabajo. Pero esta situación es casi inalcanzable en casi cualquier proyecto de desarrollo. Por tanto, lo deseable es que un módulo tenga un acoplamiento bajo, ya que así se evita el **efecto onda** o **propagación**, donde un fallo en un módulo se propagaría al resto de módulos acoplados.
{: .text-justify}

La **cohesión** y el **acoplamiento** son parámetros usados en programación en general, no en la programación modular en particular.
{: .notice--info}
{: .text-justify}

### 3.1.4. Programación orientada a objetos

La POO es una evolución de la modular, cambiando por completo las estructuras lógicas. Es el paradigma más extendido en la actualidad (prácticamente no hay lenguaje de programación que no sea orientado a objetos).
{: .text-justify}

La principal diferencia con la programación estructurada es que la POO considera que tanto los datos como las operaciones sobre ellos están **totalmente interconectados**, por lo que deben encapsularse en un objeto:
{: .text-justify}

{% capture fig_img05 %}
![De binario a decimal]({{ '/assets/images/prog/ud01/ud01_prog_05_poo.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img05 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Comparativa entre prog. estructurada y POO sobre la relación de los datos y las operaciones que se realizan con ellos.</figcaption>
</figure>

En el ejemplo anterior, tanto los datos de una persona (nombre y edad) y las funciones que se pueden realizar sobre dichos datos (comprobar mayoría de edad) **se encapsulan en un objeto** Persona.
{: .text-justify}

Todos estos conceptos se entenderá en unidades posteriores.
{: .text-justify}

La programación orientada a objetos (OOP, por sus siglas en inglés, Object-Oriented Programming) es una evolución de las anteriores. Básicamente, se trata de programación estructurada y modular en la que las instrucciones y los datos se encierran en entidades llamadas clases, de las que luego se crean los objetos. Tanquilidad: por ahora no te preocupes de esos detalles. Pronto llegaremos.
{: .text-justify}

En la actualidad, todos los lenguajes imperativos modernos permiten algún tipo de orientación a objetos, y es el estilo de programación predominante en la industria desde finales del siglo XX. Incluso los lenguajes más clásicos (como C), han evolucionado para permitir la orientación a objetos (C++).
{: .text-justify}

Casi todos los lenguajes de los que hayas oído hablar recientemente son orientados a objetos en mayor o menor medida: C++, C#, Java, Python, Ruby, PHP (en sus primeras versiones, no lo era), Javascript (no confundir con Java), Visual Basic, Dephi, Rust, Go y un largo etcétera.
{: .text-justify}

Java, el lenguaje que aprenderemos a usar en este curso, está orientado a objetos y fue creado y diseñado con ese propósito. En Java no se puede desarrollar solo programación estructurada y modular: por narices hay que desarrollar los programas usando la orientación a objetos.
{: .text-justify}


### 3.1.5. Otros paradigmas

Tras la POO surgieron otros paradigmas[^4]: programación declarativa, AOP, programación funcional, programación lógica, etc.
{: .text-justify}

Por ejemplo, la **programación funcional** es uno de los paradigmas que más se ha asentado (tras la POO) en los distintos lenguajes de programación. En la programación funcional algunas sentencias o partes del código se tratan como si fueran **funciones matemáticas** (si, esas `f(x)` que habrás estudiado en tus años mozos)). Veremos algo en unidades posteriores.
{: .text-justify}

No te preocupes. Aunque nos vamos a centrar en POO vamos a sentar las bases para que puedas abordar otros paradigmas por tu cuenta con facilidad.
{: .text-justify}


*[POO]: Programación Orientada a Objetos
*[OOP]: Object-Oriented Programming
*[AOP]: Aspect-oriented programming
*[JDK]: Java Development Kit
*[JVM]: Java Virtual Machine
*[JRE]: Java Runtime Environment
*[IntelliJ]: IntelliJ IDEA Community Edition

[^1]: Esto se conoce como **código _spaghetti_**.

[^2]: Wikipedia contributors. (s/f). **_Crisis del software_**. Wikipedia, The Free Encyclopedia. <https://es.wikipedia.org/w/index.php?title=Crisis_del_software&oldid=164378777>{:target="_blank"}

[^3]: Wikipedia contributors. (2025, julio 28). **_Considered harmful_**. Wikipedia, The Free Encyclopedia. <https://en.wikipedia.org/w/index.php?title=Considered_harmful&oldid=1303063020>{:target="_blank"}

[^4]: Bustos, J. L. (2022, August 18). **_Paradigmas de programación: Guía completa 2025_**. KeepCoding Bootcamps. <https://keepcoding.io/blog/paradigmas-de-programacion/>{:target="_blank"}






---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
