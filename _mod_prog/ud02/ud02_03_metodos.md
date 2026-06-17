---
title: "Ud. 02 - Más sobre métodos"
permalink: /mod_prog/ud02/metodos/
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

# 4 Más sobre métodos  {#más-sobre-métodos}

## 4.1 Paso de parámetros  {#paso-de-parámetros}

Los métodos pueden recibir una serie de valores denominados parámetros. En la clase `Persona` del ejemplo anterior, el método `setEdad()`, por ejemplo, recibía un parámetro de tipo `int` llamado `n`. En ese parámetro se especifica cuál es la edad que debe almacenarse en el estado del objeto. 
{: .text-justify}

Por lo tanto, los parámetros son imprescindibles para que el objeto reciba los mensajes correctamente. Si no, ¿cómo le indicaríamos al objeto de tipo `Persona` cuál es la edad que tiene que almacenar? 
{: .text-justify}

Un método puede tener una lista larguísima de parámetros, o ninguno. Lo más habitual es que tenga entre cero y unos pocos.  
{: .text-justify}

En la declaración del método **hay que indicar el tipo de cada parámetro**, por ejemplo así:
{: .text-justify}

```java
public void setDatos(String nombre, String apellido, int edad, char sexo)
```

Este hipotético método `setDatos()` podría servir para asignar valor a todos los atributos de la clase `Persona` del ejemplo anterior. Por supuesto, cuando llamemos al método `setDatos()` para que se ejecute, será necesario pasarle cuatro datos que coincidan en tipo con los cuatro parámetros. Por ejemplo:
{: .text-justify}

```java
p = new Persona();  
p.setDatos("Miguel", "Pérez", 23, 'H');
```

## 4.2 Valores devueltos

Probablemente habrás observado que algunos métodos terminan con la sentencia return y otros nos. Los que sí lo hacen devuelven un resultado al código que los llamó. Ese resultado puede ser de cualquier tipo y también hay que indicarlo en la declaración del método. 
{: .text-justify}

El método `setDatos()` anterior no devuelve nada, por lo que, en la declaración, se usa la palabra **`void`** (vacío). Pero el método `getEdad()`, por ejemplo, devuelve un valor entero (la edad de la persona), y por eso se indica `int` en la declaración:
{: .text-justify}

```java
public int getEdad() {  
  return edad;   
}
```

## 4.3 Métodos y atributos estáticos

Algunos métodos, como algunos atributos, pueden estar precedidos de la palabra static. 
{: .text-justify}

Esto quiere decir que, para esa clase, se creará solo una instancia de ese método o atributo. No importa si se crean 800 objetos de tipo `Persona`: el atributo o el método static sólo se creará una vez, y todos los 800 objetos de esa clase lo compartirán. 
{: .text-justify}

Esto no solo permite ahorrar recursos en términos de memoria, sino que a veces resulta muy útil (si no, ¡no lo habrían inventado!). Por ejemplo, podemos usar un atributo static para llevar la cuenta del número de personas que se han creado:
{: .text-justify}

```java
class Persona {
    // Al crear la primera persona, esta variable se pondrá a 0
    private static int numPersonas = 0;

    static void nuevaPersona()  
    {  
        numPersonas++; **// Se incrementa cada vez que se crea una persona**  
    }  
    // El resto de la clase sería igual que antes
}
```

Si cada vez que creamos un objeto de la clase persona llamamos al método nuevaPersona(), el atributo numPersonas se incrementará en una unidad y contendrá el número total de objetos de esa clase que existen. En cambio, si no fuera un atributo static, cada objeto `Persona` tendría su propio atributo puesto a 0 en el momento de su creación, y la llamada a nuevaPersona() establecería su valor a 1.
{: .text-justify}

## 4.4 Métodos constructores: una primera visión

En Java existen dos tipos de métodos especiales llamados **constructores** y **destructores** de objetos. No es obligatorio programarlos para cada clase, pero sí que aparecen con frecuencia, sobre todo los constructores (de los destructores hablaremos más adelante)
{: .text-justify}

