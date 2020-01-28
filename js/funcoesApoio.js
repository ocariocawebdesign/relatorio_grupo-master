


function mostra(mensagem) {

    document.write(mensagem);
    pulaLinha();

}

function convertePercentual(alicota) {

    var aliquotaConvert = aliquota * 100;
    mostra("Aliquota: " + aliquotaConvert + "%");

}