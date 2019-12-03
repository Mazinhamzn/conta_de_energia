var enderecoContrato = "0xe5c89c66a7b3976082b14a22242e56500925ec12";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function pagamentoContaEnergia() {
    var textoCampo = document.frmStatus.txtPagamentocontaEnergia.value;
    var pagamentoContaEnergiatx = document.getElementById("pagamentoContaEnergiatx");
    if (textoCampo.length === 8) {
        pagamentoContaEnergiatx.innerHTML = "Enviando transação...";
        contrato.mudaStatusPagamento(textoCampo)
        .then( (transacao) => {
            console.log("pagamentoContaEnergia - Transacao ", transacao);   
            pagamentoContaEnergiatx.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
                buscaStatusContrato();
                pagamentoContaEnergiatx.innerHTML = "Transação realizada.";
            })       
            .catch( (err) => {
                console.error("pagamentoContaEnergia - Aguardando tx ser minerada");
                console.error(err);
                pagamentoContaEnergiatx.innerHTML = "Algo saiu errado: " + err.message;
            });
        })
            .catch( (err) => {
                 console.error("pagamentoContaEnergia");
                console.error(err);
                pagamentoContaEnergiatx.innerHTML = "Algo saiu errado: " + err.message;
        });
    }

function registrarConsumoMensal () {
    var caixaConsumoMensalTx = document.getElementById("caixaConsumoMensalTx");     
    contrato.consumoMensal()
    .then( (consumoMensal) => {
        caixaConsumoMensalTx.innerHTML = consumoMensal;
    })
    .catch( (err) => {
        console.error(err);
        caixaConsumoMensalTx.innerHTML = err;
    });
}
}
