---
title: "Unidad 01 - Introducción"
permalink: /mod_prog/ud01_00_intro/
excerpt: "Intoducción a la programación. Conceptos fundamentales."
last_modified_at: 2025-08-08T08:48:05-04:00
redirect_from:
  - /theme-setup/
toc: true
#toc_sticky: true
#toc_icon: "heart"  
---


En este tema presentamos los conceptos básicos sobre qué es un ordenador, cómo representa internamente la información y cómo la maneja para realizar operaciones y devolvernos los resultados.
{: .text-justify}

**Nota**<br>Muchos de estos conceptos se verán en otros módulos, así que no te preocupes si algo no queda explicado en detalle o no se profundiza en él.
{: .notice}
{: .text-justify}

Con eso en mente, aprenderemos qué herramientas se usan para programar en Java (JDK) y cómo convertir el código en un programa ejecutable (compiladores). Aprenderemos también qué es la máquina virtual de Java (JVM) y su función en la ejecución de programas Java en distintos sistemas.
{: .text-justify}

Esto servirá para que comencemos a hacer nuestros primeros programas en Java con el JDK y los compilaremos para que la JVM los ejecute.
{: .text-justify}

Finalmente abordaremos el tema de los tipos de datos *primitivos* de Java, las constantes, las variables, las expresiones y los operadores. Con esto ya tendremos a nuestra disposición los ladrillos básicos con los que, más adelante, poder levantar un edificio.
{: .text-justify}

# 1. Introducción

Los ordenadores se han hecho para realizar tareas siguiendo un conjunto de instrucciones finitas. Esto es, un **programa**. Por su naturaleza (electrónica) manejan sólo dos posibles valores:
{: .text-justify}

- **0** cuando no hay señal eléctrica.
- **1** en caso contrario.

Esta unidad de información, que puede tomar dos posibles valores, se conoce como **bit** (_**bi**nary digi**t**_). El ordenador realiza operaciones manejando bits. Esto lo hace sincronizando sus operaciones y los componentes que las realizan mediante un reloj interno que les envía pulsos. Por eso se dice que el ordenador es una **máquina síncrona**. 
{: .text-justify}

El ordenador realiza estas tareas cargándolas en la **memoria principal** a la que accede directamente la CPU, tomando las instrucciones a ejecutar y los datos con los que operar.
{: .text-justify}

## 1.1. Programa
Estas tareas están definidas en los distintos **programas**. Un programa es un conjunto de instrucciones ordenadas y comprensibles para un ordenador y de datos que pueden usar esas instrucciones, de manera que cuando se ejecutan en el ordenador se obtiene un resultado.
{: .text-justify}

