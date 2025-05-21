//console.log("hola mundo")


//let edad //declaramos la variable con "let"

//2. le asignamos un valor a esa varialbe (=)
//la variable edad es = a el dato 30
//edad=30

//console.log(edad)
//dad=45   //sobreescribir el valor de la variable
// tanto variables como constatnes son para guardar un dato en espacio de memoria
//console.log(edad)

// la diferencia entre ellas es que
//-Variables- Mutables- Pueden cambiar el contenido
//-Constantes- Inmutables- no se pueden cambiar el contenido

//const precio= 1500 //declare y asigne el valor en una linea
//console.log(precio)
//precio= 3500 //no se puede, Tira erro porque es constantes
//console.log(precio)

//tipos de datos
//- Numericos (int), (float)
// Booleano (true), (false)
// String (cadena de caracteres)
//let nombre= "juancito" //ejemplo string
//let edad= 18 //ejemplo int
//let curso= 'python'
//let precio = 40.50 //ejemplo float
//let esEstudiante = true //ejemplo booleano

//forma tradicional - concatenar 3  string con 3 variables
//console.log("hola " + nombre + " tenes " + edad + " años y sos parte del curso de " + curso)
 
//forma actual - plantillas literales- usar 1 solo string e insertarle variables 
// donde las nescesitamos
//console.log(`hola ${nombre} , tenes ${edad} años y sos parte del curso de ${curso}`)

