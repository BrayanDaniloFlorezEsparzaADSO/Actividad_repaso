addEventListener("DOMContentLoaded", (e)=>{
let n = document.querySelector("N")
let res = ""
let numeros = document.querySelector("#numeros")
let suma = 0
let rta= document.querySelector("#resultados")
    
numeros.addEventListener("submit",(e)=>{
    e.preventDefault();
    let datosEntrada = Object.fromEntries(new FormData(e.target));
    for (let s = 1; s < datosEntrada.N; s++){
         if(datosEntrada.N % s == 0){
            suma+=s
        }
    }
    if(datosEntrada.N == suma){
        res = "Es perfecto"
        suma = 0
    }
    else{
        res = "No es perfecto"
        suma = 0
    }
    rta.innerHTML = ""
    rta.insertAdjacentHTML("beforeend",`
    <h2> ${datosEntrada.N + ' ' + res} </h2>
    `);
    })
})

