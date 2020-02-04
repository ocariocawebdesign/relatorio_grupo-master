function criarRelatorio() {

    var relatorioMes = mesDoRelatorio.value;
    document.write("Relatório referente ao mês: " + relatorioMes + "<hr>");

    var totalReunioesMes = parseFloat(totalDeReunioesMes.value);
    document.write("Total de reuniões = " + totalReunioesMes + "<hr>");

    var totalMembrosMes = parseFloat(MembrosNoMes.value);
    document.write("Total de membros = " + totalMembrosMes + "<hr>");

    var totalSetimaMes = parseFloat(totalSetimaDoMes.value);
    document.write("Total da sétima  = " + totalSetimaMes + "<hr>");

    var totalVisitantesMes = parseFloat(totalDeVisitantes.value);
    document.write("Total de visitantes no mês = " + totalVisitantesMes + "<hr>");

    var totalIngressosMes = parseFloat(totalDeIngressos.value);
    document.write("Total de ingressos = " + totalIngressosMes + "<hr>");

    var saldoAnterior = parseFloat(saldoAnterior.value);
    document.write("Saldo anterior = " + saldoAnterior + "<hr>");

    var mediaSetima = totalSetimaMes / totalReunioesMes;
    document.write("<br>A média de sétima mensal é: R$" + mediaSetima + "<hr>");

    var mediaSetimaMembro = (totalSetimaMes / totalMembrosMes);
    document.write("Total de sétima por membros = " + mediaSetimaMembro + "<hr>");

    document.write("Saldo atual é = " + (saldoAnterior + totalSetimaMes) + "<hr>");

    document.write("Saldo atual é = " + (saldoAnterior + totalSetimaMes) + "<hr>");


}