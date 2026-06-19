---
title: "Ud. 03 - Estructura repetitivas (bucles)"
permalink: /mod_prog/ud03/repetitiva/
excerpt: "La estructuras repetitivas permiten ejecutar bloques de código un número determinado de veces."
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

# 4 Estructuras repetitivas (bucles)

Los ordenadores se diseñaron inicialmente para **realizar tareas sencillas y repetitivas**. El ser humano es de lo más torpe acometiendo tareas repetitivas: pronto le falla la concentración y comienza a tener descuidos. Los ordenadores programables, en cambio, pueden realizar la misma tarea muchas veces por segundo durante años y nunca se aburren (o, al menos, hasta hoy no se ha tenido constancia de ello) 
{: .text-justify}

La **estructura repetitiva**, por tanto, reside en la naturaleza misma de los ordenadores y consiste, simplemente, en **repetir varias veces un conjunto de instrucciones**. Las estructuras repetitivas también se llaman **bucles, lazos o iteraciones**. Nosotros preferiremos la denominación "bucle". 
{: .text-justify}

Los bucles tienen que repetir un conjunto de instrucciones **un número finito de veces**. Si no, nos encontraremos con un **bucle infinito** y el algoritmo no funcionará. En rigor, ni siquiera será un algoritmo, ya que no cumplirá la condición de finitud. 
{: .text-justify}

El **bucle infinito** es un peligro que acecha constantemente a los programadores y nos toparemos con él muchas veces a lo largo de este curso. Para conseguir que el bucle se repita sólo un número finito de veces, tiene que existir una **condición de salida** del mismo, es decir, una situación en la que ya no sea necesario seguir repitiendo las instrucciones. 
{: .text-justify}

Por tanto, los bucles se componen, básicamente, de dos elementos:
{: .text-justify}

* *un **cuerpo del bucle** o conjunto de instrucciones que se ejecutan repetidamente*
{: .text-justify}

* *una **condición de salida** para dejar de repetir las instrucciones y continuar con el resto del algoritmo* 
{: .text-justify}

Dependiendo de dónde se coloque la condición de salida (al principio o al final del conjunto de instrucciones repetidas), y de la forma de realizarla, existen tres tipos de bucles, aunque hay que resaltar que, con el primer tipo, se puede programar cualquier estructura iterativa. Pero con los otros dos, a veces el programa resulta más claro y legible. Los tres tipos de bucle se denominan: 
{: .text-justify}

* ***Bucle "mientras... hacer"**: la condición de salida está al principio del bucle.* 
{: .text-justify}

* ***Bucle "hacer... mientras"**: la condición de salida está al final del bucle.* 
{: .text-justify}

* ***Bucle "para"**: la condición de salida está al principio y se realiza con un contador automático.*
{: .text-justify}

## 4.1 Bucle "mientras... hacer"

El bucle "mientras... hacer" o, simplemente, "mientras", es una estructura que se repite **mientras una condición sea verdadera**. La condición, en forma de expresión lógica, se escribe en la cabecera del bucle, y a continuación aparecen las acciones que se repiten (cuerpo del bucle):
{: .text-justify}

```java
while (condición) { 
    acciones (cuerpo del bucle) 
}
```

{% capture fig_img00 %}
![Estructura WHILE]({{ '/assets/images/prog/ud03/ud03_06_while.png' | relative_url }})
{% endcapture %}

