    function criarRelatorio() {

        //var conteudoForm = document.getElementById("conteudoForm");
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
            "Relatório referente ao mês: " + relatorioMes + "<br>" +
            "Total de reuniões = " + totalReunioesMes + "<br>" +
            "Total de membros = " + totalMembrosMes + "<br>" +
            "Total da sétima  = " + totalSetimaMes.toFixed(2) + "<br>" +
            "Total de visitantes no mês = " + totalVisitantesMes + "<br>" +
            "Total de ingressos = " + totalIngressosMes + "<br>" +
            "Saldo anterior R$" + saldoAnterior.toFixed(2) + "<br>" +
            "Saldo atual é R$" + (saldoAnterior + totalSetimaMes) + "<br>" +
            "<br>A média de sétima mensal é: R$" + mediaSetima.toFixed(2) + "<br>" +
            "Média de sétima por membros é R$" + mediaSetimaMembro.toFixed(2) + "<br>"

        )

    }

















    */
