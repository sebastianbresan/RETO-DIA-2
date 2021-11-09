

function calcular(){

let monto =  document.getElementById(`monto`).value;

let slider = document.getElementById(`labelCuotas`).innerHTML; 
let cuotas = parseInt(slider);
let tipo = null;
let interes;
if(document.getElementById('variable').checked){
    interes = 1.5;
    tipo= "variable"
}
else{
    interes = 2.2;
    tipo = "anual"
}

let resultado = (monto*interes)/cuotas;

document.getElementById(`resultado`).innerHTML = resultado;

alert("Usted ha seleccionado un monto de " + monto + "€ en "+ cuotas + " cuotas, con una tasa " + tipo + " del " + interes + ". Su cuota mensual es de " + resultado + "€" );
    
}