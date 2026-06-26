---
title: "Ud. 04 - Paquetes"
permalink: /mod_prog/ud04/paquetes/
excerpt: "Los paquetes son el método de organización de las clases en proyectos más grandes"
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

# 1 Paquetes

## 1.1 Los paquetes de Java

Los paquetes, como vimos en el capítulo 3, son **agrupaciones de clases**. 
{: .text-justify}

El JDK de Java proporciona todos los paquetes estándar para hacer gran diversidad de tareas (entrada/salida, manejo de ficheros o bases de datos, creación de interfaces gráficos, etc) y, además, podemos usar paquetes de terceras partes o desarrollar los nuestros propios.
{: .text-justify}

Lo lógico es que las clases de un paquete tengan alguna clase de relación. Por ejemplo, en el paquete estándar java.io están todas las clases relativas a la entrada/salida de datos.
{: .text-justify}

Recordemos ahora algunas cosas importantes que ya dijimos sobre los paquetes:

* Un paquete es un conjunto de clases relacionadas entre sí.
{: .text-justify}
* Un paquete puede contener subpaquetes.
{: .text-justify}
* La estructura de paquetes del JDK es jerárquica.
{: .text-justify}
* Para usar una clase de un paquete, tenemos dos modos:
  * Utilizar la ruta entera, como java.io.File, cada vez que nos tengamos que referir a la clase File.
  {: .text-justify}
  * Importar el paquete con import java.io.File. A partir de entonces,  podemos referirnos a la clase File directamente, sin anteponer toda la ruta.
  {: .text-justify}
* Cuando nos referimos a una clase de un paquete (salvo que se haya importado el paquete) hay que especificar el paquete (y subpaquete si es necesario) al que pertenece. Por ejemplo: `java.io` es un **paquete**, y `java.io.File` es una **clase de ese paquete**. 
{: .text-justify}

* Los paquetes **permiten reducir los conflictos con los nombres** puesto que dos clases que se llaman igual, si pertenecen a paquetes distintos, no deberían de dar problemas. 
{: .text-justify}

* Los paquetes **permiten proteger ciertas clases no públicas** al acceso desde fuera del mismo. Esto lo veremos en detalle más adelante, al hablar de visibilidad. 
{: .text-justify}

## 1.2 Cómo crear un paquete

Vamos a ver cómo se crea un paquete mediante un ejemplo muy simple. La idea es reunir en un paquete dos clases y llamarlas desde otro programa para comprobar que todo funciona. 
{: .text-justify}

### Paso 1. Crear un subdirectorio dentro del directorio de trabajo
Lo llamaremos, por ejemplo, `geometria`. Dentro de este subdirectorio crearemos otros, destinados a los subpaquetes de nuestro paquete. Vamos a crear ahora uno llamado `triangulo`. 
{: .text-justify}

Por lo tanto, dentro de tu directorio de trabajo, tienes que crear un subdirectorio Utilidades, y, dentro de éste,  otro llamado prueba.
{: .text-justify}

**Importante**  
Es necesario **conservar esta estructura de directorios** para que los paquetes funcionen correctamente. 
{: .notice--warning}

### Paso 2. Escribir el código de las clases 

En el directorio `geometria/triangulo`, vamos a crear las clases `Equilatero` y `Isosceles`. 

`Equilatero.java`

```java
package geometria.triangulo;

import java.io.*;

public class Equilatero {
    public void saludar() {
        System.out.println("Hola, soy un triángulo equilátero");
    }
}
```

`Isosceles.java`

```java
package geometria.triangulo;

import java.io.*;

public class Isosceles {
    public void saludar() {
        System.out.println("Hola, soy un triángulo isósceles");
    }
}
```

Observa que la primera línea de ambos archivos señala que estas clases **pertenecen al paquete `geometria.triangulo`**. 
Para hacer uso de estas clases desde una tercera clase que no esté en ese paquete, bastará con escribir algo como esto:
{: .text-justify}

`Test.java`

```java
import geometria.triangulo.Equilatero;
import geometria.triangulo.Isosceles;

public class Test {
    public static void main(String[] args) {
        Equilatero e = new Equilatero();
        Isosceles i = new Isosceles();
        e.saludar();
        i.saludar();
    }
}
```