Cada programa tiene como finalidad resolver un problema realizando alguna tarea concreta:
{: .text-justify}

 - Calcular las nóminas de una empresa.
 - Navegar por Internet ([Brave](https://brave.com/es/){:target="_blank"}, [Chrome](https://www.google.com/intl/es_es/chrome/){:target="_blank"}, [Firefox](https://www.firefox.com/es-ES/){:target="_blank"}, [Edge](https://www.microsoft.com/es-es/edge/){:target="_blank"}, etc.).
 - Enviar correos (Thunderbird, Outlook, etc.).

En general, para que un programa realice su función, debe **comunicarse** de alguna manera **con el exterior** para recibir datos y devolver reusltados.
{: .text-justify}

Esos datos pueden ser de distinta naturaleza, pero en todos los casos **deben convertirse en datos binarios** para que el ordenador pueda manejarlos.
{: .text-justify}

## 1.2. Algoritmo

Un algoritmo es un **conjunto ordenado y finito de operaciones** que permiten hallar la solución a un problema. La implementación de algoritmos genera programas que puede ejecutar el ordenador y pueden procesar datos para devolver la solución:
{: .text-justify}

{% capture fig_img00 %}
![Algoritmo]({{ '/assets/images/prog/ud01/ud01_prog_01_algoritmo.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img00 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption> </figcaption>
</figure>

### 1.2.1. Carecterísticas

Un algoritmo **no debe ser ambiguo** en sus resultados, ya que será la base del algoritmo posterior. Para que un algoritmo produzca un resultado en un **tiempo finito**, debe tener las siguientes características:
{: .text-justify}

 - **Preciso**: establece el orden en que se realizan los pasos de la operación.
 - **Definido**: si se sigue dos o más veces (con los mismos datos), se obtiene siempre el mismo resultado.
 - **Finito**: hay un número determinado y finito de pasos.
 - **Independiente** del lenguaje de programación en el que se codificará posteriormente.

Veamos un ejemplo de algoritmo implementado en lenguaje natural:
{: .text-justify}

 - Inicio.
 - Pedir un número N que represente la edad de una persona.
 - Si N es **mayor o igual a 18**, la persona **ES MAYOR DE EDAD**.
 - Si N es **menor que 18**, la persona **ES MENOR DE EDAD**.
 - Fin del programa.

Si te fijas en el algoritmo podrás comprobar que cumple todas las características de un algoritmo.
{: .text-justify}

## 1.3. Codificación de la información

Como se indicaba [al principio de este tema](#1-introducción), el ordenador sólo maneja datos en **binario**.
{: .text-justify}

Tanto el binario (usado por los ordenadores) como el decimal (usado por los humanos) son **sistemas posicionales de numeración**.
{: .text-justify}

Estos sistemas se componen de:
{: .text-justify}

 - Un conjunto de **símbolos** (números en este caso). El número de símbolos del sistema es su **base**.
 - Una serie de **reglas** para combinarlos.
 - En esas combinaciones de números, la **posición** de cada uno repercute en su valor.

**Sistemas posicionales**<br>En el sistema decimal (base 10), que usa los símbolos {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, si tenemos los dígitos 1 y 3 podemos crear los números 31 y 13. Así se puede entender que la posición de cada símbolo define el valor del número.
{: .notice--primary}
{: .text-justify}

Veamos a continuación los sistemas de numeración que suelen utilizarse en informática.
{: .text-justify}

### 1.3.1. Sistema binario

Usa un conjunto de dos símbolos (base 2): {0, 1}
{: .text-justify}

A priori parece un sistema con pocas opciones, pero sólo con esos dos dígitos se pueden representar los mismos números que hacemos los humanos con el sistema decimal.
{: .text-justify}

Veámoslo con el siguiente ejemplo:
{: .text-justify}

| Decimal | Binario  |
| ----    | ---- |
| 0 | 0 |
| 1 | 1 |
| 2 | 10 |
| 3 | 11 |
| 4 | 100 |
| 5 | 101 |
| 6 | 110 |
| 7 | 111 |
| 8 | 1000 |
| 9 | 1001 |
| 10 | 1010 |
| 11 | 1011 |
| 12 | 1100 |
| ... | ... |
| 19 | 10011 |
| 20 | 10100 |
| 21 | 10101 |

Si observas la columna **Decimal** verás que para contar empezamos recorriendo cada símbolo desde el primero (0) hasta el último (9). Para continuar, se añade el símbolo 1 al principio y se vuelve a hacer el mismo recorrido (1**0**, 1**1**, 1**2**...) y así sucesivamente. Al cubrir todos los números posibles de dos dígitos y llegar al último (99), volvemos a añadir un 1 al principio y comenzamos de nuevo el ciclo.
{: .text-justify}

El sismeta binario hace lo mismo aunque usando sólo dos símbolos (0 y 1). Pero se puede ver que un número entero como el **20** para nosotros puede interpretarlo un ordenador al convertirlo en **10100**. 
{: .text-justify}

#### De binario a decimal

Para convertir un número binario en su equivalente decimal debemos tener en cuenta lo siguiente:
{: .text-justify}

 1. Cada dígito ocupa una posición en el número, empezando por la posición 0 de la derecha e incrementándola dígito a dígito hacia la izquierda.
 2. Se multiplica cada dígito binario por 2 (la base o número de símbolos del sistema binario) elevado a la posición del dígito y, por último, se suman todos ellos.
 3. El resultado es el número decimal equivalente al número binario inicial.

Observa estos pasos en el siguiente ejemplo:
{: .text-justify}

{% capture fig_img01 %}
![De binario a decimal]({{ '/assets/images/prog/ud01/ud01_prog_02_binario.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img01 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Conversión de número binario a decimal.</figcaption>
</figure>

Al sumar todos ellos:
{: .text-justify}

`16 + 0 + 0 + 2 + 1 = 19`
{: .text-center}

Así, el número binario **10011** es equivalente a **19** en decimal.
{: .text-justify}

#### De decimal a binario

Si queremos comprobar cómo maneja el ordenador los números que usamos los humanos podemos convertir un número decimal en binario siguiente los pasos:
{: .text-justify}

 1. Dividir el número decimal y sus sucesivos cocientes entre 2 hasta llegar al último cocinete válido.
 2. Comprobarás que tantos los restos de las sucesivas divisiones como el último cociente son binarios (sólo hay ceros y unos). Para componer el número binario equivalente se toma el cociente y los restos en ese orden y se escriben en el orden opuesto para componer el binario.

{% capture fig_img02 %}
![De decimal a binario]({{ '/assets/images/prog/ud01/ud01_prog_03_binario.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img02 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Conversión de número decimal a binario.</figcaption>
</figure>

De esa forma podemos comprobar que **19** es equivalente a **10011**.
{: .text-justify}

### 1.3.2. Sistemas intermedios

Si se observan los ejemplos anteriores, la base influye en la cantidad de dígitos necesarios para representar un número.
{: .text-justify}

Así, si el número 19 sólo requiere 2 dígitos (el 1 y el 9) para representar dicho número, el sistema binario necesita 5 dígitos (10011). Para números más grandes, el equivalente binario podría resultar inmanejable para las personas ya que la cantidad de dígitos sería demasiado grande.
{: .text-justify}

Por eso se idearon sistemas de numeración intermedios que permiten la representación del mismo dato con un número diferente de dígitos. Estos sistemas eran el **octal** y el **hexadecimal** (que veremos en el siguiente apartado).determina la  la reducida base (nº de símbolos) del binario hace necesarios más dígitos  has observado 
{: .text-justify}

#### 1.3.2.1. Octal

El octal usal el conjunto de símbolos {0, 1, 2, 3, 4, 5, 6, 7}. Es decir, es de **base 8**. Por eso se conoce como octal: **8 símbolos en total**.
{: .text-justify}

La conversión de octal a decimal y biceversa se consigue de la misma forma que en binario, pero usando los 8 símbolos y el 8 como base para las potencias y las divisiones.
{: .text-justify}

#### 1.3.2.2. Hexadecimal (hex)

El hexadecimal usa 16 símbolos (base 16): {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}
{: .text-justify}

Se usan letras ya que en nuestro sistema decimal no existen más símbolos, pero se puede intuir que:
{: .text-justify}

 - A = 10
 - B = 11
 - C = 12
 - D = 13
 - E = 14
 - F = 15

Para ver todos los sistemas de un vistazo, aquí tienes una tabla de equivalencias de distintos números en todos los sistemas de numeración explicados:
{: .text-justify}

| Decimal | Binario | Octal | Hex |
| ----    | ---- | ---- | ---- |
| 0 | 0000 | 00 | 0 |
| 1 | 0001 | 01 | 1 |
| 2 | 0010 | 02 | 2 |
| 3 | 0011 | 03 | 3 |
| 4 | 0100 | 04 | 4 |
| 5 | 0101 | 05 | 5 |
| 6 | 0110 | 06 | 6 |
| 7 | 0111 | 07 | 7 |
| 8 | 1000 | 10 | 8 |
| 9 | 1001 | 11 | 9 |
| 10 | 1010 | 12 | A |
| 11 | 1011 | 13 | B |
| 12 | 1100 | 14 | C |
| 13 | 1101 | 15 | D |
| 14 | 1110 | 16 | E |
| 15 | 1111 | 17 | F |

**Ejercicio propuesto**<br> Convierte a octal y hex los siguientes decimales: 42, 27 y 111.
{: .notice--primary}
{: .text-justify}

**Ejercicio propuesto**<br> Convierte a decimal los siguientes binarios: 1001101, 11100 y 1001001.
{: .notice--primary}
{: .text-justify}

**Ejercicio propuesto**<br> Convierte a decimal los siguientes octales: 42, 27 y 111.
{: .notice--primary}
{: .text-justify}

**Ejercicio propuesto**<br> Convierte a decimal los siguientes hex: 4A, FF y 11.
{: .notice--primary}

### 1.4. Código ASCII

Efectivamente, también las letras pueden representarse en el sistema binario.
{: .text-justify}

Para ello se creó el **[código ASCII](https://es.wikipedia.org/wiki/ASCII){:target="_blank"}**, que se basa en una tabla de equivalencia donde cada letra usa 8 bits para representarla.
{: .text-justify}

Así, la letra **A** se representa con el binario 01000001 (65 en decimal) mientras que la **a** equivale a 01100001.
{: .text-justify}

# 2. Resolución de problemas

La programación como tal requiere de conocimientos específicos en algún lenguaje de programación, pero eso no es lo esencial.
{: .text-justify}

Un **programador** es aquella persona **capaz de encontrar soluciones** a determinados problemas mediante el diseño e implementación de programas.
{: .notice--info}
{: .text-justify}

Veamos algunos conceptos relacionados con este objetivo.
{: .text-justify}

## 2.1 Ingeniería del software 

El término de **ingeniería** aparece en el campo de la informática tras la **crisis del software**[^4]. Hasta entonces se programaba sin seguir metodologías, reglas, paradigmas o normas básicas. Cada cual con algunos conocimientos del funcionamiento de un ordenador podía escribir programas.
{: .text-justify}

Pero el hardware evolucionaba muy deprisa y lor programas debían adaptarse. Y sin reglas a seguir... cada cual *hacía de su capa un sayo* y los programas se hacían más grandes, más difíciles de entender y, por tanto, de reparar y/o mantener.
{: .text-justify}

Esto provocó dicha crisis y la reacción no se hizo esperar. Surge así la **ingeniería del software** para establecer modelos y paradigmas de programación que permitan desarrollar programas siguiendo unas normas de organización.
{: .text-justify}

## 2.2 Ciclo de vida clásico 
Como en cualquier otra ingeniería, la del software comenzó por descomponer el desarrollo de un programa en fases, lo que se conoce como el **ciclo de vida del software**.
{: .text-justify}

Existen muchos modelos de ciclos de vida y en su mayoría tienen en común las siguientes fases:
{: .text-justify}

- **Análisis**.
  <br>
  El **análisis** sirve para responder a la pregunta *¿**QUÉ** problema hay que resolver?*
  {: .text-justify}


  Se trata de comprender cuál es el problema y los factores que le rodean e influyen en él.
  {: .text-justify}


  Por ejemplo, si nos encargan programar un carrito de la compra para una tienda *on-line* ¿quién puede añadir productos al carrito? ¿Existe un límite de productos? ¿Qué ocurre con los productos del carrito si el usuario sale de la aplicación sin realizar la compra?
  {: .text-justify}

  Es fundamental establecer qué información va a manejar el programa y cómo lo va a hacer de la forma más detallada posible. Por eso y para evitar conflictos con los clientes, todo esto se plasma en un **documento de requisitos**.
  {: .text-justify}

- **Diseño**.
  <br>
  El **diseño** responde a la pregunta *¿**CÓMO** se resuelve el problema?*
  {: .text-justify}

  En esta fase se realiza un diseño de la solución al problema planteado en la fase anterior. Un modelo de diseño muy habitual es el de **divide y vencerás** o **top-down** que consiste en dividir el problema principal en subproblemas más sencillos.
  {: .text-justify}

  {% capture fig_img03 %}
  ![Divide y vencerás]({{ '/assets/images/prog/ud01/ud01_prog_04_top_down.png' |   relative_url }})
  {% endcapture %}
  
<figure>
  {{ fig_img03 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Top-down o "Divide y venderás". </figcaption>
</figure>
  
  Es en esta fase, una vez definido el CÓMO, donde se decide el **lenguaje de programación** que se va a usar para desarrollar el software ya que se puede sopesar cuál es el que mejor se adapta a las necesidades del proyecto.
  {: .text-justify}

- **Especificación de módulos/clases**.
  <br>
  El *top-down* permite organizar mejor el trabajo ya que se puede implementar de forma independiente cada una de las soluciones a los subproblemas planteados en la fase de diseño.
  {: .text-justify}

  En nuestro caso, como veremos más adelante, se hará mediante la codificación de **clases** ya que usaremos el lenguaje Java orientado a objetos. Aunque dependiendo del paradigma o estilo de programación que se use puede ser, por ejemplo, un **módulo**[^1] en JavaScript, etc.
  {: .text-justify}
  
  En el caso de la POO (OOP en inglés) suelen usarse diagramas **[UML](https://es.wikipedia.org/wiki/Lenguaje_unificado_de_modelado){:target="_blank"}** para indicar qué clases se han de codificar, cómo se van a comportar y cómo se relacionan entre si.
  {: .text-justify}

  Estos diagramas se estudian en el módulo de **Entornos de desarrollo**, aunque los usaremos también en nuestras clases.
  {: .text-justify}

- **Codificación**.
  <br>
  En esta fase se materializan en **código fuente** las clases planteadas en la fase anterior.
  {: .text-justify}

  En otras palabras, aquí es donde se va a **picar código**.
  {: .text-justify}

- **Pruebas**.
  <br>
  Es imprescindible comprobar que el código fuente funciona correctamente. Por eso esta fase es esencial.
  {: .text-justify}

  Los errores básicos son:
  {: .text-justify}

  - De **sintaxis**. Son aquellos que ocurren cuando se escribe mal una instrucción y, por tanto, no se reconoce. Estos errores los detecta y subsana el propio programador mientras programa. 
  {: .text-justify}

  Cada programador va realizando las pruebas oportunas conforme va codificando. Así detecta errores de **sintaxis**, que ocurren cuando se escribe mal una instrucción y, por tanto, no se reconoce como expresión válida.
  {: .text-justify}

  Pero esto **no es suficiente** ya que los programadores tienen una visión sesgada del funcionamiento de sus programas. Es decir, en muchas ocasiones no se ponen en la piel del usuario que utilizará ese programa. Por eso es conveniente que otras personas (*testers*) realicen baterías de pruebas guiándose en el análisis de requisitos y en diseño propuesto.
  {: .text-justify}

  La experiencia y el tiempo han dado pie al despliegue de una ciencia alrededor de las pruebas. Así, podemos encontrar distintos tipos de pruebas[^2]:
  {: .text-justify}

  - Tests unitarios.
  - Pruebas de integración.
  - Pruebas funcionales.
  - Pruebas de aceptación.
  - ...

- **Mantenimiento**.
  <br>
  Una vez en producción (el programa ya está siendo usado por los usuarios) pueden surgir errores no contemplados en la fase de pruebas, o la necesidad de replantear algunas funcionalidades en base a las necesidades del usuario o las limitaciones del sistema, etc.
  {: .text-justify}

  Es entonces cuando se hacen labores de **mantenimiento**, que pueden ser de distintos tipos:
  {: .text-justify}

  - **Correctivo**, para enmendar errores que no se hubieran detectado en la fase de pruebas).
  - **Perfectivo**, para mejorar el rendimiento o añadir más funciones.
  - **Adaptativo**, para adaptar el programa a otros entornos.

  El ciclo de vida es un proceso extenso y que requiere el trabajo en equipo. Por eso durante el curso nos vamos a centrar en la **especificación de clases** y la **codificación**. El resto se estudian en otros módulos.
  {: .notice--info}
  {: .text-justify}

## 2.3 El papel del programador 

Dentro del proceso del desarrollo de software, el programador tiene una tarea clara y precisa: codificar programas en base a las especificaciones que se le asignan.
{: .text-justify}

Generalmente las fases de análisis y diseño suelen ser tarea para otros perfiles, aunque en la vida real el programador "*sirve para un roto y un descosido*". Es decir, que acaba haciendo de todo un poco.
{: .text-justify}

# 3. Estilos/Paradigmas

Recordemos que un programa de ordenador es un conjunto de instrucciones que el ordenador puede entender y que ejecuta en un determinado orden.
{: .text-justify}

Generalmente, el ordenador ejecuta ese código de la misma forma que nosotros leemos un libro. Es decir, el orden de ejecución de las instrucciones es el mismo en el que están escritas.
{: .text-justify}

Desde los primeros pasos en la programación, eso no siempre era así (como veremos en unidades posteriores). Existen bucles, que repiten varias veces un mismo bloque de instrucciones, o instrucciones que (según unas determinadas condiciones) evitan (condicionales) su ejecución o saltan (instrucción GOTO) a otra parte del código.
{: .text-justify}

Esto suena a código caótico... ¡Y lo es! Y más aún cuando el programa crece, el número de líneas de código es ingente y resulta difícil de leer, arreglar y mantener[^3]. Esta fue la causa de la crisis del software de los años 70[^4] que mencionamos anteriormente.
{: .text-justify}

[Edsger W. Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra){:target="_blank"} lo advirtió en su carta "*GoTo Statement Considered Harmful*"[^5] que publicó en 1968 en la revista "*Communications of the ACM*".
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

Tras la POO surgieron otros paradigmas[^6]: programación declarativa, AOP, programación funcional, programación lógica, etc.
{: .text-justify}

Por ejemplo, la **programación funcional** es uno de los paradigmas que más se ha asentado (tras la POO) en los distintos lenguajes de programación. En la programación funcional algunas sentencias o partes del código se tratan como si fueran **funciones matemáticas** (si, esas `f(x)` que habrás estudiado en tus años mozos)). Veremos algo en unidades posteriores.
{: .text-justify}

No te preocupes. Aunque nos vamos a centrar en POO vamos a sentar las bases para que puedas abordar otros paradigmas por tu cuenta con facilidad.
{: .text-justify}

# 4. Los lenguajes de programación

Podemos definir un lenguaje de programación como **un conjunto de símbolos que se combinan de acuerdo con una sintaxis bien definida para posibilitar la transmisión de instrucciones a la CPU**[^7].
{: .text-justify}

## 4.1. Lenguajes de alto y bajo nivel

Dicho de otro modo: el lenguaje de programación es el código en el que podemos transmitir al ordenador las órdenes de un programa. 
{: .text-justify}

Lenguajes de programación hay muchos, cada uno con sus ventajas e inconvenientes. Conviene, por tanto, clasificarlos en categorías. Nosotros haremos dos clasificaciones: 
{: .text-justify}

 * La primera, atendiendo al **nivel de abstracción** del lenguaje, distinguirá entre lenguajes de bajo nivel y de alto nivel.
 * La segunda, según el **proceso de traducción** a código máquina, distinguirá entre lenguajes interpretados, compilados y ensamblados.

### 4.1.1. Lenguajes de alto nivel

El ordenador, como es sabido, solo puede manejar ceros y unos, es decir, código o **lenguaje binario**. Los seres humanos, por el contrario, utilizamos un lenguaje mucho más complejo, con montones de símbolos y reglas sintácticas y semánticas, que denominaremos **lenguaje natural**. 
{: .text-justify}

Entre estos dos extremos (lenguaje binario y lenguaje natural) se encuentran los lenguajes de programación. Tienen cierto parecido con el lenguaje natural, pero son mucho más reducidos y estrictos en su sintaxis y semántica, para acercarse a las limitaciones del lenguaje binario. 
{: .text-justify}

Hay lenguajes de programación muy próximos al lenguaje binario: a éstos los llamamos **lenguajes de bajo nivel** de abstracción. Y los hay más próximos al lenguaje natural: son los **lenguajes de alto nivel** de abstracción. 
{: .text-justify}

Podemos definir un lenguaje de programación como un **conjunto de símbolos que se combinan utilizando una sintaxis estricta para transmitir instrucciones a un ordenador**.
{: .text-justify}

Dicho de otro modo: el lenguaje de programación es el código con el que podemos pasarle al ordenador las órdenes de un programa. Hasta ahora hemos usado el lenguaje natural para escribir esas órdenes. Ahora llega el momento de traducir ese lenguaje natural en un código real, el lenguaje de programación, comprensible por la máquina.
{: .text-justify}

Lenguajes de programación hay muchos, cada uno con sus ventajas e inconvenientes. Conviene, por tanto, clasificarlos en categorías. Encontrarás habitualmente estas tres clasificaciones:
{: .text-justify}

 - La primera, según la época del lenguaje y el paradigma (o estilo) de programación que permite.
 - La segunda, atendiendo al nivel de abstracción del lenguaje, distinguirá entre lenguajes de bajo nivel y de alto nivel.
 - La tercera, según el proceso de traducción a código máquina, distinguirá entre lenguajes interpretados, compilados y ensamblados.

Hay otras formas de clasificar los lenguajes, desde luego, pero por ahora nos servirá para orientarnos.
{: .text-justify}

### 4.1.2. Lenguajes de bajo nivel
Son los lenguajes más cercanos a la máquina. Los programas directamente escritos en código binario se dice que están en **lenguaje máquina** que, por lo tanto, *es el lenguaje de más bajo nivel que existe*. 
{: .text-justify}

Las instrucciones del lenguaje máquina realizan **tareas muy sencillas**, como, por ejemplo, sumar dos números, detectar qué tecla se ha pulsado en el teclado o escribir algo en la pantalla del ordenador. Cuando se **combinan adecuadamente muchas de estas instrucciones** sencillas se obtiene un **programa de ordenador** que puede realizar tareas muy complejas.  
{: .text-justify}

A pesar de la simplicidad de las instrucciones del lenguaje máquina, la forma de escribirlas es muy complicada, ya que hay que hacerlo en binario. En los primeros años de la informática los ordenadores se programaban directamente en lenguaje máquina, lo cual convertía la tarea de programar en una verdadera pesadilla. Por ejemplo, una instrucción para sumar dos números en lenguaje máquina puede tener este aspecto: 
{: .text-justify}

```
110100100101110010100010001001111010010110110 
```
{: .text-center}

Cuando los ordenadores fueron haciéndose más potentes, pronto se vio que con el lenguaje máquina *no se podrían crear programas que aprovechasen esa potencia* por la sencilla razón de que era demasiado difícil programar así: no se podía hacer nada demasiado complicado porque el cerebro humano no está "diseñado" para pensar en binario.  
{: .text-justify}

Surgió entonces la idea de *utilizar el propio ordenador como traductor*: ¿por qué no escribir una instrucción como la anterior, que suma dos números, de una forma más parecida al lenguaje humano y que luego un pequeño programa de ordenador se encargue de traducir esa instrucción a su correspondiente ristra de ceros y unos? Así apareció el **lenguaje ensamblador**, cuyas instrucciones son equivalentes a las del lenguaje máquina, pero se escriben con palabras similares a las del lenguaje humano. Por ejemplo, para sumar dos números, la instrucción en ensamblador puede ser algo como: 
{: .text-justify}

```
ADD D1, D2 
```
{: .text-center}
 
Los lenguajes de bajo nivel se caracterizan por ser **dependientes del hardware** de la máquina. Es decir: un programa escrito en lenguaje máquina o en ensamblador para una arquitectura Intel Core i5 no funcionará, por ejemplo, en un iMac o en una tableta con Android a menos que sea modificado sustancialmente. Incluso puede tener serios problemas para funcionar en máquinas de la misma familia pero con el resto del hardware diferente, o con un sistema operativo distinto. 
{: .text-justify}

## 4.2. Ensambladores, compiladores e intérpretes

### 4.2.1. Ensambladores

Se llaman ensambladores los programas encargados de **traducir los programas escritos en ensamblador** a código binario.
{: .text-justify}

Fíjate que tanto el programa traductor como el lenguaje se llaman del mismo modo: ensamblador.
{: .text-justify}

Como el lenguaje ensamblador es muy próximo al binario, estos traductores son programas relativamente sencillos.
{: .text-justify}

{% capture fig_img06 %}
![Proceso de ensamblado de un programa]({{ '/assets/images/prog/ud01/ud01_prog_06_ensamblador.png' | relative_url }})
{% endcapture %}
{: .text-center}

<figure>
  {{ fig_img06 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Proceso de ensamblado de un programa.</figcaption>
</figure>

### 4.2.2. Compiladores

El compilador es un programa que **traduce el código de alto nivel a código binario**. Es, por tanto, parecido al ensamblador, pero mucho más complejo, ya que las diferencias entre los lenguajes de alto nivel y el código binario son muy grandes.
{: .text-justify}

{% capture fig_img07 %}
![Proceso de compilación de un programa]({{ '/assets/images/prog/ud01/ud01_prog_07_compilador.png' | relative_url }})
{% endcapture %}
{: .text-center}

<figure>
  {{ fig_img07 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Proceso de compilación de un programa.</figcaption>
</figure>

El programa escrito en lenguaje de alto nivel se denomina **programa o código fuente**. El programa traducido a código binario se llama **programa o código objeto**. Por lo tanto, el compilador se encarga de convertir el programa fuente en un programa objeto. 
{: .text-justify}

Una vez que se ha obtenido el programa objeto ya no es necesario volver a realizar la traducción (o compilación), a menos que se haga alguna modificación en el programa fuente, en cuyo caso habría que volver a compilarlo. 
{: .text-justify}

El programa objeto, una vez generado, puede ejecutarse en la máquina en la que fue compilado, o en otra de similares características (procesador, sistema operativo, etc.). Cuando se usa programación modular, puede ser necesario un proceso previo de **enlace** de los diferentes módulos, pero de esto ya hablaremos más adelante. 
{: .text-justify}

### 4.2.3. Intérpretes

El intérprete es un programa que **traduce el código de alto nivel a código binario** pero, a diferencia del compilador, lo hace **en tiempo de ejecución**. Es decir, no se hace un proceso previo de traducción de todo el programa fuente a binario, sino que se va traduciendo y ejecutando instrucción por instrucción. 
{: .text-justify}

{% capture fig_img08 %}
![Intérprete compilando y ejecutando línea a línea]({{ '/assets/images/prog/ud01/ud01_prog_08_interprete.png' | relative_url }})
{% endcapture %}
{: .text-center}

<figure>
  {{ fig_img08 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Intérprete compilando y ejecutando línea a línea.</figcaption>
</figure>

### 4.2.4. Compiladores Vs. Intérpretes

**El intérprete es notablemente más lento que el compilador**, ya que realiza la traducción al mismo tiempo que la ejecución. Además, esa traducción se lleva a cabo siempre que se ejecuta el programa, mientras que el compilador sólo la hace una vez. Por estos motivos, un mismo programa interpretado y compilado se ejecuta mucho más despacio en el primer caso. 
{: .text-justify}

La ventaja de **los intérpretes es que hacen que los programas sean más portables**. Así, un programa compilado en una máquina PC bajo Windows no funcionará en un Macintosh, o en un PC bajo Linux, a menos que se vuelva a compilar el programa fuente en el nuevo sistema. En cambio, un programa interpretado funcionará en todas las plataformas, siempre que dispongamos del intérprete en cada una de ellas. 
{: .text-justify}

**JavaScript** es un ejemplo de lenguaje interpretado. Esto permite que los scripts puedan funcionar en cualquier máquina que disponga de un navegador de Internet capaz de interpretarlos, algo común en todos los sistemas actuales. En cambio, **C/C++** es un lenguaje compilado, lo que hace que los programas desarrollados con estos lenguajes se ejecuten más rápido que sus equivalentes en JavaScript, aunque obliga a volver a compilarlos si se desea ejecutarlos en una máquina con diferente hardware o diferente sistema operativo.
{: .text-justify}

(De hecho, muchos programas en C no podrían escribirse en JavaScript, pero esa es otra historia)
{: .text-justify}


### 4.2.5. La semicompilación: el caso peculiar de Java

En el diseño original del lenguaje Java estaba la premisa de hacer un lenguaje altamente portable (como son todos los lenguajes interpretados) y, al mismo tiempo, altamente eficiente (como son, por regla general, los lenguajes compilados). Prueba de que lo consiguieron es la ubicuidad actual del lenguaje Java en todo tipo de soportes y plataformas. 
{: .text-justify}

Para ello, los diseñadores de Java idearon lo que podríamos denominar una semicompilación, de modo que el código fuente se compila en un código binario, pero no el código binario de una máquina real, sino el de una máquina ficticia. Ese código binario se denomina **bytecode**. 
{: .text-justify}

Esa máquina ficticia, con su CPU, sus registros y todo su hardware, se emula mediante un software especial denominado **máquina virtual de Java** (JVM = Java Virtual Machine). La JVM toma el código binario del bytecode y lo interpreta, traduciéndolo en tiempo de ejecución al código binario real del sistema sobre el que se está trabajando. 
{: .text-justify}

La ventaja de este procedimiento es que la traducción del bytecode al código binario real es mucho más rápida que una interpretación tradicional, porque el bytecode ya es un código binario. Por lo tanto, la JVM se limita a formatear las instrucciones del bytecode para hacerlas comprensibles por la máquina real, y no tiene que realizar una traducción completa. 
{: .text-justify}

Por ese motivo, un programa escrito en Java y compilado en una arquitectura cualquiera, funcionará sin problemas al ejecutarlo en cualquier otra arquitectura, con el único requisito de haber instalado la JVM en el ordenador de destino. 
{: .text-justify}

Todo este proceso se describe en las siguientes figuras. Por ejemplo, supongamos que tenemos una plataforma Intel con un sistema Windows y el JDK instalado, y en ella desarrollamos una aplicación escrita en Java y la compilamos:
{: .text-justify}

{% capture fig_img09 %}
![Intérprete compilando y ejecutando línea a línea](https://docs.oracle.com/javase/tutorial/figures/getStarted/getStarted-compiler.gif)
{% endcapture %}
{: .text-center}

<figure>
  {{ fig_img09 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Compilar a bytecode y ejecutar dicho bytecode en la JVM.</figcaption>
</figure>

Hemos obtenido un programa “semicompilado” en un código binario de una máquina virtual. Nótese que hubiéramos obtenido exactamente lo mismo si estuviéramos trabajando bajo GNU/Linux, MacOS, Android o cualquier otro sistema. 
{: .text-justify}

Ahora, nos llevamos ese programa “semicompilado” a alguna otra plataforma, digamos un smartphone con Android y la JVM correctamente instalada. Bastará con lanzar la aplicación para que la JVM tome el control y realice la traducción final, al modo de los antiguos intérpretes, del bytecode al código binario nativo de nuestro smartphone: 
{: .text-justify}

{% capture fig_img09 %}
![Ejecución de bytecode]({{ '/assets/images/prog/ud01/ud01_prog_10_bytecode.png' | relative_url }})
{% endcapture %}
{: .text-center}

<figure>
  {{ fig_img09 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Ejecución de bytecode.</figcaption>
</figure>

Este doble proceso de “semicompilación” seguida de “semiinterpretacion” consigue el doble objetivo planteado en el diseño de Java: ser un lenguaje altamente portable al mismo tiempo que razonablemente eficiente.
{: .text-justify}

### 4.2.6. Máquinas virtuales

Para entender completamente el funcionamiento de Java y su singular proceso de semicompilación, es necesario tener claro en concepto de máquina virtual, que introducimos a continuación. 
{: .text-justify}

Una **máquina virtual** es un programa informático que emula a un ordenador y puede ejecutar programas como si fuese un ordenador real. La máquina virtual puede emular un ordenador real o ficticio (esto último puede tener sentido con propósitos didácticos) 
{: .text-justify}

Una característica esencial de las máquinas virtuales es que los procesos que ejecutan están limitados por los recursos proporcionados por la máquina virtual. Es decir, si la máquina virtual "tiene" 1 GB de RAM, por ejemplo, los programas que ejecutemos en ella sólo pueden usar 1 GB, independientemente de que la máquina real tenga disponible más memoria física. 
{: .text-justify}

Uno de los usos domésticos más extendidos de las máquinas virtuales es ejecutar sistemas operativos para "probarlos". De esta forma podemos ejecutar un sistema operativo que queramos probar (GNU/Linux, por ejemplo) desde nuestro sistema operativo habitual (MacOS, por ejemplo) sin necesidad de instalarlo directamente en nuestra computadora y sin miedo a que se desconfigure el sistema operativo primario. 
{: .text-justify}

### 4.2.7. Tipos de máquina virtual

Las máquinas virtuales se pueden clasificar en dos grandes categorías según su funcionalidad y su grado de equivalencia a una verdadera máquina. Son las **máquinas virtuales de sistema o de proceso**.
{: .text-justify}

Veamos ambos tipos de máquinas:
{: .text-justify}

**A. Máquinas virtuales de sistema (System Virtual Machine)**

Las máquinas virtuales de sistema, también llamadas máquinas virtuales de hardware, permiten a la máquina física subyacente "dividirse" entre varias máquinas virtuales, cada una ejecutando su propio sistema operativo. A la capa de software que permite la virtualización se la llama monitor de máquina virtual o "hypervisor". Un monitor de máquina virtual puede ejecutarse o bien directamente sobre el hardware o bien sobre un sistema operativo ("host operating system").
{: .text-justify}

Estas máquinas virtuales permiten a varios sistemas operativos distintos pueden coexistir sobre la misma computadora, en completo aislamiento el uno del otro.
{: .text-justify}

Varias máquinas virtuales, cada una con su propio sistema operativo, pueden ser utilizadas en servidores para ejecutar diferentes servicios en la misma máquina de manera completamente aislada y compartiendo los recursos de una única computadora. Esto contribuye a reducir el coste total de las instalaciones necesarias para mantener los servicios, dado que permiten ahorrar en hardware.
{: .text-justify}

Además, la virtualización es una excelente opción hoy día, ya que los PCs de sobremesa en la mayoría de los casos están siendo infrautilizados (gran capacidad de disco duro, memoria RAM, etc). Al virtualizar, la necesidad de nuevas máquinas en una ya existente permite un ahorro considerable de los costos asociados (energía, mantenimiento, espacio, etc).
{: .text-justify}

La mayoría de los programas de virtualización conocidos pertenecen a esta categoría de máquina virtual. Entre los más famosos están:
{: .text-justify}

- **[VMWare](https://www.vmware.com/products/desktop-hypervisor){:target="_blank"}**. Ha sido el software de virtualización por excelencia durante muchos años. Es software privativo, aunque tiene una versión gratuita. Funciona en Windows, Linux y Mac.
{: .text-justify}
- **[VirtualBox](https://www.virtualbox.org/){:target="_blank"}** de Oracle (antes Sun). Funciona también en Windows, Linux y Mac. Tiene una versión Open Source (VirtualBox OSE), y es el que vamos a usar nosotros este curso.
{: .text-justify}
- **[VirtualPC](https://support.microsoft.com/es-es/topic/descripci%C3%B3n-de-windows-virtual-pc-262c8961-90e5-1125-654f-d87cd5ba16f8){:target="_blank"}**. Está desarrollado por Microsoft, por lo que es una excelente opción para virtualizar sistemas Windows. No funciona bajo Linux, aunque sí bajo Mac. 
{: .text-justify}

**B. Máquinas virtuales de proceso (Process Virtual Machine)**

Una máquina virtual de proceso, a veces llamada "máquina virtual de aplicación", se ejecuta como un proceso normal dentro de un sistema operativo y soporta un solo proceso. La máquina se inicia automáticamente cuando se lanza el proceso que se desea ejecutar y se detiene para cuando éste finaliza. Su objetivo es el de proporcionar un entorno de ejecución independiente de la plataforma de hardware y del sistema operativo, que oculte los detalles de la plataforma subyacente y permita que un programa se ejecute siempre de la misma forma sobre cualquier plataforma. 
{: .text-justify}

**La máquina virtual Java es de este tipo**. Por lo tanto, cada vez que lanzamos un programa compilado en el bytecode de Java, la JVM emula el hardware necesario para realizar la ejecución (interpretación) del código y ejecutar así la aplicación independientemente del hardware real.  
{: .text-justify}

Otra máquina virtual con la misma filosofía y muy extendida es la del entorno .Net de Microsoft.
{: .text-justify}

# 5. Herramientas para desarrollar con Java

## 5.1. El JDK

El JDK (Java Development Kit) es un paquete de software que contiene todo lo necesario para desarrollar aplicaciones escritas en Java, excepto un editor de texto, del que hablaremos más adelante. 
{: .text-justify}

En concreto, el **JDK** incluye:
{: .text-justify}

- La biblioteca de clases estándar de Java.
- La JVM o máquina virtual Java (java).
- El compilador de java (javac).
- Un desensamblador de clases (javap).
- Un depurador de consola (jdb).
- El generador automático de documentación (javadoc).
- Un visor de applets (appletviewer) 

No te preocupes si no sabes aún qué son algunas de estas cosas. Lo irás aprendiendo a lo largo del curso. ¡No se conquistó Roma en un solo día! 
{: .text-justify}

Todos los elementos de la lista, excepto el primero, constituyen lo que se llama **JRE**. Son los componentes necesarios para compilar y ejecutar aplicaciones java. Pero, para desarrollar programas nuevos, necesitamos además la biblioteca de clases. El conjunto de JRE más biblioteca de clases es lo que se denomina JDK. 
{: .text-justify}

Una vez instalado el JDK, y dependiendo de la versión de Java, deberás revisar el valor de dos variables de entorno para que el compilador funcione correctamente: 
{: .text-justify}

- **Variable PATH**: debe apuntar al directorio bin del JDK. Si no la cambias, estarás obligado compilar siempre desde el directorio bin, lo cual es bastante engorroso.
{: .text-justify}

- **Variable CLASSPATH**: debe apuntar al directorio raíz en donde estén las clases del JDK (solo para versiones antiguas del JDK) 
{: .text-justify}

La última versión del JDK puede **descargarse gratuitamente del sitio web de Oracle**. ¡Cuidado! ¡Sólo del sitio web del desarrollador original! No confíes en el JDK que puedan ofrecerte en otros lugares salvo que sean de absoluta confianza. 
{: .text-justify}

En el caso de los sistemas GNU/Linux, la mayoría de las distribuciones proporcionan una imagen del JDK en sus repositorios oficiales. Sin embargo, ésta puede no ser la última versión del JDK liberada por Oracle, por lo que deberás recurrir a la web del fabricante si quieres disponer de la misma. 
{: .text-justify}

## 5.2. Editores de texto

Decíamos más arriba que el JDK incluye todo lo necesario para desarrollar aplicaciones en Java, excepto un editor de texto. 
{: .text-justify}

El editor de textos nos servirá para teclear el código de nuestro programa para posteriormente compilarlo y ejecutarlo. Puedes escoger el editor de texto que prefieras, solo teniendo en cuenta dos cosas: 
{: .text-justify}

- Que guarde los archivos en texto plano, no formateado. En este sentido, no son apropiados los editores de texto como Microsoft Word o LibreOffice Writer, aunque pueden usarse si no tienes otra cosa a mano.
{: .text-justify}
- Que permita seleccionar la codificación de caracteres. En general, preferiremos usar la codificación UTF-8, pero puede haber casos en los que necesitemos otra. Esto será útil, sobre todo, cuando desarrolles aplicaciones que accedan a bases de datos o que generen páginas web. Casi todos los editores modernos lo permiten. 
{: .text-justify}

Además, es muy interesante que el editor reconozca el lenguaje en el que estamos programando y nos coloree las palabras clave, identificadores, etc. Eso facilita enormemente la lectura y comprensión del código que estamos desarrollando. Así que, no, no es buena idea usar el bloc de notas de Windows. 
{: .text-justify}

Editores que cumplan estas características hay miles, y muchos son gratuitos. Por ejemplo:
{: .text-justify}

- En entornos Windows: Notepad++, UltraEdit, Syncplify, Akelpad, TotalEdit, Metapad…
- En entornos Linux: Mousepad, Leafpad, gEdit, kwrite, emacs…
- En entornos Mac: Editra, TextWrangler, Xemacs, BBEdit...  

## 5.3. Entornos integrados de desarrollo

Finalmente, está la posibilidad de usar el Entorno Integrado de Desarrollo (IDE, por sus siglas en inglés). Esta es la elección de la inmensa mayoría de los programadores profesionales, y con seguridad también será la tuya dentro de unos meses. 
{: .text-justify}

Un IDE es **una herramienta que proporciona, dentro del mismo interfaz, acceso a todas las funciones anteriores**: edición del código fuente, compilación, depuración, ejecución... En realidad, lo que hace es invocar de forma transparente a las herramientas del JDK, de modo que el programador se ahorra ese trabajo. Así, resulta mucho más cómodo y rápido programar con la ayuda de un IDE que compilando e invocando los comandos del JDK desde la consola. 
{: .text-justify}

Sin embargo, consideramos (y, con nosotros, mucha gente) que, para un aprendiz, es mucho más ilustrativo trabajar con las herramientas básicas que hemos descrito aquí para adquirir una visión global del funcionamiento del JDK. Más adelante, cuando esto esté claro, habrá tiempo de saborear las bondades de un buen IDE. 
{: .text-justify}

Algunos IDEs son monstruos *devorarrecursos* que disponen de herramientas adicionales potentísimas, como autocompleción de sentencias, generador automático de código, analizador del rendimiento, refactorizador, soporte multilenguaje... Otros son más simples y ligeros, y disponen de un editor sencillo y unos pocos menús para guardar, editar y compilar. 
{: .text-justify}

**La elección del IDE es algo muy personal**. Llegarás a una conclusión después de tener alguna experiencia con varios de ellos. Por ahora, te vamos mencionando algunos de los más populares para el desarrollo de aplicaciones Java, para que sus nombres de vayan sonando: 
{: .text-justify}

- Entre los IDEs pesados: [IntelliJ](https://www.jetbrains.com/es-es/idea/download/){:target="_blank"},  [Eclipse](https://eclipseide.org/){:target="_blank"} y [NetBeans](https://netbeans.apache.org/front/main/index.html){:target="_blank"}.
- Entre los IDEs ligeros: [Geany](https://www.geany.org/){:target="_blank"} y [BlueJ](https://www.bluej.org/){:target="_blank"} 



*[POO]: Programación Orientada a Objetos
*[OOP]: Object-Oriented Programming
*[AOP]: Aspect-oriented programming
*[JDK]: Java Development Kit
*[JVM]: Java Virtual Machine
*[JRE]: Java Runtime Environment
*[IntelliJ]: IntelliJ IDEA Community Edition

[^1]: Módulos JavaScript. (s/f). **_MDN Web Docs_**. Recuperado el 22 de agosto de 2025, de <https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules>{:target="_blank"}
[^2]: Atlassian. (s/f). **_Los distintos tipos de pruebas en software_**. Atlassian. Recuperado el 26 de agosto de 2025, de <https://www.atlassian.com/es/continuous-delivery/software-testing/types-of-software-testing>{:target="_blank"}
[^3]: esto se conoce como **código _spaghetti_**.
[^4]: Wikipedia contributors. (s/f). **_Crisis del software_**. Wikipedia, The Free Encyclopedia. <https://es.wikipedia.org/w/index.php?title=Crisis_del_software&oldid=164378777>{:target="_blank"}
[^5]: Wikipedia contributors. (2025, julio 28). **_Considered harmful_**. Wikipedia, The Free Encyclopedia. <https://en.wikipedia.org/w/index.php?title=Considered_harmful&oldid=1303063020>{:target="_blank"}
[^6]: Bustos, J. L. (2022, August 18). **_Paradigmas de programación: Guía completa 2025_**. KeepCoding Bootcamps. <https://keepcoding.io/blog/paradigmas-de-programacion/>{:target="_blank"}
[^7]: QUERO, E., Fundamentos de programación, Ed. Paraninfo, 2003





---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
