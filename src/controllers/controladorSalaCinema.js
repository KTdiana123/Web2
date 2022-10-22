import { pintarSillas } from "../helper/pintarSillas.js"

let asientos=[
    [{id:"a1",estado:2},{id:"b1",estado:2},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}]
]

//PINTAR DESDE JS MI SALA DE CINE:
let cinema=document.getElementById("salacinema")

//Recorrer los asientos y aplicar traversing
pintarSillas(asientos, cinema)

let cantidadyValor = document.getElementById('cantidadyValor');
let precio = document.getElementById('precio');
let contador = 0;

let validar = document.getElementById('validar');

//Evento de clic en la sala de cine
cinema.addEventListener("click",function(evento){
    if(evento.target.tagName=="IMG"){
        let idAsientoSeleccionado=evento.target.id

        asientos.forEach(function(hilera){
            hilera.forEach(function(asiento){
                if(asiento.id==idAsientoSeleccionado){

                    //encontre el asiento donde el usuario se quiere sentar
                    if(asiento.estado==0){
                        asiento.estado=1
                        evento.target.src="../../assets/img/cinema-chair (2).png"

                        contador++
                        


                    }else if(asiento.estado==1){
                        asiento.estado=0
                        contador--
                        evento.target.src="../../assets/img/cinema-chair.png"
                    }

                    validar.addEventListener("click",function(){

                        console.log(contador)
                        cantidadyValor.textContent=contador

                        let cantidad;
                        cantidad= contador * 10000

                        precio.textContent=cantidad
                           
                    })

                }
            })
        })



    }

    /*validar.addEventListener("click",(a)=>{
        if(a.target.Classlist.contains('btn-info')){
            contador++
            cantidadyValor.textContent=contador;
        }
       if(a.tanget.Classlist.contains('btn-info')){
        let cantidad;
        cantidad= contador * 13000;
        precio.textContent=cantidad;
        
       }

      
    })*/
})