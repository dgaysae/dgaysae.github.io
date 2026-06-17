---
title: "Ud. 01 - Resolución de problemas"
permalink: /mod_prog/ud01/resolucion_problemas/
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


# 2. Resolución de problemas

La programación como tal requiere de conocimientos específicos en algún lenguaje de programación, pero eso no es lo esencial.
{: .text-justify}

Un **programador** es aquella persona **capaz de encontrar soluciones** a determinados problemas mediante el diseño e implementación de programas.
{: .notice--info}
{: .text-justify}

Veamos algunos conceptos relacionados con este objetivo.
{: .text-justify}

## 2.1 Ingeniería del software 

El término de **ingeniería** aparece en el campo de la informática tras la **crisis del software**[^3]. Hasta entonces se programaba sin seguir metodologías, reglas, paradigmas o normas básicas. Cada cual con algunos conocimientos del funcionamiento de un ordenador podía escribir programas.
{: .text-justify}

Pero el hardware evolucionaba muy deprisa y lor programas debían adaptarse. Y sin reglas a seguir... cada cual *hacía de su capa un sayo* y los programas se hacían más grandes, más difíciles de entender y, por tanto, de reparar y/o mantener.
{: .text-justify}

Esto provocó dicha crisis y la reacción no se hizo esperar. Surge así la **ingeniería del software** para establecer modelos y paradigmas de programación que permitan desarrollar programas siguiendo unas normas de organización.
{: .text-justify}

## 2.2 Ciclo de vida clásico 
Como en cualquier otra ingeniería, la del software comenzó por descomponer el desarrollo de un programa en fases, lo que se conoce como el **ciclo de vida del software**.
{: .text-justify}

Existen muchos modelos de ciclos de vida y en su mayoría tienen en común las siguientes fases:
{: .text-justify}

- **Análisis**.
  <br>
  El **análisis** sirve para responder a la pregunta *¿**QUÉ** problema hay que resolver?*
  {: .text-justify}


  Se trata de comprender cuál es el problema y los factores que le rodean e influyen en él.
  {: .text-justify}


  Por ejemplo, si nos encargan programar un carrito de la compra para una tienda *on-line* ¿quién puede añadir productos al carrito? ¿Existe un límite de productos? ¿Qué ocurre con los productos del carrito si el usuario sale de la aplicación sin realizar la compra?
  {: .text-justify}

  Es fundamental establecer qué información va a manejar el programa y cómo lo va a hacer de la forma más detallada posible. Por eso y para evitar conflictos con los clientes, todo esto se plasma en un **documento de requisitos**.
  {: .text-justify}

- **Diseño**.
  <br>
  El **diseño** responde a la pregunta *¿**CÓMO** se resuelve el problema?*
  {: .text-justify}

  En esta fase se realiza un diseño de la solución al problema planteado en la fase anterior. Un modelo de diseño muy habitual es el de **divide y vencerás** o **top-down** que consiste en dividir el problema principal en subproblemas más sencillos.
  {: .text-justify}

  {% capture fig_img03 %}
  ![Divide y vencerás]({{ '/assets/images/prog/ud01/ud01_prog_04_top_down.png' |   relative_url }})
  {% endcapture %}
  
