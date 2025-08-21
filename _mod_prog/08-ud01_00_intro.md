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
![Ejecución secuencial de instrucciones]({{ '/assets/images/prog/ud01/ud01_prog_01_algoritmo.png' | relative_url }})
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

### Sistema octal

### Sistema hexadecimal (hex)


---

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
