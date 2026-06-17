---
title: "Ud. 02 - Apéndice. Entrada/Salida por consola"
permalink: /mod_prog/ud02/apendice/
excerpt: "Cómo se pueden recibir datos enviados por el usuario a través de la consola, o mostrarle resultados, mediante código en Java."
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

# 6 Un apéndice: entrada y salida por consola en Java

Aunque no tiene una relación directa con los asuntos tratados en esta unidad, vamos a terminar mencionando la **entrada de datos por teclado y la salida de datos por consola**, porque son imprescindibles para realizar cualquier programa que empiece a hacer cosas interesantes.
{: .text-justify}

Ambos dispositivos se manejan mediante la **clase System**. Esta clase está en el paquete java.lang, que se carga automáticamente en todas las aplicaciones Java, sin necesidad de hacer import (en el ejemplo de la sección anterior, por lo tanto, hicimos un poco de trampa al ejecutar import java.lang.System) 
{: .text-justify}

La clase System contiene dos objetos static que se crean automáticamente al ejecutar cualquier programa Java, y que se destruyen ellos solitos al terminar. Estos objetos son: 
{: .text-justify}

* **System.out**: para manejar la salida estándar (consola) 
{: .text-justify}

* **System.in**: para manejar la entrada estándar (teclado) 
{: .text-justify}

* **System.err**: para manejar la salida de errores. No la usaremos de momento. 
{: .text-justify}

La salida a través del objeto System.out y, en concreto, del método System.out.println(), ya la has visto en multitud de ejemplos. Así que ahora nos centraremos en la entrada:
{: .text-justify}

```java
char c;  
try {  
  c = (char) System.in.read();   
} catch (Excepcion e) {   
  e.printStackTrace();   
}
```

¡Uff! A menudo se dice que Java no es un lenguaje adecuado para aprender a programar, y esta es una de las ocasiones en las que uno piensa que es completamente cierto. Es arduo explicar a un principiante qué demonios pone ahí. Digamos que Java tiene una obsesión un pelín delirante por la seguridad, y que ese mamotreto que ves ahí arriba es un reflejo de ello. 
{: .text-justify}

Ese trozo de código sirve para leer un carácter, un simple carácter, por el teclado, y almacenarlo en la variable `c`. Todo ello se envuelve en un bloque try-catch de manejo de excepciones, de forma que si ocurre algo inesperado (como que el usuario teclea veinte caracteres en lugar de uno, o que haya pulsado CTRL-C, o que la CPU haya explotado, o vaya usted a saber qué), el programa es capaz de detectarlo y reaccionar adecuadamente. 
{: .text-justify}

**No te agobies ahora por los detalles**. Recuerda que, para hacer una entrada por teclado, necesitas copiar y pegar el código de más arriba, y adaptarlo a tus variables. Ya volveremos más adelante, cuando estemos preparados, sobre el manejo de excepciones y el bloque `try-catch`. 
{: .text-justify}

Si lo que quieres es algo más versátil, como **leer una cadena de caracteres completa** desde el teclado, existen un par de métodos.  
{: .text-justify}

**Método 1: `console()`**

```java
String dato = System.console().readLine();
```

**Método 2: `BufferedReader`**

```java
InputStreamReader isr = new InputStreamReader(System.in);  
BufferedReader buff = new BufferedReader(isr);  
String dato = buff.readLine();
```

El primero es más sencillo, ¿no? Dónde va a parar. ¿Por qué tanto lío para leer unos cuantos caracteres del teclado? Bien, la biblioteca de clases de Java está diseñada para ser muy robusta y versátil, y eso hace que haya que pagar algún pequeño precio en cuanto a usabilidad y legibilidad en ocasiones. 
{: .text-justify}

La forma ortodoxa de hacer la entrada de datos con Java es la segunda: crear un objeto Reader para leer los caracteres de la entrada estándar. Es mucho más seguro y funcionará en cualquier circunstancia, pero requiere varios esfuerzos adicionales:
{: .text-justify}

* Hay que importar el paquete [java.io](http://java.io).*
{: .text-justify}

* Hay que encerrar obligatoriamente las instrucciones de lectura en un bloque try-catch
{: .text-justify}

* Y, como has visto, hay que escribir mucho más código 
{: .text-justify}

Por último, un ejemplo un poco más completo para que puedas ver la entrada por teclado en acción:
{: .text-justify}

```java
System.out.println("Por favor, teclea tu nombre: ");  
String nombre = System.console().readLine();  
System.out.println("Ahora teclea tu edad: ");  
int edad = Integer.parseInt(System.console().readLine());  
System.out.println("Hola, " + nombre + ", tienes " + edad + " años");
```

Sí, lo has adivinado: **Integer.parseInt()** convierte a int una cadena de caracteres, porque todo lo que se recibe desde el teclado es procesado como cadena. Así que hemos de convertirlo antes de usarlo. Teóricamente, la conversión puede fallar y debería estar dentro de un bloque try-catch, pero esa... esa es otra historia. 
{: .text-justify}

La mala noticia es que console().readLine() podría fallar en algunas consolas. Para hacer un código totalmente fiable, necesitas recurrir al método 2, que quedaría más o menos así (observa cómo hemos resumido en una línea la creación de los objetos InputStreamReader y BufferedReader):
{: .text-justify}

```java
import java.io.*;  
...  
  BufferedReader buff = new BufferedReader(new InputStreamReader([System.in](http://System.in)));  
  try {  
    String nombre = buff.readLine();  
  }  
  catch (Exception e) {  
    e.printStackTrace();  
  }  
  System.out.println("Ahora teclea tu edad: ");  
  int edad = Integer.parseInt(buff.readLine());  
  System.out.println("Hola, " + nombre + ", tienes " + edad + " años");
```

**Recuerda**: para hacer entrada por teclado, por el momento las instrucciones son: copia, pega y adapta.
{: .notice--warning}
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
