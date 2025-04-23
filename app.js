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
        let esEstudiante = true
        let esJubilado = false
        //CONDICIONAL SIMPLE - SINTAXIS TRADICIONAL
        if(esEstudiante || esJubilado){
            console.log("podes acceder al descuento")
        } else{
            console.log ("no aplicas al descuento")
        }
       
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
        