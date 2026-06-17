---
title: "Ud. 02 - Más sobre métodos"
permalink: /mod_prog/ud02/paquetes/
excerpt: "Paso de parámetros, qué valores devuelven. También veremos qué son los métodos estáticos y los constructores."
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

# 5 Paquetes

Un paquete o ***package*** es un conjunto de clases relacionadas entre sí empaquetadas en un archivo. En el JDK existen multitud de paquetes estándar que usarás continuamente, y, además, puedes encontrar paquetes de terceros para hacer todo tipo de cosas. Y tú mismo aprenderás a hacer tus propios paquetes. 
{: .text-justify}

Por ejemplo, en el JDK existe un paquete llamado java.io, donde se agrupan todas las clases que permiten hacer la entrada/salida de datos (por consola y teclado, pero también escribir en archivos de disco, por ejemplo). 
{: .text-justify}

El uso de paquetes permite agrupar las clases relacionadas en un solo lugar y, además, evitar posibles conflictos con nombres de clases y métodos que se repitan. Al estar en paquetes separados, ya no es posible la confusión. 
{: .text-justify}

Para usar un paquete se utiliza la sentencia **`import`**. En este ejemplo puedes ver su uso:
{: .text-justify}

```java
import java.lang.System;  // Importa la clase System del paquete java.lang
import java.lang.*;       // Importa todas las clases del paquete java.lang
```

Una vez importado un paquete, podemos usar los métodos del mismo sin indicar el nombre completo del paquete. Por ejemplo, en lugar de hacer esto:
{: .text-justify}

```java
System.out.println("Hola, mundo");
```

Podemos hacer esto:

```java
import java.lang.System;  
println("Hola, mundo");
```

Para acceder correctamente a los paquetes, el compilador de Java necesita saber dónde están los archivos de la biblioteca de clases, es decir, tienes que configurar adecuadamente la variable de entorno `CLASSPATH`.
{: .text-justify}

```bash
$ CLASSPATH = <ruta a la biblioteca de clases>:<ruta 2>:<ruta 3>:etc $ export CLASSPATH  
```
(sustituye el carácter `:` por `;` si estás trabajando en un sistema Windows) 

Recuerda que, como vimos en el tema 1, también puedes compilar el programa con la opcion `-cp`, indicando a continuación el *classpath* de tu aplicación:
{: .text-justify}

```bash
$ javac -cp /ruta/a/mis/clases nombre.java
```

{% capture fig_img02 %}
![Jerarquía de clases en Java]({{ '/assets/images/prog/ud02/ud02_02_jerarquia_clases_java.png' | relative_url }})
{% endcapture %}
  
<figure>
  {{ fig_img02 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Jerarquía de clases en Java. </figcaption>
</figure>

---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}
{: .text-justify}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
{: .text-justify}
