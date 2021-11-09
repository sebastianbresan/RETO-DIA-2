

function calcular(){

let monto =  document.getElementById(`monto`).value;

let slider = document.getElementById(`labelCuotas`).innerHTML; 
let cuotas = parseInt(slider);
let tipo = null;
let interes;
if(document.getElementById('variable').checked){
    interes = "1,5";
    int = 1.015;
    tipo= "variable"
}
else{
    interes = "1,22";
    int = 1.022;
    tipo = "anual"
}

let resultado = ((monto/cuotas)*int);

document.getElementById(`resultado`).innerHTML = resultado;

alert("Usted ha seleccionado un monto de " + monto + "€ en "+ cuotas + " cuotas, con una tasa " + tipo + " del " + interes + "%. Su cuota mensual es de " + Math.round(resultado)+ "€" );
    
}