El **constructor** es un método que *es invocado automáticamente al crear un objeto de la clase*. Su función suele ser inicializar el estado del objeto.
{: .text-justify}

Por ejemplo, en la clase `Persona` de los ejemplos anteriores un posible constructor sería este:
{: .text-justify}

```java
class Persona {
    Persona() {  
        nombre = "";  
        apellido = "";  
        edad = 0;  
        sexo = 'X';  
        nuevaPersona();  
    }  
    // El resto de la clase quedaría igual
}
```

Observa varias cosas importantes: 

* El nombre del constructor debe coincidir con el de la clase. 
{: .text-justify}
* El constructor se ha usado para inicializar con valores vacíos todos los atributos de la clase. 
{: .text-justify}
* También se ha aprovechado para invocar el método `nuevaPersona()`, que contabiliza todos los objetos `Persona` creados por el programa. Así, esa contabilización se automatiza, porque `nuevaPersona()` será invocado siempre que se cree un objeto `Persona`. 
{: .text-justify}
* El constructor no devuelve nada ni se indica su visibilidad (por definición, tiene que ser *public*) 
{: .text-justify}
* Los constructores pueden parametrizarse y, de hecho, sobrecargarse. Observa como en la siguiente variación de la clase `Persona` hay dos constructores, uno con parámetros y otro sin ellos:
{: .text-justify}

```java
  class Persona {
      Persona() {
          nombre = "";
          apellido = "";
          edad = 0;
          sexo = 'X';
          nuevaPersona();
      }

      Persona(String n, String a, int e, char s)
      {
          nombre = n;
          apellido = a;
          edad = e;
          sexo = s;
          nuevaPersona();
      }
      // El resto de la clase quedaría igual
  }
```

Esto es una excelente idea, porque ahora podemos crear personas por dos vías con el mismo resultado:
{: .text-justify}

```java
// Creamos una persona con el constructor sin parámetros
// y luego le asignamos los valores
Persona p1 = new Persona();   
p1.setNombre("Miguel");   
p1.setApellido("Pérez");   
p1.setEdad(23);   
p1.setSexo('H');   
// Ahora creamos otra persona con el constructor parametrizado
Persona p2 = new Persona("Luisa", "Martínez", 21, 'M');
```

Presentamos por último la versión "todo junto" de la clase `Persona`, con todos los elementos que hemos ido añadiendo (método static y constructor polimórfico)
{: .text-justify}

```java
// Versión definitiva de la clase Persona
class Persona {  
    private String nombre;  
    private String apellido;  
    private int edad;  
    private char sexo;

    // Al crear la primera persona esta variable se pondrá a 0
    private static int numPersonas = 0;  
    
    // Constructor sin parámetros
    Persona() {  
        nombre = "";  
        apellido = "";  
        edad = 0;  
        sexo = 'X';  
        nuevaPersona();  
    }

    // Constructor con parámetros
    Persona(String n, String a, int e, char s) {  
        nombre = n;  
        apellido = a;  
        edad = e;  
        sexo = s;  
        nuevaPersona();  
    }

    // Método estático para contar en número de personas creadas
    static void nuevaPersona() {  
        numPersonas++; // Se incrementa cada vez que se crea una persona
    }

    public String getNombre() {  
        return nombre;  
    }

    public void setNombre(String txt) {  
        nombre = txt;  
    }

    public String getApellido() {  
        return apellido;  
    }

    public void setApellido(String txt) {  
        apellido = txt;  
    }

    public int getEdad() {  
        return edad;  
    }

    public void setEdad(int n) {  
        edad = n;  
    }

    public String getSexo() {  
        String s;  
        if (sexo == 'H') s = "Hombre";  
        if (sexo == 'M') s = "Mujer";  
        if (sexo != 'H') && (sexo != 'M') s = "Desconocido";

        return s;  
    }

    public void setSexo(char s) {  
        sexo = s;  
    }  
}
```

---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}
{: .text-justify}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
{: .text-justify}
