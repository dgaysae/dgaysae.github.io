---
title: "Programación - Sobre el módulo de Programación"
permalink: /mod_prog/about_modulo/
excerpt: "Contenidos y objetivos del módulo de Programación."
last_modified_at: 2025-08-08T08:48:05-04:00
redirect_from:
  - /theme-setup/
toc: true
#toc_icon: "heart"  
---

La **[Orden de 16 de junio de 2011](https://www.juntadeandalucia.es/boja/2011/142/20){:target="_blank"}** establece par este módulo profesional de DAM los siguientes contenidos, la objetivos expresados como Resultados de Aprendizaje (RA) que se quieren alcanzar con ellos y los respectivos criterios para evaluar la consecución de dichos RA.
{: .text-justify}

También se muestran las orientaciones pedagógicas asociadas a este módulo de PSP.
{: .text-justify}

---

# Contenidos básicos

- **Programación multiproceso**:
  - Ejecutables. Procesos. Servicios. Problemas asociados a recursos compartidos.
  - Estados de un proceso. Planificación de procesos por el sistema operativo.
  - Hilos.
  - Programación concurrente.
  - Programación paralela y distribuida.
  - Creación de procesos.
  - Comunicación entre procesos.
  - Gestión de procesos.
  - Sincronización entre procesos.
  - Programación de aplicaciones multiproceso.
  - Depuración y documentación.

- **Programación multihilo**:
  - Recursos compartidos por los hilos.
  - Estados de un hilo. Cambios de estado.
  - Elementos relacionados con la programación de hilos. Librerías y clases.
  - Gestión de hilos. Creación, inicio y finalización.
  - Compartición de información entre hilos.
  - Sincronización de hilos.
  - Prioridades de los hilos. Gestión de prioridades.
  - Programación de aplicaciones multihilo.
  - Depuración y documentación.

- **Programación de comunicaciones en red**:
  - Protocolos de comunicaciones. Puertos.
  - Comunicación entre aplicaciones.
  - Roles cliente y servidor.
  - Elementos de programación de aplicaciones en red. Librerías.
  - Sockets. Tipos y características.
  - Creación de sockets.
  - Enlazado y establecimiento de conexiones.
  - Utilización de sockets para la transmisión y recepción de información.
  - Finalización de conexiones.
  - Programación de aplicaciones cliente y servidor en red.
  - Utilización de hilos en la programación de aplicaciones en red.

- **Aplicaciones de servicios en red**:
  - Protocolos estándar de comunicación en red a nivel de aplicación (telnet, ftp, http, pop3, smtp, entre otros)
  - Librerías de clases y componentes.
  - Utilización de objetos predefinidos.
  - Establecimiento y finalización de conexiones.
  - Transmisión de información.
  - Programación de aplicaciones cliente.
  - Programación de servidores.
  - Implementación de comunicaciones simultáneas.
  - Pruebas de la disponibilidad del servicio. Monitorización de tiempos de respuesta.
  - Depuración y documentación.

- **Utilización de técnicas de programación segura**:
  - Prácticas de programación segura.
  - Principios criptográficos. Principales aplicaciones de la criptografía.
  - Protocolos criptográficos.
  - Criptografía de clave pública y clave privada.
  - Política de seguridad. Limitaciones y control de acceso a usuarios. Esquemas de seguridad basados en roles.
  - Programación de mecanismos de control de acceso.
  - Encriptación de información.
  - Protocolos seguros de comunicaciones.
  - Sockets seguros.
  - Programación de aplicaciones con comunicaciones seguras.
  - Depuración y documentación.

# Resultados de aprendizaje y criterios de evaluación

Los **Resultados de aprendizaje** (RA) pueden interpretarse como los objetivos a alcanzar para adquirir las [competencias](#competencias_pps) indicadas anteriormente. Para evaluar la consecución de cada uno de ellos se seguirán los correspondientes criterios de evaluación.
{: .text-justify}

**1. Desarrolla aplicaciones compuestas por varios procesos reconociendo y aplicando principios de programación paralela.**
{: .text-justify}

Criterios de evaluación:

a) Se han analizado las características de los procesos y de su ejecución por el sistema operativo.
{: .text-justify}

b) Se han caracterizado los hilos de ejecución y descrito su relación con los procesos.
{: .text-justify}

c) Se han reconocido las características de la programación concurrente y sus ámbitos de aplicación.
{: .text-justify}

d) Se han identificado las diferencias entre programación paralela y programación distribuida, sus ventajas e inconvenientes.
{: .text-justify}

e) Se han utilizado clases para programar aplicaciones que crean subprocesos.
{: .text-justify}

f) Se han utilizado mecanismos para sincronizar y obtener el valor devuelto por los subprocesos iniciados.
{: .text-justify}

g) Se han desarrollado aplicaciones que gestionen y utilicen procesos para la ejecución de varias tareas en paralelo.
{: .text-justify}

