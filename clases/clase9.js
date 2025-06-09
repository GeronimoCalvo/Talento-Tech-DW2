// crear un promesa
let miPromesa = new Promise ((resolve, reject) =>{
//simular una accion que tome tiempo
//ej. solicitud a un servidor
//vamos a simularlo con setTimeOut
setTimeout(()=>{
    let trajoElMate = true
    trajoElMate
    ? resolve("bien ahi amigo que te acrodaste del mate")
    : reject ("che y el mate")
}, 5000) //simulamos atraso de 5 seg
});
//usamos la promesa
miPromesa
.then((res)=>console.log("Exito:",res))
.catch((err)=>console.log("Error:", err))