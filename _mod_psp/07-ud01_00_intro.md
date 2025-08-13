---
title: "Unidad 01 - Introducción"
permalink: /mod_psp/ud01_00_intro/
excerpt: "Fuentes y recursos documentales sobre la normativa educativa aplicable al ciclo y al módulo."
last_modified_at: 2025-08-08T08:48:05-04:00
redirect_from:
  - /theme-setup/
toc: true
#toc_icon: "heart"  
---

En el día a día usamos aplicaciones informáticas en ordenadores y dispositivos móviles. Es en estos últimos donde más se percibe la ejecución de varias acciones "al mismo tiempo". Por ejemplo, en un mismo instante percibimos que el móvil:
- Actualiza la hora.
- Reproduce música.
- Recibe mensajes, correos, etc.
- Muestra mensajes y notificaciones.
- Descarga actualizaciones de una app mientras ejecuta otra(s).
- Etc.

Es aquí donde vamos a responder a las siguientes cuestiones:
- ¿Qué es un programa? ¿y un proceso? ¿en qué se diferencian?
- ¿Cuál es la diferencia entre programación concurrente y programación paralela?
- ¿Quién gestiona la ejecución de las tareas y cómo lo hace?
- ¿Qué fases tiene el ciclo de vida de la ejecución de cada tarea?

Comencemos este módulo por la pregunta más básica: la diferencia entre **programa** y **proceso**.

# Procesos
Un proceso **no es un programa**. Un programa es **estático**; un conjunto de líneas de código. Un proceso, en cambio, es la **ejecución del código del programa** (instrucciones y datos). Por eso **el proceso es dinámico**, ya que cambia su estado durante su ejecución.

**Importante:** recordemos que los procesos que se ejecutan (y los datos que utilizan) **deben estar en la RAM** ya que la CPU sólo accede a esta memoria de forma directa para obtener las intrucciones y datos a ejecutar.
{: .notice--info}

El ordenador ejecuta muchos procesos de forma que da la impresión de que se ejecutan todos a la vez. Esto es gracias a que el sistema operativo (en adelante SO) gestiona los procesadores, la memoria y demás recursos para repartirlos eficientemente entre dichos procesos.

Los procesos compiten por los recursos del sistema. De todos ellos, los más críticos son la **CPU** y la **memoria RAM**, ya que necesitan ambos para ejecutarse.

**CPU**

La CPU puede ejecutar sólo un proceso en cada instante, por lo que el SO reparte su uso dando un tiempo de ejecución (*quantum*) a cada proceso. Así, los procesos se van ejecutando por turnos una y otra vez hasta que finalizan. Esto se conoce como **multiprogramación** o **concurrencia**.

Para indicar qué proceso se va a ejecutar en cada momento, el procesador usa el registro **contador de programa** (CP), que apunta a la dirección de memoria correspondiente:

