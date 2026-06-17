---
title: "Ud. 02 - Declaración de clases e instanciación de objetos en Java"
permalink: /mod_prog/ud02/clases_objetos/
excerpt: "Definición de clases, sus propiedades y métodos, y cómo crear objetos a partir de ellas."
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

# 3 Declaración de clases e instanciación de objetos en Java

Para crear un objeto y empezar a usarlo, es necesario que antes exista una clase (el molde, o la línea de producción de la factoría, en las metáforas que antes proponíamos) 
{: .text-justify}

{% capture fig_img01 %}
![Clase vs Objeto]({{ '/assets/images/prog/ud02/ud02_01_clase_vs_objeto.png' | relative_url }})
{% endcapture %}
  
<figure>
  {{ fig_img01 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Una clase es un diseño, un plano. Al pedir la creación de robots a partir de la clase se dice que estamos instanciando los objetos de tipo robot. Cada uno puede tener distintas características o propiedades (altura, nombre, color, etc.). </figcaption>
</figure>


Veremos más detalles sobre cómo crear clases en temas posteriores, pero ahora aprenderemos a declarar clases simples. En Java, la forma más simple de declarar una clase es ésta:
{: .text-justify}

```java
class MiClase {  
    private static int miAtributo1;  
    private float miAtributo2;

    public void miMetodo1() {  
        <código del método>  
    }

    public int miMetodo2(int a, b) {  
        int r;  
        <código del método>  
        return r;  
    }  
} 
```

En este ejemplo, hemos declarado una clase llamada **`MiClase`** (que debemos guardar en un archivo llamado **`MiClase.java`**). La clase tiene dos **atributos o propiedades**, `miAtributo1` y `miAtributo2`, uno de tipo `int` y otro de tipo `float`. Ambos son `private`, lo que significa que **no son accesibles desde fuera** de la clase (típico de los atributos).
{: .text-justify}

Además, uno de ellos es `static`, es decir, **solo se creará una vez aunque se definan varios objetos de esta clase**. 
{: .text-justify}

Después, aparece la definición de dos **métodos**. Ambos son `public`, esto es, pueden ser usados por otros objetos externos a esta clase. El primero **no devuelve ningún resultado** (`void`), y el segundo devuelve un valor entero (`int`). Este último, además, tiene una variable local de tipo `int` llamada `r`. 
{: .text-justify}

Recuerda que la clase solo es un molde, un patrón. Cuando escribimos una clase, lo hacemos en fase de codificación y sólo se trata de un bloque de código. Si queremos ver ese código en funcionamiento, hemos de crear o instanciar objetos de dicha clase. La forma de crear un objeto usando este molde es esta:
{: .text-justify}

```java
MiClase miObjeto = new MiClase();
```

A partir de este momento existirá una variable en el programa llamada `miObjeto` en cuyo interior existirán todos los elementos de `MiClase`: los atributos y los métodos. Y **podemos crear todos los objetos que necesitemos** a partir de ese molde.
{: .text-justify}

## 3.1 Un ejemplo más realista

Supongamos que estamos desarrollando una aplicación para administrar los datos personales y académicos del alumnado de un instituto. Dentro de la aplicación, hemos detectado que existe un tipo de dato llamado "persona" (también podría haber sido "alumno"), que tiene ciertas *características* (nombre, edad, sexo, etc) y con el que se pueden llevar a cabo ciertas *operaciones* (asignarle un nombre, preguntarle cuál es su edad, etc) 
{: .text-justify}

Esas *características* son los **atributos**. Esas *operaciones* son los **métodos**. Así, el aspecto de la clase Persona sería, más o menos, este:
{: .text-justify}

```java
class Persona {  
    private String nombre;  
    private String apellido;  
    private int edad;  
    private char sexo;

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

Observa como los atributos son privados, y hemos definido un método público para consultar y modificar cada uno de ellos. Los métodos saben cómo deben proceder con los atributos, y el programador que usa la clase no deben preocuparle esos detalles: una vez escrita y probada la clase, podemos olvidarnos de ella y usarla sin tener en cuenta su implementación. Solo tenemos que conocer cuáles son sus métodos públicos y para qué sirve cada uno. 
{: .text-justify}

Este es un ejemplo de cómo podríamos usar esta clase para crear una persona llamada _Miguel Pérez_, de 23 años de edad y sexo masculino:
{: .text-justify}

```java
class probarPersona {   
    public static void main(String[] args)   
    {   
        Persona a = new Persona();   
        a.setNombre("Miguel");   
        a.setApellido("Pérez");   
        a.setEdad(23);   
        a.setSexo('H');   
        // Ahora vamos a mostrar por pantalla la información del objeto
        // para asegurarnos que todo se ha almacenado correctamente
        System.out.println("Nombre: " + a.geNombre() + " " + a.getApellido());  
        System.out.println("Edad: " + a.getEdad());   
        System.out.println("Sexo: " + a.getSexo());   
    }  
}
```

Si compilamos y ejecutamos el programa `probarPersona`, la salida por pantalla debería ser esta:
{: .text-justify}

```
Nombre: Miguel Pérez   
Edad: 23   
Sexo: Masculino 
```

Observa que, aunque en el interior del objeto el sexo se almacena como un carácter H, al recuperarlo con getsexo() se nos devuelve el string "Masculino". Ese es el comportamiento del objeto y, como usuarios del mismo, no nos importa cuál es el procedimiento interno por el que se ha obtenido ese resultado. Lo usamos y punto. 
{: .text-justify}

Por cierto: para usar la clase `Persona` desde la clase `probarPersona`, **NO debes hacer `import Persona`** ni nada parecido, porque eso solo sirve para importar paquetes y no clases individuales. Basta con que ambas clases residan en el mismo directorio. 
{: .notice}
{: .text-justify}

---

El contenido se ha basado en el material de © **Alfredo Moreno Vozmediano** 2005 - 2014, que está bajo licencia [Creative Commons Reconocimiento-NoComercial 2.5 España](https://creativecommons.org/licenses/by-nc/2.5/es/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Reconocimiento" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.png" alt="NoComercial" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<br>
Se han realizado modificaciones sobre dicho material.
{: .notice--info}
{: .text-justify}

**Licencia:** [Programación, concurrencia y dispositivos móviles.](https://dgaysae.github.io/){:target="_blank"} © 2025 by [Diego Gay Sáez](https://dgaysae.github.io/){:target="_blank"} is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/){:target="_blank"} <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
{: .notice--info}
{: .text-justify}
