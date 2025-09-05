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

# 1. Introducción
Los ordenadores se han hecho para realizar tareas. Por su naturaleza (electrónica) manejan sólo dos posibles valores:

- **0** cuando no hay señal eléctrica.
- **1** en caso contrario.

Esta unidad de información que puede tomar dos posibles valores se conoce como **bit** (_**bi**nary digi**t**_). El ordenador realiza operaciones manejando bits. Esto lo hace sincronizando sus operaciones y los componentes que las realizan mediante un reloj interno que les envía pulsos. Por eso se dice que el ordenador es una **máquina síncrona**. 

El ordenador realiza estas tareas cargándolas en la **memoria principal** a la que accede directamente la CPU, tomando las instrucciones a ejecutar y los datos con los que operar.

## 1.1. Programa
Estas tareas están definidas en los distintos **programas**. Un programa es un conjunto de instrucciones ordenadas y comprensibles para un ordenador y de datos que pueden usar esas instrucciones, de manera que cuando se ejecutan en el ordenador se obtiene un resultado.

Cada programa tiene como finalidad resolver un problema realizando alguna tarea concreta:
- Calcular las nóminas de una empresa.
- Navegar por Internet ([Brave](https://brave.com/es/){:target="_blank"}, [Chrome](https://www.google.com/intl/es_es/chrome/){:target="_blank"}, [Firefox](https://www.firefox.com/es-ES/){:target="_blank"}, [Edge](https://www.microsoft.com/es-es/edge/){:target="_blank"}, etc.).
- Enviar correos (Thunderbird, Outlook, etc.).

En general, para que un programa realice su función, debe **comunicarse** de alguna manera **con el exterior** para recibir datos y devolver reusltados.

Esos datos pueden ser de distinta naturaleza, pero en todos los casos **deben convertirse en datos binarios** para que el ordenador pueda manejarlos.

## 1.2. Algoritmo
Un algoritmo es un **conjunto ordenado y finito de operaciones** que permiten hallar la solución a un problema. La implementación de algoritmos genera programas que puede ejecutar el ordenador y pueden procesar datos para devolver la solución:

{% capture fig_img00 %}
![Algoritmo]({{ '/assets/images/prog/ud01/ud01_prog_01_algoritmo.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img00 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption> </figcaption>
</figure>

### 1.2.1. Carecterísticas
Un algoritmo **no debe ser ambiguo** en sus resultados, ya que será la base del algoritmo posterior. Para que un algoritmo produzca un resultado en un **tiempo finito**, debe tener las siguientes características:
- **Preciso**: establece el orden en que se realizan los pasos de la operación.
- **Definido**: si se sigue dos o más veces (con los mismos datos), se obtiene siempre el mismo resultado.
- **Finito**: hay un número determinado y finito de pasos.
- **Independiente** del lenguaje de programación en el que se codificará posteriormente.

Veamos un ejemplo de algoritmo implementado en lenguaje natural:

- Inicio.
- Pedir un número N que represente la edad de una persona.
- Si N es **mayor o igual a 18**, la persona **ES MAYOR DE EDAD**.
- Si N es **menor que 18**, la persona **ES MENOR DE EDAD**.
- Fin del programa.

Si te fijas en el algoritmo podrás comprobar que cumple todas las características de un algoritmo.

## 1.3. Codificación de la información

Como se indicaba [al principio de este tema](#1-introducción), el ordenador sólo maneja datos en **binario**.

Tanto el binario (usado por los ordenadores) como el decimal (usado por los humanos) son **sistemas posicionales de numeración**.

Estos sistemas se componen de:
- Un conjunto de **símbolos** (números en este caso). El número de símbolos del sistema es su **base**.
- Una serie de **reglas** para combinarlos.
- En esas combinaciones de números, la **posición** de cada uno repercute en su valor.

**Sistemas posicionales**<br>En el sistema decimal (base 10), que usa los símbolos {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, si tenemos los dígitos 1 y 3 podemos crear los números 31 y 13. Así se puede entender que la posición de cada símbolo define el valor del número.
{: .notice--primary}

Veamos a continuación los sistemas de numeración que suelen utilizarse en informática.

### 1.3.1. Sistema binario
Usa un conjunto de dos símbolos (base 2): {0, 1}

A priori parece un sistema con pocas opciones, pero sólo con esos dos dígitos se pueden representar los mismos números que hacemos los humanos con el sistema decimal.

Veámoslo con el siguiente ejemplo:

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

El sismeta binario hace lo mismo aunque usando sólo dos símbolos (0 y 1). Pero se puede ver que un número entero como el **20** para nosotros puede interpretarlo un ordenador al convertirlo en **10100**. 

#### De binario a decimal
Para convertir un número binario en su equivalente decimal debemos tener en cuenta lo siguiente:
1. Cada dígito ocupa una posición en el número, empezando por la posición 0 de la derecha e incrementándola dígito a dígito hacia la izquierda.
2. Se multiplica cada dígito binario por 2 (la base o número de símbolos del sistema binario) elevado a la posición del dígito y, por último, se suman todos ellos.
3. El resultado es el número decimal equivalente al número binario inicial.

Observa estos pasos en el siguiente ejemplo:

{% capture fig_img01 %}
![De binario a decimal]({{ '/assets/images/prog/ud01/ud01_prog_02_binario.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img01 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Conversión de número binario a decimal.</figcaption>
</figure>

Al sumar todos ellos:

`16 + 0 + 0 + 2 + 1 = 19`

Así, el número binario **10011** es equivalente a **19** en decimal.

#### De decimal a binario
Si queremos comprobar cómo maneja el ordenador los números que usamos los humanos podemos convertir un número decimal en binario siguiente los pasos:

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

### 1.3.2. Sistemas intermedios

Si se observan los ejemplos anteriores, la base influye en la cantidad de dígitos necesarios para representar un número.

Así, si el número 19 sólo requiere 2 dígitos (el 1 y el 9) para representar dicho número, el sistema binario necesita 5 dígitos (10011). Para números más grandes, el equivalente binario podría resultar inmanejable para las personas ya que la cantidad de dígitos sería demasiado grande.

Por eso se idearon sistemas de numeración intermedios que permiten la representación del mismo dato con un número diferente de dígitos. Estos sistemas eran el **octal** y el **hexadecimal** (que veremos en el siguiente apartado).determina la  la reducida base (nº de símbolos) del binario hace necesarios más dígitos  has observado 

#### 1.3.2.1. Octal
El octal usal el conjunto de símbolos {0, 1, 2, 3, 4, 5, 6, 7}. Es decir, es de **base 8**. Por eso se conoce como octal: **8 símbolos en total**.

La conversión de octal a decimal y biceversa se consigue de la misma forma que en binario, pero usando los 8 símbolos y el 8 como base para las potencias y las divisiones.

#### 1.3.2.2. Hexadecimal (hex)
El hexadecimal usa 16 símbolos (base 16): {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}

Se usan letras ya que en nuestro sistema decimal no existen más símbolos, pero se puede intuir que:
- A = 10
- B = 11
- C = 12
- D = 13
- E = 14
- F = 15

Para ver todos los sistemas de un vistazo, aquí tienes una tabla de equivalencias de distintos números en todos los sistemas de numeración explicados:

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

**Ejercicio propuesto**<br> Convierte a decimal los siguientes binarios: 1001101, 11100 y 1001001.
{: .notice--primary}

**Ejercicio propuesto**<br> Convierte a decimal los siguientes octales: 42, 27 y 111.
{: .notice--primary}

**Ejercicio propuesto**<br> Convierte a decimal los siguientes hex: 4A, FF y 11.
{: .notice--primary}

### 1.4. Código ASCII
Efectivamente, también las letras pueden representarse en el sistema binario.

Para ello se creó el **[código ASCII](https://es.wikipedia.org/wiki/ASCII){:target="_blank"}**, que se basa en una tabla de equivalencia donde cada letra usa 8 bits para representarla.

Así, la letra **A** se representa con el binario 01000001 (65 en decimal) mientras que la **a** equivale a 01100001.

# 2. Resolución de problemas

La programación como tal requiere de conocimientos específicos en algún lenguaje de programación, pero eso no es lo esencial.

Un **programador** es aquella persona **capaz de encontrar soluciones** a determinados problemas mediante el diseño e implementación de programas.
{: .notice--info}

Veamos algunos conceptos relacionados con este objetivo.

## 2.1 Ingeniería del software 
El término de **ingeniería** aparece en el campo de la informática tras la **crisis del software**[^4]. Hasta entonces se programaba sin seguir metodologías, reglas, paradigmas o normas básicas. Cada cual con algunos conocimientos del funcionamiento de un ordenador podía escribir programas.

Pero el hardware evolucionaba muy deprisa y lor programas debían adaptarse. Y sin reglas a seguir... cada cual *hacía de su capa un sayo* y los programas se hacían más grandes, más difíciles de entender y, por tanto, de reparar y/o mantener.

Esto provocó dicha crisis y la reacción no se hizo esperar. Surge así la **ingeniería del software** para establecer modelos y paradigmas de programación que permitan desarrollar programas siguiendo unas normas de organización.

## 2.2 Ciclo de vida clásico 
Como en cualquier otra ingeniería, la del software comenzó por descomponer el desarrollo de un programa en fases, lo que se conoce como el **ciclo de vida del software**.

Existen muchos modelos de ciclos de vida y en su mayoría tienen en común las siguientes fases:

- **Análisis**.
  <br>
  El **análisis** sirve para responder a la pregunta *¿**QUÉ** problema hay que resolver?*

  Se trata de comprender cuál es el problema y los factores que le rodean e influyen en él.

  Por ejemplo, si nos encargan programar un carrito de la compra para una tienda *on-line* ¿quién puede añadir productos al carrito? ¿Existe un límite de productos? ¿Qué ocurre con los productos del carrito si el usuario sale de la aplicación sin realizar la compra?

  Es fundamental establecer qué información va a manejar el programa y cómo lo va a hacer de la forma más detallada posible. Por eso y para evitar conflictos con los clientes, todo esto se plasma en un **documento de requisitos**.

- **Diseño**.
  <br>
  El **diseño** responde a la pregunta *¿**CÓMO** se resuelve el problema?*

  En esta fase se realiza un diseño de la solución al problema planteado en la fase anterior. Un modelo de diseño muy habitual es el de **divide y vencerás** o **top-down** que consiste en dividir el problema principal en subproblemas más sencillos.

{% capture fig_img03 %}
![Divide y vencerás]({{ '/assets/images/prog/ud01/ud01_prog_04_top_down.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img03 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Top-down o "Divide y venderás". </figcaption>
</figure>

Es en esta fase, una vez definido el CÓMO, donde se decide el **lenguaje de programación** que se va a usar para desarrollar el software ya que se puede sopesar cuál es el que mejor se adapta a las necesidades del proyecto.

- **Especificación de módulos/clases**.
  <br>
  El *top-down* permite organizar mejor el trabajo ya que se puede implementar de forma independiente cada una de las soluciones a los subproblemas planteados en la fase de diseño.

  En nuestro caso, como veremos más adelante, se hará mediante la codificación de **clases** ya que usaremos el lenguaje Java orientado a objetos. Aunque dependiendo del paradigma o estilo de programación que se use puede ser, por ejemplo, un **módulo**[^1] en JavaScript, etc.
  
  En el caso de la POO (OOP en inglés) suelen usarse diagramas **[UML](https://es.wikipedia.org/wiki/Lenguaje_unificado_de_modelado){:target="_blank"}** para indicar qué clases se han de codificar, cómo se van a comportar y cómo se relacionan entre si.

  Estos diagramas se estudian en el módulo de **Entornos de desarrollo**, aunque los usaremos también en nuestras clases.
  
- **Codificación**.
  <br>
  En esta fase se materializan en **código fuente** las clases planteadas en la fase anterior.

  En otras palabras, aquí es donde se va a **picar código**.

- **Pruebas**.
  <br>
  Es imprescindible comprobar que el código fuente funciona correctamente. Por eso esta fase es esencial.

  Los errores básicos son:

  - De **sintaxis**. Son aquellos que ocurren cuando se escribe mal una instrucción y, por tanto, no se reconoce. Estos errores los detecta y subsana el propio programador mientras programa.
  - 

  Cada programador va realizando las pruebas oportunas conforme va codificando. Así detecta errores de **sintaxis**, que ocurren cuando se escribe mal una instrucción y, por tanto, no se reconoce como expresión válida.

  Pero esto **no es suficiente** ya que los programadores tienen una visión sesgada del funcionamiento de sus programas. Es decir, en muchas ocasiones no se ponen en la piel del usuario que utilizará ese programa. Por eso es conveniente que otras personas (*testers*) realicen baterías de pruebas guiándose en el análisis de requisitos y en diseño propuesto.

  La experiencia y el tiempo han dado pie al despliegue de una ciencia alrededor de las pruebas. Así, podemos encontrar distintos tipos de pruebas[^2]:
  
  - Tests unitarios.
  - Pruebas de integración.
  - Pruebas funcionales.
  - Pruebas de aceptación.
  - ...

- **Mantenimiento**.
  <br>
  Una vez en producción (el programa ya está siendo usado por los usuarios) pueden surgir errores no contemplados en la fase de pruebas, o la necesidad de replantear algunas funcionalidades en base a las necesidades del usuario o las limitaciones del sistema, etc.

  Es entonces cuando se hacen labores de **mantenimiento**, que pueden ser de distintos tipos:

  - **Correctivo**, para enmendar errores que no se hubieran detectado en la fase de pruebas).
  - **Perfectivo**, para mejorar el rendimiento o añadir más funciones.
  - **Adaptativo**, para adaptar el programa a otros entornos.



El ciclo de vida es un proceso extenso y que requiere el trabajo en equipo. Por eso durante el curso nos vamos a centrar en la **especificación de clases** y la **codificación**. El resto se estudian en otros módulos.
{: .notice--info}
 
## 2.3 El papel del programador 
Dentro del proceso del desarrollo de software, el programador tiene una tarea clara y precisa: codificar programas en base a las especificaciones que se le asignan.

Generalmente las fases de análisis y diseño suelen ser tarea para otros perfiles, aunque en la vida real el programador "*sirve para un roto y un descosido*". Es decir, que acaba haciendo de todo un poco.

# 3. Estilos/Paradigmas
Recordemos que un programa de ordenador es un conjunto de instrucciones que el ordenador puede entender y que ejecuta en un determinado orden.


Generalmente, el ordenador ejecuta ese código de la misma forma que nosotros leemos un libro. Es decir, el orden de ejecución de las instrucciones es el mismo en el que están escritas.

Desde los primeros pasos en la programación, eso no siempre era así (como veremos en unidades posteriores). Existen bucles, que repiten varias veces un mismo bloque de instrucciones, o instrucciones que (según unas determinadas condiciones) evitan (condicionales) su ejecución o saltan (instrucción GOTO) a otra parte del código.

Esto suena a caótico y desordenado... Y más aún cuando el programa crece, el número de líneas de código es ingente y resulta difícil de leer, arreglar y mantener[^3]. Y fue esta la causa de la crisis del software de los años 70[^4].

{% capture fig_img04 %}
![El código previo a la crisis de los 70 era un caos - Generada con Gemini]({{ '/assets/images/prog/ud01/ud01_prog_04_codigo_pre_crisis_70.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img04 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>El código previo a la crisis de los 70 era un caos - Generada con Gemini </figcaption>
</figure>

[Edsger Dijkstra](https://es.wikipedia.org/wiki/Edsger_Dijkstra){:target="_blank"} lo advirtió en su carta "*GoTo Statement Considered Harmful*"[^5] 


*[POO]: Programación Orientada a Objetos
*[OOP]: Object-Oriented Programming

[^1]: Módulos JavaScript. (s/f). **_MDN Web Docs_**. Recuperado el 22 de agosto de 2025, de <https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules>{:target="_blank"}
[^2]: Atlassian. (s/f). **_Los distintos tipos de pruebas en software_**. Atlassian. Recuperado el 26 de agosto de 2025, de <https://www.atlassian.com/es/continuous-delivery/software-testing/types-of-software-testing>{:target="_blank"}
[^3]: esto se conoce como **código _spaghetti_**.
[^4]: Wikipedia contributors. (s/f). **_Crisis del software_**. Wikipedia, The Free Encyclopedia. <https://es.wikipedia.org/w/index.php?title=Crisis_del_software&oldid=164378777>{:target="_blank"}
[^5]: Wikipedia contributors. (2025, julio 28). **_Considered harmful_**. Wikipedia, The Free Encyclopedia. <https://en.wikipedia.org/w/index.php?title=Considered_harmful>{:target="_blank"}





---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