{% capture fig_img %}
![Contador de programa]({{ '/assets/images/ud01/ud01_figura_01_contador_de_programa.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Figura 01. Contador de programa indicando la zona de memoria donde se encuentra la siguiente instrucción o dato a procesar.</figcaption>
</figure>

**RAM**

La memoria es otro recurso limitado y no puede albergar todos los procesos activos. Por eso **el SO tiene mecanismos** para crear/terminar procesos y para asignar y proteger los espacios de memoria de cada proceso en ejecución.

## Características de un proceso - PCB
El SO implementa el modelo de procesos mediante una tabla de procesos. Cada entrada, llamada bloque de control de proceso o **PCB** (*Process Control Block*), almacena información de un proceso:
- **Identificador** o PID.
- **Estado** (listo, en ejecución, bloqueado, etc.).
- **Contador de programa** (CP) con la dirección de la siguiente instrucción a ejecutar.
- Estado de los **registros de la CPU**.
- **Información de uso de CPU**: prioridad del proceso, punteros a colas de planificación, tiempo de CPU consumido, etc.
- Espacio de **direcciones de memoria** que usa el proceso durante su ejecución.
- **Información de estado de E/S**: lista de dispositivos de E/S asignados al proceso, lista de ficheros abiertos, etc.

**TCB:** Generalmente los procesos son **multihilo**, por lo que en lugar de PCB se usa el **TCB** (*Thread Control Block*), similar al PCB, que incluye un puntero al PCB que lo creó.
{: .notice--info}

## Hilos
Un proceso puede dividir su trabajo en varios subprocesos llamados **hilos** o *threads*, que comparten los recursos y el espacio de direcciones del proceso, aunque cada hilo es un flujo de ejecución independiente que tiene su propio **CP**, **registros** y **pila**:

{% capture fig_img %}
![Hilos]({{ '/assets/images/ud01/ud01_figura_02_hilos.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Figura 02. Ejecución de hilos. Tienen una estructura muy similar a los procesos.</figcaption>
</figure>

Los hilos tienen similitudes con los procesos (estados, uso de CPU, pueden crear hilos hijos, etc.) aunque **son más eficientes** tanto en su creación como en el uso de la CPU y los recursos.

## Estados de un proceso
Cuando se crea un proceso, éste ocupa un espacio en memoria hasta que finaliza. Durante su tiempo de vida, puede pasar por varios estados:

{% capture fig_img %}
![Ciclo de vida de un proceso]({{ '/assets/images/ud01/ud01_figura_03_estados_proceso.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Figura 03. Ciclo de vida de los procesos. Estos son los estados en los que puede estar un proceso durante su ejecución.</figcaption>
</figure>

Veamos qué ocurre con un proceso en cada estado:
- **Listo**: permanece en una cola de planificación, junto a otros procesos. El *scheduler* decide cuál debe ejecutarse y el dispatcher lo manda a la CPU para ejecutarlo.
- **Ejecutando**: el proceso toma el control de la CPU para ejecutarse.
- **Bloqueado**: el proceso en ejecución debe dejar la CPU y esperar a que ocurra un evento que le permita continuar (p.e. que acabe una operación de E/S). Cuando dicho evento suceda, el proceso irá a la cola de planificación (Listo) y esperará su turno para ejecutarse.
- **Terminado**: aunque el proceso ha finalizado, el SO lo mantiene por si quedan operaciones pendientes que necesiten referirse a él.

Si el sistema tiene **memoria virtual**, los procesos en estado “Listo” y “Bloqueado” pueden almacenarse en disco, en el área de **_swap_**.

Cuando un proceso va a dejar la CPU para bloquearse o ir a la cola de espera (Listo), el _**dispatcher**_ realiza el **cambio de contexto** del proceso, que consiste en:
- Guarda en el PCB del proceso el estado de los registros de CPU y demás información de su ejecución, para que el proceso sepa por dónde continuar cuando vuelva a ejecutarse.
- Se trata la interrupción del SO.

# Concurrencia
La **multiprogramación** consigue un pseudo-paralelismo o la ilusión de que varios procesos se ejecutan a la vez en un solo procesador. Además permite la **concurrencia**, donde una tarea se divide en distintos procesos paralelos para obtener un solo resultado.

Hoy en día los procesadores incluyen varios núcleos, que pueden ejecutar procesos simultáneamente consiguiendo un **paralelismo real** o **multiproceso**. Aún así, cada uno de esos núcleos sigue usando la multiprogramación para aumentar el rendimiento.

# Comunicación entre procesos
También llamada **IPC** (*Inter-Process Communication*), permite que dos o más procesos puedan intercambiar información.

## Métodos de comunicación
Los procesos se pueden comunicar de 2 formas:
- **Memoria compartida**: la información compartida se ubica en un área de memoria común (buffer) que es accesible por todos los procesos involucrados en la IPC:

{% capture fig_img %}
![Comunicación entre procesos - Memoria compartida]({{ '/assets/images/ud01/ud01_figura_04_memoria_compartida.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Figura 04. Varios procesos usan un mismo espacio de memoria para intercambiar datos.</figcaption>
</figure>

- **Paso de mensajes**: un mensaje es un bloque de información creado por un proceso emisor y que tiene sentido para el proceso receptor. Los mensajes no se envían directamente al receptor. Se depositan en una cola de mensajes o buzón que leerán los procesos receptores para recuperar la información:

{% capture fig_img %}
![Comunicación entre procesos - Paso de mensajes]({{ '/assets/images/ud01/ud01_figura_05_paso_mensajes.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Figura 05. Los mensajes no se envían directamente al proceso destinatario. Se depositan en una cola de mensajes.</figcaption>
</figure>

## Condición de carrera
Cuando varios procesos comparten un dato común (p.e. una posición de memoria) y acceden a él para leerlo/modificarlo, pueden surgir inconsistencias.

Por ejemplo, un proceso A puede leer el valor de dicho dato pero pierde la CPU antes de actualizarlo. Otro proceso B cambia dicho dato, así que el valor que ha recogido A ya no es válido y cuando retoma la CPU se encuentra con una incoherencia. 

Esta situación se conoce como **condición de carrera** y la parte del programa en la que se accede a ese dato compartido es su **sección crítica**.

Para evitar esta situación se usa la **exclusión mutua** que asegura el acceso de **un único proceso a la vez a una sección crítica**, bloqueando al resto:

{% capture fig_img %}
![Exclusión mútua]({{ '/assets/images/ud01/ud01_figura_06_exclusion_mutua.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Figura 06. Exclusión mútua. Un proceso queda en estado bloqueado para que otro proceso se ejecute.</figcaption>
</figure>

## Exclusión mútua
Para conseguir la exclusión mutua se **deben cumplir todas** estas condiciones:
- No puede haber dos procesos a la vez dentro de sus secciones críticas.
- No pueden hacerse suposiciones acerca de las velocidades o el número de CPUs.
- Un proceso ejecutándose fuera de su sección crítica no puede bloquear a otros.
- Ningún proceso tiene que esperar para siempre para entrar a su sección crítica.

Para conseguirlo, se pueden usar técnicas como:
- **Exclusión mutua con espera ocupada**: solución software donde los procesos se comunican por memoria compartida en la que mantienen la variable candado. Si alguno accede, modifica su valor, dejando al resto en espera ocupada (comprobando una y otra vez dicha variable).
  - **Solución de Peterson**: : solución software donde los procesos se comunican por memoria compartida en la que mantienen la variable candado. Si alguno accede, modifica su valor, dejando al resto en espera ocupada (comprobando una y otra vez dicha variable).
  - **Instrucción TSL**: estas instrucciones provocan la espera ocupada bloqueando el **bus de memoria**.
- **Semáforos**: es una variable entera positiva, un contador de recursos, de forma que si su valor es 0, indica que no hay recursos disponibles. Cuando se solicita un recurso se comprueba el semáforo:
  - Si es > 0, lo decrementa y sigue ejecutándose.
  - En caso contrario, el proceso queda en espera ocupada hasta que haya un recurso disponible.

# Sincronización e interbloqueos
No se puede saber con antelación ni el orden ni el tiempo de ejecución de los procesos, por lo que deben sincronizarse si van a compartir datos.
Supongamos, por ejemplo, que un proceso A se bloquea hasta que otro B termine una tarea. Podría suceder que B esté suspendido esperando a que finalice A. Esta situación se llama **interbloqueo** y ocurre en las siguientes condiciones:
- **Exclusión mutua**. Los procesos bloquean los recursos adquiridos, dejando en espera al resto.
- **Retención y espera**. Los procesos retienen los recursos adquiridos mientras esperan a adquirir otros recursos que están siendo retenidos por otros procesos.
- **No apropiación**. Los procesos acaparan los recursos, liberándolos voluntariamente al finalizar su tarea.
- **Espera circular**. Cuando cada proceso retiene al menos un recurso que es solicitado por el siguiente proceso de la cadena.

Evitando **sólo una** de estas condiciones **se evita el interbloqueo**.

## Algoritmo del banquero.
Otra manera es mediante este algoritmo, que asume que el número de recursos asignados a todos los procesos **nunca puede exceder el número de recursos del sistema**.

El algoritmo concede recursos sólo si **evita la espera circular** para conseguir que todos los procesos puedan adquirir los recursos necesarios y finalizar su ejecución.

El inconveniente es que los procesos deben conocer por adelantado sus necesidades máximas.

## Grafos de asignación de recursos.
En ellos se representan los procesos, los recursos y las peticiones y asignaciones de cada uno de ellos. Este sistema facilita la detección de interbloqueos, ya que éstos aparecen en el grafo como ciclos.

{% capture fig_img %}
![Grafos de asignación de recursos]({{ '/assets/images/ud01/ud01_figura_07_grafos_recursos.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Figura 07. Grafos de asignación de recursos.</figcaption>
</figure>

# Planificación de procesos
El **_scheduler_** o **planificador de procesos** es el componente del SO que decide cuál será el siguiente proceso a ejecutar. Para ello usa:
- **Colas**, donde almacenar los procesos en espera.
- **Algoritmos de planificación**, que indicarán qué proceso sale de esa cola para ejecutarse en la CPU. Esos algoritmos pueden clasificarse en:
  - **Apropiativos**: otorgan la CPU a un proceso durante un tiempo o *quantum*. Al consumirlo, se intercambia con el proceso de la cola que decida el *scheduler*.
  - **No apropiativos**: cuando un proceso está usando la CPU y la libera voluntariamente al finalizar, no el scheduler.

## Algoritmos de planificación.
Los algoritmos más usados son:
1. **FCFS** (*First-Come, First-Served*): es no apropiativo, donde los PCBs de los procesos listos en memoria se organizan en una cola donde el que antes llega antes usa la CPU. Es poco eficiente si hay procesos que requieren mucho tiempo de CPU.
1. **<span id="algoritmo_sjf">SJF</span>** (*Shortest Job First*): algoritmo no apropiativo que manda a ejecutar el proceso que necesita menos tiempo de CPU. En caso de empates usa el FCFS. Los procesos que requieren mucho tiempo de CPU pueden quedar desatendidos.
1. **<span id="algoritmo_srpt">SRPT</span>** (*Shortest Remaining Processing Time*): se trata de un SJF apropiativo, que elige el proceso que requiera menos tiempo de CPU para finalizar su ejecución.
El problema radica en conocer de antemano el tiempo que necesitará cada proceso.
1. **RR** (*Round Robin*): versión apropiativa del FCFS en el que cuando un proceso finaliza su quantum, el planificador lo suspende y lo envía al final de la cola, si no ha terminado. Si lo ha hecho, toma otro proceso.

El resultado de estos algoritmos se mide con los siguientes parámetros:

- **Tiempo de retorno**: el transcurrido desde que se lanza un proceso (ti) hasta que finaliza su ejecución (tf):
<br>
tR = tf - ti
- **Tiempo de espera**: el tiempo que el proceso permanece en cola de espera (Listo) hasta que finaliza:
<br>
tE = tR - tCPU - tE/S
<br>
Donde:
<br>
tCPU = tiempo en ejecución
<br>
tE/S = tiempo bloqueado
- **Tiempo de servicio**: es el tiempo que consume, quitando el tiempo de espera:
<br>
tS = tR - tE = tCPU + tE/S
- **Índice de penalización**:
<br>
IP = tR / tS
- **Índice de servicio**:
<br>
IS = tS / tR

### Ejemplo
Para los procesos de la tabla:

| Proceso | Tiempo de llegada  | Tiempo de servicio  |
| ----    | ---- | ---- |
| A       | 0 | 4 |
| B       | 1 | 2 |
| c       | 1 | 1 |

Veamos los cronogramas de ejecución para un algoritmo no apropiativo ([SJF](#algoritmo_sjf)) frente a otro apropiativo ([SRPT](#algoritmo_srpt)) con *quantum* q=1, donde:
-	**E** = Ejecutando
-	**L** = Listo
-	**T** = Terminado

|   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | E | E | E | E | T | T | T | T |
| B |   | L | L | L | L | E | E | T |
| C |   | L | L | L | E | T | T | T |


# Fuentes
- Consejería de Desarrollo Educativo y Formación Profesional - **_Técnico Superior en Desarrollo de Aplicaciones Multiplataforma_** (s. f.). <https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/por-titulacion/fp-grado-superior/detalle-titulo?idTitulo=51>{:target="_blank"}
- Consejería de Desarrollo Educativo y Formación Profesional - **_Orden de 16 de junio de 2011_** (s. f.). <https://www.juntadeandalucia.es/boja/2011/142/20>{:target="_blank"}
- Consejería de Desarrollo Educativo y Formación Profesional - **_Guía del ciclo formativo para el profesorado_** (s. f.). <http://www.juntadeandalucia.es/educacion/portals/galion/GUIA/GUIA_51.pdf>{:target="_blank"}
- Consejería de Desarrollo Educativo y Formación Profesional - **_Informe sobre el ciclo en la modalidad de oferta parcial diferenciada_** (s. f.). <http://www.juntadeandalucia.es/educacion/portals/galion/INFORME_PARCIAL_DIFERENCIDA_TS_DESARROLLO_APLICACIONES_MULTIPLATAFORMA.pdf>{:target="_blank"}

---

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
