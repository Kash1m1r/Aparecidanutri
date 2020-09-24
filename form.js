var botaoadcionar = document.querySelector("#adicionar-paciente");

botaoadcionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Fui clicado");
    var form = document.querySelector("#forms");
    console.log(form.altura.value);

    // Extrair informações do formulario
    var paciente = obterpaciente(form);

    // Criar tabela
    var pacienteTr = montartabela(paciente);

    // Adcionar paciente na tab
    var tabela = document.querySelector("#tabela-paciente");
    tabela.appendChild(pacienteTr);

    form.reset();

});

function obterpaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaimc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montartabela(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montatd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montatd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montatd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montatd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montatd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montatd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}