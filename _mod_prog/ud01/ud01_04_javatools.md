---
title: "Ud. 01 - Herramientas para desarrollar con Java"
permalink: /mod_prog/ud01/javatools/
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


# 5. Herramientas para desarrollar con Java

## 5.1. El JDK

El JDK (Java Development Kit) es un paquete de software que contiene todo lo necesario para desarrollar aplicaciones escritas en Java, excepto un editor de texto, del que hablaremos más adelante. 
{: .text-justify}

En concreto, el **JDK** incluye:
{: .text-justify}

- La biblioteca de clases estándar de Java.
- La JVM o máquina virtual Java (java).
- El compilador de java (javac).
- Un desensamblador de clases (javap).
- Un depurador de consola (jdb).
- El generador automático de documentación (javadoc).
- Un visor de applets (appletviewer) 

No te preocupes si no sabes aún qué son algunas de estas cosas. Lo irás aprendiendo a lo largo del curso. ¡No se conquistó Roma en un solo día! 
{: .text-justify}

Todos los elementos de la lista, excepto el primero, constituyen lo que se llama **JRE**. Son los componentes necesarios para compilar y ejecutar aplicaciones java. Pero, para desarrollar programas nuevos, necesitamos además la biblioteca de clases. El conjunto de JRE más biblioteca de clases es lo que se denomina JDK. 
{: .text-justify}

Una vez instalado el JDK, y dependiendo de la versión de Java, deberás revisar el valor de dos variables de entorno para que el compilador funcione correctamente: 
{: .text-justify}

- **Variable PATH**: debe apuntar al directorio bin del JDK. Si no la cambias, estarás obligado compilar siempre desde el directorio bin, lo cual es bastante engorroso.
{: .text-justify}

- **Variable CLASSPATH**: debe apuntar al directorio raíz en donde estén las clases del JDK (solo para versiones antiguas del JDK) 
{: .text-justify}

La última versión del JDK puede **descargarse gratuitamente del sitio web de Oracle**. ¡Cuidado! ¡Sólo del sitio web del desarrollador original! No confíes en el JDK que puedan ofrecerte en otros lugares salvo que sean de absoluta confianza. 
{: .text-justify}

En el caso de los sistemas GNU/Linux, la mayoría de las distribuciones proporcionan una imagen del JDK en sus repositorios oficiales. Sin embargo, ésta puede no ser la última versión del JDK liberada por Oracle, por lo que deberás recurrir a la web del fabricante si quieres disponer de la misma. 
{: .text-justify}

## 5.2. Editores de texto

Decíamos más arriba que el JDK incluye todo lo necesario para desarrollar aplicaciones en Java, excepto un editor de texto. 
{: .text-justify}

El editor de textos nos servirá para teclear el código de nuestro programa para posteriormente compilarlo y ejecutarlo. Puedes escoger el editor de texto que prefieras, solo teniendo en cuenta dos cosas: 
{: .text-justify}

- Que guarde los archivos en texto plano, no formateado. En este sentido, no son apropiados los editores de texto como Microsoft Word o LibreOffice Writer, aunque pueden usarse si no tienes otra cosa a mano.
{: .text-justify}
- Que permita seleccionar la codificación de caracteres. En general, preferiremos usar la codificación UTF-8, pero puede haber casos en los que necesitemos otra. Esto será útil, sobre todo, cuando desarrolles aplicaciones que accedan a bases de datos o que generen páginas web. Casi todos los editores modernos lo permiten. 
{: .text-justify}

Además, es muy interesante que el editor reconozca el lenguaje en el que estamos programando y nos coloree las palabras clave, identificadores, etc. Eso facilita enormemente la lectura y comprensión del código que estamos desarrollando. Así que, no, no es buena idea usar el bloc de notas de Windows. 
{: .text-justify}

Editores que cumplan estas características hay miles, y muchos son gratuitos. Por ejemplo:
{: .text-justify}