<figure>
  {{ fig_img03 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Top-down o "Divide y venderás". </figcaption>
</figure>
  
  Es en esta fase, una vez definido el CÓMO, donde se decide el **lenguaje de programación** que se va a usar para desarrollar el software ya que se puede sopesar cuál es el que mejor se adapta a las necesidades del proyecto.
  {: .text-justify}

- **Especificación de módulos/clases**.
  <br>
  El *top-down* permite organizar mejor el trabajo ya que se puede implementar de forma independiente cada una de las soluciones a los subproblemas planteados en la fase de diseño.
  {: .text-justify}

  En nuestro caso, como veremos más adelante, se hará mediante la codificación de **clases** ya que usaremos el lenguaje Java orientado a objetos. Aunque dependiendo del paradigma o estilo de programación que se use puede ser, por ejemplo, un **módulo**[^1] en JavaScript, etc.
  {: .text-justify}
  
  En el caso de la POO (OOP en inglés) suelen usarse diagramas **[UML](https://es.wikipedia.org/wiki/Lenguaje_unificado_de_modelado){:target="_blank"}** para indicar qué clases se han de codificar, cómo se van a comportar y cómo se relacionan entre si.
  {: .text-justify}

  Estos diagramas se estudian en el módulo de **Entornos de desarrollo**, aunque los usaremos también en nuestras clases.
  {: .text-justify}

- **Codificación**.
  <br>
  En esta fase se materializan en **código fuente** las clases planteadas en la fase anterior.
  {: .text-justify}

  En otras palabras, aquí es donde se va a **picar código**.
  {: .text-justify}

- **Pruebas**.
  <br>
  Es imprescindible comprobar que el código fuente funciona correctamente. Por eso esta fase es esencial.
  {: .text-justify}

  Los errores básicos son:
  {: .text-justify}

  - De **sintaxis**. Son aquellos que ocurren cuando se escribe mal una instrucción y, por tanto, no se reconoce. Estos errores los detecta y subsana el propio programador mientras programa. 
  {: .text-justify}

  Cada programador va realizando las pruebas oportunas conforme va codificando. Así detecta errores de **sintaxis**, que ocurren cuando se escribe mal una instrucción y, por tanto, no se reconoce como expresión válida.
  {: .text-justify}

  Pero esto **no es suficiente** ya que los programadores tienen una visión sesgada del funcionamiento de sus programas. Es decir, en muchas ocasiones no se ponen en la piel del usuario que utilizará ese programa. Por eso es conveniente que otras personas (*testers*) realicen baterías de pruebas guiándose en el análisis de requisitos y en diseño propuesto.
  {: .text-justify}

  La experiencia y el tiempo han dado pie al despliegue de una ciencia alrededor de las pruebas. Así, podemos encontrar distintos tipos de pruebas[^2]:
  {: .text-justify}

  - Tests unitarios.
  - Pruebas de integración.
  - Pruebas funcionales.
  - Pruebas de aceptación.
  - ...

- **Mantenimiento**.
  <br>
  Una vez en producción (el programa ya está siendo usado por los usuarios) pueden surgir errores no contemplados en la fase de pruebas, o la necesidad de replantear algunas funcionalidades en base a las necesidades del usuario o las limitaciones del sistema, etc.
  {: .text-justify}

  Es entonces cuando se hacen labores de **mantenimiento**, que pueden ser de distintos tipos:
  {: .text-justify}

  - **Correctivo**, para enmendar errores que no se hubieran detectado en la fase de pruebas).
  - **Perfectivo**, para mejorar el rendimiento o añadir más funciones.
  - **Adaptativo**, para adaptar el programa a otros entornos.

  El ciclo de vida es un proceso extenso y que requiere el trabajo en equipo. Por eso durante el curso nos vamos a centrar en la **especificación de clases** y la **codificación**. El resto se estudian en otros módulos.
  {: .notice--info}
  {: .text-justify}

## 2.3 El papel del programador 

Dentro del proceso del desarrollo de software, el programador tiene una tarea clara y precisa: codificar programas en base a las especificaciones que se le asignan.
{: .text-justify}

Generalmente las fases de análisis y diseño suelen ser tarea para otros perfiles, aunque en la vida real el programador "*sirve para un roto y un descosido*". Es decir, que acaba haciendo de todo un poco.
{: .text-justify}

*[POO]: Programación Orientada a Objetos
*[OOP]: Object-Oriented Programming

[^1]: Módulos JavaScript. (s/f). **_MDN Web Docs_**. Recuperado el 22 de agosto de 2025, de <https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules>{:target="_blank"}

[^2]: Atlassian. (s/f). **_Los distintos tipos de pruebas en software_**. Atlassian. Recuperado el 26 de agosto de 2025, de <https://www.atlassian.com/es/continuous-delivery/software-testing/types-of-software-testing>{:target="_blank"}

[^3]: Wikipedia contributors. (s/f). **_Crisis del software_**. Wikipedia, The Free Encyclopedia. <https://es.wikipedia.org/w/index.php?title=Crisis_del_software&oldid=164378777>{:target="_blank"}






---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
