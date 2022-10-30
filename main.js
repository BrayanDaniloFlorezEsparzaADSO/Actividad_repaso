addEventListener("DOMContentLoaded", (e)=>{
    let hor= document.querySelector('#horas');
    let lash= document.querySelector('horas');
    let cont=0;

    addEventListener('submit', (e) => {
        e.preventDefault();
        let dataintput=Object.fromEntries(new FormData(e.target))
        let valh=5208.33
        let pgh= dataintput.hor
        pgh*=valh
        if (cont <2){
            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentElement("beforeend",`
                <tr>
                    <th>${hor}</th>
                    <th>${valh} </th>
                    <th>${pgh} </th>
                </tr>`);
            cont++;
        }
    })
   


})