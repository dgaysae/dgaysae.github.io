---
title: "Ud. 03 - Estructura selectiva (condicional)"
permalink: /mod_prog/ud03/condicional/
excerpt: "La estructuras condicional permiten ejecutar bloques de código si se cumplen una o varias condiciones."
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

# 3 Estructuras selectivas (condicionales)

Los algoritmos que usan únicamente estructuras secuenciales están muy limitados y no tienen ninguna utilidad real. Esa utilidad aparece cuando existe la posibilidad de **ejecutar una de entre varias** secuencias de instrucciones dependiendo de alguna condición asociada a los datos del programa. 
{: .text-justify}

Las estructuras selectivas pueden ser de tres tipos: 

* *simples* 

* *dobles* 

* *múltiples* 

## 3.1 Condicional simple

La estructura condicional **simple** se escribe así:

```java
if (condición) {
    acciones
}
```

{% capture fig_img03 %}
![Estructura condicional simple]({{ '/assets/images/prog/ud03/ud03_03_condicional.png' | relative_url }})
{% endcapture %}

<figure style="width: 350px" class="align-center">
  {{ fig_img03 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Estructura condicional simple.</figcaption>
</figure>

La condición que aparece detrás de "if" es siempre una **expresión lógica**, es decir, una expresión cuyo resultado es "verdadero" o "falso". Si el resultado es verdadero, entonces se ejecutan las acciones situadas entre { y }. Si es falso, se saltan las acciones y se prosigue por la siguiente instrucción (lo que haya debajo de la llave de cierre)
{: .text-justify}

### Ejemplo 1  
Hagamos un código que indique si un número es positivo, negativo o cero usando instrucciones condicionales simples:
{: .text-justify}

```java
{   
    int numero;   
    System.out.println("Introduce un número:");
    ednumeroad = Integer.parseInt(System.console.readLine());

    if (numero > 0) {
        System.out.println("El número es positivo");
    }

    if (numero < 0) {
        System.out.println("El número es negativo");
    }
    
    if (numero == 0) {
        System.out.println("El número es cero");
    }    
}
```

Al introducir el número por teclado, la primera instrucción condicional `if (numero > 0)` comprueba si es positivo y, en tal caso, lo indica por pantalla. La siguiente condicional simple `if (numero < 0)` indica en cambio si es negativo. Y la última `if (numero == 0)` dice si es `0`.  
De esta forma **el programa muestra uno y sólo uno de los tres mensajes** según sea el valor introducidos.
{: .text-justify}

### Ejemplo 2  
Este código indica si una persona es mayor de edad:
{: .text-justify}

```java
{   
    int edad;   
    System.out.println("Introduce tu edad:");
    edad = Integer.parseInt(System.console.readLine());

    if (edad >= 18) {
        System.out.println("Eres mayor de edad");
    }

    if (edad <= 0) {   
        System.out.println("La edad introducida no es correcta");   
    }   
}
```

Al introducir la edad, la primera instrucción condicional `if (edad >= 18)` comprueba que si la edad es o supera los 18 años. Si es así, ejecuta su bloque de código (las instrucciones que hay entre las llaves `{` y `}`) que en este caso muestra el mensaje `Eres mayor de edad`. Justo después vemos otra condicional `if (edad <= 0)` por si la edad introducida es negativa, en cuyo caso se imprimirá en la pantalla el mensaje pertinente.
{: .text-justify}

### Ejemplo 3  
El siguiente código calcula el área y el perímetro de un rectángulo usando un condicional simple:

```java
{
    double base, altura, área, perimetro;
    base = Integer.parseInt(System.console.readLine());
    altura = Integer.parseInt(System.console.readLine());
    if ((area > 0) && (altura > 0)) {
        area = base * altura;
        perimetro = 2 * base + 2 * altura;
        System.out.println("Area = " + area);
        System.out.println("Perimetro = " + perimetro);
    }

    if ((area <= 0) || (altura <= 0)) {
        System.out.println("Los datos son incorrectos");
    }   
}
```

Observa que, en la primera instrucción condicional `if ((área > 0) && (altura > 0))` se comprueba que los dos datos sean positivos; en caso de serlo, se procede al cálculo del área y el perímetro mediante las acciones situadas entre { y }. Más abajo hay otra condicional `if ((área <= 0) || (altura <=0))` para el caso de que alguno de los datos sea negativo o cero: en esta ocasión, se imprime en la pantalla un mensaje de error.

## 3.2 Condicional doble

La **forma doble** de la instrucción condicional es:

| if (condicion) {   acciones01  } else {   acciones02 } |  |
| :---- | :---: |

En esta forma, la instrucción funciona del siguiente modo: si el resultado de la condición es verdadero, entonces se ejecutan las acciones de la primera parte, es decir, las acciones01. Si es falso, se ejecutan las acciones de la parte "else", es decir, las acciones02. 

**Ejemplo** *Podemos reescribir nuestro algoritmo del rectángulo usando una alternativa doble:*

```java
{
    double base, altura, area, perimetro;  
    base = Integer.parseInt(System.console.readLine());  
    altura = Integer.parseInt(System.console.readLine());

    if ((area > 0) && (altura > 0)) {  
        area = base * altura;  
        perimetro = 2 * base + 2 * altura;  
        System.out.println("Area = " + area);  
        System.out.println("Perimetro = " + perimetro);  
    }  
    else {  
        System.out.println("Los datos son incorrectos");  
    }
}
```

Lo más interesante de este algoritmo es compararlo con el anterior, ya que hace exactamente lo mismo. ¡Siempre hay varias maneras de resolver el mismo problema! Pero esta solución es un poco más sencilla, al ahorrarse la segunda condición, que va implícita en el **else**. 

Aquí abajo tienes el mismo algoritmo dibujado en forma de diagrama de flujo:

## 3.3 Condicional múltiple  {#3.3-condicional-múltiple}

En algunas ocasiones nos encontraremos con **selecciones en las que hay más de dos alternativas** (es decir, en las que no basta con los valores "verdadero" y "falso"). Siempre es posible plasmar estas selecciones complejas usando varias estructuras if-else if-else if-else if... anidadas, es decir, unas dentro de otras, pero, cuando el número de alternativas es grande, esta solución puede plantear grandes problemas de escritura y legibilidad del algoritmo. 

Sin embargo, hay que dejar clara una cosa: cualquier instrucción condicional múltiple puede ser sustituida por un conjunto de instrucciones condicionales simples y dobles totalmente equivalentes. 

La **estructura condicional múltiple** sirve, por tanto, para simplificar estos casos de condiciones con muchas alternativas. Su sintaxis general es:

| switch (expresión) {    valor1: acciones01; break;   valor2: acciones02; break;   valor3: acciones03; break;   ...   valorN: accionesN; break;    default: acciones-default; }  |  |
| :---- | :---: |

Su funcionamiento es el siguiente: se evalúa **expresión**, que en esta ocasión no tiene que ser de tipo lógico, sino que puede ser entero, carácter, etc[^3]. El resultado de **expresión** se compara con cada uno de los valores **valor1, valor2... valorN**. Si coincide con alguno de ellas, se ejecutan únicamente las acciones situadas a la derecha del valor coincidente (**acciones01, acciones02... accionesN**). Si se diera el caso de que ningún valor fuera coincidente, entonces se ejecutan las **acciones-default** ubicadas al final de la estructura. Esta última parte de la estructura no es obligatorio que aparezca. 

**Ejemplo** *Construyamos un algoritmo que escriba los nombres de los días de la semana en función del valor de una variable entera llamada "día". Su valor se introducirá por teclado. Los valores posibles de la variable "día" serán del 1 al 7: cualquier otro valor debe producir un error.*

```java
{
    int dia;   
    dia = Integer.parseInt(System.console.readLine());
    switch(dia) {
        case 1:  
            System.out.println("Lunes");   
            break;  
        case 2:  
            System.out.println("Martes");   
            break;  
        case 3:  
            System.out.println("Miércoles");   
            break;  
        case 4:  
            System.out.println("Jueves");   
            break;  
        case 5:  
            System.out.println("Viernes");   
            break;  
        case 6:  
            System.out.println("Sábado");   
            break;  
        case 7:  
            System.out.println("Domingo");   
            break;  
        default:  
            System.out.println("Número incorrecto");   
    }   
}
```

En este programa, la variable **día**, una vez leída, se compara con los siete valores posibles. Si vale 1, se realizará la acción **System.out.println**('lunes'); si vale 2, se realiza **System.out.println**('martes'); y así sucesivamente. Por último, si no coincide con ninguno de los siete valores, se ejecuta la parte **default**. Es conveniente que pienses cómo se podría resolver el mismo problema sin recurrir a la alternativa múltiple, es decir, utilizando sólo alternativas simples y dobles.
{: .text-justify}

*[POO]: Programación Orientada a Objetos
*[OOP]: Object-Oriented Programming

[^1]: Dijkstra, pese a ser físico, se convirtió en uno de los más importantes científicos de la computación hasta su muerte en 2002. Una de sus frases más famosas es: "la pregunta de si un computador puede pensar no es más interesante que la pregunta de si un submarino puede nadar"
{: .text-justify}

[^2]: BÖHM, C. y JACOPINI, G.; Flow diagrams, turing machines and lenguages only with two formation rules, Communications of the ACM, vol.9, nº 5, pg. 366-371, 1966
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
