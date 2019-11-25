var estados = [
    { "id": "1", "estado": "SP" },
    { "id": "2", "estado": "RJ" },
    { "id": "3", "estado": "MG" },
    { "id": "4", "estado": "BA" },
]

var cidades = [
    { "id": "1", "idestado": "1", "cidade": "CAMPINAS" },
    { "id": "2", "idestado": "1", "cidade": "SOROCABA" },
    { "id": "3", "idestado": "2", "cidade": "NITEROI" },
    { "id": "4", "idestado": "2", "cidade": "CABO FRIO" },
    { "id": "5", "idestado": "2", "cidade": "ANGRA" },
    { "id": "6", "idestado": "3", "cidade": "BELO HORIZONTE" },
    { "id": "7", "idestado": "3", "cidade": "BETIM" },
    { "id": "8", "idestado": "3", "cidade": "EXTREMA" },
    { "id": "9", "idestado": "4", "cidade": "SALVADOR" },
    { "id": "10", "idestado": "4", "cidade": "PORTO SEGURO" },
]

$(document).ready(function () {
    const $estado = $("#estado")
    $estado.html("<option>Selecione</option>")
    $.each(estados, function (i, estado) {
        $estado.append($('<option>', {
            value: estado.id,
            text: estado.estado
        }))
    })

    $estado.change(function () {
        const idestado = $(this).val();
        const cidadesFiltradas = $.grep(cidades, function (e) {
            return e.idestado == idestado;
        })

        const $cidade = $("#cidade")
        $cidade.html("<option>Selecione</option>");
        $.each(cidadesFiltradas, function (i, cidade) {
            $cidade.append($('<option>', {
                value: cidade.id,
                text: cidade.cidade
            }))
        })
    })

    $("#btnEnviar").click(function () {
        const descricao = $('#descricao').val()
        const data = $("#data").val();
        const preco = $("#preco").val();

        if (descricao == "") {
            $("#mensagem").html("'<div class='alert alert-danger'role='alert'>Campo descrição obrigatório</div>")
        } else {
            var resultado = "<strong>Dados do evento</strong><br/>"
            resultado += "Descrição: " + descricao
            resultado += "<br/>Data: " + data
            resultado += "<br/>Preço: " + preco
            $("#mensagem").html("'<div class='alert alert-success'role='alert'>" + resultado + "</div>")
        }
    });
})