- En entornos Windows: Notepad++, UltraEdit, Syncplify, Akelpad, TotalEdit, Metapad…
- En entornos Linux: Mousepad, Leafpad, gEdit, kwrite, emacs…
- En entornos Mac: Editra, TextWrangler, Xemacs, BBEdit...  

## 5.3. Entornos integrados de desarrollo

Finalmente, está la posibilidad de usar el Entorno Integrado de Desarrollo (IDE, por sus siglas en inglés). Esta es la elección de la inmensa mayoría de los programadores profesionales, y con seguridad también será la tuya dentro de unos meses. 
{: .text-justify}

Un IDE es **una herramienta que proporciona, dentro del mismo interfaz, acceso a todas las funciones anteriores**: edición del código fuente, compilación, depuración, ejecución... En realidad, lo que hace es invocar de forma transparente a las herramientas del JDK, de modo que el programador se ahorra ese trabajo. Así, resulta mucho más cómodo y rápido programar con la ayuda de un IDE que compilando e invocando los comandos del JDK desde la consola. 
{: .text-justify}

Sin embargo, consideramos (y, con nosotros, mucha gente) que, para un aprendiz, es mucho más ilustrativo trabajar con las herramientas básicas que hemos descrito aquí para adquirir una visión global del funcionamiento del JDK. Más adelante, cuando esto esté claro, habrá tiempo de saborear las bondades de un buen IDE. 
{: .text-justify}

Algunos IDEs son monstruos *devorarrecursos* que disponen de herramientas adicionales potentísimas, como autocompleción de sentencias, generador automático de código, analizador del rendimiento, refactorizador, soporte multilenguaje... Otros son más simples y ligeros, y disponen de un editor sencillo y unos pocos menús para guardar, editar y compilar. 
{: .text-justify}

**La elección del IDE es algo muy personal**. Llegarás a una conclusión después de tener alguna experiencia con varios de ellos. Por ahora, te vamos mencionando algunos de los más populares para el desarrollo de aplicaciones Java, para que sus nombres de vayan sonando: 
{: .text-justify}