<figure style="width: 350px" class="align-center">
  {{ fig_img00 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Estructura repetitiva "Mientras... hacer" o while.</figcaption>
</figure>

Cuando se llega a una instrucción **mientras**, se evalúa la condición. Si es verdadera, se realizan las acciones y, al terminar el bloque de acciones, se regresa a la instrucción **mientras** (he aquí el bucle o lazo). Se vuelve a evaluar la condición y, si sigue siendo verdadera, vuelve a repetirse el bloque de acciones. Y así, sin parar, hasta que la condición se haga falsa. 
{: .text-justify}

### Ejemplo  
Escribir un algoritmo que muestre en la pantalla todos los números enteros entre 1 y 100
{: .text-justify}

```java
{  
    int cont = 0;   
    while (cont < 100) {   
        cont = cont + 1;  
        System.out.println(cont);   
    }   
}
```

Aquí observamos el uso de ** un contador (`cont`) en la condición de salida** de un bucle, un elemento muy común en estas estructuras. Observa la evolución del algoritmo: 
{: .text-justify}

* **`int cont = 0`**. Se declara y se le asigna el valor 0 a la variable **`cont`** (contador) 
{: .text-justify}

* **`while (cont <= 100)`**. Condición de salida del bucle. Es verdadera porque **`cont`** vale 0, y por lo tanto es menor o igual que 100. 
{: .text-justify}

* **`cont = cont + 1`**. Se incrementa el valor de **`cont`** en una unidad. Como valía 0, ahora vale 1.
{: .text-justify}

* **`println(cont)`**. Se escribe por pantalla el valor de **`cont`**, que será 1. 
{: .text-justify}

Después, el flujo del programa regresa a la instrucción **mientras**, ya que estamos en un bucle, y se vuelve a evaluar la condición. Ahora **`cont`** vale 1, luego sigue siendo verdadera. Se repiten las instrucciones del bucle, y **`cont`** se incrementa de nuevo, pasando a valer 2. Luego valdrá 3, luego 4, y así sucesivamente. 
{: .text-justify}

La condición de salida del bucle hace que éste se repita mientras **`cont`** valga menos de 100. De este modo nos aseguramos de escribir todos los números hasta el 100. 
{: .text-justify}

Lo más problemático a la hora de diseñar un bucle es, por lo tanto, **pensar bien su condición de salida**, porque si la condición de salida nunca se hiciera falsa, caeríamos en un bucle infinito. Por lo tanto, **la variable implicada en la condición de salida debe sufrir alguna modificación en el interior del bucle**; si no, la condición siempre sería verdadera. En nuestro ejemplo, la variable **`cont`** se modifica en el interior del bucle: por eso llega un momento, después de 100 repeticiones, en el que la condición se hace falsa y el bucle termina. 
{: .text-justify}

## 4.2 Bucle "Hacer... mientras"

El bucle de tipo "Hacer... mientras" es muy similar al bucle "mientras", con la salvedad de que **la condición de salida se evalúa al final del bucle**, y no al principio, como a continuación veremos. Todo bucle "Hacer... mientras" puede escribirse como un bucle "mientras", pero al revés no siempre sucede.  
{: .text-justify}

La forma de la estructura "hacer... mientras" es la que sigue:
{: .text-justify}

```java
do {
    acciones (cuerpo del bucle)
}  while (condicion);
```

{% capture fig_img01 %}
![Estructura DO-WHILE]({{ '/assets/images/prog/ud03/ud03_07_do_while.png' | relative_url }})
{% endcapture %}

<figure style="width: 300px" class="align-center">
  {{ fig_img01 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Estructura repetitiva "Hacer... mientras" o do-while.</figcaption>
</figure>

Cuando el ordenador encuentra un bucle de este tipo, ejecuta las acciones escritas entre **{** y **}** y, después, evalúa la **condición**, que debe ser de tipo lógico. Si el resultado es falso, se vuelven a repetir las acciones. Si el resultado es verdadero, el bucle se repite. Si es falso, se sale del bucle y se continúa ejecutando la siguiente instrucción.  
{: .text-justify}

Existe, pues, una diferencia fundamental con respecto al bucle "mientras": **la condición se evalúa al final**. Por lo tanto, las acciones del cuerpo de un bucle "hacer... mientras" se ejecutan **al menos una vez**, cuando en un bucle "mientras" es posible que no se ejecuten ninguna (si la condición de salida es falsa desde el principio) 
{: .text-justify}

### Ejemplo  
Diseñar un algoritmo que escriba todos los números enteros entre 1 y 100, pero esta vez utilizando un bucle "hacer... mientras" en lugar de un bucle "mientras"

```java
{  
  int cont = 0;  
  **do** {  
    cont = cont + 1;  
    System.out.println(cont);  
  }  
  **while** (cont < 100);  
}
```

Observa que el algoritmo es básicamente el mismo que en el ejemplo anterior, pero hemos cambiado el lugar de la condición de salida. 
{: .text-justify}

## 4.3 Bucle "para"

En muchas ocasiones se conoce de antemano el número de veces que se desean ejecutar las acciones del cuerpo del bucle. Cuando el número de repeticiones es fijo, lo más cómodo es usar un bucle "para", aunque sería perfectamente posible sustituirlo por uno "mientras". 
{: .text-justify}

La estructura "para" **repite las acciones del bucle un número prefijado de veces e incrementa automáticamente una variable contador** en cada repetición. Su forma general es:
{: .text-justify}

```java
for (inicialización; condición; incremento)
{
    acciones
}
```

{% capture fig_img02 %}
![Estructura FOR]({{ '/assets/images/prog/ud03/ud03_08_for.png' | relative_url }})
{% endcapture %}

<figure style="width: 300px" class="align-center">
  {{ fig_img02 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Estructura repetitiva "Para" o for.</figcaption>
</figure>

La **inicialización** consiste en la asignación del valor inicial a una variable contador (por ejemplo, cont). La primera vez que se ejecutan las acciones del cuerpo del bucle, la variable cont tendrá el valor especificado en la **inicialización**. En la siguiente repetición, la variable contador se incrementará según lo expresado en la sección **incremento** (por ejemplo, `cont = cont + 1`, o bien `cont++`), y así sucesivamente. El bucle se repetirá mientras que se cumpla la **condición**.
{: .text-justify}

### Ejemplo 1  
Diseñar un algoritmo que escriba todos los números enteros entre 1 y 100, utilizando un bucle "para".

```java
{  
    int cont;   
        for (cont = 1; cont <= 100; cont = cont + 1) {   
            System.out.println(cont);   
        }   
}
```

De nuevo, lo más interesante es observar las diferencias de este algoritmo con los dos ejemplos anteriores. Advierte que ahora no es necesario asignar un valor inicial a la variable cont antes de entrar al bucle, ya que se hace en la misma declaración del bucle; y tampoco es necesario incrementar el valor de cont en el cuerpo del bucle (**`cont = cont + 1`**), ya que de eso se encarga el propio bucle "para". Por último, la condición de repetición (cont <= 100) se expresa también en la declaración del bucle. 
{: .text-justify}

### Ejemplo 2  
Diseñar un algoritmo que escriba todos los números enteros **impares** entre 1 y 100, utilizando un bucle "para"

```java
{  
    int cont;   
        for (cont = 1; cont <= 100; cont = cont + 2) {   
            System.out.println(cont);   
    }   
}
```

Este ejemplo, similar al anterior, sirve para ilustrar la gran flexibilidad del bucle "para" cuando se conocen bien los límites iniciales y finales del bucle. La variable **`cont`** se incrementará en 2 unidades en cada repetición del bucle, por lo que tomará los valores 1, 3, 5, 7, y así sucesivamente hasta 99.
{: .text-justify}

## 4.4 Contadores, acumuladores, conmutadores

Asociadas a los bucles se encuentran a menudo algunas variables auxiliares. Como siempre se utilizan de la misma manera, las llamamos con un nombre propio (contador, acumulador, etc.), pero hay que dejar claro que no son más que **variables comunes, aunque se usan de un modo especial**.  
{: .text-justify}

### **4.4.1 Contadores**

Un contador es una variable (casi siempre de **tipo entero**) cuyo valor **se incrementa o decrementa en cada repetición** de un bucle. Es habitual llamar a esta variable "cont" (de contador) o, con más frecuencia, "i" (de índice). A partir de ahora nosotros la llamaremos de este último modo. 
{: .text-justify}

El **contador** suele usarse de este modo: 

1. **Se inicializa antes de que comience el bucle**. Es decir, se le da un valor inicial. Por ejemplo:
   {: .text-justify}
   `i = 5;`

2. **Se modifica dentro del cuerpo del bucle**. Lo más habitual es que se **incremente** su valor en una unidad. Por ejemplo:
   {: .text-justify}
   `i = i + 1;`

   Esto quiere decir que el valor de la variable "i" se incrementa en una unidad y es asignado de nuevo a la variable contador. Es decir, si i valía 5 antes de esta instrucción, i valdrá 6 después.
   {: .text-justify}

   Otra forma típica del contador es:
   {: .text-justify}
   `i = i – 1;`

   En este caso, la variable se **decrementa** en una unidad; si cont valía 5 antes de la instrucción, tendremos que cont valdrá 4 después de su ejecución.
   {: .text-justify}

   El incremento o decremento no tiene por qué ser de una unidad. La cantidad que haya que incrementar o decrementar vendrá dada por la naturaleza del problema.
   {: .text-justify}

   Ten en cuenta que en Java, y en todos los lenguajes herederos de C, existe la sintaxis alternativa `i++` e `i--` para representar estos incrementos y decrementos.
   {: .text-justify}

   ```java
   i++; // Equivalente a i = i + 1

   i--; // Equivalente a i = i - 1
   ```

3. **Se utiliza en la condición de salida del bucle**. Normalmente, se compara con el valor máximo (o mínimo) que debe alcanzar el contador para dejar de repetir las instrucciones del bucle. 
{: .text-justify}

### Ejemplo  
Escribir un algoritmo que escriba la tabla de multiplicar hasta el 100 de un número N introducido por el usuario

```java
{
    int i, n
    n = Integer.parseInt(System.console().readLine());
    i = 1;
    while (i <= 10) {
        System.out.println(n * i);
        i++;
    }
}
```

El uso de contadores es casi omnipresente en bucles "mientras" y "repetir", aunque es posible crear bucles que funcionen sin contadores. Recuerda que siempre hay que asignar al contador un **valor inicial** para la primera ejecución del bucle (**i = 1** en nuestro ejemplo) e ir **incrementándolo** (o decrementándolo, según el algoritmo) en cada repetición con una instrucción del tipo **i = i + 1** o **i++** en el cuerpo del bucle. De lo contrario habremos escrito un bucle infinito. 
{: .text-justify}

Por último, hay que prestar atención a la **condición de salida**, que debe estar asociada al valor del contador en la última repetición del bucle (en nuestro caso, 100). Mucho cuidado con el operador relacional (\<, \>, \<=, \>=, etc) que usemos, porque el bucle se puede ejecutar más o menos veces de lo previsto[^1].  
{: .text-justify}

### **4.4.2 Acumuladores**

Las variables acumuladoras tienen la misión de **almacenar resultados sucesivos**, es decir, de *acumular* resultados, de ahí su nombre. 
{: .text-justify}

Las variables acumuladores también deben ser **inicializadas**. Si llamamos "acum" a un acumulador, escribiremos antes de iniciar el bucle algo como esto:
{: .text-justify}

```java
acum = 0;
```

Por supuesto, el valor inicial puede cambiar, dependiendo de la naturaleza del problema. Más tarde, en el **cuerpo del bucle**, la forma en la que nos la solemos encontrar es:
{: .text-justify}

```java
acum = acum + n;
```

...siendo n otra variable. Si esta instrucción va seguida de otras:
{: .text-justify}

```java
acum = acum + m;   
acum = acum + p;
```

... estaremos acumulando en la variable **`acum`** los valores de las variables n, m, p, etc, lo cual resulta a veces muy útil para resolver ciertos problemas repetitivos.
{: .text-justify}

#### Ejemplo  
Escribir un algoritmo que pida 10 números por el teclado y los sume, escribiendo el resultado

```java
{  
    int i, n, suma;  
    suma = 0;  
    for (i = 1; i <= 10; i++) {  
        n = Integer.parseInt(System.console.readLine());  
        suma = suma + n;  
    }  
    System.out.println(suma);  
}
```

En este algoritmo, **i** es una variable contador típica de bucle. Se ha usado un bucle "para", que es lo más sencillo cuando conocemos previamente el número de repeticiones (10 en este caso). La variable **n** se usa para cada uno de los números introducidos por el teclado, y la variable **suma** es el **acumulador**, donde se van sumando los diferentes valores que toma **n** en cada repetición. 
{: .text-justify}

Observa como, al principio del algoritmo, se le asigna al acumulador el valor 0. Esta es una precaución importante que se debe tomar siempre porque el valor que tenga una variable que no haya sido usada antes es **desconocido** (no tiene por qué ser 0) 
{: .text-justify}

### **4.4.3 Conmutadores**

Un **conmutador** (o **interruptor**) es una variable que sólo puede tomar **dos valores**. Pueden ser, por tanto, de tipo booleano, aunque también pueden usarse variables enteras o de tipo carácter. 
{: .text-justify}

La variable conmutador recibirá uno de los dos valores posibles **antes de entrar en el bucle**. Dentro del **cuerpo** del bucle, debe **cambiarse ese valor** bajo ciertas condiciones. Utilizando el conmutador en la **condición de salida** del bucle, puede controlarse el número de repeticiones.
{: .text-justify}

#### Ejemplo 1  
Escribir un algoritmo que sume todos los números positivos introducidos por el usuario a través del teclado. Para terminar de introducir números, el usuario tecleará un número negativo.
{: .text-justify}

```java
{  
    int n, suma;  
    boolean terminar;  
    suma = 0;  
    terminar = false;  
    while (terminar == false) {  
        System.out.println("Introduce un número (negativo para terminar)");  
        n = Integer.parseInt(System.console.readLine());  
        if (n >= 0) {  
        suma = suma + n;  
        }  
        else {  
        terminar = true;  
        }  
    }  
    System.out.println(suma);  
}
```

Este algoritmo es una variación del ejemplo con acumuladores (página 12). Entonces el usuario introducía 10 números, y ahora puede ir introduciendo números indefinidamente, hasta que se canse. ¿Cómo indica al ordenador que ha terminado de introducir números? Simplemente, tecleando un número negativo.
{: .text-justify}

El bucle se controla por medio de la variable "terminar": es el **conmutador**. Sólo puede tomar dos valores: "verdadero", cuando el bucle debe terminar, y "falso", cuando el bucle debe repetirse una vez más. Por lo tanto, "terminar" valdrá "falso" al principio, y sólo cambiará a "verdadero" cuando el usuario introduzca un número negativo.
{: .text-justify}

A veces, el conmutador puede tomar más de dos valores. Entonces ya no se le debe llamar, estrictamente hablando, conmutador. Cuando la variable toma un determinado valor especial, el bucle termina. A ese "valor especial" se le suele denominar valor **centinela**.
{: .text-justify}

#### Ejemplo 2  
Escribir un algoritmo que sume todos los números positivos introducidos por el usuario a través del teclado. Para terminar de introducir números, el usuario tecleará un número negativo.
{: .text-justify}

```java
{  
    int n, suma;  
    suma = 0;  
    terminar = false;  
    do {  
        System.out.println("Introduce un número (negativo para terminar)");  
        n = Integer.parseInt(System.console.readLine());  
        if (n >= 0) {  
        suma = suma + n;  
        }  
    }
    while (n >= 0);  
    System.out.println(suma);  
}
```

En esta ocasión, las repeticiones se controlan con la variable n, de modo que el bucle termina cuando `n < 0`. Por lo tanto, n se utiliza para ir asignando valores al acumulador suma, y también para salir del bucle: es el valor **centinela**. 
{: .text-justify}

Observa que, en esta ocasión, ha sido más sencillo resolver el problema con un bucle "do... while" y un centinela que con un bucle "while" y un conmutador, porque nos ha quedado una solución más corta.
{: .text-justify}

[^1]: Hay que evitar el operador "==" en las condiciones de salida de los bucles, sobre todo si estamos trabajando con números reales.

*[POO]: Programación Orientada a Objetos
*[OOP]: Object-Oriented Programming

---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}
{: .text-justify}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
{: .text-justify}