//camelCase - estoEsUnEjemploDeCamelCase
    //1er palabra toda minuscula 2er palabra en adelante - 1er letra mayuscula 
    // despues todo minuscula
    //es estudiante? si / no
    // nombres de variables booleanos, planteamos como una pregunta que se responde 
    // si o no

    // Operador + Distinto comportamiento de acrudo 
    // a los datos que opera numero + numero 10+5=15 - suma 
    // string + numero= error (mezclando tipos de datos)
    //numero + string= error (mezclando tipos de datos)
    //string + string "hola" + "mundo" - concatena

    //console.log (10+4) //suma solamente cuando estamos entre 2 numeros
    //console.log ("hola"+" "+"mundo") //concatena
    //console.log("hola"+10) // concatena
    //console.log(10+"mundo") // concatena

    //console.log(10-4)

    //Ejercicio clase 2
   //no usar prompt ni alert 

  //  let nombreProducto ="celular"
   // let precioUnitario = 350
   //let cantDeseada = 3
   
   //let cantDeseada = 3

   // let precioFinal = precioUnitario * cantDeseada

    //console.log(``)

    /** Desafio 2 aplicando prompt y alert
     * 
     * 
     */

    /** Clase 3
    -CONTROL DE FLUJOS
    -CONDICIONALES IF-ELSE 
    -OPERADORES ITINERARIOS
     */
    //Operadores -3 tipos
    //Matematicos Devuelven datos numericos
   /** let n1= 20
    let n2= 8
    //(+) Suma
    console.log(n1 + n2) //(+) Suma
    console.log(n1 - n2) //(-) resta
    console.log(n1 * n2) //(*) Multiplicacion
    console.log(n1 / n2) //(/) Division
    console.log(n1 % n2) // (%) Resto de una division
    console.log(n1 ** n2)  //(**) Potencia

    console.log("-----------------")
    // 2. Op. de Comparación - devuelven booleano
    // 2.a . me sirven también para String
    console.log(20=="20") //(==)- "Igual que..."| solo compara el valor, ignora el tipo de dato  
    console.log(20==="20") // (===) "Estrictamente igual que | compara el valor y el tipo de dato"
    console.log (n1 != n2) // != | DISTINTO DE 
    console.log (n1 !== n2) // !== | ESTRICTAMENTE DISINTO DE
   //2.b. solo funcionan con datos numericos
   console.log("-----------------")
    console.log (n1 >  n2) // > Mayor que
    console.log (n1 <  n2) // < Menor que
    console.log (n1 >= n2) // >= Mayor o igual que
    console.log (n1 <= n2) // <= Menor o igual que 
    console.log("-----------------")
    // 3. Op. Compuestos - Operacion matematica + asignar resultado
    console.log(n1 += n2) //(+=) Suma y asignacion
    console.log(n1 -= n2) //(-=) resta y asignacion
    console.log(n1 *= n2) //(*=) Multiplicacion y asignacion
    console.log(n1 /= n2) //(/=) Division y asignacion
    console.log(n1 %= n2) // (%=) Resto de una division y asignacion
    console.log(n1 **= n2)  //(**=) Potencia y asignacion
    let numero1 = 10
    console.log(numero1)
    console.log(numero1 += 2)
    console.log(numero1) */ 
    // 4. Op. Logicos
    // && AND - Conjucion
    // La condicion es TRUE solo cuando sus partes es TRUE
          /** T + T = T 
           * T + F = F
           * F + T =F
           * F + F = F
          
          */
    // || OR -Disyuncion
    //La condicion es TRUE si por lo menos una de sus partes es TRUE
    /*
    T + T = T
    T + F = T
    F + T = T
    F + F = F
     */
    // ! Not - Negacion
     /**
       SI TENEMOS ALGO QUE ES TRUE , LE PONEMOS ! Y SE HACE FALSE
       console.log ( esEstudiante) - TRUE
       console.log (!esEstudiante) - false (no es estudiante) 
      */
      
       // CONDICIONALES
       /**
        * Ejemplo AND - BOLICHE
        * let edadUser = 26
        let dniEnMano = false
        // forma 1= un if solo de Dni que englobe lo demas
        // forma 2 = agregar un && dniEnMano
        if(dniEnMano){
            if (edadUser >= 18){
                  console.log ("podes pasar al boliche")
              } else if (edadUser >=14 && edadUser <=17){
                  console.log("podes pasar a la matine")
              }
               else {
                  console.log ("No pode pasar") }
               }
        * 
        CONDICION A EVALUAR - TRUE O False
        - Bloque de codigo a ejecutar si la condicion es TRUE
        - Bloque de codigo a ejecutar si la condicion es FALSE
        /** 
         * EJEMPLO OR - SUBE CON DESCUENTO
         * ESTUDIANTES O JUBILADOS
         */
       /** let esEstudiante = true
        let esJubilado = false
        //CONDICIONAL SIMPLE - SINTAXIS TRADICIONAL
        if(esEstudiante || esJubilado){
            console.log("podes acceder al descuento")
        } else{
            console.log ("no aplicas al descuento")
        }*/ 
       
