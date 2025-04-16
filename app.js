console.log("hola mundo")


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
let nombre= "juancito" //ejemplo string
let edad= 18 //ejemplo int
let curso= 'python'
//let precio = 40.50 //ejemplo float
//let esEstudiante = true //ejemplo booleano

//forma tradicional - concatenar 3  string con 3 variables
console.log("hola " + nombre + " tenes " + edad + " años y sos parte del curso de " + curso)
 
//forma actual - plantillas literales- usar 1 solo string e insertarle variables 
// donde las nescesitamos
console.log(`hola ${nombre} , tenes ${edad} años y sos parte del curso de ${curso}`)

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

    console.log (10+4) //suma solamente cuando estamos entre 2 numeros
    console.log ("hola"+" "+"mundo") //concatena
    console.log("hola"+10) // concatena
    console.log(10+"mundo") // concatena

    console.log(10-4)


