addEventListener("DOMContentLoaded", (e)=>{
    let vent=document.querySelector('#elint')
    let cont=1
    let venta1= document.querySelector('venta1')
    let venta2= document.querySelector('venta2')
    let venta3= document.querySelector('venta3')

    vent.addEventListener("submit",(e)=>{
        e.preventDefault();
        if (cont<=50) {       
        
        let datosEntrada = Object.fromEntries(new FormData(e.target))
            
            venta1 = Number(datosEntrada.venta1)
            venta2 = Number(datosEntrada.venta2)
            venta3 = Number(datosEntrada.venta3)
            let vals=1000000
            let ventas=venta1+venta2+venta3
            let ventas2=ventas*0.10
            let ventas1=ventas2+vals
            // let pgh= valh*hor
            
            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td>${cont}</td>
                    <td>${venta1}</td>
                    <td>${venta2} </td>
                    <td>${venta3} </td>
                    <td>${vals} </td>
                    <td>${ventas1} </td>

                </tr>
                `)
            cont++
        }
    })    
})