h) Se han depurado y documentado las aplicaciones desarrolladas.
{: .text-justify}

**2. Desarrolla aplicaciones compuestas por varios hilos de ejecución analizando y aplicando librerías específicas del lenguaje de programación.**
{: .text-justify}

Criterios de evaluación:

a) Se han identificado situaciones en las que resulte útil la utilización de varios hilos en un programa.
{: .text-justify}

b) Se han reconocido los mecanismos para crear, iniciar y finalizar hilos.
{: .text-justify}

c) Se han programado aplicaciones que implementen varios hilos.
{: .text-justify}

d) Se han identificado los posibles estados de ejecución de un hilo y programado aplicaciones que los gestionen.
{: .text-justify}

e) Se han utilizado mecanismos para compartir información entre varios hilos de un mismo proceso.
{: .text-justify}

f) Se han desarrollado programas formados por varios hilos sincronizados mediante técnicas específicas.
{: .text-justify}

g) Se ha establecido y controlado la prioridad de cada uno de los hilos de ejecución.
{: .text-justify}

h) Se han depurado y documentado los programas desarrollados.
{: .text-justify}

**3. Programa mecanismos de comunicación en red empleando sockets y analizando el escenario de ejecución.**

Criterios de evaluación:

a) Se han identificado escenarios que precisan establecer comunicación en red entre varias aplicaciones.
{: .text-justify}

b) Se han identificado los roles de cliente y de servidor y sus funciones asociadas.
{: .text-justify}

c) Se han reconocido librerías y mecanismos del lenguaje de programación que permiten programar aplicaciones en red.
{: .text-justify}

d) Se ha analizado el concepto de socket, sus tipos y características.
{: .text-justify}

e) Se han utilizado sockets para programar una aplicación cliente que se comunique con un servidor.
{: .text-justify}

f) Se ha desarrollado una aplicación servidor en red y verificado su funcionamiento.
{: .text-justify}

g) Se han desarrollado aplicaciones que utilizan sockets para intercambiar información.
{: .text-justify}

h) Se han utilizado hilos para implementar los procedimientos de las aplicaciones relativos a la comunicación en red.
{: .text-justify}

**4. Desarrolla aplicaciones que ofrecen servicios en red, utilizando librerías de clases y aplicando criterios de eficiencia y disponibilidad.**
{: .text-justify}

Criterios de evaluación:

a) Se han analizado librerías que permitan implementar protocolos estándar de comunicación en red.
{: .text-justify}

b) Se han programado clientes de protocolos estándar de comunicaciones y verificado su funcionamiento.
{: .text-justify}

c) Se han desarrollado y probado servicios de comunicación en red.
{: .text-justify}

d) Se han analizado los requerimientos necesarios para crear servicios capaces de gestionar varios clientes concurrentes.
{: .text-justify}

e) Se han incorporado mecanismos para posibilitar la comunicación simultánea de varios clientes con el servicio.
{: .text-justify}

f) Se ha verificado la disponibilidad del servicio.
{: .text-justify}

g) Se han depurado y documentado las aplicaciones desarrolladas.
{: .text-justify}

**5. Protege las aplicaciones y los datos definiendo y aplicando criterios de seguridad en el acceso, almacenamiento y transmisión de la información.**
{: .text-justify}

Criterios de evaluación:

a) Se han identificado y aplicado principios y prácticas de programación segura.
{: .text-justify}

b) Se han analizado las principales técnicas y prácticas criptográficas.
{: .text-justify}

c) Se han definido e implantado políticas de seguridad para limitar y controlar el acceso de los usuarios a las aplicaciones desarrolladas.
{: .text-justify}

d) Se han utilizado esquemas de seguridad basados en roles.
{: .text-justify}

e) Se han empleado algoritmos criptográficos para proteger el acceso a la información almacenada.
{: .text-justify}

f) Se han identificado métodos para asegurar la información transmitida.
{: .text-justify}

g) Se han desarrollado aplicaciones que utilicen sockets seguros para la transmisión de información.
{: .text-justify}

h) Se han depurado y documentado las aplicaciones desarrolladas.
{: .text-justify}

# Orientaciones pedagógicas.

Al cursar este módulo profesional se obtiene la formación necesaria para desarrollar aplicaciones seguras en red en aspectos como:
{: .text-justify}
- El desarrollo de programas organizados en clases aplicando los principios de la programación orientada a objetos.
  {: .text-justify}
- La utilización de interfaces para la interacción de la aplicación con el usuario.
  {: .text-justify}
- La identificación, análisis e integración de librerías para incorporar funcionalidades específicas a los programas desarrollados.
  {: .text-justify}
- El almacenamiento y recuperación de información en sistemas gestores de bases de datos relacionales y orientados a objetos.
  {: .text-justify}

---

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
{: .text-justify}
