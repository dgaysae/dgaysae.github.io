---
title: "Unidad 01 - Introducción"
permalink: /mod_psp/ud01_00_intro/
excerpt: "Procesos e hilos: introducción teórica."
last_modified_at: 2025-08-08T08:48:05-04:00
redirect_from:
  - /theme-setup/
toc: true
#toc_sticky: true
#toc_icon: "heart"  
---

En el día a día usamos aplicaciones informáticas en ordenadores y dispositivos móviles. Es en estos últimos donde más se percibe la ejecución de varias acciones "al mismo tiempo". Por ejemplo, en un mismo instante percibimos que el móvil:
- Actualiza la hora.
- Reproduce música.
- Recibe mensajes, correos, etc.
- Muestra mensajes y notificaciones.
- Descarga actualizaciones de una app mientras ejecuta otra(s).
- Etc.

Esto se debe a la **concurrencia** y los mecanismos que nos permiten usarla en nuestros programas.

Lo que has aprendido hasta ahora en el módulo de **[Programación](/mod_prog/about/)** te ha permitido desarrollar programas de un solo hilo de ejecución conocido como **hilo principal** o **_main thread_**. Ese hilo (tu programa) comienza a ejecutarse por la primera instrucción del `public static void main(String[] args){...}` e irá ejecutando cada línea de código de forma secuencial hasta llegar a la última (o ejecutar alguna instrucción de salida desde algún botón).
```java
// Main.java

public class Main {
  public static void main(String[] args) {
    tarea_1;
    tarea_2;
    ...
    tarea_n;
  }
}
```

**Ejecución secuencial**: en el código anterior `tarea_1` será la primera en ejecutarse. `tarea_2` no comenzará hasta que `tarea_1` haya finalizado y así sucesivamente hasta la `tarea_n`.
{: .notice--primary}

El flujo de ejecución sería algo así:

