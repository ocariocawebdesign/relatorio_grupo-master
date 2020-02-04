    function criarRelatorio() {

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



    /*
    
    
    var relatorioMes = document.getElementById("mesDoRelatorio").value;
        //document.write("Relatório referente ao mês: " + relatorioMes + "<br>");

        var totalReunioesMes = parseInt(document.getElementById("reunioesMes")).value;
        //var totalReunioesMes = parseInt(document.getElementById("reunioesMes"));
        //var totalReunioesMes2 = parseInt(totalReunioesMes);
        //document.write("Total de reuniões = " + totalReunioesMes + "<br>");
        var totalMembrosMes = parseInt(document.getElementById("membrosNoMes"));
        //var totalMembrosMes = parseInt(totalMembrosMes);
        //document.write("Total de membros = " + totalMembrosMes + "<br>");

        var totalSetimaMes = parseFloat(document.getElementById("totalSetimaDoMes"));
        //var totalSetimaMes = parseFloat(totalSetimaMes);
        //document.write("Total da sétima  = " + totalSetimaMes + "<br>");

        var totalVisitantesMes = parseInt(document.getElementById("totalDeVisitantes"));
        //var totalVisitantesMes = parseFloat(totalVisitantesMes);
        //document.write("Total de visitantes no mês = " + totalVisitantesMes + "<br>");

        var totalIngressosMes = parseInt(document.getElementById("totalDeIngressos"));
        //var totalIngressosMes = parseInt(totalIngressosMes);
        //document.write("Total de ingressos = " + totalIngressosMes + "<br>");

        var saldoAnterior = parseFloat(document.getElementById("saldoAnterior"));
        //var saldoAnterior = parseFloat(saldoAnterior);
        //document.write("Saldo anterior = " + saldoAnterior + "<br>");

        var mediaSetima = (totalSetimaMes / totalReunioesMes);
        //document.write("<br>A média de sétima mensal é: R$" + mediaSetima + "<br>");

        var mediaSetimaMembro = (totalSetimaMes / totalMembrosMes);
        //document.write("Total de sétima por membros é R$" + mediaSetimaMembro + "<br>");

        //document.write("Saldo atual é = " + (saldoAnterior + totalSetimaMes) + "<br>");

        //document.write("Saldo atual é = " + (saldoAnterior + totalSetimaMes) + "<br>");

    
    
    
    
    
    
    
    
    
    
    
    
    
    */