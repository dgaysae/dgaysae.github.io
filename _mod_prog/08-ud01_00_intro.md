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

# <span id="intro">Introducción</span>
Los ordenadores se han hecho para realizar tareas. Por su naturaleza (electrónica) manejan sólo dos posibles valores:

- **0** cuando no hay señal eléctrica.
- **1** en caso contrario.

Esta unidad de información que puede tomar dos posibles valores se conoce como **bit**. Es ordenador realiza operaciones manejando bits. Esto lo hace sincronizando sus operaciones y los componentes que las realizan mediante un reloj interno que les envía pulsos. Por eso se dice que el ordenador es una **máquina síncrona**. 

El ordenador realiza estas tareas cargándolas en la **memoria principal** a la que accede directamente la CPU, tomando las instrucciones a ejecutar y los datos con los que operar.

## Programa
Estas tareas están definidas en los distintos **programas**. Un programa es un conjunto de instrucciones ordenadas y comprensibles para un ordenador y de datos que pueden usar esas instrucciones, de manera que cuando se ejecutan en el ordenador se obtiene un resultado.

Cada programa tiene como finalidad resolver un problema realizando alguna tarea concreta:
- Calcular las nóminas de una empresa.
- Navegar por Internet ([Brave](https://brave.com/es/){:target="_blank"}, [Chrome](https://www.google.com/intl/es_es/chrome/){:target="_blank"}, [Firefox](https://www.firefox.com/es-ES/){:target="_blank"}, [Edge](https://www.microsoft.com/es-es/edge/){:target="_blank"}, etc.).
- Enviar correos (Thunderbird, Outlook, etc.).

En general, para que un programa realice su función, debe **comunicarse** de alguna manera **con el exterior** para recibir datos y devolver reusltados.

Esos datos pueden ser de distinta naturaleza, pero en todos los casos **deben convertirse en datos binarios** para que el ordenador pueda manejarlos.

## Algoritmo
Un algoritmo es un **conjunto ordenado y finito de operaciones** que permiten hallar la solución a un problema. La implementación de algoritmos genera programas que puede ejecutar el ordenador y pueden procesar datos para devolver la solución:

{% capture fig_img00 %}
![Algoritmo]({{ '/assets/images/prog/ud01/ud01_prog_01_algoritmo.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img00 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption> </figcaption>
</figure>

### Carecterísticas
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

## Codificación de la información

Como se indicaba [al principio de este tema](#intro), el ordenador sólo maneja datos en **binario**.

Tanto el binario (usado por los ordenadores) como el decimal (usado por los humanos) son **sistemas posicionales de numeración**.

Estos sistemas se componen de:
- Un conjunto de **símbolos** (números en este caso).
- Una serie de **reglas** para combinarlos.
- En esas combinaciones de números, la **posición** de cada uno repercute en su valor.

**Sistemas posicionales**<br>En el sistema decimal, que usa los símbolos {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, si tenemos los números 1 y 3 no es lo mismo crear el número 31 que el 13. La posición de cada símbolo define el valor del número.
{: .notice--primary}

Veamos a continuación los sistemas de numeración que suelen utilizarse en informática.

### Sistema binario
Usa un conjunto de dos símbolos: {0, 1}

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

### Sistemas intermedios

Si se observan los ejemplos anteriores, la base influye en la cantidad de dígitos necesarios para representar un número.

Así, si el número 19 sólo requiere 2 dígitos (el 1 y el 9) para representar dicho número, el sistema binario necesita 5 dígitos (10011). Para números más grandes, el equivalente binario podría resultar inmanejable para las personas ya que la cantidad de dígitos sería demasiado grande.

Por eso se idearon sistemas de numeración intermedios que permiten la representación del mismo dato con un número diferente de dígitos. Estos sistemas eran el **octal** y el **hexadecimal** (que veremos en el siguiente apartado).determina la  la reducida base (nº de símbolos) del binario hace necesarios más dígitos  has observado 

#### Octal
El octal usal el conjunto de símbolos {0, 1, 2, 3, 4, 5, 6, 7}. Por eso se conoce como octal: **8 símbolos en total**.

La conversión de octal a decimal y biceversa se consigue de la misma forma que en binario, pero usando los 8 símbolos y el 8 como base para las potencias y las divisiones.

#### Hexadecimal (hex)
El hexadecimal usa 16 símbolos: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}

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

### Código ASCII
Efectivamente, también las letras pueden representarse en el sistema binario.

Para ello se creó el **[código ASCII](https://es.wikipedia.org/wiki/ASCII){:target="_blank"}**, que se basa en una tabla de equivalencia donde cada letra usa 8 bits para representarla.

Así, la letra **A** se representa con el binario 01000001 (65 en decimal) mientras que la **a** equivale a 01100001.


## Unidades de medida

---

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
