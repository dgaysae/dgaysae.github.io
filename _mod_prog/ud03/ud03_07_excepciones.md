---
title: "Ud. 03 - Control de excepciones"
permalink: /mod_prog/ud03/excepciones/
excerpt: "El control de excepciones permite al programador controlar la ejecución del programa evitando que éste falle en tiempo de ejecución de forma inesperada."
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

# 7 Control de excepciones

El control de excepciones permite al programador controlar la ejecución del programa evitando que éste **falle en tiempo de ejecución** de forma inesperada. Bueno, mejor dicho: no evita que el programa falle, pero sí que explote.
{: .text-justify}

Nos explicamos. El manejo de excepciones consiste en **prever y capturar los posibles errores de ejecución** para redirigirlos a una rutina de código preprogramada, de manera que el programa pueda recuperarse del error. Se suele usar, por lo tanto, en lugares sensibles donde podría ocurrir un error de ejecución. Normalmente, en entradas de datos del usuario o en operaciones aritméticas con valores impredecibles.
{: .text-justify}

El control de excepciones en Java se programa mediante un **bloque `try-catch`**, que tiene esta sintaxis:
{: .text-justify}

```java
try {
    <sentencias que pueden fallar>  
}  
catch (excepcion01) {
    <control de la excepción 1>  
}  
catch (excepcion02) {
    <control de la excepción 2>  
}
...  
finally {
    <control final>  
}
```

La JVM intentará ejecutar las instrucciones del bloque **try**. En caso de que ocurra un error de ejecución, buscará si ese error (o "excepción", en jerga informática) está recogido en un bloque **catch**. En tal caso, ejecuta el bloque catch y luego sigue ejecutando el programa como si tal cosa. 
{: .text-justify}

El bloque **finally** es opcional. Si existe, se ejecutará siempre, sea cual sea la excepción.
{: .text-justify}

## Ejemplo  
Escribir un programa que divida un número a entre otro b y muestre el resultado.
{: .text-justify}

```java
class Test {   
    public static void main(String[] args) {   
        int a = 10, b = 0, c;   
        c = a / b;   
        System.out.println("Resultado: " + c);   
    }   
}
```

Si compilas esta clase verás que todo va bien, pero intenta ejecutarla y verás lo que pasa. Obtendrás lo que viene a llamarse vulgarmente un "pete", algo así como:
{: .text-justify}

```
Exception in thread "main" java.lang.ArithmeticExcepcion: / by zero at test.main (test.java:6) 
```
{: .text-justify}

¡Eso te pasa por intentar dividir entre 0! No queda muy bien que digamos que un programa profesional emita estos mensajes apocalípticos durante la ejecución. Bueno, pues para eso se usa el control de excepciones.
{: .text-justify}

Observa cómo actúa:

```java
class Test {  
    public static void main(String[] args) {  
        int a = 10, b = 0, c;  
        try {  
            c = a / b;  
        }  
        catch (ArithmeticExcepcion e) {  
            System.out.println("Se ha producido un error al hacer la división");  
            c = 0;  
        }

        System.out.println("Resultado: " + c);  
    }  
}
```

Ahora, si se produce una **`ArithmeticException`** al hacer la división, no salta la rutina por defecto de la JVM, sino que el error es redirigido al bloque catch, donde está nuestro código para tomar las riendas de la situación y tratar de redirigirla para que el programa pueda seguir ejecutándose y salir airoso del brete. 
{: .text-justify}

Seamos sinceros: no vas a usar el manejo de excepciones hasta mucho más adelante. Ahora tu principal preocupación es que los programas funcionen razonablemente. Pero debes conocer que existe esta posibilidad y estar preparado para explotarla cuando llegue el momento. Hay una salvedad a esta regla, y la explicamos en el siguiente apartado. 
{: .text-justify}

## 7.1 El manejo de excepciones y las instrucciones de entrada

El lugar donde más frecuentemente te vas a encontrar un manejador de excepciones programado es, sin duda, en las entradas de datos al programa. La razón es sencilla: cuando un usuario (u otro sistema) puede introducir datos en nuestro programa, por definición estamos creando **un "coladero"** por donde pueden entrar toda clase de cosas desagradables: errores tipográficos (una letra cuando el programa esperaba un número, por ejemplo), código malicioso, cadenas vacías y vaya usted a saber qué.  
{: .text-justify}

Por eso, encontrarás **la entrada de datos frecuentemente encerrada en un try-catch que la proteja**. Por ejemplo, observa este ejemplo. Se trata de una clase que pide dos números por teclado y los suma:
{: .text-justify}

```java
public class Suma {  
    public static void main (String [] args) {  
        InputStreamReader isr = new InputStreamReader(System.in);  
        BufferedReader br = new BufferedReader(isr);  
        int s1, s2, suma;  
        try {  
            System.out.print("Sumando 1 : ");  
            s1 = Integer.parseInt(br.readLine());  
            System.out.print("Sumando 2 : ");  
            s2 = Integer.parseInt(br.readLine());  
        }  
        catch (Exception e) {  
            System.out.println("Se ha producido un error. Asegúrese de haber introducido dos números");  
            s1 = 0;  
            s2 = 0;  
            e.printStackTrace();  
        }  
        suma = s1 + s2;  
        System.out.println ("La suma es " + s1 + "+" + s2 +"="+ suma);  
    }  
}
```

Se ha encerrado toda la parte de entrada de datos en un bloque **`try`**. ¿Por qué? Porque las dos entradas de datos se tienen que convertir a números enteros (**`parseInt`**) antes de procesarlas como sumandos, ya que las entradas de datos siempre son cadenas de caracteres. *Y es ése proceso de conversión el que puede fallar*.
{: .text-justify}

¿No te lo crees? Prueba a ejecutar el método anterior sin `try-catch` y, cuando el programa te pida un número, teclea una letra. El `parseInt()` se pegará un zurriagazo[^1]. 
{: .text-justify}

¿Que te parece muy raro que un usuario teclee un carácter cuando el programa le pide un número? Eso es porque aún no has tratado con muchos usuarios. Los usuarios *siempre* hacen lo que menos se espera de ellos. 
{: .text-justify}

Como sabemos que la forma más probable de fallo de este código es la conversión a entero, podemos capturar ese error de ejecución y tratarlo con nuestro propio código, en lugar de dejar a la JVM que se encargue ello y emita esos mensajes de error tan poco recomendables para el usuario final. 
{: .text-justify}

Una última nota: observa como, en el bloque catch, hemos colocado un **`printStackTrace()`**. Eso nos muestra información sobre la excepción, y puede ser muy útil a la hora de depurar el programa porque nos dirá exactamente qué excepción se ha producido, y así podremos contemplar nuevas excepciones que se nos hubieran escapado. Pero, en la versión definitiva del programa, esa línea debería desaparecer para evitar, de nuevo, mensajes de error incomprensibles al usuario final. 
{: .text-justify}

*[JVM]: Java Virtual Machine

[^1]: El zurriagazo (derivado de zurriago, un tipo de látigo) es un golpe dado con un látigo o correa. En el lenguaje coloquial, también se utiliza de forma figurada para describir una desgracia imprevista o un desprecio profundo.

---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}
{: .text-justify}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
{: .text-justify}
