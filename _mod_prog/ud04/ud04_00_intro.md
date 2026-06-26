---
title: "Ud. 04 - Introducción"
permalink: /mod_prog/ud04/intro/
excerpt: "Introducción a la programación orientada a objetos"
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

Si has llegado hasta aquí, ¡enhorabuena! Por si aún no lo habíamos dicho, **aprender a programar es difícil** y requiere **constancia** y **compromiso**. Si estás aquí es porque estás demostrando ambas. Y te felicito por ello.
{: .text-justify}

Ya hemos plantado los cimientos: sabemos construir pequeños programas con un par de clases funcionando en modo amo-esclavo (o cliente-servidor) y sabemos escribir el código de los métodos de esas clases para que hagan lo que necesitamos utilizando las viejas herramientas de la programación estructurada (recuerda que la programación orientada a objetos es una evolución de la programación estructurada clásica).
{: .text-justify}

Pero aún estás lejos de hacer un programa real, complejo y sensiblemente más grande de lo que has hecho hasta ahora. Para eso es necesario un diseño de clases más complejo e incorporar algunos otros detalles a nuestros objetos para recoger en ellos parte de la complejidad del mundo real que pretendemos modelar en los programas informáticos.
{: .text-justify}

Aunque esto pueda sonarte feo o desagradable, a estas alturas aún no tienes los conocimientos para crear tu primera aplicación real (compleja, organizada en la arquitectura de software apropiada y testeada). Y tardarás un tiempo en llegar a ello, porque antes del desarrollo hay que hacer un análisis y para ser analista... hace falta mucho rodaje en el desarrollo de software.
{: .text-justify}

Es decir, que el mantra que os repetimos en clase de que "**_Solo hay una forma de aprender a programar: programando_**" (durante horas delante del ordenador) **no es solo para que apruebes este módulo**. Es para que vayas acumulando experiencia como *software developer* desde ya. Así el avance es mucho mayor y te acerca aún más a esa figura de *analista*.
{: .text-justify}

Y es en esta unidad donde vamos a darte "*¡más madera!*"[^1] para que te vayas creando aplicaciones más complejas, que utilicen varias clases interrelacionadas de manera razonable y que **empiecen a exprimir la potencia del paradigma de orientación a objetos**.
{: .text-justify}

Empezaremos el capítulo aprendiendo a crear nuestros propios **paquetes** de clases en Java. Después daremos algunas pautas básicas de **diseño de clases** y hablaremos de los **niveles de acceso** (`public`, `protected`, `private`), de los objetos `this` y `super` y de la clase `Object`.
{: .text-justify}

Nos detendremos después en las diferencias entre **atributos y métodos de clase y de instancia**, cuándo conviene usar uno u otro, y profundizaremos en los **constructores** y los **destructores**.
{: .text-justify}

Luego hablaremos de los **interfaces** y los **wrappers**, así como de las clases y métodos **abstractos**, y trataremos con bastante profundidad las posibilidades del **polimorfismo** en Java. Y, por supuesto, no nos olvidaremos de la **herencia**, una de las peculiaridades más destacadas de los lenguajes orientados a objeto.
{: .text-justify}

Esta unidad va a contener muchos más conceptos, pero los veremos con ejemplos prácticos para afianzarlos. Como dice Alfredo Moreno Vozmediano: "*Estás a punto de adentrarte en algunos de los vericuetos más arcanos del paradigma de orientación a objetos. Abróchate el cinturón, que partimos.*". 
{: .text-justify}

[^1]: Buzzell, E. (Director). (1940). **_Los Hermanos Marx en el Oeste_** [Película]. Metro-Goldwyn Mayer.

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
