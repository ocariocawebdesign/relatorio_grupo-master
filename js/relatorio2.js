// <link type="text/css" rel="stylesheet" href="demo.css">
var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'css/bootstrap.min';
document.head.appendChild(link);


function criarRelatorio() {


    //var conteudoForm = document.getElementById("conteudoForm");
    var ano = anoDoRelatorio.value;
    var nome = nomeDoGrupo.value;
    var secretario = secretarioDoGrupo.value;
    var tesoureiro = tesoureiroDoGrupo.value;
    var rsg = rsgDoGrupo.value;
    var rsgSuplente = rsgSuplenteDoGrupo.value;

    var relatorioMes = mesDoRelatorio.value;
    var totalReunioesMes = parseInt(document.getElementById("reunioesMes").value);
    var totalMembrosMes = parseInt(document.getElementById("membrosNoMes").value);
    var totalSetimaMes = parseFloat(document.getElementById("totalSetimaDoMes").value);
    var totalVisitantesMes = parseInt(document.getElementById("totalDeVisitantes").value);
    var totalIngressosMes = parseInt(document.getElementById("totalDeIngressos").value);
    var saldoAnterior = parseFloat(document.getElementById("saldoAnterior").value);
    var mediaSetima = (totalSetimaMes / totalReunioesMes);
    var mediaSetimaMembro = (totalSetimaMes / totalMembrosMes);

    document.write(
        "<h1>Relatório Mensal</h1><br>" +
        "Nome do grupo: " + nome + "<hr>" +
        "Relatório referente ao mês: " + relatorioMes + "<hr>" +
        "Ano do relatório: " + ano + "<hr>" +
        "Nome do secretário: " + secretario + "<hr>" +
        "Nome do tesoureiro: " + tesoureiro + "<hr>" +
        "Nome do rsg: " + rsg + "<hr>" +
        "Nome do rsg suplente: " + rsgSuplente + "<hr>" +

        "Total de reuniões = " + totalReunioesMes + "<hr>" +
        "Total de membros = " + totalMembrosMes + "<hr>" +
        "Total da sétima  = " + totalSetimaMes.toFixed(2) + "<hr>" +
        "Total de visitantes no mês = " + totalVisitantesMes + "<hr>" +
        "Total de ingressos = " + totalIngressosMes + "<hr>" +
        "Saldo anterior R$" + saldoAnterior.toFixed(2) + "<hr>" +
        "Saldo atual é R$" + (saldoAnterior + totalSetimaMes) + "<hr>" +
        "<br>A média de sétima mensal por reuniões é R$" + mediaSetima.toFixed(2) + "<hr>" +
        "Média de sétima por membro é R$" + mediaSetimaMembro.toFixed(2) + "<br>")

}


//https://www.sejda.com/html-to-pdf conversor html pdf

function relatorioTeste() {

    //var docRelatorio = new Array[ano, nome, secretario];


}

//|ARRAY VETOR
var docRelatorio = ['ano', 'nome', 'secretario'];
console.log(docRelatorio);



/*var criarRelatorio = new jsPDF()

document.write(
    "<h1>Relatório Mensal</h1><br>" +
    "Nome do grupo: " + nome + "<hr>" +
    "Relatório referente ao mês: " + relatorioMes + "<hr>" +
    "Ano do relatório: " + ano + "<hr>" +
    "Nome do secretário: " + secretario + "<hr>" +
    "Nome do tesoureiro: " + tesoureiro + "<hr>" +
    "Nome do rsg: " + rsg + "<hr>" +
    "Nome do rsg suplente: " + rsgSuplente + "<hr>" +

    "Total de reuniões = " + totalReunioesMes + "<hr>" +
    "Total de membros = " + totalMembrosMes + "<hr>" +
    "Total da sétima  = " + totalSetimaMes.toFixed(2) + "<hr>" +
    "Total de visitantes no mês = " + totalVisitantesMes + "<hr>" +
    "Total de ingressos = " + totalIngressosMes + "<hr>" +
    "Saldo anterior R$" + saldoAnterior.toFixed(2) + "<hr>" +
    "Saldo atual é R$" + (saldoAnterior + totalSetimaMes) + "<hr>" +
    "<br>A média de sétima mensal por reuniões é R$" + mediaSetima.toFixed(2) + "<hr>" +
    "Média de sétima por membro é R$" + mediaSetimaMembro.toFixed(2) + "<br>")
    */