Como podemos apreciar en las dos primeras líneas del código anterior, estamos importando las clases `Equilatero` e `Isosceles` del paquete `geometria.triangulo`. Al hacerlo, podemos usar ambas clases en esta clase `Test`.
{: .text-justify}

También podríamos importar de esta otra manera:
{: .text-justify}

```java
import geometria.triangulo.*;

public class Test {
    public static void main(String[] args) {
        Equilatero e = new Equilatero();
        Isosceles i = new Isosceles();
        e.saludar();
        i.saludar();
    }
}
```

Fíjate en cómo se importa el paquete (el **asterisco** al final indica **“importar TODAS las clases** del paquete `geometria.triangulo`) y cómo, a partir de entonces, puede usarse **cualquier clase del paquete** (como `Equilatero`, `Isosceles` y **cualquier otra** que se encuentre en dicho paquete). 
{: .text-justify}

El código de esta clase `Test` debe estar situado en el directorio de trabajo, no en los subdirectorios del paquete.
{: .text-justify}

### Paso 3. Compilar y probar el paquete 

Una vez creado el código fuente necesario, lo compilaremos, como siempre, con javac o con nuestro IDE preferido. Obviamente, la forma de proceder será distinta en cada caso.
{: .text-justify}

Como siempre, te recomendamos que hagas la compilación directamente con javac desde la línea de comandos las primeras veces: es la forma más lenta, pero también la que te proporciona mayor control sobre lo que ocurre y la que te permite comprender bien la forma en la que trabaja el compilador de java.
{: .text-justify}

Para compilar las clases de un paquete desde la consola de texto, debes situarte en el directorio de trabajo (NO en el directorio del paquete, sino más arriba, en el directorio padre). Una vez allí, puedes compilar las clases con:
{: .text-justify}

```
$ javac geometria/triangulo/Equilatero.java
$ javac geometria/triangulo/Isosceles.java
```

**Importante**  
No olvides cambiar la barra “/” por “\” en sistemas Windows.
{: .notice--warning}

Después de depurar los posibles errores de escritura, ejecutaremos Test.class desde la línea de comandos, y el resultado debería ser `"Hola, soy un triángulo equilátero"` seguido de `"Hola, soy un triángulo isósceles"`. 
{: .text-justify}

Si algo falla, asegúrate de tener bien definida la variable CLASSPATH, que debe apuntar al directorio donde se encuentra el paquete o, como alternativa, utiliza la opción -cp de la línea de comandos al ejecutar el programa con el comando java. Todo esto se explicó en la unidad 2, de modo que es un buen momento para revisarlo si no sabes de qué estamos hablando.
{: .text-justify}

Si vas a compilar el paquete con un IDE, la forma de hacerlo dependerá, lógicamente, del IDE que utilices. Por ejemplo, en **Netbeans**[^1] puedes iniciar un nuevo proyecto. Puede ser “Java Library” si quieres crear solo los paquetes (sin aplicación ejecutable), o una aplicación Java convencional. Luego, al añadir archivos fuente, eliges la opción “Java package”. **Netbeans**[^1] se encargará de crear los directorios correspondientes en el lugar correcto, y de indicar el “package” adecuado en el código fuente de cualquier clase que crees dentro del paquete. También se encargará de compilarlo y ejecutarlo todo como es debido.
{: .text-justify}

Aunque estos detalles pueden cambiar, el procedimiento básico será el mismo con cualquier otro IDE. 
{: .text-justify}

[^1]: NetBeans, A. (s. f.). **_Welcome to Apache NetBeans_**. <https://netbeans.apache.org/>{:target="_blank"}

*[POO]: Programación Orientada a Objetos
*[DAC]: Divide and Conquer
*[OOP]: Object-Oriented Programming
*[AOP]: Aspect-oriented programming
*[JDK]: Java Development Kit
*[JVM]: Java Virtual Machine
*[JRE]: Java Runtime Environment
*[IntelliJ]: IntelliJ IDEA Community Edition

---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