{% capture fig_img00 %}
![Ejecución secuencial de instrucciones]({{ '/assets/images/psp/ud01/ud01_figura_08_monoproceso.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img00 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Ejecución secuencial de tareas.</figcaption>
</figure>

Para entenderlo mejor imaginemos un restaurante donde trabaja solamente una persona. Esa persona debe: atender al teléfono, gestionar las reservas, limpiar y dejar listas las mesas, acomodar a los clientes que llegan, tomarles nota, cocinar los platos que han pedido, servirlos, etc.

No hace falta decir que ese restaurante no permanecería abierto mucho tiempo, ya que una persona sólo puede realizar una tarea en cada instante: si está atendiendo al teléfono no puede cocinar, ni limpiar una mesa. **Lo mismo ocurre con los programas** cuando sólo tienen un hilo de ejecución. Es decir, **esa persona es un hilo**.

Si hubiese una persona (un hilo) para cada tarea, todas ellas podrían hacer sus respectivas tareas al mismo tiempo y el servicio sería evidentemente más eficiente.

Los primeros sistemas operativos eran **monoprogramados**. En ellos sólo puede ejecutarse un programa en cada instante y debe finalizarse si se quiere ejecutar otro. Es decir, si se abre un editor de texto no se puede abrir también un navegador web u otro programa. Esto hoy en día es inimaginable, ¡**pero empezó así**!.

Ya sabemos que esta forma de gestionar procesos es poco eficiente. Lo mismo ocurre con nuestros programas. Si pulsamos un botón en nuestra pantalla para descargar un fichero, no podremos ejecutar nada más hasta que el fichero se haya descargado ya que la ejecución se hace secuencialmente)en un **_main thread_**.  

Veámoslo con un ejemplo más práctico. Tenemos una clase que lee los ficheros introducidos en los argumentos del main:
```java
// Main.java

public class Main {
  public static void main(String[] args) {
    for (String filePath : args) {
      readFile(filePath);
    }
  }

  /**
   * Se obvia el manejo de excepciones, etc.
   */
  public static void readFile(String filePath) {
    /*
     Código que lee el fichero de la ruta filePath e imprime
     el resultado por consola.
     */
  }
}
```

Si la ejecutamos para que lea tres ficheros:

```bash
psp@mycomputer$> java Main fichero1.txt fichero2.txt fichero3.txt
```

Primero se leerá el `fichero1.txt`. Hasta que no acabe no comenzará la lectura de `fichero2.txt` y lo mismo ocurre con `fichero3.txt`.

En conclusión, aunque hayas hecho una clase que arranque tu aplicación a través de un *controller* como la siguiente (consultar MVC de [Programación](/mod_prog/about/)):

```java
// Main.java

public class Main {
  public static void main(String[] args) {
    new Controller();
  }
}
```

Esa clase ejecutará el constructor de `Controller`, que contiene una serie de instrucciones, y que a su vez llamarán a otros objetos y/o métodos con su correspondiente ejecución secuencial... 

Comencemos este módulo por la pregunta más básica: la diferencia entre **programa** y **proceso**.

# Procesos
Un proceso **no es un programa**. Un programa es **estático**; un conjunto de líneas de código. Un proceso, en cambio, es la **ejecución del código del programa** (instrucciones y datos). Por eso **el proceso es dinámico**, ya que cambia su estado durante su ejecución.

**Importante:** recordemos que los procesos que se ejecutan (y los datos que utilizan) **deben estar en la RAM** ya que la CPU sólo accede a esta memoria de forma directa para obtener las intrucciones y datos a ejecutar.
{: .notice--info}

> En el ejemplo del restaurante, el proceso sería la ejecución por parte de esa persona de todos los pasos para atender a los clientes de una mesa desde que hacen la reserva hasta que acaban de comer.

El ordenador ejecuta muchos procesos de forma que da la impresión de que se ejecutan todos a la vez. Esto es gracias a que el sistema operativo (en adelante SO) gestiona los procesadores, la memoria y demás recursos para repartirlos eficientemente entre dichos procesos.

Los procesos compiten por los recursos del sistema. De todos ellos, los más críticos son la **CPU** y la **memoria RAM**, ya que necesitan ambos para ejecutarse.

**CPU**

La CPU puede ejecutar sólo un proceso en cada instante, por lo que el SO reparte su uso dando un tiempo de ejecución (*quantum*) a cada proceso. Así, los procesos se van ejecutando por turnos una y otra vez hasta que finalizan. Esto se conoce como **multiprogramación** o **concurrencia**. Más adelante se explicará la concurrencia con más detalle.

Para indicar qué proceso se va a ejecutar en cada momento, el procesador usa el registro **contador de programa** (CP), que apunta a la dirección de memoria correspondiente:

{% capture fig_img01 %}
![Contador de programa]({{ '/assets/images/psp/ud01/ud01_figura_01_contador_de_programa.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img01 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Contador de programa indicando la zona de memoria donde se encuentra la siguiente instrucción o dato a procesar.</figcaption>
</figure>

> El equivalente al CP en nuestro restaurante sería la orden lógica del proceso de atención a los clientes. Por ejemplo, si a los comensales de una mesa se les ha tomado nota de sus platos, el CP apuntaría a la siguiente instrucción: cocinar dichos platos.

**RAM**

La memoria es otro recurso limitado y no puede albergar todos los procesos activos. Por eso **el SO tiene mecanismos** para crear/terminar procesos y para asignar y proteger los **espacios de memoria** de cada proceso en ejecución.

> Volviendo a la analogía con el restaurante, supongamos que hay varios restaurantes en la zona además de otros negocios. Cada uno tiene su espacio (un local) dentro del cual se realizan las tareas propias de ese proceso (servir comida en los restaurantes, limpiar prendas en las tintorerías, etc.) y en ningún caso una tintorería entrará en otro local para hacer su trabajo. Ni siquiera el personal de un restaurante invadirá otro restaurante para cocinar.

Eso mismo ocurre con los procesos en la RAM.

## Características de un proceso - PCB
El SO implementa el modelo de procesos mediante una tabla de procesos. Cada entrada de esa tabla se conoce como **Bloque de Control de Proceso** o **PCB** (*Process Control Block*) y en ella se almacena información de un proceso, como:
- **Identificador** o PID.
- **Estado** (listo, en ejecución, bloqueado, etc.).
- **Contador de programa** (CP) con la dirección de la siguiente instrucción a ejecutar.
- Estado de los **registros de la CPU**.
- **Información de uso de CPU**: prioridad del proceso, punteros a colas de planificación, tiempo de CPU consumido, etc.
- Espacio de **direcciones de memoria** que usa el proceso durante su ejecución.
- **Información de estado de E/S**: lista de dispositivos de E/S asignados al proceso, lista de ficheros abiertos, etc.

**TCB:** generalmente los procesos son **multihilo**, por lo que en lugar de PCB se usa el **TCB** (*Thread Control Block*), similar al PCB, que incluye un puntero al PCB que lo creó.
{: .notice--info}

## Hilos
Un proceso puede dividir su trabajo en varios subprocesos llamados **hilos** o **_threads_**, que comparten los recursos y el espacio de direcciones del proceso, aunque cada hilo es un flujo de ejecución independiente que tiene su propio **CP**, **registros** y **pila**:

{% capture fig_img02 %}
![Hilos]({{ '/assets/images/psp/ud01/ud01_figura_02_hilos.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img02 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Ejecución de hilos. Tienen una estructura muy similar a los procesos.</figcaption>
</figure>

Los hilos tienen similitudes con los procesos (estados, uso de CPU, pueden crear hilos hijos, etc.) aunque **son más eficientes** tanto en su creación como en el uso de la CPU y los recursos.

> En el contexto de nuestro restaurante imaginario, cada hilo es una persona que realizará una tarea concreta. Todos los hilos (empleados) trabajan dentro del mismo contexto del proceso. Es decir, todos los empleados trabajan dentro de la zona de memoria del proceso (el local) y usan los recursos del proceso para el que trabajan (pueden usar los utensilios de cocina, vajillas, mesas...). Y es más eficiente contratar un nuevo empleado (crear un nuevo hilo) que un nuevo proceso (crear otro local donde realizar las mismas tareas).

Si comparamos procesos e hilos:

| Procesos | Hilos  |
| ----    | ---- |
| Constan de uno o más hilos. | Un hilo siempre existe dentro de un proceso. |
| Son independientes unos de otros. | Comparten los recursos del proceso de forma directa. |
| Son gestionados por el SO. | Son gestionados por el proceso. |
| Se comunican a través del SO. | La comunicación la controla el proceso. |



## Estados de un proceso
Cuando se crea un proceso, éste ocupa un espacio en memoria hasta que finaliza. Durante su tiempo de vida, puede pasar por varios estados:

{% capture fig_img03 %}
![Ciclo de vida de un proceso]({{ '/assets/images/psp/ud01/ud01_figura_03_estados_proceso.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img03 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Ciclo de vida de los procesos. Estos son los estados en los que puede estar un proceso durante su ejecución.</figcaption>
</figure>

Los estados del diagrama anterior son los **básicos** para entender su funcionamiento. Más adelante comprobaremos que los procesos que se van a programar contemplan algunos estados más.
{: .notice--warning}

Veamos qué ocurre con un proceso en cada estado:
- **Listo**: permanece en una cola de planificación, junto a otros procesos. El *scheduler* decide cuál debe ejecutarse y el dispatcher lo manda a la CPU para ejecutarlo.
> Es como si el friegaplatos haya terminado su trabajo y le indica al jefe que está listo para fregar otra montaña de platos sucios.

- **Ejecutando**: el proceso toma el control de la CPU para ejecutarse.
> Aunque es obvio, se podría entender como si un cocinero estuviese preparando un plato. Es decir, está ejecutándose.

- **Bloqueado**: el proceso en ejecución debe dejar la CPU y esperar a que ocurra un evento que le permita continuar (p.e. que acabe una operación de E/S). Cuando dicho evento suceda, el proceso irá a la cola de planificación (Listo) y esperará su turno para ejecutarse.
> Supongamos que al friegaplatos se le acaba el detergente lavavajillas mientras está haciendo su trabajo. El "hilo" friegaplatos se bloquea (deja de fregar) para ir a por más detergente.

- **Terminado**: aunque el proceso ha finalizado, el SO lo mantiene por si quedan operaciones pendientes que necesiten referirse a él.

Si el sistema tiene **memoria virtual**, los procesos en estado “Listo” y “Bloqueado” pueden almacenarse en disco, en el área de **_swap_**.

Cuando un proceso va a dejar la CPU para bloquearse o ir a la cola de espera (Listo), el **_dispatcher_** realiza el **cambio de contexto** del proceso, que consiste en:
- Guarda en el PCB del proceso el estado de los registros de CPU y demás información de su ejecución, para que el proceso sepa por dónde continuar cuando vuelva a ejecutarse.
- Se trata la interrupción del SO.

# Concurrencia
La **concurrencia** permite dividir un proceso en varias tareas que pueden ejecutarse **_simultáneamente_** para obtener entre todas un solo resultado final.

Cuando decimos *simultáneamente* nos referimos a que varias tareas comienzan sin la condición de que otras deban terminar su ejecución. Esto sucede de varias formas:

- **Pseudo-paralelismo**: con la **multiprogramación** la CPU alterna la ejecución de tareas dando a cada una un tiempo de ejecución (*quantum*). Lo hace a tal velocidad que **a nuestros ojos** parece que todas se están ejecutando literalmente al mismo tiempo.

- **Paralelismo**: cuando un ordenador tiene un procesador **_multicore_** o **multinúcleo**, las distintas tareas de un proceso se ejecutan cada una en un núcleo distinto. Es decir, se pueden ejectar al mismo tiempo.
<br>
Aún así, cada uno de esos núcleos sigue usando la multiprogramación para aumentar el rendimiento.

# Comunicación entre procesos
También llamada **IPC** (*Inter-Process Communication*), permite que dos o más procesos puedan intercambiar información.

## Métodos de comunicación
Los procesos se pueden comunicar de 2 formas:
- **Memoria compartida**: la información compartida se ubica en un área de memoria común (buffer) que es accesible por todos los procesos involucrados en la IPC:

{% capture fig_img04 %}
![Comunicación entre procesos - Memoria compartida]({{ '/assets/images/psp/ud01/ud01_figura_04_memoria_compartida.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img04 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Varios procesos usan un mismo espacio de memoria para intercambiar datos.</figcaption>
</figure>

- **Paso de mensajes**: un mensaje es un bloque de información creado por un proceso emisor y que tiene sentido para el proceso receptor. Los mensajes no se envían directamente al receptor. Se depositan en una cola de mensajes o buzón que leerán los procesos receptores para recuperar la información:

{% capture fig_img05 %}
![Comunicación entre procesos - Paso de mensajes]({{ '/assets/images/psp/ud01/ud01_figura_05_paso_mensajes.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img05 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Los mensajes no se envían directamente al proceso destinatario. Se depositan en una cola de mensajes.</figcaption>
</figure>

En unidades posteriores estudiaremos más métodos de comunicación y la forma de implementarlos mediante código.
{: .notice--warning}

## Condición de carrera
Cuando varios procesos comparten un dato común (p.e. una posición de memoria) y acceden a él para leerlo/modificarlo, pueden surgir inconsistencias.

Por ejemplo, un proceso A puede leer el valor de dicho dato pero pierde la CPU antes de actualizarlo. Otro proceso B cambia dicho dato, así que el valor que ha recogido A ya no es válido y cuando retoma la CPU se encuentra con una incoherencia. 

Esta situación se conoce como **condición de carrera** y la parte del programa en la que se accede a ese dato compartido es su **sección crítica**.

Para evitar esta situación se usa la [**exclusión mutua**](#exclusion_mutua) que asegura el acceso de **un único proceso a la vez a una sección crítica**, bloqueando al resto:

{% capture fig_img06 %}
![Exclusión mútua]({{ '/assets/images/psp/ud01/ud01_figura_06_exclusion_mutua.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img06 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Exclusión mútua. Un proceso queda en estado bloqueado para que otro proceso se ejecute.</figcaption>
</figure>

## <span id="exclusion_mutua">Exclusión mútua</span>
Para conseguir la exclusión mutua se **deben cumplir todas** estas condiciones:
- No puede haber dos procesos a la vez dentro de sus secciones críticas.
- No pueden hacerse suposiciones acerca de las velocidades o el número de CPUs.
- Un proceso ejecutándose fuera de su sección crítica no puede bloquear a otros.
- Ningún proceso tiene que esperar para siempre para entrar a su sección crítica.

Para conseguirlo, se pueden usar técnicas como:
- **Exclusión mutua con espera ocupada**: solución software donde los procesos se comunican por memoria compartida en la que mantienen la variable candado. Si alguno accede, modifica su valor, dejando al resto en espera ocupada (comprobando una y otra vez dicha variable).
- **Semáforos**: se implementa usando variable entera positiva, un contador de recursos o permisos de paso a la sección crítica, de forma que si su valor es 0, indica que no hay recursos disponibles o que no se dan más permisos de acceso hasta que otros procesos salgan de la sección crítica. Cuando se solicita un recurso o el acceso a una sección crítica se comprueba el semáforo:
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

**SJF**:

|   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | E | E | E | E | T | T | T | T |
| B |   | L | L | L | L | E | E | T |
| C |   | L | L | L | E | T | T | T |

Y las mediciones:

|   | tR | tE | IP | IS |
| --- | --- | --- | --- | --- |
| A | 4 - 0 = 4 | 0 | tR/tS=4/4 = 1 | tS/tR=4/4 = 1 |
| B | 7 - 1 = 6 | 4 | 6/2 = 3 | 2/6 = 0,33 |
| C | 5 - 1 = 4 | 3 | 4/1 = 4 | 1/4 = 0,25 |

**SRPT**:

|   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A | E | L | L | L | E | E | E | T |
| B |   | L | E | E | T | T | T | T |
| C |   | E | T | T | T | T | T | T |

Y las mediciones:

|   | tR | tE | IP | IS |
| --- | --- | --- | --- | --- |
| A | 7 | 3 | 7/4 = 1,75 | 4/7 = 0,57 |
| B | 3 | 1 | 3/2 = 1,5 | 2/3 = 0,66 |
| C | 1 | 0 | 1/1 = 1 | 1 |

## Colas multinivel
Los casos anteriores utilizan una cola cuya gestión depende del algoritmo. Pero se pueden usar varias colas, cada una con distintos tipos de procesos. Es lo que conocemos como **colas multinivel** o **MLQ** (*Multi Level Queues*).

Cada proceso se asigna a una de las colas en base a los datos de su PCB. Las colas se ordenan por prioridad y cada una puede usar un algoritmo de planificación diferente según sus necesidades.

{% capture fig_img07 %}
![Colas multinivel]({{ '/assets/images/psp/ud01/ud01_figura_09_mlq.png' | relative_url }})
{% endcapture %}

<figure>
  {{ fig_img07 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Ejemplo de colas multinivel.</figcaption>
</figure>

Existe el riesgo de que las colas con prioridad baja no sean atendidas.

# Otras consideraciones
El tema explica los contenidos esenciales, aunque podría ampliarse con otras soluciones como:

- El **mutex** que garantiza la exclusión mutua entre hilos de un mismo proceso, o el **monitor**.

- El clásico problema de la **cena de los filósofos** (Dijkstra) para la sincronización.

**Actividad propuesta**<br>
Busca información y explica qué son un **mutex** y un **monitor**.
{: .notice--info}

**Actividad propuesta**<br>
Busca información sobre el problema de la **cena de los filósofos** de Dijkstra: el planteamiento del problema, la solución conceptual, etc. En unidades posteriores se implementará la solución por código.
{: .notice--info}

---

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
