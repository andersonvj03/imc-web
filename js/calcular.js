var calcular = document.getElementById("calcular");
var padre = document.getElementById("padre");
var label = document.createElement("label");

calcular.addEventListener('click', ()=>{
   
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = peso / (altura*altura);
    
    label.className = "resultado";
    label.innerText = "Tu IMC es: "+Math.round(100*resultado/100);
    padre.appendChild(label);
    /*
    alert("Tu IMC es:" +Math.round(100*resultado/100));
    */
})