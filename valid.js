var titulo = document.querySelector("#titulo");
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    console.log(tdpeso);
    var peso = tdpeso.textContent;
    console.log(peso);

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    console.log(altura);


    var tdimc = paciente.querySelector(".info-imc");

    tdimc.textContent = imc;

    var alturavalid = true;
    var pesovalid = true;

    if (peso <= 0 || peso >= 400){
        console.log("Peso Inválido");
        pesovalid = false;
        tdimc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.00){
        console.log("Altura Inválida");
        alturavalid = false;
        tdimc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(alturavalid && pesovalid){
        var imc = calculaimc(peso, altura);
        tdimc.textContent = imc;
    }
}

function calculaimc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}