// OPERADOR TERNARIO - ABREVIACION PARA LOS COND.SIMPLES
/**
 * if(condicion){
 * valor si es true}
 * else{
 * valor si es false}
 
Estructura de un operador ternario
 
 // CONDICIONAL SIMPLE - OPERADOR TERNARIO
 esEstudiante || esJubilado ?
     console.log("T - Podes acceder al descuento")
 :
     console.log("T - No aplicas al descuento en la SUBE")

*/
    //Clase 4 - Fuciones
    /** * Intro a funciones 
     * Parametros
     * Return
     * -3 sintaxis para funciones
     *    -Tradicional (Palabra reservada function + el nombre)
     *    -Anonima
     *    -Flecha (arrow
     * Desafio 4*/
     // ¿Que es una funcioin?
     //guardo / concentro 1 o varias lineas de codigo bajo 1 nombre
     /**
       declaro la funcion 
       
       // palabra reservada function
       nombre de mi funcion
       parentesis () donde van los parametros (si hay)
       llaves {} donde va el bloque de codigo
      */
     /** 
      * function mensajeDeBienvenida(){
        console.log(" Talento Tech teens")
        console.log (" curso- desarrolo web 2")
        console.log ("miercoles de 10 a 12")
     }*/ 
     //llamo a la funcion
    // mensajeDeBienvenida()
     /**
      HOISTING (solo en javascript)
      JAVASCRIPT, AL MOMENTO DE EJECUTARSE "MANDA  PARA ARRIBA" 
      AUTOMATICAMENTE TODAS LAS FUNCIONES,
       HACIENDO POSIBLE QUE YO EJECUTE ANTES DE CREAR UNA FUNCION
      */

     //Algoritmo
     /** un conjunto de instrucciones para lograr x objetivo 
       
     dividido en 3 etapas
     1. ENTRADA de datos externos
     2. PROCESAMIENTO dentro de la logica del algoritmo
     3. SALIDA - dato concreto procesado
     */

     //agregamos parametros a nuestra funcion
    /** function mensajeDeBienvenida2(nombre ,generoUser, curso, dia, horario){
        if (generoUser === "F"){
            console.log (`Bienvenida ${nombre}`)
        } else {
            console.log (`Bienvenido ${nombre}`)
        }
        console.log( `Bienvenido ${nombre}`)
        console.log (`curso - ${curso}`)
        console.log (`te esperamos los ${dia} a las ${horario} hs`)
     }
     mensajeDeBienvenida2 ("Juancito", "Python", "jueves", "20")
    let nombreUser = prompt ("Ingrese nombre") 
    let cursoUser = prompt ("Ingrese curso")
    let generoUser = prompt ("ingrese genero")
    let diaUser = prompt ("Ingrese dia")
    let horarioUser = prompt ("Ingrese hora")
    
    mensajeDeBienvenida2(nombreUser, cursoUser, diaUser, horarioUser)
    mensajeDeBienvenida2(" Juana", "Python", "F", "Miercoles", "11hs")
    mensajeDeBienvenida2 (" Juan", "Python", "F", "Miercoles", "11hs")
    mensajeDeBienvenida2*/ 

    //DIFERENCIA IMPORTANTE
    //VISUALIZAR EN PANTALLA NO ES IGUAL A TENER UN RESULTADO FORMAL

    //1.sintaxis tradicional para funciones
   /**
    * function suma2(n1, n2){
        return n1 + n2
    }
   console.log (suma2(10,5))

   //2.fuciones anonima (no tiene nombre)
   const suma3 = function(){
    let res = n1 + n2
    return res
   } */ 

   //3. Funciones Flechas / Arrow functions
   /**
    * la funncion flecha nacio originalmente como una abreviacion de las anonimas,
    * pero con el paso del tiempo se convirtio en el estandar a la hora de declarar funciones
    * - no tiene nombre (no confundir con alojaralas en una constante)
    * - no usan la palabra reservada function
    * - nueva sintaxis => entre () y {}
    * - return implicito, en funciones de 1 sola linea , no hace falta escribir return,
    * se genera automaticamente
    */
   /**
    * const suma4 = (n1 , n2) => n1 + n2
   const resta = (n1 , n2) => n1 - n2
   const multi = (n1 , n2) => n1 * n2
   const div   = (n1 , n2) => n1 / n2
    */
   

   // SCOPE DE LAS VARIABLES / ALCANCE DE LAS VARIABLES

   /**
     2 TIPOS DE ALCANCES DE UNA VARIABLE

     VARIABLES GLOBALES
     -SON ACCESIBLES EN CADA RINCON DEL CODIGO
     - NO TIENEN UN BLOQUE {} QUE LAS CONTENGA

     VARIABLES LOCALES
     - SOLO EXISTEN DENTRO DEL BLOQUE {} EN EL CUAL FUERON DECLARADAS
     - FUERA DE ESTE NO EXISTEN
     - PERMITE QUE EXISTAN VARIABLES LOCALES DEW MISMO NOMBRE EN DISTINTOS BLOQUES
    */

     /**
      * Clase 5
      * 
      * -COLECCIONES DE DATOS
      *  -ARRAYS
      *  -OBJETOS
      * -BUCLES
      * -WHILE
      * -DO WHILE
      * -FOR
      * -FOR IN / FOREACH, ETC-
      */
     //COLECCION DE DATOS
     
     //Nos permite almacenar en un unico espacio en memoria (en una sola variable)
     //varios daots ordenados de un modo

     /** VARIABLES Y CONSTANTES - LIMITACION > SOLO SE PUEDE ALMACENAR 1 DATO 
      ARRAYS / LISTAS / ARREGLOS - 3, 5, 10 , 400 DATOS EN UNICA VARIABLE
     */
    //sin array
    //let nombre1 = "Juan"
    //let nombre2 = "Pedro"
    //let nombre3 = "Juana"
      
    //APLICANDO ARRAY
      //let nombres= ["Juan" , "Pedro", "Juana", "Marcos", "Lucia", "Gabriel"]
      //posicion      0        1         2       3         4         5

      //llamo al array completo
      //console.log (nombres)

      //llamo a un solo elemento del array
      //console.log(nombres[0])

      /** 
       * AGREGA UN DATO
       * unshift - al principio del array
       * push - al final del array
       * 
       Elimina un dato
       shift
       pop
       */
      
       //ciclos
       
       //for

      // for(let i=0; i<=5; i++ ){
       // console.log("hola mundo")
      // }

       // FOR IN - CICLO
       //quiero repetir el console log por cada nombre en el array de nombres

       //forma vieja de lograrlo
       //for(let i=0; i<=nombres.length; i++ ){
        // console.log(`Hola ${nombres[i]}`)
       //}
       //forma actual de lograrlo - for in
       //por cada nombre en el array de nombres
       //genera el console log saludando
      /**  console.log("-----------")
       for(let nombre in nombres){
        console.log(`Hola ${nombres[nombre]}`)
       }*/

       //foreach - metodo para arrays de JS que funciona como un ciclo
      // console.log("-------")
      // console.log(nombres.forEach((i)=>{console.log(`Hola ${[i]}`)}))

      //WHILE
      /**
       * LOS CICLOS WHILE SE BASAN EN EL CUMPLIMIENTO O NO DE UNA CONDICION
       * 
       * EN LOS BUCLES ESTABLECEMOS UNA CONDICION
       *   - MIENTRAS ESA CONDICION SE CUMPLA, EL BLOQUE DE NUESTRO WHILE SE VA A EJECUTAR
       *   - CUANDO DEJE SDE SER TRUE LA CONDICION, YA NO SE EJECUTA MAS EL BLOQUE DE CODIGO DEL WHILE
       *   - SUPER IMPORTANTE: EVITAR BUCLES INFINITOS. (CUANDO LA CONDICION SIEMPRE ES TRUE)
       * CUANDO YO TRABAJO UN BUCLE WHILE, TENOG QUE ASEGURARME DE QUE EN ALGUN MOMEMNTO LA CONDICION VA A ASER FALSE
       * 
       */
     /** let numero = 0

      while (numero < 5){
        console.log("El numero es : " + numero)
        numero++*/  //fundamental para evitar el bucle infinito
        //sino, va a ser siempre 1 y nunca va a ser false la condicion.
      
      //WHILE - SE EJECUTA 0(CERO) O MAS VECES - PUEDE NUNCA EJECUTARSE
      //WHILE - SIEMPRE SE COMPRUEBA LA CONDICION PRIMERO 

      // DO WHILE - SE EJECUTA 1 O MAS VECES - SI O SI SE EJECUTA LA 1RA VEZ.
      // DO WHILE - LA 1ER VUELTA OCURRE ANTES DE LA 1RA COMPROBACION

      //Clase 6

      /** Colecciones de datos- nos permiten alojar mas de un dato , en un unico 
       * espacio de memoria
       * arrays - se organiza secuencialmente (por oder de aparicion)- juntar varios datos
       * OBJETOS SE ORGANIZAN A T RAVES DE PARES CLAVE:VALOR- una entidad con dif. carac.
       * 
       * ej. objetos
       * nombre1= "juan"
       * edad1= 23
       * persona1 = {nombre : "Juan", edad : 23}
       */
      /**let auto= {
        marca : "ford",
        modelo : "Focus",
        color : "azul",
        cantPuertas: 5,
        kilometraje : 10000,
        es0km : false,
        patente : "ABC123",
        tipoMotor : ["nafta", "electrico"],
        tieneLlantasAleacion : true
      }
      //visualizar todo el objeto
      console.log (auto)

      //visualizar solo una propiedad del obj (dot notation )
      console.log(auto.marca)
      
      //agregar parametro a un objeto pre-existente

      auto.tieneEstereo = true
      auto.anio = 2014

      //editar propiedades (nuevas o pre-existentes)
      auto.tieneEstereo = false
      auto.modelo = "fiesta"

      //eliminar una propiedad (remove)
      delete auto.color
      console.log(auto)

      //array de objetos
     
      //array de objetos PERSONAS que cada persona tenga nombre, apellido y edad
      let personas =[
        {nombre: "Juan", apellido : "Gonzalez", edad: 23},
        {nombre: "Juana", apellido : "Gomez", edad: 30},
        {nombre: "Juancho", apellido : "Pera", edad: 20},
        {nombre: "Juancito", apellido : "Perel", edad: 18},
      ]
      
      //RECORRER LOS OBJETOS - CON BUCLES
      //for in
      for (dato in auto){
        //console.log (auto[dato]) //solo aparecen los valores
        //console.log (dato) // solo aparecen las claves
        console.log (`${dato} : ${auto[dato]}`) //aparecen solo los valores
      }

      //METODO forEach - 1 ojbeto
      personas.forEach(e =>{
       for (dato in e){
        console.log(`Mi ${dato} es : ${e[dato]}`)
       }
      });

      //OBJETOS PREDEFINIDOS EN JAVASCRIPT
      // "EN JAVASCRIPT, TODO ES UN OBJETO"
      
      //window.confirm() ventana emergente con un mensaje y opciones
      //window.open() abre una nueva ventana
      //window.close() cierra la ventana actual
      //window.postMessage() envia un mensaje a otra ventana o pestaña
      /**
       OBJETO NUMBER
            -isNan - determina si el valor es de tipo NaN (Not a Number)
            10+5=15
            10+hola = NaN
            
            - .toFixed() , formatea un numero para que tenga x cantidad de nums decimales
            - .toString()- convierte un numero en una cadena de texto
            - parseInt - convierte un string en un INT
            - parseFloat - convierte un string en un float

       */
      //let num =43
      //console.log(num.toFixed(5)) // 43.00000
    
      //Clase 7
      /**
       * "Llamar a elementos del HTMLP en nuestro Javascript"
       * -getElementByID() 
       * -getElementByClassName()
       * -getElementByTagName ()
       * -QuerySelector()
       */
      /**
       * LLAMAR A UN ELEMENTO POR SU ID - 2 POSIBILIDADES
       *  getElementById ("")
       */
      const titulo=document.getElementById("titulo")
      //conts items = document.getElementsBy

      titulo.style.color =  "green"
      titulo.style.fontFamily = "Arial, Helvetica, sans-serif"
      titulo.style.backgroundColor = "yellow"
      titulo.style.fontSize= "50px"
      
      let isMayorDeEdad = true
      
      isMayorDeEdad
      ? titulo.innerText ="green"
      : titulo.innerText = "red"

      //MODIFICAR TEXTO EN UNA ETIQUETA. HTML
      console.log (titulo.innerText)
      titulo.innerText ="Hola pibardos"
      
      let arraySuper = ["galletitas" , "jugo" , "Gaseosa"]
       for (producto in arraySuper){
        
       }
