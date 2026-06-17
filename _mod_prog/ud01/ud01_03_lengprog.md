---
title: "Ud. 01 - Los lenguajes de programación"
permalink: /mod_prog/ud01/lenguajes_programacion/
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


# 4. Los lenguajes de programación

Podemos definir un lenguaje de programación como **un conjunto de símbolos que se combinan de acuerdo con una sintaxis bien definida para posibilitar la transmisión de instrucciones a la CPU**[^1].
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


*[POO]: Programación Orientada a Objetos
*[OOP]: Object-Oriented Programming
*[AOP]: Aspect-oriented programming
*[JDK]: Java Development Kit
*[JVM]: Java Virtual Machine
*[JRE]: Java Runtime Environment
*[IntelliJ]: IntelliJ IDEA Community Edition

[^1]: QUERO, E., Fundamentos de programación, Ed. Paraninfo, 2003





---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
