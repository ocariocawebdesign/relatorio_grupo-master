var relatorioMes = (prompt("Digite o mês do relatório."));
document.write("Relatório referente ao mês: " + relatorioMes + "<hr>");

var totalReunioesMes = parseInt(prompt("Digite o total de reunioes no mês."));
document.write("Total de reuniões = " + totalReunioesMes + "<hr>");

var totalMembrosMes = parseInt(prompt("Digite o total de membros no mês."));
document.write("Total de membros = " + totalMembrosMes + "<hr>");

/*var totalMembrosMes = parseFloat((totalMembrosMes));*/
var totalSetimaMes = parseFloat(prompt("Digite o valor total da sétima mensal."));
document.write("Total da sétima  = " + totalSetimaMes + "<hr>");

var totalVisitantesMes = parseInt(prompt("Digite o total de visitantes no mês."));
document.write("Total de visitantes no mês = " + totalVisitantesMes + "<hr>");

var totalIngressosMes = parseInt(prompt("Digite o total de ingressos."));
document.write("Total de ingressos = " + totalIngressosMes + "<hr>");

var saldoAnterior = parseInt(prompt("Digite o saldo anterior."));
document.write("Saldo anterior = " + saldoAnterior + "<hr>");

var mediaSetima = totalSetimaMes / totalReunioesMes;
document.write("<br>A média de sétima mensal é: R$" + mediaSetima + "<hr>");
console.log(mediaSetima);

var mediaSetimaMembro = (totalSetimaMes / totalMembrosMes);
document.write("Total de sétima por membros = " + mediaSetimaMembro + "<hr>");

document.write("Saldo atual é = " + (saldoAnterior + totalSetimaMes) + "<hr>");

//var totalVisitantesMes;
//var totalIngressosMes = parseInt(prompt("Digite o total de ingressos."));
//var totalIngressosMes = parseInt(prompt(totalIngressosMes));


//var totalTrocaFichasMes;



/*var saldoAnterior = parseFloat(("Digite o saldo anterior."));
    document.write(saldoAnterior);

    /*var saldoAtua;
    //var vendaliteratura
    var totalReceitas;
    var totalRepasse;
    var aluguelGrupo;
    var manutencaoSala;
    var dispesaServidores;
    var compraLiteratura;
    var despesas;

    var quantidade;

    //objetos
    /*var tipoLiteraura = {

        nome: 'Texto Básico',
        edicao: 'Sexta Edicao',
        quantidade: 52,
        valor: 12.50,
        emEstoque: true
    };
    //console.log();*/

/*function calculaEstoque(QttextoBasico) {

        if (QttextoBasico > 1) {
            emEstoque = true;
            document.write("Texto básico em estoque")
        } else {
            emEstoque = false;
            document.write("Texto básico em falta ");
        }

    }*/

/*var mediaMembrosReuniao = ((totalReunioesMes + totalMembrosMes) / 2);
    var mediaMembrosReuniao = parseInt(mediaMembrosReuniao);

    document.write("O total de membros é: " + mediaMembrosReuniao + ".<br>")

    var mediaIngressosMes = ((totalReunioesMes + totalIngressosMes) / 2);
    var mediaIngressosMes = parseInt(mediaIngressosMes);

    document.write("A média de ingressos: " + mediaIngressosMes + ".");


    console.log(mediaMembrosReuniao, mediaIngressosMes);


    //var QttextoBasico = prompt("Digite a quantidade");
    //var QttextoBasico = parseInt(QttextoBasico);

    //calculaEstoque(QttextoBasico);
    //console.log(calculaEstoque);


*/