- Entre los IDEs pesados: [IntelliJ](https://www.jetbrains.com/es-es/idea/download/){:target="_blank"},  [Eclipse](https://eclipseide.org/){:target="_blank"} y [NetBeans](https://netbeans.apache.org/front/main/index.html){:target="_blank"}.
- Entre los IDEs ligeros: [Geany](https://www.geany.org/){:target="_blank"} y [BlueJ](https://www.bluej.org/){:target="_blank"} 

# 5. Primeros pasos con Java

## 5.1. Pero, ¿qué demonios es Java?

Java es un lenguaje de programación de ordenadores. Si no tienes claro qué es un lenguaje de programación, repasa las secciones anteriores. Por supuesto, tiene una serie de características que lo hacen diferente del resto de lenguajes. Sigue leyendo para descubrirlas. 
{: .text-justify}

## 5.1.1. Un poco de historia

Java fue creado en 1991 por **James Gosling**, de Sun Microsystems, aunque la primera versión no vio la luz hasta 1996. Tuvo como referentes a C y C++, y por eso su sintaxis se parece mucho a la de estos lenguajes, aunque ahí acaban sus similitudes. Existen varias teorías levemente absurdas sobre el origen de su nombre, todas sin comprobar. El propio Gosling ha sugerido que fue elegido aleatoriamente entre una lista de palabras. 
{: .text-justify}

Las primeras versiones se denominaron **JDK 1.0**, **JDK 1.1**, etc. Luego, pasaron a llamarse Java 2 o J2, diferenciando las versiones estándar (SE = Standard Edition), empresarial (EE = Enterprise Edition) y doméstica (ME = Micro Edition). Así, es posible que encuentres versiones llamadas J2SE 1.4. Significa que es la versión JDK 1.4, edición estándar. Lógicamente, las diferencias entre la SE, EE y ME estriban en la cantidad de componentes que incorpora el JDK y su coste (gratuito para las SE y ME). 
La versión JDK 1.5 se denominó J2SE 5. A partir de aquí, dejó de usarse la denominación “J2” y se habla de **Java SE 6**, **Java SE 7**, etc. 
{: .text-justify}

En 2010, el gigante de la informática Oracle se fusionó con Sun Microsystems. Desde entonces, la tecnología Java es propiedad de Oracle, aunque la mayor parte de su código tiene licencia GNU/GPL, es decir, es software libre cuyo código fuente está a disposición de todo el mundo. De hecho, existen versiones alternativas del JDK que no están desarrolladas por Oracle, como la GNU Classpath, que es completamente libre.
{: .text-justify}

Es a partir de Java SE 8 cuando se ven cambios y una evolución muy superior a las versiones anteriores.

## 5.1.2. Características principales de Java 

Según Wikipedia, Java se caracteriza porque: 
{: .text-justify}

- Es un lenguaje de programación de **propósito general, concurrente, orientado a objetos y basado en clases**.
{: .text-justify}
- Fue diseñado para tener tan **pocas dependencias** de implementación como fuera posible, es decir, para ser muy **portable** de un sistema a otro (esta característica es conocida en inglés como WORA, o "write once, run anywhere"). Esto se consigue gracias a la compilación en bytecode y a la ejecución en máquina virtual de la que hablábamos más arriba.
{: .text-justify}
- Tiene **recolección de basura automática**. Esto significa que la memoria ocupada por los objetos no tiene que ser liberada por el programador cuando éstos dejan de usarse, sino que la propia máquina virtual se encarga de ello. La gestión de la memoria es una de las mayores pesadillas de los programadores en C/C++.
{: .text-justify}
- Es, en la actualidad, **uno de los lenguajes de programación más populares del mundo**, particularmente para **aplicaciones de cliente-servidor de web**, **dispositivos móviles** y **sistemas empotrados**. Sin embargo, su uso en applets (miniaplicaciones web ejecutables en el navegador del cliente), muy popular en los años 90, se ha reducido mucho debido a sus problemas de compatibilidad y seguridad y a la pujanza de JavaScript. 
{: .text-justify}

## 5.2. Estructura básica de un programa en Java 

Echa un vistazo al siguiente código fuente. **No te agobies si no lo entiendes todo**. Supón que estás leyendo algo escrito en el idioma de algún país al que vas a viajar próximamente y en el que vas a vivir durante un tiempo. Te han dicho que el idioma de ese país se parece un poco al inglés, y por eso tienes ciertas esperanzas de entenderlo, al menos un poco. 
{: .text-justify}

Venga, inténtalo:

```java
public class Holamundo { 
  /* Programa holamundo */ 
  public static void main(String[] args) { 
    /*
    Lo único que hace este programa es
    mostrar un saludo por la pantalla
    */
    System.out.println(“Hola, mundo!”); 
  }
}
```

En este sencillo programa podemos apreciar varias características importantes de Java: • Todo el código Java se debe incrustar dentro de unas estructuras llamadas **clases**. Todas las clases deben tener un nombre (“holamundo”) 
{: .text-justify}

- Dentro del código se pueden intercalar comentarios escritos en lenguaje natural, rodeados con los caracteres /* y */, o precedidos de una doble barra: //
{: .text-justify}
- Dentro de las clases puede haber muchas cosas. En concreto, al menos una clase debe disponer de un bloque de código (técnicamente hablando, un **método**) con el nombre **main()**: por ahí comenzará la ejecución del programa. Este método es público (se puede ejecutar desde cualquier lugar), es estático (se puede invocar sin instanciar la clase) y no devuelve ningún valor (void) a quien lo ejecutó. 
{: .text-justify}

¿Que no lo entiendes todo? No pasa nada. Por ahora, bastará con que entiendas una pequeña parte. Vuelve sobre estas líneas dentro de dos semanas y te sorprenderá lo mucho que has aprendido.  

## 5.3. Ejecutando mi primer programa en Java

Para ejecutar el programa “Holamundo” en tu ordenador, debes tener instalado el JDK y configurada la variables de entorno PATH (y CLASSPATH, en versiones antiguas) como se explicó más arriba. 
{: .text-justify}

Teclea el programa “holamundo” con un editor de texto y guárdalo en un directorio de trabajo con el nombre Holamundo.java. Es importante que el nombre del archivo coincida con el de la clase que hay dentro de él, incluyendo las mayúsculas, si las hubiera.
Abre una consola de texto en tu directorio de trabajo y teclea:
{: .text-justify}

```bash
$ javac Holamundo.java
```

**Nota**<br> Para los neófitos: el carácter **`$`** NO se teclea, solo representa el símbolo del intérprete de comandos. Cuando lo veas escrito delante de un comando, significa que ese comando está destinado a escribirse en la consola) 
{: .notice}
{: .text-justify}

Si has escrito bien el código de Holamundo, no se mostrará ningún error y se generará un archivo llamado **Holamundo.class**. Este archivo es el Holamundo compilado a bytecode. Pero si te aparece algún error, tendrás que volver a editar tu código fuente y corregirlo antes de continuar. Fíjate bien en el mensaje de error: suele dar bastantes pistas. 
Cuando consigas tu Holamundo.class, podrás ejecutarlo con:
{: .text-justify}

```bash
$ java Holamundo
```

En la pantalla deberías ver el saludo **`Hola, mundo!`**. Ese es tu primer programa ejecutándose y saludándote. ¡Enhorabuena! Tal vez no te parezca gran cosa, pero ten en cuenta algo: todos hemos empezado exactamente por ahí. 
{: .text-justify}

## 5.4. El compilador javac, a fondo

En esta sección vamos a ver con más detalle cómo funciona el compilador de consola del JDK. Esta concebida como una referencia para usuarios más avanzados. Si es la primera vez que lees esto, es mejor que saltes a la siguiente sección. 
{: .text-justify}

El compilador de java suele denominarse javac (Java Compiler). Es un fichero ejecutable que se invoca desde los IDE para java cada vez que seleccionamos la opción adecuada, pero también puede ejecutarse desde la línea de comandos.  
{: .text-justify}

Para poder usar javac desde la línea de comandos debemos situarnos en el directorio donde está el archivo ejecutable. En un sistema Windows, tendrá la forma c:\Archivos de programa\Java\jdkX.Y.Z\bin, o algo similar. También existe la posibilidad de modificar la variable de sistema PATH para que apunte al directorio de javac, y así poder invocarlo desde cualquier lugar. En los sistema Linux, podrá invocarse javac desde cualquier directorio, ya que se instala junto con el resto de programas en /bin o en /usr/bin  
{: .text-justify}

Como todos los programas de línea de comandos, javac tiene una sintaxis determinada que permite modificar la forma en la que el programa se ejecuta. Esta sintaxis es:

```bash
$ javac [ opciones ] [ ficheros_fuente]
```
En “ficheros_fuente” colocaremos los nombres de los archivos fuente que queremos compilar. Las opciones sirven para ajustar el funcionamiento del compilador. Por ejemplo:
{: .text-justify}

```bash
$ javac -g miPrograma.java
```

Las opciones principales de javac son:  
{: .text-justify}

- cp directorios: especifica un conjunto de directorios (separados por : en sistemas Linux y por ; en sistemas Windows) donde buscar las clases adicionales necesarias para la compilación. Sustituye a la variable de entorno CLASSPATH.
d directorio: especifica el directorio de destino de los archivos compilados. El directorio debe existir. Si no se indica ningún directorio, los archivos compilados se guardarán en el mismo directorio donde estén los fuentes.  
{: .text-justify}
- g: añade al archivo compilado información de depuración, para poder depurarlo posteriormente. Debe usarse siempre, excepto en la versión definitiva del programa, donde puede omitirse. 
nowarn: deshabilita los avisos (“warnings”) 
{: .text-justify}
- verbose: hace que la ejecución del compilador muestre información adicional en la consola al mismo tiempo que compila el código, como las clases que se van usando. Puede ayudar en la depuración. 
{: .text-justify}
- Jopciones: pasa “opciones” a la máquina virtual que posteriormente ejecutará el código compilado.  Ejemplo:<br>
  ```bash
  $ javac -g -nowarn -d /home/usuario/mis_clases miPrograma.java
  ```
{: .text-justify}

## 5.5 El depurador jdb  

El jdb es el depurador de Java. Al funcionar desde la línea de comandos resulta complejo de aprender a usar. En realidad, casi nadie lo utiliza si no es a través de los menús de un IDE, de modo que esta sección solo es una referencia rápida para aquellos que estén muy interesados en este asunto. Si no es tu caso, puedes pasar sin problemas a la siguiente sección. 
{: .text-justify}

Recuerda que para usar el depurador las aplicaciones Java deben estar compiladas con la opción -g. Posteriormente, para depurarlas usaremos:
{: .text-justify}

```bash
$ jdb [nombreclass]
```
{: .text-justify}

Entramos entonces en un nuevo prompt, el del jdb, a través del cual podemos realizar la depuración de la clase. Para ello se usan los siguientes comandos:
{: .text-justify}

- `help`: Proporciona una lista de los comandos que están disponibles en la sesión de jdb.  • print <id> [id(s)]: imprime un objeto o campo
- `dump <id> [id(s)]`: imprime toda la información del objeto
- `locals`: imprime las variables locales de la pila actual
- `classes`: lista las clases conocidas
- `methods <class id>`: lista los métodos de una clase
- `stop in <class id>.<method>`: fija un punto de ruptura en un método
- `stop at <class id>:<line>`: establece un punto de ruptura en una línea
- `clear <class id>:<line>`: eliminar un punto de ruptura
- `step`: ejecutar la línea actual
- `cont`: continuar la ejecución desde el punto de ruptura
- `catch <class id>`: parar por la excepción especificada
- `ignore <class id>`: ignorar la excepción especificada
- `list [line number]`: imprimir código fuente
- `use [source file path]`: ver o cambiar la ruta del fichero fuente
- `memory`: informe del uso de la memoria
- `load <classname>`: carga la clase Java a ser depurada
- `run <args>`: comienza la ejecución de la clase cargada
- `!!`: repite el último comando
- `exit (o quit)`: salir del depurador  

## 5.6. La ejecución del código objeto  

Nuevamente, este apartado está concebido como una referencia para usuarios que quieren usar el comando de ejecución de forma más avanzada. Si no es tu caso, puedes saltar a la siguiente sin perderte nada. 
{: .text-justify}

El comando java lanza una aplicación compilada con javac, es decir, lanza la JVM para interpretar el código objeto en bytecodes.  
{: .text-justify}

Como todos los comandos, java tiene una sintaxis definida:
{: .text-justify}

```bash
$ java [ opciones ] fichero.class [ argumentos ]
```

Las opciones modifican el funcionamiento de la JVM. La clase se refiere a un archivo .class, y los argumentos son los que se pasarán al programa compilado.  
{: .text-justify}

También se puede ejecutar un .jar de este modo:
{: .text-justify}

```bash
$ java [ opciones ] -jar fichero.jar [ argumentos ]
```

Algunas opciones del comando java son:  
{: .text-justify}

- d32 y d64: hacen que el programa se ejecute en una JVM de 32 o de 64 bits, respectivamente. 
{: .text-justify}
- verbose: para mostrar información adicional de la ejecución.
{: .text-justify}
- X: lista de opciones no-estándar (variarán de una JVM a otra) 
{: .text-justify}


*[POO]: Programación Orientada a Objetos
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
