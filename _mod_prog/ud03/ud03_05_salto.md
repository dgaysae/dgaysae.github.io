---
title: "Ud. 03 - Instrucciones de salto"
permalink: /mod_prog/ud03/salto/
excerpt: "La instrucciones de salto permiten alterar el funcionamiento habitual de los bucles, entre otras cosas."
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

# 5 Instrucciones de salto

¡Aviso! ¡No haga esto en sus casas sin ayuda de un profesional\! El uso inadecuado de estas técnicas puede acarrear el malfuncionamiento del sistema y la pérdida de miles de euros. 
{: .text-justify}

No es broma. Las instrucciones de salto están prohibidas. Todo aquel que las use injustificadamente será suspedido. 
{: .text-justify}

¿Que por qué existen entonces? Porque a veces, MUY POCAS VECES, son necesarias.  No daremos mucha información sobre ellas porque el objetivo es que las usemos lo menos posible.
{: .text-justify}

| **`break`** | La sentencia break sale abruptamente del bloque actual. No importa si estás en un if, en un switch o en un for. Sales afuera, rompiendo con ello la estructura del programa.  El único uso racional de esta instrucción es dentro de un switch. Cada case del switch debe terminar con un break o, de lo contrario, el switch se ejecutará desde el case actual hasta el final. |
| **`continue`** | La sentencia continue fuerza la finalización prematura de la iteración de un bucle. No se nos ocurre ninguna razón por la que debas usar una sentencia `continue`. Si te ves en la obligación de usarla, es que tu bucle está mal planteado, y punto. |
| **`return`** | Teóricamente, `return` debería ser la última instrucción de un método que devuelve algún valor. LA ÚLTIMA. Por tanto, es recomendable usar `return` con cuidado. Si te tienta ponerlo en mitad del código, varias veces y con distintos valores según determinadas condiciones, puedes hacerlo pero con mucho cuidado. Generalmente se solía asumir que cada algoritmo debería tener un único punto de entrada y un único punto de salida. Pero en la actualidad se utiliza mucho en **cláusulas guardián** (como veremos más adelante), para validar determinadas condiciones en el código y, de no cumplirlas, se hace un return y el bloque de código finaliza. |
{: .text-justify}

Veamos algunos ejemplos.

## Ejemplo 1 - break  
Escribir un programa que recorra los primeros 10 números (del 1 al 10) y los muestra por consola.  
Esto lo hará mientras no llegue al 5. Al alcanzar este número, debe salir del bucle.
{: .text-justify}

```java
public class EjemploBreak {
    public static void main(String[] args) {
        // El bucle está programado para contar del 1 al 10
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                System.out.println("Se alcanzó el 5. Rompiendo el bucle...");
                break; // Sale del bucle for
            }
            System.out.println("Número: " + i);
        }
        System.out.println("Bucle finalizado.");
    }
}
```

El bucle está planteado para recorrer desde el 1 al 10 (ambos incluidos) uno a uno y los muestra por pantalla (`System.out.println("Número: " + i);`). Pero dentro se indica que, si el número es 5, lo indica por consola y sale del bucle.
{: .text-justify}

El resultado será el siguiente:

```
Número: 1
Número: 2
Número: 3
Número: 4
Se alcanzó el 5. Rompiendo el bucle...
Bucle finalizado.
```

## Ejemplo 2 - continue  
Escribir un programa que recorra los primeros 20 números (del 0 al 19) y muestre por pantalla solo los impares.
{: .text-justify}

```java
public class EjemploContinue
{
    public static void main(String[] args) {
        // De los 20 primeros números, muestra solo los impares
        for (int i = 0; i < 20; i++) {
            if (i % 2 == 0) {

                continue;
            }

            // Si no es par, muestra el número por consola:
            System.out.println(i);
        }
    }
}
```

El bucle recorre todos los números desde el 0 hasta el 19. En cada iteración comprueba si el número es par. Si lo es, finaliza la iteración con `continue` y pasa a la iteración siguiente. En caso contrario (es impar) no entra al bloque de código del `if` y muestra el número por consola.
{: .text-justify}

El programa mostrará lo siguiente:

```
1
3
5
7
9
11
13
15
17
19
```

---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}
{: .text-justify}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
{: .text-justify}
